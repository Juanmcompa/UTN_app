import React from 'react';
import Row from './Row';
import ReactDOM from 'react-dom';
import './App.css';

function Formulario({ filas }){
    
    return(
        <div className="Formulario">
            <div>
                {filas.map(function(fila,index){
                   return(<Row etiqueta={fila.label} tipo={fila.type} 
                    index={index}/>)
                })}
            </div>
                <input className="btn" type="submit"/>
        </div>
    );
}

export default Formulario;