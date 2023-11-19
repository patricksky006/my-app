import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Whatsapp from '../../assets/icons/whatsapp.svg'

export default function Footer () {
  return (
  <footer className='footer-container'>
    <div className="footer-wrapper">
      <div className="footer-logo-container">
        <img src={Logo} alt="" className="footer-logo-img" />
      </div>
      <div className="footer-part-container">
        <h2 className="footer-part-title">客戶服務</h2>
        <ul className="footer-part-list">
          <li className="list-text"><a href="#" className="page-link">運送說明</a></li>
          <li className="list-text"><a href="#" className="page-link">退換貨相關</a></li>
          <li className="list-text"><a href="#" className="page-link">付款資訊</a></li>
          <li className="list-text"><a href="#" className="page-link">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-part-container">
        <h2 className="footer-part-title">關於我們</h2>
        <ul className="footer-part-list">
          <li className="list-text"><a href="#" className="page-link">品牌故事</a></li>
          <li className="list-text"><a href="#" className="page-link">媒體連繫</a></li>
          <li className="list-text"><a href="#" className="page-link">Press kit</a></li>
        </ul>
      </div>
      <div className="footer-part-container">
        <h2 className="footer-part-title">資訊</h2>
        <ul className="footer-part-list">
          <li className="list-text"><a href="#" className="page-link">隱私權政策</a></li>
          <li className="list-text"><a href="#" className="page-link">Cookie</a></li>
          <li className="list-text"><a href="#" className="page-link">GDPR</a></li>
        </ul>
      </div>
      <div className="footer-part-container">
        <h2 className="footer-part-title">追蹤ALPHA Shop</h2>
        <ul className="footer-part-list">
          <li className="list-text">+886 02123-45678</li>
          <li className="list-text"><a href="#" className="page-link"><img src={Facebook} alt="" className="facebook" /></a></li>
          <li className="list-text"><a href="#" className="page-link"><img src={Instagram} alt="" className="instagram" /></a></li>
          <li className="list-text"><a href="#" className="page-link"><img src={Whatsapp} alt="" className="whatsapp" /></a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
