import React from 'react';
import styles from './Styles.module.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../../../logo.svg';

const TopBar = ({ user }) => {
    return (
        <div>
            <Navbar className={styles.container} variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Los REACTivos
                    </Navbar.Brand>
                    {/* <Navbar.Brand href="#home">Los REACTivos</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Registrado como: <a href="#login">{user.name}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopBar;
