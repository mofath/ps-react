var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js'),
};

const enableWatchMode = process.argv.slice(2) === '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar
    .watch([paths.examples, paths.components])
    .on('change', function (event, path) {
      generate(paths);
    });
} else {
  // Generate component metadata
  generate(paths);
}

function generate(paths) {
  let errors = [];
  let componentData = {};

  getDirectories(paths.components).map((componentName) => {
    try {
      const { name, code } = getComponentData(paths, componentName);
      componentData[name] = code;
    } catch (error) {
      errors.push(
        'An error occurred while attempting to generate metadata for ' +
          componentName +
          '. ' +
          error
      );
    }
  });

  writeFile(
    paths.output,
    'module.exports = ' + JSON.stringify(errors.length ? errors : componentData)
  );
}

function getComponentData(paths, componentName) {
  var content = readFile(
    path.join(paths.components, componentName, componentName + '.jsx')
  );

  return {
    name: componentName,
    code: content,
  };
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(examplesPath, componentName);
  return examples.map((file) => {
    var filePath = path.join(examplesPath, componentName, file);
    var content = readFile(filePath);
    var info = parse(content);
    return {
      // By convention, component name should match the filename.
      // So remove the .jsx extension to get the component name.
      name: file.slice(0, -3),
      description: info.description,
      code: content,
    };
  });
}

function getExampleFiles(examplesPath, componentName) {
  var exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function (file) {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function (file) {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function (err) {
    err
      ? console.log(chalk.red(err))
      : console.log(chalk.green('Component data saved.'));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
