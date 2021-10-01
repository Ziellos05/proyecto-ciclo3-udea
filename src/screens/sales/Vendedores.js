import React from 'react';

import {DropdownButton, Dropdown} from 'react-bootstrap';

const Vendedores = () => {
    return(
        <DropdownButton id="dropdown-basic-button" title="Vendedor" className="mb-2">
            <Dropdown.Item >Vendedor 1</Dropdown.Item>
            <Dropdown.Item >Vededor 2</Dropdown.Item>
            <Dropdown.Item >Vendedor 3</Dropdown.Item>
        </DropdownButton>
    );
}

export default Vendedores;