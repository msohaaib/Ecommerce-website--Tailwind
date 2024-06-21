import React from 'react'

export default function Header() {
    return (
        <div className='container h-8 mx-auto p-5'>
            <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
                <div className='bg-gradient-to-r from-purple-400 to-red-400 w-8 h-8 rounded-lg'></div>
                <h1 className='text-2xl text-gray-600 ml-2'>logo</h1>
            </div>
            <div className='mt-2'>
                <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Home</a>
                <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Shope</a>
                <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Blog</a>
                <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Contact</a>
                <a className='text-gray-600 hover:text-purple-600 p-3' href="#">Cart (0)</a>
            </div>
            </div>
        </div>
    )
}
