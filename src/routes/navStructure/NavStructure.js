import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import TopBar from './topBar/TopBar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import styles from './Styles.module.css';
import { privateListScreen } from '../screenList';
import logo from '../../logo.svg';
import { CLIENT_ID } from '../../screens/login/LoginScreen';


const NavStructure = ({ setAuthState, user, setUser }) => {

  const history = useHistory();
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onClickListItem = (route) => {
    history.push(route);
  };

  // const onPressLogOut = () => {
  //   setAuthState({ type: 'LOG_OUT', payload: false });
  // };

  const onSuccessLogOut = () => {
    setAuthState({ type: 'LOG_OUT', payload: false });
    setUser({ type: 'LOG_OUT'});
  };

  const onFailureLogOut = () => {
    alert('Ups! an error ocurred while trying to logout!')
  };

  return (
    <>
      <TopBar user={user} />
      <Offcanvas backdrop={false} show={true} className={styles.container} autoFocus={false} enforceFocus={false} >
        <Offcanvas.Header>
          <Image src={logo} roundedCircle />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {
              privateListScreen.map((screen) => {
                return (
                  <ListGroup.Item
                    action
                    variant="primary"
                    key={screen.id}
                    onClick={() => onClickListItem(screen.path)}
                  >
                    {screen.name}
                  </ListGroup.Item>
                );
              })
            }
            {/* <ListGroup.Item
              action
              variant="primary"
              onClick={onPressLogOut}
            >
              Cerrar Sesión
            </ListGroup.Item> */}
          </ListGroup>

          <div style={{marginLeft:20, marginTop: 15}}>
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Cerrar Sesión"
              onLogoutSuccess={onSuccessLogOut}
              onFailure={onFailureLogOut}
            >
            </GoogleLogout>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavStructure;
