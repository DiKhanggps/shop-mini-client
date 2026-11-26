import type { Product } from "../data/products.ts";

export type ProductFilter = {
  category?: string;
  keyword?: string;
  maxPrice?: number;
  sort?: "asc" | "desc";
};

export function getCategories(items: Product[]): string[] {
  return [...new Set(items.map((p) => p.category))];
}

export function filterProducts(items: Product[], filter: ProductFilter): Product[] {
  let result = [...items];

  if (filter.category && filter.category !== "Tất cả") {
    result = result.filter((p) => p.category === filter.category);
  }

  if (filter.keyword) {
    const kw = filter.keyword.trim().toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(kw));
  }

  if (filter.maxPrice !== undefined) {
    result = result.filter((p) => p.price <= filter.maxPrice!);
  }

  if (filter.sort === "asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (filter.sort === "desc") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}

export function searchByPriceRange(products: Product[], min: number, max: number): Product[] {
  return products.filter((p) => p.price >= min && p.price <= max);
}

export function groupByCategory(products: Product[]): Record<string, number> {
  return products.reduce<Record<string, number>>((acc, product) => {
    acc[product.category] = (acc[product.category] ?? 0) + 1;
    return acc;
  }, {});
}