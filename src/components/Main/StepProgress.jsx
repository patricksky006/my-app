import React from 'react'
import '../../style/step-progress.scss'

export default function StepProgress ({ step }) {
  return (
    <>
      <div className='stepper-panel'>
        <h2 className='Checkout'>結帳</h2>
        <div className='stepper-container'>
          <div className='step'>
            {step < 2 ? <div className='circle-container'>1</div> : ''}
            {step > 1 ? <div className='circle-container-checked'></div> : ''}
            <div className='label-container'>寄送地址</div>
          </div>
          <div className='connect-line'></div>
          <div className='step'>
            {step < 3 ? <div className='circle-container'>2</div> : ''}
            {step > 2 ? <div className='circle-container-checked'></div> : ''}
            <div className='label-container'>運送方式</div>
          </div>
          <div className='connect-line'></div>
          <div className='step'>
            {step < 4 ? <div className='circle-container'>3</div> : ''}
            {step > 3 ? <div className='circle-container-checked'></div> : ''}
            <div className='label-container'>付款資訊</div>
          </div>
        </div>
      </div>
    </>
  )
}
