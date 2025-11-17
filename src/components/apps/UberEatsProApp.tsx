'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Clock, Star, ChevronRight, ShoppingCart, Plus, Minus, X as XIcon, Bike, DollarSign } from 'lucide-react'

export default function UberEatsProApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null)

  const restaurants = [
    {
      id: 1,
      name: 'Burger Palace',
      rating: 4.8,
      deliveryTime: '25-35 min',
      distance: '2.5 km',
      deliveryFee: '$2.99',
      image: '🍔',
      category: 'Burgers',
      color: 'from-orange-500 to-red-500',
      items: [
        { id: 1, name: 'Classic Burger', price: 9.99, description: 'Beef, lettuce, tomato' },
        { id: 2, name: 'Cheese Burger', price: 11.99, description: 'Double cheese, beef' },
        { id: 3, name: 'Bacon Burger', price: 13.99, description: 'Bacon, cheese, beef' },
      ],
    },
    {
      id: 2,
      name: 'Pizza Express',
      rating: 4.9,
      deliveryTime: '30-40 min',
      distance: '3.2 km',
      deliveryFee: '$3.99',
      image: '🍕',
      category: 'Pizza',
      color: 'from-red-500 to-orange-500',
      items: [
        { id: 1, name: 'Margherita', price: 12.99, description: 'Mozzarella, basil' },
        { id: 2, name: 'Pepperoni', price: 14.99, description: 'Pepperoni, cheese' },
        { id: 3, name: 'Quattro Formaggi', price: 15.99, description: '4 cheeses' },
      ],
    },
    {
      id: 3,
      name: 'Sushi Master',
      rating: 4.7,
      deliveryTime: '35-45 min',
      distance: '4.1 km',
      deliveryFee: '$4.99',
      image: '🍣',
      category: 'Sushi',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { id: 1, name: 'California Roll', price: 13.99, description: 'Crab, avocado' },
        { id: 2, name: 'Dragon Roll', price: 16.99, description: 'Eel, avocado' },
        { id: 3, name: 'Rainbow Roll', price: 18.99, description: 'Mixed fish' },
      ],
    },
  ]

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const addToCart = (item: any, restaurantName: string) => {
    const existingItem = cart.find(c => c.id === item.id && c.restaurantName === restaurantName)
    if (existingItem) {
      setCart(cart.map(c => c.id === item.id && c.restaurantName === restaurantName ? { ...c, quantity: c.quantity + 1 } : c))
    } else {
      setCart([...cart, { ...item, restaurantName, quantity: 1 }])
    }
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index)
    } else {
      const newCart = [...cart]
      newCart[index].quantity = quantity
      setCart(newCart)
    }
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="w-full h-full bg-white">
      <AnimatePresence mode="wait">
        {/* Home Page */}
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-y-auto pb-24"
          >
            {/* Header */}
            <div className="bg-white sticky top-0 z-20 pt-4 px-4 pb-3">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-black">Uber Eats</h1>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">👤</div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search restaurants"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            {/* Offers Banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-4"
            >
              <div className="bg-gradient-to-r from-black to-gray-800 rounded-lg p-4 text-white">
                <p className="text-sm font-bold mb-1">Special Offers</p>
                <p className="text-xs text-gray-300">Get 30% off on your first order</p>
              </div>
            </motion.div>

            {/* Restaurants */}
            <div className="px-4 space-y-3 pb-4">
              {filteredRestaurants.map((restaurant, idx) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    setSelectedRestaurant(restaurant)
                    setCurrentPage('restaurant')
                  }}
                  className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-200"
                >
                  {/* Restaurant Image */}
                  <div className={`bg-gradient-to-br ${restaurant.color} h-32 flex items-center justify-center text-5xl`}>
                    {restaurant.image}
                  </div>

                  {/* Restaurant Info */}
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-black text-sm">{restaurant.name}</h3>
                        <p className="text-xs text-gray-500">{restaurant.category}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded">
                        <Star size={12} className="fill-white" />
                        <span className="text-xs font-bold">{restaurant.rating}</span>
                      </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="flex gap-3 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {restaurant.deliveryTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        {restaurant.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bike size={12} />
                        {restaurant.deliveryFee}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Restaurant Page */}
        {currentPage === 'restaurant' && selectedRestaurant && (
          <motion.div
            key="restaurant"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-y-auto pb-24"
          >
            {/* Restaurant Header */}
            <div className={`bg-gradient-to-br ${selectedRestaurant.color} h-40 flex items-end justify-between p-4 text-white relative`}>
              <button
                onClick={() => setCurrentPage('home')}
                className="absolute top-4 left-4 bg-white text-black p-2 rounded-full hover:bg-gray-200"
              >
                ←
              </button>
              <div>
                <h2 className="text-2xl font-bold">{selectedRestaurant.name}</h2>
                <p className="text-sm text-white/80">{selectedRestaurant.deliveryTime}</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-black text-lg mb-4">Menu</h3>
              {selectedRestaurant.items.map((item: any, idx: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-lg p-4 border border-gray-200 flex justify-between items-start"
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500 mb-2">{item.description}</p>
                    <p className="font-bold text-black text-sm">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => addToCart(item, selectedRestaurant.name)}
                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-all ml-3"
                  >
                    +
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Cart Page */}
        {currentPage === 'cart' && (
          <motion.div
            key="cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-y-auto pb-24"
          >
            <div className="bg-white sticky top-0 z-10 p-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-black">Your Cart</h2>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="p-4 space-y-3">
                {cart.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-black text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.restaurantName}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <XIcon size={18} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(idx, item.quantity - 1)}
                          className="bg-gray-100 text-black p-1 rounded hover:bg-gray-200"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="bg-gray-100 px-3 py-1 rounded text-sm font-bold text-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(idx, item.quantity + 1)}
                          className="bg-gray-100 text-black p-1 rounded hover:bg-gray-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="font-bold text-black text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-black">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Delivery</span>
                    <span className="font-bold text-black">$2.99</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between text-sm font-bold">
                    <span className="text-black">Total</span>
                    <span className="text-black">${(totalPrice + 2.99).toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition-all mt-4">
                  Place Order
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3"
      >
        <button
          onClick={() => setCurrentPage('home')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'home'
              ? 'text-black'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="text-xl">🏠</span>
          <span className="text-xs font-medium">Home</span>
        </button>

        <button
          onClick={() => setCurrentPage('cart')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
            currentPage === 'cart'
              ? 'text-black'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <ShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cart.length}
            </span>
          )}
          <span className="text-xs font-medium">Cart</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-gray-600 transition-all">
          <span className="text-xl">❤️</span>
          <span className="text-xs font-medium">Saved</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-gray-600 transition-all">
          <span className="text-xl">👤</span>
          <span className="text-xs font-medium">Account</span>
        </button>
      </motion.div>
    </div>
  )
}
