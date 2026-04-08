import CardSeriesT from "../CardSeriesT/CardSeriesT"
import CardSeries from "../CardSeries/CardSeries"

import { Component } from "react"
class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            hoy: []
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


    render() {
        return (
            <>
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <section className="row cards" id="tv-show">
                    {
                        this.state.popular.length > 0 ? (
                            this.state.popular.map((personaje) =>
                                <CardSeries
                                    id = {personaje.id}
                                    nombre={personaje.original_name}
                                    imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview}
                                />
                            )
                        ) : (<p>Cargando....</p>)


                    }
                </section>
                <h2 className="alert alert-warning">TV shows airing today</h2>
                <section className="row cards" id="on-air-today">
                    {
                        this.state.hoy.length > 0 ? (
                            this.state.hoy.map((personaje) =>
                                <CardSeriesT
                                    id = {personaje.id}
                                    nombre={personaje.original_name}
                                    imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview}
                                />
                            )
                        ) : (<p>Cargando....</p>)


                    }
                </section>
            </>

        )
    }
}
export default Series
