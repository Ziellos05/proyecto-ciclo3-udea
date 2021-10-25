
import { Form } from "react-bootstrap"
import api from "../../../api"

const Busqueda = ({ productos, setProductos }) => {

    const find = (event) => {
        const regex = new RegExp(".*" + event.target.value + ".*");
        const productFilter = productos.filter((product) => product.nameProduct.match(regex));
        console.log(productFilter);
        setProductos(productFilter);
    }

    return (
        <Form.Control onChange={find} type="text" placeholder="Buscar..." />
    )
}

export default Busqueda;