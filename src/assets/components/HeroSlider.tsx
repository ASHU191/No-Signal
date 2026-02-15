import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    title: "Festival Sale",
    subtitle: "Flat 40% Off",
    cta: "Shop Now",
  },
  {
    image: hero2,
    title: "New Summer Collection",
    subtitle: "Premium Streetwear",
    cta: "Explore",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[18vh] sm:h-[70vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-contain sm:object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-foreground/20" />

          {/* Text + Button Overlay (HIDDEN but NOT removed) */}
          <div className="absolute inset-0 hidden flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary-foreground tracking-tight mb-2">
              {slide.title}
            </h2>

            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-6 font-light">
              {slide.subtitle}
            </p>

            <Link
              to="/products"
              className="bg-background text-foreground px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === i
                ? "bg-primary-foreground w-6"
                : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
