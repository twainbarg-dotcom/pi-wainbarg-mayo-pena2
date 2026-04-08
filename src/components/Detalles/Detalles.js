import react from "react";
import { Component } from "react"

class Detalles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula:""
    }
}

componentDidMount(){
    fetch("")
    .then(response => response.json())
    .then(data => {
        this.setState({
            pelicula: data
}))
.catch(error => console.log(error))