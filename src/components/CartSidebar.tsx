import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { items, isOpen, toggleCart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (deliveryMethod === 'delivery' && !deliveryAddress.trim()) {
      alert("Please enter a delivery address.");
      return;
    }

    const orderItems = items.map(item => `${item.quantity}x ${item.name} (${item.price})`).join('\n');
    const deliveryText = deliveryMethod === 'delivery' 
      ? `*Delivery Method:* Delivery\n*Delivery Address:* ${deliveryAddress}`
      : `*Delivery Method:* Pickup`;

    const text = `Hello Cakes by Kendraville! I would like to place an order from my cart:

${orderItems}

*Total:* ₦${cartTotal.toLocaleString()}

${deliveryText}

Please let me know how to proceed with payment.`;
    
    const url = `https://wa.me/2348062968551?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    toggleCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-brand-500" />
                Your Cart
              </h2>
              <button onClick={toggleCart} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 mt-20">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-200" />
                  <p>Your cart is empty</p>
                  <button onClick={toggleCart} className="mt-6 text-brand-600 font-medium hover:underline">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-6 relative group">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start pr-6">
                        <h3 className="font-medium text-gray-900 line-clamp-2 leading-tight">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)} className="absolute right-0 top-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors" title="Remove item">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-brand-600 font-mono text-sm mt-1">{item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full border border-gray-200 hover:bg-gray-50">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-4 text-center font-medium font-mono">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full border border-gray-200 hover:bg-gray-50">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 text-sm">Delivery Method</h4>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="deliveryMethod" 
                        value="pickup"
                        checked={deliveryMethod === 'pickup'}
                        onChange={() => setDeliveryMethod('pickup')}
                        className="text-brand-500 focus:ring-brand-500 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-gray-700 font-medium text-sm">Pickup</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="deliveryMethod" 
                        value="delivery"
                        checked={deliveryMethod === 'delivery'}
                        onChange={() => setDeliveryMethod('delivery')}
                        className="text-brand-500 focus:ring-brand-500 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-gray-700 font-medium text-sm">Delivery</span>
                    </label>
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <textarea 
                      placeholder="Enter your full delivery address..."
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none"
                      rows={2}
                    />
                  )}
                </div>

                <div className="flex justify-between items-center mt-2 px-1">
                  <span className="font-medium text-gray-600">Estimated Total</span>
                  <span className="text-2xl font-bold font-mono text-brand-800">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
                <button onClick={handleCheckout} className="w-full block text-center bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-lg">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
