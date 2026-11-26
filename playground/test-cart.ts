import { products } from "../src/data/products.ts";
import { addToCart, updateQuantity, removeFromCart, countItems, calcTotal } from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import { filterProducts, getCategories } from "../src/utils/product.ts";

let cart: CartItem[] = [];
cart = addToCart(cart, products[0]);      // Sản phẩm 1 x1
cart = addToCart(cart, products[0], 2);   // Sản phẩm 1 x3
cart = addToCart(cart, products[3]);      // Sản phẩm 4 x1
console.log("Số sản phẩm:", countItems(cart));   // 4
console.log("Tổng tiền:", formatPrice(calcTotal(cart)));

cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[3].id);
console.log(cart.map((i) => `${i.product.name} x${i.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "Điện tử, giá tăng dần:",
  filterProducts(products, { category: "Điện tử", sort: "asc" }).map((p) => p.name)
);
console.log(
  "Tìm 'áo', tối đa 300k:",
  filterProducts(products, { keyword: "áo", maxPrice: 300000 }).map((p) => p.name)
);