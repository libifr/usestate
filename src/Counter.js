import './App.css';
import {useState} from "react"

// Counter Component

function Counter(props) {
    
    const [counter, setCounter] = useState(0)
    const {delta,maximum} = props

    function increment() {
        if(counter + delta > maximum) {
            alert("You have reached to the maximum value")
            setCounter(0)
        }
        else {
            setCounter(counter => counter+delta)
        }
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
  )
}

export default Counter;
