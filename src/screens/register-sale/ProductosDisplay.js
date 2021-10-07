import React, {useState} from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import { listaProductos } from '../../utilities/listaProductos';


const ProductosDisplay = () => {

    const [newList, setNewList] = useState([]);

    const [currentProduct, setCurrentProduct] = useState({});

    const [value, setValue] = useState("");
    const handleChange = (event) => {
      console.log(event.target.value);
      // DropdownButton.title = value;
      // console.log(value);
    }

    const onPressProduct = (product) => { 
      newList.push(product);
      setCurrentProduct(product);
      //alert(`${JSON.stringify(product)}`);
    };
    
    return(
      <DropdownButton id="dropdown-basic-button" title={currentProduct.name || "Productos en inventario"} className="mb-2">
        {listaProductos.map((product) => (<Dropdown.Item key={product.id} value={product.name} onClick={() => onPressProduct(product)}>{product.name}</Dropdown.Item>))}
      </DropdownButton>
    
    )
}

export default ProductosDisplay;