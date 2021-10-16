import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import { Row, Col, Button, Form, Placeholder, FormValue, Alert } from "react-bootstrap";
import api from "../../api";

//const products = CallApi();

const RegisterProductsScreen = ({producto, setProduct}) => {
    
    const history = useHistory();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();


  const [newProduct, setNewProduct] = useState({
    id: "",
    nameProduct: "",
    unitPrice: 0,
    description: "",
    statusProduct: true
  });

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    //console.log(newProduct);
  };


  const handleClick = async() => {
    const apiResponse = await api.products.create(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      //history.push("/productos");
    }   
    };

  
  
    return (
      <div className = "container mt-5">
                
        <h2>Registro de Productos</h2> 
            <div>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
                </Placeholder>

              
                <Form>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>ID Producto</Form.Label>
                        <Form.Control type="text" name="id" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control type="text" name="nameProduct" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Valor Unitario</Form.Label>
                        <Form.Control type="text" name="unitPrice" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Estado</Form.Label>
                            <Form.Select className="me-sm-2" name="statusProduct" id="inlineFormCustomSelect" onChange={handleChange}>
                                <option value="0">Elegir...</option>
                                <option value="true">Disponible</option>
                                <option value="false">No Disponible</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                </Form>
            </div>
       <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="3">
                            <Button onClick={handleClick}
                                    variant="primary"
                                    className="float-end">
                                      Registrar
                                      </Button>
                        </Form.Group>
                        <Form.Group as={Col} xs="4">
                            <Button variant="danger">Cancelar</Button>
                        </Form.Group>                      
        </Row> 
      </div>
    );
  };
  
  export default RegisterProductsScreen;
