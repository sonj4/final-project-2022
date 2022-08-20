import './contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <div className='contactPageContainer'>
      <div className="leftContact">
        <p style={{color:"white", fontSize:"1.5rem", letterSpacing:"0.3rem"}}>Write us</p>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Subject'/>
        <textarea rows="4" cols="32" placeholder='Message'/>
        <input className='sendContactMessage' type="submit" value="Send message" placeholder='Send message'/>
      </div>
      <div className="rightContact">
        <p style={{color:"white", fontSize:"1.5rem", letterSpacing:"0.3rem"}}>Contact information</p>
        <p style={{color:"white", fontSize:"1rem", letterSpacing:"0.1rem"}}> <LocationOnIcon /> Address: <span style={{color:"#beb7a4"}}>Podgorica, MNE</span></p>
        <p style={{color:"white", fontSize:"1rem", letterSpacing:"0.1rem"}}> <LocalPhoneIcon /> Phone: <span style={{color:"#beb7a4"}}>+382 68 000 000</span> </p>
        <p style={{color:"white", fontSize:"1rem", letterSpacing:"0.1rem"}}> <EmailIcon /> Email: <span style={{color:"#beb7a4"}}>imdb@gmail.com</span> </p>
      </div>
    </div>
  )
}
