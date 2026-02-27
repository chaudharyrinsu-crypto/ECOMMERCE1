'use client'
import React from 'react'

const Features = () => {
    // { selectedItem, setSelectedItem }
    return (
        <>
            <div className='px-3 '>
                <h2 className='text-4xl py-15 text-center'>Better Materials, Done Right.</h2>
                <div className='relative h-150'>
                    <img className='w-full h-full object-cover rounded-3xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_terralux_PDP_MaterialsHero-Background_TerraluxAnthracite_Desktop-Mobile_16x9_314ce1b4-c8be-4861-9627-d31d96fca493.jpg?v=1769629506&width=1024" alt="bg-img" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-[70%]'>
                        <div className='grid grid-cols-3 gap-15 items-center justify-between text-sm'>
                            <div className='flex flex-col gap-20 text-right tracking-wide'>
                                <div>
                                    <h2>UPCYCLED MATERIAL</h2>
                                    <p className='leading-5'>INNOVERA™ is made from post-consumer waste, plant-based proteins, and bio-polymers.</p>
                                </div>
                                <div>
                                    <h2>RESPONSIBLY SOURCED</h2>
                                    <p className='leading-5'>Our wool lining meets high standards of animal welfare, environmental care, and social sustainability.</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center relative'>
                                <div className='relative flex items-center justify-center'>
                                    <div className='relative border border-[#575757] h-87.5 w-87.5 rounded-full flex items-center justify-center'>
                                        <span className='absolute top-1/2 left-0 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white'></span>   {/* Left */}
                                        <span className='absolute top-1/2 right-0 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white'></span>  {/* Right */}
                                    </div>
                                    <div className='border border-[#ECE9E2] h-75 w-75 rounded-full absolute'></div>
                                </div>
                            </div>
                            <div className='text-left flex flex-col gap-20'>
                                <div>
                                    <h2>PLUSH FEATHERBED™</h2>
                                    <p className='leading-5'>Dual-density memory foam insole adds extra softness and comfort that doesn’t quit.</p>
                                </div>
                                <div>
                                    <h2>BUILT TO BOUNCE BACK</h2>
                                    <p className='leading-5'>SweetFoam® cushioning made from sugarcane delivers comfort and energy return.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
