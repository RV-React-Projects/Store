import apparel1 from "@assets/products/apparel1.jpg";
import apparel2 from "@assets/products/apparel2.jpg";
import apparel3 from "@assets/products/apparel3.jpg";
import apparel4 from "@assets/products/apparel4.jpg";
import apparel5 from "@assets/products/apparel5.jpg";
import apparel6 from "@assets/products/apparel6.jpg";
import electronic1 from "@assets/products/electronic1.jpg";
import electronic2 from "@assets/products/electronic2.jpg";
import electronic3 from "@assets/products/electronic3.jpg";
import electronic4 from "@assets/products/electronic4.jpg";
import electronic5 from "@assets/products/electronic5.jpg";
import home1 from "@assets/products/home1.jpg";
import home2 from "@assets/products/home2.jpg";
import home3 from "@assets/products/home3.jpg";
import home4 from "@assets/products/home4.jpg";
import home5 from "@assets/products/home5.jpg";
import shoe1 from "@assets/products/shoe1.jpg";
import shoe2 from "@assets/products/shoe2.jpg";
import shoe3 from "@assets/products/shoe3.jpg";
import shoe4 from "@assets/products/shoe4.jpg";
import shoe5 from "@assets/products/shoe5.jpg";
import shoe6 from "@assets/products/shoe1-1.jpg";
import shoe7 from "@assets/products/shoe1-2.jpg";
import shoe8 from "@assets/products/shoe1-3.jpg";

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const apparelImages = [
  apparel1,
  apparel2,
  apparel3,
  apparel4,
  apparel5,
  apparel6,
];
const electronicImages = [
  electronic1,
  electronic2,
  electronic3,
  electronic4,
  electronic5,
];
const homeImages = [home1, home2, home3, home4, home5];
const shoeImages = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8];

// Combine all image imports into a single array
const allImages = [
  ...apparelImages,
  ...electronicImages,
  ...homeImages,
  ...shoeImages,
];

export const DataTrandingItems = [
  {
    title: "Black Women's Coat Dress",
    discount: 32,
    currentPrice: 129.99,
    normalPrice: 189.98,
    sold: 2975,
    freeShipping: true,
  },
  {
    title: "Under Armour Men's Tech",
    discount: 25,
    currentPrice: 56.5,
    normalPrice: 75.5,
    sold: 2584,
    freeShipping: true,
    stock: "Stock: 7 left!",
  },
  {
    title: "Vonanda Velvet Sofa Couch, Mid Century Modern Craftsmanship",
    discount: 37,
    currentPrice: 469.99,
    normalPrice: 755.99,
    sold: 2151,
    freeShipping: true,
  },
  {
    title: "Wireless Headphones Over Ear, Bluetooth Headphones with Microphone",
    discount: 20,
    currentPrice: 99.98,
    normalPrice: 125.98,
    sold: 1843,
    freeShipping: true,
  },
  {
    title: "Men Slip On Shoes Casual with Arch Support Insoles",
    discount: 32,
    currentPrice: 129.99,
    normalPrice: 189.98,
    sold: 2975,
    freeShipping: true,
  },
  {
    title: "Women's Lightweight Knit Hoodie Sweaters",
    discount: 47,
    currentPrice: 37.5,
    normalPrice: 45.5,
    sold: 1275,
    freeShipping: true,
  },
  {
    title: "Dimmable Ceiling Light Modern",
    discount: 44,
    currentPrice: 279.99,
    normalPrice: 499.99,
    sold: 995,
    freeShipping: true,
  },
  {
    title: "Modern Storage Cabinet with Door & 3 Drawers",
    discount: 18,
    currentPrice: 129.99,
    normalPrice: 159.98,
    sold: 758,
    freeShipping: true,
  },
].map((item) => {
  // Shuffle the array for each item
  shuffleArray(allImages);

  // Randomly select an image for the item
  const randomImage = allImages[0];

  // Return the item object with the selected image
  return {
    ...item,
    image: randomImage,
  };
});
