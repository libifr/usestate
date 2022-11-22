import './App.css';
import {useState} from "react"

function Counter() {
    
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter => counter+1)
    }

    function reset() {
        setCounter(0)
    }

  return (
    <div>
        <p className="counter-content">Counter is {counter}</p>
        <button onClick={increment}>Click here to increment one</button>
        <button onClick={reset}>Click here to reset</button>
        
    </div>
  );
}

export default Counter;
