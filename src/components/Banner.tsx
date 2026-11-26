export default function Banner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <span className="hero-tag">BỘ SƯU TẬP MÙA MỚI 2026</span>
        <h1>Tối giản không gian sống cùng TheMuziHouse</h1>
        <p>
          Giảm ngay <strong>15%</strong> cho các dòng sản phẩm gia dụng, văn phòng phẩm
          và chăm sóc cá nhân thân thiện với môi trường.
        </p>
        <div className="hero-actions">
          <a href="#featured" className="btn-hero-primary">
            Khám phá ngay
          </a>
          <a href="#budget" className="btn-hero-secondary">
            Ưu đãi dưới 300k
          </a>
        </div>
        <div className="hero-trust">
          <span>✓ Chất liệu tự nhiên</span>
          <span>✓ Đổi trả 30 ngày</span>
          <span>✓ Giao nhanh 24h</span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
          alt="Không gian sống tối giản TheMuziHouse"
        />
      </div>
    </section>
  );
} 