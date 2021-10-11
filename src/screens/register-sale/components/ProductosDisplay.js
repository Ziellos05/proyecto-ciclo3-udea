import React, {useState} from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import { listaProductos } from '../../../utilities/listaProductos';


const ProductosDisplay = ({onPressProduct}) => {

  const [currentProduct, setCurrentProduct] = useState({});

  const onPressProductDisplay = (product) => {
    onPressProduct(product);
    setCurrentProduct(product);
  }
  
  return(
    <DropdownButton id="dropdown-basic-button" title={currentProduct.name || "Productos en inventario"} className="mb-2">
      {listaProductos.map((product) => (<Dropdown.Item key={product.id} onClick={() => onPressProductDisplay(product)}>{product.name}</Dropdown.Item>))}
    </DropdownButton>
  
  )
}

export default ProductosDisplay;