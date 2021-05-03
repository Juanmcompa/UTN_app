import React from "react"
import '../App.css'

class Home extends React.Component {
   /*constructor(){
       console.log("Se genera el Home")
   }*/
   render(){
        return(
            <nav class="Menu">
            <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          </nav>
        )
   }
}

export default Home;