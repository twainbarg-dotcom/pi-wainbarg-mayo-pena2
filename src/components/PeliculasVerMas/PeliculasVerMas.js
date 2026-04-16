import CardSeriesT from "../CardSeriesT/CardSeriesT"
import CardSeries from "../CardSeries/CardSeries"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { Component } from "react"
import CardPelicula from "../CardPelicula/CardPelicula"

class PeliculasVerMas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            
            pagina: 1,
            valor:"",
            valordebusqueda:""
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bb857f4016bcff3ee72ee89cb409417f&page=${this.state.pagina}`)
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
                <h2 className="alert alert-warning">Peliculas</h2>
                <form className="search-form" onSubmit={(event) => this.busqueda(event)}>
                <label>Que pelicula queres ver: </label>
                <input placeholder="Buscar..." className="" type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                <button className="btn btn-success" type="submit">Buscar</button>
                </form>
                <section className="row cards" id="tv-show">
                    {
                        this.state.popular.length > 0 ? (
                            this.state.popular.filter((personaje) => personaje.title.toLowerCase().includes(this.state.valordebusqueda.toLowerCase())).map((personaje) => {
                                return (
                                        <CardPelicula
                                        
                                        id={personaje.id}
                                        nombre={personaje.title}
                                        foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        descrip={personaje.overview}
                                        />
    )
})
                        ) : (<p>Cargando....</p>)


                    }<button onClick={() => this.mostrarMas2()}>Ver Mas</button>
                </section>
                
            </>

        )
    }
}
export default PeliculasVerMas