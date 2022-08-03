import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../ProfileDropdown';
import SearchBar from '../SearchBar/SearchBar';


export default function Navbar() {
  const user = false;
  const [isClicked, setIsClicked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const classNameMobileOpen = "mobileNav";
  const classNameMobileClosed = "mobileNav hidden";

  const handleClick = (e) => {
    setIsClicked(prevState => !prevState);
  }

  return (
    <nav>
      <div className="leftNav">
      <Link to='/' style={{ textDecoration: 'none' }}><span className='logo'>IMDB</span></Link> 
      <SearchBar />
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
      <div className={isClicked ? classNameMobileOpen : classNameMobileClosed}>
        <FontAwesomeIcon icon={faClose} className="icon" onClick={(e) => handleClick(e)} />
        {user ? <Link style={{ textDecoration: 'none' }} to='watchlist/1'> <span onClick={e => setIsLinkClicked(prev => !prev)}>WATCHLIST</span> </Link> : <Link to='/login' style={{ textDecoration: 'none' }}> <span onClick={e => setIsLinkClicked(prev => !prev)}>WATCHLIST</span> </Link> }
        <Link to='about' style={{ textDecoration: 'none' }}> <span onClick={e => setIsLinkClicked(prev => !prev)}>ABOUT</span></Link>
        <Link to='contact' style={{ textDecoration: 'none' }}> <span onClick={e => setIsLinkClicked(prev => !prev)}>CONTACT</span></Link>
        
        {user?<></>:<Link to='/login' style={{ textDecoration: 'none' }}><span onClick={e => setIsLinkClicked(prev => !prev)}>LOG IN</span></Link> }
        {user?<></>:<Link to='/register' style={{ textDecoration: 'none' }}><span onClick={e => setIsLinkClicked(prev => !prev)}>SIGN UP</span></Link> }
        {user ? <ProfileDropdown /> : <></>}
      </div>

    </nav>
  )
}
