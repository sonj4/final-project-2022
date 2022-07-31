import React from 'react'
import MovieCard from '../../components/MovieCard'
import './actor.css'
export default function Actor() {

    return (
        <div className='actorPageContainer'>
            <div className="actorImageDiv">
                <div className="actorInfo">
                    <span>John Doe</span>
                    <span>Doe</span>
                    <span>Born: 01.01.1990; USA</span>
                    <span>Rating</span>
                </div>
                <img className='actorImage' src="https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="actor image" />
            </div>
            <p style={{color: "white", fontSize: "2rem", marginLeft:"2%"}}>Actors Filmography:</p>
            <div className="actorFilmographyList">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    )
}
