import React from 'react'
import Hero from './Hero'
import About from './About'
import Products from './Products'
import Testimonial from './Testimonial'
import WhyUs from './WhyUs'
import GetInTouch from './GetInTouch'
import Footer from '../Universal/Footer'

function Home() {
    return (
        <>
            <Hero bg="" display="flex" padding="pb-52" />
            <About />
            <Products />
            <Testimonial />
            <WhyUs />
            <GetInTouch />
            <Footer/>
        </>
    )
}

export default Home