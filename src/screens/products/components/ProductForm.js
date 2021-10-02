import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Placeholder from 'react-bootstrap/Placeholder'


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
                        <Form.Control type="text" placeholder="Id Producto" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control type="text" placeholder="Producto" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Valor Unitario</Form.Label>
                        <Form.Control type="text" placeholder="Valor Unitario" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Descripción" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Estado</Form.Label>
                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
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