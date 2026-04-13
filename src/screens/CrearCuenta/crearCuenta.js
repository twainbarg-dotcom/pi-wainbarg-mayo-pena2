import React from "react";
import { Component } from "react";

class formulario2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      email: "",
      password: ""
    };
  }


  evitarSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const contraseña = this.state.password;

   
    { contraseña.length < 6 ? alert("La contraseña debe ser mayor a 6 caracteres") :
      
      localStorage.setItem ("contraseña",contraseña)  
    
  }
  {
    email.includes("@") ?

    localStorage.setItem("email",email) : alert("El Email debe contener un @")
  }
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







export default formulario2;