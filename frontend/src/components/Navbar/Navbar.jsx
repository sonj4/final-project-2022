import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faImagePortrait, faClose } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import MenuUI from '../MenuUI';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../ProfileDropdown';

export default function Navbar() {
  const user = false;
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
        <Link to={user ? 'watchlist/1' : 'login'} style={{ textDecoration: 'none' }}><span>WATCHLIST</span></Link>
        <Link to='/about' style={{ textDecoration: 'none' }}><span>ABOUT</span></Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}><span>CONTACT</span></Link>
        {user?<></>:<Link to='/login' style={{ textDecoration: 'none' }}><span>LOG IN</span></Link> }
        {user?<></>:<Link to='/register' style={{ textDecoration: 'none' }}><span>SIGN UP</span></Link> }
        {user ? <ProfileDropdown /> : <></>}
        
      </div>
      <FontAwesomeIcon icon={faBars} className="mobileBar hidden" onClick={(e) => handleClick(e)} />
      <div className={isClicked ? "mobileNav animate__backOutLeft" : "mobileNav hidden animate__backOutLeft"}>
        <FontAwesomeIcon icon={faClose} className="icon" onClick={(e) => handleClick(e)} />
        <span>WATCHLIST</span>
        <span>ABOUT</span>
        {user?<></>:<Link to='/login' style={{ textDecoration: 'none' }}><span>LOG IN</span></Link> }
        {user?<></>:<Link to='/register' style={{ textDecoration: 'none' }}><span>SIGN UP</span></Link> }
        {user ? <ProfileDropdown /> : <></>}
      </div>

    </nav>
  )
}
