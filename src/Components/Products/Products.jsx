import React from 'react'
import Category from './Category'
import Hero from '../Home/Hero'
import AllProducts from './AllProducts'
import Footer from '../Universal/Footer'

function Products() {
    return (
        <div>
            <Hero bg="bg-center" display="hidden" padding="pb-52" />
            <Category />
            <AllProducts />
            <Footer/>
        </div>
    )
}

export default Products