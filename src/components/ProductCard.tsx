import { useState } from "react";
import { Heart, ShoppingCart, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import QuantitySelector from "./QuantitySelector";

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
  const [selectedColor, setSelectedColor] = useState<string>(colors[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
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

    setShowQuantitySelector(true);
  };

  const handleAddToCart = () => {
    addToCart({ id, name, subtitle, price, image, colors }, selectedSize, selectedColor, quantity);
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${name} has been added to your cart`,
    });
    setShowQuantitySelector(false);
    setQuantity(1);
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-warm-gold/10">
      {isNewArrival && (
        <div className="absolute top-4 left-4 z-10 bg-warm-gold text-deep-charcoal px-3 py-1 text-xs font-body font-bold uppercase tracking-wider">
          NEW
        </div>
      )}
      
      <div className="aspect-square overflow-hidden bg-soft-pearl">
        <img 
          src={image} 
          alt={`${name} - ${subtitle}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-body font-medium text-xs text-rich-burgundy tracking-widest uppercase mb-2">
            {name}
          </h3>
          <p className="font-display text-lg text-deep-charcoal mb-3 font-light">
            {subtitle}
          </p>
          <div className="w-6 h-0.5 bg-warm-gold mb-3"></div>
          <p className="font-body font-semibold text-xl text-deep-charcoal">
            ₹ {price}/-
          </p>
        </div>

        {/* Color Selection */}
        {colors.length > 0 && (
          <div className="mb-4">
            <p className="font-body text-xs text-rich-burgundy mb-2 uppercase tracking-wider font-medium">Color:</p>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer hover:scale-110 transition-all duration-200 ${
                    selectedColor === color 
                      ? 'border-warm-gold shadow-md' 
                      : 'border-deep-charcoal/20 hover:border-warm-gold/50'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size Selection */}
        {sizes.length > 0 && (
          <div className="mb-6">
            <p className="font-body text-xs text-rich-burgundy mb-2 uppercase tracking-wider font-medium">Size:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "size-pill-active" : "size-pill"}
                  size="pill"
                  onClick={() => setSelectedSize(size)}
                  className="text-xs min-w-[2.5rem]"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        {showQuantitySelector && (
          <div className="mb-6">
            <p className="font-body text-xs text-rich-burgundy mb-2 uppercase tracking-wider font-medium">Quantity:</p>
            <QuantitySelector 
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {!showQuantitySelector ? (
            <Button 
              variant="luxury-primary" 
              size="sm" 
              className="flex-1"
              disabled={sizes.length > 0 && !selectedSize}
              onClick={handleBuyNow}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              BUY NOW
            </Button>
          ) : (
            <>
              <Button 
                variant="luxury-primary" 
                size="sm" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {setShowQuantitySelector(false); setQuantity(1);}}
                className="text-rich-burgundy hover:text-deep-charcoal"
              >
                Cancel
              </Button>
            </>
          )}
          
          {!showQuantitySelector && (
            <Button
              variant={isWishlisted ? "luxury-secondary" : "ghost"}
              size="icon"
              className="shrink-0"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart 
                className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`}
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;