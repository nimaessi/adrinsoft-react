import * as React from 'react';
import NavBar from './components/NavBar';
import  MyCarousel  from './components/MyCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './components/MainComponent';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <MyCarousel/>
      <MainComponent/>
      <ContactUs/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
