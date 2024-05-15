import React from 'react'
import Navbar from '../Universal/Navbar'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { zoomIn } from '../Universal/Animation';

function Hero({ bg, display, padding }) {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    
    return (
        <section className='w-full '>
            <section className={`w-full  min-h-min ${padding} ${bg}  flex flex-col  items-center gap-5 bg-[length:400px_800px] lg:bg-cover bg-[url("https://i.ibb.co/H77pzkt/heroimg.jpg")] `}>
                <header>
                    <img  className='w-48 lg:w-64  ' src="../src/assets/logo.svg" alt="" />
                </header>
                <nav>
                    <Navbar/>
                </nav>
                <section className={`${display} text-2xl lg:text-4xl font-bold  flex-col justify-center items-center  border-y-4 mx-4 border-zinc-200 py-5`} >
                    <motion.p ref={ref} variants={zoomIn("", "1.5")} initial="hidden" animate={inView ? "show" : "hidden" } className='text-center' >CULTIVATING NEW CROPS TO MAKE FARMERS </motion.p>
                    <motion.p ref={ref} variants={zoomIn("", "2")} initial="hidden" animate={inView ? "show" : "hidden"} className='text-orange-500'>INCREASE PROFITS!</motion.p>
                </section>
            </section>

        </section>
    )
}

export default Hero