import React from 'react';
import styles from './Styles.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";


const SalesScreen = () => {
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
                  <Form.Control typeof="number" placeholder="🔍Buscar"/>
                  <Button variant="success">Buscar</Button>
              </Form.Group>
            </Form>
          </Col>
          {/* <Col sm={1}></Col> */}
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
                <tr>
                  <td>####</td>
                  <td>Vendedor 1</td>
                  <td className={styles.right}>$$$</td>
                  <td>En proceso</td>
                  <td >🖊️ 👁️</td>
                </tr>
                <tr>
                  <td>####</td>
                  <td>Vendedor 2</td>
                  <td className={styles.right}>$$$</td>
                  <td>Entregada</td>
                  <td>🖊️ 👁️</td>
                </tr>
                <tr>
                  <td>####</td>
                  <td>Vendedor 3</td>
                  <td className={styles.right}>$$$</td>
                  <td>Entregada</td>
                  <td >🖊️ 👁️</td>
                </tr>
                <tr>
                  <td>####</td>
                  <td>Vendedor 4</td>
                  <td className={styles.right}>$$$</td>
                  <td>Cancelada</td>
                  <td >🖊️ 👁️</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default SalesScreen;
