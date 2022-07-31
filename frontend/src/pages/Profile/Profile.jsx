import React from 'react'
import MovieCard from '../../components/MovieCard';
import Slider from "../../components/Slider/Slider";
import './profile.css';

export default function Profile() {
  return (
    <div className="container">
      <div className='profileContainer'>
        <img className='profilePicture' src="https://images.pexels.com/photos/12640456/pexels-photo-12640456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile Image" />
        <div className="userInfo">
          <p className="name">John Doe</p>
          <p className="username">@johndoe</p>
          <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas, nobis obcaecati delectus qui perferendis accusamus, nostrum, magni eum voluptatem modi aspernatur recusandae vel! Inventore aut maxime quas dolorem fugiat.</p>
        </div>
      </div>
      <div className="myWatchlist">
        
        <Slider prop="My Watchlist:"/>
        <Slider prop="My Ratings:"/>
        {/* <MovieCard /> */}
      </div>
    </div>

  )
}
