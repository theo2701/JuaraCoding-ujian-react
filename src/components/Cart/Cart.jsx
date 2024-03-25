import React, { useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useCart } from '../../Context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart(); 
  
    return (
      <Container>
        <h1 className="mt-4">Shopping Cart</h1>
        <ListGroup className="mt-4">
          {cartItems.length === 0 ? (
            <ListGroup.Item>No items in cart</ListGroup.Item>
          ) : (
            cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.title} - ${item.price}
                <Button variant="danger" className="ml-3" onClick={() => removeFromCart(item.id)}> 
                  Remove
                </Button>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Container>
    );
  };
  

export default CartPage;
