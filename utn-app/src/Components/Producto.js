import React,{Component,useState} from "react"
import '../App.css'
function Producto(props){
   const {producto,titulo} = props
   const [mensaje,setMensaje]=useState("")

   const comprar = ()=>{
      if(props.producto.stock-1!==0){
         setMensaje("No hay stock")
      }else{
         setMensaje("Gracias por su compra")
      }
   }

   return(
      <div class="card">
         {titulo}
          <div class="prodid prod">ID: {producto.id}</div>
          <div class="prodname prod">{producto.name}</div>
          <div class="proddesc prod">DESCRIPCION: {producto.description}</div>
          <div class="prodnow prod">AHORA: ${producto.wholesale_price}</div>
          <div class="prodantes prod">ANTES: ${producto.price}</div>
          <div class="prodnphoto prod"><img class="prodimg" src={producto.photo_url}/></div>
          <div class="prodsrock prod">STOCK: {producto.stock}</div>
          <div class="prodsales prod">VENTAS: {producto.sales}</div>
          <div class="prodnew prod">CREADO: {producto.date_add}</div>
          <div class="produpdt prod">UPDATE: {producto.date_upd}</div>
          <div class="prodbrait prod">BRAITEFK: {producto.bra_ite_fk}</div>
          <button class="" onClick={comprar}>Comprar</button>
          
          {mensaje}
      </div>
  )
}
export default Producto;