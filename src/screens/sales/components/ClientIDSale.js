import React, {useState, useEffect } from 'react';
import styles from '../Styles.module.css';
import Form from 'react-bootstrap/Form';
import {BsFillPencilFill, BsEyeFill} from 'react-icons/bs';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
import api from "../../../api";

const ClientIDSale = () => {

  const [sale, setSale] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.sales.byClientID();
      console.log(response);
      setSale(response);
    };

    fetchData();
  }, []);

  const [clientName, setClientName] = useState("");

  const onChangeName = (e) => {
    setClientName(e.target.value);
    console.log("el nombre es " + clientName)
  }

    
    return(
      <Container>
  	    <Row>
          <Col className={styles.center}>
            <h2>Editar venta</h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre de cliente</Form.Label>
                <Form.Control type="text" placeholder={clientName || "Nombre de cliente"} onChange={onChangeName}/>
              </Form.Group>
            </Form>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    );
}

export default ClientIDSale;