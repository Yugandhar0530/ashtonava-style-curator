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
          <div className="flex items-center space-x-8">
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/collections" className={`font-body font-medium text-sm transition-colors ${
                transparent 
                  ? 'text-pure-white/90 hover:text-pure-white' 
                  : 'text-accent-black hover:text-deep-plum'
              }`}>
                SHOP
              </Link>
              <Link to="/collections" className={`font-body font-medium text-sm transition-colors ${
                transparent 
                  ? 'text-pure-white/90 hover:text-pure-white' 
                  : 'text-accent-black hover:text-deep-plum'
              }`}>
                COLLECTIONS
              </Link>
              <Link to="/blog" className={`font-body font-medium text-sm transition-colors ${
                transparent 
                  ? 'text-pure-white/90 hover:text-pure-white' 
                  : 'text-accent-black hover:text-deep-plum'
              }`}>
                BLOG
              </Link>
            </div>
          </div>

          {/* Center - New Arrivals (optional) */}
          

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className={`hidden md:flex ${
              transparent ? 'text-pure-white/90 hover:text-pure-white hover:bg-pure-white/10' : ''
            }`}>
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon" className={transparent ? 'text-pure-white/90 hover:text-pure-white hover:bg-pure-white/10' : ''}>
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className={`relative ${transparent ? 'text-pure-white/90 hover:text-pure-white hover:bg-pure-white/10' : ''}`}>
                <ShoppingBag className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-deep-plum text-pure-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-body font-medium">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className={`md:hidden ${
              transparent ? 'text-pure-white/90 hover:text-pure-white hover:bg-pure-white/10' : ''
            }`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
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