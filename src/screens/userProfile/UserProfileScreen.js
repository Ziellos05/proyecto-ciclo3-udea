import React, { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';

import {
  Container,
  Col,
  Row,
  Table,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import ModalUser from "./ModalUser";
import api from "../../api";

const UserProfileScreen = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.users.list();
      setListaUsuarios(response);
    };

    fetchData();
  }, []);

  const deleteUser = (event) => {
    const response = api.users.delete(event.target.id);
    console.log(response);
  };

  return (
    <div>
      <h2 className="mb-4">Maestro de usuarios</h2>

      <Container>
        <Row className="mb-3">
          <Col></Col>
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
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {listaUsuarios.map((usuario) => (
                  <tr key={usuario.email}>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td>
                      <Row>
                        <Col>
                          <ModalUser key={usuario._id} user={usuario} />
                        </Col>
                        <Col>
                          <Link to={`/Inicio`}>
                            <Button
                              variant="danger"
                              onClick={deleteUser}
                              id={usuario.email}
                            >
                              Borrar
                            </Button>{" "}
                          </Link>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                ))}
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
