import React, {useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../Styles.module.css';
import {BsFillPencilFill} from 'react-icons/bs';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import api from "../../../api";

const ClientIDSale = () => {

  const {clientID} = useParams();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.sales.byClientID(clientID);
      console.log(response);
      setSales(response);
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
            <h2>Búsqueda de ventas por ID de cliente</h2>
          </Col>
        </Row>
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
                  <td>
                  <Link to={`/sales/${venta._id}`}>
                    <Button variant="primary">
                      <BsFillPencilFill />
                    </Button>
                  </Link>
                  </td>
                </tr>
                ))}

              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
}

export default ClientIDSale;