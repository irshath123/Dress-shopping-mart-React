import React from 'react';
export default function Fcart({ cart }) {
  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className='PRD'>
      <h2>Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          cart.map((product, index) => (
            <li key={index}>
              <img src={product.pic} alt="" />
              <h4>{product.name}</h4> 
              <p><button className='Btnn'>-</button>
               RS ₹{product.price}
              <button className='Btnn'>+</button></p> 
              </li>
          ))
        )}
      </ul>
      <h3>Total: ₹ {getTotal()}</h3>
    </div>
  );
}

