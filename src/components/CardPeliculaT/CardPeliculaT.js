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

    render(){
        return(
            <article className='character-card'>
                <img src={this.props.foto} alt="" className="card-img-top" /> 
                <div className="cardBody" >
                    <h2>{this.props.nombre}</h2>
                
                    <button className='more' onClick={()=>this.mostrarMas()}>{this.state.valor}</button> 
                    <section className='extra'>
                        {this.state.valor==="Ver Más" ? null : 
                            <div>
                                <p>Descripcion:{this.props.descrip}</p>
                            
                            </div>}
                    </section>
                    <Link to ={"/detalle/"+ this.props.id}>Ver detalles</Link>
                    <button > Agregar a favoritos</button>
                </div>
                
                
                 
                 
            </article>

        )
    }
}

export default CardPeliculaT;