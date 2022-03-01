import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = (props) =>{

    const cardStyle = {
        minHeight :"183px",
    };
    return(
        <div id="my-projects" className="container-fluid mt-5 p-0 text-center overflow-hidden">
             <h1 className="display-5 fw-bolder text-light text-center mt-2">
                PROJECTS
             </h1>
             <div className="row text-center">
                 <div className="col-md-2"></div>
                 <div className="col-md-8">
                    <Row xs={1} md={3} className="g-2 mx-auto">
                        {props.projects.map((project) =>(
                                <Col className="text-center" key={project.id}>
                                    <Card border="dark">
                                        <Card.Body style={cardStyle}>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        ))}        
                    </Row>
                 </div>
                 <div className="col-md-2"></div>
             </div>
        </div>
    )
}
export default Project;