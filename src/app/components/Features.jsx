"use client";
import React from 'react'
import { AllFeatures } from '../data/Alldata'

const Features = () => {
  return (
    <>
      <section className='px-3 py-2.5 bg-[#ECE9E2] text-[#212121]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>

            {AllFeatures.map((item,index)=>(
                <div key={index} className='bg-white rounded-2xl px-8 pt-8 pb-15 leading-5.5 tracking-wide lg:text-sm text-[12px] space-y-5'>
                    <h6 className='uppercase '>{item.title}</h6>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Features
