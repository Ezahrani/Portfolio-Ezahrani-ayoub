'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, FileText, TrendingUp, Users, DollarSign, ArrowLeft, Download, Trash2, CheckCircle, Clock } from 'lucide-react'

export default function InvoiceProApp() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2024-001',
      client: 'Acme Corporation',
      amount: 2500,
      date: '2024-11-15',
      status: 'paid',
      description: 'Web Development Services',
    },
    {
      id: 'INV-2024-002',
      client: 'Tech Solutions Inc',
      amount: 3200,
      date: '2024-11-10',
      status: 'pending',
      description: 'UI/UX Design Consultation',
    },
    {
      id: 'INV-2024-003',
      client: 'Digital Agency Pro',
      amount: 1800,
      date: '2024-11-05',
      status: 'paid',
      description: 'Mobile App Development',
    },
  ])
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null)

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidAmount = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0)
  const pendingAmount = invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0)
  const paidCount = invoices.filter(inv => inv.status === 'paid').length

  const handleMarkAsPaid = (id: string) => {
    setInvoices(
      invoices.map(inv =>
        inv.id === id ? { ...inv, status: 'paid' } : inv
      )
    )
  }

  const handleDeleteInvoice = (id: string) => {
    setInvoices(invoices.filter(inv => inv.id !== id))
  }

  return (
    <div className="w-full h-full bg-gray-50">
      <AnimatePresence mode="wait">
        {/* Dashboard */}
        {currentPage === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-y-auto pb-24"
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2">
                  <Plus size={18} />
                  New
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="p-4 grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-600 font-medium">Total Revenue</p>
                  <DollarSign size={16} className="text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">All time</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-600 font-medium">Paid</p>
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">${paidAmount.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">{paidCount} invoices</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-600 font-medium">Pending</p>
                  <Clock size={16} className="text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">${pendingAmount.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">{invoices.filter(inv => inv.status === 'pending').length} invoices</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-600 font-medium">Success Rate</p>
                  <TrendingUp size={16} className="text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{Math.round((paidCount / invoices.length) * 100)}%</p>
                <p className="text-xs text-gray-500 mt-1">Payment rate</p>
              </motion.div>
            </div>

            {/* Invoices List */}
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Invoices</h3>
              {invoices.map((invoice, idx) => (
                <motion.div
                  key={invoice.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    setSelectedInvoice(invoice)
                    setCurrentPage('detail')
                  }}
                  className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">{invoice.client}</h4>
                      <p className="text-xs text-gray-500">{invoice.id}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        invoice.status === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {invoice.status === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{invoice.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{invoice.date}</span>
                    <span className="text-lg font-bold text-gray-900">${invoice.amount}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Invoice Detail */}
        {currentPage === 'detail' && selectedInvoice && (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-y-auto pb-24"
          >
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4 flex items-center gap-3">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-xl font-bold text-gray-900">Invoice Details</h2>
            </div>

            <div className="p-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                {/* Invoice Header */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedInvoice.id}</h2>
                      <p className="text-gray-500">{selectedInvoice.date}</p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-bold ${
                        selectedInvoice.status === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {selectedInvoice.status === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                </div>

                {/* Client Info */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">Bill To</p>
                  <p className="text-xl font-bold text-gray-900">{selectedInvoice.client}</p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">Description</p>
                  <p className="text-gray-900">{selectedInvoice.description}</p>
                </div>

                {/* Amount */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-500 text-sm mb-2">Total Amount</p>
                  <p className="text-4xl font-bold text-blue-600">${selectedInvoice.amount}</p>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4">
                  {selectedInvoice.status !== 'paid' && (
                    <button
                      onClick={() => {
                        handleMarkAsPaid(selectedInvoice.id)
                        setCurrentPage('dashboard')
                      }}
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={20} />
                      Mark as Paid
                    </button>
                  )}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    <Download size={20} />
                    Download PDF
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteInvoice(selectedInvoice.id)
                      setCurrentPage('dashboard')
                    }}
                    className="w-full bg-red-100 text-red-600 py-3 rounded-lg font-bold hover:bg-red-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={20} />
                    Delete Invoice
                  </button>
                </div>
              </div>
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
          onClick={() => setCurrentPage('dashboard')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'dashboard'
              ? 'text-blue-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="text-xl">📊</span>
          <span className="text-xs font-medium">Dashboard</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-gray-600 transition-all">
          <FileText size={20} />
          <span className="text-xs font-medium">Invoices</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-gray-600 transition-all">
          <TrendingUp size={20} />
          <span className="text-xs font-medium">Reports</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-gray-600 transition-all">
          <span className="text-xl">⚙️</span>
          <span className="text-xs font-medium">Settings</span>
        </button>
      </motion.div>
    </div>
  )
}
