import React, { Component } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
class CardSeriesT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: "Ver Más",
            favorito: false
        }
    }

    componentDidMount() {
    
    let storage = localStorage.getItem("favoritosS")

    if (storage !== null) {
        let storageParseado = JSON.parse(storage)

        if (storageParseado.includes(this.props.id)) {
            this.setState({ favorito: true })
        }
    }

    }

    mostrarMas() {
        this.state.valor === "Ver Más"
            ? this.setState({ valor: "Ver Menos" })
            : this.setState({ valor: "Ver Más" })
    }

    agregarFavorito() {
        let idFavorito = this.props.id
        let storage = localStorage.getItem("favoritosS");
        if (storage != null) {
            let storageParse = JSON.parse(storage)
            storageParse.push(idFavorito)
            let storageString = JSON.stringify(storageParse)
            localStorage.setItem("favoritosS", storageString)
            this.setState({ favorito: true })
        } else {
            let arrayId = []
            arrayId.push(idFavorito)
            let arrayString = JSON.stringify(arrayId)
            localStorage.setItem("favoritosS", arrayString)
            this.setState({ favorito: true })
        }
    }

    sacarFavoritoS() {
        let idFavorito = this.props.id
        let storage = localStorage.getItem("favoritosS")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let storageFiltrado = storageParseado.filter(id => id !== idFavorito)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritosS", storageString)
            this.setState({ favorito: false })
        }
    }



    render() {
        return (
            <article className="single-card-tv">
                <img src={this.props.imagen} alt="" className="card-img-top" />
                <div className="cardBody" >
                    <h2 className="card-title">{this.props.nombre}</h2>

                    <button className='more' onClick={() => this.mostrarMas()}>{this.state.valor}</button>
                    <section className='extra'>
                        {this.state.valor === "Ver Más" ? null :
                            <div>
                                <p>Descripcion:{this.props.desc}</p>

                            </div>}
                    </section>
                    <Link className='btn btn-primary' to={"/detalleSerie/" + this.props.id}>Ver detalles</Link>
                    {this.state.favorito === false ? (
                        <button
                            className="btn alert-primary"
                            onClick={() => this.agregarFavorito()}
                        >
                            ❤️
                        </button>
                    ) : (
                        <button
                            className="btn alert-danger"
                            onClick={() => this.sacarFavoritoS()}
                        >
                            💔
                        </button>
                    )}
                </div>




            </article>

        )
    }

}

export default CardSeriesT;




















