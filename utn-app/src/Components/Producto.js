import React,{Component} from "react"
import '../App.css'

class Producto extends Component {
   constructor(props){
      super(props)
   }

comprar =()=>{
   alert("Veamos el detalle!");
}

   render(){

        return(
            <div class="card">
                <div class="prodid prod">ID: {this.props.producto.id}</div>
                <div class="prodname prod">{this.props.producto.name}</div>
                <div class="proddesc prod">DESCRIPCION: {this.props.producto.description}</div>
                <div class="prodnow prod">AHORA: ${this.props.producto.wholesale_price}</div>
                <div class="prodantes prod">ANTES: ${this.props.producto.price}</div>
                <div class="prodnphoto prod"><img class="prodimg" src={this.props.producto.photo_url}/></div>
                <div class="prodsrock prod">STOCK: {this.props.producto.stock}</div>
                <div class="prodsales prod">VENTAS: {this.props.producto.sales}</div>
                <div class="prodnew prod">CREADO: {this.props.producto.date_add}</div>
                <div class="produpdt prod">UPDATE: {this.props.producto.date_upd}</div>
                <div class="prodbrait prod">BRAITEFK: {this.props.producto.bra_ite_fk}</div>
                <button class=""  onClick={this.comprar}>Ver Detalle</button>
            </div>
        )
   }
}

export default Producto;