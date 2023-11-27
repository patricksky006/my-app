import React from 'react'
import '../../style/step3.scss'

export default function Step3 ({ step }) {
  return (
    <>
    <div className="step-container" style={{ display: step === 3 ? '' : 'none' }}>
      <h2 className="pay-info">付款資訊</h2>
      <form action="" className="paying-container">
        <div className="payment-wrapper">
          <div className="pay-part a-part">
            <label htmlFor="input-card-name" className="card-name">持卡人姓名</label>
            <input type="text" className="input-card-name" placeholder='請輸入姓名'/>
          </div>
          <div className="pay-part b-part">
            <label htmlFor="input-card-number" className="card-number">卡號</label>
            <input type="text" className="input-card-number" placeholder='請輸入卡號 1111 2222 3333 4444'/>
          </div>
          <div className="pay-part c-part">
            <label htmlFor="input-expired-date" className="expired-date">有效期限</label>
            <input type="text" className="input-expired-date" placeholder='MM/YY'/>
          </div>
          <div className="pay-part d-part">
            <label htmlFor="input-cvc-ccv" className="cvc-ccv">CVC/CCV</label>
            <input type="text" className="input-cvc-ccv" placeholder='123'/>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}
