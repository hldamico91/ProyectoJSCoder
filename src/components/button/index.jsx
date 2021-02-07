import './style.css';
import React, { useState } from 'react';


const ButtonComponent = () =>{
    const [carrito, setCarrito] = useState([]);

    return  ( 
        <>
        {console.log(carrito)}
        <button  onClick={() => { setCarrito([... carrito, {name: 'Tablas'}]) }} className="btn btn-secondary"> Agregar al carrito </button>        
        </>
    )

}



export default ButtonComponent