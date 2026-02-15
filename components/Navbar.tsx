import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";
import logo from "@/assets/logow.png";

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Mobile menu button */}
        <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden hover:text-primary transition-colors">
          {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="No Signal"  className="h-[135px] w-auto object-contain" />
          <span className="brand-font text-lg tracking-[0.2em] hidden sm:inline"></span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/products"
              className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors flex items-center gap-1"
            >
              Products <ChevronDown className="h-3 w-3" />
            </Link>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-0 pt-2">
                <div className="bg-background border border-border shadow-lg min-w-[200px] py-2 animate-fade-in">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/products?category=${encodeURIComponent(cat)}`}
                      className="block px-5 py-2.5 text-sm hover:bg-secondary transition-colors"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {showSearch && (
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="border-b border-foreground bg-transparent text-sm py-1 px-2 w-40 outline-none animate-fade-in"
              onBlur={() => setShowSearch(false)}
            />
          )}
          <button onClick={() => setShowSearch(!showSearch)} className="hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hover:text-primary transition-colors hidden sm:block">
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-primary transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-fade-in z-50">
          <nav className="flex flex-col px-4 py-4">
            <Link to="/" onClick={() => setMobileMenu(false)} className="py-3 text-sm font-medium uppercase tracking-wide border-b border-border">
              Home
            </Link>
            <Link to="/products" onClick={() => setMobileMenu(false)} className="py-3 text-sm font-medium uppercase tracking-wide border-b border-border">
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                onClick={() => setMobileMenu(false)}
                className="py-3 pl-4 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border"
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
