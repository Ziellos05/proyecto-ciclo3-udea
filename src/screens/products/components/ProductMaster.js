import React, {useState} from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import Placeholder from 'react-bootstrap/Placeholder'
import ProductForm from "./ProductForm";
import { func } from "prop-types";

const ProductMaster = () => {

    function ModalProductos(props) {
        return(
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" >
                        Actualizar Producto
                    </Modal.Title>
                </Modal.Header>

                <Form>
                    <Modal.Body>
                        
                        <ProductForm/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">
                            Actualizar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
    function ModalVerProductos(props) {
        return(
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" >
                        Ver Producto
                    </Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>

                        <ProductForm/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Regresar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    function App() {
        const [modalShow, setModalShow] = React.useState(false);
        return(
            <>
            <Button variant="success" onClick={() => setModalShow(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg> Editar
            </Button>

            <ModalProductos 
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            </>
        );
    }

    function View() {
        const [modalShow, setModalShow] = React.useState(false);
        return(
            <>
            <Button variant="light" onClick={() => setModalShow(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    className="bi bi-eye-fill" 
                                    viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>Ver</Button>

            <ModalVerProductos 
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            </>
        );
    }

    return (
        <div>
            <Form>
            <Row className="mb-3">
                        <Col xs="8" />
                        <Form.Group as={Col} xs="3">
                            <Form.Control type="text" placeholder="Buscar Producto" />
                        </Form.Group>
                        <Form.Group as={Col} xs="1">
                            <Button variant="primary">Buscar</Button>
                        </Form.Group> 
                    </Row>
            </Form>


            <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
            </Placeholder>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Café Especial Negro</td>
                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                        <td>Disponible</td>
                        <td>
                            <App/>
                            <View/>
                        </td>
                                
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Café Especial Navegante</td>
                        <td>It is a long established fact that a reader will be distracted by the readable content</td>
                        <td>Disponible</td>
                        <td>
                            <App/>
                            <View/>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Café Especial Libre</td>
                        <td>Many desktop publishing packages and web page editors now</td>
                        <td>No Disponible</td>
                        <td>
                            <App/>
                            <View/>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default ProductMaster;