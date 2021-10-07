import styles from './Styles.module.css';
import CurrentDate from './CurrentDate';
import Vendedores from './Vendedores';
import ProductosDisplay from './ProductosDisplay';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



const RegisterSaleScreen = () => {

  // this.state = {
  //   productsSeleceted: []
  // }  

  // this.onSubmit = (e) => {
  //   e.preventDefault();
  // }

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
                <Form.Label>Nombre de cliente</Form.Label>
                <Form.Control type="text" placeholder="Nombre de cliente"/>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Documento de Cliente</Form.Label>
                <Form.Control type="text" placeholder="Documento Cliente"/>
              </Form.Group>
            </Form>
          </Col>
          <Col className={styles.center}>
            <br />
            <Vendedores />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form sm={2}>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Control type="text" placeholder="Cantidad"/>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={5}>
            <ProductosDisplay />
          </Col>
          <Col sm={3}>
            <Button variant="success" type="submit">Agregar Producto</Button>
          </Col>
        </Row>
        <br />
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
