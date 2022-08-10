import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './add-movie.css';

export default function AddMovie() {
  const [actors, setActors]= useState([]);
  const [actorsLoading, setActorsLoading]= useState(true);
  const [tags, setTags] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(true);
  useEffect(() => {
    const getData = async (url, type) => {
      try {
        const res = await axios.get(url);
        if (type ==='actors') setActors(res.data);
        else setTags(res.data)
      } catch(err){
        console.log(err)
      } finally {
        if (type ==='actors') setActorsLoading(false);
        else setTagsLoading(false);
      }
    }

    getData('https://djangoproject133.herokuapp.com/api/movie/participant/', 'actors');
    getData('https://djangoproject133.herokuapp.com/api/movie/tags/', 'tags');
  })
  return (
    <>
      <form className='postMovieForm'>
        <input type="text" />
        <input type="file" name="" id="" />
        <input type="file" name="" id="" />
        <input type="file" name="" id="" />
        <input type="text" />
        <input type="date" name="" id="" />
        <input type="number" name="" id="" />
        <select name="" id=""></select>
      </form>
    </>
  )
}
