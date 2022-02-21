import { Navbar , Nav , Container } from 'react-bootstrap';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import caveat from '../fonts.module.css';
import Form from 'react-bootstrap/Form';
import QrCode from './QrCode';

const NavBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputs, setInputs] = useState({});

    const handleChange = (event) =>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = () =>{

    }

    const myStyle = {
        opacity: 1,
    };
 
    return(
    <Navbar className="border-1 border-bottom border-light" bg="dark" variant="dark" expand="lg" style={myStyle}>
    <Container fluid className={caveat.caveat} >
        <Navbar.Brand className={caveat.caveatb}>
            Adrinsoft
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '400px' }}
            navbarScroll
        >
            <Nav.Link><Icon.PersonFill className="m-1"/>
                <Link
                    activeClass="active"
                    to="my-team"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {600}
                >About us</Link>
            </Nav.Link>
            <Nav.Link>
                <Icon.EnvelopeFill className="m-1"/>
                <Link
                    activeClass="active"
                    to="contactUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {600}
                >Contact us</Link>
            </Nav.Link>
            <Nav.Link role="button" onClick={handleShow}>
                <Icon.Code className="m-1"/>
                QR code
                
               
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create QrCode</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {inputs.data !=null ?
                <QrCode text={inputs.data}/>:""
                }
                <form onSubmit={handleSubmit}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        name="data"
                        type="text"
                        value={inputs.data || null} 
                        onChange={handleChange}
                        placeholder="Text"
                        />
                        <label htmlFor="floatingInputCustom">Text</label>
                    </Form.Floating>
                    <div className="d-grid gap-2 mx-auto">
                        <Button variant="danger" size="sm" type="submit">
                            Send
                        </Button>
                    </div>  
                </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </Navbar>
    );
}
export default NavBar;