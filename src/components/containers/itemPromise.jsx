import productList from "../mocks/productList"
import *as React from "react";
import ItemList from "../Navbar/ItemList/ItemList"


const ItemPromise = ({}) => {
    const[products, setProducts] = React.useState([])    

React.useEffect(() => {
    const myPromise = new Promise ((resolve, reject) => {
        setTimeout(() => resolve(productList), 3000);
    });
        myPromise.then((result) => setProducts(result));

},[]);

        return(
            <div>
                <h2>Bienvenidos a Little Wood</h2>
                <ItemList products={products}/>
            </div>
        );
        }

 export default ItemPromise