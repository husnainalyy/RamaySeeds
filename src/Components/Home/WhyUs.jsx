import React from 'react'

function WhyUs() {
    return (
        <div className='w-full min-h-min flex flex-col lg:flex-row bg-slate-200 overflow-hidden'>
            <div className='w-full lg:hidden  justify-center items-center'>
                <img className='' src="../src\assets\heroimg.jpg" alt="oojo" />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 px-6 py-6'>
                <div className='text-5xl text-center font-bold text-orange-400'>WHY PEOPLE CHOOSE US</div>
                <div className='w-full border-2 border-orange-200 h-0 mx-8'></div>
                <div className='flex flex-col gap-6'>
                    <p className='text-center'>At Ramay Zarai Services, our commitment to excellence is evident in every aspect of our business. With a focus on quality assurance, we meticulously select and test each product to ensure that only the best seeds, fertilizers, and farming essentials make it to your hands.</p>
                    <p className='text-center'>Moreover, sustainability is at the core of our ethos. We believe in promoting eco-friendly farming practices that not only optimize crop yields but also protect the environment for future generations. By choosing Ramay Zarai Services, you're not just investing in quality products; you're joining a community committed to sustainable agriculture and making a positive impact on our planet</p>
                </div>
                
            </div>
            <div className='w-1/2 hidden lg:flex justify-center items-center'>
                <img className='' src="../src\assets\heroimg.jpg" alt="oojo" />
            </div>
        </div>
    )
}

export default WhyUs