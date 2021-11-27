export function CounterContainer() {
    const [counter, setCounter] = useState(0);
  
    const onIncrement = () => {
      setCounter(counter + 1);
    };
  
    const onDecrement = () => {
      setCounter(counter - 1);
    };
  
    return (
      <div>
        <div>{counter}</div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    );
  }
  