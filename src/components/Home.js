import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Footer from './Footer';
import MainComponent from './MainComponent';
import ContactUs from './ContactUs';
import AdrinComponent from './adrinComponent';


const Home = () => {

    return(
        <div className="home">
            <NavBar/>
            <AdrinComponent/>
            <MainComponent/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}
export default Home;