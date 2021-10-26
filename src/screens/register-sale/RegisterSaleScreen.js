import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
// import {BsFillFileExcelFill} from 'react-icons/bs'
import styles from './Styles.module.css';
import Vendedores from './components/Vendedores';
import ProductosDisplay from './components/ProductosDisplay';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import api from '../../api';



const RegisterSaleScreen = () => {

  // Date
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  // Array that contains selected products in this sale
  const [newList, setNewList] = useState([]);

  // Total price in this sale
  const [totalSale, setTotalSale] = useState(0);

  // Client state
  const [clientName, setClientName] = useState("");

  const onChangeName = (e) => {
    setClientName(e.target.value);
    console.log("el nombre es " + clientName)
  }

  // Client ID state
  const[clientID, setClientID] = useState("");

  const onChangeID = (e) => {
    setClientID(e.target.value);
    console.log("el id es " + clientID)
  }

  // ProductosDisplay state
  const [currentProduct, setCurrentProduct] = useState({});

  const onPressProduct = (product) => {
    setCurrentProduct(product);
     console.log("El producto seleccionado es "+product.nameProduct);
  }
  
  // Vendedores state
  const [vendedor, setVendedor] = useState("");
  
  const actualVendedor = (salesman) => {
      setVendedor(salesman);
    }
  
  // Amount of the product to push in list of products in this sale
  const [amount, setAmount] = useState(0);

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  }

  // Items counter for delete in sale list
  const [itemCounter, setItemCounter] = useState(0);

  // Delete item function (Delete from items list)
  const deleteItem = (id) => {
    console.log("elemento a borrar "+ id)
    newList.splice(id, id);
    console.log(newList);
    setNewList(newList);
  }

  // Push the product to newList (products in sale, an array)
  const onSubmitProduct = (product) => {
    if(!product.nameProduct) {
      alert("No se ha seleccionado un producto");
    } else if(!amount) {
      alert("No se ha introducido una cantidad para el producto");
    }else if(isNaN(amount) || amount < 0) {
      alert("Cantidad de producto no válida");
    }else {
      const newProduct = {
        name: product.nameProduct,
        price: product.unitPrice,
        amount: amount,
        total: amount*product.unitPrice,
        id: itemCounter,
      }
      setTotalSale(totalSale + newProduct.total);
      newList.push(newProduct);
      setAmount();
      setCurrentProduct({});
      setItemCounter(itemCounter + 1);
      // console.log(newProduct);  
      // console.log(newList);
    }
  }

  // Sale object to post
  const newSale = {
    clientName: clientName,
    clientID: clientID,
    date: date,
    salesman: vendedor.name,
    totalSale: totalSale,
    saleStatus: "En proceso",
    saleItems: newList
  }

  // Const to redirect to Sales screen
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  // Const to redirect
  const history = useHistory();

const postSale = async() => {
  const apiResponse = await api.sales.create(newSale);
  if (apiResponse.err) {
    setError(apiResponse.err.message);
    console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      history.push("/ventas");
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className={styles.center}><h2>Registro de Venta</h2> </Col>
        </Row> 
        <br />
        <Row>
        <Col className={styles.center}><spam>FECHA DE VENTA: {date} </spam></Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre de cliente</Form.Label>
                <Form.Control type="text" placeholder={clientName || "Nombre de cliente"} onChange={onChangeName}/>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>ID de Cliente</Form.Label>
                <Form.Control type="text" placeholder={clientID || "Documento Cliente"} onChange={onChangeID} />
              </Form.Group>
            </Form>
          </Col>
          <Col className={styles.center}>
            <br />
            <Vendedores actualVendedor={actualVendedor}/>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form sm={2}>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Control type="text" placeholder={amount || "Cantidad"} onChange={onChangeAmount}/>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={5}>
            <ProductosDisplay onPressProduct={onPressProduct}/>
          </Col>
          <Col sm={3}>
            <Button variant="success" type="submit" onClick={() => onSubmitProduct(currentProduct)}>Agregar Producto</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
          </Col>
        </Row>
          <Table striped bordered hover size="sm">
            <thead>
                <tr className={styles.center}>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                    {/* <th>Eliminar</th> */}
                </tr>
            </thead>
            <tbody>
              {newList.map((productOnList) => (
                <tr>
                    <td>{productOnList.name}</td>
                    <td className={styles.right}>${productOnList.price}</td>
                    <td className={styles.right}>{productOnList.amount}</td>
                    <td className={styles.right}>${productOnList.total}</td>
                    {/* <td className={styles.centerred} ><BsFillFileExcelFill onClick={() => deleteItem(productOnList.id)}/></td> */}
                </tr>
              ))}
                <tr>
                    <td colSpan="3" className={styles.right}><h6>Valor Total</h6></td>
                    <td className={styles.right}>${totalSale}</td>
                </tr>
            </tbody>
        </Table>
        <br />
        <Row>
          <Col sm="8"></Col>
          <Col sm="4">
          <Button variant="primary" onClick={postSale}>Registrar venta</Button>{' '}
          <Link to={`/ventas`}><Button variant="danger">Cancelar</Button>{' '}</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterSaleScreen;
