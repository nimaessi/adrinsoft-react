import { Navbar , Form , FormControl , Button , Nav , Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-scroll";

import caveat from '../fonts.module.css';
const NavBar = () => {
    const myStyle = {
        opacity: 1,
    };
 
    return(
    <Navbar className="border-1 border-bottom border-light" bg="dark" variant="dark" expand="lg" style={myStyle}>
    <Container fluid className={caveat.roboRegular} >
        <Navbar.Brand className={caveat.caveatb} href="#">Adrinsoft</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '400px' }}
            navbarScroll
        >
            <Nav.Link href="#action1"><Icon.PersonFill className="m-1"/>
                <Link
                    activeClass="active"
                    to="my-team"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {600}
                >About us</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
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
            <Nav.Link href="#action2"><Icon.Code className="m-1"/>QR code</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}
export default NavBar;