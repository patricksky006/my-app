import React from 'react'
import '../../style/step2.scss'

export default function Step2 ({ step }) {
  return (
    <>
      <div
        className='step-container'
        style={{ display: step === 2 ? '' : 'none' }}
      >
        <h2 className='ship-method'>運送方式</h2>
        <form action='' className='shipping-container'>
          <div className='ship-wrapper'>
            <div className='ship-part'>
              <input type='radio' name='shippingMethod' className='std-ship' />
              <div className='ship-part-content'>
                <div className='ship-part-content-part'>
                  <label htmlFor='std-ship' className='label-std-ship'>
                    標準運送
                  </label>
                  <span className='ship-charge'>免費</span>
                </div>
                <p className='ship-time'>約3-7個工作天</p>
              </div>
            </div>
            <div className='ship-part'>
              <input type='radio' name='shippingMethod' className='dhl-ship' />
              <div className='ship-part-content'>
                <div className='ship-part-content-part'>
                  <label htmlFor='dhl-ship' className='label-dhl-ship'>
                    DHL 貨運
                  </label>
                  <span className='ship-charge'>$500</span>
                </div>
                <p className='ship-time'>48小時內送達</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
