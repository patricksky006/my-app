import React from 'react'
import Product1 from '../../assets/images/product-1.jpg'
import Product2 from '../../assets/images/product-2.jpg'
import Minus from '../../assets/icons/minus.svg'
import Plus from '../../assets/icons/plus.svg'

export default function CartInfo () {
  return (
    <>
    <div className="cart-container">
      <div className="cart-wrapper">
        <h2 className="cart-title">購物籃</h2>
        <div className="cart-goods">
          <div className="products">
            <img src={Product1} alt="" className="img-container" />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <img src={Minus} alt="" className="product-control-minus" />
                <span className="product-counts">0</span>
                <img src={Plus} alt="" className="product-control-plus" />
              </div>
            </div>
            <div className="product-price">$3999</div>
          </div>
          <div className="products">
            <img src={Product2} alt="" className="img-container" />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <img src={Minus} alt="" className="product-control-minus" />
                <span className="product-counts">0</span>
                <img src={Plus} alt="" className="product-control-plus" />
              </div>
            </div>
            <div className="product-price">$1299</div>
          </div>
        </div>
        <div className="shipping-fee-container">
          <div className="shipping-fee">運費</div>
          <div className="shipping-price">免費</div>
        </div>
        <div className="shipping-subtotal-container">
          <div className="shipping-subtotal">小計</div>
          <div className="shipping-subtotal-price">5298</div>
        </div>
      </div>
    </div>
    </>
  )
}
