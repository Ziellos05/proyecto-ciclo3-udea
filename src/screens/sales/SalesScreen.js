import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './Styles.module.css';
import ViewSale from './components/ViewSale';
import Form from 'react-bootstrap/Form';
import {BsFillPencilFill, BsEyeFill} from 'react-icons/bs';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import api from "../../api";


const SalesScreen = () => {
  
  // Buscar state
  const [buscar, setBuscar] = useState("");

  const buscarItem = (e) => {
      setBuscar(e.target.value);
      console.log(buscar);
  }

  // Sales fetch from DB

  const [sales, setSales] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.sales.list();
      console.log(response);
      setSales(response);
    };

    fetchData();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  return (
    <div>
      <Container>
        <Row>
          <Col className={styles.center}>
            <h2>Maestro de Ventas</h2>
          </Col>
          <Col sm={2}>
            <Form>
              <Form.Group className={styles.inlineBlock} controlId="floatingInputGrid">
                  <Form.Control typeof="text" placeholder={buscar || "🔍Buscar por ID cliente"} onKeyUp={buscarItem}/>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Link to={`/sales/client/${buscar}`}>
            <Button variant="success" onClick={buscarItem}>Buscar</Button>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <Table striped bordered hover size="sm" className={styles.center}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>ID Cliente</th>
                  <th>Cliente</th>
                  <th>Vendedor</th>
                  <th>Total Venta</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((venta) => 
                (<tr>
                  <td>{venta.date}</td>
                  <td>{venta.clientID}</td>
                  <td>{venta.clientName}</td>
                  <td>{venta.salesman}</td>
                  <td>${venta.totalSale}</td>
                  <td>{venta.saleStatus}</td>
                  <td>
                  <Link to={`/sales/${venta._id}`}>
                    <Button variant="primary">
                      <BsFillPencilFill />
                    </Button>
                  </Link>
                  
                  {/* <Button variant="success" onClick={handleShow}>
                      <BsEyeFill />
                  </Button>
                  <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className={styles.center}>Visor de venta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Container>
                        <Row>
                          <Col>
                            <h5>Nombre de cliente: {venta.clientName}</h5>
                          </Col>
                        </Row>
                      </Container>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  </> */}
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SalesScreen;
