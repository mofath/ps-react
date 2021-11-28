import CodeExample from '../CodeExample';
import componentData from '../../../config/componentData';
import DeleteWarning from '../../components/DeleteWarning/DeleteWarning';
import Note from '../Note';

export default function RenderProps() {
  return (
    <div>
      <p className='example__title'>Render Props</p>

      <div className='example__text'>
        Render props is a React compoment that takes as a child render props
        function, that tells parent how to render
      </div>

      <ul className='list-item'>
        <p>Why render props?</p>
        <li>Parent child components</li>
        <li>
          Separation of concerns: the parent may have a logic that the child
          doesn't have to know.
        </li>
        <li>Design patterns: we can seperate logic layer from view layer</li>
        <li>
          Reuse parent logic: you can use parent logic into multible views
          componentx
        </li>
        <li>
          Dependency injection: the parent can inject additional information
          into the child
        </li>
      </ul>

      <CodeExample code={componentData['DeleteWarning']} />
      <div className='example__component'>
        <DeleteWarning />
      </div>

      <div className='example__text'>
        The DeleteWarning component takes a function as a child, and inject some
        properties at the render function and executes it.
      </div>

      <Note type='info'>
        A Render prop is a way to share code between React compoments using a
        function property. The property defines what is rendered, th compoment just injects it inside the UI.
      </Note>
    </div>
  );
}
