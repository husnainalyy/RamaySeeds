import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/AboutUs/About';
import Contact from './Components/Contacts/Contact';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';

const App = () => {
    return (
        <div className='relative w-full overflow-hidden'>
            <a href="https://wa.me/+923207859048" target="_blank" rel="noopener noreferrer" className='fixed w-16 h-16 bottom-2 right-0 z-40 text-white rounded-full p-2 m-1'>
                <img src="data:image/svg+xml;base64,PD94bW..." alt="" />
            </a>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
