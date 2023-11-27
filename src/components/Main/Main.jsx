import React, { useState } from 'react'
import StepProgress from './StepProgress'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import CartInfo from './CartInfo'
import ProgressControl from './ProgressControl'
import '../../style/main.scss'

export default function Main () {
  const [step, setStep] = useState(1)
  function onRightClick () {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    } else {
      setStep(step)
    }
  }
  function onLeftClick () {
    if (step === 3) {
      setStep(2)
    } else if (step === 2) {
      setStep(1)
    } else {
      setStep(step)
    }
  }
  return (
    <main>
      <div className="container">
        <div className="left-content">
          <StepProgress step={step}/>
          <Step1 step={step}/>
          <Step2 step={step}/>
          <Step3 step={step}/>
          <ProgressControl step={step} onRightClick={onRightClick} onLeftClick={onLeftClick}/>
        </div>
        <div className="right-content">
          <CartInfo />
        </div>
      </div>
    </main>
  )
}
