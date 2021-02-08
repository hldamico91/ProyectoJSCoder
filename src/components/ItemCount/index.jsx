import "./style.css"

export const ItemCount = ({stock, onAdd, contador, onSubstract}) => {
    return (
        <>
        <button  className="btn btn-secondary" onClick= {() => { onSubstract(stock)}}> - </button>
        <b>{contador}</b>
        <button className="btn btn-secondary" onClick= {() => { onAdd(stock)}}> + </button>
        <div/>
        </>

    );

};
