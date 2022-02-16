import Badge from 'react-bootstrap/Badge';

const Skill = (props) => {    
    return(
        <div id="my-skills" className="container-fluid mt-5 p-0 text-center overflow-hidden">
            <h2 className="text-light fw-bolder">Skills</h2>
            <h3 className="text-danger">
                {props.skills.map((skill,i)=>(
                    <MyBadge skill={skill} number={i} key={i}/>
                ))}
            </h3>
        </div>
    )
}

const MyBadge = (props) => {

    let number = parseInt(props.number);
    let bgcolor =["secondary","danger","info","primary","success","warning"];
    let bgrandom = Math.floor(Math.random() * bgcolor.length);
    if(number % 3 === 0){
        return(<span key={number}><Badge className="mt-2  ms-2" bg={bgcolor[bgrandom]}>{props.skill}</Badge><br/></span>)
    }
    else{
        return(<span key={number}><Badge className="mt-2  ms-2" bg={bgcolor[bgrandom]}>{props.skill}</Badge></span>)
    }

}
export default Skill;