import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import ModalUser from "./ModalUser";
import NewModalUser from "./NewModalUser";
import { listaUsuarios } from "../../utilities/listaUsuarios";

const UserProfileScreen = () => {
  return (
    <div>
      <h2 className="mb-4">Maestro de usuarios</h2>
      <Container>
        <Row className="mb-3">
          <Col>
            <NewModalUser />
          </Col>
          <Col>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Escriba correo del usuario"
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
              {listaUsuarios.map((usuario) => (
                <tbody>
                  <tr>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>Autorizado</td>
                    <td>{usuario.rol}</td>
                    <td>
                      <ModalUser key={usuario._id} user={usuario} />
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfileScreen;
