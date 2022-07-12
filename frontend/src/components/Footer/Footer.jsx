import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <span className='title'>Contact us via email:</span>
                <span>johndoe@gmail.com</span>
                <span>Contact us via email:</span>

            </div>
            <div className="container">
                <span className='title'>Offices</span>
                <span>Podgorica</span>
                <span>Pljevlja</span>
            </div>
            <div className="container">
                <span className='title'>For Press</span>
                <span>press@gmail.com</span>

            </div>
            <div className="container">
                <span className='title'>Make sure to follow us</span>
                <span>on social media</span>
            </div>
            <div className="container">
                <span>@imdb</span>
                <FontAwesomeIcon icon={faInstagram} className="footerIcon"/>

            </div>
            <div className="container">
                <span>@official_imdb</span>
                <FontAwesomeIcon icon={faTwitter} className="footerIcon"/>

            </div>
            <div className="container">
                <span>IMDB</span>
                <FontAwesomeIcon icon={faFacebook} className="footerIcon"/>
            </div>
            <div className="container">
                <span>IMDB OFFICIAL</span>
                <FontAwesomeIcon icon={faTwitch} className="footerIcon"/>
            </div>


        </footer>
    )
}
