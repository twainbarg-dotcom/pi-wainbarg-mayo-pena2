import React, { Component } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = { valor: "Ver Más" }
    }

    mostrarMas() {
        this.state.valor === "Ver Más" ? this.setState({ valor: "Ver Menos" }) : this.setState({ valor: "Ver Más" })
    }

    agregarFavorito(id) {
        console.log("CLICK", id);
        let storage = localStorage.getItem("favoritosP");
        let favoritos = JSON.parse(storage) || [];

        favoritos.push(id);

        localStorage.setItem("favoritosP", JSON.stringify(favoritos));
    }

    render() {
        return (
            <article className="single-card-playing">

                <img src={this.props.foto} alt="" className="card-img-top" />
                <div className="cardBody" >
                    <h5 className="card-title">{this.props.nombre}</h5>


                    {this.state.valor === "Ver Más" ? null :
                        <p className="card-text" >Descripcion:{this.props.descrip}</p>

                    }
                    <button className='btn btn-primary' onClick={() => this.mostrarMas()}>{this.state.valor}</button>
                    <Link className='btn btn-primary' to={"/detalleP/" + this.props.id}>Ver detalles</Link>
                    <button
                        className="btn alert-primary"
                        onClick={() => 
                           
                            this.agregarFavorito(this.props.id)}
                    >
                        ♥️
                    </button>
                </div>




            </article>

        )
    }
}

export default CardPelicula;




















