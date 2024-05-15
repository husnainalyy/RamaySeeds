import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../Universal/Animation';

function GetInTouch() {
    
    const form = React.useRef(null);
    const sendEmail = (e, formElement) => {
        e.preventDefault();

        emailjs
            .sendForm('service_qgb18i6', 'template_db56u9a', form.current, {
                publicKey: 'rHbNglqxNiBYQ3Pn_',
            })
            .then(
                () => {
                    alert("WE WILL GET BACK TO YOU SOON!")
                    console.log('WE WILL GET BACK TO YOU SOON!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };
    const [ref, inView] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    
    return (
        <div className='py-16 flex flex-col justify-center items-center gap-1   overflow-hidden'>
            <h1 className='text-4xl text-orange-400 font-bold'>GET IN TOUCH</h1>
            <p className='px-2 text-center'>Ready to take your farming to the next level? Get in touch with us today!</p>
            <form ref={form} onSubmit={(e) => sendEmail(e)} class="w-80 lg:w-96 border-4 border-orange-400 rounded-2xl p-4 my-6  overflow-hidden">
                
                <motion.div ref={ref} variants={fadeIn("right", "", "0.1", "1")} initial="hidden" animate={inView ? "show" : "hidden"}  class="relative z-0 w-full mb-5 group">
                    <input type="text" name="from_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </motion.div>
                
                <motion.div ref={ref} variants={fadeIn("left", "", "0.1", "1")} initial="hidden" animate={inView ? "show" : "hidden"} class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </motion.div>
                
                <motion.div ref={ref} variants={fadeIn("right", "", "0.1", "1")} initial="hidden" animate={inView ? "show" : "hidden"} class="relative z-0 w-full mb-5 group">
                    <input type="email" name="from_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </motion.div>

                <motion.div ref={ref} variants={fadeIn("left", "", "0.1", "1")} initial="hidden" animate={inView ? "show" : "hidden"} class=" w-full ">
                    <textarea id="message" name='message' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border     focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a message..."></textarea>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                </motion.div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default GetInTouch