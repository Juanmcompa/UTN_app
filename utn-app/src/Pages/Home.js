import React, { useState,useEffect } from "react"
import '../App.css'
import Producto from '../Components/Producto'
import Filtros from '../Components/Filtros'

function Home(props){

const [productos,setProductos] = useState([]);
const [loading,setLoading] = useState([true]);
const [titulo,setTitulo] = useState(["Título de Home"]);
const [mensaje,setMensaje] = useState("");
//Este era el DIDMount
useEffect(
    ()=>{
        console.log("ComponentDidMount")
        fetch("https://jsonfy.com/items")
        .then(res=>res.json())
        .then(producto=>{
            setProductos(producto);
            setLoading(false);
        
        })
    },
    []
)

 const  filtrarProducto = ()=>{
   setProductos([
    {
        name:"Samsung Galaxy A51 128 GB prism crush white 4 GB RAM",
        desc:"Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        price:47.999,
        sku:"5687RF45",
        cant:20
    },
    {
        name:"Samsung Galaxy A71 128 GB prism crush silver 6 GB RAM",
        desc:"Su batería de 2500 mAh se adapta a tu ritmo de vida y te garantiza energía para toda una jornada con una sola carga.",
        price:63.999,
        sku:"46GD78D90",
        cant:11
        }
    ])
}

const cambiarTitulo = ()=>{
    setTitulo("Titulo modificado")
}   




    if(loading){
        return(
            <div>
                    Cargando página
            </div>
        )
    }else{
        return(
            <div>
                    <div>Este es el Home</div>
                    <div>Titulo: {titulo}</div>
                    
                    <div class="orden">
                    {productos.map(producto=>
                    <Producto producto={producto}/>)}
                    </div>
                    <Filtros clickCambiarTitulo={cambiarTitulo} clickFiltrarProduto={filtrarProducto}/>
                    
                </div>
        )
    }
    
}

export default Home;