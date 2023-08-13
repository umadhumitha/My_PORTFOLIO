import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Nav from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Learning from './Learning';
import Virtusa from './Virtusa';
import Intelclub from './Intelclub';



// import './index.css';
//import Home from './Home';
//  import App from './App';
// import Contact from './Contact';
//  import About from './About';
// import Learning from './Learning';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <BrowserRouter>

<Nav/>
  <Routes>
 
    <Route path="/" element={<Home />} />
    <Route path="/learning" element={<Learning />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/virtusa" element={<Virtusa />} />
    <Route path="/intelclub" element={<Intelclub />} />
  </Routes>
</BrowserRouter>
    ,document.getElementById('root')
);


reportWebVitals();
