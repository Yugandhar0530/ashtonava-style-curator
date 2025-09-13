import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({ quantity, onQuantityChange, min = 1, max = 99 }: QuantitySelectorProps) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border border-deep-charcoal/20 rounded-lg overflow-hidden bg-cream-ivory">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="h-10 w-10 hover:bg-deep-charcoal/5 disabled:opacity-30"
      >
        <Minus className="w-4 h-4" />
      </Button>
      
      <div className="px-4 py-2 min-w-[3rem] text-center font-body font-medium text-deep-charcoal">
        {quantity}
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="h-10 w-10 hover:bg-deep-charcoal/5 disabled:opacity-30"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default QuantitySelector;