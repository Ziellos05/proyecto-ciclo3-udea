import React, {useEffect, useState} from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from "../../api";


const ProductsScreen = ({producto}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };

    fetchData();
  }, []);

  return (
  <div>
      <h1 className="text-center mt-5 mb-5">Maestro de Productos</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Valor</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto)=> {
              return (
                <tr key={producto._id}>
                  <td>{producto.id}</td>
                  <td>{producto.nameProduct}</td>
                  <td> $ {producto.unitPrice}</td>
                  <td>{producto.description}</td>
                  <td>{producto.statusProduct.toString()}</td>
                  <td>
                    <Link to={`/Gestion/Edit/${producto._id}`}>
                      <Button variant="primary">  
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      fill="currentColor" 
                      className="bi bi-pencil-fill" 
                      viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      //onClick={deleteProduct}
                      id={producto._id}
                      className="ms-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      fill="currentColor" 
                      className="bi bi-trash-fill" 
                      viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
);

};

export default ProductsScreen;
