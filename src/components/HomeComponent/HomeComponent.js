import React , {Component} from "react";
import
class Home extends Component() {
  constructor(props){
    super(props);
      this.state = {datos:[]}
  }
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular")

    .then(response =>response.json())
    .then(data => this.setState({datos: data.results}))
    .catch(error => console.log(error))
  }
 render () {
    return(
        <section className= "row cards"> 
            {this.state.datos.length === 0 ?
                <h3>Cargando...</h3>:

            }
        
        </section>
        
    )
 }

}

export default Home;
