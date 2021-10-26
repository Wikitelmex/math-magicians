import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator.lazy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Math Magicians on building...
        </h2>
        <p>By Alex</p>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
