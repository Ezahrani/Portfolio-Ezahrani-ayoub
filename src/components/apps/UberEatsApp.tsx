'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, MapPin, Clock, Star, Search, Home, User, Heart, ArrowLeft, Plus, Minus } from 'lucide-react'

export default function UberEatsApp() {
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

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter((_, i) => i !== itemId))
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
    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100">
      <AnimatePresence mode="wait">
        {/* Home Page */}
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full h-full overflow-y-auto pb-20"
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
              <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">🍔 UberEats</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Restaurants */}
            <div className="p-4 space-y-3">
              {filteredRestaurants.map((restaurant, idx) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    setSelectedRestaurant(restaurant)
                    setCurrentPage('restaurant')
                  }}
                  className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex gap-3 mb-2">
                    <div className="text-4xl">{restaurant.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{restaurant.name}</h3>
                      <p className="text-sm text-gray-500">{restaurant.category}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold">{restaurant.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
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
            className="w-full h-full overflow-y-auto pb-20"
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4 flex items-center gap-3">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-red-500 hover:text-red-600"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="text-3xl">{selectedRestaurant.image}</div>
              <div>
                <h2 className="font-bold text-gray-900">{selectedRestaurant.name}</h2>
                <p className="text-sm text-gray-500">{selectedRestaurant.deliveryTime}</p>
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
                  className="bg-white rounded-lg p-4 flex justify-between items-center border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{item.image}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-red-500 font-bold">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item, selectedRestaurant.name)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-all"
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
            className="w-full h-full overflow-y-auto pb-20"
          >
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4">
              <h2 className="text-2xl font-bold text-gray-900">Panier</h2>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Votre panier est vide</p>
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
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.restaurantName}</p>
                      </div>
                      <p className="text-sm text-red-500 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(idx, item.quantity - 1)}
                        className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="bg-gray-100 px-3 py-1 rounded text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(idx, item.quantity + 1)}
                        className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="ml-auto bg-red-100 text-red-500 px-3 py-1 rounded text-sm font-bold hover:bg-red-200"
                      >
                        Supprimer
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Total */}
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Livraison</span>
                    <span className="font-bold">$2.99</span>
                  </div>
                  <div className="border-t border-red-200 pt-2 flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span className="text-red-500">${(totalPrice + 2.99).toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-all mt-4">
                  Confirmer la commande
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
              ? 'text-red-500 bg-red-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Accueil</span>
        </button>

        <button
          onClick={() => setCurrentPage('cart')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
            currentPage === 'cart'
              ? 'text-red-500 bg-red-50'
              : 'text-gray-500 hover:text-gray-700'
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

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 transition-all">
          <Heart size={24} />
          <span className="text-xs">Favoris</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 transition-all">
          <User size={24} />
          <span className="text-xs">Profil</span>
        </button>
      </motion.div>
    </div>
  )
}
