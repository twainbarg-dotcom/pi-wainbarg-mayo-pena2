import React , {Component} from "react";
import Buscador from "../../components/Buscador/Buscador";
import Peliculas from "../../components/Peliculas/Peliculas";
import Series from "../../components/Series/Series";


function Home(){
return (
    <React.Fragment>
    <Buscador/>  
    <Peliculas/> 
    <Series/>
    </React.Fragment>
)
}

export default Home;

