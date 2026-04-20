import CardSeriesT from "../CardSeriesT/CardSeriesT"
import CardSeries from "../CardSeries/CardSeries"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { Component } from "react"

class SerieVerMas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            valor: "",
            pagina: 1,
            valordebusqueda:""
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=bb857f4016bcff3ee72ee89cb409417f&page=${this.state.pagina}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    popular: this.state.popular.concat(data.results)
                })
            })
            .catch(error => console.log(error))

        
    }
    controlarCambios(event) {
        this.setState({ valor: event.target.value });
    }
    busqueda(event){
        event.preventDefault();
        this.setState({valordebusqueda: this.state.valor})
    }
    mostrarMas2() {
        this.setState(
            { pagina: this.state.pagina + 1 },
            () => this.componentDidMount()
        )
    }
    render() {
        return (
            <>
                <h2 className="alert alert-warning">Series</h2>
                <form className="search-form" onSubmit={(event) => this.busqueda(event)}>
               
                <input placeholder="Buscar..." className="" type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                <button className="btn btn-success" type="submit">Buscar</button>
                </form>
                <section className="row cards" id="tv-show">
                    {
                        this.state.popular.length > 0 ? (
                            this.state.popular.filter((personaje) => personaje.name.toLowerCase().includes(this.state.valordebusqueda.toLowerCase())).map((personaje) => {
                                return (
                                        <CardSeries
                                        
                                        id={personaje.id}
                                        nombre={personaje.name}
                                        imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        desc={personaje.overview}
                                        />
    )
})
                        ) : (<p>Cargando....</p>)


                    }
                </section>
            <button onClick={() => this.mostrarMas2()}>Ver Mas</button>
            </>

        )
    }
}
export default SerieVerMas