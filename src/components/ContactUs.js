import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';



const ContactUs = () =>{

    const [contact, setContact] = useState({});
 
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setContact(values => ({...values, [name]: value}));
    }
    const handleForm = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/contactus', contact)
        .then(function (response) {
          Swal.fire({
              title: 'success!',
              text: contact.email,
              icon: 'success',
              confirmButtonText: 'Ok'
          })
        })
        .catch(function (error) {
          Swal.fire({
              title: 'Error!',
              text: 'Messages not send',
              icon: 'error',
              confirmButtonText: 'Ok'
          })
        });
      }
  
    return(
        <div className="container-fluid mt-5 bg-light" id="contactUs">
            <br/>
                <h2 className="text-dark text-center mt-5">CONTACT</h2>
                <p className="text-dark text-center">
                    <Icon.EnvelopeFill className="m-2"/>
                    Lets get in touch. Send us a message
                </p>
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-dark fs-6">
                            <Icon.GeoAlt className="m-2"/>
                            Teh, IR
                        </p>
                        <p className="text-dark fs-6">
                            <Icon.PhoneFill className="m-2"/>
                            +989213364274
                        </p>
                        <p className="text-dark fs-6">
                        <Icon.EnvelopeFill className="m-2"/>
                        adrin-web@outlook.com
                        </p>
                    </div>
                    <div className="col-md-9">
                        <form onSubmit={handleForm}>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                required
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                value={contact.email || ""} 
                                placeholder="name@example.com"
                                onChange={handleChange}
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                            <Form.Floating>
                                <Form.Control
                                required
                                id="floatingPasswordCustom"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={contact.subject || ""}
                                onChange={handleChange}
                                />
                                <label htmlFor="floatingPasswordCustom">Subject</label>
                            </Form.Floating>
                            <Form.Floating className="mt-3">
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                    required
                                    as="textarea"
                                    name="comment"
                                    value={contact.comment || ""}
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Form.Floating>
                            <Button className="mt-3 btn btn-danger mb-4" type="submit"><Icon.EnvelopeFill className="m-2"/>Send Message</Button>
                        </form>
                    </div>
                </div>
        </div>
    )

}
export default ContactUs;