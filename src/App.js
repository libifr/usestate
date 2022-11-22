import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <>
    <div className="header">
      <h1>My First UseState App</h1>
      </div>
    <div className="App">
        <h2>Increment The Counter</h2>
        <Counter/>
    </div>
    </>

  );
}

export default App;
