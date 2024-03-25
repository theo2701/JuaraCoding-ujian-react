// import React, { useState, useEffect } from 'react';
// import { Container, Card, Button } from 'react-bootstrap';
// import { useCart } from './CartContext';

// const ProductCatalogPage = () => {
//   const [products, setProducts] = useState([]);
//  // const { addToCart } = useCart();

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product);

//   return (
//     <Container>
//       <h1 className="mt-4">Product Catalog</h1>
//       <div className="d-flex flex-wrap mt-4">
//         {products.map((product) => (
//           <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
//             <Card.Img variant="top" src={product.image} />
//             <Card.Body>
//               <Card.Title>{product.title}</Card.Title>
//               <Card.Text>${product.price}</Card.Text>
//               <Button variant="primary" onClick={() => handleAddToCart(product)}>
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </Container>
//   );
// };

// };

// export default ProductCatalogPage;

import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCatalogPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Product Catalog</h1>
      <div className="d-flex flex-wrap mt-4">
        {products.length == 0 ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={handleClick}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </Container>
  );
};

export default ProductCatalogPage;
