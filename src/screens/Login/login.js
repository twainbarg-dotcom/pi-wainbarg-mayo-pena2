import React from "react";
import { Component } from "react";
import Cookies from "universal-cookie"
const cookies = new Cookies()



class formulario extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      email:"",
      password:""
  };
  }
evitarSubmit(event){
  event.preventDefault();



}
controlarCambios(event){
  this.setState({email:event.target.value});
}

controlarPassword(event){
  this.setState({password:event.target.value});  
}

onSubmit(email,password){

}

//espacio para cookies


if (user){
  cookies.set("user-auth-cookie",user.email)
}





render (){
  return(
    <form onSubmit={(event)=>this.evitarSubmit(event)}>
      <h2 className="alert alert-primary">Iniciar sesion</h2>
<div class="row justify-content-center">
    

      <div className="form-group">
      <label for="email">Email</label>
       <input type="email" className="form-control"  placeholder = "Ingresá tu email" onChange={(event) =>this.controlarCambios(event)} value={this.state.valor}/>
       
      <label for="password">Password</label>
      <input type="password" className="form-control"  placeholder = "Ingresá tu contraseña"  onChange={(event) =>this.controlarCambios(event)} value={this.state.valor}/>
      </div>
      <input type="submit" className="btn btn-primary btn-block" value="Iniciar sesion"  />
</div>

    </form>
  );
 }
}




export default formulario;