'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, FileText, Download, Eye, Trash2, Home, Settings, BarChart3, User, ArrowLeft } from 'lucide-react'

export default function InvoiceApp() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-001',
      client: 'Acme Corp',
      amount: 1500,
      date: '2024-11-15',
      status: 'paid',
      description: 'Services de développement web',
    },
    {
      id: 'INV-002',
      client: 'Tech Solutions',
      amount: 2500,
      date: '2024-11-10',
      status: 'pending',
      description: 'Consultation et audit',
    },
    {
      id: 'INV-003',
      client: 'Digital Agency',
      amount: 3200,
      date: '2024-11-05',
      status: 'paid',
      description: 'Design UI/UX',
    },
  ])
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null)

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidInvoices = invoices.filter(inv => inv.status === 'paid').length
  const pendingInvoices = invoices.filter(inv => inv.status === 'pending').length

  const handleDeleteInvoice = (id: string) => {
    setInvoices(invoices.filter(inv => inv.id !== id))
  }

  const handleMarkAsPaid = (id: string) => {
    setInvoices(
      invoices.map(inv =>
        inv.id === id ? { ...inv, status: 'paid' } : inv
      )
    )
  }

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100">
      <AnimatePresence mode="wait">
        {/* Dashboard */}
        {currentPage === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full h-full overflow-y-auto pb-20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sticky top-0 z-10">
              <h1 className="text-2xl font-bold mb-2">📊 Facturation</h1>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                <Plus size={20} />
                Nouvelle
              </button>
            </div>

            {/* Stats */}
            <div className="p-4 grid grid-cols-3 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 border border-blue-200"
              >
                <p className="text-xs text-gray-600 mb-1">Revenu Total</p>
                <p className="text-2xl font-bold text-blue-600">${totalRevenue.toLocaleString()}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-4 border border-green-200"
              >
                <p className="text-xs text-gray-600 mb-1">Payées</p>
                <p className="text-2xl font-bold text-green-600">{paidInvoices}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-4 border border-orange-200"
              >
                <p className="text-xs text-gray-600 mb-1">En attente</p>
                <p className="text-2xl font-bold text-orange-600">{pendingInvoices}</p>
              </motion.div>
            </div>

            {/* Invoices List */}
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Factures Récentes</h3>
              {invoices.map((invoice, idx) => (
                <motion.div
                  key={invoice.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    setSelectedInvoice(invoice)
                    setCurrentPage('detail')
                  }}
                  className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900">{invoice.client}</h4>
                      <p className="text-sm text-gray-500">{invoice.id}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        invoice.status === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {invoice.status === 'paid' ? 'Payée' : 'En attente'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{invoice.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{invoice.date}</span>
                    <span className="text-lg font-bold text-blue-600">${invoice.amount}</span>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full h-full overflow-y-auto pb-20"
          >
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 p-4 flex items-center gap-3">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-xl font-bold text-gray-900">Détail Facture</h2>
            </div>

            <div className="p-4">
              <div className="bg-white rounded-lg p-6 border border-blue-200 space-y-4">
                {/* Invoice Header */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedInvoice.id}</h2>
                      <p className="text-gray-500">{selectedInvoice.date}</p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-bold ${
                        selectedInvoice.status === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {selectedInvoice.status === 'paid' ? 'Payée' : 'En attente'}
                    </span>
                  </div>
                </div>

                {/* Client Info */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">Client</p>
                  <p className="text-xl font-bold text-gray-900">{selectedInvoice.client}</p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">Description</p>
                  <p className="text-gray-900">{selectedInvoice.description}</p>
                </div>

                {/* Amount */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-500 text-sm mb-2">Montant Total</p>
                  <p className="text-3xl font-bold text-blue-600">${selectedInvoice.amount}</p>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4">
                  {selectedInvoice.status !== 'paid' && (
                    <button
                      onClick={() => {
                        handleMarkAsPaid(selectedInvoice.id)
                        setCurrentPage('dashboard')
                      }}
                      className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-all"
                    >
                      Marquer comme payée
                    </button>
                  )}
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                    <Download size={20} />
                    Télécharger PDF
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteInvoice(selectedInvoice.id)
                      setCurrentPage('dashboard')
                    }}
                    className="w-full bg-red-100 text-red-600 py-3 rounded-lg font-bold hover:bg-red-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={20} />
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Page */}
        {currentPage === 'stats' && (
          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full h-full overflow-y-auto pb-20"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sticky top-0 z-10">
              <h2 className="text-2xl font-bold">Statistiques</h2>
            </div>

            <div className="p-4 space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-500 text-sm mb-2">Revenu ce mois</p>
                <p className="text-3xl font-bold text-blue-600">${totalRevenue}</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-500 text-sm mb-2">Nombre de factures</p>
                <p className="text-3xl font-bold text-gray-900">{invoices.length}</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-500 text-sm mb-2">Taux de paiement</p>
                <p className="text-3xl font-bold text-green-600">
                  {Math.round((paidInvoices / invoices.length) * 100)}%
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-500 text-sm mb-2">Montant en attente</p>
                <p className="text-3xl font-bold text-orange-600">
                  ${invoices
                    .filter(inv => inv.status === 'pending')
                    .reduce((sum, inv) => sum + inv.amount, 0)}
                </p>
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
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Accueil</span>
        </button>

        <button
          onClick={() => setCurrentPage('stats')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
            currentPage === 'stats'
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <BarChart3 size={24} />
          <span className="text-xs">Stats</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 transition-all">
          <FileText size={24} />
          <span className="text-xs">Factures</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 transition-all">
          <Settings size={24} />
          <span className="text-xs">Paramètres</span>
        </button>
      </motion.div>
    </div>
  )
}
