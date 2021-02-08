import Item from "../../Item/Item";


const ItemList = ({products}) => {
    return(
     <div>
         <ul>
        {products.map((products)=> {
            return <Item key={products.id} products={products}/> 

        })}
        </ul>
    </div>
    );
};

export default ItemList