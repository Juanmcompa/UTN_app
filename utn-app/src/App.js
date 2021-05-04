import Home from "./Components/Home"
import Menu from "./Components/Menu"
import Login from "./Components/Login"
import Registro from "./Components/Registro"
import './App.css';
import {Link, Router} from 'react-router';
import { BrowserRouter,Route } from 'react-router-dom';



function App() {
  const subtitulo="Test"

  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" component={Home} exact />
      <Route path="/alta" component={Registro} exact />
      <Route path="/log" component={Login} exact />
      ¿Podría meter un footer?
    </BrowserRouter>



    /*<div className="App">
        <Menu />
        <Home titulo="TituloHome" subtitulo={subtitulo}/>
        <Login />
        <Registro />
    </div>*/
  );
}

export default App;
