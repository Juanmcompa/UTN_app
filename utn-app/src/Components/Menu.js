import React from "react"
import '../App.css'
import {Link} from "react-router-dom"

class Home extends React.Component {
   /*constructor(){
       console.log("Se genera el Home")
   }*/
   render(){
        return(
            <nav class="Menu">
            <ul>
            <li><Link to="/alta">Registro</Link></li>
            <li id="register"><Link to="/">Ver Productos</Link></li>
            <li><Link to="/log">Login</Link></li>
          </ul>
          </nav>
        )
   }
}

export default Home;