import Contact from "./Contact";
import Header from "./Header";
import NavResume from "./NavResume";
import Project from "./Project";
import Skill from "./Skill";


const Resume = () => {

    return(
    <>
        <div className="resume">
            <NavResume/>
            <Header/>
            <Project/>
            <Skill/>
            <Contact/>
        </div>
    </>
    )

}
export default Resume;