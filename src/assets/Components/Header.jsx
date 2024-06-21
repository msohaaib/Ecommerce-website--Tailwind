import React from 'react'

export default function Header() {
    return (
        <div className='container h-8 mx-auto p-5'>
            <div className='md:flex md:flex-row justify-between text-center'>
                <div className='flex flex-row justify-center        '>
                    <div className='bg-gradient-to-r from-purple-400 to-red-400 w-8 h-8 rounded-lg'></div>
                    <h1 className='text-2xl text-gray-600 ml-2'>logo</h1>
                </div>
                <div className='mt-2'>
                    <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Home</a>
                    <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Shope</a>
                    <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Blog</a>
                    <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Contact</a>
                    <a className='bg-purple-600 text-gray-50 hover:bg-purple-700 p-2 px-5 rounded-full' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 pr-2 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Cart (0)</a>
                </div>
            </div>
        </div>
    )
}
