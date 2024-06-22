import React from 'react'

export default function Hero() {
    return (
        <div className='container mx-auto p-5'>
            <div className='md:flex md:flex-row mt-20'>
                <div className='md:w-2/5 flex flex-col justify-center items-center'>
                    <h2 className='font-serif text-4xl text-gray-600 mb-3 text-center md:self-start md:text-left'>Some Catchy Title Here</h2>
                    <p className='text-gray-600 uppercase tracking-wide text-center md:self-start md:text-left'>Our brand tagline goes here</p>
                    <p className='text-gray-600 uppercase tracking-wide text-center md:self-start md:text-left'>Our brand motto goes here</p>
                    <a href="" className='bg-gradient-to-r from-red-600 to-pink-500 rounded-full text-gray-50 uppercase py-2 px-4 text-xl md:self-start my-3'>Shop Now</a>
                </div>
                <div className='md:w-3/5'>
                    <img src="../../images/hero-img.svg" alt="w-full" />
                </div>
            </div>


            {/* Men's Collection */}

            <div className="my-20">
                <div className="flex flex-row justify-between my-5">
                    <h2 className='text-xl'>Men's Collection</h2>
                    <a href="#" className='text-base flex flex-row'>View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-4 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
                <div className="grid grid-flow-row grid-cols1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/men/product1.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">Men's T-Shirts</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/men/product2.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">Slim Khaki Trouse</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/men/product3.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">Nike Shoes</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/men/product4.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">Wrist Watches</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2 '></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Women's Collection */}

            <div className="my-20">
                <div className="flex flex-row justify-between my-5">
                    <h2 className='text-xl'>Women's Collection</h2>
                    <a href="#" className='text-base flex flex-row'>View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-4 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
                <div className="grid grid-flow-row grid-cols1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/women/product1.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">V Neck Tassel Cape</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/women/product2.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">Printed Wrap Dress</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/women/product3.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">Blue Denim Dress</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <a href="#">
                            <img src="../../images/products/women/product4.jpg" className='rounded-tl-lg rounded-tr-lg' />
                        </a>
                        <div className="p-5">
                            <h3><a href="">High Waist Denim Skirt</a></h3>
                            <div className='flex flex-row my-2'>
                                <div className='bg-black w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-blue-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2 '></div>
                                <div className='bg-white w-5 h-5 cursor-pointer rounded-full shadow-md mr-2'></div>
                                <div className='bg-red-800 w-5 h-5 rounded-full cursor-pointer shadow-md mr-2'></div>
                                <div className='bg-green-700 w-5 h-5 rounded-full shadow-md cursor-pointer mr-2'></div>
                            </div>
                            <div className='flex flex-row my-2'>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XXL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>XL</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>L</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>M</div>
                                <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-1'>S</div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to cart
                                </a>
                                <a href="#" className='bg-purple-600 hover:bg-purple-700 rounded-full text-gray-50 uppercase py-1 px-2 text-xs flex justify-center my-2 lg:flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-6 pr-2 flex flex-row">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter */}

            <div className="rounded-lg shadow-lg my-20 flex flex-row">
                <div className='lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:via-purple-900 lg:to-transparent text-gray-100 p-8'>
                <div className="lg:w-1/2">
                <h3 className='text-lg font-extrabold pb-4'>Subscribe to get our offer first</h3>
                <p className='pb-4 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quod. Lorem ipsum adipisicing elit. Quo, magni!</p>
                <div>
                    <input type="email" placeholder='Enter email address' className='bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4' />
                    <button type="submit" className='bg-red-600 hover:bg-red-700 py-3 rounded-lg w-full'>Subscribe</button>
                </div>
                </div>
                </div>
                <div className='lg:w-2/5 w-full lg:flex lg:flex-row hidden'>
                    <img src="../../images/subscribe-banner.png" alt=""  className='h-96'/>
                </div>
            </div>

            {/* footer section */}

            <div className='border-t-2 border-gray-300 flex flex-col sm:flex-row justify-between'>
                <div className='mb-4 flex flex-col min-[381px]:flex-row'>
                    <a href="#" className='mx-2.5'>About</a>
                    <a href="#" className='mx-2.5'>Privacy policy</a>
                    <a href="#" className='mx-2.5'>Terms and Services</a>
                </div>
                <p>© Copyright Reserved 2024</p>
            </div>

        </div>

    )
}
