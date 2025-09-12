import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import pinkShirt from "@/assets/pink-shirt.jpg";
import whiteShirt from "@/assets/white-shirt.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "PREMIUM LINEN COTTON SHIRT",
      subtitle: "Tailored Comfort — Everyday Elegance",
      price: 649,
      image: pinkShirt,
      size: "L",
      color: "Pink",
      quantity: 1,
    },
    {
      id: "2",
      name: "CLASSIC WHITE SHIRT",
      subtitle: "Timeless Essential — Professional Comfort",
      price: 599,
      image: whiteShirt,
      size: "M",
      color: "White",
      quantity: 2,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "ashtonava10") {
      setAppliedPromo(promoCode);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const shipping = subtotal > 1500 ? 0 : 99;
  const total = subtotal - discount + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background font-body">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="bg-soft-lilac rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-mid-plum" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-deep-plum mb-4">
              Your Cart is Empty
            </h1>
            <p className="font-body text-lg text-mid-plum mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>
            <Button 
              variant="premium-primary" 
              size="lg"
              onClick={() => window.location.href = "/collections"}
            >
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Header */}
      <section className="py-8 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-deep-plum">
            Shopping Cart
          </h1>
          <p className="font-body text-mid-plum mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-32 h-32 bg-soft-lilac rounded-lg overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-body font-semibold text-sm text-deep-plum tracking-wider uppercase">
                            {item.name}
                          </h3>
                          <p className="font-display text-lg text-accent-black">
                            {item.subtitle}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-mid-plum hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="text-sm text-mid-plum">
                          <p>Size: <span className="font-medium text-accent-black">{item.size}</span></p>
                          <p>Color: <span className="font-medium text-accent-black">{item.color}</span></p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="size-pill"
                              size="icon"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="font-body font-medium text-accent-black w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="size-pill"
                              size="icon"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-body font-semibold text-lg text-accent-black">
                              ₹ {(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-body font-semibold text-lg text-deep-plum mb-4">
                  Promo Code
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-mid-plum"
                  />
                  <Button 
                    variant="premium-secondary" 
                    size="sm"
                    onClick={applyPromoCode}
                  >
                    Apply
                  </Button>
                </div>
                {appliedPromo && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ Promo code "{appliedPromo}" applied (10% off)
                  </p>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-body font-semibold text-lg text-deep-plum mb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-mid-plum">Subtotal</span>
                    <span className="font-medium">₹ {subtotal.toLocaleString()}</span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-₹ {discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-mid-plum">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `₹ ${shipping}`}
                    </span>
                  </div>
                  
                  {shipping === 0 && (
                    <p className="text-xs text-green-600">
                      ✓ Free shipping on orders over ₹1,500
                    </p>
                  )}
                  
                  <hr className="border-lavender" />
                  
                  <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>₹ {total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  variant="premium-primary" 
                  size="lg" 
                  className="w-full mt-6"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-mid-plum">
                    <span>🔒</span>
                    <span>Secure checkout • 30-day returns • Free exchanges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;