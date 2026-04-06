import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">UdeSA Movies</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/peliculas">Películas</Link></li>
          <li><Link to="/series">Series</Link></li>

          {this.state.sesionActiva === true &&
            <li><Link to="/favoritos">Favoritas</Link></li>
          }

          {this.state.sesionActiva === false &&
            <li className="nav-right"><Link to="/register">Registro</Link></li>
          }
          {this.state.sesionActiva === false &&
            <li><Link to="/login">Login</Link></li>
          }
        </ul>
      </nav>
    );
  }
}

export default Navbar;