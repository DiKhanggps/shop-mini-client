import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts, getCategories } from "./utils/product";
import "./App.css";

function App() {
  const categories = getCategories(products);
  const cheapProducts = filterProducts(products, { maxPrice: 300000, sort: "asc" });
  const electronics = filterProducts(products, { category: "Điện tử" });

  return (
    <>
      <Header />
      <main className="container">
        <Banner />

        <div className="category-strip">
          <span className="category-label">Danh mục:</span>
          <div className="category-pills">
            {categories.map((cat) => (
              <span key={cat} className="category-pill">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div id="featured">
          <ProductList title="Sản phẩm nổi bật" items={products} />
        </div>
        <div id="budget">
          <ProductList title="Giá dưới 300.000 đ" items={cheapProducts} />
        </div>
        <div id="electronics">
          <ProductList title="Đồ điện tử" items={electronics} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;