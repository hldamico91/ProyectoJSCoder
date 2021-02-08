import './App.css';
import NavbarComponent from './components/Navbar/';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemLisContainer from './components/containers/ItemListContainer';
import Logo from './components/Navbar/CartWidget';
import ButtonComponent from './components/button';



function App () {
   return (
    <>
    <Logo/> <h2>Little Wood</h2>
    <NavbarComponent/>
    <br/>
    <ItemLisContainer greeting={"Bienvenidos a Little Wood"}/>
    <ButtonComponent/>




    </>

  );
}

export default App;
