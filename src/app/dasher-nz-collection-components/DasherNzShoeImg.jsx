import React from 'react'

const DasherNzShoeImg = () => {
    return (
        <>
            <section className='md:grid md:grid-cols-2 block md:gap-2.5 sm:space-y-2.5 md:space-y-0 py-10'>
                <img className='object-cover rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-01_Desktop-Mobile_1x1_ebb8a1e9-070c-47ff-9fae-37d31c6e301a.jpg?v=1770054806&width=1024" alt="shoe-dog-img" />
                <div className='grid grid-rows-2 gap-2.5'>
                    <img className='object-cover rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-04_Desktop-Mobile_16x9_0dacd1bf-0eb2-48be-8192-974177cc69fa.jpg?v=1769466618&width=1024" alt="secondimg" />

                    <div className='grid grid-cols-2 gap-2.5'>
                        <img className='object-cover rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-02_Desktop-Mobile_1x1-1.jpg?v=1769466617&width=1024" alt="yelloshoe" />
                        <img className='object-cover rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_ColorGrid-02_Desktop-Mobile_1x1_4cbab8bf-4fcb-44e0-8e45-d18658028020.jpg?v=1769466617&width=1024" alt="grayshoe" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DasherNzShoeImg
