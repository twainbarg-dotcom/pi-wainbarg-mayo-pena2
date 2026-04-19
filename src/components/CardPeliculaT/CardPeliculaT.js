import React, {Component} from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
class CardPeliculaT extends Component{
    constructor(props){
        super(props);
            this.state = {valor : "Ver Más"}
        }

    mostrarMas(){
        this.state.valor === "Ver Más" ? this.setState ({valor:"Ver Menos"}) : this.setState ({valor:"Ver Más"})
    }

    agregarFavorito(id) {
    let storage = localStorage.getItem("favoritosP");
    let favoritos = JSON.parse(storage) || [];
    favoritos.push(id);
    localStorage.setItem("favoritosP", JSON.stringify(favoritos));
}

    render(){
        return(
            <article className="single-card-movie">
                <img src={this.props.foto} alt="" className="card-img-top" /> 
                <div className="cardBody" >
                    <h2 className="card-title">{this.props.nombre}</h2>
                
                    <button className='more' onClick={()=>this.mostrarMas()}>{this.state.valor}</button> 
                    <section className='extra'>
                        {this.state.valor==="Ver Más" ? null : 
                            <div>
                                <p className="card-text">Descripcion:{this.props.descrip}</p>
                            
                            </div>}
                    </section>
                    <Link className='btn btn-primary' to ={"/detalleP/"+ this.props.id}>Ver detalles</Link>
                    <button className="btn alert-primary" onClick={() => this.agregarFavorito(this.props.id)}>♥️</button>
                </div>
                
                
                 
                 
            </article>

        )
    }
}

export default CardPeliculaT;