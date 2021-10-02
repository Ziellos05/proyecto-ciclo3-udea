// import DropdownItem from 'react-bootstrap/DropdownItem';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { listaProductos } from '../../utilities/listaProductos';


const ProductosDisplay = () => {
    
    return(
      <DropdownButton id="dropdown-basic-button" title="Productos en inventario" className="mb-2">
        {listaProductos.map((product) => (<Dropdown.Item>{product.name}</Dropdown.Item>))}
      </DropdownButton>

    )
}

export default ProductosDisplay;