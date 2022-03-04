import Contact from "./Contact";
import Header from "./Header";
import NavResume from "./NavResume";
import Project from "./Project";
import Skill from "./Skill";
import { useParams } from "react-router-dom";
import data from './dataProfile.json';
import NotFound from "../NotFound";
import MyTabs from "./MyTabs";

const Resume = () => {

    let params = useParams();
    let userId = parseInt(params.userId)-1;
    const loadData = [...data];
    const user = loadData[userId];

    try{
        return(
            <>
                <div className="resume">
                    <NavResume/>
                    <Header user={user}/>
                    <Project projects={user.projects}/>
                    <Skill skills={user.skills}/>
                    <MyTabs educations={user.education} employments={user.employment}/>
                    <Contact contact={user}/>
                </div>
            </>
            )

    } catch(e){
        return(<NotFound/>)
    }
}
export default Resume;