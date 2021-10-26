import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import api from "../../api";
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  const user = props.user;

  const [newRol, setNewRol] = React.useState({ rol: "" });

  const handleChange = (event) => {
    setNewRol({ ...newRol, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.users.edit(user, newRol);
    console.log(apiResponse);
  };

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
            <Form.Control type="text" placeholder={user.name} disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder={user.email} disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              name="rol"
              onChange={handleChange}
              value={newRol.rol}
            >
              <option>{user.rol}</option>
              <option value="Vendedor">Vendedor</option>
              <option value="Administrador">Administrador</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/Inicio`}>
            <Button variant="primary" onClick={handleClick}>
              Save changes
            </Button>{" "}
          </Link>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

function ModalUser({ user }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
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
