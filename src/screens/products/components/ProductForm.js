import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Placeholder from 'react-bootstrap/Placeholder'
//import api from "../../../api";

const ProductForm = ({handleChange, handleClick, formValue}) => {

  
        return (
           
            <Form>
            <Row className="mb-3" >
                <Col xs="4" />
                <Form.Group as={Col} xs="4">
                <Form.Label>ID Producto</Form.Label>
                <Form.Control type="text" name="id" onChange={handleChange} value={formValue.id} />
                </Form.Group>
            </Row>
            <Row className="mb-3" >
                <Col xs="4" />
                <Form.Group as={Col} xs="4">
                <Form.Label>Producto</Form.Label>
                <Form.Control type="text" name="nameProduct" onChange={handleChange} value={formValue.nameProduct} />
                </Form.Group>
            </Row>
            <Row className="mb-3" >
                <Col xs="4" />
                <Form.Group as={Col} xs="4">
                <Form.Label>Valor Unitario</Form.Label>
                <Form.Control type="text" name="unitPrice" onChange={handleChange} value={formValue.unitPrice} />
                </Form.Group>
            </Row>
            <Row className="mb-3" >
                <Col xs="4" />
                <Form.Group as={Col} xs="4">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="description" onChange={handleChange} value={formValue.description} />
                </Form.Group>
            </Row>
            <Row className="mb-3" >
                <Col xs="4" />
                <Form.Group as={Col} xs="4">
                <Form.Label>Estado</Form.Label>
                    <Form.Select className="me-sm-2" name="statusProduct" id="inlineFormCustomSelect" onChange={handleChange} value={formValue.statusProduct}>
                        <option value="0">Elegir...</option>
                        <option value="true">Disponible</option>
                        <option value="false">No Disponible</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="3">
                            <Button onClick={handleClick}
                                    variant="primary"
                                    className="float-end">
                                      Actualizar
                                      </Button>
                        </Form.Group>
                        <Form.Group as={Col} xs="4">
                            <Button variant="danger">Cancelar</Button>
                        </Form.Group>                      
        </Row> 

        </Form>

        )
       
}




export default ProductForm;