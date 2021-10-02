import React from "react";
import ProductForm from "./components/ProductForm";
import { Row, Col, Button, Form } from "react-bootstrap";

const RegisterProductsScreen = () => {
    return (
      <div className = "container mt-5">
        <h2>Registro de Productos</h2> 
        <ProductForm/>
        <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="3">
                            <Button variant="primary">Registrar</Button>
                        </Form.Group>
                        <Form.Group as={Col} xs="4">
                            <Button variant="danger">Cancelar</Button>
                        </Form.Group>                      
        </Row> 
      </div>
    );
  };
  
  export default RegisterProductsScreen;