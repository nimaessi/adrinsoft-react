import Badge from 'react-bootstrap/Badge';

const Skill = () => {

    return(
        <div className="container-fluid mt-5 p-0 text-center overflow-hidden">
            <h2 className="text-light fw-bolder">Skills</h2>
            <h3 className="text-danger">
               <Badge bg="secondary mt-5">Javascript</Badge>
               <Badge bg="danger mt-5 ms-2">Java</Badge>
               <Badge bg="info mt-5 ms-2">Git</Badge>
               <Badge bg="primary mt-5  ms-2">React</Badge>
               <br/>
               <Badge bg="success mt-2  ms-2">React Native</Badge>
               <Badge bg="danger mt-2  ms-2">C#</Badge>
               <Badge bg="danger mt-2  ms-2">Sql Server</Badge>
               <Badge bg="warning mt-2  ms-2">Material</Badge>

            </h3>

        </div>
    )
}
export default Skill;