import React,{Component} from "react"
import '../App.css'

class Producto extends Component {
   constructor(props){
      super(props)
   }

comprar =()=>{
    alert("Gracias por su compra");
}

   render(){

        return(
            <div>
                <div>ID: {this.props.producto.id}</div>
                <div>NOMBRE: {this.props.producto.name}</div>
                <div>PRECIO: {this.props.producto.price}</div>
                <button class="btn"  onClick={this.comprar}>Comprar</button>
            </div>
        )
   }
}

export default Producto;