import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("Login berhasil");
        navigate("/catalog");
      } else {
        setError("Username atau password salah");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <Container>
      <h1 className="mt-4">Login</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-4">
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
