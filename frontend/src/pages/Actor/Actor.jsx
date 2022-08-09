import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import './actor.css'
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import BootstrapSpinner from '../../components/BootstrapSpinner';
import ReadMore from '../../components/ReadMore';
export default function Actor() {
    let { id } = useParams();
    const { response, loading, error } = useAxios({ method: 'get', url: `api/movie/participant/${id}` })
    console.log(response)
    let date = new Date(response.date_of_birth);
    console.log(date.toDateString())
    let datee = date.toDateString()


    return (

        <>
            {loading ? <BootstrapSpinner /> :
                <div className='actorPageContainer'>

                        <div className="actorInfo">
                            <span style={{ fontSize: "2rem", fontFamily: "'Montserrat', sans-serif", color: "#fffffc" }}>{response.name + " " + response.last_name}</span>
                            <span style={{ fontSize: "1rem", fontFamily: "'Roboto Mono', monospace", color: "#f2ff49" }}>{datee.substr(3, datee.length - 1)}</span>
                            {/* <span style={{ fontSize: "1.5rem", fontFamily: "'Mulish', sans-serif", color: "#beb7a4" }}>{response.description.slice(0,400) + "..."}</span> */}
                            <ReadMore children={response.description}/>
                        </div>
                        <div className="actorImageContainer">
                            <img className='actorImage' src={response.image_of_participant} alt="actor image" />
                        </div>
                        
                  
                    {/* <div className="actorP"><p style={{ color: "white", fontSize: "2rem", marginLeft: "2%" }}>Actors Filmography:</p></div> */}
                    
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
