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
                            <img className='w-10' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIAoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJ0cnVzdCI+Cgk8cGF0aCBpZD0idHJ1c3RfMV8iIGQ9Ik0xMS4yNTksMjIuMzUyYy0yLjYxMywwLTQuNzU5LDIuMDQyLTQuODg1LDQuNjVsLTAuMDA2LDAuMTM5bC0zLjExNCwzLjExNGwtMC41MDktMC41MWwyLjkxOC0yLjkxOQoJCWMwLjIxMy0yLjkyNCwyLjY0NC01LjE5NSw1LjU5NS01LjE5NWg3Ljc1YzAuNzUsMCwxLjM2LDAuNjEsMS4zNiwxLjM2YzAsMC4wNjgtMC4wMDMsMC4xMzctMC4wMDksMC4yMDRsNS4wMDgtNC4wNjkKCQljMC42MTUtMC42MjEsMS44MTItMC42NDYsMi40ODEsMC4wMjVjMC4zMzUsMC4zMzQsMC41MiwwLjc3OSwwLjUyLDEuMjU0YzAsMC40NzQtMC4xODUsMC45MTktMC41MiwxLjI1NWwtNi4xMDIsNi4xMDIKCQljLTAuMzY4LDAuMzY3LTAuODU1LDAuNjA2LTEuMzczLDAuNjcybC03LjE5OCwwLjg5OWwtMC45MTcsMC45MjFsLTAuNTEtMC41MDhsMS4wOTItMS4wOTdsNy40NDMtMC45MzEKCQljMC4zNTktMC4wNDUsMC42OTgtMC4yMTEsMC45NTMtMC40NjdsNi4xMDItNi4xMDJjMC4xOTktMC4xOTksMC4zMS0wLjQ2NCwwLjMxLTAuNzQ1YzAtMC4yODItMC4xMDktMC41NDYtMC4zMDktMC43NDUKCQljLTAuMzk5LTAuMzk5LTEuMDkyLTAuMzk4LTEuNDkxLDBsLTYuMzQ0LDUuMTU2bC0wLjAwMS0wLjAwMWMtMC40MDYsMC4zMzUtMC45MjgsMC41MzYtMS40OTQsMC41MzZoLTUuMDAxdi0wLjcyMWg1LjAwMQoJCWMwLjkwMywwLDEuNjM4LTAuNzM1LDEuNjM4LTEuNjM5YzAtMC4zNTQtMC4yODctMC42NDEtMC42NC0wLjY0MWgtNy43NDhWMjIuMzUyeiBNMjEsMTcuMzZIMTF2LTAuNzJoMTBWMTcuMzZ6IE0yMy4zNiwxNWgtMC43MlY1CgkJaDAuNzIxTDIzLjM2LDE1TDIzLjM2LDE1eiBNOS4zNiwxNUg4LjY0VjVoMC43MkM5LjM2LDUsOS4zNiwxNSw5LjM2LDE1eiBNMjEsMy4zNkgxMVYyLjY0aDEwVjMuMzZ6Ii8+CjwvZz4KPHJlY3QgaWQ9Il9UcmFuc3BhcmVudF9SZWN0YW5nbGUiIHN0eWxlPSJmaWxsOm5vbmU7IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+" alt="" />
                            <h1 className='text-2xl'>Efficiency & Reliability</h1>                 
                        </div>
                        <p className='text-lg'> Streamline your farming operations with our innovative solutions and state-of-the-art technologies.Rely on our high-quality products and services to consistently deliver exceptional results, season after season.</p>
                    </div>
                    <div className=' flex flex-col  pt-5'>
                        <div className='flex justify-start items-center gap-4'>
                            <img className='w-10' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCSB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA0MCAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDAgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzgwODE4NCIgZD0iTTM0LjkxLDE0LjY2N2MtMC4wNjctMy40OTctMS4zNTktNi44ODQtMy42OTEtOS41NDljLTIuODQtMy4yNDgtNi45MzgtNS4xMTEtMTEuMjQyLTUuMTExDQoJCWMtNC4zMTEsMC04LjQwOCwxLjg1OS0xMS4yNDIsNS4xYy0yLjM1NSwyLjY5My0zLjYzLDYuMTIxLTMuNjczLDkuNjUxYy0yLjkyMiwwLjUtNS4wODQsMi45NDEtNS4xMjQsNS45MTkNCgkJYy0wLjAxMiwwLjA0Mi0wLjAxOCwwLjA4Ni0wLjAxOCwwLjEzQy0wLjA4LDI0LjIyMiwyLjY3MiwyNyw2LjA1NSwyN2g0LjUzOWMyLjA1NiwzLjAzLDUuNTI3LDUsOS4zODMsNQ0KCQljNS42NDcsMCwxMC40NzYtNC4yMjEsMTEuMjI5LTkuODE5bDAuNzU4LTUuNjMzYzAuNDY2LTMuNDU4LTAuNTg1LTYuOTQ4LTIuODgyLTkuNTc0cy01LjYxNS00LjEzMy05LjEwNC00LjEzMw0KCQlzLTYuODA4LDEuNTA2LTkuMTA0LDQuMTMzUzcuNTI0LDEzLjA5LDcuOTksMTYuNTQ4bDAuNzU4LDUuNjMzYzAuMTg0LDEuMzcsMC42MTYsMi42NTYsMS4yNCwzLjgxOUg3LjkxOQ0KCQljLTAuNDg2LTEuMDkzLTAuODI0LTIuMjkyLTAuOTk2LTMuNTczbC0wLjc1OC01LjYzMWMtMC4wNjQtMC40NzQtMC4wOTktMC45NDgtMC4xMTQtMS40MjFjMC4wMzctMC4wNzgsMC4wNjItMC4xNjIsMC4wNTMtMC4yNTUNCgkJYy0wLjAwNS0wLjA1OS0wLjAyNi0wLjExMy0wLjA1LTAuMTYzQzYuMDUsMTEuNTk4LDcuMjQ4LDguMzI1LDkuNDg2LDUuNzY2YzIuNjQ1LTMuMDI0LDYuNDY4LTQuNzU4LDEwLjQ5LTQuNzU4DQoJCWM0LjAxNywwLDcuODQsMS43MzgsMTAuNDksNC43NjljMi4yMiwyLjUzOCwzLjQyOSw1Ljc3NywzLjQ0NSw5LjExQzMzLjg4NywxNC45NCwzMy44NywxNSwzMy44NjUsMTUuMDYzDQoJCWMtMC4wMDgsMC4wODgsMC4wMDksMC4xNzMsMC4wNDMsMC4yNDhjLTAuMDEzLDAuNTAzLTAuMDUzLDEuMDA3LTAuMTIsMS41MTFsLTAuNzU4LDUuNjYxYy0wLjIwNSwxLjUyNi0wLjYwNywyLjkzNi0xLjA3NiwzLjc3Mg0KCQljLTAuMDg2LDAuMTU1LTAuMDg1LDAuMzQ0LDAuMDA1LDAuNDk4QzMyLjA0OSwyNi45MDYsMzIuMjEzLDI3LDMyLjM5MSwyN2gxLjU1NUMzNy4yODQsMjcsNDAsMjQuMjE1LDQwLDIwLjczNQ0KCQlDNDAsMTcuNjc0LDM3Ljg0NiwxNS4xNSwzNC45MSwxNC42Njd6IE05LjczOCwyMi4wNDdMOC45OCwxNi40MTVjLTAuNDI2LTMuMTcyLDAuNTM3LTYuMzczLDIuNjQ1LTguNzgyDQoJCWMyLjEwNi0yLjQwOSw1LjE1LTMuNzkxLDguMzUyLTMuNzkxczYuMjQ1LDEuMzgyLDguMzUyLDMuNzkxYzIuMTA3LDIuNDEsMy4wNyw1LjYxLDIuNjQ1LDguNzgybC0wLjc1OCw1LjYzMw0KCQlDMjkuNTI3LDI3LjE1MSwyNS4xMjYsMzEsMTkuOTc3LDMxYy0zLjI3MiwwLTYuMjM4LTEuNTU3LTguMTQ1LTRIMTVjMC4wMTgsMCwwLjAzMi0wLjAwOCwwLjA0OS0wLjAxDQoJCUMxNS4yNzgsMjguMTM0LDE2LjI4OSwyOSwxNy41LDI5aDRjMS4zNzksMCwyLjUtMS4xMjIsMi41LTIuNVMyMi44NzksMjQsMjEuNSwyNGgtNGMtMS4yMTEsMC0yLjIyMiwwLjg2Ni0yLjQ1MSwyLjAxDQoJCUMxNS4wMzIsMjYuMDA4LDE1LjAxOCwyNiwxNSwyNmgtMy44NTNDMTAuNDI5LDI0LjgxOSw5LjkzMiwyMy40ODYsOS43MzgsMjIuMDQ3eiBNMTYsMjYuNWMwLTAuODI3LDAuNjczLTEuNSwxLjUtMS41aDQNCgkJYzAuODI3LDAsMS41LDAuNjczLDEuNSwxLjVTMjIuMzI3LDI4LDIxLjUsMjhoLTRDMTYuNjczLDI4LDE2LDI3LjMyNywxNiwyNi41eiBNNi44MzYsMjZINi4wNTVjLTIuODA0LDAtNS4wOTEtMi4yODUtNS4xMzQtNS4xMTENCgkJYzAuMDEtMC4wNDEsMC4wMTYtMC4wODMsMC4wMTYtMC4xMjVjMC0yLjQ3MiwxLjc1LTQuNTE2LDQuMTQ1LTQuOTk2YzAuMDIyLDAuMzg3LDAuMDQxLDAuNzc0LDAuMDkzLDEuMTYybDAuNzU4LDUuNjMxDQoJCUM2LjA5NiwyMy43OCw2LjQwNCwyNC45Myw2LjgzNiwyNnogTTMzLjk0NSwyNmgtMC43NjdjMC4zNy0wLjkxNywwLjY3My0yLjEyLDAuODQyLTMuMzg0bDAuNzU4LTUuNjYxDQoJCWMwLjA1OC0wLjQyNSwwLjA5Ny0wLjg1MSwwLjExNy0xLjI3NUMzNy4yNzEsMTYuMTQ1LDM5LDE4LjIyOCwzOSwyMC43OTJDMzksMjMuNjY0LDM2LjczMiwyNiwzMy45NDUsMjZ6Ii8+DQo8L2c+DQo8L3N2Zz4=" alt="" />
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