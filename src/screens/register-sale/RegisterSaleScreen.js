import { useState } from 'react';
import styles from './Styles.module.css';
import CurrentDate from './CurrentDate';
import Vendedores from './Vendedores';
import ProductosDisplay from './ProductosDisplay';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';



const RegisterSaleScreen = () => {

  const [name, setName] = useState("");

  return (
    <div>

      <Container>
        <Row>
          <Col className={styles.center}><h2>Registro de Venta</h2> </Col>
        </Row> 
        <br />
        <Row>
        <Col className={styles.center}><CurrentDate /></Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nombre de cliente" />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Documento Cliente" value={name} onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
            </Form>
          </Col>
          <Col className={styles.center}>
            <Vendedores />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form className={styles.right} sm={2}>
              <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Cantidad"/>
              </Form.Group>
            </Form>
          </Col>
          <Col className={styles.center} sm={6}>
            <ProductosDisplay />
          </Col>
          <Col sm={4}>
            <Button variant="success">Agregar Producto</Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID Producto</th>
                  <th>Producto</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Precio Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>####</td>
                  <td>Producto 1</td>
                  <td className={styles.right}>$$$</td>
                  <td>####</td>
                  <td className={styles.right}>$$$</td>
                </tr>
                <tr>
                <td>2</td>
                  <td>####</td>
                  <td>Producto 2</td>
                  <td className={styles.right}>$$$</td>
                  <td>####</td>
                  <td className={styles.right}>$$$</td>
                </tr>
                <tr>
                  <td colSpan="5" className={styles.right}>Valor Total</td>
                  <td className={styles.right}>$$$$$$</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <br />
        <Row>
          <Col sm="7"></Col>
          <Col sm="5">
          <Button variant="primary">Registrar venta</Button>{' '}
          <Button variant="danger">Cancelar</Button>{' '}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterSaleScreen;
