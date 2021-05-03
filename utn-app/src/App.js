import Home from "./Components/Home"
import Menu from "./Components/Menu"
import Login from "./Components/Login"
import Registro from "./Components/Registro"
import './App.css';

function App() {
  const subtitulo="Test"

  return (
    <div className="App">
        <Menu />
        <Home titulo="TituloHome" subtitulo={subtitulo}/>
        <Login />
        <Registro />
    </div>
  );
}

export default App;
