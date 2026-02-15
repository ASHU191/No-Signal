// // Product images
// import oversizedBlack from "@/assets/products/oversized-black.jpg";
// import oversizedNavy from "@/assets/products/oversized-navy.jpg";
// import oversizedBeige from "@/assets/products/oversized-beige.jpg";
// import oversizedNavyAlt from "@/assets/products/oversized-navy-alt.jpg";
// import basicWhite from "@/assets/products/basic-white.jpg";
// import basicBlack from "@/assets/products/basic-black.jpg";
// import hoodieCamel from "@/assets/products/hoodie-camel.jpg";
// import hoodieBlack from "@/assets/products/hoodie-black.jpg";
// import hoodieGray from "@/assets/products/hoodie-gray.jpg";
// import pantsBlack from "@/assets/products/pants-black.jpg";
// import pantsKhaki from "@/assets/products/pants-khaki.jpg";
// import pantsOlive from "@/assets/products/pants-olive.jpg";
// import poloNavy from "@/assets/products/polo-navy.jpg";
// import poloWhite from "@/assets/products/polo-white.jpg";
// import graphicBlack from "@/assets/products/graphic-black.jpg";
// import graphicWhite from "@/assets/products/graphic-white.jpg";

// export type ColorVariant = {
//   color: string;
//   colorName: string;
//   colorHex: string;
//   image: string;
//   altImage?: string;
// };

// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   category: string;
//   variants: ColorVariant[];
// };

// export const categories = [
//   "T-Shirts",
//   "Oversized T-Shirts",
//   "Graphic Shirts",
//   "Hoodies",
//   "Pants",
//   "Polo",
// ] as const;

// export type Category = (typeof categories)[number];

// export const products: Product[] = [
//   {
//     id: "oversized-tee-1",
//     name: "Basic Oversized T-Shirt - D003",
//     price: 1290,
//     category: "Oversized T-Shirts",
//     variants: [
//       { color: "navy", colorName: "Navy", colorHex: "#1B2A4A", image: oversizedNavy, altImage: oversizedNavyAlt },
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: oversizedBlack },
//       { color: "beige", colorName: "Beige", colorHex: "#C8A882", image: oversizedBeige },
//     ],
//   },
//   {
//     id: "oversized-tee-2",
//     name: "Basic Oversized Pocket T-Shirt - D087",
//     price: 1390,
//     category: "Oversized T-Shirts",
//     variants: [
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: oversizedBlack },
//       { color: "navy", colorName: "Navy", colorHex: "#1B2A4A", image: oversizedNavy },
//     ],
//   },
//   {
//     id: "basic-tee-1",
//     name: "Essential Crew Neck T-Shirt - B001",
//     price: 990,
//     category: "T-Shirts",
//     variants: [
//       { color: "white", colorName: "White", colorHex: "#f5f5f5", image: basicWhite },
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: basicBlack },
//     ],
//   },
//   {
//     id: "basic-tee-2",
//     name: "Premium Cotton T-Shirt - B015",
//     price: 1090,
//     category: "T-Shirts",
//     variants: [
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: basicBlack },
//       { color: "white", colorName: "White", colorHex: "#f5f5f5", image: basicWhite },
//       { color: "beige", colorName: "Beige", colorHex: "#C8A882", image: oversizedBeige },
//     ],
//   },
//   {
//     id: "hoodie-1",
//     name: "Premium Pullover Hoodie - H020",
//     price: 2490,
//     category: "Hoodies",
//     variants: [
//       { color: "camel", colorName: "Camel", colorHex: "#C8884D", image: hoodieCamel },
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: hoodieBlack },
//       { color: "gray", colorName: "Gray", colorHex: "#808080", image: hoodieGray },
//     ],
//   },
//   {
//     id: "hoodie-2",
//     name: "Streetwear Essential Hoodie - H035",
//     price: 2690,
//     category: "Hoodies",
//     variants: [
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: hoodieBlack },
//       { color: "gray", colorName: "Gray", colorHex: "#808080", image: hoodieGray },
//     ],
//   },
//   {
//     id: "pants-1",
//     name: "Slim Fit Chino Pants - P010",
//     price: 1890,
//     category: "Pants",
//     variants: [
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: pantsBlack },
//       { color: "khaki", colorName: "Khaki", colorHex: "#C3B091", image: pantsKhaki },
//       { color: "olive", colorName: "Olive", colorHex: "#556B2F", image: pantsOlive },
//     ],
//   },
//   {
//     id: "polo-1",
//     name: "Classic Polo Shirt - PL005",
//     price: 1490,
//     category: "Polo",
//     variants: [
//       { color: "navy", colorName: "Navy", colorHex: "#1B2A4A", image: poloNavy },
//       { color: "white", colorName: "White", colorHex: "#f5f5f5", image: poloWhite },
//     ],
//   },
//   {
//     id: "graphic-1",
//     name: "Graphic Art T-Shirt - G042",
//     price: 1590,
//     category: "Graphic Shirts",
//     variants: [
//       { color: "black", colorName: "Black", colorHex: "#1a1a1a", image: graphicBlack },
//       { color: "white", colorName: "White", colorHex: "#f5f5f5", image: graphicWhite },
//     ],
//   },
// ];



// Product images
import oversizedBlack from "@/assets/products/o1.png";
import oversizedBlackAlt from "@/assets/products/o1h.png";
import oversizedNavy from "@/assets/products/o2.png";
import oversizedNavyAlt from "@/assets/products/o2h.png";
import oversizedBeige from "@/assets/products/o3.png";
import oversizedBeigeAlt from "@/assets/products/o3h.png";


import basicWhite from "@/assets/products/b1.png";
import basicWhiteAlt from "@/assets/products/b1h.png";
import basicBlack from "@/assets/products/b2.png";
import basicBlackAlt from "@/assets/products/b2h.png";

import hoodieCamel from "@/assets/products/h1.png";
import hoodieCamelAlt from "@/assets/products/h1h.png";
import hoodieBlack from "@/assets/products/h2.png";
import hoodieBlackAlt from "@/assets/products/h2h.png";
import hoodieGray from "@/assets/products/h3.png";
import hoodieGrayAlt from "@/assets/products/h3h.png";

import pantsBlack from "@/assets/products/pa1.png";
import pantsBlackAlt from "@/assets/products/pa1h.png";
import pantsKhaki from "@/assets/products/pa2.png";
import pantsKhakiAlt from "@/assets/products/pa2h.png";
import pantsOlive from "@/assets/products/pa3.png";

import poloNavy from "@/assets/products/p1.png";
import poloNavyAlt from "@/assets/products/p1h.png";
import poloWhite from "@/assets/products/p2.png";
import poloWhiteAlt from "@/assets/products/p2h.png";

import graphicBlack from "@/assets/products/g1.png";
import graphicBlackAlt from "@/assets/products/g1h.png";
import graphicWhite from "@/assets/products/g2.png";
import graphicWhiteAlt from "@/assets/products/g2h.png";

/* ----------------------------------------
   ✅ Updated Variant Type with Hover Image
----------------------------------------- */
export type ColorVariant = {
  color: string;
  colorName: string;
  colorHex: string;

  // Main Image
  image: string;

  // Hover Image
  hoverImage: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  variants: ColorVariant[];
};

/* ----------------------------------------
   Categories
----------------------------------------- */
export const categories = [
  "T-Shirts",
  "Oversized T-Shirts",
  "Graphic Shirts",
  "Hoodies",
  "Pants",
  "Polo",
] as const;

export type Category = (typeof categories)[number];

/* ----------------------------------------
   ✅ Products with Hover Images Added
----------------------------------------- */
export const products: Product[] = [
  {
    id: "oversized-tee-1",
    name: "Basic Oversized T-Shirt - D003",
    price: 1290,
    category: "Oversized T-Shirts",
    variants: [
      {
        color: "navy",
        colorName: "Navy",
        colorHex: "#1B2A4A",
        image: oversizedNavy,
        hoverImage: oversizedNavyAlt,
      },
      {
        color: "black",
        colorName: "Black",
        colorHex: "#1a1a1a",
        image: oversizedBlack,
        hoverImage: oversizedBlackAlt,
      },
      // {
      //   color: "beige",
      //   colorName: "Beige",
      //   colorHex: "#C8A882",
      //   image: oversizedBeige,
      //   hoverImage: oversizedBeige,
      // },
    ],
  },

  {
    id: "oversized-tee-2",
    name: "Basic Oversized Pocket T-Shirt - D087",
    price: 1390,
    category: "Oversized T-Shirts",
    variants: [
      {
        color: "black",
        colorName: "Black",
        colorHex: "#1a1a1a",
        image: oversizedBlack,
        hoverImage: oversizedBlackAlt,
      },
      // {
      //   color: "navy",
      //   colorName: "Navy",
      //   colorHex: "#1B2A4A",
      //   image: oversizedNavy,
      //   hoverImage: oversizedNavyAlt,
      // },
    ],
  },
  // {
  //   id: "oversized-tee-3",
  //   name: "Basic Oversized Pocket T-Shirt - D087",
  //   price: 1390,
  //   category: "Oversized T-Shirts",
  //   variants: [
  //     {
  //       color: "black",
  //       colorName: "Black",
  //       colorHex: "#1a1a1a",
  //       image: oversizedBeige,
  //       hoverImage: oversizedBeigeAlt,
  //     },
  //     // {
  //     //   color: "navy",
  //     //   colorName: "Navy",
  //     //   colorHex: "#1B2A4A",
  //     //   image: oversizedNavy,
  //     //   hoverImage: oversizedNavyAlt,
  //     // },
  //   ],
  // },

  {
    id: "basic-tee-1",
    name: "Essential Crew Neck T-Shirt - B001",
    price: 990,
    category: "T-Shirts",
    variants: [
      {
        color: "white",
        colorName: "White",
        colorHex: "#f5f5f5",
        image: basicWhite,
        hoverImage: basicWhiteAlt,
      },
      // {
      //   color: "black",
      //   colorName: "Black",
      //   colorHex: "#1a1a1a",
      //   image: basicBlack,
      //   hoverImage: basicBlackAlt,
      // },
    ],
  },

  {
    id: "basic-tee-2",
    name: "Premium Cotton T-Shirt - B015",
    price: 1090,
    category: "T-Shirts",
    variants: [
     {
        color: "black",
        colorName: "Black",
        colorHex: "#1a1a1a",
        image: basicBlack,
        hoverImage: basicBlackAlt,
      },
      // {
      //   color: "white",
      //   colorName: "White",
      //   colorHex: "#f5f5f5",
      //   image: basicWhite,
      //   hoverImage: basicWhite,
      // },
      // {
      //   color: "beige",
      //   colorName: "Beige",
      //   colorHex: "#C8A882",
      //   image: oversizedBeige,
      //   hoverImage: oversizedBeige,
      // },
    ],
  },

  {
    id: "hoodie-1",
    name: "Premium Pullover Hoodie - H020",
    price: 2490,
    category: "Hoodies",
    variants: [
      {
        color: "camel",
        colorName: "Camel",
        colorHex: "#C8884D",
        image: hoodieCamel,
        hoverImage: hoodieCamelAlt,
      },
      // {
      //   color: "black",
      //   colorName: "Black",
      //   colorHex: "#1a1a1a",
      //   image: hoodieBlack,
      //   hoverImage: hoodieBlack,
      // },
      // {
      //   color: "gray",
      //   colorName: "Gray",
      //   colorHex: "#808080",
      //   image: hoodieGray,
      //   hoverImage: hoodieGray,
      // },
    ],
  },

  {
    id: "hoodie-2",
    name: "Streetwear Essential Hoodie - H035",
    price: 2690,
    category: "Hoodies",
    variants: [
      {
        color: "black",
        colorName: "Black",
        colorHex: "#1a1a1a",
        image: hoodieBlack,
        hoverImage: hoodieBlackAlt,
      },
      // {
      //   color: "gray",
      //   colorName: "Gray",
      //   colorHex: "#808080",
      //   image: hoodieGray,
      //   hoverImage: hoodieGray,
      // },
    ],
  },
  {
    id: "hoodie-3",
    name: "Streetwear Essential Hoodie - H035",
    price: 2690,
    category: "Hoodies",
    variants: [
      {
        color: "black",
        colorName: "Black",
        colorHex: "#1a1a1a",
        image: hoodieGray,
        hoverImage: hoodieGrayAlt,
      },
      // {
      //   color: "gray",
      //   colorName: "Gray",
      //   colorHex: "#808080",
      //   image: hoodieGray,
      //   hoverImage: hoodieGray,
      // },
    ],
  },

  {
    id: "pants-1",
    name: "Slim Fit Chino Pants - P010",
    price: 1890,
    category: "Pants",
    variants: [
      {
        color: "black",
        colorName: "Black",
        colorHex: "#1a1a1a",
        image: pantsBlack,
        hoverImage: pantsBlack,
      },
      {
        color: "khaki",
        colorName: "Khaki",
        colorHex: "#C3B091",
        image: pantsKhaki,
        hoverImage: pantsKhaki,
      },
      {
        color: "olive",
        colorName: "Olive",
        colorHex: "#556B2F",
        image: pantsOlive,
        hoverImage: pantsOlive,
      },
    ],
  },

  {
    id: "polo-1",
    name: "Classic Polo Shirt - PL005",
    price: 1490,
    category: "Polo",
    variants: [
      {
        color: "navy",
        colorName: "Navy",
        colorHex: "#1B2A4A",
        image: poloNavy,
        hoverImage: poloNavyAlt,
      },
      // {
      //   color: "white",
      //   colorName: "White",
      //   colorHex: "#f5f5f5",
      //   image: poloWhite,
      //   hoverImage: poloWhite,
      // },
    ],
  },
  {
    id: "polo-2",
    name: "Classic Polo Shirt - PL005",
    price: 1490,
    category: "Polo",
    variants: [
      {
        color: "navy",
        colorName: "Navy",
        colorHex: "#1B2A4A",
        image: poloWhite,
        hoverImage: poloWhiteAlt,
      },
      // {
      //   color: "white",
      //   colorName: "White",
      //   colorHex: "#f5f5f5",
      //   image: poloWhite,
      //   hoverImage: poloWhite,
      // },
    ],
  },

  {
    id: "graphic-1",
    name: "Graphic Art T-Shirt - G042",
    price: 1590,
    category: "Graphic Shirts",
    variants: [
      {
        color: "black",
        colorName: "Black",
        colorHex: "#1a1a1a",
        image: graphicBlack,
        hoverImage: graphicBlackAlt,
      },
      // {
      //   color: "white",
      //   colorName: "White",
      //   colorHex: "#f5f5f5",
      //   image: graphicWhite,
      //   hoverImage: graphicWhite,
      // },
    ],
  },
  {
    id: "graphic-2",
    name: "Graphic Art T-Shirt - G042",
    price: 1590,
    category: "Graphic Shirts",
    variants: [
      // {
      //   color: "black",
      //   colorName: "Black",
      //   colorHex: "#1a1a1a",
      //   image: graphicBlack,
      //   hoverImage: graphicBlack,
      // },
      {
        color: "white",
        colorName: "White",
        colorHex: "#f5f5f5",
        image: graphicWhite,
        hoverImage: graphicWhiteAlt,
      },
    ],
  },
];
