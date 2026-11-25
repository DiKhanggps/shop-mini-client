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
    name: "Áo sơ mi vải lanh cổ trụ",
    price: 699000,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80",
    category: "Thời trang",
    stock: 14,
  },
  {
    id: 2,
    name: "Túi vải canvas cỡ trung",
    price: 149000,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
    category: "Phụ kiện",
    stock: 22,
  },
  {
    id: 3,
    name: "Đồng hồ treo tường tối giản",
    price: 790000,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=500&q=80",
    category: "Gia dụng",
    stock: 0,
  },
  {
    id: 4,
    name: "Bình nước thủy tinh nắp gỗ",
    price: 165000,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80",
    category: "Gia dụng",
    stock: 19,
  },
  {
    id: 5,
    name: "Dép đi trong nhà vải cotton",
    price: 199000,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=500&q=80",
    category: "Gia dụng",
    stock: 11,
  },
  {
    id: 6,
    name: "Đèn bàn LED gập gọn",
    price: 890000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
    category: "Điện tử",
    stock: 6,
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
    name: "Gối chữ U kê cổ hạt xốp",
    price: 499000,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80",
    category: "Phụ kiện",
    stock: 10,
  },
];