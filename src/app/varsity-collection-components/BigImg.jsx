import React from 'react'


const BigImg = () => {

    return (
        <>
        <section>
                 <p className='text-3xl lg:text-4xl px-5 md:py-11 py-7 text-center'>How to Style</p>
                  <div className='md:grid md:grid-cols-2 grid-cols-1 space-y-2.5 md:gap-2.5'>
                <div className='tracking-wide'>
                    <div className='relative'>
                        <img className='rounded-2xl object-cover' src='https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_LP_HowToStyle-01_Desktop-Mobile-2x3.jpg?v=1766439767&width=1024' alt="varsity shoe" />
                    </div>
                    <div className='text-center space-y-2 space-x-10 w-[70%] mx-auto pt-8 pb-20 md:pb-10 lg:pb-15'>
                        <h6 className=''>BRING YOUR ‘A’ GAME</h6>
                        <p className='text-[#575757] text-sm leading-5'>Sporty style that plays hard and looks good doing it.</p>
                    </div>
                </div>
                <div className='tracking-wide'>
                    <div className='relative'>
                        <img className='rounded-2xl object-cover' src='https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_LP_HowToStyle-02_Desktop-Mobile-2x3.jpg?v=1766439767&width=1024' alt="varsity shoe" />
                    </div>
                    <div className='text-center space-y-2 space-x-10 w-[70%] mx-auto pt-8 pb-20 md:pb-10 lg:pb-15'>
                        <h6 className=''>KEEP IT STREET SMART</h6>
                        <p className='text-[#575757] text-sm leading-5'>Casual cool meets retro vibes—the perfect match for pretty much any outfit.</p>
                    </div>
                </div>
            </div>
        </section>
           
        </>
    )
}

export default BigImg
