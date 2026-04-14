import React from "react";
import { Component } from "react";

class formulario2 extends Component {
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
      email : this.state.email,
      password : this.state.password,
      username : this.state.username,
      createdAt: Date.now()
    }


  if (!(this.state.username.length >= 3 && this.state.username.length <= 7)) {
      alert({ error: "La extensión del username debe ser de 3 a 7 caracteres" });
      return;
    }
    


  if (!this.state.email.includes("@")) {
      alert({ error: "email mal formateado" });
      return;
    }

  
  if (!(this.state.password.length >= 5 && this.state.password.length <= 12)) {
      alert({ error: "La extensión del password debe ser de 5 a 12 caracteres" });
      return;
    }
      
      
     
      
      



  controlarCambios(event) {
    this.setState({ email: event.target.value });
  }

  controlarPassword(event) {
    this.setState({ password: event.target.value });
  }



  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <h2 className="alert alert-primary">Registrarse</h2>
        <div class="row justify-content-center">



          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" placeholder="Ingresá tu email" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />

            <label for="password">Password</label>
            <input type="password" className="form-control" placeholder="Ingresá tu contraseña" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
          </div>
          <input type="submit" className="btn btn-primary btn-block" value="Iniciar sesion" />
        </div>

      </form>
    );
  }
}
}






export default formulario2;