import React from 'react'
import StepProgress from './StepProgress'
import Step1 from './Step1'
// import Step2 from './Step2'
// import Step3 from './Step3'
// import ProgressControl from './ProgressControl'

export default function Main () {
  return (
    <main>
      <div className="container">
        <StepProgress />
        <Step1 />
        {/* <Step2 /> */}
        {/* <Step3 /> */}
        {/* <ProgressControl /> */}
      </div>
    </main>
  )
}
