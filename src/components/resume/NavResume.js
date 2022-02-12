import { Navbar , Nav , Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Link as Slink } from "react-scroll";

const NavResume = () => {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className="text-light" to="/">
                        <Icon.HouseFill/>
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto" navbarScroll>
                    <Nav.Link>
                        <Slink
                            activeClass="active"
                            to="my-skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {600}>
                                Skills
                        </Slink>
                    </Nav.Link>
                    <Nav.Link>
                        <Slink
                            activeClass="active"
                            to="my-projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {600}>
                                Projects
                        </Slink>
                    </Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )

}
export default NavResume;