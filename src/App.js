import logo from './logo.svg';
import './App.css';
import Contador from './components/contador/contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Esto es una prueba de React</h1>
        <Contador />
      </header>
    </div>
  );
}

export default App;
