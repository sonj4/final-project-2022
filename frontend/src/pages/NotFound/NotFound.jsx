import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'
import Button from '@mui/material/Button';

export default function NotFound() {
  return (
    <div className='notFoundContainer'>
        <p className='notFoundTitle'>Oops!</p>
        <p className='notFoundParagraph404'>404 PAGE NOT FOUND</p>
        <p className='notFoundParagraph'>The page you are looking for does not exist...</p>
        
        <Link to='/'><button className='notFoundButton'>HOME PAGE</button></Link>
    </div>
  )
}
