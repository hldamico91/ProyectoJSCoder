import React, {useState} from 'react';
import { ItemCount } from '../ItemCount';


const ItemListContainer = (props) => {
    const [contador, setContador] = useState(0)

    const onAdd = (stock) => {
        if (contador < stock){
             setContador(contador + 1);
        }
        else {
            console.log("nos quedamos sin stock");
        }
    }

    const onSubstract =() => {
        if (contador > 1){
            setContador(contador - 1);
         
        } else {
            console.log("el valor es menor a lo que te podemos vender")
        }
    }



    return (
        <>

        <ItemCount stock={12} contador={contador} onSubstract={onSubstract} onAdd={onAdd} />

        </>

    )



}

export default ItemListContainer
