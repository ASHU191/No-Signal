import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
      <Link
        to="/products"
        className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-3">
          <div className="aspect-[3/4] bg-secondary overflow-hidden">
            <img
              src={variant.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.variants.map((v, i) => (
              <button
                key={v.color}
                onClick={() => setSelectedVariant(i)}
                className={`aspect-square bg-secondary overflow-hidden border-2 transition-colors ${
                  selectedVariant === i ? "border-foreground" : "border-transparent"
                }`}
              >
                <img src={v.image} alt={v.colorName} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="py-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{product.category}</p>
          <h1 className="text-2xl font-medium tracking-tight mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-8">Rs.{product.price.toLocaleString()}</p>

          {/* Color Selector */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest mb-3">
              Color: <span className="font-semibold">{variant.colorName}</span>
            </p>
            <div className="flex gap-2">
              {product.variants.map((v, i) => (
                <button
                  key={v.color}
                  onClick={() => setSelectedVariant(i)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedVariant === i ? "border-foreground scale-110" : "border-border"
                  }`}
                  style={{ backgroundColor: v.colorHex }}
                  title={v.colorName}
                />
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() =>
              addToCart({
                productId: product.id,
                name: product.name,
                price: product.price,
                color: variant.color,
                colorName: variant.colorName,
                image: variant.image,
              })
            }
            className="w-full bg-foreground text-background py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Add to Cart
          </button>

          <div className="mt-8 space-y-3 text-xs text-muted-foreground">
            <p>• Premium quality fabric</p>
            <p>• Free shipping on orders above Rs.3,000</p>
            <p>• Easy 7-day returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
