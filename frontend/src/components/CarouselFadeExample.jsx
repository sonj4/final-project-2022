import { fontSize } from '@mui/system';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  const mystyle = {
    height: "100%",
    width: "100%",
    objectFit: "contain"
  };

  const titleStyle = {
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    zIndex: "4",
    fontSize: "1rem",
    margin: "0",
    padding: "0"
  }

  const subtitleStyle = {
    fontSize: "0.4rem",
    margin: "0",
    padding: "0"
  }

  const carouselStyle = {
    height: "70%",
    width: "70%",
    boxShadow: "-1px 1px 34px 9px rgba(0,0,0,0.75)",
    WebkitBoxShadow: "-1px 1px 34px 9px rgba(0,0,0,0.75)",
    MozBoxShadow: "-1px 1px 34px 9px rgba(0,0,0,0.75)"
  }


  const gradient = {
    zIndex: "3",
    position: "absolute",
    width: "100%",
    height: " 100%",
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"
  }

  return (
    <Carousel fade style={carouselStyle}>
      <Carousel.Item>
        {/* <div style={gradient} /> */}
        <img
          className="d-block "
          style={mystyle}
          src="https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p style={titleStyle}>Peaky Blinders</p>
          <p style={subtitleStyle}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        {/* <div style={gradient} /> */}
        <img
          className="d-block "
          style={mystyle}
          src="https://i2.wp.com/readysteadycut.com/wp-content/uploads/2022/05/825394.jpg?fit=1920%2C1080&ssl=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p style={titleStyle}>Stranger Things</p>
          <p style={subtitleStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <div style={gradient} /> */}
        <img
          className="d-block "
          style={mystyle}
          src="https://mladiberana.me/wp-content/uploads/2021/11/Netflix-Squid-Game-poster-1200x633-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p style={titleStyle}>Squid Game</p>
          <p style={subtitleStyle}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;