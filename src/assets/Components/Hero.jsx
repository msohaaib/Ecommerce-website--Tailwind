import React from 'react'

export default function Hero() {
    return (
        <div className='container h-8 mx-auto p-5'>
            <div className='flex flex-row mt-20'>
                <div className='w-2/5 flex flex-col justify-center'>
                    <h2 className='font-serif text-4xl text-gray-600 mb-3'>Some Catchy Title Here</h2>
                    <p className='text-gray-600 uppercase tracking-wide'>Our brand tagline goes here</p>
                    <p className='text-gray-600 uppercase tracking-wide'>Our brand motto goes here</p>
                    <a href="" className='bg-gradient-to-r from-red-600 to-pink-500 rounded-full text-gray-50 uppercase py-2 px-4 text-xl self-start my-3'>Shop Now</a>
                </div>
                <div className='w-3/5'>
                <img src="../../images/hero-img.svg" alt="w-full" />
                </div>
            </div>
        </div>

    )
}
