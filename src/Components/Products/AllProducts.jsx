import React, { useState } from 'react';


function AllProducts() {
    const [products, setproducts] = useState([
        "https://i.ibb.co/R2JXz2d/IMG-20240503-WA0005.jpg",
        "https://i.ibb.co/WDmKjy4/IMG-20240503-WA0009.jpg",
        "https://i.ibb.co/0yLDNW4/IMG-20240503-WA0010.jpg",
        "https://i.ibb.co/br7PM4r/IMG-20240503-WA0011.jpg",
        "https://i.ibb.co/t3fdGQ2/IMG-20240503-WA0012.jpg",
        "https://i.ibb.co/C96RtH7/IMG-20240503-WA0013.jpg",
        "https://i.ibb.co/DMk6VDh/IMG-20240503-WA0014.jpg",
        "https://i.ibb.co/Fg71d3F/IMG-20240503-WA0015.jpg",
        "https://i.ibb.co/TM0gW1t/IMG-20240503-WA0016.jpg",
        "https://i.ibb.co/Hp5wswq/IMG-20240503-WA0017.jpg",
        "https://i.ibb.co/Zx5CRV2/IMG-20240503-WA0018.jpg",
        "https://i.ibb.co/0Fsqrc5/IMG-20240503-WA0019.jpg",
        "https://i.ibb.co/tHjQwmv/IMG-20240503-WA0020.jpg",
        "https://i.ibb.co/QjmgTW3/IMG-20240503-WA0021.jpg",
        "https://i.ibb.co/NKLSbmy/IMG-20240503-WA0022.jpg",
        "https://i.ibb.co/XFX3W0J/IMG-20240503-WA0023.jpg",
        "https://i.ibb.co/Zgw7FY7/IMG-20240503-WA0024.jpg",
        "https://i.ibb.co/48yZ9QH/IMG-20240503-WA0025.jpg",
        "https://i.ibb.co/2tJFSYh/IMG-20240503-WA0026.jpg",
        "https://i.ibb.co/FH7nWb5/IMG-20240503-WA0027.jpg",
        "https://i.ibb.co/vYQXzG4/IMG-20240503-WA0028.jpg",
        "https://i.ibb.co/8r50y7X/IMG-20240503-WA0029.jpg",
        "https://i.ibb.co/2hZX3Ff/IMG-20240503-WA0030.jpg",
        "https://i.ibb.co/mz17BCS/IMG-20240503-WA0031.jpg",
        "https://i.ibb.co/SQY6QVb/IMG-20240503-WA0032.jpg",
        "https://i.ibb.co/Hz7dDgb/IMG-20240503-WA0033.jpg",
        "https://i.ibb.co/cv4MYPf/IMG-20240503-WA0034.jpg",
        "https://i.ibb.co/Q6xpGPD/IMG-20240503-WA0035.jpg",
        "https://i.ibb.co/cbC50F4/IMG-20240503-WA0036.jpg",
        "https://i.ibb.co/cgp7DRk/IMG-20240503-WA0037.jpg",
        "https://i.ibb.co/xqt4T9K/Whats-App-Image-2024-05-11-at-17-43-46-03a7ab1b.jpg",
        "https://i.ibb.co/MPxLkSw/Whats-App-Image-2024-05-11-at-17-43-46-513c16a3.jpg",
        "https://i.ibb.co/bvFSpGw/Whats-App-Image-2024-05-11-at-17-43-47-4fbaa9a8.jpg",
        "https://i.ibb.co/L0dnJPk/Whats-App-Image-2024-05-11-at-17-43-48-14c9056d.jpg",
        "https://i.ibb.co/xhhjFQn/Whats-App-Image-2024-05-11-at-17-43-49-88a71961.jpg",
        "https://i.ibb.co/ZYcZv77/Whats-App-Image-2024-05-11-at-17-43-49-a0cf79d2.jpg",
        "https://i.ibb.co/HHCQFLS/Whats-App-Image-2024-05-11-at-17-43-50-e9792a01.jpg",
        "https://i.ibb.co/ypGtPNB/Whats-App-Image-2024-05-11-at-17-43-51-9593ae45.jpg",
        "https://i.ibb.co/Jc5FxfF/Whats-App-Image-2024-05-11-at-17-49-31-8da4b623.jpg",
        "https://i.ibb.co/LN3PZCt/Whats-App-Image-2024-05-11-at-17-49-31-528a533e.jpg",
    ])
    
    return (
        <div className='pb-10 bg-zinc-900'>
            <h1 className='w-full text-center text-6xl pb-5 font-bold text-[#f7b32b]'>ALL Products</h1>
            <div className='w-full flex flex-wrap justify-center items-center  px-8'>
                {products.map((product,index) => {
                    return (
                        <div key={index} className="w-full lg:w-56 lg:flex-shrink-0 lg:m-6 my-4 bg-[#226f54] relative overflow-hidden  rounded-lg   group">
                            <div className="lg:relative py-10 px-10 flex items-center justify-center group-hover:scale-110 hover:rotate-[-8deg]	 transition-transform ">
                                <img className="lg:relative w-40 h-40 rounded-2xl" src={product} alt="" />
                            </div>
                           
                        </div>
                    )
                
                })}
                
            </div>
        </div>
    );
}

export default AllProducts;
