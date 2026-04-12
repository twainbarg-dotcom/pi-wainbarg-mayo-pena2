import react, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PeliculaoSerie : ""
        }
    }
    componentDidMount() {
        const tipo= this.props.match.params.tipo 
        const nombre= this.props.match.params.nombre
        fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=34257d6921cc3054f39832954b0d3a65&query=${nombre}`)
            .then(response => response.json())
            .then(data => this.setState({ PeliculaoSerie: data.results }))
            .catch(error => console.log(error))
    }
    
    render() {
        
        return (
            <div>
                {this.state.PeliculaoSerie === "" ? <p>Cargando..</p> : 
                    <div>
                        {this.state.PeliculaoSerie.map(function(nom){
                            return(<><img src={"https://image.tmdb.org/t/p/w342"+nom.poster_path} alt="" /><p>{nom.title}</p><p>{nom.overview}</p><p>{nom.vote_average}</p></>)
                        }) }
                        


                    </div>
               
                }



            </div>
        )
    }
}
export default SearchResults