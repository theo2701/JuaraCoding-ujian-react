import { Button, Form } from 'react-bootstrap'
import React, { useState } from "react";
import axios from 'axios';

// const AddProduct = () => {
//     const [product, setProduct] = useState({
//       title: "" ,
//       price: "",
//       description: "",
//       image: "",
//       category: "", 
//     });

// 	const  handleChange = (event) => {
//         const { name, value } =  event.target;
// 		setProduct({...product, [name]: value});
// 	};

//     const handleSubmit=(event)=>{
//        event.preventDefault();
//        addToCart(e);
//        console.log('trigerred: ', product);
//     };

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");


const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        title,
        price,
        description,
        image,
        category,
      });
      console.log("Produk Berhasil Ditambahkan:", response.data);
      setError("");
      // Redirect
    } catch (error) {
      console.error("Gagal Menambahkan Produk:", error.response.data);
      setError("Gagal Menambahkan Produk");
    }
  };

  return (
   <React.Fragment>
    <Form onSubmit={handleAddProduct}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="test product" />
      </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="13.5" />
      </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="lorem ipsum set" />
      </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL Images" />
      </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="electronic" />
      </Form.Group>     
      <Button type='submit' variant='primary'>Submit</Button>
    </Form>
   </React.Fragment>
  )
}

export default AddProduct
