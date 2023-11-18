import Logo from "../../assets/icons/logo.svg"
import search from "../../assets/icons/search.svg"
import cart from "../../assets/icons/cart.svg"
import moon from "../../assets/icons/moon.svg"

export default function Header() {
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
    <img src={search} alt="" className="search-icon" />
    <img src={cart} alt="" className="cart-icon" />
    <img src={moon} alt="" className="moon-icon" />
  </header>
  )
}