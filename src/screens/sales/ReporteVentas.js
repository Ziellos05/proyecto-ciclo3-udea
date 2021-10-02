import React from 'react';
import Table from "react-bootstrap/Table";
import styles from './Styles.module.css'
import { listaVentas } from '../../utilities/listaVentas';

const ReporteVentas = () => {
    return(
        <Table striped bordered hover size="sm" className={styles.center}>
          <thead>
            <tr>
              <th>ID Venta</th>
              <th>Vendedor</th>
              <th>Total Venta</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaVentas.map((venta) => 
            (<tr>
              <td>{venta.idVenta}</td>
              <td>{venta.vendedor}</td>
              <td>{venta.total}</td>
              <td>{venta.status}</td>
              <td >🖊️ 👁️</td>
            </tr>))}
          </tbody>
        </Table>
    )
}

export default ReporteVentas;