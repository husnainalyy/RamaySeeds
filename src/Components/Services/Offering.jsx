import React from 'react'

function Offering() {
    return (
        <div className='w-full  flex flex-col lg:flex-row gap-8 px-4 py-20'>
            <div className='lg:w-1/2 flex flex-col gap-5'>
                <div>
                    <h1 className='text-5xl lg:text-4xl text-center font-bold text-orange-400 pb-4'>UNIQUE ADVANTAGES</h1>
                    <div className='w-full h-0  border-2  border-orange-300'></div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-lg font-semibold'>Discover a comprehensive range of specialized services tailored to meet your agricultural needs:</h1>
                    <p>Embark on a journey of agricultural excellence with our Exclusive Offering. At Ramay Zarai Services, we pride ourselves on providing a distinct edge to our valued clients. Our Unique Advantage lies in our unwavering commitment to innovation, quality, and customer satisfaction. From cutting-edge technologies to personalized solutions, we go above and beyond to cater to your specific needs and surpass expectations. With a focus on sustainable practices and industry-leading expertise, we empower farmers to achieve unprecedented success and drive positive change in the agricultural landscape. Join us and experience the difference of our Unique Advantage – where every interaction is tailored to elevate your farming experience and ensure long-term prosperity.</p>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img className='w-full' src="https://i.ibb.co/2MgNT5m/products-Back.jpg" alt="" />
            </div>
        </div>
    )
}

export default Offering