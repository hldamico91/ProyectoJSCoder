import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from '../button';
import ItemListContainer from '../containers/ItemListContainer';
import  "./style.css"

const Item = ({products}) => {
    return <div class="card-group" className="card">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{products.name}</h5>
        <p class="card-text">{products.description}</p>
        <div class="text"><b> Precio $ {products.price}</b></div>
      </div>
      <div class="card-footer">
        <ItemListContainer className="BottonCard"/>
      </div>
      <ButtonComponent className="BottonCard" />

    </div>
    </div>




} ;

export default Item