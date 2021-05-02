import React from 'react';
import ReactDOM from 'react-dom';

function Row({ etiqueta, tipo, index }){
    return(
        <div className="Row" key={index}>
            <label>{etiqueta}</label>
            <input type={tipo}/>
        </div>
    );
}

export default Row;