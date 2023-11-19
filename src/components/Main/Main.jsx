import React from 'react'
import StepProgress from './StepProgress'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import CartInfo from './CartInfo'
import ProgressControl from './ProgressControl'
import '../../style/main.scss'

export default function Main () {
  return (
    <main>
      <div className="container">
        <div className="left-content">
          <StepProgress />
          <Step1 />
          <Step2 />
          <Step3 />
          <ProgressControl />
        </div>
        <div className="right-content">
          <CartInfo />
        </div>
      </div>
    </main>
  )
}
