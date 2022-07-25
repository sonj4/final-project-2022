import React from 'react';
import './Movie.css';

function Movie() {
    return ( <div>
        <div className='container'>
        
            <img style={{'width': '100%'}} src='https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg' alt='image'/>
            <div>
                <div className='categories-x-rating'>
                    <div className='categories'>
                        <button>Crime</button>
                        <button>Drama</button>
                    </div>
                    <div>
                        <p className='rating'>Rating</p>
                        <p className='rating'>9/10</p>
                    </div>
                </div>
                <button className='watch-trailers-link'>Watch trailers</button>
                <h1 className='hr'>Movie title</h1>
                <div className='hr creator'>
                    <p>Creator</p>
                    <p>Name of creator</p>
                </div>
                <div className='watchlist'>
                    <button className='watchlist-button'>Add to watchlist</button>
                    <button className='watchlist-button'>View watchlist</button>
                </div>
            </div>
        </div>
        <div className='about'>
            <h2>About</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div> );
}

export default Movie;