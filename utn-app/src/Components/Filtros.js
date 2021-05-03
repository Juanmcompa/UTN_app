import React from "react"
import '../App.css'

class Filtros extends React.Component {
   /*constructor(){
       console.log("Se genera el Home")
   }*/
   componentWillMount(){
       console.log("Se montará el filtro")
   }

   componentDidMount(){
    console.log("Se montó el filtro")
}


   render(){
        return(
            <div class="col">
            <button class="" onClick={this.props.clickCambiarTitulo}>Cambiar título</button>
            <button class="" onClick={this.props.clickFiltrarProduto}>Filtrar +$35k</button>
            <button class="" onClick={this.props.clickFiltrarProduto2}>Filtrar -$35k</button>
            <button class="" onClick={this.props.clickverProductos}>Ver todos</button>
            </div>
        )
   }
}

export default Filtros;