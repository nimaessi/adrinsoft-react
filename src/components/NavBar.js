import { Navbar , Form , FormControl , Button , Nav , Container } from 'react-bootstrap';
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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
            Link
            </Nav.Link>
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