import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Form, Placeholder, FormValue, Alert } from "react-bootstrap";
import api from "../../api";
import ProductForm from "./components/ProductForm";

//const products = CallApi();

const EditProductScreen = ({producto, setProducts}) => {
    
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
          console.log(productId);
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
      setProducts([...producto, newProduct]);
      //history.push("/productos");
    }   
    };

    return (
      <div className = "container mt-5">
                
        <h2>Editar Productos</h2> 
            <div>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Placeholder as="p" animation="glow" size="lg">
                <Placeholder xs={12} />
                </Placeholder>

                <ProductForm 
                handleChange={handleChange}
                handleClick={handleClick}
                formValue={newProduct}
                />
                
            </div>
       
      </div>
    );
  };
  
  export default EditProductScreen;
