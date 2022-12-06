import './App.css';
import {useEffect, useState} from "react"

// Counter Component

function Counter(props) {
    
    const [counter, setCounter] = useState(0)
    const {delta,maximum,handleReset, reset, setReset,maximumSoFar, setmaximumSoFar} = props



    function increment() {
        if(counter + delta > maximum) {
            alert("You have reached to the maximum value")
            setCounter(0)
        }
        else {
            if(counter + delta > maximumSoFar)
                setmaximumSoFar(counter + delta)
                
            setCounter(counter => counter+delta)
        }
    }


    useEffect(()=>{
        setCounter(0)
        setReset(false)
    },[reset])


  return (
    <div>
        <p className="counter-content">Counter is {counter}</p>
        <button onClick={increment}>Click here to increment one</button>
        <button onClick={handleReset}>Click here to reset</button>
        
    </div>
  )
}

export default Counter;
