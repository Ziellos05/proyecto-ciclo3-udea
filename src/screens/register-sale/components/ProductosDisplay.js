import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownMenu from 'react-bootstrap/DropdownMenu';
// import DropdownToggle from 'react-bootstrap/DropdownToggle';
// import { listaProductos } from '../../../utilities/listaProductos';
import api from "./api";


const ProductosDisplay = ({onPressProduct}) => {

  const [productsDB, setProductsDB] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const responseProducts = await api.products.list();
      setProductsDB(responseProducts);
      console.log(productsDB);
    };
    fetchData();
  }, [])


  // Set current 
  const [currentProduct, setCurrentProduct] = useState({});

  const onPressProductDisplay = (product) => {
    onPressProduct(product);
    setCurrentProduct(product);
  }


  return(
    <DropdownButton id="dropdown-basic-button" title={currentProduct.nameProduct || "Productos en inventario"} className="mb-2">
      {productsDB.map((product) => 
        (<Dropdown.Item onClick={() => onPressProductDisplay(product)}>
          {product.nameProduct}
        </Dropdown.Item>
        
      ))}
    </DropdownButton>
  )
}

export default ProductosDisplay;