import React, { Component } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: "Ver Más",
            favorito: false
         }
        
    }

    componentDidMount() {
    
    let storage = localStorage.getItem("favoritosP")

    if (storage !== null) {
        let storageParseado = JSON.parse(storage)

        if (storageParseado.includes(this.props.id)) {
            this.setState({ favorito: true })
        }
    }

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
    agregarFavorito() {
        let idFavorito = this.props.id
        let storage = localStorage.getItem("favoritosP");
        if (storage != null) {
            let storageParse = JSON.parse(storage)
            storageParse.push(idFavorito)
            let storageString = JSON.stringify(storageParse)
            localStorage.setItem("favoritosP", storageString)
            this.setState({ favorito: true })
        } else {
            let arrayId = []
            arrayId.push(idFavorito)
            let arrayString = JSON.stringify(arrayId)
            localStorage.setItem("favoritosP", arrayString)
            this.setState({ favorito: true })
        }
    }

    sacarFavoritoS() {
        let idFavorito = this.props.id
        let storage = localStorage.getItem("favoritosP")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let storageFiltrado = storageParseado.filter(id => id !== idFavorito)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritosP", storageString)
            this.setState({ favorito: false })
        }
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
                    <button className="extra" onClick={() => this.mostrarMas()}>{this.state.valor}</button>
                    <Link className='btn btn-primary' to={"/detalleP/" + this.props.id}>Ver detalles</Link>
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

export default CardPelicula;




















