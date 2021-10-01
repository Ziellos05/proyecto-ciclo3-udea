import styles from './Styles.module.css';
import CurrentDate from './CurrentDate';
import SalesTable from './SalesTable';
import Vendedores from './Vendedores';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';


const SalesScreen = () => {
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
                <Form.Control type="text" placeholder="Nombre de cliente" sytle={styles.right}/>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Documento Cliente" sytle={styles.center}/>
              </Form.Group>
            </Form>
          </Col>
          <Col className={styles.center}>
            <Vendedores />
          </Col>
        </Row>
        <SalesTable />
        <br />
        <Row>
          <Col sm="8"></Col>
          <Col sm="4">
          <Button variant="primary">Registrar venta</Button>{' '}
          <Button variant="danger">Cancelar</Button>{' '}
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default SalesScreen;
