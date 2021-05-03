import React from "react"
import '../App.css'

class Login extends React.Component {
   /*constructor(){
       console.log("Se genera el Home")
   }*/
   render(){
        return(
            <form class="Login">
            <div class="container">
              <h1>Login</h1>
              <p>Ingresá ahora</p>              
            
            <div class="rellenar">
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Ingrese Email" name="email" id="email" required/>

              <label for="psw"><b>Contraseña</b></label>
              <input type="password" placeholder="Ingrese Contraseña" name="psw" id="psw" required/>
                
            <button type="submit" class="loginbtn btn">Login</button>
            </div>
            </div>
          </form> 
        )
   }
}

export default Login;