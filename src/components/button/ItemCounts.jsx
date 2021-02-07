import React, { useState } from 'react';
import './style.css';


const ButtonContador = () =>{
    const [carrito, setCarrito] = useState([]);


    return  ( 
        <>
        {console.log(carrito)}
        <button onClick={() => { setCarrito([... carrito, carrito.length-1]) }} className="btn btn-secondary"> - </button>   
        <a> {carrito.length} </a> 
        <button onClick={() => { setCarrito([... carrito, carrito.length+1]) }} className="btn btn-secondary"> + </button>        

        {console.log(carrito.length)}

        </>
    )

}



export default ButtonContador


