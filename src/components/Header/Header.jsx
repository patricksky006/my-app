import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import Search from '../../assets/icons/search.svg'
import Cart from '../../assets/icons/cart.svg'
import Moon from '../../assets/icons/moon.svg'
import '../../style/header.scss'

export default function Header () {
  return (
  <header>
    <ul className="nav">
      <li className="nav-item"><a href="#" className="nav-link male">男款</a></li>
      <li className="nav-item"><a href="#" className="nav-link female">女款</a></li>
      <li className="nav-item"><a href="#" className="nav-link latest-news">最新消息</a></li>
      <li className="nav-item"><a href="#" className="nav-link customized-products">客製商品</a></li>
      <li className="nav-item"><a href="#" className="nav-link contact-us">聯絡我們</a></li>
    </ul>
    <img src={Logo} alt="" className="logo" />
    <div className="nav-icon">
      <img src={Search} alt="" className="search-icon icon" />
      <img src={Cart} alt="" className="cart-icon icon" />
      <img src={Moon} alt="" className="moon-icon icon" />
    </div>
  </header>
  )
}
