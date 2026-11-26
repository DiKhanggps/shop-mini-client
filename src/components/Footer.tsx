export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>TheMuziHouse</strong>
          <p>Không gian sống tối giản, tinh gọn và thân thiện với môi trường.</p>
        </div>

        <div className="footer-links">
          <a href="#featured">Sản phẩm nổi bật</a>
          <a href="#low-stock">Sắp hết hàng</a>
          <a href="#budget">Ưu đãi dưới 300k</a>
        </div>

        <div className="footer-contact">
          <span>Hotline: 1900 0000</span>
          <span>Email: hotro@themuzihouse.vn</span>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 TheMuziHouse. All rights reserved.
      </div>
    </footer>
  );
}