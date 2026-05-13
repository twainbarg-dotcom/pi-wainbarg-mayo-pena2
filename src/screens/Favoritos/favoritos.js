import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula"
import CardSeries from "../../components/CardSeries/CardSeries";
import { BrowserRouter, withRouter } from "react-router-dom/cjs/react-router-dom";

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritosP: [],
            favoritosS: [],
            cargando: true
        }
    }

    componentDidMount() {

        let storageP = localStorage.getItem("favoritosP")
        let favoritosStorageP = JSON.parse(storageP)// Convierte el string en array
        let pelisRecuperadas = []
        console.log("favoritosStorageP:", favoritosStorageP)

        if (favoritosStorageP === null || favoritosStorageP.length === 0) {
            this.setState({
                cargando: false,
                favoritosP: []
            })
        } else {
            favoritosStorageP.map(id => {
               fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=34257d6921cc3054f39832954b0d3a65`)
                    .then(response => response.json())
                    .then(data => {
                        pelisRecuperadas.push(data)

                        this.setState({
                            favoritosP: pelisRecuperadas,
                            cargando: false
                        })
                    })
                    .catch(error => console.log(error))
            })
        }

        let storageS = localStorage.getItem("favoritosS")
        let favoritosStorageS = JSON.parse(storageS)
        let seriesRecuperadas = []

        if (favoritosStorageS === null || favoritosStorageS.length === 0) {
            this.setState({
                cargando: false,
                favoritosS: []
            })
        } else {
            favoritosStorageS.map(id => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=34257d6921cc3054f39832954b0d3a65`)
                    .then(response => response.json())
                    .then(data => {
                        seriesRecuperadas.push(data)

                        this.setState({
                            favoritosS: seriesRecuperadas,
                            cargando: false
                        })
                    })
                    .catch(error => console.log(error))
            })
        }
    }

    render() {
        return (
            <div>
                <h2 class="alert alert-warning">Peliculas Favoritas</h2>
                <section className="row cards">

                    {this.state.cargando === true ? (
                        <p>Cargando...</p>
                    ) : this.state.favoritosP.length === 0 ? (
                        <p>No hay peliculas guardadas en favoritos</p>
                    ) : (
                        this.state.favoritosP.map(pelicula =>
                            <CardPelicula
                                key={pelicula.id}
                                id={pelicula.id}
                                nombre={pelicula.title}
                                foto={"https://image.tmdb.org/t/p/w342" + pelicula.poster_path}
                                descrip={pelicula.overview}
                            />
                        )
                    )}

                </section>

                <h2 class="alert alert-primary">Series Favoritas</h2>
                <section className="row cards">

                    {this.state.cargando === true ? (
                        <p>Cargando...</p>
                    ) : this.state.favoritosS.length === 0 ? (
                        <p>No hay series guardadas en favoritos</p>
                    ) : (
                        this.state.favoritosS.map(serie =>
                            <CardSeries
                                key={serie.id}
                                id={serie.id}
                                nombre={serie.original_name}
                                imagen={"https://image.tmdb.org/t/p/w342" + serie.poster_path}
                                descrip={serie.overview}
                            />
                        )
                    )}

                </section>
            </div>
        )
    }
}

export default Favoritos;