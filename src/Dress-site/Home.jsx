import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Slider from './Slider'
import {  Link, Outlet } from "react-router-dom";
import './Home.css';
import Slider1 from './Slider2';

export const Home = () =>{
 return (
    <Container fluid className='home mt-5'> 
    <Slider/>
    <h1 className='ms-5 me-5 mt-4 mb-4 text-center'>Only For Mens</h1>
    <Row>
        <div className='menu'>
          <div>
            <Link to={"/Tshirt"} className='lStyle'>
            <img src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1a_ibDj6cc.jpg?format=webp&w=480&dpr=1.3' alt='' className='img-fluid' width={200} height={100}/>
            <h5>Tshirt</h5>
            </Link>

          </div> 
          <div>
            <Link to={"/Shirt"} className='lStyle'>
            <img src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5a_9QI1u35.jpg?format=webp&w=480&dpr=1.3' alt='' className='img-fluid' width={200} height={100}/>
            <h5>Shirt</h5>
            </Link>

          </div>  
          <div>
            <Link to={"/Pant"} className='lStyle'>
            <img src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2a.jpg?format=webp&w=480&dpr=1.3' alt='' className='img-fluid' width={200} height={100}/>
            <h5>Pant</h5>
            </Link>

          </div>  
          <div>
            <Link to={"/Shoe"} className='lStyle'>
            <img src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_27_gWZQmNa.jpg?format=webp&w=480&dpr=1.3' alt='' className='img-fluid' width={200} height={100}/>
            <h5>Shoes</h5>
            </Link>

          </div>   
        </div>

    </Row>
    <Outlet/>
    <Slider1/>
    </Container>
 )   
}