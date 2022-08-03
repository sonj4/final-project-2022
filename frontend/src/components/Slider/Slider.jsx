
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './slider.css'
import { Link } from 'react-router-dom';
export default function Slider({prop}) {
  console.log(prop)
  const popular = [
    {
      id: "0",
      title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: "1", title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: "2", title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: "3", title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: "4", title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: "5", title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: "6", title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
  ]
  return (

    <div className='wrapper'>
      <h3 className='popularTitle'>{prop}</h3>
      <Splide options={{
        perPage: 6,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: "20rem",
        dataSplideInterval: "1000",
        type: "loop",
        pauseOnHover: true,
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
        {popular.map(recipe => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to='/movie/1/'>
              <div className='card'>
                <p className='sliderParagraph'>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <div className='gradient' />
              </div>
              </Link>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>

  );
}
