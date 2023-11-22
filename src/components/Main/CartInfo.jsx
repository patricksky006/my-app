import React from 'react'
import '../../style/cartinfo.scss'
import CartItems from './Cart'

export default function CartInfo () {
  return (
    <>
    <div className="cart-container">
      <div className="cart-wrapper">
        <h2 className="cart-title">購物籃</h2>
        <div className="cart-goods">
          <CartItems />
        </div>
        <div className="shipping-container">
          <div className="shipping-fee">運費</div>
          <div className="shipping-price">免費</div>
        </div>
        <div className="shipping-container">
          <div className="shipping-subtotal">小計</div>
          <div className="shipping-subtotal-price">5298</div>
        </div>
      </div>
    </div>
    </>
  )
}
