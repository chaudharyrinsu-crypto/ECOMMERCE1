import Link from 'next/link'
import React from 'react'

const TreeRunnerNZHeadin = () => {
    return (
        <>
            <div className='text-[#212121] flex flex-col gap-5 text-center'>
                <h2 className='text-4xl'>Tree Runner NZ</h2>
                <span className='text-sm'>Spice (Warm White Sole) - $100</span>
                <div className='inline-block space-x-3 uppercase text-sm font-medium'>
                    <Link className='px-5 text-center py-2 rounded-4xl border border-[#212121] hover:bg-[#212121] hover:text-white duration-500' href='/'>Shop men</Link>
                    <Link className='inline-block px-5 text-center py-2  rounded-4xl border border-[#212121] hover:bg-[#212121] hover:text-white duration-500' href='/'>Shop women</Link>
                </div>
            </div>
        </>
    )
}

export default TreeRunnerNZHeadin
