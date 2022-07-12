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
    textShadow: "0px 0px 8px rgba(255, 0, 0, 0.83)"
  }

  const carouselStyle = {
    height: "70%",
    width: "70%"
  }

  const descStyle = {
    
  }

  return (
    <Carousel fade style={carouselStyle}>
      <Carousel.Item>
        <img
          className="d-block "
          style={mystyle}
          src="https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Peaky Blinders</h2>
          <p style={descStyle}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          style={mystyle}
          src="https://i2.wp.com/readysteadycut.com/wp-content/uploads/2022/05/825394.jpg?fit=1920%2C1080&ssl=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 style={titleStyle}>Stranger Things</h2>
          <p style={descStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          style={mystyle}
          src="https://mladiberana.me/wp-content/uploads/2021/11/Netflix-Squid-Game-poster-1200x633-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Squid Game</h2>
          <p style={descStyle}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;