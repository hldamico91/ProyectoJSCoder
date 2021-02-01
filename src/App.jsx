import './App.css';
import NavbarComponent from './components/Navbar/';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button';
import ItemLisContainer from './components/containers/ItemListContainer';
import Logo from './components/Navbar/CartWidget';


function App() {
   return (
    <>
    <Logo/>
    <ItemLisContainer greeting={"Bienvenidos a Little Wood"}/>
    <NavbarComponent/>
    </>

  );
}

export default App;
