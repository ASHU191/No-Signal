import { Link } from "react-router-dom";
import logo from "@/assets/logob.png";
import { categories } from "@/data/products";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
      
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 items-start">

        {/* Brand */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-start gap-2 mb-4">
           <img
      src={logo}
      alt="No Signal"
      className="
        h-[140px] w-auto
        
      "
    />
          </Link>

          <p className="text-sm text-background/60 leading-relaxed max-w-[280px]">
            Premium quality streetwear crafted with the finest fabrics. Designed
            for comfort, built to last.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {["Instagram", "Facebook", "Twitter", "TikTok"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-background/50 hover:text-background transition-colors uppercase tracking-wider"
              >
                {s.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-background">
            Quick Links
          </h4>

          <ul className="space-y-3">
            {["Home", "Products", "About Us", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={
                    link === "Home"
                      ? "/"
                      : link === "Products"
                      ? "/products"
                      : "#"
                  }
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-background">
            Collections
          </h4>

          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  to={`/products?category=${encodeURIComponent(cat)}`}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-background">
            Support
          </h4>

          <ul className="space-y-3">
            {[
              "Shipping Policy",
              "Returns & Exchanges",
              "Size Guide",
              "FAQs",
              "Privacy Policy",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/15 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/40">
          © 2026 No Signal. All rights reserved.
        </p>

        {/* Payments */}
        <div className="flex items-center gap-3">
          {["VISA", "MC", "JCB", "COD"].map((p) => (
            <span
              key={p}
              className="text-[10px] font-bold tracking-wider border border-background/20 px-2.5 py-1 rounded text-background/50"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
