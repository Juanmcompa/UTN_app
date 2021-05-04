import Home from "./Pages/Home"
import Menu from "./Components/Menu"
import Login from "./Pages/Login"
import Detalle from "./Pages/Detalle"
import Registro from "./Pages/Registro"
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
      <Route path="/producto/:id" component={Detalle} exact />
      ¿Podría meter un footer, no?
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
