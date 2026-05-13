import CardSeriesT from "../CardSeriesT/CardSeriesT"
import CardSeries from "../CardSeries/CardSeries"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { Component } from "react"
import CardPelicula from "../CardPelicula/CardPelicula"
import { useState, useEffect } from "react"
function PeliculasVerMas () {
    
    
    const [popular, setpopular] = useState([])
    const [pagina , setpagina] = useState(1)
    const[valor , setvalor]= useState("")
    const [valordebusqueda , setvalordebusqueda] = useState ("")
    useEffect (()=> {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bb857f4016bcff3ee72ee89cb409417f&page=${pagina}`)
            .then(response => response.json())
            .then(data => {
                setpopular( popular.concat(data.results)
                )
            })
            .catch(error => console.log(error))

        
    },[]   )
     const controlarCambios =(event) => {
        setvalor( event.target.value );
    }
    const busqueda= (event)=>{
        event.preventDefault();
        setvalordebusqueda( valor)
    }
    const mostrarMas2=()=> {
        setpagina(
             pagina + 1 ,
            () => useEffect()
        )
    }
    
        return (
            <>
                <h2 className="alert alert-primary">Peliculas</h2>
                <form className="search-form" onSubmit={(event) => busqueda(event)}>
                
                <input placeholder="Buscar..." className="" type="text" onChange={(event) => controlarCambios(event)} value={valor} />
                <button className="btn btn-success" type="submit">Buscar</button>
                </form>
                <section className="row cards" id="tv-show">
                    {
                                popular.length > 0 ? (
                                popular.filter((personaje) => personaje.title.toLowerCase().includes(valordebusqueda.toLowerCase())).map((personaje) => {
                                return (
                                        <CardPelicula
                                        
                                        id={personaje.id}
                                        nombre={personaje.title}
                                        foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                        descrip={personaje.overview}
                                        />
    )
})
                        ) : (<p>Cargando....</p>)


                    }
                </section>
                <button onClick={() => mostrarMas2()}>Ver Mas</button>
            </>

        )
    }

export default PeliculasVerMas