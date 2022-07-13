import React, {useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import styles from '../Styles.module.css';
import { BsFillPersonBadgeFill, BsFillPersonFill, BsFillCreditCard2FrontFill, BsCartCheckFill, BsCalendar3WeekFill} from 'react-icons/bs';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import api from "../../../api";

const ViewSale = () => {

  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { id } = useParams();
  const [venta, setVenta] = useState({});
  const [itemsList, setItemsList] = useState([]);
  const [ventaStatus, setVentaStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.sales.getSale(id);
      setItemsList(response.saleItems);
      setVentaStatus(response.saleStatus);
      setVenta(response);
    };
    fetchData();
  }, []);

  const saleUpd = {
    _id: id,
    clientName: venta.clientName,
    clientID: venta.clientID,
    date: venta.date,
    salesman: venta.salesman,
    totalSale: venta.totalSale,
    saleStatus: ventaStatus,
    salesItems: itemsList,

  }

  const history = useHistory();

  const handleClick = async() => {
    console.log(saleUpd);
    const apiResponse = await api.sales.edit(saleUpd);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
    } else {
      setSuccess(apiResponse);
      history.push("/ventas");
    }
  }


    return(
      <Container>
  	    <Row>
          <Col className={styles.center}>
            <h2>Editar venta</h2>
          </Col>
        </Row>
        <br />
        <Row className={styles.center}>
          <Col>
            <h3><BsFillPersonFill /> Nombre de cliente:</h3>
            <h4>{venta.clientName}</h4>
          </Col>
          <Col>
            <h3><BsFillCreditCard2FrontFill /> ID del cliente:</h3>
            <h4>{venta.clientID}</h4>
          </Col>
          <Col>
            <h3><BsCalendar3WeekFill /> Fecha de venta:</h3>
            <h4>{venta.date}</h4>
          </Col>
        </Row>
        <br />
        <Row className={styles.center}>
          <Col>
            <h3><BsFillPersonBadgeFill /> Vendedor: </h3>
            <h4>{venta.salesman}</h4>
          </Col>
          <Col>
            <h3><BsCartCheckFill /> Estado: </h3>
            <h4>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {ventaStatus}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setVentaStatus("En proceso")}>En proceso</Dropdown.Item>
                  <Dropdown.Item onClick={() => setVentaStatus("Cancelado")}>Cancelado</Dropdown.Item>
                  <Dropdown.Item onClick={() => setVentaStatus("Entregado")}>Entregado</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Table striped bordered hover size="sm">
            <thead>
                <tr className={styles.center}>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                </tr>
            </thead>
            <tbody>
              {itemsList.map((item) => (
                <tr>
                    <td className={styles.center}>{item.name}</td>
                    <td className={styles.right}>${item.price}</td>
                    <td className={styles.right}>
                      {item.amount}
                    </td>
                    <td className={styles.right}>${item.total}</td>
                </tr>
              ))}
                <tr>
                    <td colSpan="3" className={styles.right}><h6>Valor Total</h6></td>
                    <td className={styles.right}>${venta.totalSale}</td>
                </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col sm="8"></Col>
            <Col sm="4">
            <Button variant="primary" onClick={handleClick}>Actualizar venta</Button>{' '}
            <Link to={`/ventas`}><Button variant="danger">Cancelar</Button>{' '}</Link>
            </Col>
        </Row>

      </Container>
    );
}

export default ViewSale;