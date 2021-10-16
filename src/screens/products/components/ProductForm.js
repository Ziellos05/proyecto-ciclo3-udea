import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Placeholder from 'react-bootstrap/Placeholder'
//import api from "../../../api";

const ProductForm = () => {

  
        return (
            <div>
                <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
                </Placeholder>

                <Form>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>ID Producto</Form.Label>
                        <Form.Control type="text" name="id" placeholder="Id Producto" onChange="handleChange" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control type="text" name="nameProduct" placeholder="Producto" onChange="handleChange" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Valor Unitario</Form.Label>
                        <Form.Control type="text" name="unitPrice" placeholder="Valor Unitario" onChange="handleChange" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" placeholder="Descripción" onChange="handleChange" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Estado</Form.Label>
                            <Form.Select className="me-sm-2" name="statusProduct" id="inlineFormCustomSelect" onChange="handleChange">
                                <option value="0">Elegir...</option>
                                <option value="1">Disponible</option>
                                <option value="2">No Disponible</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                </Form>
            </div>
        )
       
}




export default ProductForm;
