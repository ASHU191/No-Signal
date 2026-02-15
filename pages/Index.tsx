import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import CategoryBar from "@/components/CategoryBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div>
      <HeroSlider />
      <CategoryBar />

      {/* Featured Products */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-medium uppercase tracking-widest">New Arrivals</h2>
          <Link
            to="/products"
            className="text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-secondary py-16 text-center px-4">
        <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-3">Premium Quality Streetwear</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Crafted with the finest fabrics for comfort that lasts all day.
        </p>
        <Link
          to="/products"
          className="inline-block bg-foreground text-background px-8 py-3 text-xs font-medium uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Shop Collection
        </Link>
      </section>
    </div>
  );
};

export default Index;
