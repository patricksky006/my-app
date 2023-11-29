import React from 'react'
import Minus from '../../assets/icons/minus.svg'
import Plus from '../../assets/icons/plus.svg'

export default function CartItems ({
  items,
  productQuantities,
  decreaseNumber,
  increaseNumber
}) {
  return (
    <>
      {items.map((item) => (
        <div className='products' key={item.id}>
          <img src={item.img} alt='' className='img-container' />
          <div className='product-info'>
            <div className='product-name'>{item.name}</div>
            <div className='product-control-container'>
              <img
                src={Minus}
                alt=''
                className='product-control-minus'
                onClick={() => decreaseNumber(item.id)}
              />
              <span className='product-counts'>
                {productQuantities[item.id]}
              </span>
              <img
                src={Plus}
                alt=''
                className='product-control-plus'
                onClick={() => increaseNumber(item.id)}
              />
            </div>
          </div>
          <div className='product-total-price'>
            {item.price * productQuantities[item.id]}
          </div>
        </div>
      ))}
    </>
  )
}
