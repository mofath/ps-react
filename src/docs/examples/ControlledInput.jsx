import ControlledInput from '../../components/ControlledInput/ControlledInput';
import UncontrolledInput from '../../components/UncontrolledInput/UncontrolledInput';

import CodeExample from '../CodeExample';
import componentData from '../../../config/componentData';
import Note from '../Note';

export default function ControlledInputExample() {
  return (
    <div>
      <p className='example__title'>Controlled Input and Uncontrolled Input</p>

      <ul className='list-item'>
        <p>There are two ways to use forms in React:</p>
        <li>
          <strong>Uncontrolled:</strong> implies the ref attribute
        </li>
        <li>
          <strong>Controlled:</strong> implies local state
        </li>
      </ul>

      <p className='example__subtitle'>Uncontrolled Input</p>

      <div className='example__text'>
        The value from the input node is retrieved by using the reference to the
        DOM node.
      </div>

      {/* Uncontrolled Input */}
      <CodeExample code={componentData['UncontrolledInput']} />
      <div className='example__component'>
        <UncontrolledInput
          onClick={(val) => alert('UncontrolledInput: ' + val)}
        />
      </div>

      {/* Controlled Input */}

      <p className='example__subtitle'>Controlled Input</p>

      <div className='example__text'>
        Here, You have the state in both, the native DOM node state and local
        state. It is a best practice to have a single source of truth by
        overwriting the native DOM node state by using the value attribute and
        the value from the local state.
      </div>

      <div className='example__text'>
        Now the value comes from the local state as single source of truth. It
        cannot get out of sync with the native DOM node state.
      </div>

      <CodeExample code={componentData['ControlledInput']} />
      <div className='example__component'>
        <ControlledInput onClick={(val) => alert('ControlledInput: ' + val)} />
      </div>

      <Note type='info'>
        <p>
          <b>Unidirectional Data: </b>
        </p>
        <p>
          Flow State in React flows only in one direction. State gets updated by
          using setState() and a component re-renders.{' '}
        </p>
        <p>
          The input field triggers the onChange handler when the input changes.
          The handler alters the local state. The changed local state triggers
          an update lifecycle of the component. The update lifecycle runs the
          render() lifecycle method again. The render() method makes use of the
          updated state. The state flows back to the input field to make it a
          controlled component. The loop is closed. A new loop can be triggered
          by typing something into the input field again.
        </p>
        <p>
          The three advantages in unidirectional data flow over bidirectional
          data flow are <b>predicability</b>, <b>maintainability</b> and{' '}
          <b>performance</b>.
        </p>
      </Note>

      <Note type='info'>
        <p>
          <b>Lifting State: </b>
        </p>
        <p>
          Lifting the state prevents to share too much or too less state in your
          component tree.
        </p>
        <p>
          Lifting state should be used to give components access to all the
          state they need, but not to more state than they need Basically, it is
          a refactoring that you have to do once in a while to keep your
          components maintainable and focused on only consuming the state that
          they need to consume. oth variations of lifting state: lifting state
          up and lifting state down. lifting state up, the state had to be
          lifted up to share the state property in childern components. lifting
          state down, the state could be lifted down to keep the state
          maintainable in the long run. The parent component shouldn’t be
          concerned about that state.
        </p>
      </Note>
    </div>
  );
}
