import { v4 as uuid } from "uuid";
import fridge from '../../Assets/Samsung 253 L 3 Star with Inverter Double Door Refrigerator.jpg';
import phone from '../../Assets/Apple iPhone 14 128GB.jpg';
import ac from '../../Assets/LG 1.5 Ton 3 Star DUAL Inverter Split AC.jpg';
import pc from '../../Assets/CHIST Extreme Gaming Pc Intel Core i7.jpg';
import printer from '../../Assets/Epson EcoTank L3211 All-in-One Ink Tank Printer.jpg';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fridges",
    image: fridge,
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "phones",
    image: phone ,
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "air conditioners",
    image: ac,
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "printers",
    image: printer,
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "PCs",
    image: pc,
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  }
];
