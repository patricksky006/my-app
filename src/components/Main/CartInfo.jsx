import React, { useState, useEffect } from 'react'
import '../../style/cartinfo.scss'
import CartItems from './Cart'

export const items = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  }
]

export default function CartInfo () {
  const [productQuantities, setProductQuantities] = useState({
    1: 0,
    2: 0
  })

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    // 計算總價
    const newTotalPrice = items.reduce((total, item) => {
      return total + item.price * productQuantities[item.id]
    }, 0)

    setTotalPrice(newTotalPrice)
  }, [productQuantities])

  function decreaseNumber (itemId) {
    if (productQuantities[itemId] > 0) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1
      }))
    }
  }

  function increaseNumber (itemId) {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1
    }))
  }

  return (
    <>
      <div className='cart-container'>
        <div className='cart-wrapper'>
          <h2 className='cart-title'>購物籃</h2>
          <div className='cart-goods'>
            <CartItems
              items={items}
              productQuantities={productQuantities}
              decreaseNumber={decreaseNumber}
              increaseNumber={increaseNumber}
            />
          </div>
          <div className='shipping-container'>
            <div className='shipping-fee'>運費</div>
            <div className='shipping-price'>免費</div>
          </div>
          <div className='shipping-container'>
            <div className='shipping-subtotal'>小計</div>
            <div className='shipping-subtotal-price'>{totalPrice}</div>
          </div>
        </div>
      </div>
    </>
  )
}
