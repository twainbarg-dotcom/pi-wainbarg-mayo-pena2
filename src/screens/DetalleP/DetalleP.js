import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class DetalleP extends Component {
   constructor(props) {
        super(props)
        this.state = {
            personaje : ""
        }
    }
    
    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id// “Obtiene el parámetro id desde la URL usando las props del router.”
        console.log(this.props)
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=34257d6921cc3054f39832954b0d3a65`)
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))
    }
    render() {
        
        

 
  return (
   <React.Fragment>
    <div className="container">
                {this.state.personaje === "" ? <p>Cargando..</p> : 
                  
                
                    <div className="detalle-contenedor">
                        <h2 className="alert alert-primary">{this.state.personaje.original_title}</h2>
                        <img src={"https://image.tmdb.org/t/p/w342" + this.state.personaje.poster_path} alt="" />
                        <section className="col-md-6 info">
                          <h3>Descripción</h3>
                          <p className="description">{this.state.personaje.overview}</p>
                          <p class="mt-0 mb-0" id="gender"><strong>Genero:</strong>{this.state.personaje.genres[0].name}</p>
                          <p className="mt-0" id="votes"> <strong>Puntuación:</strong> {this.state.personaje.vote_average}</p>
                          <p className="mt-0 mb-0" id="release-date"> <strong>Fecha de estreno:</strong>{this.state.personaje.release_date}</p>
                          <p className="mt-0 mb-0 length"><strong>Duración:</strong>{this.state.personaje.runtime}</p>
                        </section>
                        <button>❤️</button>


                    </div> 
                      
                }



    </div>

  
  </React.Fragment> 
)}}

export default DetalleP;