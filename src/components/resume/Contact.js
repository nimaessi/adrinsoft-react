import * as Icon from 'react-bootstrap-icons';

const Contact = () =>{

    return(
        <div className="container-fluid mt-5 p-0 text-center overflow-hidden">
            <h2 className="text-light fw-bolder">Contact</h2>
            <p className="text-light mt-4">
                <Icon.EnvelopeFill size="25" className="text-light m-2"/>
                omidNaserr@gmail.com
            </p>
            <p className="text-light">
                <Icon.PhoneFill size="25" className="text-light m-2"/>
                +989192117951
            </p>
        </div>

    )
}
export default Contact;