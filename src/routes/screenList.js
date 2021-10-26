import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from "../screens/login/LoginScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import RegisterProductsScreen from '../screens/products/RegisterProductsScreen';
import SalesScreen from "../screens/sales/SalesScreen";
import RegisterSaleScreen from '../screens/register-sale/RegisterSaleScreen';
import UserProfileScreen from "../screens/userProfile/UserProfileScreen";
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