import React, {Component} from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
class CardSeries extends Component{
    constructor(props){
        super(props);
            this.state = {valor : "Ver Más"}
        }

    mostrarMas(){
        this.state.valor === "Ver Más" ? this.setState ({valor:"Ver Menos"}) : this.setState ({valor:"Ver Más"})
    }

    render(){
        return(
            <article className= "single-card-tv">
                <img src={this.props.imagen} alt="" className="card-img-top" /> 
                <div className="cardBody" >
                    <h2 className="card-title">{this.props.nombre}</h2>
                
                    <button className='more' onClick={()=>this.mostrarMas()}>{this.state.valor}</button> 
                    <section className='extra'>
                        {this.state.valor==="Ver Más" ? null : 
                            <div>
                                <p>Descripcion:{this.props.desc}</p>
                            
                            </div>}
                    </section>
                    <Link to ={"/detalleSerie/"+ this.props.id}>Ver detalles</Link>
                    <button className="btn alert-primary"> ♥️ </button>
                </div>
                
                
                 
                 
            </article>

        )
    }
}

export default CardSeries;




















