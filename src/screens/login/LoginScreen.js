import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import { AppContext } from '../../context/ContextProvider';
import { GoogleLogin } from 'react-google-login';

import logo from '../../logo.svg';
import styles from './Styles.module.css';


const LoginScreen = () => {

  const history = useHistory();
  const location = useLocation();
  const { authState, setAuthState } = useContext(AppContext);

  const { from } = location.state || { from: { pathname: "/inicio" } };

  const onPressLogIn = () => {
    setAuthState({ type: 'LOG_IN', payload: true });
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

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
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Ingresar con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
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
