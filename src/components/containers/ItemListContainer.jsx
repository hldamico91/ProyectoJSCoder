import React, {useState} from 'react';
import { ItemCount } from '../ItemCount';


const ItemListContainer = (props) => {
    const [contador, setContador] = useState(0)

    const onAdd = (stock) => {
        if (contador < stock){
             setContador(contador + 1);
        }
        else {
        }
    }

    const onSubstract =() => {
        if (contador > 1){
            setContador(contador - 1);
         
        } else {
        }
    }
    return (
        <>
        <ItemCount stock={12} contador={contador} onSubstract={onSubstract} onAdd={onAdd} />
        </>
    )

    
}

export default ItemListContainer








