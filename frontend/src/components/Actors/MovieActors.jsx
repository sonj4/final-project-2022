import React from 'react'
import useAxios from '../../hooks/useAxios'

export default function MovieActors({ url }) {
    const { response, loading, error } = useAxios({ method: 'get', url })
    return (
        <button>
            <img src={response.image_of_participant} alt='actor1'></img>
            <h2>{response.name + " " + response.last_name}</h2>
            
        </button>


    )
}
