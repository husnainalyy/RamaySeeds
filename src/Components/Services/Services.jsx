import React from 'react'
import Hero from '../Home/Hero'
import Offering from './Offering'
import ServicesOverview from './ServicesOverview'
import Support from './Support'
import Footer from '../Universal/Footer'

function Services() {
    return (
        <div>
            <Hero bg="bg-center" display="hidden" padding="pb-52" />
            <Offering />
            <ServicesOverview />
            <Support />
            <Footer/>
        </div>
    )
}

export default Services