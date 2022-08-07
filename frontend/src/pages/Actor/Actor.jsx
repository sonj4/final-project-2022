import React from 'react'
import MovieCard from '../../components/MovieCard'
import './actor.css'
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import BootstrapSpinner from '../../components/BootstrapSpinner';
export default function Actor() {
    let { id } = useParams();
    const { response, loading, error } = useAxios({ method: 'get', url: `movie/participant/${id}` })
    console.log(response)
    let date = new Date(response.date_of_birth);
    console.log(date.toDateString())
    let datee = date.toDateString()

    return (
        //         font-family: 'Indie Flower', cursive;
        //   font-family: 'Montserrat', sans-serif;
        //   font-family: 'Mulish', sans-serif;
        //   font-family: 'Poppins', sans-serif;
        //   font-family: 'Roboto Mono', monospace;
        <>
            {loading ? <BootstrapSpinner /> :
                <div className='actorPageContainer'>
                    <div className="actorImageDiv">
                        <div className="actorInfo">
                            <span style={{ fontSize: "2rem", fontFamily: "'Montserrat', sans-serif", color: "#fffffc" }}>{response.name + " " + response.last_name}</span>
                            <span style={{ fontSize: "1rem", fontFamily: "'Roboto Mono', monospace", color: "#f2ff49" }}>{datee.substr(3, datee.length - 1)}</span>
                            <span style={{ fontSize: "1.5rem", fontFamily: "'Mulish', sans-serif", color: "#beb7a4" }}>{response.description}</span>
                        </div>
                        <img className='actorImage' src={response.image_of_participant} alt="actor image" />
                    </div>
                    <hr />
                    <p style={{ color: "white", fontSize: "2rem", marginLeft: "2%" }}>Actors Filmography:</p>
                    <div className="actorFilmographyList">
                        {response.Movie.map(el => {
                            return <MovieCard url={el}/>
                        })}
                    </div>
                </div>
            }
        </>
    )
}
