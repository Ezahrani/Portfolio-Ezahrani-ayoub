'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, MapPin, Clock, Star, Search, Menu, Home, User, Heart } from 'lucide-react'

export default function UberEatsDemoApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null)

  const restaurants = [
    {
      id: 1,
      name: 'Pizza Palace',
      rating: 4.8,
      deliveryTime: '25-35 min',
      distance: '2.5 km',
      image: '🍕',
      category: 'Pizza',
      items: [
        { id: 1, name: 'Margherita', price: 12.99, image: '🍕' },
        { id: 2, name: 'Pepperoni', price: 14.99, image: '🍕' },
        { id: 3, name: 'Quatre Fromages', price: 15.99, image: '🧀' },
      ],
    },
    {
      id: 2,
      name: 'Burger House',
      rating: 4.6,
      deliveryTime: '20-30 min',
      distance: '1.8 km',
      image: '🍔',
      category: 'Burgers',
      items: [
        { id: 1, name: 'Classic Burger', price: 9.99, image: '🍔' },
        { id: 2, name: 'Cheese Burger', price: 11.99, image: '🍔' },
        { id: 3, name: 'Double Burger', price: 14.99, image: '🍔' },
      ],
    },
    {
      id: 3,
      name: 'Sushi Master',
      rating: 4.9,
      deliveryTime: '30-40 min',
      distance: '3.2 km',
      image: '🍣',
      category: 'Sushi',
      items: [
        { id: 1, name: 'California Roll', price: 13.99, image: '🍣' },
        { id: 2, name: 'Dragon Roll', price: 16.99, image: '🍣' },
        { id: 3, name: 'Rainbow Roll', price: 18.99, image: '🍣' },
      ],
    },
    {
      id: 4,
      name: 'Taco Fiesta',
      rating: 4.7,
      deliveryTime: '15-25 min',
      distance: '1.2 km',
      image: '🌮',
      category: 'Mexican',
      items: [
        { id: 1, name: 'Taco Al Pastor', price: 8.99, image: '🌮' },
        { id: 2, name: 'Burrito Supreme', price: 12.99, image: '🌯' },
        { id: 3, name: 'Quesadilla', price: 10.99, image: '🧀' },
      ],
    },
  ]

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const addToCart = (item: any, restaurantName: string) => {
    const existingItem = cart.find(
      c => c.id === item.id && c.restaurantName === restaurantName
    )
    if (existingItem) {
      setCart(
        cart.map(c =>
          c.id === item.id && c.restaurantName === restaurantName
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      )
    } else {
      setCart([...cart, { ...item, restaurantName, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter((_, i) => i !== itemId))
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/80 backdrop-blur-md sticky top-0 z-40 border-b border-accent/20"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-accent">🍔 UberEats</div>
          <div className="flex gap-2">
            {cart.length > 0 && (
              <div className="bg-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {cart.length}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Home Page */}
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            {/* Search Bar */}
            <div className="p-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher restaurants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={16} className="text-accent" />
                <span>123 Rue de la Paix, Paris</span>
              </div>
            </div>

            {/* Restaurants Grid */}
            <div className="px-4 space-y-3">
              {filteredRestaurants.map((restaurant, idx) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    setSelectedRestaurant(restaurant)
                    setCurrentPage('restaurant')
                  }}
                  className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-all border border-gray-700 hover:border-accent/50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{restaurant.image}</div>
                      <div>
                        <h3 className="font-bold text-white">{restaurant.name}</h3>
                        <p className="text-sm text-gray-400">{restaurant.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-accent/20 px-2 py-1 rounded">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-sm font-bold">{restaurant.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {restaurant.deliveryTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      {restaurant.distance}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            {/* Back Button */}
            <div className="p-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                ← Retour
              </button>
            </div>

            {/* Restaurant Header */}
            <div className="px-4 py-4 bg-gray-800/50 border-b border-gray-700">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">{selectedRestaurant.image}</div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedRestaurant.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Star size={14} className="text-accent fill-accent" />
                    <span className="text-sm">{selectedRestaurant.rating}</span>
                    <span className="text-sm text-gray-400">• {selectedRestaurant.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-3">
              {selectedRestaurant.items.map((item: any, idx: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-800 rounded-lg p-4 flex justify-between items-center border border-gray-700 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{item.image}</div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-accent font-bold">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item, selectedRestaurant.name)}
                    className="bg-accent text-black px-4 py-2 rounded-lg font-bold hover:bg-accent/80 transition-all"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Panier</h2>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">Votre panier est vide</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gray-800 rounded-lg p-4 flex justify-between items-center border border-gray-700"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.restaurantName}</p>
                        <p className="text-sm text-accent font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-700 px-2 py-1 rounded text-sm">
                          x{item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="bg-red-500/20 text-red-400 px-3 py-1 rounded hover:bg-red-500/40 transition-all"
                        >
                          ✕
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {/* Total */}
                  <div className="bg-gray-800 rounded-lg p-4 border-2 border-accent/50 mt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400">Sous-total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400">Livraison</span>
                      <span>$2.99</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex justify-between items-center font-bold text-lg">
                      <span>Total</span>
                      <span className="text-accent">${(totalPrice + 2.99).toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-accent text-black py-3 rounded-lg font-bold hover:bg-accent/80 transition-all mt-4">
                    Confirmer la commande
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-accent/20"
      >
        <div className="flex justify-around items-center py-3">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentPage === 'home'
                ? 'text-accent bg-accent/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Accueil</span>
          </button>

          <button
            onClick={() => setCurrentPage('cart')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
              currentPage === 'cart'
                ? 'text-accent bg-accent/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
            <span className="text-xs">Panier</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-white transition-all">
            <Heart size={24} />
            <span className="text-xs">Favoris</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-white transition-all">
            <User size={24} />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
