import React from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from './topBar/TopBar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import styles from './Styles.module.css';
import { privateListScreen } from '../screenList';
import logo from '../../logo.svg';


const NavStructure = ({ setAuthState }) => {

  const history = useHistory();
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onClickListItem = (route) => {
    history.push(route);
  };

  const onPressLogOut = () => {
    setAuthState({ type: 'LOG_OUT', payload: false });
  };

  return (
    <>
      <TopBar />
      <Offcanvas backdrop={false} show={true} className={styles.container} >
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
            <ListGroup.Item
              action
              variant="primary"              
              onClick={onPressLogOut}
            >
              Cerrar Sesión
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavStructure;
