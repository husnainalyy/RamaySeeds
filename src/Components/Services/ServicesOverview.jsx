import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn, slideIn, staggerContainer, textVariant, zoomIn } from '../Universal/Animation';

function ServicesOverview() {
    
    const [services, setServices] = useState([
        {
            img: 'https://i.ibb.co/Vx7WcF9/farm-Sol-1.jpg',
            head: 'Advanced Farming Solutions',
            para:'Explore innovative solutions designed to enhance your farming practices and optimize your yields. Our precision agriculture techniques and advanced crop management strategies ensure maximum efficiency and profitability.'
        },
        {
            img: 'https://i.ibb.co/nQHSKbC/guidance.jpg',
            head: 'Expert Guidance and Support',
            para: 'Benefit from personalized guidance and expertise from our team of agronomists and industry professionals. With a focus on continuous improvement and innovation, we provide unparalleled support to help you overcome challenges and achieve your goals.'
        },
        {
            img: 'https://i.ibb.co/tXndmcd/technology.jpg',
            head: 'Technology-Driven Solutions',
            para: 'Leverage our state-of-the-art technologies and resources to streamline your farming operations and boost productivity. From digital tools to data-driven insights, we offer comprehensive solutions to meet your evolving needs.'
        },
        {
            img: 'https://i.ibb.co/854KwPd/farmprac.jpg',
            head: 'Sustainable Farming Practices',
            para: 'Join us in promoting sustainability and environmental stewardship in agriculture. Our eco-friendly farming practices prioritize long-term viability and resilience, ensuring a brighter future for both farmers and the planet.'
        },
        {
            img: 'https://i.ibb.co/Jx7h2pB/collab.jpg',
            head: 'Collaborative Community',
            para: 'Become part of a collaborative community of forward-thinking farmers and industry leaders. Together, we can drive positive change, overcome obstacles, and unlock new opportunities for growth and innovation in agriculture.'
        },
        {
            img: 'https://i.ibb.co/0qCCqyx/cropanaly.jpg',
            head: 'Crop Consultation and Analysis',
            para: 'Receive personalized crop consultation and analysis from our team of agronomic experts. We provide in-depth assessments of soil health, crop performance, and pest management strategies to optimize your yields and minimize risks.'
        },
    ])
    const [ref, inView] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    return (
        <div className='w-full min-h-min  bg-[#f2f2f2] pt-10 px-2'>
            <div>
                <h1 className='text-4xl text-center font-bold text-orange-400 pb-4'>SERVICES</h1>
                <div className='w-full h-0  border-2  border-orange-300'></div>
            </div>
            <div className=' gap-4 '>
                
                <motion.div ref={ref} variants={slideIn("left", "", "0.1", "2")} initial="hidden" animate={inView ? "show" : "hidden"} className='w-full flex flex-col py-4 lg:grid grid-cols-2 gap-8 '>
                    {services.map((services, index) => {
                        
                        return (
                            <div key={index} class=" bg-white rounded-xl shadow-md w-full lg:h-64 flex  flex-col lg:flex-row border  ">
                                
                                    <div class="lg:w-1/2 border">
                                        <img class="w-full  h-full object-cover " src={services.img} />
                                    </div>
                                    <div class="lg:w-2/3 p-8">
                                        <p  class="block mt-1 text-lg text-center leading-tight font-medium text-black hover:underline">{services.head}
                                        </p>
                                        <p class="mt-2 text-center text-slate-500">{services.para}
                                        </p>
                                    </div>
                                
                            </div>
                        )
                    })}
                    
                </motion.div>
                
            
            </div>
        </div>
    )
}

export default ServicesOverview