import React, { Component } from "react";
import CardPelicula from "../CardPelicula/CardPelicula";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CardPeliculaT from "../CardPeliculaT/CardPeliculaT";
const ApiKey = "?api_key=34257d6921cc3054f39832954b0d3a65"

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PeliculasAhora: [],
            valor: "Ver Más",
            PeliculasPopulares: []

        }
    }

    
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular" + ApiKey)

            .then(response => response.json())
            .then(data => this.setState({ PeliculasAhora: data.results }))
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/movie/now_playing" + ApiKey)

            .then(response => response.json())
            .then(data => this.setState({ PeliculasPopulares: data.results }))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <section>
                <h2 className="alert alert-primary">Peliculas en tendencia</h2>
                <section className='row cards' id="movies">
                    {
                        this.state.PeliculasAhora.length === 0 ?
                            <h3>Cargando...</h3> :
                            this.state.PeliculasAhora.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardPeliculaT
                                        id={personaje.id}
                                        nombre={personaje.title}
                                        foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        descrip={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                            
                                
                                
                            }
                                
                
                </section>
                <h2 className="alert alert-primary">Peliculas Populares</h2>
                <section className='row cards' id= "movies">
                    {
                        this.state.PeliculasPopulares.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardPelicula
                                        id={personaje.id}
                                        nombre={personaje.title}
                                        foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        descrip={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                }
                </section>
            </section>
                

        )
    }
}

export default Peliculas;