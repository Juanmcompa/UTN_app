import React from "react"
import '../App.css'

class Filtros extends React.Component {
   /*constructor(){
       console.log("Se genera el Home")
   }*/
   render(){
        return(
            <div>
            <button class="btn" onClick={this.props.clickCambiarTitulo}>Cambiar título</button>
            <button class="btn" onClick={this.props.clickFiltrarProduto}>Filtrar +$199</button>
            </div>
        )
   }
}

export default Filtros;