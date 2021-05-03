import React from "react"
import '../App.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productos: [
                {
                    id:1,
                    name:"moto g",
                    price:100,
                    photo:"https://images-na.ssl-images-amazon.com/images/I/811m6hJ2WdL._AC_SX679_.jpg"
                },
                {
                    id:2,
                    name:"moto x",
                    price:300,
                    photo:"https://ae01.alicdn.com/kf/HTB15.GhXfvsK1Rjy0Fiq6zwtXXaO/Motorola-Moto-X-2-generaci-n-XT1096-tel-fono-m-vil-Original-libre-con-pantalla-t.jpg"
                },
                {
                    id:3,
                    name:"moto z",
                    price:400,
                    photo:"https://m.media-amazon.com/images/I/41YWHpWk7+L._AC_.jpg"
                }
                
            ],
            titulo:"Home"
        }
   }
   
   filtrarProducto = ()=>{
       this.setState({
        productos: [
            {
                id:2,
                name:"moto x",
                price:300,
                photo:"https://ae01.alicdn.com/kf/HTB15.GhXfvsK1Rjy0Fiq6zwtXXaO/Motorola-Moto-X-2-generaci-n-XT1096-tel-fono-m-vil-Original-libre-con-pantalla-t.jpg"
            },
            {
                id:3,
                name:"moto z",
                price:400,
                photo:"https://m.media-amazon.com/images/I/41YWHpWk7+L._AC_.jpg"
            }]
   })
}

cambiartitulo = ()=>{
    this.setState({
     titulo:"Titulo modificado"
    })
}   

   render(){
   
        return(
            <div>
            <div>Titulo: {this.state.titulo}</div>
            <button onClick={this.cambiartitulo}>Cambiar Título</button>

            <div>Home</div>
            <div class="orden">
            {this.state.productos.map(producto=>
             <div class="card">
                <img src={producto.photo} alt="ProductPhoto" class="productphoto"/>
                <div class="pcontainer">
                    <h4><b>{producto.name}</b></h4>
                    <p class="precio">Precio: $ {producto.price}</p>
                </div>
            </div>)}
            </div>
            <button class="btn" onClick={this.filtrarProducto}>Filtrar +$199</button>
            
            </div>
        )
   }
}

export default Home;