import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import pinkShirt from "@/assets/pink-shirt.jpg";
import whiteShirt from "@/assets/white-shirt.jpg";
import navyShirt from "@/assets/navy-shirt.jpg";

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    {
      id: "1",
      name: "PREMIUM LINEN COTTON SHIRT",
      subtitle: "Tailored Comfort — Everyday Elegance",
      price: 649,
      image: pinkShirt,
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["#F8BBD9", "#FFFFFF", "#1a1a2e"],
      collection: "prime",
    },
    {
      id: "2",
      name: "CLASSIC WHITE SHIRT",
      subtitle: "Timeless Essential — Professional Comfort",
      price: 599,
      image: whiteShirt,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["#FFFFFF"],
      collection: "elite",
    },
    {
      id: "3",
      name: "NAVY CASUAL LINEN",
      subtitle: "Weekend Ready — Relaxed Sophistication",
      price: 699,
      image: navyShirt,
      sizes: ["M", "L", "XL"],
      colors: ["#1a1a2e", "#2c3e50"],
      collection: "beyond",
    },
    {
      id: "4",
      name: "SIGNATURE OXFORD SHIRT",
      subtitle: "Heritage Craft — Modern Fit",
      price: 749,
      image: whiteShirt,
      sizes: ["S", "M", "L", "XL"],
      colors: ["#FFFFFF", "#F0F8FF"],
      collection: "elite",
    },
    {
      id: "5",
      name: "WEEKEND CHAMBRAY",
      subtitle: "Casual Refinement — Effortless Style",
      price: 629,
      image: navyShirt,
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["#4682B4", "#1a1a2e"],
      collection: "prime",
    },
    {
      id: "6",
      name: "EXPERIMENTAL TEXTURE SHIRT",
      subtitle: "Limited Edition — Avant-Garde Design",
      price: 899,
      image: pinkShirt,
      sizes: ["L", "XL"],
      colors: ["#D2B4DE", "#E8DAEF"],
      collection: "beyond",
    },
  ];

  const collections = [
    { id: "all", name: "All Collections" },
    { id: "prime", name: "Prime Edition" },
    { id: "elite", name: "Elite Edition" },
    { id: "beyond", name: "Beyond Edition" },
  ];

  const sizes = ["all", "S", "M", "L", "XL", "XXL"];

  const filteredProducts = products.filter((product) => {
    if (selectedCollection !== "all" && product.collection !== selectedCollection) {
      return false;
    }
    if (selectedSize !== "all" && !product.sizes.includes(selectedSize)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Luxury Hero Section with Breadcrumb */}
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <Breadcrumb items={[{ label: "Homepage", href: "/" }, { label: "Collections" }]} />
          
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-light text-deep-charcoal mb-8 tracking-wide">
              Collections
            </h1>
            <div className="w-24 h-0.5 bg-warm-gold mx-auto mb-8"></div>
            <p className="font-body text-xl text-rich-burgundy max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collections of premium menswear, each piece designed with precision and crafted with uncompromising attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* On.com Inspired Filter and Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          {/* Category Navigation (On.com Style) */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-1 bg-soft-pearl rounded-lg p-1 max-w-3xl mx-auto">
              {collections.map((collection) => (
                <Button
                  key={collection.id}
                  variant={selectedCollection === collection.id ? "luxury-primary" : "ghost"}
                  size="lg"
                  onClick={() => setSelectedCollection(collection.id)}
                  className="flex-1 font-body text-sm tracking-wide"
                >
                  {collection.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Filter Bar with Luxury Spacing */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div className="flex flex-wrap items-center gap-6">
              {/* Size Filter */}
              <div className="flex items-center gap-4">
                <span className="font-body text-sm text-rich-burgundy font-medium uppercase tracking-wider">Size:</span>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "size-pill-active" : "size-pill"}
                      size="pill"
                      onClick={() => setSelectedSize(size)}
                      className="text-xs min-w-[2.5rem]"
                    >
                      {size === "all" ? "All" : size}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* View Toggle & Filters */}
            <div className="flex items-center gap-4">
              <Button
                variant="luxury-secondary"
                size="icon"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-2 bg-soft-pearl rounded-lg p-1 border border-deep-charcoal/10">
                <Button
                  variant={viewMode === "grid" ? "luxury-secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-md"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "luxury-secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-md"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-12">
            <p className="font-body text-sm text-rich-burgundy uppercase tracking-wider">
              {filteredProducts.length} RESULTS
            </p>
          </div>

          {/* On.com Style Products Grid with Enhanced Cards */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-12 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1 lg:grid-cols-2"
            }`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  {/* Enhanced Product Card with On.com styling */}
                  <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-warm-gold/10">
                    <div className="aspect-square overflow-hidden bg-soft-pearl">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Color Swatches (On.com Style) */}
                    <div className="p-6">
                      <div className="flex gap-2 mb-4">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-deep-charcoal/20 cursor-pointer hover:scale-110 transition-all duration-200"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-body font-medium text-sm text-deep-charcoal mb-2">
                          {product.name}
                        </h3>
                        <p className="font-body text-xs text-rich-burgundy mb-1 uppercase tracking-wider">
                          {product.subtitle}
                        </p>
                        <p className="font-body font-bold text-lg text-deep-charcoal">
                          ₹{product.price.toLocaleString()}.00
                        </p>
                      </div>

                      <ProductCard 
                        {...product} 
                        isNewArrival={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-soft-pearl rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-rich-burgundy" />
              </div>
              <h3 className="font-display text-2xl font-light text-deep-charcoal mb-4">
                No products found
              </h3>
              <p className="font-body text-rich-burgundy mb-8 max-w-md mx-auto">
                Try adjusting your filters to discover more premium pieces in our collection.
              </p>
              <Button 
                variant="luxury-primary"
                onClick={() => {
                  setSelectedCollection("all");
                  setSelectedSize("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-deep-plum text-pure-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Stay Updated
          </h2>
          <p className="font-body text-lg mb-8 text-pure-white/90">
            Be the first to know when new collections drop.
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

export default Collections;