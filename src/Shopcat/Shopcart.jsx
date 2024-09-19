import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Orderstatus from "./Falert";
import './Shopcartstyle.css'

export const Shopcart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((total, product) => total + product.price * product.Qty, 0)
    );
  }, [cart]);

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, Qty: item.Qty + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, Qty: Math.max(1, item.Qty - 1) } : item
      )
    );
  };
  const handleRemove = () => {
    const delitem = [...cart];
    delitem.splice(cart, 1);
    setCart(delitem);
  };

  return (
    <Container fluid className="cart_container mt-5">
      <h1 className="text-center">Shopping Cart</h1>
      <Row lg={12} className="">
        <div className="cart_column1 col-lg-7 col-md-7 col-12">
          {cart.length === 0 ? (
            <div className="text-center">
              <h3 className="mt-5 pt-5">Your Cart is empty</h3>
              <h4 className="mb-5 pb-5">Please add Item's</h4>
            </div>
          ) : (
            cart.map((product) => (
              <Card key={product.id} className="cart_card">
                <Card.Img
                  src={product.pic}
                  alt={product.name}
                  className="cart_cardimg img-fluid"
                  variant="top"
                />
                <Card.Body className="cart_cardbody">
                  <Card.Title className="cart_cardname">
                    <h4>{product.name}</h4>
                  </Card.Title>
                  <Card.Title className="cart_cardqty">
                    <h4>Rs {product.price} ₹</h4>
                  </Card.Title>
                </Card.Body>
                <Card.Body className="cart_cardbody1">
                  <Card.Text className="m-0">
                    <p className="Binde">
                      <Button
                        className="Btn"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </Button>
                      <span>{product.Qty} </span>
                      <Button
                        className="Btn"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </Button>
                    </p>
                  </Card.Text>
                </Card.Body>
                <div className="cart_cardbody2">
                  <Button
                    className="RmBtn btn-danger"
                    onClick={() => handleRemove()}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          )}
          <div>
            <h4 className="Col1Tot">Total Amount ({cart.length} items): ₹ {total} </h4>
          </div>
        </div>
        <Card className="cart_column2 col-lg-3 col-md-6 col-12">
          <div>
            <div>
            {cart.map((product) => (
              <h5>
                {product.name} x {product.Qty}
              </h5>
            ))}
            </div>
            <div className="cart_column2btm">
              <h4>Total Amount ({cart.length} items): ₹ {total}</h4>
              <Button className=" btn-danger">Proceed for payment</Button>
              {/* <Orderstatus /> */}
            </div>
          </div>
        </Card>
      </Row>
    </Container>
  );
};
