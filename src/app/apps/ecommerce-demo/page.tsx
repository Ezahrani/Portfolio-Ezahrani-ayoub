'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Search, Heart, Star, Home, Grid3x3, Heart as HeartIcon, User, Trash2 } from 'lucide-react'

export default function EcommerceDemoApp() {
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
      rating: 4.4,
      reviews: 123,
      image: '💡',
      category: 'home',
      description: 'LED desk lamp with adjustable brightness',
      inStock: true,
    },
  ]

  const categories = [
    { id: 'all', name: 'Tous', emoji: '🛍️' },
    { id: 'electronics', name: 'Électronique', emoji: '📱' },
    { id: 'clothing', name: 'Vêtements', emoji: '👕' },
    { id: 'home', name: 'Maison', emoji: '🏠' },
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

  const toggleFavorite = (productId: number) => {
    setFavorites(
      favorites.includes(productId)
        ? favorites.filter(id => id !== productId)
        : [...favorites, productId]
    )
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-black text-white">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/80 backdrop-blur-md sticky top-0 z-40 border-b border-amber-500/20"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-400">🛍️ ShopHub</div>
          <div className="flex gap-2">
            {cart.length > 0 && (
              <div className="bg-amber-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
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
                  placeholder="Rechercher produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500 text-black font-bold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {cat.emoji} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="px-4 pb-4">
              <div className="grid grid-cols-2 gap-3">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => {
                      setSelectedProduct(product)
                      setCurrentPage('detail')
                    }}
                    className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-amber-500/20 transition-all border border-gray-700 hover:border-amber-500/50"
                  >
                    <div className="bg-gray-700 p-4 text-center text-4xl">{product.image}</div>
                    <div className="p-3">
                      <h3 className="font-bold text-white text-sm mb-1 truncate">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs text-gray-400">{product.rating}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-400 font-bold">${product.price}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(product.id)
                          }}
                          className={`transition-all ${
                            favorites.includes(product.id)
                              ? 'text-red-500'
                              : 'text-gray-400 hover:text-red-500'
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            <div className="p-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-amber-400 hover:text-amber-300 transition-colors mb-4"
              >
                ← Retour
              </button>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 space-y-4">
                {/* Product Image */}
                <div className="bg-gray-700 rounded-lg p-8 text-center text-6xl">
                  {selectedProduct.image}
                </div>

                {/* Product Info */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(selectedProduct.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({selectedProduct.reviews} avis)</span>
                  </div>
                  <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
                </div>

                {/* Price */}
                <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/30">
                  <p className="text-gray-400 text-sm mb-1">Prix</p>
                  <p className="text-3xl font-bold text-amber-400">${selectedProduct.price}</p>
                </div>

                {/* Stock Status */}
                <div className={`rounded-lg p-3 text-center font-bold ${
                  selectedProduct.inStock
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {selectedProduct.inStock ? '✓ En stock' : '✗ Rupture de stock'}
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct)
                      setCurrentPage('home')
                    }}
                    className="w-full bg-amber-500 text-black py-3 rounded-lg font-bold hover:bg-amber-600 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={20} />
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => toggleFavorite(selectedProduct.id)}
                    className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                      favorites.includes(selectedProduct.id)
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <Heart size={20} fill={favorites.includes(selectedProduct.id) ? 'currentColor' : 'none'} />
                    {favorites.includes(selectedProduct.id) ? 'Aimé' : 'Ajouter aux favoris'}
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
                      className="bg-gray-800 rounded-lg p-4 flex gap-3 border border-gray-700"
                    >
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{item.name}</h4>
                        <p className="text-sm text-amber-400 font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-700 px-2 py-1 rounded text-sm">
                          x{item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500/20 text-red-400 px-2 py-1 rounded hover:bg-red-500/40 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {/* Summary */}
                  <div className="bg-gray-800 rounded-lg p-4 border-2 border-amber-500/50 mt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Sous-total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Livraison</span>
                      <span>$9.99</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Taxe</span>
                      <span>${(totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex justify-between items-center font-bold text-lg">
                      <span>Total</span>
                      <span className="text-amber-400">${(totalPrice + 9.99 + totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-amber-500 text-black py-3 rounded-lg font-bold hover:bg-amber-600 transition-all mt-4">
                    Procéder au paiement
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Favorites Page */}
        {currentPage === 'favorites' && (
          <motion.div
            key="favorites"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Favoris</h2>

              {favorites.length === 0 ? (
                <div className="text-center py-12">
                  <HeartIcon size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">Aucun favori pour le moment</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {products
                    .filter(p => favorites.includes(p.id))
                    .map((product, idx) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-amber-500/20 transition-all border border-gray-700 hover:border-amber-500/50"
                      >
                        <div className="bg-gray-700 p-4 text-center text-4xl">{product.image}</div>
                        <div className="p-3">
                          <h3 className="font-bold text-white text-sm mb-1 truncate">{product.name}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-amber-400 font-bold">${product.price}</span>
                            <button
                              onClick={() => toggleFavorite(product.id)}
                              className="text-red-500 hover:text-red-400 transition-all"
                            >
                              <Heart size={16} fill="currentColor" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
        className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-amber-500/20"
      >
        <div className="flex justify-around items-center py-3">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentPage === 'home'
                ? 'text-amber-400 bg-amber-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Accueil</span>
          </button>

          <button
            onClick={() => setCurrentPage('favorites')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
              currentPage === 'favorites'
                ? 'text-amber-400 bg-amber-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <HeartIcon size={24} />
            {favorites.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
            <span className="text-xs">Favoris</span>
          </button>

          <button
            onClick={() => setCurrentPage('cart')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
              currentPage === 'cart'
                ? 'text-amber-400 bg-amber-500/10'
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
            <User size={24} />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
