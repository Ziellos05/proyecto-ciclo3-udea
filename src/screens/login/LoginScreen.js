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

  const onSuccessLogIn = (response) => {
    console.log(response);
    setAuthState({ type: 'LOG_IN', payload: true });
    setUser({ type: 'LOG_IN', payload: { name: response.profileObj?.name || 'Anónimo', email: response.profileObj?.email || '' } });
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
