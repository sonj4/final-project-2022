import React, { useEffect, useState } from 'react';
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
import ModalVideo from 'react-modal-video'
import MovieActors from '../../components/Actors/MovieActors';
import Tag from '../../components/Tag';


Modal.setAppElement("#root");

function Movie() {
    const [value, setValue] = React.useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenModalVideo, setIsOpenModalVideo] = useState(false);

    let { id } = useParams();
    const [tags, setTags] = useState([])
    //console.log(id)

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const { response, loading, error } = useAxios({ method: 'get', url: `api/movie/movie/${id}` })

    const images = [
        {
            original: response.image_of_movie
        },
        {
            original: response.featured_image
        }
    ];

    return (
        <>
            {loading ? <BootstrapSpinner /> : <div>
                <div className='moviePageContainer'>
                    <div className="movieImageContainer" >
                        <img className='gallery-button' src={response.image_of_movie} alt='image' onClick={toggleModal} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <Modal isOpen={isOpen} onRequestClose={toggleModal} className="gallery-modal" overlayClassName="modal-overlay">
                        <ImageGallery items={images} style={{ all: 'unset' }} />
                    </Modal>

                    <div>
                        <div className='categories-x-rating'>
                            <div className='categories'>
                                {response.Tag.map(el => {
                                    return <Tag url={el} />
                                })}


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
                        <button className='watch-trailers-link' onClick={(e) => setIsOpenModalVideo(true)}>Watch trailer</button>
                        <ModalVideo channel='custom' isOpen={isOpenModalVideo} onClose={() => setIsOpenModalVideo(false)} url={response.video_of_movie} />
                        <h1 className='hr movieTitle'>{response.title}</h1>
                        <div className='hr creator'>
                            <p>Director</p>
                            <p>Name of director</p>
                        </div>
                        <div className='watchlist'>
                            <button className='watchlist-button'>Add to watchlist</button>
                            <button className='watchlist-button'>View watchlist</button>
                        </div>
                    </div>
                </div>
                <div className='about hr'>
                    <h2>About</h2>
                    <p>{response.description}.</p>
                </div>
                <div className='moviePageContainer2'>
                    <div>
                        <h1 className='actor-title'>Actors</h1>
                        <div className='actors'>
                           {response.actors.map(el => {
                            return <MovieActors url={el} />
                           } )}
                        </div>
                        {/* <div className='load-more-div'>
                            <button className='load-more-button'>Load more</button>
                        </div> */}
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