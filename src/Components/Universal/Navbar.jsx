import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    return (
        <nav className='w-full h-7 py-12 lg:py-0 flex flex-wrap gap-3 lg:gap-12 text-md  lg:text-2xl font-mono'>
            <NavLink onClick={() => setActiveLink("/")} className={activeLink === "/" ? 'text-white border-b-2' : 'text-black hover:text-blue-700'} to="/">Home</NavLink>
            <NavLink onClick={() => setActiveLink("/about")} className={activeLink === "/about" ? 'text-white border-b-2' : 'text-black hover:text-blue-700'} to="/about">About</NavLink>
            <NavLink onClick={() => setActiveLink("/products")} className={activeLink === "/products" ? 'text-white border-b-2' : 'text-black hover:text-blue-700'} to="/products">Product</NavLink>
            <NavLink onClick={() => setActiveLink("/services")} className={activeLink === "/services" ? 'text-white border-b-2' : 'text-black hover:text-blue-700'} to="/services">Services</NavLink>
            <NavLink onClick={() => setActiveLink("/contact")} className={activeLink === "/contact" ? 'text-white border-b-2' : 'text-black hover:text-blue-700'} to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Navbar