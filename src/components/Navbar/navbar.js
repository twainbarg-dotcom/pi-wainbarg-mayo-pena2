import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 
  render() {
    return (
       <><h1>UdeSA Movies</h1>
        <nav>
             <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <Link to="/" class="nav-link"> Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Peliculas" class="nav-link"> Peliculas</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Series" class="nav-link"> Series</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Favoritas" class="nav-link"> Favoritas</Link>
                </li>
                <li class="nav-item ml-auto">
                    <Link to="/Registro" class="nav-link"> Registro</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Login" class="nav-link"> Login</Link>
                </li>
            </ul>
           
        </nav>
        </>
    )
}
}
export default Navbar;