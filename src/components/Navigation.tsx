import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
const Navigation = ({ transparent = false }: { transparent?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    transparent 
      ? 'bg-transparent backdrop-blur-none' 
      : 'bg-background/95 backdrop-blur-sm border-b border-lavender'
  }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
        <div className="flex items-center space-x-10">
          <Link to="/" className="font-display text-xl font-light text-pure-white hover:text-warm-gold transition-colors tracking-wider">
            ASHTONAVA
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-body text-sm font-medium text-pure-white/90 hover:text-warm-gold transition-colors tracking-wide">
              HOMEPAGE
            </Link>
            <Link to="/men" className="font-body text-sm font-medium text-pure-white/90 hover:text-warm-gold transition-colors tracking-wide">
              MEN
            </Link>
            <Link to="/collections" className="font-body text-sm font-medium text-pure-white/90 hover:text-warm-gold transition-colors tracking-wide">
              COLLECTIONS
            </Link>
            <Link to="#" className="font-body text-sm font-medium text-pure-white/90 hover:text-warm-gold transition-colors tracking-wide">
              BLOG
            </Link>
          </nav>
        </div>

          {/* Center - New Arrivals (optional) */}
          

          {/* Right section */}
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="icon" className="text-pure-white hover:bg-warm-gold/20 hover:text-warm-gold transition-colors">
            <Search className="w-5 h-5" />
          </Button>
          <Link to="/account">
            <Button variant="ghost" size="icon" className="text-pure-white hover:bg-warm-gold/20 hover:text-warm-gold transition-colors">
              <User className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-pure-white hover:bg-warm-gold/20 hover:text-warm-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-warm-gold text-deep-charcoal text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden border-t border-lavender py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/shop" className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors" onClick={() => setIsMenuOpen(false)}>
                SHOP
              </Link>
              <Link to="/collections" className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors" onClick={() => setIsMenuOpen(false)}>
                COLLECTIONS
              </Link>
              <Link to="/blog" className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors" onClick={() => setIsMenuOpen(false)}>
                BLOG
              </Link>
              <Button variant="ghost" size="sm" className="justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;