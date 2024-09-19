import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Slidstyle.css';

function Slider() {
  return (
    <Container fluid>
        <Row className='justify-content-center align-item-center'>
            <Col lg={8}>
    <Carousel className='Car'>
      <Carousel.Item className='Carsel' interval={2000}>
      <img 
          className="d-block w-100 Bike"
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_10_ccQHaql.jpg?format=webp&w=1500&dpr=1.3"
          alt="First slide"
        />
        <Carousel.Caption>
         
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_8.jpg?format=webp&w=1500&dpr=1.3"
          alt="First slide"
        />
        <Carousel.Caption>
          
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        
      <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner-JL.jpg?format=webp&w=1500&dpr=1.3"
          alt="First slide"
        />
        <Carousel.Caption>
         
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_5ZslBoX.jpg?format=webp&w=1500&dpr=1.3"
          alt="First slide"
        />
        <Carousel.Caption>
         
          <p style={{color:"black"}} className='d-none d-sm-block'></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    <div className='text-center'>
    <h2 className='display-5 mt-3'>All New Collections</h2>
    {/* <p className="lead text-muted Carp1">Grab It Now</p> */}
    </div>
    </Container>
  );
}

export default Slider;