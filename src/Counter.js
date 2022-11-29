import './App.css';
import {useState} from "react"

function Counter() {
    
    const [counter, setCounter] = useState(0)
    const [delta, setDelta] = useState(1)

    function increment() {
        setCounter(counter => counter+delta)
    }

    function reset() {
        setCounter(0)
    }

    function handleDeltaChange(e) {
        setDelta(Number(e.target.value))
    }
  return (
    <div>
        <input type="number" value={delta} onChange={handleDeltaChange}></input>     
        <p className="counter-content">Counter is {counter}</p>
        <button onClick={increment}>Click here to increment one</button>
        <button onClick={reset}>Click here to reset</button>
        
    </div>
  )
}

export default Counter;
