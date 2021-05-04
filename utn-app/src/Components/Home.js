import React from "react"
import '../App.css'
import Producto from './Producto'
import Filtros from './Filtros'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productos: [],
            loading:true,
            titulo:"Titulo original",
            mensaje:"mensaje"
        }
   }

   componentDidMount(){
        console.log("ComponentDidMount")
       fetch("https://jsonfy.com/items")
       .then(res=>res.json())
       .then(producto=>{
           this.setState({
               productos:producto, 
               loading:false
           })
       })
       console.log("Publica datos jsonfy en consola")
   }
   
   filtrarProducto = ()=>{
       this.setState({
        productos: [
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
            }]
   })
}

filtrarProducto2 = ()=>{
    this.setState({
     productos: [
        {
            name:"LG K9 16 GB aurora black 2 GB RAM",
            desc:"Momentos únicos, capturas reales                     Capturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 8 Mpx.",
            price:31.675,
            sku:"34HG78DF",
            cant:5
        }]
})
}

VerProductos = ()=>{
    this.setState({
        productos: [
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
            },
            {
                name:"LG K9 16 GB aurora black 2 GB RAM",
                desc:"Momentos únicos, capturas reales                     Capturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 8 Mpx.",
                price:31.675,
                sku:"34HG78DF",
                cant:5
            }]
})
}

cambiarTitulo = ()=>{
    this.setState({
     titulo:"Titulo modificado"
    })
}   



render(){
    if(this.state.loading){
        return(
            <div>
                    Cargando página
            </div>
        )
    }else{
        return(
            <div>
                    <div>Este es el Home</div>
                    <div>Titulo: {this.state.titulo}</div>
                    
                    <div class="orden">
                    {this.state.productos.map(producto=>
                    <Producto producto={producto}/>)}
                    </div>
                    <Filtros clickCambiarTitulo={this.cambiarTitulo} clickFiltrarProduto={this.filtrarProducto} clickFiltrarProduto2={this.filtrarProducto2} clickverProductos={this.VerProductos}/>
                    
                </div>
        )
    }
    
}
}

export default Home;