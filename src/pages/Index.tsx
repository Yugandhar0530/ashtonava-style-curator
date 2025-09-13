import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import CollectionTile from "@/components/CollectionTile";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingCart, Heart } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import pinkShirt from "@/assets/pink-shirt.jpg";
import whiteShirt from "@/assets/white-shirt.jpg";
import navyShirt from "@/assets/navy-shirt.jpg";

const Index = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const newArrivals = [
    {
      id: "1",
      name: "PREMIUM LINEN COTTON SHIRT",
      subtitle: "Tailored Comfort — Everyday Elegance",
      price: 649,
      image: pinkShirt,
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["#F8BBD9", "#FFFFFF", "#1a1a2e"],
      isNewArrival: true,
    },
    {
      id: "2", 
      name: "CLASSIC WHITE SHIRT",
      subtitle: "Timeless Essential — Professional Comfort",
      price: 599,
      image: whiteShirt,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["#FFFFFF"],
      isNewArrival: true,
    },
    {
      id: "3",
      name: "NAVY CASUAL LINEN",
      subtitle: "Weekend Ready — Relaxed Sophistication",
      price: 699,
      image: navyShirt,
      sizes: ["M", "L", "XL"],
      colors: ["#1a1a2e", "#2c3e50"],
      isNewArrival: true,
    },
  ];

  const collections = [
    {
      title: "Prime Edition",
      subtitle: "Everyday Essentials",
      image: whiteShirt,
      href: "/collections/prime",
    },
    {
      title: "Elite Edition", 
      subtitle: "Signature Cuts & Fabrics",
      image: pinkShirt,
      href: "/collections/elite",
    },
    {
      title: "Beyond Edition",
      subtitle: "Limited Run — Experimental",
      image: navyShirt,
      href: "/collections/beyond",
    },
  ];

  const nextProduct = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % newArrivals.length);
  };

  const prevProduct = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + newArrivals.length) % newArrivals.length);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section with integrated navigation */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <Navigation transparent={true} />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Lifestyle image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-premium">
                <img 
                  src={heroModel} 
                  alt="Ashtonava Premium Menswear Model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left text-pure-white">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ashtonava —<br />
                <span className="text-lavender">Crafted. Contemporary. Yours.</span>
              </h1>
              
              <p className="font-body text-lg md:text-xl mb-8 text-pure-white/90 max-w-md mx-auto lg:mx-0">
                New arrivals in breathable linen & premium cotton. Limited stock.
              </p>
              
              <Button 
                variant="hero-cta" 
                size="xl"
                className="mb-4"
              >
                SHOP NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="font-body text-sm text-pure-white/70">
                Free shipping over ₹1,500 • 30-day returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-deep-plum mb-4">
              New Arrivals
            </h2>
            <p className="font-body text-mid-plum max-w-md mx-auto">
              Discover our latest premium pieces, carefully crafted for the modern gentleman.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side - Luxury Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-soft-pearl shadow-luxury border border-warm-gold/10">
                <img 
                  src={newArrivals[currentCarouselIndex].image}
                  alt={newArrivals[currentCarouselIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Carousel Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button 
                  variant="premium-primary" 
                  size="icon"
                  onClick={prevProduct}
                  className="-ml-6 shadow-premium"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button 
                  variant="premium-primary" 
                  size="icon"
                  onClick={nextProduct}
                  className="-mr-6 shadow-premium"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-6 gap-2">
                {newArrivals.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentCarouselIndex 
                        ? 'bg-deep-plum w-6' 
                        : 'bg-lavender hover:bg-mid-plum'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Luxury Product Details */}
            <div className="lg:pl-12">
              <div className="bg-card rounded-lg overflow-hidden shadow-luxury border border-warm-gold/10">
                {/* Luxury Product Image */}
                <div className="aspect-square bg-soft-pearl">
                  <img 
                    src={newArrivals[currentCarouselIndex].image}
                    alt={newArrivals[currentCarouselIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Luxury Product Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-body font-medium text-xs text-rich-burgundy tracking-widest uppercase mb-2">
                      {newArrivals[currentCarouselIndex].name}
                    </h3>
                    <p className="font-display text-2xl text-deep-charcoal mb-4 font-light">
                      {newArrivals[currentCarouselIndex].subtitle}
                    </p>
                    <div className="w-8 h-0.5 bg-warm-gold mb-4"></div>
                    <p className="font-body font-semibold text-2xl text-deep-charcoal">
                      ₹ {newArrivals[currentCarouselIndex].price}/-
                    </p>
                  </div>

                  {/* Luxury Size Selection */}
                  <div className="mb-6">
                    <p className="font-body text-sm text-rich-burgundy mb-3 uppercase tracking-wider font-medium">Size:</p>
                    <div className="flex flex-wrap gap-3">
                      {newArrivals[currentCarouselIndex].sizes.map((size) => (
                        <Button
                          key={size}
                          variant="size-pill"
                          size="pill"
                          className="text-sm min-w-[3rem]"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Luxury Color Selection */}
                  {newArrivals[currentCarouselIndex].colors && newArrivals[currentCarouselIndex].colors.length > 0 && (
                    <div className="mb-6">
                      <p className="font-body text-sm text-rich-burgundy mb-3 uppercase tracking-wider font-medium">Color:</p>
                      <div className="flex gap-3">
                        {newArrivals[currentCarouselIndex].colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-8 h-8 rounded-full border-2 border-deep-charcoal/20 cursor-pointer hover:scale-110 hover:border-warm-gold transition-all duration-200"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Luxury Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      variant="luxury-primary" 
                      size="lg" 
                      className="flex-1"
                    >
                      <ShoppingCart className="w-5 h-5 mr-3" />
                      ADD TO COLLECTION
                    </Button>
                    <Button
                      variant="luxury-secondary"
                      size="icon"
                      className="shrink-0 w-12 h-12"
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versace-Style Collections Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-light text-deep-charcoal mb-8 tracking-wide">
              Our Collections
            </h2>
            <div className="w-16 h-0.5 bg-warm-gold mx-auto mb-8"></div>
            <p className="font-body text-xl text-rich-burgundy max-w-3xl mx-auto leading-relaxed">
              Three distinctive collections, each crafted with uncompromising attention to detail and timeless elegance.
            </p>
          </div>

          {/* Versace-Inspired Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Men's Section - Large */}
            <div className="relative group overflow-hidden rounded-lg bg-gradient-luxury aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src={heroModel}
                alt="Men's Collection"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
                <h3 className="font-display text-5xl md:text-6xl font-light text-cream-ivory mb-6 tracking-wide">
                  MEN'S
                </h3>
                <div className="w-12 h-0.5 bg-warm-gold mx-auto mb-8"></div>
                <Link to="/men">
                  <Button variant="luxury-gold" size="xl" className="px-12 py-4 text-lg font-semibold tracking-wider">
                    SHOP NOW
                  </Button>
                </Link>
              </div>
            </div>

            {/* Women's Section - Large */}
            <div className="relative group overflow-hidden rounded-lg bg-gradient-luxury aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src={pinkShirt}
                alt="Women's Collection"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-burgundy/90 via-rich-burgundy/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
                <h3 className="font-display text-5xl md:text-6xl font-light text-cream-ivory mb-6 tracking-wide">
                  WOMEN'S
                </h3>
                <div className="w-12 h-0.5 bg-warm-gold mx-auto mb-8"></div>
                <Link to="/women">
                  <Button variant="luxury-gold" size="xl" className="px-12 py-4 text-lg font-semibold tracking-wider">
                    SHOP NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Three Edition Collections */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Prime Edition */}
            <div className="relative group overflow-hidden rounded-lg aspect-[3/4] bg-soft-pearl">
              <img 
                src={whiteShirt}
                alt="Prime Edition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-display text-2xl font-light text-cream-ivory mb-3">
                  Prime Edition
                </h4>
                <p className="font-body text-sm text-cream-ivory/80 mb-4 uppercase tracking-wider">
                  Everyday Essentials
                </p>
                <Link to="/collections?filter=prime">
                  <Button variant="luxury-secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>

            {/* Elite Edition */}
            <div className="relative group overflow-hidden rounded-lg aspect-[3/4] bg-soft-pearl">
              <img 
                src={pinkShirt}
                alt="Elite Edition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-burgundy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-display text-2xl font-light text-cream-ivory mb-3">
                  Elite Edition
                </h4>
                <p className="font-body text-sm text-cream-ivory/80 mb-4 uppercase tracking-wider">
                  Signature Cuts & Fabrics
                </p>
                <Link to="/collections?filter=elite">
                  <Button variant="luxury-secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>

            {/* Beyond Edition */}
            <div className="relative group overflow-hidden rounded-lg aspect-[3/4] bg-soft-pearl">
              <img 
                src={navyShirt}
                alt="Beyond Edition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-display text-2xl font-light text-cream-ivory mb-3">
                  Beyond Edition
                </h4>
                <p className="font-body text-sm text-cream-ivory/80 mb-4 uppercase tracking-wider">
                  Limited Run — Experimental
                </p>
                <Link to="/collections?filter=beyond">
                  <Button variant="luxury-secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-deep-plum text-pure-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Join Ashtonava
          </h2>
          <p className="font-body text-lg mb-8 text-pure-white/90">
            Be the first to know about new arrivals and exclusive offers. 
            <span className="block mt-2 font-semibold">10% off your first order.</span>
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-pure-white/10 border border-pure-white/20 text-pure-white placeholder:text-pure-white/60 focus:outline-none focus:ring-2 focus:ring-lavender"
            />
            <Button variant="premium-primary" className="shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent-black text-pure-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-bold text-xl mb-4">Ashtonava</h3>
              <p className="font-body text-sm text-pure-white/70">
                Premium contemporary menswear, crafted with precision and care.
              </p>
            </div>
            
            <div>
              <h4 className="font-body font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="/shop" className="block text-pure-white/70 hover:text-pure-white transition-colors">Shop</a>
                <a href="/collections" className="block text-pure-white/70 hover:text-pure-white transition-colors">Collections</a>
                <a href="/about" className="block text-pure-white/70 hover:text-pure-white transition-colors">About</a>
                <a href="/contact" className="block text-pure-white/70 hover:text-pure-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-body font-semibold mb-4">Customer Care</h4>
              <div className="space-y-2 text-sm">
                <a href="/shipping" className="block text-pure-white/70 hover:text-pure-white transition-colors">Shipping & Returns</a>
                <a href="/size-guide" className="block text-pure-white/70 hover:text-pure-white transition-colors">Size Guide</a>
                <a href="/care" className="block text-pure-white/70 hover:text-pure-white transition-colors">Care Instructions</a>
                <a href="/faq" className="block text-pure-white/70 hover:text-pure-white transition-colors">FAQ</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-body font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-pure-white/70 hover:text-pure-white transition-colors">Instagram</a>
                <a href="#" className="block text-pure-white/70 hover:text-pure-white transition-colors">Twitter</a>
                <a href="#" className="block text-pure-white/70 hover:text-pure-white transition-colors">Facebook</a>
                <a href="#" className="block text-pure-white/70 hover:text-pure-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-pure-white/10 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-pure-white/60">
              © 2024 Ashtonava. All rights reserved. • Privacy & Returns — 30 day money-back guarantee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
