import React, { useState } from 'react';
import './Movie.css';
import Modal from "react-modal";
import ImageGallery from 'react-image-gallery';
import { Header, Button, Popup, Grid } from 'semantic-ui-react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import BootstrapSpinner from '../../components/BootstrapSpinner';

Modal.setAppElement("#root");

function Movie() {
    const [value, setValue] = React.useState();
    const [isOpen, setIsOpen] = useState(false);
    let { id } = useParams();
    //console.log(id)

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    
    const { response, loading, error } = useAxios({ method: 'get', url: `movie/participant/${id}` })
    console.log(response)

    const images = [
        {
            original: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg'
        },
        {
            original: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg'
        },
        {
            original: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg'
        },
        {
            original: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg'
        },
        {
            original: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg'
        },
        {
            original: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg'
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },

    ];

    return (
        <>
       { loading ? <BootstrapSpinner /> : <div>
            <div className='moviePageContainer'>

                <img className='gallery-button' src='https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg' alt='image' onClick={toggleModal} />

                <Modal isOpen={isOpen} onRequestClose={toggleModal} className="gallery-modal" overlayClassName="modal-overlay">
                    <ImageGallery items={images} style={{ all: 'unset' }} />
                </Modal>

                <div>
                    <div className='categories-x-rating'>
                        <div className='categories'>
                            <button>Crime</button>
                            <button>Drama</button>
                        </div>
                        <div>
                            <Popup className='rate-popup' trigger={<div className='triger'>
                                <p className='rating'>Rating</p>
                                <p className='rating'>9/10</p></div>} position="bottom left" flowing hoverable>
                                <Header as='h4'>Rate</Header>
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                >
                                    <Rating
                                        max={10}
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                            </Popup>
                        </div>
                    </div>
                    <button className='watch-trailers-link'>Watch trailers</button>
                    <h1 className='hr movieTitle'>Movie title</h1>
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
            <div className='about hr'>
                <h2>About</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className='moviePageContainer2'>
                <div>
                    <h1 className='actor-title'>Actors</h1>
                    <div className='actors'>
                        <button>
                            <img src='https://netflixjunkie.com/wp-content/uploads/2022/06/tommy-shelby-cillian-murphy-peaky-blinders-1569234705-1140x599.jpg' alt='actor1'></img>
                            <h2>Actor name</h2>
                            <h3>Act name</h3>
                        </button>
                        <button>
                            <img src='https://netflixjunkie.com/wp-content/uploads/2022/06/tommy-shelby-cillian-murphy-peaky-blinders-1569234705-1140x599.jpg' alt='actor1'></img>
                            <h2>Actor name</h2>
                            <h3>Act name</h3>
                        </button>
                        <button>
                            <img src='https://netflixjunkie.com/wp-content/uploads/2022/06/tommy-shelby-cillian-murphy-peaky-blinders-1569234705-1140x599.jpg' alt='actor1'></img>
                            <h2>Actor name</h2>
                            <h3>Act name</h3>
                        </button>

                    </div>
                    <div className='load-more-div'>
                        <button className='load-more-button'>Load more</button>
                    </div>
                </div>
                <div>
                    <h2>More picks</h2>
                    <div className='morePicks'>
                        <button className='firstRow'>
                            <img className='morePicksImg' src='https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg' alt='more'></img>
                            <h3 className='textOverImageFirstRow'>Movie name</h3>
                        </button>
                        <button className='otherRows1'>
                            <img className='morePicksImg' src='https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg' alt='more'></img>
                            <h3 className='textOverImageOtherRows'>Movie name</h3>
                        </button>
                        <button className='otherRows2'>
                            <img className='morePicksImg' src='https://netflixjunkie.com/wp-content/uploads/2022/06/tommy-shelby-cillian-murphy-peaky-blinders-1569234705-1140x599.jpg' alt='more'></img>
                            <h3 className='textOverImageOtherRows'>Movie name</h3>
                        </button>
                    </div>
                    <div className='load-more-div'>
                        <button className='load-more-button'>Load more</button>
                    </div>
                </div>
            </div>
        </div>
    }</>
    );
}

export default Movie;