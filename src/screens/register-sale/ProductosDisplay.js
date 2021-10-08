import React, {useState} from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import { listaProductos } from '../../utilities/listaProductos';


const ProductosDisplay = () => {

    const [newList, setNewList] = useState([]);
    const onPressProduct = (product) => {
      console.log('${JSON.stringify(product)}');
    }
    
    return(
      <DropdownButton id="dropdown-basic-button" title="Productos en inventario" className="mb-2">
        {listaProductos.map((product) => (<Dropdown.Item key={product.id} value={product.name} onClick={onPressProduct}>{product.name}</Dropdown.Item>))}
      </DropdownButton>
    
    )
}

export default ProductosDisplay;

// 1. Zapato hombre
// 2. Tenis hombre
// 3. Tacon mujer
// 4. Tenis mujer
// 5. Zapato colegial


// DATA MOCK

// {
// 	id:
// 	nombre: Zapato hombre,
// 	valor: 50000,
// 	descripcion: zapato de cuero negro,
// 	estado: true | false,
// }