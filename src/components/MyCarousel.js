import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caveat from '../fonts.module.css';


export default function MyCarousel(){

    const items = [
        {
            id:1,
            img:"/assets/myImages/bg1.jpg",
            description:"Keys allow React to keep track of elements"

        },
        {
            id:2,
            img:"/assets/myImages/bg2.jpg",
            description:"Keys allow React to 1"

        },
        {
            id:3,
            img:"/assets/myImages/ferenc.jpg",
            description:"Keys allow React to 1"

        }

    ];
    return(
    <Carousel className={caveat.roboRegular}>
        {items.map((item) =>(
         <Carousel.Item key={item.id}>
            <img
            style={{height:"50vh"}}
            className="d-block w-100"
            src={item.img}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>{item.description}:</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        ))}
    </Carousel>
    )
}

