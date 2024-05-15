import React from 'react'

function Map() {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-4 py-10 bg-[#F2F2F2]'>
            <h1 className='text-3xl font-bold text-orange-400 '>CONTACT US</h1>
            <div className='w-[90vw] h-0  border-2  border-orange-300'></div>
            <iframe className='w-full h-96 px-4 lg:px-16' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6931.473040654947!2d72.5579119!3d29.6984177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393c57b7d8c21d73%3A0xc3864bc6021ac02!2sRamay%20Zarai%20Markaz!5e0!3m2!1sen!2s!4v1715428564924!5m2!1sen!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map