// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Plus } from "lucide-react";
// import type { Product } from "@/data/products";
// import { useCart } from "@/context/CartContext";

// type Props = { product: Product };

// const ProductCard = ({ product }: Props) => {
//   const [selectedVariant, setSelectedVariant] = useState(0);
//   const [hovered, setHovered] = useState(false);
//   const { addToCart } = useCart();
//   const variant = product.variants[selectedVariant];
//   const altImage = variant.altImage || product.variants[(selectedVariant + 1) % product.variants.length]?.image;

//   return (
//     <div className="group">
//       <Link
//         to={`/product/${product.id}`}
//         className="block relative overflow-hidden aspect-[3/4] bg-secondary mb-3"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <img
//           src={variant.image}
//           alt={product.name}
//           className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
//             hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
//           }`}
//         />
//         <img
//           src={altImage || variant.image}
//           alt={`${product.name} alternate`}
//           className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
//             hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
//           }`}
//         />
//         {/* Quick add button */}
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             addToCart({
//               productId: product.id,
//               name: product.name,
//               price: product.price,
//               color: variant.color,
//               colorName: variant.colorName,
//               image: variant.image,
//             });
//           }}
//           className="absolute bottom-3 right-3 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
//         >
//           <Plus className="h-4 w-4" />
//         </button>
//       </Link>

//       <div className="flex items-start justify-between gap-2">
//         <div className="flex-1 min-w-0">
//           <h3 className="text-xs font-medium uppercase tracking-wide truncate">
//             {product.name}
//           </h3>
//           <p className="text-sm font-semibold mt-0.5">Rs.{product.price.toLocaleString()}</p>
//         </div>
//         <div className="flex gap-1 mt-1 shrink-0">
//           {product.variants.map((v, i) => (
//             <button
//               key={v.color}
//               onClick={() => setSelectedVariant(i)}
//               className={`w-3.5 h-3.5 rounded-full border transition-all ${
//                 selectedVariant === i ? "border-foreground scale-110" : "border-border"
//               }`}
//               style={{ backgroundColor: v.colorHex }}
//               title={v.colorName}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// src/components/ProductCard.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [hovered, setHovered] = useState(false);

  const { addToCart } = useCart();
  const variant = product.variants[selectedVariant];

  return (
    <div className="group">
      {/* Image Wrapper */}
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden aspect-[3/4] bg-secondary mb-3 rounded-xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ✅ Main Image */}
        <img
          src={variant.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />

        {/* ✅ Hover Image */}
        <img
          src={variant.hoverImage}
          alt={`${product.name} hover`}
          onError={(e) => {
            e.currentTarget.src = variant.image;
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />

        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart({
              productId: product.id,
              name: product.name,
              price: product.price,
              color: variant.color,
              colorName: variant.colorName,
              image: variant.image,
            });
          }}
          className="absolute bottom-3 right-3 w-9 h-9 bg-background rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <Plus className="h-4 w-4" />
        </button>
      </Link>

      {/* Product Info */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-xs font-medium uppercase tracking-wide truncate">
            {product.name}
          </h3>
          <p className="text-sm font-semibold mt-0.5">
            Rs.{product.price.toLocaleString()}
          </p>
        </div>

        {/* Color Variant Buttons */}
        <div className="flex gap-1 mt-1 shrink-0">
          {product.variants.map((v, i) => (
            <button
              key={v.color}
              onClick={() => setSelectedVariant(i)}
              className={`w-4 h-4 rounded-full border transition-all ${
                selectedVariant === i
                  ? "border-foreground scale-110"
                  : "border-border"
              }`}
              style={{ backgroundColor: v.colorHex }}
              title={v.colorName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
