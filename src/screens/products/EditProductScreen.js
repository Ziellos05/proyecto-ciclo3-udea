import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Form, Placeholder, FormValue, Alert } from "react-bootstrap";
import api from "../../api";

//const products = CallApi();

const EditProductScreen = ({producto, setProduct}) => {
    
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const { productId } = useParams();


  const [newProduct, setNewProduct] = useState({
    id: "",
    nameProduct: "",
    unitPrice: 0,
    description: "",
    statusProduct: true
  });

  useEffect(() => {
      const fetchData = async () => {
          const response = await api.products.getProduct(productId);
          setNewProduct(response);
      };
      fetchData();
  }, []
  
  );

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    //console.log(newProduct);
  };


  const handleClick = async() => {
    const apiResponse = await api.products.edit(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      //history.push("/productos");
    }   
    };

    const formValue=[newProduct];

    return (
      <div className = "container mt-5">
                
        <h2>Editar Productos</h2> 
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
                        <Form.Control type="text" name="id" onChange={handleChange} value={formValue.id} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control type="text" name="nameProduct" onChange={handleChange} value={formValue.nameProduct} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Valor Unitario</Form.Label>
                        <Form.Control type="text" name="unitPrice" onChange={handleChange} value={formValue.unitPrice} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" onChange={handleChange} value={formValue.description} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" >
                        <Col xs="4" />
                        <Form.Group as={Col} xs="4">
                        <Form.Label>Estado</Form.Label>
                            <Form.Select className="me-sm-2" name="statusProduct" id="inlineFormCustomSelect" onChange={handleChange} value={formValue.statusProduct}>
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
                                      Guardar
                                      </Button>
                        </Form.Group>
                        <Form.Group as={Col} xs="4">
                            <Button variant="danger">Cancelar</Button>
                        </Form.Group>                      
        </Row> 
      </div>
    );
  };
  
  export default EditProductScreen;
