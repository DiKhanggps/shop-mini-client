export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="logo">
          TheMuziHouse
        </a>

        <nav className="nav-links">
          <a href="#featured">Trang chủ</a>
          <a href="#budget">Sản phẩm</a>
          <a href="#electronics">Giới thiệu</a>
        </nav>

        <a href="#cart" className="cart-btn">
          <span>🛒 Giỏ hàng</span>
          <span className="cart-badge">0</span>
        </a>
      </div>
    </header>
  );
}