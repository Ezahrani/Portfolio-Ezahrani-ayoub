'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Share2, Search, Home, Compass, MessageSquare, User, ArrowLeft, Plus } from 'lucide-react'

export default function SocialProApp() {
  const [currentPage, setCurrentPage] = useState('feed')
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex Johnson',
      avatar: '👨‍💼',
      timestamp: '2h ago',
      content: 'Just launched my new project! 🚀',
      image: '📸',
      likes: 234,
      comments: 45,
      liked: false,
    },
    {
      id: 2,
      author: 'Sarah Design',
      avatar: '👩‍🎨',
      timestamp: '4h ago',
      content: 'New UI design for my portfolio',
      image: '🎨',
      likes: 567,
      comments: 89,
      liked: false,
    },
    {
      id: 3,
      author: 'Dev Master',
      avatar: '👨‍💻',
      timestamp: '6h ago',
      content: 'React 19 is amazing! Who\'s using it?',
      image: '⚛️',
      likes: 892,
      comments: 156,
      liked: false,
    },
  ])
  const [newPost, setNewPost] = useState('')
  const [selectedChat, setSelectedChat] = useState<any>(null)

  const chats = [
    { id: 1, name: 'Alex Johnson', avatar: '👨‍💼', lastMessage: 'Hey! How are you?', unread: 2 },
    { id: 2, name: 'Sarah Design', avatar: '👩‍🎨', lastMessage: 'Did you see my post?', unread: 0 },
    { id: 3, name: 'Dev Master', avatar: '👨‍💻', lastMessage: 'Let\'s grab coffee?', unread: 1 },
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
        author: 'You',
        avatar: '👤',
        timestamp: 'now',
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
    <div className="w-full h-full bg-white flex flex-col">
      <AnimatePresence mode="wait">
        {/* Feed Page */}
        {currentPage === 'feed' && (
          <motion.div
            key="feed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-black">Instagram</h1>
                <div className="flex gap-3">
                  <button className="text-black hover:text-gray-600">❤️</button>
                  <button className="text-black hover:text-gray-600">💬</button>
                </div>
              </div>
            </div>

            {/* Stories */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 border-b border-gray-200 flex gap-3 overflow-x-auto pb-4"
            >
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl border-2 border-gray-300">
                  +
                </div>
                <p className="text-xs text-black font-medium">Your story</p>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl border-2 border-pink-500">
                    {i === 1 ? '👨‍💼' : i === 2 ? '👩‍🎨' : i === 3 ? '👨‍💻' : '👩‍🔬'}
                  </div>
                  <p className="text-xs text-black font-medium">user{i}</p>
                </div>
              ))}
            </motion.div>

            {/* Posts Feed */}
            <div className="space-y-4 py-4">
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border-b border-gray-200"
                >
                  {/* Post Header */}
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{post.avatar}</div>
                      <div>
                        <h4 className="font-bold text-black text-sm">{post.author}</h4>
                        <p className="text-xs text-gray-500">{post.timestamp}</p>
                      </div>
                    </div>
                    <button className="text-black hover:text-gray-600">⋯</button>
                  </div>

                  {/* Post Image */}
                  <div className="bg-gray-200 aspect-square flex items-center justify-center text-6xl">
                    {post.image}
                  </div>

                  {/* Post Content */}
                  <div className="px-4 py-3">
                    {/* Actions */}
                    <div className="flex justify-between mb-3">
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`transition-all ${
                            post.liked
                              ? 'text-red-500'
                              : 'text-black hover:text-gray-600'
                          }`}
                        >
                          <Heart size={24} fill={post.liked ? 'currentColor' : 'none'} />
                        </button>
                        <button className="text-black hover:text-gray-600">
                          <MessageCircle size={24} />
                        </button>
                        <button className="text-black hover:text-gray-600">
                          <Share2 size={24} />
                        </button>
                      </div>
                      <button className="text-black hover:text-gray-600">
                        <Heart size={24} />
                      </button>
                    </div>

                    {/* Likes */}
                    <p className="text-sm font-bold text-black mb-2">{post.likes} likes</p>

                    {/* Caption */}
                    <p className="text-sm text-black mb-2">
                      <span className="font-bold">{post.author}</span> {post.content}
                    </p>

                    {/* Comments */}
                    <p className="text-xs text-gray-500 mb-2">View all {post.comments} comments</p>

                    {/* Comment Input */}
                    <div className="flex gap-2 border-t border-gray-200 pt-3">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-1 text-sm text-black placeholder-gray-500 focus:outline-none"
                      />
                      <button className="text-blue-500 font-bold text-sm hover:text-blue-600">Post</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Explore Page */}
        {currentPage === 'explore' && (
          <motion.div
            key="explore"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 overflow-y-auto"
          >
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm text-black placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-2 grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-3xl cursor-pointer hover:opacity-80 transition-all"
                >
                  {['📸', '🎨', '⚛️', '🚀', '💡', '🎭', '🌟', '🎪', '🎯'][i]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Messages Page */}
        {currentPage === 'messages' && !selectedChat && (
          <motion.div
            key="messages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 overflow-y-auto"
          >
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4">
              <h2 className="text-2xl font-bold text-black">Messages</h2>
            </div>

            <div className="space-y-1">
              {chats.map((chat, idx) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedChat(chat)}
                  className="bg-white px-4 py-3 cursor-pointer hover:bg-gray-50 transition-all flex items-center justify-between border-b border-gray-100"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-3xl">{chat.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-black text-sm">{chat.name}</h4>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </div>
                  </div>
                  {chat.unread > 0 && (
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col"
          >
            <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
              <button
                onClick={() => setSelectedChat(null)}
                className="text-black hover:text-gray-600"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="text-2xl">{selectedChat.avatar}</div>
              <h3 className="font-bold text-black flex-1">{selectedChat.name}</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              <div className="flex justify-start">
                <div className="bg-gray-200 text-black rounded-2xl px-4 py-2 max-w-xs">
                  <p className="text-sm">{selectedChat.lastMessage}</p>
                  <p className="text-xs text-gray-600 mt-1">5 min ago</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-2xl px-4 py-2 max-w-xs">
                  <p className="text-sm">Hey! How are you doing?</p>
                  <p className="text-xs text-blue-200 mt-1">now</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-t border-gray-200 p-4 flex gap-2">
              <input
                type="text"
                placeholder="Aa"
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-black placeholder-gray-500 focus:outline-none"
              />
              <button className="text-blue-500 font-bold hover:text-blue-600">Send</button>
            </div>
          </motion.div>
        )}

        {/* Profile Page */}
        {currentPage === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 overflow-y-auto"
          >
            <div className="bg-white border-b border-gray-200 p-6 text-center">
              <div className="text-6xl mb-3">👤</div>
              <h2 className="text-2xl font-bold text-black mb-1">Your Profile</h2>
              <p className="text-gray-500">@yourprofile</p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-2xl font-bold text-black">1.2K</p>
                  <p className="text-xs text-gray-500 mt-1">Followers</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-2xl font-bold text-black">856</p>
                  <p className="text-xs text-gray-500 mt-1">Following</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-2xl font-bold text-black">42</p>
                  <p className="text-xs text-gray-500 mt-1">Posts</p>
                </div>
              </div>

              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-all mb-3">
                Edit Profile
              </button>

              <button className="w-full bg-gray-200 text-black py-3 rounded-lg font-bold hover:bg-gray-300 transition-all">
                Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation - INSIDE EMULATOR */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="bg-white border-t border-gray-200 flex justify-around items-center py-3"
      >
        <button
          onClick={() => setCurrentPage('feed')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'feed'
              ? 'text-black'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Home size={24} />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button
          onClick={() => setCurrentPage('explore')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'explore'
              ? 'text-black'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Compass size={24} />
          <span className="text-xs font-medium">Explore</span>
        </button>

        <button
          onClick={() => setCurrentPage('messages')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all relative ${
            currentPage === 'messages'
              ? 'text-black'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <MessageSquare size={24} />
          {chats.some(c => c.unread > 0) && (
            <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
          )}
          <span className="text-xs font-medium">Messages</span>
        </button>

        <button
          onClick={() => setCurrentPage('profile')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'profile'
              ? 'text-black'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <User size={24} />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </motion.div>
    </div>
  )
}
