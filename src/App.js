import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Login from "./screens/Login/login";
import Home from "./screens/Home/home";
import CrearCuenta from "./screens/CrearCuenta/crearCuenta";
import Favoritos from "./screens/Favoritos/favoritos";
import { Switch, Route } from "react-router-dom";




function App() {
  



  return (
    <div className="App"> 
      <Navbar NavItem1="Home" NavItem2="AboutUs" NavItem3="Personajes" UserName="Walter White"/>
        <Switch>
          <Route path="/home" exact={true} component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={CrearCuenta} />
          <Route path="/favoritos" component={Favoritos} />
       </Switch>
          
      <Footer/>
      
    </div> 
  );
}

export default App;