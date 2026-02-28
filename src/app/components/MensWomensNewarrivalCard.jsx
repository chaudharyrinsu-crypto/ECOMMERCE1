import React from 'react'
import { products } from '../data/Alldata'

const MensWomensNewarrivalCard = () => {
  return (
    <>
      <section className='py-10'>
        <div className='grid grid-cols-2 gap-2.5'>
          <img className='rounded-3xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_Terralux_Site_ProductGrid_Desktop-Mobile_9x16_M_v2_57cea5bb-913d-4995-bfb3-f2b866972fb6.jpg?v=1771541746&width=1280" alt="menshoe" />
          <div className='grid grid-cols-2 gap-2.5'>
            {products.filter(i => i.gender === 'men').slice(1, 5).map((item, index) => (
              <div key={index} className='bg-white rounded-2xl'>
                <img src={item.items[0].fifthimg} alt="firstimg" />
                <div>
                  <Link href='/' className='font-semibold block md:text-sm text-[12px] uppercase'>{item.title}</Link>
                  <Link href='/' className='text-sm block mt-0 lg:mt-1.5'>{item.items[0].name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MensWomensNewarrivalCard
