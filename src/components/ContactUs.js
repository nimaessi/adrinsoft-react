import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';


const ContactUs = () =>{

    return(
        <div className="container-fluid mt-5 bg-light" id="contactUs">
                <h2 className="text-dark text-center mt-5">CONTACT</h2>
                <p className="text-dark text-center">
                    <Icon.EnvelopeFill className="m-2"/>
                    Lets get in touch. Send us a message
                </p>
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-dark fs-6">
                            <Icon.GeoAlt className="m-2"/>
                            Chicago, US
                        </p>
                        <p className="text-dark fs-6">
                            <Icon.PhoneFill className="m-2"/>
                            6161616161
                        </p>
                        <p className="text-dark fs-6">
                        <Icon.EnvelopeFill className="m-2"/>
                        adri-nweb@outlook.com
                        </p>
                    </div>
                    <div className="col-md-9">
                   
                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            placeholder="Subject"
                            />
                            <label htmlFor="floatingPasswordCustom">Subject</label>
                        </Form.Floating>
                        <Form.Floating className="mt-3">
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Floating>
                        <Button className="mt-3 btn btn-danger mb-4" type="submit"><Icon.EnvelopeFill className="m-2"/>Send Message</Button>

                    </div>
                </div>
        </div>
    )

}
export default ContactUs;