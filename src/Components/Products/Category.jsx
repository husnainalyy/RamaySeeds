import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import {  zoomIn } from '../Universal/Animation';

function Category() {
    const [ref1, inView1] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    const [ref2, inView2] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    const [ref3, inView3] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    const [ref4, inView4] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    
    return (
        <div className='bg-[#a8dadc] pt-10'>
            
                <div className='w-full'>
                    <h1 className=' w-full text-center text-5xl font-bold text-orange-400 '>Products Category</h1>
                </div>
                <div class="h-full min-h-min w-full lg:pt-12 ">
                    <div  class="w-full flex flex-col lg:grid gap-14 md:grid-cols-4 md:gap-5 pt-10 lg:pt-0 px-4">
                        <motion.div ref={ref1} variants={zoomIn("", "1.5")} initial="hidden" animate={inView1 ? "show" : "hidden"} class="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div
                                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40 overflow-hidden">
                                <img className='w-10 h-10' src="../src\assets\seed.svg" alt="" />
                            </div>
                            <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">SEEDS</h1>
                            <p class="px-4 text-gray-500">Discover high-quality seeds tailored to your specific crop needs. From grains to vegetables, our diverse selection of seeds ensures optimal growth and yield for your farm.</p>
                        </motion.div>
                        <motion.div ref={ref2} variants={zoomIn("", "1.5")} initial="hidden" animate={inView2 ? "show" : "hidden"} data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div
                                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 overflow-hidden">
                                <img className='w-10 h-20' src="../src\assets\essentials.svg" alt="" />
                            </div>
                            <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 ">CROP CARE ESSENTIALS</h1>
                            <p class="px-4 text-gray-500">Discover essential solutions for crop care, from effective medicines to reliable machinery, at Ramay Zarai Services. Elevate your farming practices and ensure a successful harvest with our high-quality products.</p>
                        </motion.div>
                        <motion.div ref={ref3} variants={zoomIn("", "1.5")} initial="hidden" animate={inView3 ? "show" : "hidden"} data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div
                                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                                    <img className='w-10' src="../src\assets\pesticide.svg" alt="" />
                            </div>
                            <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">PESTICIDES</h1>
                            <p class="px-4 text-gray-500">With formulations designed to target specific threats, our pesticides ensure effective protection while promoting healthy plant growth and maximizing yields. </p>
                        </motion.div>
                        <motion.div ref={ref4} variants={zoomIn("", "1.5")} initial="hidden" animate={inView4 ? "show" : "hidden"} data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div
                                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                                <img className='w-10' src="../src\assets\fertilizer.svg" alt="" />
                            </div>
                            <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">FERTILIZERS</h1>
                            <p class="px-4 text-gray-500">Enhance soil fertility and crop nutrition with our range of premium fertilizers. Formulated with essential nutrients, our fertilizers promote healthy plant growth and robust yields.</p>
                        </motion.div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18181B" fill-opacity="1" d="M0,160L14.1,149.3C28.2,139,56,117,85,106.7C112.9,96,141,96,169,128C197.6,160,226,224,254,240C282.4,256,311,224,339,197.3C367.1,171,395,149,424,144C451.8,139,480,149,508,176C536.5,203,565,245,593,234.7C621.2,224,649,160,678,149.3C705.9,139,734,181,762,208C790.6,235,819,245,847,234.7C875.3,224,904,192,932,165.3C960,139,988,117,1016,128C1044.7,139,1073,181,1101,208C1129.4,235,1158,245,1186,224C1214.1,203,1242,149,1271,149.3C1298.8,149,1327,203,1355,197.3C1383.5,192,1412,128,1426,96L1440,64L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>
            </div>

            
        </div>
    )
}

export default Category