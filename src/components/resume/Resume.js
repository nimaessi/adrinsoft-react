import Contact from "./Contact";
import Header from "./Header";
import NavResume from "./NavResume";
import Project from "./Project";
import Skill from "./Skill";
import { useParams } from "react-router-dom";
import data from './dataProfile.json';

const Resume = () => {

    let params = useParams();
    let userId = parseInt(params.userId)-1;
    const loadData = [...data];
    const user = loadData[userId];

    return(
    <>
        <div className="resume">
            <NavResume/>
            <Header user={user}/>
            <Project projects={user.projects}/>
            <Skill skills={user.skills}/>
            <Contact contact={user}/>
        </div>
    </>
    )

}
export default Resume;