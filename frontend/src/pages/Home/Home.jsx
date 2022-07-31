import CarouselFadeExample from '../../components/CarouselFadeExample';
import Slider from '../../components/Slider/Slider';
import { useState, useEffect } from 'react';
import './Home.css';
import useAxios from '../../hooks/useAxios';
import axios from '../../axios';

const MOVIE_URL = '/movie/movie';

export default function Home() {
  //axios.get('/movie/movie').then(response => console.log('test', response))
 // const [movies, setMovies] = useState([]);

//   const { response, loading, error } = useAxios({
//     method: 'GET',
//     url: MOVIE_URL,
//     headers: { accept: 'application/json' }
//   });

//   useEffect(() => {
//     if (response !== null) {
//         //setMovies(response);
//         console.log(response)
//     }
// }, [response]);

  return (
    <div className='home'>
      <CarouselFadeExample />
      <Slider key={1} prop="Popular movies:"/>
      <Slider key={2} prop="Recent movies:"/>
    </div>
  )
}
