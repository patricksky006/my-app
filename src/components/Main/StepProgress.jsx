import React from 'react'
import '../../style/step-progress.scss'

export default function StepProgress () {
  return (
    <>
    <div className="stepper-panel">
      <h2 className="Checkout">結帳</h2>
      <div className="stepper-container">
        <div className="step">
          <div className="circle-container"></div>
          <div className="label-container">寄送地址</div>
          <div className="connect-line"></div>
        </div>
        <div className="step">
          <div className="circle-container"></div>
          <div className="label-container">運送方式</div>
          <div className="connect-line"></div>
        </div>
        <div className="step">
          <div className="circle-container"></div>
          <div className="label-container">付款資訊</div>
        </div>
      </div>
    </div>
    </>
  )
}
