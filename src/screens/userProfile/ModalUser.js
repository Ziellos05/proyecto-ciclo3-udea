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
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder={user.name} disabled/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder={user.email} disabled/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select aria-label="Default select example">
              <option>{user.rol}</option>
              <option value="1">Vendedor</option>
              <option value="2">Administrador</option>
            </Form.Select>
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