import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
