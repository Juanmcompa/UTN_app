import logo from './logo.svg';
import './App.css';
import './Formulario'
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

export default App;
