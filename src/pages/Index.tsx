import { useState } from "react";
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Product Image Only */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-soft-lilac shadow-card">
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

            {/* Right side - Product Image + Details + Purchase Options */}
            <div className="lg:pl-8">
              <div className="bg-card rounded-xl overflow-hidden shadow-card">
                {/* Product Image */}
                <div className="aspect-square bg-soft-lilac">
                  <img 
                    src={newArrivals[currentCarouselIndex].image}
                    alt={newArrivals[currentCarouselIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-body font-semibold text-xs text-deep-plum tracking-wider uppercase mb-1">
                      {newArrivals[currentCarouselIndex].name}
                    </h3>
                    <p className="font-display text-lg text-accent-black mb-2">
                      {newArrivals[currentCarouselIndex].subtitle}
                    </p>
                    <p className="font-body font-semibold text-lg text-accent-black">
                      ₹ {newArrivals[currentCarouselIndex].price}/-
                    </p>
                  </div>

                  {/* Size Selection */}
                  <div className="mb-4">
                    <p className="font-body text-sm text-mid-plum mb-2">Size:</p>
                    <div className="flex flex-wrap gap-2">
                      {newArrivals[currentCarouselIndex].sizes.map((size) => (
                        <Button
                          key={size}
                          variant="size-pill"
                          size="pill"
                          className="text-xs"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  {newArrivals[currentCarouselIndex].colors && newArrivals[currentCarouselIndex].colors.length > 0 && (
                    <div className="mb-4">
                      <p className="font-body text-sm text-mid-plum mb-2">Color:</p>
                      <div className="flex gap-2">
                        {newArrivals[currentCarouselIndex].colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-lavender cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="premium-primary" 
                      size="sm" 
                      className="flex-1"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      ADD TO CART
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-deep-plum mb-4">
              Our Collections
            </h2>
            <p className="font-body text-mid-plum max-w-md mx-auto">
              Three distinctive lines, each crafted with purpose and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionTile key={index} {...collection} />
            ))}
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
