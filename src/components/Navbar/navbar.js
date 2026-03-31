import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    let usuario = localStorage.getItem("user");

    if (usuario !== null) {
      this.setState({ user: usuario });
    }
  }

  render() {
    return (
      <header className="header">

        
        <h1>UdeSA Movies</h1>

        <nav className="nav-bar">

         
          <ul className="nav-left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/peliculas">Películas</Link></li>
            <li><Link to="/series">Series</Link></li>

            
            {this.state.user !== null && (
              <li><Link to="/favoritos">Favoritos</Link></li>
            )}
          </ul>

          
          <ul className="nav-right">

            
            {this.state.user === null && (
              <>
                <li><Link to="/register">Registro</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}

            
            {this.state.user !== null && (
              <li className="user">Bienvenido: {this.state.user}</li>
            )}

          </ul>

        </nav>

      </header>
    );
  }
}

export default Navbar;