import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import {listaUsuarios} from "../../utilities/listaUsuarios";

const UserProfileScreen = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registro de usuarios
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="email" placeholder="Pepito Perez" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="pperez@reactivos.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select aria-label="Default select example">
                <option>Rol Usuario</option>
                <option value="1">Cliente</option>
                <option value="2">Vendedor</option>
                <option value="3">Administrador</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Estado
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Autorizado"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="No autoriado"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Pendiente"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }

  function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="link" onClick={() => setModalShow(true)}>
          Editar
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Maestro de usuarios</h2>
        <Container>
        <Row className="mb-3">
          <Col>
          <Button variant="primary">Crear Usuario</Button>{" "}
          </Col>
          <Col>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Escriba nombre del usuario"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          </Col>
          </Row>
          <Row>
            <Col sm={11}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carlos Perez</td>
              <td>cperez@reactivos.com</td>
              <td>Autorizado</td>
              <td>Administrador Supremo</td>
              <td>
                <App />
              </td>
            </tr>
            <tr>
              <td>Carlos Perez</td>
              <td>cperez@reactivos.com</td>
              <td>Autorizado</td>
              <td>Administrador Supremo</td>
              <td>
                <App />
              </td>
            </tr>
            <tr>
              <td>Carlos Perez</td>
              <td>cperez@reactivos.com</td>
              <td>Autorizado</td>
              <td>Administrador Supremo</td>
              <td>
                <App />
              </td>
            </tr>
          </tbody>
        </Table>
        </Col>
        <Col sm={1}></Col>
        </Row>
        </Container>
    </div>
  );
};

export default UserProfileScreen;
