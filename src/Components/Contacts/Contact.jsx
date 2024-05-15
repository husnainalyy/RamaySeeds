import React from 'react'
import Home from '../Home/Home'
import Map from './Map'
import Address from './Address'
import Hero from '../Home/Hero'
import Footer from '../Universal/Footer'

function Contact() {
    return (
        <>
            <Hero bg="bg-center" display="hidden" padding="pb-52" />
            <Map />
            <Address />
            <Footer/>
        </>
    )
}

export default Contact