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
            <li><a href="#">Home</a></li>
            <li><a href="#">Registro</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Productos</a></li>
          </ul>
          </nav>
        )
   }
}

export default Home;