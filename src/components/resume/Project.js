import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = () =>{

    return(
        <div className="container-fluid mt-5 p-0 text-center overflow-hidden">
             <h1 className="display-5 fw-bolder text-light text-center mt-2">
                PROJECTS
             </h1>
             <div className="row text-center">
                <Row xs={1} md={3} className="g-2 mx-auto">
                    <Col className="text-center">
                        <Card border="dark">
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card border="dark">
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card border="dark">
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
             </div>
        </div>
    )
}
export default Project;