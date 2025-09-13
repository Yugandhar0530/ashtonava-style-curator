import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import pinkShirt from "@/assets/pink-shirt.jpg";
import whiteShirt from "@/assets/white-shirt.jpg";
import navyShirt from "@/assets/navy-shirt.jpg";

const Men = () => {
  const [selectedSize, setSelectedSize] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

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
  ];

  const sizes = ["all", "S", "M", "L", "XL", "XXL"];

  const filteredProducts = products.filter((product) => {
    if (selectedSize !== "all" && !product.sizes.includes(selectedSize)) {
      return false;
    }
    return true;
  });

  const breadcrumbItems = [
    { label: "Homepage", href: "/" },
    { label: "Men" },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section with Extra Luxury Spacing */}
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-light text-deep-charcoal mb-8 tracking-wide">
              Men's Collection
            </h1>
            <div className="w-24 h-0.5 bg-warm-gold mx-auto mb-8"></div>
            <p className="font-body text-xl text-rich-burgundy max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium menswear, each piece crafted with meticulous attention to detail and timeless sophistication.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
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

            {/* View Toggle */}
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

          {/* Results Count */}
          <div className="mb-12">
            <p className="font-body text-sm text-rich-burgundy uppercase tracking-wider">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid with Luxury Spacing */}
          <div className={`grid gap-12 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
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
        </div>
      </section>

      {/* Luxury Newsletter Section */}
      <section className="py-32 bg-deep-charcoal text-cream-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-8 tracking-wide">
            Join Our Heritage
          </h2>
          <div className="w-16 h-0.5 bg-warm-gold mx-auto mb-8"></div>
          <p className="font-body text-xl mb-12 text-cream-ivory/80 leading-relaxed">
            Be the first to discover our exclusive collections and craftsmanship stories.
          </p>
          
          <div className="max-w-lg mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-cream-ivory/5 border border-cream-ivory/20 text-cream-ivory placeholder:text-cream-ivory/50 focus:outline-none focus:ring-2 focus:ring-warm-gold/50 focus:border-warm-gold/50 transition-all"
            />
            <Button variant="luxury-gold" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-accent-black text-cream-ivory py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-display font-light text-2xl mb-6">Ashtonava</h3>
              <p className="font-body text-sm text-cream-ivory/70 leading-relaxed">
                Premium contemporary menswear, crafted with precision and timeless elegance.
              </p>
            </div>
            
            <div>
              <h4 className="font-body font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <div className="space-y-3 text-sm">
                <a href="/shop" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Shop</a>
                <a href="/collections" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Collections</a>
                <a href="/about" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">About</a>
                <a href="/contact" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-body font-medium mb-6 uppercase tracking-wider text-sm">Customer Care</h4>
              <div className="space-y-3 text-sm">
                <a href="/shipping" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Shipping & Returns</a>
                <a href="/size-guide" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Size Guide</a>
                <a href="/care" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Care Instructions</a>
                <a href="/faq" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">FAQ</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-body font-medium mb-6 uppercase tracking-wider text-sm">Connect</h4>
              <div className="space-y-3 text-sm">
                <a href="#" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Instagram</a>
                <a href="#" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Twitter</a>
                <a href="#" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">Facebook</a>
                <a href="#" className="block text-cream-ivory/70 hover:text-cream-ivory transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cream-ivory/10 mt-16 pt-12 text-center">
            <p className="font-body text-sm text-cream-ivory/60">
              © 2024 Ashtonava. All rights reserved. • Privacy & Returns — 30 day money-back guarantee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Men;