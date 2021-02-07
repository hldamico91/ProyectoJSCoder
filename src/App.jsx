import './App.css';
import NavbarComponent from './components/Navbar/';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button';
import ItemLisContainer from './components/containers/ItemListContainer';
import Logo from './components/Navbar/CartWidget';
import ButtonContador from './components/button/ItemCounts';



function App () {
   return (
    <>
    <Logo/>
    <ItemLisContainer greeting={"Bienvenidos a Little Wood"}/>
    <NavbarComponent/>
    <br/>
    <ButtonContador/>
    <br/>
    <ButtonComponent/>


    </>

  );
}

export default App;
