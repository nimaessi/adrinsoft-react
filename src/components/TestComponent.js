import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
const TestComponent = () =>{
    const items = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ];
    return(
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
          {
                items.map( (item, i) => <Item key={i} item={item}/> )
            }
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
           Goooooz
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
}

const Item = (props) =>{

    return(
        <Alert variant={props.item}>
            This is a {props.item} alert—check it out!
        </Alert>
    )

}
export default TestComponent;