import React from 'react'
import Hero from '../Home/Hero'
import History from './History'
import Professionals from './Professionals'
import Advantages from './Advantages'
import Footer from '../Universal/Footer'
import Gallery from './Gallery'
function About() {
    return (
        <>
            <Hero bg="bg-center" display="hidden" padding="pb-52" />
            <History />
            <Professionals />
            <Gallery />
            <Advantages />
            <Footer/>
        </>
    )
}

export default About