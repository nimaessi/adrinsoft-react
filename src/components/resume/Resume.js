import Contact from "./Contact";
import Header from "./Header";
import Project from "./Project";
import Skill from "./Skill";


const Resume = () => {

    return(
    <>
        <div className="resume">
            <Header/>
            <Project/>
            <Skill/>
            <Contact/>
        </div>
    </>
    )

}
export default Resume;