import React from 'react';
import styles from './Styles.module.css';
import NavStructure from '../../routes/navStructure/NavStructure';
import CurrentDate from './CurrentDate';
import SalesTable from './SalesTable';
import Vendedores from './Vendedores';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';


const SalesScreen = () => {
  return (
    <div>
      <NavStructure />
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4} className={styles.center}><h2>Registro de Venta</h2> </Col>
          <Col sm={4} className={styles.center}><h4>Venta Id xxxxxxx</h4></Col>
        </Row>
        <br />
        <Row>
        <Col sm={4}></Col>
        <Col sm={4}></Col>
        <Col sm={4} className={styles.right}><CurrentDate /></Col>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nombre de cliente" sytle={styles.right}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Documento Cliente" sytle={styles.right}/>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Vendedores />
          </Col>
        </Row>
        <SalesTable />
        <br />
        <Row>
          <Col sm="9"></Col>
          <Col sm="3">
          <Button variant="success">Registrar</Button>{' '}
          <Button variant="danger">Cancelar</Button>{' '}
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default SalesScreen;
