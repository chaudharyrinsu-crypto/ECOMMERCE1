import React from 'react'

const Features = ({product,selectedItem,setSelectedItem}) => {
  return (
    <>
      <div>
        <p>{product.title}</p>
       <img className='h-187.5 object-cover absolute -top-25' src={selectedItem.firstimg} alt={product.title} />
      </div>
    </>
  )
}

export default Features
