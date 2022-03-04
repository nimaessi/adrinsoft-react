import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const MyTabs = (props) => {
    
    const [key, setKey] = useState('home');

    try{
        return(
            <div className="container-fluid mt-5 p-0 text-center overflow-hidden w-50">
                <Tabs
                    className="mb-3 text-light"
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    >
                    <Tab eventKey="home" title="Education">
                        {props.educations.map((education)=>(
                            <div key={education.order}>
                                <p className="text-light fw-bold">University : {education.university}</p>
                                <p className="text-light fw-bold">Dicipline : {education.dicipline}</p>
                                <p className="text-light fw-bold">Date : {education.date}</p>
                                <hr className="bg-danger mt-3 border-2 border-top border-light w-25 mx-auto"/>
                            </div>
                        ))}
                    </Tab>
                    <Tab eventKey="profile" title="Employment">
                        {props.employments.map((employment)=>(
                                <div key={employment.order}>
                                    <p className="text-light fw-bold">Company  : {employment.company}</p>
                                    <p className="text-light fw-bold">Role : {employment.role}</p>
                                    <p className="text-light fw-bold">Date : {employment.date}</p>
                                    <hr className="bg-danger mt-3 border-2 border-top border-light w-25 mx-auto"/>
                                </div>
                            ))}
                    </Tab>
                </Tabs>
            </div>
        )

    }catch(e){
        return null;
    }   
}
export default MyTabs;