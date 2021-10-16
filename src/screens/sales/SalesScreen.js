import React, {useState} from 'react';
import styles from './Styles.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { listaVentas } from '../../utilities/listaVentas';


const SalesScreen = () => {
  
  // Buscar state
  const [buscar, setBuscar] = useState("");

  const buscarItem = (e) => {
    setBuscar(e.target.value);
    console.log("El item a buscar " + buscar)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <h2>Maestro de Ventas</h2>
          </Col>
          <Col sm={6}>
            <Form>
              <Form.Group className={styles.inlineBlock} controlId="floatingInputGrid">
                  <Form.Control typeof="text" placeholder={buscar || "🔍Buscar"} onChange={buscarItem}/>
                  {/* <Button variant="success" onClick={}>Buscar</Button> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <Table striped bordered hover size="sm" className={styles.center}>
              <thead>
                <tr>
                  <th>ID Venta</th>
                  <th>Vendedor</th>
                  <th>Total Venta</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {listaVentas.map((venta) => 
                (<tr>
                  <td>{venta.idVenta}</td>
                  <td>{venta.vendedor}</td>
                  <td>{venta.total}</td>
                  <td>{venta.status}</td>
                  <td >🖊️ 👁️</td>
                </tr>))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SalesScreen;
