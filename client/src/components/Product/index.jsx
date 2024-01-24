import React from 'react'

const Product = ({ pro }) => {
  return (
    <div>
      <div className="imgBox">
        <img src={pro.image} alt="" />
      </div>
      <h2>{pro.title}</h2>
      <span>${pro.price}</span>
    </div>
  )
}

export default Product