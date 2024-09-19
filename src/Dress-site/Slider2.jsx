import React, { useState } from 'react'
import { Container, Row, Col ,Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Slidstyle.css';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

function Slider1() {
    const [show, setShow] = useState(false);
  return (
    <Container fluid className='mt-5'>
        <Row className='align-items-center'>
                <Col md={7}>
                <Carousel>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/2467420240809193048.jpg?format=webp&w=1500&dpr=1.3"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5 style={{color:"black",fontWeight:"bold"}}>Galaxy Book 4 360</h5> */}
          <p style={{color:"black"}} className='d-none d-sm-block'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/7942320240809211632.jpg?format=webp&w=1500&dpr=1.3"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p  style={{color:"black"}} className='d-none d-sm-block'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        
      <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/3404820230612190707.jpg?format=webp&w=1500&dpr=1.3"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p style={{color:"black"}} className='d-none d-sm-block'></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </Col>
                <Col md={5}>
                <div className='p-3'>
                    <h2 className='h1'>Special Offer</h2>
                    <p className="lead-text-muted">This week offers is going on grab it</p>
                    <Button className='Bn1' varient='primary' onClick={()=> setShow(true)}><i class="bi bi-cart-check"></i> Buy Now</Button>
                </div>
                </Col>
            </Row>
            <ToastContainer
          className="p-3 position-fixed bottom-0 end-0"
          position='bottom-end'
          
        >
            <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>item added to cart.</Toast.Body>
          </Toast>
        </ToastContainer>


    </Container>
  );
}

export default Slider1;