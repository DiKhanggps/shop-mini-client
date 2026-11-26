import { useState } from "react";
import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className={`product-card ${outOfStock ? "is-out" : ""}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button
          type="button"
          className={`favorite-btn ${isFavorite ? "is-favorite" : ""}`}
          aria-label={
            isFavorite
              ? `Bỏ ${product.name} khỏi danh sách yêu thích`
              : `Thêm ${product.name} vào danh sách yêu thích`
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((favorite) => !favorite)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>
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