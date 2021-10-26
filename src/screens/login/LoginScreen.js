import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import { AppContext } from '../../context/ContextProvider';
import { GoogleLogin } from 'react-google-login';
import api from '../../api';
import { INVITADO, VENDEDOR, ADMINISTRADOR, ALL_ROLES } from './constants';

import logo from '../../logo.svg';
// import styles from './Styles.module.css';

export const CLIENT_ID = "1005651371969-nf2oatsf2bvb8m4gluuahok6u5c5hihn.apps.googleusercontent.com";

const LoginScreen = () => {

  const history = useHistory();
  const location = useLocation();
  const { authState, setAuthState, setUser } = useContext(AppContext);

  const { from } = location.state || { from: { pathname: "/inicio" } };

  const onPressLogIn = () => {
    setAuthState({ type: 'LOG_IN', payload: true });
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  const fetchUsersData = async () => {
    try {
      return await api.users.list();
    } catch (error) {
      console.error(error);
      alert('Ups!, something went wrong');
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.users.list();
  //       setListaVendedores(response);
  //     } catch (error) {
  //       console.log(error);
  //       alert('Ups!, something went wrong');
  //     }      
  //   };

  //   fetchData();
  // }, []);

  const onSuccessLogIn = async (response) => {
    console.log(response);
    const loggedUserEmail = response.profileObj?.email || '';
    const userList = await fetchUsersData();

    let userRole = INVITADO;

    for (const user of userList) {
      console.log(user);
      if (user.email === loggedUserEmail) {
        const formatRole = user.rol.toUpperCase();
        userRole = ALL_ROLES[formatRole];
      }
    };


    setUser({
      type: 'LOG_IN',
      payload: {
        name: response.profileObj?.name || 'Anónimo',
        email: loggedUserEmail,
        role: userRole,
        userList: userList
      }
    });
     setTimeout(() => {
      setAuthState({ type: 'LOG_IN', payload: true });
     }, 500)
    
  };

  const onFailureLogIn = (response) => {
    console.log(response);
    alert('Ups! something happend! Try again later');
  };

  useEffect(() => {

    if (authState.isLoggedIn) {
      history.replace(from);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  return (
    <Container>
      <Row>
        <Col><></></Col>
        <Col xs={7}>
          <Button variant="success" onClick={onPressLogIn} >Ingresar</Button>

          <Card style={{ width: '20rem' }} className="text-center" border="info">
            <Card.Header as="h5">Bienvenido</Card.Header>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title >Los REACTivos</Card.Title>
              <Card.Text >
                Super Ventas REACTivas, administra tus ventas y productos
              </Card.Text>
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Ingresar con Google"
                onSuccess={onSuccessLogIn}
                onFailure={onFailureLogIn}
                cookiePolicy={'single_host_origin'}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col><></></Col>
      </Row>

    </Container>
  );
};

export default LoginScreen;
