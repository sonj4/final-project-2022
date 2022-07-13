import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="container c1">
                <span className='title'>Contact us via email:</span>
                <span style={{ color: "#beb7a4" }}>imdb.media@gmail.com</span>

            </div>
            <div className="container c2">
                <span className='title'>Offices</span>
                <span style={{ color: "#beb7a4" }}>New York, USA</span>
                <span style={{ color: "#beb7a4" }}>London, UK</span>
            </div>
            <div className="container c3">
                <span className='title'>For Press</span>
                <span style={{ color: "#beb7a4" }}>pressimdb@gmail.com</span>
            </div>
            <div className="container c4">
                <div className="socialContainer">
                    <FontAwesomeIcon icon={faInstagram} className="footerIcon" />
                    <FontAwesomeIcon icon={faTwitter} className="footerIcon" />
                    <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
                    <FontAwesomeIcon icon={faTwitch} className="footerIcon" />
                </div>

            </div>
        </footer>
    )
}
