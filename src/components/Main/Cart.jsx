import React from 'react'
import Minus from '../../assets/icons/minus.svg'
import Plus from '../../assets/icons/plus.svg'

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

export default function CartItems () {
  return (
    items.map(item => {
      return (
        <div className="products" key={item.id}>
          <img src={item.img} alt="" className="img-container" />
          <div className="product-info">
            <div className="product-name">{item.name}</div>
            <div className="product-control-container">
              <img src={Minus} alt="" className="product-control-minus" />
              <span className="product-counts">0</span>
              <img src={Plus} alt="" className="product-control-plus" />
            </div>
          </div>
          <div className="product-price">{item.price}</div>
        </div>
      )
    })
  )
}
