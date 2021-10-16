import React, {useState, useEffect } from 'react';
import styles from './Styles.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
// import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import api from "./components/api";


const SalesScreen = () => {
  
  // Buscar state
  const [buscar, setBuscar] = useState("");

  const buscarItem = (e) => {
    setBuscar(e.target.value);
    console.log("El item a buscar " + buscar)
  }

  // Sales fetch from DB

  const [sales, setSales] = useState([])
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.sales.list();
      setSales(response);
      console.log(sales);
      const responseUsers = await api.users.list();
      setUsers(responseUsers);
      console.log(users);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <h2>Maestro de Ventas</h2>
          </Col>
          <Col sm={6}>
            <Form>
              <Form.Group className={styles.inlineBlock} controlId="floatingInputGrid">
                  <Form.Control typeof="text" placeholder={buscar || "🔍Buscar"} onChange={buscarItem}/>
                  {/* <Button variant="success" onClick={}>Buscar</Button> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <Table striped bordered hover size="sm" className={styles.center}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>ID Cliente</th>
                  <th>Cliente</th>
                  <th>Vendedor</th>
                  <th>Total Venta</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((venta) => 
                (<tr>
                  <td>{venta.date}</td>
                  <td>{venta.clientID}</td>
                  <td>{venta.clientName}</td>
                  <td>{venta.salesman}</td>
                  <td>${venta.totalSale}</td>
                  <td>{venta.saleStatus}</td>
                  <td >🖊️ 👁️</td>
                </tr>))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SalesScreen;
