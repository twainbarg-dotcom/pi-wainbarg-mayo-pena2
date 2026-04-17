import React from "react";
import { Component } from "react";
import Cookies from "universal-cookie"
import { withRouter } from "react-router-dom/cjs/react-router-dom";

const cookies = new Cookies()




class formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {

      email: "",
      password: ""
    };
  }

  controlaremail(event) {
    this.setState({ email: event.target.value });
    }


  controlarPassword(event) {
    this.setState({ password: event.target.value });


  }

  evitarSubmit(event) {
    event.preventDefault();
    

    let usersStorage = localStorage.getItem("users");

    if (usersStorage !== null) {
      let usersParseado = JSON.parse(usersStorage);

      let usuarioExistente = usersParseado.find(
        (user) => user.email === this.state.email && user.password === this.state.password
      );

      if (usuarioExistente == null) {
        alert("“El usuario ingresado no existe”")
        return;
      } else {
        
      sessionStorage.setItem("usuarioEnSesion", JSON.stringify({ sesionActiva: true }));
    }

    cookies.set("auth-user", this.state.email)

    this.props.history.push("/")
      }

    }
    



  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <h2 className="alert alert-primary">Iniciar sesion</h2>
        <div class="row justify-content-center">


          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" placeholder="Ingresá tu email" onChange={(event) => this.controlaremail(event)} value={this.state.email} />

            <label for="password">Password</label>
            <input type="password" className="form-control" placeholder="Ingresá tu contraseña" onChange={(event) => this.controlarPassword(event)} value={this.state.password} />
          </div>
          <input type="submit" className="btn btn-primary btn-block" value="Iniciar sesion" />
        </div>

      </form>
    );
  }

}


export default withRouter(formulario);