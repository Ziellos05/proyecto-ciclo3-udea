import React, {useState} from 'react';
import { listaVendedores } from '../../../utilities/listaVendedores';

import {DropdownButton, Dropdown} from 'react-bootstrap';

const Vendedores = ({actualVendedor}) => {

    const [vendedor, setVendedor] = useState({});

    const onPressSalesman = (salesman) => {
        actualVendedor(salesman);
        setVendedor(salesman);
      }

    return(
        <DropdownButton id="dropdown-basic-button" title={vendedor.name || "Vendedor"} className="mb-2">
            {listaVendedores.map((salesman) => (<Dropdown.Item onClick={() => onPressSalesman(salesman)} >{salesman.name}</Dropdown.Item>))}
        </DropdownButton>
    );
}

export default Vendedores;