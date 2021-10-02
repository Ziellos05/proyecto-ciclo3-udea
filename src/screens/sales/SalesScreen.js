import React from 'react';
import styles from './Styles.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import ReporteVentas from './ReporteVentas';
import Table from "react-bootstrap/Table";
import { listaVentas } from '../../utilities/listaVentas';


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
                  {/* <Button variant="success">Buscar</Button> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <ReporteVentas />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SalesScreen;
