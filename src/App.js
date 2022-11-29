import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import {useState} from "react"

function App() {
  const [delta, setDelta] = useState(1)
  const [maximum, setMaximum] = useState(3)


  function handleDeltaChange(e) {
    setDelta(Number(e.target.value))
}

function handleMaximumChange(e) {
    setMaximum(Number(e.target.value))
}

  return (
    <>
    <div className="header">
      <h1>My First UseState App</h1>
      </div>
    <div className="App">
        <h2>Increment The Counter</h2>
        <label>Set Delta:</label>
        <input type="number" value={delta} onChange={handleDeltaChange}></input>
        <br></br>
        <label>Set Maximum:</label>
        <input type="number" value={maximum} onChange={handleMaximumChange}></input>     

        <Counter delta={delta} maximum={maximum}/>
        <Counter delta={delta} maximum={maximum}/>
    </div>
    </>

  );
}

export default App;
