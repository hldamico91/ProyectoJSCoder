import "./style.css"

export const ItemCount = ({stock, onAdd, contador, onSubstract}) => {
    return (
        <>
        <div>
        <button  className="btn btn-secondary" onClick= {() => console.log("Restaste 1 item.  " + "Hay " + (contador - 1)  + " items en el carrito ") + onSubstract(stock)}> - </button>
        <b>{contador}</b>
        <button className="btn btn-secondary" onClick= { () => console.log("Hay " + (contador + 1)  + " items en el carrito ") +  onAdd(stock)} > + </button>
        </div>
        </>

    );

};


