'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Search, Heart, Star, Home, Grid3x3, Heart as HeartIcon, User, Trash2, ArrowLeft, Plus, Minus, ChevronRight } from 'lucide-react'

export default function EcommerceProApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState<any[]>([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      originalPrice: 129.99,
      discount: 38,
      rating: 4.8,
      reviews: 234,
      image: '🎧',
      category: 'electronics',
      description: 'Premium wireless headphones with noise cancellation',
      inStock: true,
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      originalPrice: 299.99,
      discount: 33,
      rating: 4.6,
      reviews: 189,
      image: '⌚',
      category: 'electronics',
      description: 'Advanced fitness tracking and notifications',
      inStock: true,
    },
    {
      id: 3,
      name: 'Casual T-Shirt',
      price: 29.99,
      originalPrice: 49.99,
      discount: 40,
      rating: 4.5,
      reviews: 456,
      image: '👕',
      category: 'clothing',
      description: 'Comfortable cotton t-shirt in multiple colors',
      inStock: true,
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 119.99,
      originalPrice: 179.99,
      discount: 33,
      rating: 4.9,
      reviews: 678,
      image: '👟',
      category: 'clothing',
      description: 'Professional running shoes with cushioning',
      inStock: true,
    },
    {
      id: 5,
      name: 'Coffee Maker',
      price: 89.99,
      originalPrice: 149.99,
      discount: 40,
      rating: 4.7,
      reviews: 345,
      image: '☕',
      category: 'home',
      description: 'Automatic coffee maker with timer',
      inStock: true,
    },
    {
      id: 6,
      name: 'Desk Lamp',
      price: 49.99,
      originalPrice: 89.99,
      discount: 44,
      rating: 4.4,
      reviews: 123,
      image: '💡',
      category: 'home',
      description: 'LED desk lamp with adjustable brightness',
      inStock: true,
    },
  ]

  const categories = [
    { id: 'all', name: 'All', emoji: '🛍️' },
    { id: 'electronics', name: 'Electronics', emoji: '📱' },
    { id: 'clothing', name: 'Clothing', emoji: '👕' },
    { id: 'home', name: 'Home', emoji: '🏠' },
  ]

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (product: any) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cart[index].id)
    } else {
      const newCart = [...cart]
      newCart[index].quantity = quantity
      setCart(newCart)
    }
  }

  const toggleFavorite = (productId: number) => {
    setFavorites(
      favorites.includes(productId)
        ? favorites.filter(id => id !== productId)
        : [...favorites, productId]
    )
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
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sticky top-0 z-10">
              <h1 className="text-2xl font-bold mb-4">ShopHub</h1>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-white/60" size={18} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>

            {/* Promo Banner */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="m-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 text-white text-center"
            >
              <p className="text-sm font-bold mb-1">🎉 Flash Sale</p>
              <p className="text-xs">Up to 50% off on selected items</p>
            </motion.div>

            {/* Categories */}
            <div className="px-4 flex gap-2 overflow-x-auto pb-4">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all font-medium text-sm ${
                    selectedCategory === cat.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.emoji} {cat.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="px-2 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => {
                      setSelectedProduct(product)
                      setCurrentPage('detail')
                    }}
                    className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-200"
                  >
                    {/* Product Image */}
                    <div className="bg-gray-200 p-3 text-center text-4xl relative">
                      {product.image}
                      {product.discount > 0 && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold">
                          -{product.discount}%
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-3">
                      <h3 className="font-bold text-gray-900 text-xs mb-1 truncate">{product.name}</h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-gray-600">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-orange-600 font-bold text-sm">${product.price}</span>
                        <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            addToCart(product)
                          }}
                          className="flex-1 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold hover:bg-orange-600 transition-all"
                        >
                          Add
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(product.id)
                          }}
                          className={`px-2 py-1 rounded transition-all ${
                            favorites.includes(product.id)
                              ? 'bg-red-100 text-red-500'
                              : 'bg-gray-100 text-gray-400 hover:text-red-500'
                          }`}
                        >
                          <Heart size={16} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Detail */}
        {currentPage === 'detail' && selectedProduct && (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-y-auto pb-24"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sticky top-0 z-10 flex items-center gap-3">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-white hover:text-gray-200"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-xl font-bold flex-1">Product Details</h2>
            </div>

            <div className="p-4">
              <div className="bg-white rounded-lg border border-gray-200 space-y-4">
                {/* Product Image */}
                <div className="bg-gray-200 rounded-lg p-8 text-center text-6xl">
                  {selectedProduct.image}
                </div>

                {/* Product Info */}
                <div className="px-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-sm text-gray-600">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                </div>

                {/* Price */}
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mx-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-bold text-orange-600">${selectedProduct.price}</span>
                    <span className="text-lg text-gray-400 line-through">${selectedProduct.originalPrice}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">-{selectedProduct.discount}%</span>
                  </div>
                </div>

                {/* Stock Status */}
                <div className={`rounded-lg p-3 text-center font-bold mx-4 ${
                  selectedProduct.inStock
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {selectedProduct.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </div>

                {/* Actions */}
                <div className="px-4 space-y-2 pb-4">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct)
                      setCurrentPage('home')
                    }}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleFavorite(selectedProduct.id)}
                    className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                      favorites.includes(selectedProduct.id)
                        ? 'bg-red-100 text-red-600 hover:bg-red-200'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Heart size={20} fill={favorites.includes(selectedProduct.id) ? 'currentColor' : 'none'} />
                    {favorites.includes(selectedProduct.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>
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
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sticky top-0 z-10">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
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
                    className="bg-white rounded-lg p-4 border border-gray-200 flex gap-3"
                  >
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-sm text-orange-600 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(idx, item.quantity - 1)}
                        className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="bg-gray-100 px-2 py-1 rounded text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(idx, item.quantity + 1)}
                        className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="font-bold text-gray-900">$9.99</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax</span>
                    <span className="font-bold text-gray-900">${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between text-sm font-bold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-orange-600">${(totalPrice + 9.99 + totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-all mt-4">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Favorites Page */}
        {currentPage === 'favorites' && (
          <motion.div
            key="favorites"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-y-auto pb-24"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sticky top-0 z-10">
              <h2 className="text-2xl font-bold">Favorites</h2>
            </div>

            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <HeartIcon size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No favorites yet</p>
              </div>
            ) : (
              <div className="px-2 pb-4 pt-4">
                <div className="grid grid-cols-2 gap-2">
                  {products
                    .filter(p => favorites.includes(p.id))
                    .map((product, idx) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-200"
                      >
                        <div className="bg-gray-200 p-3 text-center text-4xl">{product.image}</div>
                        <div className="p-3">
                          <h3 className="font-bold text-gray-900 text-xs mb-1 truncate">{product.name}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-orange-600 font-bold text-sm">${product.price}</span>
                            <button
                              onClick={() => toggleFavorite(product.id)}
                              className="text-red-500 hover:text-red-600 transition-all"
                            >
                              <Heart size={16} fill="currentColor" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
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
              ? 'text-orange-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Home size={24} />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button
          onClick={() => setCurrentPage('favorites')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
            currentPage === 'favorites'
              ? 'text-orange-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <HeartIcon size={24} />
          {favorites.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {favorites.length}
            </span>
          )}
          <span className="text-xs font-medium">Saved</span>
        </button>

        <button
          onClick={() => setCurrentPage('cart')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
            currentPage === 'cart'
              ? 'text-orange-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cart.length}
            </span>
          )}
          <span className="text-xs font-medium">Cart</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-gray-600 transition-all">
          <User size={24} />
          <span className="text-xs font-medium">Account</span>
        </button>
      </motion.div>
    </div>
  )
}
