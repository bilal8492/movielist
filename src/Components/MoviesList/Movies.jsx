import React, { useState, useEffect } from 'react'
import Movie from '../Movie/Movie'
import './Movies.css'
const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchCategory().then((data) => {
            setMovies(data)
        })
    }, [])
    const fetchCategory = async () => {
        // Due to CORS the below api url is not working
        // const res = await fetch("https://hoblist.com/movieList", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         category: "movies",
        //         language: "kannada",
        //         genre: "all",
        //         sort: "voting"
        //     })

        // })
        const res = await fetch("http://localhost:3000/data.json")
        const data = await res.json()
        return data.result
    }

    return (
        <div className="card-grid">
            {movies?.map(movie => {
                return <Movie key={movie._id} {...movie} />
            })}
        </div>
    )
}

export default Movies
