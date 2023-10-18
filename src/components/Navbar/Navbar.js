import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logos/miraki-echo-tech-logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./Navbar.css";





function MyVerticallyCenteredModal(props) {
    const [userName, setUsername] = useState('');
    const [userPassword, setUserpassword] = useState('');
    const navigate = useNavigate();


    function checkInput() {
        if (userName === 'Rama' && userPassword === 'Sita')
            navigate("/dashboard")

    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="User Name" required value={userName}
                        onChange={e => { setUsername(e.target.value) }}

                    />
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        required
                        value={userPassword}
                        onChange={e => { setUserpassword(e.target.value) }}
                    />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        {/* <Link to="/dashboard"> */}
                        <Button type='submit' style={{ backgroundColor: "#4c0491", padding: "0.5rem 1.5rem 0.5rem 1.5rem", fontSize: "large" }} onClick={checkInput}>Submit</Button>

                        {/* </Link> */}
                    </div>
                </Form>
            </Modal.Body>

        </Modal>
    );
}


const MainNav = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <img
                        alt=""
                        src={Logo}
                        width="140"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className='menuitemsstl'>Features</Nav.Link>
                            <Nav.Link href="#pricing" className='menuitemsstl'>Pricing</Nav.Link>
                            <Nav.Link href="#about" className='menuitemsstl'>About</Nav.Link>
                            <Nav.Link href="#contact" className='menuitemsstl'>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#employee" className='menuempstl' onClick={() => setModalShow(true)}>Employee</Nav.Link>
                            <Nav.Link eventKey={2} href="#user" className='menuuserstl'>
                                User
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default MainNav;
