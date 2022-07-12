
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import './slider.css'

export default function Slider() {
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
      id: "2", title: "Movie 1",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
  ]
  return (
    
      <div className='wrapper'>
        <h3 className='popularTitle'>Popular:</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "3rem",
          dataSplideInterval: "1000"
        }}>
          {popular.map(recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <div className='card'>
                    <p className='sliderParagraph'>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className='gradient' />
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>

  );
}
