
import React, { useState } from 'react'
import Tshi from '../Assets/Json/Tshi.json'
import { Container,Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Prdcard } from './Prdcard';
import './Pstyle.css';
function MTshirt({cart,setCart}){
    const[Tshits]=useState(Tshi)
    return(
    <Container className='pdlist'>
        <Row lg={12} className='d-flex align-content-start flex-wrap  '>
            <h1 className='mt-2 mb-2 text-center'>Shoes Collections</h1>
               {Tshits.map((item)=>
               <Card key={item.id} className='col-md-4 col-12 m-2 Foodcard justify-content-center align-item-center text-center'>
             <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/>
               </Card>
               )}
        </Row>
    </Container>
    )
}
export default  MTshirt;
