import React from 'react';
import { listaVendedores } from '../../utilities/listaVendedores';

import {DropdownButton, Dropdown} from 'react-bootstrap';

const Vendedores = () => {
    return(
        <DropdownButton id="dropdown-basic-button" title="Vendedor" className="mb-2">
            {listaVendedores.map((vendedor) => (<Dropdown.Item>{vendedor.name}</Dropdown.Item>))}
        </DropdownButton>
    );
}

export default Vendedores;