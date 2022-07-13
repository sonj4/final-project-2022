import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faImagePortrait, faClose } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import MenuUI from '../MenuUI';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(prevState => !prevState);
  }

  return (
    <nav>
      <div className="leftNav">
        <div className="input-container">
          <Link to='/' style={{ textDecoration: 'none' }}><span className='logo'>IMDB</span></Link> 
          <MenuUI />
          <input type="text" required="" placeholder='Search' />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
      </div>
      <div className="rightNav">
        <span>WATCHLIST</span>
        <span>ABOUT</span>
        <Link to='/login' style={{ textDecoration: 'none' }}><span>LOG IN</span></Link> 
        <FontAwesomeIcon icon={faImagePortrait} className="icon" />

      </div>
      <FontAwesomeIcon icon={faBars} className="mobileBar hidden" onClick={(e) => handleClick(e)} />
      <div className={isClicked ? "mobileNav" : "mobileNav hidden"}>
        <FontAwesomeIcon icon={faClose} className="icon" onClick={(e) => handleClick(e)} />
        <span>WATCHLIST</span>
        <span>ABOUT</span>
        <Link to='/login' style={{ textDecoration: 'none' }}><span>LOG IN</span></Link> 
        <FontAwesomeIcon icon={faImagePortrait} className="icon" />
      </div>

    </nav>
  )
}
