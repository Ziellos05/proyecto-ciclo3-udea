import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Styles.module.css';
import Form from 'react-bootstrap/Form';
import {BsFillPencilFill, BsEyeFill} from 'react-icons/bs';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
// import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import api from "../../../api";
import Vendedores from '../../register-sale/components/Vendedores';

const ViewSale = () => {

  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const {id} = useParams();
  const [sale, setSale] = useState({});
  const [itemsList, setItemsList] = useState([]);
  const [totalSale, setTotalSale] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.sales.getSale(id);
      console.log(response);
      setSale(response);
      console.log(sale);
      setItemsList(sale.saleItems);
      console.log(itemsList);
    };
    fetchData();
  }, []);

  // function suma(array) {
  //   for(let i = 0; i < array.length; i++) {
  //     setTotalSale += array.total[i];
  //   }
  // };

  // suma(itemsList);

    
    return(
      <Container>
  	    <Row>
          <Col className={styles.center}>
            <h2>Editar venta</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3>Nombre de cliente:</h3>
            <h4 className={styles.center}>{sale.clientName}</h4>
          </Col>
          <Col>
            <h3>ID del cliente:</h3>
            <h4 className={styles.center}>{sale.clientID}</h4>
          </Col>
          <Col>
            <h3>Fecha de venta:</h3>
            <h4 className={styles.center}>{sale.date}</h4>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
          <Table striped bordered hover size="sm">
            <thead>
                <tr className={styles.center}>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                    {/* <th>Eliminar</th> */}
                    {/* <td className={styles.centerred} ><BsFillFileExcelFill onClick={() => deleteItem(productOnList.id)}/></td> */}
                </tr>
            </thead>
            <tbody>
              {itemsList.map((item) => (
                <tr>
                    <td className={styles.center}>{item.name}</td>
                    <td className={styles.right}>${item.price}</td>
                    <td className={styles.right}>{item.amount}</td>
                    <td className={styles.right}>${item.total}</td>
                </tr>
              ))}
                <tr>
                    <td colSpan="3" className={styles.right}><h6>Valor Total</h6></td>
                    <td className={styles.right}>${totalSale}</td>
                </tr>
            </tbody>
        </Table>

          </Col>
        </Row>
      </Container>
    );
}

export default ViewSale;