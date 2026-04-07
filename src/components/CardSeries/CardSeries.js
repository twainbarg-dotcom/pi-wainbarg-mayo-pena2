import React, {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class CardSeries extends Component{
    constructor(props){
        super(props)
        this.state={
          data:""
        }
    }

  render(){
    return(
        <article className="single-card-tv">
          
                <img src={this.props.imagen} className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    <p className="card-text">{this.props.desc}</p>
                    <Link to={"/DetalleS/" + this.props.id}><button className="btn btn-primary">Ver más</button></Link>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    )
  }
}

export default CardSeries
