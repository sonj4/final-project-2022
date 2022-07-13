import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <span className='title'>Contact us via email:</span>
                <span style={{color:"#beb7a4"}}>imdb.media@gmail.com</span>
                
            </div>
            <div className="container">
                <span className='title'>Offices</span>
                <span style={{color:"#beb7a4"}}>New York, USA</span>
                <span style={{color:"#beb7a4"}}>London, UK</span>
            </div>
            <div className="container">
                <span className='title'>For Press</span>
                <span style={{color:"#beb7a4"}}>pressimdb@gmail.com</span>
            </div>
            <div className="container socialContainer">
                <span className='socialMedia'>@imdb</span>
                <span className='socialMedia'>@official_imdb</span>
                <span className='socialMedia'>IMDB</span>
                <span className='socialMedia'>IMDB OFFICIAL</span>
                <FontAwesomeIcon icon={faInstagram} className="footerIcon"/>
                <FontAwesomeIcon icon={faTwitter} className="footerIcon"/>
                <FontAwesomeIcon icon={faFacebook} className="footerIcon"/>
                <FontAwesomeIcon icon={faTwitch} className="footerIcon"/>
            </div>
        </footer>
    )
}
