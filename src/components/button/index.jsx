import './style.css';
import React, { useState } from 'react';
import { ItemCount } from '../ItemCount';
import ItemListContainer from '../containers/ItemListContainer';

const ButtonComponent = () =>{
    const [carrito, setCarrito] = useState([]);

    return  ( 
        <>
        {console.log(carrito)}
        <button  onClick={() => setCarrito([... carrito]) + console.log("Se ha agregado el producto al carrito") } className="btn btn-secondary"> Agregar al carrito </button>        
        </>
    )

}

    
export default ButtonComponent

