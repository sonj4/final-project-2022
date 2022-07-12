import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSearch, faBars, faImagePortrait, faClose } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import MenuUI from '../MenuUI';
import { useState } from 'react';

export default function Navbar() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(prevState => !prevState);
  }

  return (
    <nav>
      <div className="leftNav">
        <div class="input-container">
        <span className='logo'>IMDB</span>
          <MenuUI/>
          <input type="text" required="" placeholder='Search' />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
      </div>
      <div className="rightNav">
        <span>ABOUT</span>
        <span>CONTACT</span>
        <span>WATCHLIST</span>
        <span>SIGN IN</span>
        <FontAwesomeIcon icon={faImagePortrait} className="icon" />
        
      </div>
      <FontAwesomeIcon icon={faBars} className="mobileBar hidden" onClick={(e) => handleClick(e)}/>
      <div className={isClicked ? "mobileNav" : "mobileNav hidden"}>
        <FontAwesomeIcon icon={faClose} className="icon" onClick={(e) => handleClick(e)}/>
        <span>ABOUT</span>
        <span>CONTACT</span>
        <span>WATCHLIST</span>
        <span>SIGN IN</span>
        <FontAwesomeIcon icon={faImagePortrait} className="icon" />
      </div>
      
    </nav>
  )
}
