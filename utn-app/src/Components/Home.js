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
                    price:100
                },
                {
                    id:2,
                    name:"moto x",
                    price:300
                },
                {
                    id:3,
                    name:"moto z",
                    price:400
                }
            ]
        }
   }
   
   filtrarProducto = ()=>{
       this.setState({
        productos: [
            {
                id:2,
                name:"moto x",
                price:300
            },
            {
                id:3,
                name:"moto z",
                price:400
            }]
   })
}

   render(){
   
        return(
            <div>
            <div>Titulo: {this.props.titulo}</div>
            <div>Home</div>
            {this.state.productos.map(producto=>
            <div>
                <p>{producto.name}</p>
                <p>{producto.price}</p>
            </div>)}
            <button onClick={this.filtrarProducto}>+$199</button>
            
            </div>
        )
   }
}

export default Home;