// import { useSearchParams } from "react-router-dom";
// import { useState } from "react";
// import ProductCard from "@/components/ProductCard";
// import CategoryBar from "@/components/CategoryBar";
// import { products, categories } from "@/data/products";

// const Products = () => {
//   const [searchParams] = useSearchParams();
//   const activeCategory = searchParams.get("category");
//   const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

//   let filtered = activeCategory
//     ? products.filter((p) => p.category === activeCategory)
//     : products;

//   if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
//   if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);

//   return (
//     <div>
//       <CategoryBar />
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-lg font-medium uppercase tracking-widest">
//             {activeCategory || "All Products"}
//           </h1>
//           <div className="flex items-center gap-4">
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
//               className="text-xs uppercase tracking-wider bg-transparent border border-border px-3 py-2 outline-none"
//             >
//               <option value="default">Sort</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//             </select>
//             <span className="text-xs text-muted-foreground">{filtered.length} Products</span>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//           {filtered.map((p) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;



import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryBar from "@/components/CategoryBar";
import { products } from "@/data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const [sortBy, setSortBy] = useState<
    "default" | "price-asc" | "price-desc"
  >("default");

  let filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  if (sortBy === "price-asc")
    filtered = [...filtered].sort((a, b) => a.price - b.price);

  if (sortBy === "price-desc")
    filtered = [...filtered].sort((a, b) => b.price - a.price);

  
  return (
    <div>
      <CategoryBar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-lg font-medium uppercase tracking-widest">
            {activeCategory || "All Products"}
          </h1>

          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as typeof sortBy)
              }
              className="text-xs uppercase tracking-wider bg-transparent border border-border px-3 py-2 outline-none"
            >
              <option value="default">Sort</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            <span className="text-xs text-muted-foreground">
              {filtered.length} Products
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
