import React, {useState} from 'react';
import styles from './Styles.module.css';
import Vendedores from './components/Vendedores';
import ProductosDisplay from './components/ProductosDisplay';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



const RegisterSaleScreen = () => {

  // Date
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;

  // Array that contains selected products in this sale
  const [newList, setNewList] = useState([]);

  // Total price in this sale
  const [totalSale, setTotalSale] = useState(0);

  // Status of sale, by default as 'En proceso' to send to database
  const [saleStatus, setSaleStatus] = useState("En proceso");

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
     console.log("El producto seleccionado es "+product.name);
  }
  
  // Vendedores state
  const [vendedor, setVendedor] = useState("");
  
  const actualVendedor = (salesman) => {
      setVendedor(salesman);
    }
  

  // Amount of the product to push in list of products in this sale
  const [amount, setAmount] = useState("");

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  }

  // Push the product to newList (products in sale, an array)
  const onSubmitProduct = (product) => {
    if(!product.name) {
      alert("No se ha seleccionado un producto");
    } else if(!amount) {
      alert("No se ha introducido una cantidad para el producto");
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: amount,
        total: amount*product.price,
      }
      setTotalSale(totalSale + newProduct.total);
      newList.push(newProduct);
      setAmount();
      setCurrentProduct({});
      console.log(newProduct);  
      console.log(newList);
    }
  }

  // Set the elements object to send to database
  // const[objectPost, setObjectPost] = useState({});

  // const onSubmitSale = 


  return (
    <div>
      <Container>
        <Row>
          <Col className={styles.center}><h2>Registro de Venta</h2> </Col>
        </Row> 
        <br />
        <Row>
        <Col className={styles.center}><spam>FECHA DE VENTA: {date}</spam></Col>
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
                <tr>
                    <th>ID Producto</th>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                </tr>
            </thead>
            <tbody>
              {newList.map((productOnList) => (
                <tr>
                    <td>{productOnList.id}</td>
                    <td>{productOnList.name}</td>
                    <td className={styles.right}>${productOnList.price}</td>
                    <td className={styles.right}>{productOnList.amount}</td>
                    <td className={styles.right}>${productOnList.total}</td>
                </tr>
              ))}
                <tr>
                    <td colSpan="4" className={styles.right}><h6>Valor Total</h6></td>
                    <td className={styles.right}>${totalSale}</td>
                </tr>
            </tbody>
        </Table>
        <br />
        <Row>
          <Col sm="7"></Col>
          <Col sm="5">
          <Button variant="primary" >Registrar venta</Button>{' '}
          <a href="/ventas"><Button variant="danger">Cancelar</Button>{' '}</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterSaleScreen;
