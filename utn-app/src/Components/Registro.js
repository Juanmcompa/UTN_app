import React from "react"
import '../App.css'

class Registro extends React.Component {
   /*constructor(){
       console.log("Se genera el Home")
   }*/
   render(){
        return(
            <form class="Registro">
            <div class="container">
              <h1>Registro</h1>
              <p>Por favor rellene los campos para registrarse</p>              
            
            <div class="rellenar">
                <label for="nombre"><b>Nombre</b></label>
              <input type="text" placeholder="Ingrese Nombre" name="nombre" id="nombre" required/>

              <label for="apellido"><b>Apellido</b></label>
              <input type="text" placeholder="Ingrese Apellido" name="apellido" id="apellido" required/>

              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Ingrese Email" name="email" id="email" required/>

              <label for="tel"><b>Teléfono</b></label>
              <input type="text" placeholder="Ingrese Teléfono" name="tel" id="tel" required/>
          
              <label for="psw"><b>Contraseña</b></label>
              <input type="password" placeholder="Ingrese Contraseña" name="psw" id="psw" required/>
          
              <label for="psw-repeat"><b>Repetir Contrasela</b></label>
              <input type="password" placeholder="Confirme Contraseña" name="psw-repeat" id="psw-repeat" required/>
                        
              <p>Al completar este formulario usted acepta nuestro <a href="#">Términos y Condiciones</a>.</p>
              <button type="submit" class="registerbtn btn">Registrarse</button>
            </div>
            </div>
            
          
            <div class="container signin">
              <p>¿Ya tenés una cuenta? <a href="#">Loguearte</a>.</p>
            </div>
          </form> 
        )
   }
}

export default Registro;