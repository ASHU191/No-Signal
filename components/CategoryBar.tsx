import { Link } from "react-router-dom";
import { categories } from "@/data/products";

import catTshirts from "@/assets/categories/a1.png";
import catOversized from "@/assets/categories/a2.png";
import catGraphic from "@/assets/categories/a7.png";
import catHoodies from "@/assets/categories/a4.png";
import catPants from "@/assets/categories/a5.png";
import catPolo from "@/assets/categories/a6.png";

const categoryImages: Record<string, string> = {
  "T-Shirts": catTshirts,
  "Oversized T-Shirts": catOversized,
  "Graphic Shirts": catGraphic,
  "Hoodies": catHoodies,
  "Pants": catPants,
  "Polo": catPolo,
};

const CategoryBar = () => (
  // <div className="border-b border-border overflow-x-auto scrollbar-hide">
  //   <div className="max-w-[800px] mx-auto px-4 sm:px-8 flex items-center gap-6 sm:gap-10 py-6 min-w-max">
  //     {categories.map((cat) => (
  //       <Link
  //         key={cat}
  //         to={`/products?category=${encodeURIComponent(cat)}`}
  //         className="flex flex-col items-center gap-2.5 group shrink-0"
  //       >
  //         <div className="w-18 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
  //           <img
  //             src={categoryImages[cat]}
  //             alt={cat}
  //             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
  //           />
  //         </div>
  //         <span className="text-[10px] sm:text-xs uppercase tracking-wider font-medium text-center leading-tight max-w-[80px] text-muted-foreground group-hover:text-foreground transition-colors">
  //           {cat}
  //         </span>
  //       </Link>
  //     ))}
  //   </div>
  // </div>
  <div className="border-b border-border overflow-x-auto scrollbar-hide">
  <div className="max-w-[900px] mx-auto px-4 sm:px-8 flex items-center gap-8 sm:gap-12 py-7 min-w-max">
    {categories.map((cat) => (
      <Link
        key={cat}
        to={`/products?category=${encodeURIComponent(cat)}`}
        className="flex flex-col items-center gap-3 group shrink-0"
      >
        {/* Bigger Circle */}
        <div
          className="
            w-[75px] h-[75px]
            sm:w-[90px] sm:h-[90px]
            md:w-[100px] md:h-[100px]
            rounded-full overflow-hidden
            border-2 border-border
            group-hover:border-primary
            transition-colors
          "
        >
          <img
            src={categoryImages[cat]}
            alt={cat}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Bigger Label */}
        <span className="text-[11px] sm:text-sm uppercase tracking-wider font-medium text-center leading-tight max-w-[90px] text-muted-foreground group-hover:text-foreground transition-colors">
          {cat}
        </span>
      </Link>
    ))}
  </div>
</div>

);

export default CategoryBar;
