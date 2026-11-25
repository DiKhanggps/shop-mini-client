export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} TheMuziHouse</p>
        <p>Hotline: 1900 0000 · Email: hotro@themuzihouse.vn</p>
      </div>
    </footer>
  );
}