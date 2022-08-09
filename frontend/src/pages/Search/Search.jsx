import './search.css'
import { useLocation, Link } from 'react-router-dom';


export default function Search() {
  const location = useLocation();
  let data = location.state.data;
  let type = location.state.type;
  return (
    <div className='searchPageContainer'>
      {data.map(el => {
      return(  <div className="searchResultItemm">
          <Link to={type==="movies" ? `/movie/${el.url.substr(el.url.length - 2).substr(0, 1)}` : `/actor/${el.url.substr(el.url.length - 2).substr(0, 1)}`}><img className='searchResultImmg' src={type==="movies" ? el.image_of_movie : el.image_of_participant} alt="image" /></Link> 
          <p>{type==="movies" ? el.title:el.name + " " + el.last_name}</p>
        </div>)
      })}
    </div>
  )
}
