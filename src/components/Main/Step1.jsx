import React from 'react'
import '../../style/step1.scss'

export default function Step1 ({ step }) {
  return (
    <>
      <div
        className='step-container'
        style={{ display: step === 1 ? '' : 'none' }}
      >
        <h2 className='delivery-address'>寄送地址</h2>
        <form action='' className='form-container'>
          <div className='form-part a-part'>
            <label htmlFor='a-typ' className='label-title label'>
              稱謂
            </label>
            <select name='' id='' className='a-type select-type'>
              <option value='' className='sir'>
                先生
              </option>
              <option value='' className='miss'>
                女士
              </option>
              <option value='' className='other'>
                客人
              </option>
            </select>
          </div>
          <div className='form-part b-part'>
            <label htmlFor='name' className='label-name label'>
              姓名
            </label>
            <input
              type='text'
              className='input name'
              placeholder='請輸入姓名'
            />
          </div>
          <div className='form-part c-part'>
            <label htmlFor='phone' className='label-phone label'>
              電話
            </label>
            <input
              type='tel'
              className='input phone'
              placeholder='請輸入行動電話(ex: 0912345678)'
            />
          </div>
          <div className='form-part d-part'>
            <label htmlFor='email' className='label-email label'>
              信箱
            </label>
            <input
              type='email'
              className='input email'
              placeholder='請輸入電子郵件'
            />
          </div>
          <div className='form-part e-part'>
            <label htmlFor='' className='label-city label'>
              縣市
            </label>
            <select name='' id='' className='city select-type'>
              <option value=''>請選擇縣市</option>
              <option value='KLU'>基隆市</option>
              <option value='TPH'>新北市</option>
              <option value='TPE'>臺北市</option>
              <option value='TYC'>桃園市</option>
              <option value='HSH'>新竹縣</option>
              <option value='HSC'>新竹市</option>
              <option value='MAC'>苗栗市</option>
              <option value='MAL'>苗栗縣</option>
              <option value='TXG'>臺中市</option>
              <option value='CWH'>彰化縣</option>
              <option value='CWS'>彰化市</option>
              <option value='NTC'>南投市</option>
              <option value='NTO'>南投縣</option>
              <option value='YLH'>雲林縣</option>
              <option value='CHY'>嘉義縣</option>
              <option value='CYI'>嘉義市</option>
              <option value='TNN'>臺南市</option>
              <option value='KHH'>高雄市</option>
              <option value='IUH'>屏東縣</option>
              <option value='PTS'>屏東市</option>
              <option value='ILN'>宜蘭縣</option>
              <option value='ILC'>宜蘭市</option>
              <option value='HWA'>花蓮縣</option>
              <option value='HWC'>花蓮市</option>
              <option value='TTC'>臺東市</option>
              <option value='TTT'>臺東縣</option>
              <option value='PEH'>澎湖縣</option>
              <option value='KMN'>金門縣</option>
              <option value='LNN'>連江縣</option>
            </select>
          </div>
          <div className='form-part f-part'>
            <label htmlFor='address' className='label-address label'>
              地址
            </label>
            <input
              type='text'
              className='input address'
              placeholder='請輸入地址'
            />
          </div>
        </form>
      </div>
    </>
  )
}
