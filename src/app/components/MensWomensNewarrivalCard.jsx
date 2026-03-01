import React from 'react'
import { products } from '../data/Alldata'
import Link from 'next/link'
import { BsMinecart } from "react-icons/bs";

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
                <div className='p-3'>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-medium md:text-sm text-[12px] uppercase'>{item.title}</h3>
                    <span className='block xl:hidden text-sm font-semibold'>{item.price}</span>
                  </div>
                  <span className='text-sm block mt-0 lg:mt-1.5'>{item.items[0].name}</span>
                  <div className='flex justify-between'>
                    <div className='flex gap-1 xl:gap-2'>
                      {item.items.slice(0, 5).map((color, index) => (
                        <span key={index}
                          style={{ backgroundColor: color.hex }}
                          className='lg:h-4 h-3 w-3 lg:w-4 rounded-full inline-block border'
                        ></span>
                      ))}
                      {item.items.length > 5 && (
                        <span className='underline'>+{item.items.length - 5}</span>
                      )}
                    </div>
                    <button onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      dispatch({
                        type: 'ADD_TO_CART', payload: {
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          size: item.sizes[0],
                          image: item.items[0].firstimg
                        }
                      })
                      dispatch({ type: 'OPEN_CART' })
                    }} className='uppercase flex justify-baseline gap-2.5 '><BsMinecart /> <span className='text-sm font-medium'>ADD</span></button>
                  </div>
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
