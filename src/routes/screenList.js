import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from "../screens/login/LoginScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import RegisterProductsScreen from '../screens/products/RegisterProductsScreen';
import EditProductScreen from '../screens/products/EditProductScreen';
import SalesScreen from "../screens/sales/SalesScreen";
import ClientIDSale from "../screens/sales/components/ClientIDSale";
import RegisterSaleScreen from '../screens/register-sale/RegisterSaleScreen';
import UserProfileScreen from "../screens/userProfile/UserProfileScreen";
import ViewSale from "../screens/sales/components/ViewSale";
import { INVITADO, VENDEDOR, ADMINISTRADOR } from '../screens/login/constants';

export const publicListScreen = [
    {
        id: 'Registro',
        path: '/',
        component: <LoginScreen />,
        name: 'Registro',
        roles: [INVITADO, VENDEDOR, ADMINISTRADOR]
        //icon: <HomeIcon />,
    },
];

export const privateListScreen = [
    {
        id: 'Inicio',
        path: '/inicio',
        component: <HomeScreen />,
        name: 'Inicio',
        roles: [INVITADO, VENDEDOR, ADMINISTRADOR]
        //icon: <HomeIcon />,
    },
    {
        id: 'Productos',
        path: '/productos',
        component: <ProductsScreen />,
        name: 'Productos',
        roles: [VENDEDOR, ADMINISTRADOR]
        //icon: <FaceIcon />,
    },
    {
        id: 'Registrar-Productos',
        path: '/registrar-productos',
        component: <RegisterProductsScreen />,
        name: 'Registrar Productos',
        roles: [VENDEDOR, ADMINISTRADOR]
        //icon: <FaceIcon />,
    },
    {
        id: 'Editar-Productos',
        path: '/editar/:productId',
        component: <EditProductScreen />,
        name: 'Editar Productos',
        //icon: <FaceIcon />,
    },
    {
        id: 'Ventas',
        path: '/ventas',
        component: <SalesScreen />,
        name: 'Ventas',
        roles: [VENDEDOR, ADMINISTRADOR]
        //icon: <MenuBookIcon />,
    },
    {
        id: 'Registrar-Venta',
        path: '/registrar-venta',
        component: <RegisterSaleScreen />,
        name: 'Registrar Venta',
        roles: [VENDEDOR, ADMINISTRADOR]
        //icon: <MenuBookIcon />,
    },
    {
        id: 'Perfil',
        path: '/perfil',
        component: <UserProfileScreen />,
        name: 'Perfil',
        roles: [ADMINISTRADOR]
        //icon: <LocalMallIcon />,
    }
];

export const OtherRoutes = [
    // Edit Routes
    {
        id: 'EditSale',
        path: '/sales/:id',
        component: <ViewSale />,
        // name: 'edit',
        //icon: <LocalMallIcon />,
    },
    // Find by customer ID
    {
        id: 'ClientIDSale',
        path: '/sales/client/:clientID',
        component: <ClientIDSale />,
        // name: 'clientSale',
        //icon: <LocalMallIcon />,
    }

    
]