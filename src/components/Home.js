import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  MyCarousel  from './MyCarousel';
import MainComponent from './MainComponent';
import ContactUs from './ContactUs';
import AdrinComponent from './adrinComponent';

const Home = () => {

    return(
        <div className="home">
            <AdrinComponent/>
            <MainComponent/>
            <ContactUs/>
        </div>
    )
}
export default Home;