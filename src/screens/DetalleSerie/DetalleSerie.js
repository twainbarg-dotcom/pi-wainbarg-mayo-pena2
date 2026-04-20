import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class DetalleSerie extends Component {
   constructor(props) {
        super(props)
        this.state = {
            personaje : ""
        }
    }
    
    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id
        console.log(this.props)
        
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=34257d6921cc3054f39832954b0d3a65`)
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))
    }
    render() {
        
        

 
  return (
   <React.Fragment>
    <div className="container">
                {this.state.personaje === "" ? <p>Cargando..</p> : 
                
                    <div>
                        <h2 className="alert alert-warning">{this.state.personaje.name}</h2>
                        <img src={"https://image.tmdb.org/t/p/w342" + this.state.personaje.poster_path} alt="" />
                        <h3>Descripción</h3>
                        <p className="description">{this.state.personaje.overview}</p>
                        <p class="mt-0 mb-0" id="gender"><strong>Genero:</strong>{this.state.personaje.genres[0].name}</p>
                        <p className="mt-0 mb-0" id="puntuacion"><strong>Puntuación:</strong>{this.state.personaje.vote_average}</p>
                        <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.state.personaje.first_air_date}</p>
                        <p class="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong>{this.state.personaje.number_of_episodes}</p>
                        <button>❤️</button>


                    </div> 
                      
                }



    </div>

  
  </React.Fragment> 
)}}

export default DetalleSerie;