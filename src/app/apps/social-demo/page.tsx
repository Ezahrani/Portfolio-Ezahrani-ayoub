'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Share2, Search, Home, MessageSquare, Compass, User, Plus } from 'lucide-react'

export default function SocialNetworkDemoApp() {
  const [currentPage, setCurrentPage] = useState('feed')
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex Johnson',
      avatar: '👨‍💼',
      timestamp: 'Il y a 2h',
      content: 'Juste lancé mon nouveau projet! 🚀',
      image: '📸',
      likes: 234,
      comments: 45,
      liked: false,
    },
    {
      id: 2,
      author: 'Sarah Design',
      avatar: '👩‍🎨',
      timestamp: 'Il y a 4h',
      content: 'Nouveau design UI pour mon portfolio',
      image: '🎨',
      likes: 567,
      comments: 89,
      liked: false,
    },
    {
      id: 3,
      author: 'Dev Master',
      avatar: '👨‍💻',
      timestamp: 'Il y a 6h',
      content: 'React 19 est incroyable! Qui l\'utilise déjà?',
      image: '⚛️',
      likes: 892,
      comments: 156,
      liked: false,
    },
  ])
  const [newPost, setNewPost] = useState('')
  const [selectedChat, setSelectedChat] = useState<any>(null)

  const chats = [
    { id: 1, name: 'Alex Johnson', avatar: '👨‍💼', lastMessage: 'Salut! Comment ça va?', unread: 2 },
    { id: 2, name: 'Sarah Design', avatar: '👩‍🎨', lastMessage: 'Tu as vu mon dernier post?', unread: 0 },
    { id: 3, name: 'Dev Master', avatar: '👨‍💻', lastMessage: 'On se fait un café?', unread: 1 },
  ]

  const handleLike = (postId: number) => {
    setPosts(
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    )
  }

  const handlePostCreate = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'Vous',
        avatar: '👤',
        timestamp: 'À l\'instant',
        content: newPost,
        image: '📝',
        likes: 0,
        comments: 0,
        liked: false,
      }
      setPosts([post, ...posts])
      setNewPost('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/80 backdrop-blur-md sticky top-0 z-40 border-b border-purple-500/20"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-400">👥 SocialHub</div>
          <Search className="text-gray-400 cursor-pointer hover:text-white transition-colors" size={24} />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Feed Page */}
        {currentPage === 'feed' && (
          <motion.div
            key="feed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            {/* Create Post */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-b border-purple-500/20"
            >
              <div className="flex gap-3 mb-3">
                <div className="text-2xl">👤</div>
                <input
                  type="text"
                  placeholder="À quoi pensez-vous?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handlePostCreate}
                  disabled={!newPost.trim()}
                  className="bg-purple-500 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Publier
                </button>
              </div>
            </motion.div>

            {/* Posts Feed */}
            <div className="space-y-4 p-4">
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all overflow-hidden"
                >
                  {/* Post Header */}
                  <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{post.avatar}</div>
                        <div>
                          <h4 className="font-bold text-white">{post.author}</h4>
                          <p className="text-xs text-gray-400">{post.timestamp}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-white transition-colors">⋯</button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-4">
                    <p className="text-white mb-3">{post.content}</p>
                    <div className="text-5xl mb-3 text-center">{post.image}</div>
                  </div>

                  {/* Post Stats */}
                  <div className="px-4 py-2 border-y border-gray-800 text-xs text-gray-400 flex justify-between">
                    <span>{post.likes} J'aime</span>
                    <span>{post.comments} Commentaires</span>
                  </div>

                  {/* Post Actions */}
                  <div className="p-4 flex justify-around">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-all ${
                        post.liked
                          ? 'text-red-500 bg-red-500/10'
                          : 'text-gray-400 hover:text-red-500 hover:bg-red-500/10'
                      }`}
                    >
                      <Heart size={20} fill={post.liked ? 'currentColor' : 'none'} />
                      <span className="text-sm">{post.likes}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 py-2 px-4 rounded-lg transition-all">
                      <MessageCircle size={20} />
                      <span className="text-sm">{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 hover:bg-green-500/10 py-2 px-4 rounded-lg transition-all">
                      <Share2 size={20} />
                      <span className="text-sm">Partager</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Messages Page */}
        {currentPage === 'messages' && !selectedChat && (
          <motion.div
            key="messages"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            <div className="p-4 space-y-3">
              <h2 className="text-xl font-bold mb-4">Messages</h2>
              {chats.map((chat, idx) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedChat(chat)}
                  className="bg-gray-900 rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition-all border border-gray-800 hover:border-purple-500/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-3xl">{chat.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{chat.name}</h4>
                      <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                    </div>
                  </div>
                  {chat.unread > 0 && (
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {chat.unread}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Chat Detail */}
        {currentPage === 'messages' && selectedChat && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20 flex flex-col h-screen"
          >
            {/* Chat Header */}
            <div className="bg-gray-900 border-b border-gray-800 p-4 flex items-center gap-3">
              <button
                onClick={() => setSelectedChat(null)}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                ←
              </button>
              <div className="text-2xl">{selectedChat.avatar}</div>
              <h3 className="font-bold text-white flex-1">{selectedChat.name}</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-800 rounded-lg px-4 py-2 max-w-xs">
                  <p className="text-white text-sm">{selectedChat.lastMessage}</p>
                  <p className="text-xs text-gray-400 mt-1">Il y a 5 min</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-purple-600 rounded-lg px-4 py-2 max-w-xs">
                  <p className="text-white text-sm">Salut! Ça va bien?</p>
                  <p className="text-xs text-purple-200 mt-1">À l'instant</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="bg-gray-900 border-t border-gray-800 p-4 flex gap-2">
              <input
                type="text"
                placeholder="Votre message..."
                className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all">
                Envoyer
              </button>
            </div>
          </motion.div>
        )}

        {/* Explore Page */}
        {currentPage === 'explore' && (
          <motion.div
            key="explore"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Découvrir</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🚀', title: 'Technologie', count: '12.5K' },
                  { emoji: '🎨', title: 'Design', count: '8.3K' },
                  { emoji: '📱', title: 'Mobile', count: '6.7K' },
                  { emoji: '🎬', title: 'Vidéo', count: '15.2K' },
                  { emoji: '🎵', title: 'Musique', count: '9.1K' },
                  { emoji: '🍕', title: 'Food', count: '11.4K' },
                ].map((trend, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-all"
                  >
                    <div className="text-4xl mb-2">{trend.emoji}</div>
                    <h4 className="font-bold text-white">{trend.title}</h4>
                    <p className="text-sm text-purple-200">{trend.count} posts</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Profile Page */}
        {currentPage === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            <div className="p-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-center mb-4">
                <div className="text-6xl mb-3">👤</div>
                <h2 className="text-2xl font-bold text-white mb-1">Votre Profil</h2>
                <p className="text-purple-200">@votreprofil</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                  <p className="text-2xl font-bold text-purple-400">1.2K</p>
                  <p className="text-xs text-gray-400 mt-1">Abonnés</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                  <p className="text-2xl font-bold text-purple-400">856</p>
                  <p className="text-xs text-gray-400 mt-1">Abonnements</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                  <p className="text-2xl font-bold text-purple-400">42</p>
                  <p className="text-xs text-gray-400 mt-1">Posts</p>
                </div>
              </div>

              <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-bold hover:bg-purple-600 transition-all mb-3">
                Éditer le profil
              </button>

              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-bold hover:bg-gray-700 transition-all">
                Paramètres
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-purple-500/20"
      >
        <div className="flex justify-around items-center py-3">
          <button
            onClick={() => setCurrentPage('feed')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentPage === 'feed'
                ? 'text-purple-400 bg-purple-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Accueil</span>
          </button>

          <button
            onClick={() => setCurrentPage('explore')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentPage === 'explore'
                ? 'text-purple-400 bg-purple-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Compass size={24} />
            <span className="text-xs">Découvrir</span>
          </button>

          <button
            onClick={() => setCurrentPage('messages')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
              currentPage === 'messages'
                ? 'text-purple-400 bg-purple-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare size={24} />
            {chats.some(c => c.unread > 0) && (
              <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
            )}
            <span className="text-xs">Messages</span>
          </button>

          <button
            onClick={() => setCurrentPage('profile')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentPage === 'profile'
                ? 'text-purple-400 bg-purple-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <User size={24} />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
