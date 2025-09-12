import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  sizes: string[];
  colors?: string[];
  isNewArrival?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  subtitle, 
  price, 
  image, 
  sizes, 
  colors = [], 
  isNewArrival = false 
}: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleBuyNow = () => {
    if (sizes.length > 0 && !selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    addToCart({ id, name, subtitle, price, image, colors }, selectedSize, colors[0]);
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
      {isNewArrival && (
        <div className="absolute top-4 left-4 z-10 bg-deep-plum text-pure-white px-2 py-1 rounded-full text-xs font-body font-medium">
          NEW
        </div>
      )}
      
      <div className="aspect-square overflow-hidden bg-soft-lilac">
        <img 
          src={image} 
          alt={`${name} - ${subtitle}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-body font-semibold text-xs text-deep-plum tracking-wider uppercase mb-1">
            {name}
          </h3>
          <p className="font-display text-lg text-accent-black mb-2">
            {subtitle}
          </p>
          <p className="font-body font-semibold text-lg text-accent-black">
            ₹ {price}/-
          </p>
        </div>

        {/* Size Selection */}
        {sizes.length > 0 && (
          <div className="mb-4">
            <p className="font-body text-sm text-mid-plum mb-2">Size:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "size-pill-active" : "size-pill"}
                  size="pill"
                  onClick={() => setSelectedSize(size)}
                  className="text-xs"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {colors.length > 0 && (
          <div className="mb-4">
            <p className="font-body text-sm text-mid-plum mb-2">Color:</p>
            <div className="flex gap-2">
              {colors.map((color, index) => (
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
            disabled={sizes.length > 0 && !selectedSize}
            onClick={handleBuyNow}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            BUY NOW
          </Button>
          <Button
            variant={isWishlisted ? "premium-secondary" : "ghost"}
            size="icon"
            className="shrink-0"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;