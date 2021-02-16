import React from 'react'
import './Movie.css'

const Movie = () => {
    return (
        <div className="main">
            <div className="card-conatiner">
                <div className="voting">
                    <div className="up-down">
                        <div className="arrow-up">
                        </div>
                        <div className="count">
                            <span>0</span>
                        </div>
                        <div className="arrow-down">
                        </div>
                    </div>
                    Votes
                </div>
                <div className="movie-container">
                    <img src="https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1569998864699_K.G.F:_Chapter 2.jpg" alt="" />
                    <div className="name-and-description">
                        <h2 className="heading">KGF</h2>
                        <div>genre: action,adventure,thriller</div>
                        <div>director: cary joji fukunaga</div>
                        <div>starring: ana de armas,rami</div>
                        <div>min | English | 2 Apr</div>
                        <div className="veiw-vote">130 views | voted by 1 people</div>
                    </div>
                </div>
            </div>
            <button className="trailer">Watch Trailer</button>
        </div>
    )
}

export default Movie
