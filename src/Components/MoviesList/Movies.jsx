import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Movie from '../Movie/Movie'
import './Movies.css'
const Movies = () => {

    const [movies, setMovies] = useState([])
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn')) {
            fetchCategory().then((data) => {
                setMovies(data)
            })
        } else {
            history.push('/login')
        }
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

    const logout = e => {
        localStorage.removeItem('isLoggedIn')
        history.push('/')
    }

    return (
        <div>
            <button className="logout btn" onClick={logout} >Logout</button>
            <div className="card-grid">
                {movies?.map(movie => {
                    return <Movie key={movie._id} {...movie} />
                })}
            </div>
        </div>
    )
}

export default Movies
