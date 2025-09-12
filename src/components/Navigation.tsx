import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-lavender">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-display font-bold text-xl text-deep-plum">
              Ashtonava
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/shop" 
                className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors"
              >
                SHOP
              </Link>
              <Link 
                to="/collections" 
                className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors"
              >
                COLLECTIONS
              </Link>
              <Link 
                to="/blog" 
                className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors"
              >
                BLOG
              </Link>
            </div>
          </div>

          {/* Center - New Arrivals (optional) */}
          <div className="hidden lg:block">
            <span className="font-body font-semibold text-xs text-deep-plum tracking-wider">
              NEW ARRIVALS
            </span>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-deep-plum text-pure-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-body font-medium">
                  0
                </span>
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-lavender py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/shop" 
                className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                to="/collections" 
                className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                COLLECTIONS
              </Link>
              <Link 
                to="/blog" 
                className="font-body font-medium text-sm text-accent-black hover:text-deep-plum transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Button variant="ghost" size="sm" className="justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;