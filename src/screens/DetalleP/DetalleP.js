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
        const id = this.props.match.params.id
        console.log(this.props)
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=34257d6921cc3054f39832954b0d3a65`)
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))
    }
    render() {
        
        

 
  return (
   <React.Fragment>
    <div>
                {this.state.personaje === "" ? <p>Cargando..</p> : 
                
                    <div>
                        <h2>{this.state.personaje.original_title}</h2>
                        <img src={"https://image.tmdb.org/t/p/w342" + this.state.personaje.poster_path} alt="" />
                        <p>{this.state.personaje.genres[0].name}</p>
                        <p>{this.state.personaje.vote_average}</p>
                        <p>{this.state.personaje.release_date}</p>
                        <p>{this.state.personaje.runtime}</p>
                        <button>Agregar a favoritos</button>


                    </div> 
                      
                }



    </div>

  
  </React.Fragment> 
)}}

export default DetalleP;