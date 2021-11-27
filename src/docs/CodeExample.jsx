import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core'; // require only the core library
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const CodeExample = ({ code }) => {
  const [highlightedCode, setHighlightedCode] = useState(code);
  const [showCode, setShowCode] = useState(false);

  const toggleCode = (event) => {
    event.preventDefault();
    setShowCode(!showCode);
  };

  useEffect(() => {
    setHighlightedCode(hljs.highlightAuto(code).value);
  }, [code]);

  return (
    <div className='example__code'>
      <p>
        <a href='/' onClick={toggleCode}>
          {showCode ? 'Hide' : 'Show'} Code
        </a>
      </p>

      {showCode && (
        <pre className='hljs'>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      )}
    </div>
  );
};

CodeExample.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeExample;
