import CardSeriesT from "../CardSeriesT/CardSeriesT"
import CardSeries from "../CardSeries/CardSeries"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { Component } from "react"

class SerieVerMas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            hoy: [],
            valor: "Ver Más",
            valor2: "Ver Más"
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    popular: data.results
                })
            })
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    hoy: data.results
                })
            })
            .catch(error => console.log(error))
    }
    mostrarMas() {
        this.state.valor === "Ver Más" ? this.setState({ valor: "Ver Menos" }) : this.setState({ valor: "Ver Más" })
    }
    mostrarMas2() {
        this.state.valor2 === "Ver Más" ? this.setState({ valor2: "Ver Menos" }) : this.setState({ valor2: "Ver Más" })
    }
    render() {
        return (
            <>
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <section className="row cards" id="tv-show">
                    {
                        this.state.popular.length > 0 ? (
                            this.state.popular.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardSeries
                                        id={personaje.id}
                                        nombre={personaje.original_name}
                                        imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        desc={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                        ) : (<p>Cargando....</p>)


                    }{this.state.valor2 === "Ver Más" ? null :
                        this.state.popular.map((personaje, i) => {
                                if (i <= 20) {
                                    return(<CardSeries
                                        id={personaje.id}
                                        nombre={personaje.original_name}
                                        imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        desc={personaje.overview}
                                    />
                            )}
                            return null 
                        })

                    }<button onClick={() => this.mostrarMas2()}>{this.state.valor2}</button>
                </section>
                <h2 className="alert alert-warning">TV shows airing today</h2>
                <section className="row cards" id="on-air-today">
                    {
                        this.state.hoy.length > 0 ? (
                            this.state.hoy.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardSeriesT
                                        id={personaje.id}
                                        nombre={personaje.original_name}
                                        imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        desc={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                        ) : (<p>Cargando....</p>)


                    }{this.state.valor === "Ver Más" ? null :
                        this.state.hoy.map((personaje, i) => {
                                if (i <= 20) {
                                    return(<CardSeriesT
                                        id={personaje.id}
                                        nombre={personaje.original_name}
                                        imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        desc={personaje.overview}
                                    />
                            )}
                            return null 
                        })

                    }<button onClick={() => this.mostrarMas()}>{this.state.valor}</button>
                </section>
            </>

        )
    }
}
export default SerieVerMas