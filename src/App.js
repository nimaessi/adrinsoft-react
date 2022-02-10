import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Resume from './components/resume/Resume';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
