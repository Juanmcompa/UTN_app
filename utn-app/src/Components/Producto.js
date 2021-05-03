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
            <div class="card">
                <div class="prodname prod">{this.props.producto.name}</div>
                <div class="proddesc prod">{this.props.producto.desc}</div>
                <div class="prodprice prod">PRECIO: ${this.props.producto.price}</div>
                <div class="prodsku prod">SKU: {this.props.producto.sku}</div>
                <div class="prodcant prod">CANTIDAD: {this.props.producto.cant}</div>
                <button class=""  onClick={this.comprar}>Comprar</button>
            </div>
        )
   }
}

export default Producto;