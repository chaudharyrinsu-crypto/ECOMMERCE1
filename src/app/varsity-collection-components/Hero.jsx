import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className='relative h-40 md:h-45 lg:h-130 w-full '>
                <img className='w-full h-full object-cover rounded-2xl' src="../varsity-collection-hero.webp" alt="terraluxhero" />
                <div className='mt-3 space-x-2 md:space-x-4 text-[12px] lg:text-[14px] uppercase font-medium absolute bottom-10 md:bottom-16 right-1/2 -translate-x-1/2 md:right-16 md:translate-x-0 whitespace-nowrap'>
                    <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>
                        shop men</Link>
                    <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>shop women</Link>
                </div>
            </section>
               <section>
                <div className='space-y-4 flex md:flex-row flex-col justify-around max-w-5xl mx-auto md:gap-20 lg:gap-25 py-12 px-10 md:py-20 leading-5 text-center md:text-start'>
                    <p className='text-[12px] w-full md:max-w-[30%] tracking-wider'>DRIVEN BY A BELIEF IN BETTER, WE TURNED TO NATURE FOR ANSWERS.</p>
                    <p className='text-sm md:text-xl lg:text-2xl w-full md:max-w-[70%] '>Made with animal-free, bio-fabricated leather alternative INNOVERA™, the all new Terralux™ Collection delivers iconic Allbirds comfort in our most refined silhouette yet. It’s part of our commitment to doing better things in a better way, while still making the most comfortable shoes on the planet.</p>
                </div>
            </section>
        </>
    )
}


export default Hero