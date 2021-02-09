import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from '../button';
import ItemListContainer from '../containers/ItemListContainer';
import  "./style.css"


const Item = ({products}) => {
    return <div className="card-group" className="card">
    <div className="card">
      <div className="card-body">
      <img className="imagenProducto"src={products.image}/> 
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">{products.description}</p>
        <div className="text"><b> Precio $ {products.price}</b></div>
      </div>
      <div className="card-footer">
        <ItemListContainer className="BottonCard"/>
      </div>
      <ButtonComponent className="BottonCard" />

    </div>
    </div>




} ;

export default Item