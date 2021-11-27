import CounterContainerImproved from '../../components/CounterContainerImproved/CounterContainerImproved';
import CounterContainer from '../../components/CounterContainer/CounterContainer';
import CodeExample from '../CodeExample';
import componentData from '../../../config/componentData';

export default function StaleStateExample() {
  return (
    <div>
      <p className='example__title'>Stale State</p>

      <div className='example__text'>
        Stale state setState() executes asynchronously. Thus the state or props
        that are used to perform the update could be stale at this point in
        time. It could lead to bugs in your local state management, because you
        would update the state based on stale properties. Or encounter a
        scenario where useState hook doesn't appear to be updating the value.
        This can occur when you're mutating the state value in place and then
        calling setState.
      </div>

      <div className='example__text'>
        React performs a quick comparison so it will bail out of an update when
        the object instance is the same which will result in a stale value.
      </div>

      {/* Uncontrolled Input */}
      <CodeExample code={componentData['CounterContainer']} />
      <div className='example__component'>
        <CounterContainer
          onClick={(val) => alert('CounterContainer: ' + val)}
        />
      </div>

      <div className='example__text'>
        Executing onIncrement() or onDecrement(), multiple times could lead to a
        bug. Because both methods depend on the previous state, it could use a
        stale state when the asynchronous update wasn’t executed but the method
        invoked another time. It becomes even more error prone when multiple
        functions that use setState() depend on the previous state.
      </div>

      <div className='example__text'>
        We can refactor the example to use the functional state updating
        approach.
      </div>

      <CodeExample code={componentData['CounterContainerImproved']} />
      <div className='example__component'>
        <CounterContainerImproved />
      </div>

      <div className='example__text'>
        Now the value comes from the local state as single source of truth. It
        cannot get out of sync with the native DOM node state.
      </div>

      <ul className='list-item'>
        <p>The functional approach opens up two more benefits:</p>
        <li>
          <strong>First,</strong>
          the function that updates the state is a pure function. There are no
          side-effects. The function always will return the same output when
          given the same input. It makes it predictable and uses the benefits of
          functional programming.
        </li>
        <li>
          <strong>Second,</strong> since the function is pure, it can be tested
          easily in an unit test and independently from the component. It gives
          you the opportunity to test your local state updates. You only have to
          extract the function from the component.
        </li>
      </ul>

      <ul className='list-item'>
        <p>
          When to use the object and when to use the function in useState() ?
        </p>
        <li>
          Always use this.setState() with a function when you depend on previous
          state or props.
        </li>
        <li>
          Only use this.setState() with an object when you don’t depend on
          previous properties.
        </li>
        <li>
          In case of uncertainty, default to use setState() with a function.
        </li>
      </ul>
    </div>
  );
}

// when to use the object and when to use the function in useState() ?
// • Always use this.setState() with a function when you depend on previous state or props.
// • Only use this.setState() with an object when you don’t depend on previous properties.
// • In case of uncertainty, default to use this.setState() with a function.

// when to use the object and when to use the function in useState() ?
// • Always use this.setState() with a function when you depend on previous state or props.
// • Only use this.setState() with an object when you don’t depend on previous properties.
// • In case of uncertainty, default to use this.setState() with a function.
