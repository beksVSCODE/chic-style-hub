import productCoat from "@/assets/product-coat.jpg";
import productSweater from "@/assets/product-sweater.jpg";
import productSkirt from "@/assets/product-skirt.jpg";
import productBlouse from "@/assets/product-blouse.jpg";
import productDress from "@/assets/product-dress.jpg";
import productPants from "@/assets/product-pants.jpg";
import productCardigan from "@/assets/product-cardigan.jpg";
import productDressBlack from "@/assets/product-dress-black.jpg";

export type Category = "Пальто" | "Платья" | "Блузы" | "Юбки" | "Брюки" | "Свитера";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  sizes: Size[];
  category: Category;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    image: productCoat,
    name: "Пальто оверсайз пыльная роза",
    price: 8990,
    oldPrice: 12900,
    sizes: ["S", "M", "L", "XL"],
    category: "Пальто",
  },
  {
    id: 2,
    image: productSweater,
    name: "Свитер вязаный с косами кремовый",
    price: 3490,
    sizes: ["S", "M", "L"],
    category: "Свитера",
  },
  {
    id: 3,
    image: productSkirt,
    name: "Юбка миди плиссе бежевая",
    price: 2990,
    sizes: ["XS", "S", "M", "L"],
    category: "Юбки",
  },
  {
    id: 4,
    image: productBlouse,
    name: "Блуза шёлковая розовая",
    price: 4290,
    sizes: ["S", "M", "L"],
    category: "Блузы",
    isNew: true,
  },
  {
    id: 5,
    image: productDress,
    name: "Платье вечернее пыльная роза",
    price: 7990,
    sizes: ["XS", "S", "M", "L"],
    category: "Платья",
    isNew: true,
  },
  {
    id: 6,
    image: productPants,
    name: "Брюки классические бежевые",
    price: 4490,
    sizes: ["S", "M", "L", "XL"],
    category: "Брюки",
  },
  {
    id: 7,
    image: productCardigan,
    name: "Кардиган удлинённый молочный",
    price: 4990,
    sizes: ["S", "M", "L", "XL"],
    category: "Свитера",
  },
  {
    id: 8,
    image: productDressBlack,
    name: "Платье коктейльное чёрное",
    price: 6990,
    oldPrice: 8990,
    sizes: ["XS", "S", "M", "L"],
    category: "Платья",
  },
  {
    id: 9,
    image: productCoat,
    name: "Пальто классическое терракот",
    price: 11990,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Пальто",
    isNew: true,
  },
  {
    id: 10,
    image: productBlouse,
    name: "Блуза атласная нежно-розовая",
    price: 3790,
    sizes: ["XS", "S", "M", "L"],
    category: "Блузы",
  },
  {
    id: 11,
    image: productSkirt,
    name: "Юбка А-силуэта кремовая",
    price: 3290,
    oldPrice: 4290,
    sizes: ["S", "M", "L"],
    category: "Юбки",
  },
  {
    id: 12,
    image: productPants,
    name: "Брюки широкие палаццо",
    price: 5290,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Брюки",
    isNew: true,
  },
];

export const categories: Category[] = ["Пальто", "Платья", "Блузы", "Юбки", "Брюки", "Свитера"];
export const sizes: Size[] = ["XS", "S", "M", "L", "XL", "XXL"];

export const priceRanges = [
  { label: "До 3 000 ₽", min: 0, max: 3000 },
  { label: "3 000 - 5 000 ₽", min: 3000, max: 5000 },
  { label: "5 000 - 8 000 ₽", min: 5000, max: 8000 },
  { label: "8 000 - 12 000 ₽", min: 8000, max: 12000 },
  { label: "Свыше 12 000 ₽", min: 12000, max: Infinity },
];
