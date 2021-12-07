import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  MyCarousel  from './MyCarousel';
import MainComponent from './MainComponent';
import ContactUs from './ContactUs';

const Home = () => {

    return(
        <div className="home">
            <MyCarousel/>
            <MainComponent/>
            <ContactUs/>
        </div>
    )
}
export default Home;