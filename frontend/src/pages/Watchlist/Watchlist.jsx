import './watchlist.css';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useEffect, useState } from 'react';

const movies = [{
    title: "Aorrest Gump",
    year: "1999",
    duration: "2h 19min",
    genre: "Drama",
    imdbRating: "8.9",
    director: "John Doe",
    actor1: "John Doe",
    actor2: "John Doe",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nisi, optio nihil voluptas commodi doloremque impedit totam dolore iure? Facilis rem nemo ipsa. Dolor accusamus maiores, odio ea sint facere?"
}, {
    title: "Borrest Gump",
    year: "1999",
    duration: "2h 19min",
    genre: "Drama",
    imdbRating: "8.8",
    director: "John Doe",
    actor1: "John Doe",
    actor2: "John Doe",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nisi, optio nihil voluptas commodi doloremque impedit totam dolore iure? Facilis rem nemo ipsa. Dolor accusamus maiores, odio ea sint facere?"
}, {
    title: "Forrest Gump",
    year: "1999",
    duration: "2h 19min",
    genre: "Drama",
    imdbRating: "6",
    director: "John Doe",
    actor1: "John Doe",
    actor2: "John Doe",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nisi, optio nihil voluptas commodi doloremque impedit totam dolore iure? Facilis rem nemo ipsa. Dolor accusamus maiores, odio ea sint facere?"
}, {
    title: "Forrest Gump",
    year: "1999",
    duration: "2h 19min",
    genre: "Drama",
    imdbRating: "10",
    director: "John Doe",
    actor1: "John Doe",
    actor2: "John Doe",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nisi, optio nihil voluptas commodi doloremque impedit totam dolore iure? Facilis rem nemo ipsa. Dolor accusamus maiores, odio ea sint facere?"
}, {
    title: "Crrest Gump",
    year: "1999",
    duration: "2h 19min",
    genre: "Drama",
    imdbRating: "2",
    director: "John Doe",
    actor1: "John Doe",
    actor2: "John Doe",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nisi, optio nihil voluptas commodi doloremque impedit totam dolore iure? Facilis rem nemo ipsa. Dolor accusamus maiores, odio ea sint facere?"
}, {
    title: "Forrest Gump",
    year: "1999",
    duration: "2h 19min",
    genre: "Drama",
    imdbRating: "8.8",
    director: "John Doe",
    actor1: "John Doe",
    actor2: "John Doe",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nisi, optio nihil voluptas commodi doloremque impedit totam dolore iure? Facilis rem nemo ipsa. Dolor accusamus maiores, odio ea sint facere?"
},
]


export default function Watchlist() {

    const [toggleIcon, setToggleIcon] = useState(true);
    const [watchlist, setWatchlist] = useState(movies);
    console.log(watchlist)

    const handleClick = (e) => {
        setToggleIcon(prevState => !prevState);
    }

    const handleChange = (e) => {
        const sortValue = e.target.value;
        let sortedWatchlist = [...watchlist];

        if (sortValue === "aplhabetical") {
            sortedWatchlist = watchlist.sort(function (a, b) {
                if (a.title < b.title)
                    return -1;
                else if (a.title == b.title)
                    return 0;
                else
                    return 1;
            })
        } else if (sortValue === "imdbRating") {
            sortedWatchlist = watchlist.sort(function (a, b) {
                return (b.imdbRating - a.imdbRating);
            });
        } else if (sortValue === "popularity") {
            //
        } else if (sortValue === "dateAdded") {

        }
        console.log(watchlist)
        setWatchlist([...sortedWatchlist]);
        console.log(watchlist)
    }

    return (
        <div className='watchlistContainer'>
            <div className="watchlistBar">

                <span style={{ color: "#320a28", fontSize: "1.3rem", letterSpacing: "0.3rem" }}> YOUR WATCHLIST </span>

                <span>Sort by: </span>
                <select onChange={e => handleChange(e)}>
                    <option value="aplhabetical">Alphabetical</option>
                    <option value="imdbRating">IMDb rating</option>
                    <option value="popularity">Popularity</option>
                    <option value="dateAdded">Date Added</option>
                </select>

                <button onClick={e => handleClick(e)} className='toggleButton'>{toggleIcon ? <ListIcon className='toggleIcon' /> : <GridViewIcon className='toggleIcon' />}</button>
            </div>

            <div className={toggleIcon ? "list" : "grid"}>
                {watchlist.map(movie => {
                    return (
                        <div className={toggleIcon ? "watchlistItem" : "watchlistItemGrid"} key={Math.random()}>
                            <div className="watchlistImageWrapper">
                                <DeleteIcon className='watchlistDeleteIcon' />
                                <img className='watchlistImage' src="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY215_CR2%2C0%2C145%2C215_AL_.jpg" alt="" />
                            </div>
                            <div className="watchlistInfoWrapper">
                                <span style={{ color: "#511730", fontSize: "1.3rem" }}>{movie.title}</span>
                                <div className="watchlistSa">
                                    <span style={{ color: "#beb7a4", fontSize: "0.7rem", fontFamily: "'Roboto Mono', monospace" }}>{movie.year} |</span>
                                    <span style={{ color: "#beb7a4", fontSize: "0.7rem", fontFamily: "'Roboto Mono', monospace" }}> {movie.duration} |</span>
                                    <span style={{ color: "#beb7a4", fontSize: "0.7rem", fontFamily: "'Roboto Mono', monospace" }}> {movie.genre}</span>
                                </div>
                                <div>
                                    <StarIcon style={{ color: "#f2ff49" }} /> <span style={{ color: "#511730" }}>{movie.imdbRating}</span>
                                    <StarBorderIcon style={{ color: "#f2ff49" }} /> <span style={{ color: "#511730" }}>Rate</span>
                                </div>
                                <div className={toggleIcon ? "" : "hidden"}>
                                    <span style={{ color: "#666a99", fontSize: "1rem" }}>{movie.director} |</span>
                                    <span style={{ color: "#666a86", fontSize: "1rem" }}> {movie.actor1}, </span>
                                    <span style={{ color: "#666a86", fontSize: "1rem" }}>{movie.actor2}</span>
                                </div>

                                <span className={toggleIcon ? "" : "hidden"} style={{ color: "black", fontSize: "0.8rem" }}>{movie.description}</span>
                            </div>
                            <hr />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
