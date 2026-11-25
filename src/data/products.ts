export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Áo thun basic",
    price: 150000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    category: "Thời trang",
    stock: 12,
  },
  {
    id: 2,
    name: "Quần jean slim",
    price: 420000,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80",
    category: "Thời trang",
    stock: 5,
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth",
    price: 690000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    category: "Điện tử",
    stock: 0,
  },
  {
    id: 4,
    name: "Bình giữ nhiệt 500ml",
    price: 185000,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80",
    category: "Gia dụng",
    stock: 20,
  },
  {
    id: 5,
    name: "Balo laptop 15 inch",
    price: 550000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    category: "Phụ kiện",
    stock: 8,
  },
  {
    id: 6,
    name: "Chuột không dây",
    price: 245000,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80",
    category: "Điện tử",
    stock: 15,
  },
  {
    id: 7,
    name: "Dầu thơm",
    price: 294000,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
    category: "Chăm sóc cá nhân",
    stock: 30,
  },
  {
    id: 8,
    name: "Bút bi mực gel 0.5mm",
    price: 29000,
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=500&q=80",
    category: "Văn phòng phẩm",
    stock: 50,
  },
  {
    id: 9,
    name: "Nước hoa hồng 200ml",
    price: 249000,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80",
    category: "Chăm sóc cá nhân",
    stock: 18,
  },
  {
    id: 10,
    name: "Khuếch tán tinh dầu",
    price: 1190000,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80",
    category: "Gia dụng",
    stock: 7,
  },
  {
    id: 11,
    name: "Sổ tay lò xo giấy",
    price: 69000,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
    category: "Văn phòng phẩm",
    stock: 25,
  },
  {
    id: 12,
    name: "Gối chữ U kê cổ Muji",
    price: 499000,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80",
    category: "Phụ kiện",
    stock: 10,
  },
];