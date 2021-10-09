import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { listaUsuarios } from "../../utilities/listaUsuarios";

function MyVerticallyCenteredModal(props) {
  const user = props.user;
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
            <Form.Control type="email" placeholder={user.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="pperez@reactivos.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select aria-label="Default select example">
              <option>Rol Usuario</option>
              <option value="1">Vendedor</option>
              <option value="2">Administrador</option>
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

function ModalUser({ user }) {
  const [modalShow, setModalShow] = React.useState(false);  

  return (
    <>
      <Button variant="link" onClick={() => setModalShow(true)}>
        Editar
      </Button>

      <MyVerticallyCenteredModal
        user={user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalUser;