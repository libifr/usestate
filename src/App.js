import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import {useState} from "react"

function App() {
  const [delta, setDelta] = useState(1)
  const [maximum, setMaximum] = useState(1000)
  const [maximumSoFar, setmaximumSoFar] = useState(0)
  const [reset, setReset] = useState(false)

  function handleDeltaChange(e) {
    setDelta(Number(e.target.value))
}

function handleMaximumChange(e) {
    setMaximum(Number(e.target.value))
}

function handleReset() {
  setReset(true)
}


  return (
    <>
    <div className="header">
      <h1>My First UseState App</h1>
      </div>
    <div className="App">
        <h2>Increment The Counter Game</h2>
        <label>Maximum Counter So Far: {maximumSoFar}</label>
        <br></br>
        <label>Set Delta:</label>
        <input type="number" value={delta} onChange={handleDeltaChange}></input>
        <br></br>
        <label>Set Maximum:</label>
        <input type="number" value={maximum} onChange={handleMaximumChange}></input>     

        <Counter 
                delta={delta} 
                maximum={maximum} 
                handleReset={handleReset} 
                reset={reset} 
                setReset={setReset}
                maximumSoFar={maximumSoFar}
                setmaximumSoFar={setmaximumSoFar}
                />
        
        <Counter 
                delta={delta} 
                maximum={maximum} 
                handleReset={handleReset} 
                reset={reset} 
                setReset={setReset}
                maximumSoFar={maximumSoFar}
                setmaximumSoFar={setmaximumSoFar}
                />
    </div>
    </>

  );
}

export default App;
