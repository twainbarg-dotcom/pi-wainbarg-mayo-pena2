import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function Buscador(props) {

  const [valor, setValor] = useState("")
  const [tipo, setTipo] = useState("movie")

  const evitarSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/resultadosBusqueda/' + this.state.valor + "/" + this.state.tipo)//
  }

  const controlarCambios = (event) => {
    this.setState({ valor: event.target.value });
  }

  const cambiarTipo = (event) => {
    this.setState({ tipo: event.target.value });
  }

 
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

export default withRouter(Buscador)
