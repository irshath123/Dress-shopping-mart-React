import React, { useState } from 'react'
import Hoodie from '../Assets/Json/Hoodie.json'
import { Container,Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Prdcard } from '../Products/Prdcard';

function Hoodies({cart,setCart}){
    const[Watc]=useState(Hoodie)
    return(
    <Container className='pdlist'>
        <Row lg={12} className='d-flex align-content-start flex-wrap  '>
            <h1 className='mt-2 mb-2 text-center'>Watch Collections</h1>
               {Watc.map((item)=>
               <Card key={item.id} className='col-md-4 col-12 m-2 Foodcard justify-content-center align-item-center text-center'>
             <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/>
               </Card>
               )}
        </Row>
    </Container>
    )
}
export default Hoodies;