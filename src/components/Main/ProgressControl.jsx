import React from 'react'
import LeftArrow from '../../assets/icons/left-arrow.svg'
import RightArrow from '../../assets/icons/right-arrow.svg'
import '../../style/progress-control.scss'

export default function ProgressControl ({ step, onLeftClick, onRightClick }) {
  return (
    <>
    <div className="progress-control-container">
      <div className="progress-control-wrapper">
        <button className='left-stage' onClick={onLeftClick} style={{ visibility: step < 2 ? 'hidden' : 'visible' }}>
          <img src={LeftArrow} alt="" className="left-arrow" />
          <span className="pre-step">上一步</span>
        </button>
        <button className='right-stage' onClick={onRightClick}>
          <span className="next-step">{ step === 3 ? '確認下單' : '下一步'}</span>
          <img src={RightArrow} alt="" className="right-arrow" style={{ display: step === 3 ? 'none' : '' }}/>
        </button>
      </div>
    </div>
    </>
  )
}
