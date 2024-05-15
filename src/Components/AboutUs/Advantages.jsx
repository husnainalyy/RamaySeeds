import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn, staggerContainer, textVariant } from '../Universal/Animation';

function Advantages() {
    const [ref, inView] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    
    return (
        <div className='flex flex-col gap-16 px-4 py-10 bg-[#f2f2f2]'>
            <div className='w-full flex flex-col lg:flex-row justify-center gap-16'>
            
                <div className='lg:w-2/5 flex flex-col'>
                    <h1 className='text-3xl pb-4' >ADVANTAGES</h1>
                    <div className='w-full h-0 border-4 border-orange-400'></div>
                    <div className='flex flex-col pt-5'>
                        <div className='flex justify-start items-center gap-4'>
                            <img className='w-10' src="../src\assets\trust.svg" alt="" />
                            <h1 className='text-2xl'>Efficiency & Reliability</h1>                 
                        </div>
                        <p className='text-lg'> Streamline your farming operations with our innovative solutions and state-of-the-art technologies.Rely on our high-quality products and services to consistently deliver exceptional results, season after season.</p>
                    </div>
                    <div className=' flex flex-col  pt-5'>
                        <div className='flex justify-start items-center gap-4'>
                            <img className='w-10' src="../src\assets\support.svg" alt="" />
                            <h1 className='text-2xl'>Convenience & Support</h1>                   
                        </div>
                        <p className='text-lg'>Experience hassle-free farming with our user-friendly platform and efficient logistics solutions.Access expert guidance and assistance from our knowledgeable team to overcome challenges and optimize your yields</p>
                    </div>
                </div>
                <div className='lg:w-1/3 flex flex-col '>
                    <h1 className='text-3xl pb-4'>OUR STANDARDS</h1>
                    <div className='w-full h-0 border-4 border-orange-400'></div>
                    <p className='text-lg pb-10 pt-5'>At Ramay Zarai Services, our commitment to excellence and integrity sets us apart. We adhere to rigorous standards in everything we do, ensuring that our customers receive nothing but the best.</p>
                    <ul className='flex flex-col gap-2 list-disc list-inside whitespace-nowrap text-sm '>
                        <li>Meticulous quality for superior performance.</li>
                        <li>Exceeding expectations with exceptional service.</li>
                        <li>Upholding honesty, transparency, and respect.</li>
                        <li>Constantly innovating for industry-leading solutions.</li>
                        <li>Commitment to sustainable farming practices.</li>
                    </ul>
                </div>
            </div>
            <div className='w-full '>
                <h1 className=' w-full text-center text-3xl pb-4'>OUR PRINCIPLES</h1>
                <div className='w-full h-0 border-4 border-orange-400'></div>
                <div className=' flex  flex-col lg:flex-row justify-center items-center gap-5  '>
                    <img className='w-52 h-72 pt-4' src="https://i.ibb.co/gDrFGZk/Screenshot-2024-05-12-034809.png" alt="" />
                    <motion.p ref={ref} variants={textVariant("0.5")} initial="hidden" animate={inView ? "show" : "hidden"}  className=' pt-8' ><q> We embrace innovation to drive progress and stay ahead of the curve in a rapidly evolving industry.We are committed to promoting sustainable farming practices that protect the environment and support future generations.We foster a sense of community among farmers, suppliers, and stakeholders, working together to build a brighter future for agriculture.</q> </motion.p>
                </div>
                <div className='flex flex-col justify-end items-end py-4'>
                    <h1 className='font-Kunstler'>ASHFAQ RAMAY</h1>
                    <h1>CEO</h1>
                </div>
            </div>
        </div>
    )
}

export default Advantages