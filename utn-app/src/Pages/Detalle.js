import React, { useState,useEffect } from "react"
import '../App.css'
import Producto from '../Components/Producto'

function Detalle(props) {
    console.log(props.match.params.id)
    const id = props.match.params.id;
const [prod,setProducto] = useState({});
const [loading,setLoading] = useState(true);
const [mensaje,setMensaje] = useState("");
//Este era el DIDMount
useEffect(
    ()=>{
        console.log("ComponentDidMount")
        fetch("https://jsonfy.com/items/"+id)
        .then(res=>res.json())
        .then(producto=>{
            console.log(producto)
            setProducto(producto[0]);
            setLoading(false);
        
        })
    },
    []
)


    if(loading){
        return(
            <div>
                    Cargando producto...
            </div>
        )
    }else{
        return(
            <div>
                    <div>Este es el Detalle de tu Producto</div>
                    <Producto producto={prod}/>
                   
                </div>
        )
    }
    
}

export default Detalle;