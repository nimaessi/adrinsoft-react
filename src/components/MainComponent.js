import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons';
const MainComponent = () => {

    const items =[
        {
            id:1,
            title:"Web & Application Development",
            description:"We develop award-winning websites and mobile applications built to deliver value and results."
        },
        {
            id:2,
            title:"Experience Design",
            description:"Our award-winning UX designers create visually impressive and functional online experiences that are designed with your audience in mind."
        },
        {
            id:3,
            title:"Client Services",
            description:"We work with you to maintain your site after it launches, with dedicated support to make sure your business goals are being met."
        },
        {
            id:4,
            title:"Technology Training",
            description:"Take advantage of the latest technology. Our team of experts will give you the skills you need to succeed with Sitefinity, SmartBear, Microsoft Azure, and more."
        },
    ];
    const teams =[
        {
            id:1,
            img:"../img/team2.jpg",
            name:"nima",
            title:"CEO & Founder",
            description:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales"
        },
        {
            id:2,
            img:"",
            name:"omid",
            title:"Designer",
            description:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales"
        },
        {
            id:3,
            img:"",
            name:"Naser",
            title:"Art Director",
            description:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales"
        },
    ];

    return(
    <div className="container-fluid bg-dark">
        <h3 className="text-center mt-5 text-light">Our Expertise</h3>
        <p className="text-center mt-2 text-light">Key features of our company</p>
        <div className="row">
        <Row xs={1} md={4} className="g-2">
            {
            items.map((item) => (
                <MyCard key={item.id} item={item}/>
            ))}
        </Row>
        </div>
        <div className="row mt-5">
            <div className="col-sm-12">
                <hr className="bg-danger border-2 border-top border-light w-50 mx-auto"/>
                <p className="text-center text-light mx-auto fs-4">We know design.</p>
                <h1 className="display-1 text-light text-center">
                    <Icon.Windows className="p-2"/>
                    <Icon.Apple className="p-2"/>
                    <Icon.Display className="p-2"/>
                </h1>
            </div>
        <div className="row text-center">
            <ul className="list-inline">
                <li className="list-inline-item text-light fs-6">windows /</li>
                <li className="list-inline-item text-light fs-6">ios /</li>
                <li className="list-inline-item text-light fs-6">android /</li>
                <li className="list-inline-item text-light fs-6">web</li>
            </ul>
            <div className="d-grid gap-2 mx-auto">
                <Button variant="danger" className="w-50 mx-auto" size="sm">
                    View our work
                </Button>
            </div>

        </div>
            <br/><br/><br/><br/>
        </div>
        <div className="row" id="my-team">
            <hr className="bg-danger mt-3 border-2 border-top border-light w-75 mx-auto"/>
            <h1 className="text-center text-light">THE TEAM</h1>
            <p className="text-center text-light">The ones who runs this company</p>
            <Row xs={1} md={3} className="g-3">
            {
            teams.map((team) => (
                <MyAvatar key={team.id} item={team}/>
            ))}
            </Row>
        </div>
    </div>
        )
}

const MyCard = (props) =>{

    const myStyle = {
        minHeight: "250px",
      };

    return(
        <Col className="text-center">
                <Card style={myStyle}>
                    <h1><Icon.Display/></h1>
                    <Card.Body>
                    <Card.Title>
                        {props.item.title}
                    </Card.Title>
                    <Card.Text>
                    {props.item.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
    )
}

const MyAvatar = (props) =>{

    const myStyle = {
        minHeight: "250px",
      };
    return(
        <Col className="text-center">
                <Card style={myStyle}>
                    <h1><Icon.Person/></h1>
                    <Card.Body>
                    <Card.Title>
                        {props.item.name}
                        <p className="fs-6 mt-3">{props.item.title}</p>
                    </Card.Title>
                    <Card.Text>
                    {props.item.description}
                    </Card.Text>
                    <div className="d-grid gap-2 w-25 mx-auto">
                        <Button variant="danger" size="sm">
                            Profile
                        </Button>
                    </div>
                    </Card.Body>
                </Card>
        </Col>

    )
}
export default MainComponent;