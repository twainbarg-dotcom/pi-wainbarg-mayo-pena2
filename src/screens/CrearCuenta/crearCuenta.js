import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";class formulario2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      email: "",
      password: "",
      username: ""
    };
  }


  evitarSubmit(event) {
    event.preventDefault();
    let usuarioACrear = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      createdAt: Date.now()
    }


    if(this.state.username.length < 3 || this.state.username.length > 7) {
      alert("La extensión del username debe ser de 3 a 7 caracteres");
      return;
    }



    if (!this.state.email.includes("@")) {
      alert("email mal formateado" );
      return;
    }


    if (this.state.password.length < 5 || this.state.password.length > 12) {
      alert("La extensión del password debe ser de 5 a 12 caracteres");
      return;
    }


    let usersStorage = localStorage.getItem("users");

    if (usersStorage !== null) {
      let usersParseado = JSON.parse(usersStorage);

      let usuarioExistente = usersParseado.find(
        (user) => user.email === this.state.email
      );

      if (usuarioExistente) {
        alert("Ya existe un usuario con ese email");
        return;
      }

      usersParseado.push(usuarioACrear);
      localStorage.setItem("users", JSON.stringify(usersParseado));
    } else {
      let usersInicial = [usuarioACrear];
      localStorage.setItem("users", JSON.stringify(usersInicial));
    }

    alert("Usuario creado correctamente");

    this.props.history.push("/Login")
  }

  controlarEmail(event) {
    this.setState({ email: event.target.value });
  }

  controlarPassword(event) {
    this.setState({ password: event.target.value });
  }

  controlarUsername(event) {
    this.setState({ username: event.target.value });
  }




  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <h2 className="alert alert-primary">Registrarse</h2>
        <div className="row justify-content-center">



          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" placeholder="Ingresá tu usuario" onChange={(event) => this.controlarUsername(event)} value={this.state.username} />

            <label for="email">Email</label>
            <input type="email" className="form-control" placeholder="Ingresá tu email" onChange={(event) => this.controlarEmail(event)} value={this.state.email} />

            <label for="password">Password</label>
            <input type="password" className="form-control" placeholder="Ingresá tu contraseña" onChange={(event) => this.controlarPassword(event)} value={this.state.password} />
          </div>
         <input type="submit" className="btn btn-primary btn-block" value="Registrarse" />
        </div>

      </form>
    );
  }
}

export default withRouter(formulario2);