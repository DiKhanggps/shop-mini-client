import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;

  return (
    <article className={`product-card ${outOfStock ? "is-out" : ""}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {outOfStock ? (
          <span className="badge-out">Hết hàng</span>
        ) : (
          product.stock <= 7 && <span className="badge-low">Còn {product.stock}</span>
        )}
      </div>

      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>
        <div className="product-footer">
          <p className="product-price">{formatPrice(product.price)}</p>
          <button className="btn" disabled={outOfStock}>
            {outOfStock ? "Tạm hết hàng" : "+ Thêm vào giỏ"}
          </button>
        </div>
      </div>
    </article>
  );
}