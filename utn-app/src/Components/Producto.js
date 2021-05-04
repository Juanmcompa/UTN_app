import React,{Component,useState} from "react"
import {Link} from "react-router-dom"

import '../App.css'
function Producto(props){
   const {producto,titulo} = props
   const{id,name,description,wholesale_price,price,photo_url,stock,sales,date_add,date_upd,bra_ite_fk}=props.producto
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
          <div class="prodid prod">ID: {id}</div>
          <div class="prodname prod">{name}</div>
          <div class="proddesc prod">DESCRIPCION: {description}</div>
          <div class="prodnow prod">AHORA: ${wholesale_price}</div>
          <div class="prodantes prod">ANTES: ${price}</div>
          <div class="prodnphoto prod"><img class="prodimg" src={photo_url}/></div>
          <div class="prodsrock prod">STOCK: {stock}</div>
          <div class="prodsales prod">VENTAS: {sales}</div>
          <div class="prodnew prod">CREADO: {date_add}</div>
          <div class="produpdt prod">UPDATE: {date_upd}</div>
          <div class="prodbrait prod">BRAITEFK: {bra_ite_fk}</div>
          <button class="" onClick={comprar}>Comprar</button>
          <button><Link to={"/producto/"+id}>Detalle</Link> </button>
          
          {mensaje}
      </div>
  )
}
export default Producto;