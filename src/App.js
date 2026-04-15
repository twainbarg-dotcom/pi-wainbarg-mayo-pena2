import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import CrearCuenta from "./screens/CrearCuenta/CrearCuenta";
import Favoritos from "./screens/Favoritos/Favoritos";
import { Switch, Route } from "react-router-dom";
import Buscador from "./components/Buscador/Buscador";
import Peliculas from "./components/Peliculas/Peliculas";
import Series from "./components/Series/Series";
import DetalleP from "./screens/DetalleP/DetalleP";
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie";
import Search from "./screens/SearchResults/SearchResults";
import SearchResults from "./screens/SearchResults/SearchResults";
import formulario2 from "./screens/CrearCuenta/CrearCuenta";
import Seriess from "./screens/SeriesScreen/SeriesScreen";



function App() {
  return (
    <div className="App"> 
    <div className="container">
      <Navbar NavItem1="Home" NavItem2="AboutUs" NavItem3="Personajes" UserName="Walter White"/>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/registro" component={CrearCuenta} />
          <Route path="/favoritos" component={Favoritos} />
          <Route path ="/detallePelicula/:id" component={DetalleP} />
          <Route path = "/detalleSerie/:id" component={DetalleSerie}/>
          <Route path = "/resultadosBusqueda/:nombre/:tipo"  component= {SearchResults}  />
          <Route path = "/Series" component= {Seriess}/>
          
       </Switch>
      
      </div>
      <Footer/>
      
    </div> 
  );
}

export default App;