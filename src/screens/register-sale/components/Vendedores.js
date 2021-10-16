import React, {useState, useEffect} from 'react';
import { listaVendedores } from '../../../utilities/listaVendedores';
import api from "../../../api";
import {DropdownButton, Dropdown} from 'react-bootstrap';

const Vendedores = ({actualVendedor}) => {

    const [vendedor, setVendedor] = useState({});

    const onPressSalesman = (salesman) => {
        actualVendedor(salesman);
        setVendedor(salesman);
        console.log("el vendedor es " + vendedor.name)
      }

      const [listaVendedores, setListaVendedores] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          const response = await api.users.list();
          setListaVendedores(response);
        };
    
        fetchData();
      }, []);

    return(
        <DropdownButton id="dropdown-basic-button" title={vendedor.name || "Vendedor"} className="mb-2">
            {listaVendedores.map((salesman) => (<Dropdown.Item onClick={() => onPressSalesman(salesman)} >{salesman.name}</Dropdown.Item>))}
        </DropdownButton>
    );
}

export default Vendedores;