import React from 'react';
import styles from './Styles.module.css';
import {Table, Row, Col} from 'react-bootstrap';

const SalesTable = () => {
    return(
        <div>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID Producto</th>
                  <th>Producto</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Precio Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>####</td>
                  <td>Producto 1</td>
                  <td className={styles.right}>$$$</td>
                  <td>####</td>
                  <td className={styles.right}>$$$</td>
                </tr>
                <tr>
                <td>2</td>
                  <td>####</td>
                  <td>Producto 2</td>
                  <td className={styles.right}>$$$</td>
                  <td>####</td>
                  <td className={styles.right}>$$$</td>
                </tr>
                <tr>
                  <td colSpan="5" className={styles.right}>Valor Total</td>
                  <td className={styles.right}>$$$$$$</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        </div>
    )
}

export default SalesTable;