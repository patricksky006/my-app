import React from 'react'
import LeftArrow from '../../assets/icons/left-arrow.svg'
import RightArrow from '../../assets/icons/right-arrow.svg'

export default function ProgressControl () {
  return (
    <>
    <div className="progress-control-container">
      <div className="progress-control-wrapper">
        <button className='left-stage'>
          <img src={LeftArrow} alt="" className="left-arrow" />
          <span className="pre-step">上一步</span>
        </button>
        <button className='right-stage'>
          <span className="next-step">下一步</span>
          <img src={RightArrow} alt="" className="right-arrow" />
        </button>
      </div>
    </div>
    </>
  )
}
