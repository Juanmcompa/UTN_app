import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*import './App.css';
import './Formulario';
import Formulario from './Formulario';

function App() {
  const filas = [ {label:'Nombre', type:'text'},
                  {label:'Apellido', type:'text'},
                  {label:'Email', type:'email'},
                  {label:'Télefono', type:'tel'},
                  {label:'Password', type:'password'},
                  {label:'Confirmar Password', type:'password'}
                ]

  return (
    <div className="App">
      <h1>Entrega de TP1</h1>
        <Formulario filas={filas} />
    </div>
  );
}

export default App;*/