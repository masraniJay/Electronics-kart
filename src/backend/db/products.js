import { v4 as uuid } from "uuid";
import fridge from '../../Assets/Samsung 253 L 3 Star with Inverter Double Door Refrigerator.jpg';
import fridge2 from '../../Assets/Godrej 190 L 1 Star Direct Cool Single Door Refrigerator.jpg';
import fridge3 from '../../Assets/Whirlpool 190 L 3 Star Single Door Refrigerator.jpg';
import phone1 from '../../Assets/Apple iPhone 14 128GB.jpg';
import phone2 from '../../Assets/Redmi 9A Sport.jpg';
import phone3 from '../../Assets/Samsung Galaxy M33 5G.jpg';
import printer1 from '../../Assets/Canon PIXMA G3000 All-in-One WiFi Ink Tank Colour Printer with 2 Additional Black Ink Bottles.jpg';
import printer2 from '../../Assets/Epson EcoTank L3211 All-in-One Ink Tank Printer.jpg';
import printer3 from '../../Assets/HP Deskjet 2331 Colour Printer.jpg';
import PC1 from '../../Assets/CHIST Extreme Gaming Pc Intel Core i7.jpg';
import PC2 from '../../Assets/HP AIO PC 12th Gen Intel Core i3-1215U 21.5 inch.jpg';
import PC3 from '../../Assets/Lenovo ThinkCentre M73 All-in-One Desktop Computer Set.jpg';
import AC1 from '../../Assets/Carrier 1.5 Ton 3 Star Inverter Split AC.jpg';
import AC2 from '../../Assets/LG 1.5 Ton 3 Star DUAL Inverter Split AC.jpg';
import AC3 from '../../Assets/Lloyd 1.5 Ton 5 Star Inverter Split AC.jpg';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Samsung 253 L with Inverter Double Door Refrigeratordge",
    categoryName: "fridges",
    originalPrice: 18000,
    discountedPrice: 15000,
    discountPercentage: 16.66,
    rating: 3.5,
    inStock: true,
    image: fridge
  },
  {
    _id: uuid(),
    name: "Godrej 190 L Direct Cool Single Door Refrigerator",
    categoryName: "fridges",
    originalPrice: 15500,
    discountedPrice: 13000,
    discountPercentage: 16.12,
    rating: 3.8,
    inStock: false,
    image: fridge2
  },
  {
    _id: uuid(),
    name: "Whirlpool 190 L Single Door Refrigerator",
    categoryName: "fridges",
    originalPrice: 16000,
    discountedPrice: 12000,
    discountPercentage: 15,
    rating: 2.6,
    inStock: true,
    image: fridge3
  },
  {
    _id: uuid(),
    name: "Apple iPhone 14 128GB",
    categoryName: "phones",
    originalPrice: 90000,
    discountedPrice: 83000,
    discountPercentage: 7.7,
    rating: 4.6,
    inStock: true,
    image: phone1
  },
  {
    _id: uuid(),
    name: "Redmi 9A Sport",
    categoryName: "phones",
    originalPrice: 11000,
    discountedPrice: 8500,
    discountPercentage: 22.72,
    rating: 2.8,
    inStock: false,
    image: phone2
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy M33 5G",
    categoryName: "phones",
    originalPrice: 19000,
    discountedPrice: 15500,
    discountPercentage: 18.42,
    rating: 3.4,
    inStock: true,
    image: phone3
  },
  {
    _id: uuid(),
    name: "Canon PIXMA G3000 All-in-One WiFi Ink Tank Colour Printer with 2 Additional Black Ink Bottles",
    categoryName: "printers",
    originalPrice: 15000,
    discountedPrice: 12200,
    discountPercentage: 18.66,
    rating: 3.2,
    inStock: true,
    image: printer1
  },
  {
    _id: uuid(),
    name: "Epson EcoTank L3211 All-in-One Ink Tank Printer",
    categoryName: "printers",
    originalPrice: 14500,
    discountedPrice: 11000,
    discountPercentage: 24.13,
    rating: 4.1,
    inStock: true,
    image: printer2
  },
  {
    _id: uuid(),
    name: "HP Deskjet 2331 Colour Printer",
    categoryName: "printers",
    originalPrice: 3500,
    discountedPrice: 3000,
    discountPercentage: 14.28,
    rating: 1.6,
    inStock: false,
    image: printer3
  },
  {
    _id: uuid(),
    name: "CHIST Extreme Gaming Pc Intel Core i7",
    categoryName: "PCs",
    originalPrice: 48000,
    discountedPrice: 34500,
    discountPercentage: 28.12,
    rating: 4.2,
    inStock: true,
    image: PC1
  },
  {
    _id: uuid(),
    name: "HP AIO PC 12th Gen Intel Core i3-1215U 21.5 inch",
    categoryName: "PCs",
    originalPrice: 65000,
    discountedPrice: 59000,
    discountPercentage: 9.23,
    rating: 4.8,
    inStock: true,
    image: PC2
  },
  {
    _id: uuid(),
    name: "Lenovo ThinkCentre M73 All-in-One Desktop Computer Set",
    categoryName: "PCs",
    originalPrice: 54000,
    discountedPrice: 41000,
    discountPercentage: 24.07,
    rating: 1.9,
    inStock: true,
    image: PC3
  },
  {
    _id: uuid(),
    name: "Carrier 1.5 Ton 3 Star Inverter Split AC",
    categoryName: "air conditioners",
    originalPrice: 40000,
    discountedPrice: 33900,
    discountPercentage: 15.25,
    rating: 3.3,
    inStock: true,
    image: AC1
  },
  {
    _id: uuid(),
    name: "LG 1.5 Ton 3 Star DUAL Inverter Split AC",
    categoryName: "air conditioners",
    originalPrice: 51000,
    discountedPrice: 43000,
    discountPercentage: 15.68,
    rating: 4.3,
    inStock: true,
    image: AC2
  },
  {
    _id: uuid(),
    name: "Lloyd 1.5 Ton 5 Star Inverter Split AC",
    categoryName: "air conditioners",
    originalPrice: 38000,
    discountedPrice: 33000,
    discountPercentage: 13.15,
    rating: 2.6,
    inStock: false,
    image: AC3
  }

];
