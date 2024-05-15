import React from 'react'

function Products() {
    return (
        <div className='my-10 min-h-min bg-fixed lg:bg-cover bg-center  bg-[url("../src/assets/productsBack.jpg")]  w-full py-10'>
            <div className=' flex flex-col justify-between items-center  gap-16 py-8 px-4'>
                <div className='flex flex-col justify-between items-center  py-4'>
                    <div className='text-3xl lg:text-6xl text-center  text-zinc-50 font-bold'>POPULAR PRODUCTS CATEGORIES</div>
                    <div className='text-xl lg:text-4xl text-center  text-zinc-100'>Some of our popular categories include </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-4 px-4'>
                    <div className='w-72 h-80 flex flex-col gap-5 items-center  bg-white rounded-2xl'>
                        <img className='rounded-2xl w-full h-3/4' src="https://i.ibb.co/pLZT7tj/Free-Edible-Seed-Vectors-2.jpg" alt="" />
                        <h1 className='text-orange-400 font-semibold text-2xl font-arial'>SEED</h1>
                    </div>
                    <div className='w-72 h-80 flex flex-col gap-5 items-center  bg-white rounded-2xl'>
                        <img className='rounded-2xl w-full h-3/4 pt-2' src="https://i.ibb.co/dQT0ntZ/garden-sprayer-icon-flat-color-design-vector-illustration-RY9319.jpg" alt="" />
                        <h1 className='text-orange-400 font-semibold  text-2xl font-arial'>Farming Products</h1>
                    </div>
                    <div className='w-72 h-80 flex flex-col gap-5 items-center  bg-white rounded-2xl'>
                        <img className='rounded-2xl w-full h-3/4' src="https://i.ibb.co/z6YgnSK/pest-control-service-with-exterminator-of-insects-sprays-and-house-hygiene-disinfection-in-flat-cart.jpg" alt="" />
                        <h1 className='text-orange-400 font-semibold text-2xl font-arial'>Pesticides</h1>
                    </div>
                    <div className='w-72 h-80 flex flex-col gap-5 items-center  bg-white rounded-2xl'>
                        <img className='rounded-2xl w-full h-3/4' src="https://i.ibb.co/5k4nL3x/packing-with-soil-for-potted-plants-potting-soil-various-fertilizers-in-bottles-and-spray-gun-vector.jpg" alt="" />
                        <h1 className='text-orange-400 font-semibold text-2xl font-arial'>Fertilizers</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products