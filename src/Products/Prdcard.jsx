import React from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import './Pstyle.css';

export const Prdcard = ({ item, cart, setCart }) => {

    const addCart=()=>{
        setCart([...cart,item])
    }
    const RemoveCart=()=>{
        setCart(cart.filter((c)=> c.id !== item.id));
    };
  return (
    <>
      <Card.Img src={item.pic} alt={item.name} className="Foodimg m-0 p-0" variant="top" />
      <Card.Body className="m-0 p-0">
          <Card.Title className="FoodTitle m-0 p-0"><h4>{item.name}</h4></Card.Title>
          <div className="FCbotm" >
            <div className='FpriceRating'><Card.Text className="Foodprice m-0 p-0"><h5>RS ₹ {item.price}</h5><p className='FpriceRat'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span></p></Card.Text>
            </div>
            <div className='FButn'>{cart.includes(item) ? (<Button className="FBtn btn-warning" onClick={RemoveCart}>Remove</Button>)
        : (<Button className="FBtn btn-warning" onClick={addCart}>Add</Button>)}</div>
        </div>
        </Card.Body>
        
    </>
  )
}
