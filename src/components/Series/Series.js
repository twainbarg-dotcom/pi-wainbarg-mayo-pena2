import CardSeriesT from "../CardSeriesT/CardSeriesT"
import CardSeries from "../CardSeries/CardSeries"
import { useState , useEffect } from "react"
import { Component } from "react"
function Series () {
    
    const [popular , setpopular]= useState ([])
    const [hoy , sethoy] = useState([])
    useEffect (()=> {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                setpopular( data.results
                )
            })
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                    sethoy(
                    data.results
                )
            })
            .catch(error => console.log(error))
    },[])
    


    
        return (
            <>
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <section className="row cards" id="tv-show">
                    {
                            popular.length > 0 ? (
                                popular.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardSeries
                                        id={personaje.id}
                                        nombre={personaje.original_name}
                                        imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        desc={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                        ) : (<p>Cargando....</p>)


                    }
                </section>
                <h2 className="alert alert-warning">TV shows airing today</h2>
                <section className="row cards" id="on-air-today">
                    {
                                hoy.length > 0 ? (
                                    hoy.map((personaje, i) => {
                                if (i <= 3) {
                                    return(<CardSeriesT
                                        id={personaje.id}
                                        nombre={personaje.original_name}
                                        imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        desc={personaje.overview}
                                    />
                            )}
                            return null 
                        })
                        ) : (<p>Cargando....</p>)


                    }
                </section>
            </>

        )
    }

export default Series
