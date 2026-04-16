import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      tipo: "movie"

    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push('/resultadosBusqueda/' + this.state.valor + "/" + this.state.tipo)
  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
  }
  cambiarTipo(event) {
    this.setState({ tipo: event.target.value });
  }

  render() {
    return (
      <form className="search-form" onSubmit={(event) => this.evitarSubmit(event)}>

        <input placeholder="Buscar..." className="" type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
        <button className="btn btn-success" type="submit">Buscar</button>
        <div className="radios">
          <label>
           <input type="radio" name="tipo" value="movie" checked={this.state.tipo === "movie"} onChange={(event) => this.cambiarTipo(event)} />
           Películas
          </label>

          <label>
            <input type="radio" name="tipo" value="tv" checked={this.state.tipo === "tv"} onChange={(event) => this.cambiarTipo(event)} />
            Series
          </label>
        </div>
      </form>
    );
  }
}
export default withRouter(Buscador)