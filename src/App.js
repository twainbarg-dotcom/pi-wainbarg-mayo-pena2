import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import CrearCuenta from "./screens/CrearCuenta/CrearCuenta";
import Favoritos from "./screens/Favoritos/Favoritos";
import { Switch, Route } from "react-router-dom";
import Buscador from "./components/Buscador/Buscador";
import Peliculas from "./components/Peliculas/Peliculas";




function App() {
  return (
    <div className="App"> 
      <Navbar NavItem1="Home" NavItem2="AboutUs" NavItem3="Personajes" UserName="Walter White"/>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={CrearCuenta} />
          <Route path="/favoritos" component={Favoritos} />
       </Switch>
      <Buscador/>  
      <Peliculas/> 
      <Footer/>
      
    </div> 
  );
}

export default App;