import React, { useState } from 'react'
import Glass from '../Assets/Json/Glass.json'
import { Container,Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Prdcard } from '../Products/Prdcard';

function Coolers({cart,setCart}){
    const[glass]=useState(Glass)
    return(
    <Container className='pdlist'>
        <Row lg={12} className='d-flex align-content-start flex-wrap  '>
            <h1 className='mt-2 mb-2 text-center'>Cooler Collections</h1>
               {glass.map((item)=>
               <Card key={item.id} className='col-md-4 col-12 m-2 Foodcard justify-content-center align-item-center text-center'>
             <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/>
               </Card>
               )}
        </Row>
    </Container>
    )
}
export default  Coolers;