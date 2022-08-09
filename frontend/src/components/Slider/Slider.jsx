
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './slider.css'
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import BootstrapSpinner from '../BootstrapSpinner';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Slider({ type }) {
  let url = ''
  if (type === "movie") url = 'api/movie/movie'
  else url = 'api/movie/participant'
  let { response, loading, error } = useAxios({ method: 'get', url });
  const today = new Date();

  return (

    <div className='wrapper'>
      <h3 className='popularTitle'>{type === "actor" ? "Actors: " : "Movies"}</h3>
      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: "20rem",
        dataSplideInterval: "1000",
        type: "loop",
        pauseOnHover: true,
        autoplay: true,
        breakpoints: {
          1200: {
            perPage: 4,

          },
          992: {
            perPage: 3,

          },
          768: {
            perPage: 3,

          }, 576: {
            perPage: 2,

          }, 360: {
            perPage: 1,

          }
        }
      }}>
        {response.map(el => {
      
          return (
            <>
              {loading ? <BootstrapSpinner /> : <SplideSlide key={Math.random()}>
                <Link to={type === "movie" ? `/movie/${el.url.substr(el.url.length - 2).substr(0, 1)}` : `/actor/${el.url.substr(el.url.length - 2).substr(0, 1)}`}>
                  <div className='card'>
                    <p className='sliderParagraph'>{type === "movie" ? el.title : el.name +" "+ el.last_name}</p>
                     <img src={type==='movie' ? el.image_of_movie: el.image_of_participant} alt={type === "actor" ? el.name : el.title}/>    
                    <div className='gradient' />
                  </div>
                </Link>
              </SplideSlide>}
            </>
          )
        } )}
      </Splide>
    </div>

  );
}
