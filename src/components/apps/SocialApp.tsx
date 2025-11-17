'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Share2, Search, Home, MessageSquare, Compass, User, ArrowLeft } from 'lucide-react'

export default function SocialApp() {
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
    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100">
      <AnimatePresence mode="wait">
        {/* Feed Page */}
        {currentPage === 'feed' && (
          <motion.div
            key="feed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full h-full overflow-y-auto pb-20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sticky top-0 z-10">
              <h1 className="text-2xl font-bold">👥 SocialHub</h1>
            </div>

            {/* Create Post */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white border-b border-gray-200"
            >
              <div className="flex gap-3 mb-3">
                <div className="text-2xl">👤</div>
                <textarea
                  placeholder="À quoi pensez-vous?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="flex-1 bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  rows={3}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handlePostCreate}
                  disabled={!newPost.trim()}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Publier
                </button>
              </div>
            </motion.div>

            {/* Posts Feed */}
            <div className="p-4 space-y-4">
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all"
                >
                  {/* Post Header */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{post.avatar}</div>
                        <div>
                          <h4 className="font-bold text-gray-900">{post.author}</h4>
                          <p className="text-xs text-gray-500">{post.timestamp}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">⋯</button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-4">
                    <p className="text-gray-900 mb-3">{post.content}</p>
                    <div className="text-5xl mb-3 text-center">{post.image}</div>
                  </div>

                  {/* Post Stats */}
                  <div className="px-4 py-2 border-y border-gray-200 text-xs text-gray-500 flex justify-between">
                    <span>{post.likes} J'aime</span>
                    <span>{post.comments} Commentaires</span>
                  </div>

                  {/* Post Actions */}
                  <div className="p-4 flex justify-around">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-all ${
                        post.liked
                          ? 'text-red-500 bg-red-50'
                          : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
                      }`}
                    >
                      <Heart size={20} fill={post.liked ? 'currentColor' : 'none'} />
                      <span className="text-sm">{post.likes}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 py-2 px-4 rounded-lg transition-all">
                      <MessageCircle size={20} />
                      <span className="text-sm">{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 hover:bg-green-50 py-2 px-4 rounded-lg transition-all">
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
            className="w-full h-full overflow-y-auto pb-20"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sticky top-0 z-10">
              <h2 className="text-2xl font-bold">Messages</h2>
            </div>

            <div className="p-4 space-y-3">
              {chats.map((chat, idx) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedChat(chat)}
                  className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-all border border-gray-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-3xl">{chat.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{chat.name}</h4>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </div>
                  </div>
                  {chat.unread > 0 && (
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
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
            className="w-full h-full flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex items-center gap-3 border-b border-gray-200">
              <button
                onClick={() => setSelectedChat(null)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="text-2xl">{selectedChat.avatar}</div>
              <h3 className="font-bold text-white flex-1">{selectedChat.name}</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              <div className="flex justify-start">
                <div className="bg-gray-300 text-gray-900 rounded-lg px-4 py-2 max-w-xs">
                  <p className="text-sm">{selectedChat.lastMessage}</p>
                  <p className="text-xs text-gray-600 mt-1">Il y a 5 min</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-purple-600 text-white rounded-lg px-4 py-2 max-w-xs">
                  <p className="text-sm">Salut! Ça va bien?</p>
                  <p className="text-xs text-purple-200 mt-1">À l'instant</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="bg-white border-t border-gray-200 p-4 flex gap-2">
              <input
                type="text"
                placeholder="Votre message..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-all">
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
            className="w-full h-full overflow-y-auto pb-20"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sticky top-0 z-10">
              <h2 className="text-2xl font-bold">Découvrir</h2>
            </div>

            <div className="p-4">
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
                    className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-4 text-center cursor-pointer hover:shadow-md transition-all text-white"
                  >
                    <div className="text-4xl mb-2">{trend.emoji}</div>
                    <h4 className="font-bold">{trend.title}</h4>
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
            className="w-full h-full overflow-y-auto pb-20"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 text-center">
              <div className="text-6xl mb-3">👤</div>
              <h2 className="text-2xl font-bold mb-1">Votre Profil</h2>
              <p className="text-purple-200">@votreprofil</p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-2xl font-bold text-purple-600">1.2K</p>
                  <p className="text-xs text-gray-500 mt-1">Abonnés</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-2xl font-bold text-purple-600">856</p>
                  <p className="text-xs text-gray-500 mt-1">Abonnements</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-2xl font-bold text-purple-600">42</p>
                  <p className="text-xs text-gray-500 mt-1">Posts</p>
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-all mb-3">
                Éditer le profil
              </button>

              <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300 transition-all">
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
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3"
      >
        <button
          onClick={() => setCurrentPage('feed')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'feed'
              ? 'text-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Accueil</span>
        </button>

        <button
          onClick={() => setCurrentPage('explore')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'explore'
              ? 'text-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Compass size={24} />
          <span className="text-xs">Découvrir</span>
        </button>

        <button
          onClick={() => setCurrentPage('messages')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
            currentPage === 'messages'
              ? 'text-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
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
              ? 'text-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <User size={24} />
          <span className="text-xs">Profil</span>
        </button>
      </motion.div>
    </div>
  )
}
