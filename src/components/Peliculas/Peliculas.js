import React, { Component } from "react";
import CardPelicula from "../CardPelicula/CardPelicula";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CardPeliculaT from "../CardPeliculaT/CardPeliculaT";
const ApiKey = "?api_key=34257d6921cc3054f39832954b0d3a65"
import { useState , useEffect } from "react";

function Peliculas (props) {
    
    const [peliculasPopulares , setpeliculasPopulares] = useState([])
    const [peliculasAhora , setpeliculasAhora] = useState ([])
    const [valor, setvalor]= useState ("Ver Mas")
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular" + ApiKey)

            .then(response => response.json())
            .then(data => setpeliculasAhora( data.results ))
            .catch(error => console.log(error))
        fetch("https://api.themoviedb.org/3/movie/now_playing" + ApiKey)

            .then(response => response.json())
            .then(data => setpeliculasPopulares( data.results ))
            .catch(error => console.log(error))
    },[])
    
    
        return (
            <section>
                <h2 className="alert alert-primary">Peliculas en tendencia</h2>
                <section className='row cards' id="movies">
                    {
                        peliculasAhora.length === 0 ?
                            <h3>Cargando...</h3> :
                                peliculasAhora.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardPeliculaT
                                        id={personaje.id}
                                        nombre={personaje.title}
                                        foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        descrip={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                            
                                
                                
                            }
                                
                
                </section>
                <h2 className="alert alert-primary">Peliculas Populares</h2>
                <section className='row cards' id= "movies">
                    {
                        peliculasPopulares.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardPelicula
                                        id={personaje.id}
                                        nombre={personaje.title}
                                        foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        descrip={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                }
                </section>
            </section>
                

        )
    }


export default Peliculas;