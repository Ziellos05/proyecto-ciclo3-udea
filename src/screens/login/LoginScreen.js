import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import Button from 'react-bootstrap/Button'

const LoginScreen = () => {

  const history = useHistory();
  const location = useLocation();
  const { authState, setAuthState } = useContext(AppContext);

  const { from } = location.state || { from: { pathname: "/inicio" } };

  const onPressLogIn = () => {
    setAuthState({ type: 'LOG_IN', payload: true });
  };

  useEffect(() => {

    if(authState.isLoggedIn) {
      history.replace(from);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  return (
    <div>
      <h1>LoginScreen</h1>
      <h1>A cardo de: Santiago Marulanda</h1>
      <Button variant="success" onClick={onPressLogIn} >Ingresar</Button>
    </div>
  );
};

export default LoginScreen;
