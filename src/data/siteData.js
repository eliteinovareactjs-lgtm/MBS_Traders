// Central place for content used across components.
// Swap the image URLs for your real product photography whenever ready.

// Import banner images
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.png";

// Import category images
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";

// Import weAre section images
import exporter from "../assets/exporter.jpg";
import wholesaler from "../assets/wholesaler.jpg";
import retailer from "../assets/retailer.jpg";

// Import product images
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

export const heroSlides = [
  banner1,
  banner2,
  banner3,
  banner4,
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "/about", route: true }, // now a real page, not a section
  { label: "Categories", href: "#categories" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export const categories = [
  {
    id: "eggs",
    title: "Fresh Farm Eggs",
    image: category1,
    bg: "bg-white",
    reverse: false,
    text: "Get high-quality, protein-rich eggs delivered straight from the farm to your doorstep, ensuring maximum freshness and nutrition in every bite. Sourced from healthy, well-fed hens, our farm-fresh eggs are packed with essential nutrients and taste the way nature intended — pure, wholesome, and delicious.",
  },
  {
    id: "meat",
    title: "Premium Meat Cuts",
    image: category2,
    bg: "bg-card-pink",
    reverse: true,
    text: "Enjoy juicy, tender meat that's responsibly sourced from trusted farms committed to ethical and sustainable practices. Each cut is carefully selected for quality and flavor, ensuring a delicious, guilt-free dining experience every time.",
  },
  {
    id: "veg",
    title: "Vegetables",
    image: category3,
    bg: "bg-card-mint",
    reverse: false,
    text: "Savor colorful and crunchy vegetables handpicked fresh every morning to bring vibrant flavor and peak nutrition to your plate. Grown with care and harvested at just the right time, our produce ensures every bite bursts with farm-fresh goodness.",
  },
  {
    id: "millets",
    title: "Traditional Indian Millets",
    image: category4,
    bg: "bg-card-cream",
    reverse: true,
    text: "Nutritious millets are a natural source of fiber and essential minerals like iron, magnesium, and phosphorus, making them a smart choice for a balanced diet. These ancient grains support digestion, boost energy levels, and help maintain overall health with every wholesome bite.",
  },
];

export const weAreCards = [
  {
    id: "exporter",
    label: "Exporter",
    image: exporter,
    desc: "We export premium products globally with trusted logistics.",
  },
  {
    id: "wholesaler",
    label: "Wholesaler",
    image: wholesaler,
    desc: "We supply bulk goods at competitive market prices.",
  },
  {
    id: "retailer",
    label: "Retailer",
    image: retailer,
    desc: "We serve local customers with fresh and reliable products.",
  },
];

export const products = [
  {
    id: "p1",
    title: "Fresh Farm Eggs",
    image: product1,
    readTime: "2 min read",
    desc: "High-protein, farm-fresh eggs delivered directly to your home.",
    views: 120,
    comments: 8,
    likes: 14,
  },
  {
    id: "p2",
    title: "Tender Mutton",
    image: product2,
    readTime: "3 min read",
    desc: "Taste the richness of naturally raised, organic mutton.",
    views: 98,
    comments: 6,
    likes: 11,
  },
  {
    id: "p3",
    title: "Fresh Chicken Cuts",
    image: product3,
    readTime: "1 min read",
    desc: "Naturally fresh, expertly cleaned, and ready to cook.",
    views: 145,
    comments: 4,
    likes: 17,
  },
  {
    id: "p4",
    title: "Daily Catch Fish Specials",
    image: product4,
    readTime: "2 min read",
    desc: "Locally sourced seafood straight from the dock to your dish.",
    views: 76,
    comments: 2,
    likes: 9,
  },
  {
    id: "p5",
    title: "Vegetables",
    image: product5,
    readTime: "2 min read",
    desc: "Sustainably farmed, hand-selected seasonal veggies you can trust.",
    views: 88,
    comments: 3,
    likes: 12,
  },
  {
    id: "p6",
    title: "Power-Packed Millets",
    image: product6,
    readTime: "2 min read",
    desc: "Discover the health benefits of traditional millet grains.",
    views: 60,
    comments: 1,
    likes: 7,
  },
];