import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
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
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-deep-plum mb-4">
            Collections
          </h1>
          <p className="font-body text-lg text-mid-plum max-w-2xl mx-auto">
            Discover our carefully curated collections of premium menswear, each piece designed with precision and crafted with care.
          </p>
        </div>
      </section>

      {/* Filter and Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              {/* Collection Filter */}
              <div className="flex flex-wrap gap-2">
                {collections.map((collection) => (
                  <Button
                    key={collection.id}
                    variant={selectedCollection === collection.id ? "premium-secondary" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedCollection(collection.id)}
                  >
                    {collection.name}
                  </Button>
                ))}
              </div>

              {/* Size Filter */}
              <div className="flex items-center gap-2">
                <span className="font-body text-sm text-mid-plum">Size:</span>
                <div className="flex gap-1">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "size-pill-active" : "size-pill"}
                      size="pill"
                      onClick={() => setSelectedSize(size)}
                      className="text-xs"
                    >
                      {size === "all" ? "All" : size}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* View Toggle & Mobile Filter */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-1 bg-soft-lilac rounded-full p-1">
                <Button
                  variant={viewMode === "grid" ? "premium-secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-full"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "premium-secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-full"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="font-body text-sm text-mid-plum">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1 lg:grid-cols-2"
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  isNewArrival={false}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-soft-lilac rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-mid-plum" />
              </div>
              <h3 className="font-display text-xl font-semibold text-deep-plum mb-2">
                No products found
              </h3>
              <p className="font-body text-mid-plum mb-6">
                Try adjusting your filters to see more products.
              </p>
              <Button 
                variant="premium-primary"
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