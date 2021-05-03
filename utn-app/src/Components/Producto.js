import React,{Component} from "react"
import '../App.css'

class Producto extends Component {
   constructor(props){
      super(props)
   }

   render(){

        return(
            <div>
                <div>ID: {this.props.producto.id}</div>
                <div>NOMBRE: {this.props.producto.name}</div>
                <div>PRECIO: {this.props.producto.price}</div>
            </div>
        )
   }
}

export default Producto;