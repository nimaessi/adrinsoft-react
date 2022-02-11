import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = () =>{

    const items = [
        {
            id : 1,
            title : "Divan app",
            description : "Some quick example text to build on the card title and make up the bulkof the card's content.",
        },
        {
            id : 2,
            title : "Divan app",
            description : "Some quick example text to build on the card title and make up the bulkof the card's content.",
        },
        {
            id : 3,
            title : "Divan app",
            description : "Some quick example text to build on the card title and make up the bulkof the card's content.",
        },

    ]

    return(
        <div className="container-fluid mt-5 p-0 text-center overflow-hidden">
             <h1 className="display-5 fw-bolder text-light text-center mt-2">
                PROJECTS
             </h1>
             <div className="row text-center">
                 <div className="col-md-2"></div>
                 <div className="col-md-8">
                    <Row xs={1} md={3} className="g-2 mx-auto">
                        {items.map((item) =>(
                                <Col className="text-center" key={item.id}>
                                    <Card border="dark">
                                        <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
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