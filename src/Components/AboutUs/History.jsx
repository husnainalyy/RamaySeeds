import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn, staggerContainer } from '../Universal/Animation';

function History() {
    
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    return (
        <div className='w-full min-h-min flex flex-col justify-center items-center lg:gap-10  pt-20 bg-[#FFF4E6]'>
            
            
            <div className='w-full flex flex-col justify-center items-center gap-4 px-2'>
                <h1 className=' text-5xl lg:text-4xl  font-bold text-orange-400 underline pb-6'>Who We Are</h1>
                <div className=' w-full flex flex-col lg:flex-row justify-center items-center'>
                    <img className='w-72 h-72 lg:h-96 lg:w-96 border rounded-xl' src="https://i.ibb.co/WDFjDVS/Whats-App-Image-2024-05-11-at-17-43-48-4bcddb78.jpg" alt="" />
                    <div className='w-96 h-96  rounded-xl  bg-[#FFF4E6]'>
                        <img className='' src="../src\assets\logo.svg" alt="" />
                    </div>
                        <img className='w-72 h-72 lg:h-96 lg:w-96 border rounded-xl' src="https://i.ibb.co/v3TLJ9Q/Whats-App-Image-2024-05-11-at-17-43-48-87c63faa.jpg" alt="" />

                </div>
                <p className='text-xl lg:text-2xl text-center text-[#6B3E0A] font-bold  mt-8'>At Ramay Zarai Services, we are more than just a company</p>
                <p className='text-lg font-sans text-center text-zinc-500 lg:mx-40'>we are a team dedicated to transforming the landscape of agriculture. Our journey began with a vision to revolutionize the farming industry by providing innovative solutions and exceptional products tailored to the needs of farmers worldwide.</p>
                <p className='text-lg font-sans text-center text-zinc-500 lg:mx-40 '>From our humble beginnings, we have grown into a trusted name in agriculture, known for our commitment to excellence and customer satisfaction. Our team of experts comprises agronomists, researchers, and industry professionals, united by a common goal: to empower farmers with the tools and knowledge they need to succeed.</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-4 overflow-hidden'>
                <motion.div ref={ref} variants={fadeIn("right", "", "", "2")} initial="hidden" animate={inView ? "show" : "hidden"} className='lg:w-1/2 flex flex-col  items-center py-4 m-4 gap-5 rounded-2xl border-[#FFF4E6] shadow-lg'>
                    <h1 className='text-4xl font-bold text-orange-400'>OUR HISTORY</h1>
                    <p className='text-lg font-sans px-3'>Since our inception in 2007, we have been at the forefront of agricultural innovation. Over the years, we have continuously evolved, adapting to the changing needs of the farming community. From introducing cutting-edge farming methods to expanding our product range, each milestone in our history reflects our commitment to excellence and progress.</p>
                    <p className='text-lg font-sans px-3'>From pioneering new cultivation techniques to introducing advanced technologies, each chapter of our history is marked by innovation and progress. We have embraced challenges as opportunities for growth, continuously adapting to meet the evolving needs of farmers and the industry as a whole. Our journey is a testament to our resilience, determination, and unwavering dedication to serving the farming community.</p>
                </motion.div>
                <motion.div ref={ref1} variants={fadeIn("left", "", "", "2")} initial="hidden" animate={inView ? "show" : "hidden"} className='lg:w-1/2 flex flex-col  items-center py-4 m-4  gap-5 rounded-2xl border-[#FFF4E6] shadow-lg'>
                    <h1 className='text-4xl font-bold text-orange-400'>OPPORTUNITIES</h1>
                    <p className='text-lg font-sans px-3'>Ramay Zarai Services isn't just a destination for agricultural products; it's a hub of opportunities for farmers to thrive. With a diverse range of high-quality seeds, fertilizers, and farming essentials, we empower farmers to unlock their full potential and achieve sustainable success in their farming endeavors.</p>
                    <p className='text-lg font-sans px-3'>With our products and expertise, we empower farmers to unlock their full potential and achieve sustainable success in their farming endeavors. Whether you're a seasoned farmer looking to optimize your yields or a newcomer seeking guidance, we're here to support you every step of the way. Together, let's seize the opportunities that await and cultivate a better tomorrow for agriculture.</p>
                </motion.div>
            </div>
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L14.1,149.3C28.2,139,56,117,85,106.7C112.9,96,141,96,169,128C197.6,160,226,224,254,240C282.4,256,311,224,339,197.3C367.1,171,395,149,424,144C451.8,139,480,149,508,176C536.5,203,565,245,593,234.7C621.2,224,649,160,678,149.3C705.9,139,734,181,762,208C790.6,235,819,245,847,234.7C875.3,224,904,192,932,165.3C960,139,988,117,1016,128C1044.7,139,1073,181,1101,208C1129.4,235,1158,245,1186,224C1214.1,203,1242,149,1271,149.3C1298.8,149,1327,203,1355,197.3C1383.5,192,1412,128,1426,96L1440,64L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>        
        </div>
    )
}

export default History