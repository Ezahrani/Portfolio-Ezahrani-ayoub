'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, FileText, Download, Eye, Trash2, Home, Settings, BarChart3, User } from 'lucide-react'

export default function InvoiceDemoApp() {
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
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    client: '',
    amount: '',
    description: '',
  })

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidInvoices = invoices.filter(inv => inv.status === 'paid').length
  const pendingInvoices = invoices.filter(inv => inv.status === 'pending').length

  const handleAddInvoice = () => {
    if (formData.client && formData.amount && formData.description) {
      const newInvoice = {
        id: `INV-${String(invoices.length + 1).padStart(3, '0')}`,
        client: formData.client,
        amount: parseFloat(formData.amount),
        date: new Date().toISOString().split('T')[0],
        status: 'pending',
        description: formData.description,
      }
      setInvoices([newInvoice, ...invoices])
      setFormData({ client: '', amount: '', description: '' })
      setShowForm(false)
    }
  }

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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-blue-500/20"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-400">📊 Facturation</div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
          >
            <Plus size={20} />
            Nouvelle
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Dashboard */}
        {currentPage === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-20"
          >
            {/* Stats */}
            <div className="p-4 grid grid-cols-3 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 border border-blue-500/30"
              >
                <p className="text-sm text-blue-200 mb-1">Revenu Total</p>
                <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-4 border border-green-500/30"
              >
                <p className="text-sm text-green-200 mb-1">Payées</p>
                <p className="text-2xl font-bold">{paidInvoices}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-4 border border-orange-500/30"
              >
                <p className="text-sm text-orange-200 mb-1">En attente</p>
                <p className="text-2xl font-bold">{pendingInvoices}</p>
              </motion.div>
            </div>

            {/* Add Invoice Form */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 space-y-3"
              >
                <div className="bg-slate-800 rounded-lg p-4 border border-blue-500/30 space-y-3">
                  <input
                    type="text"
                    placeholder="Nom du client"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Montant"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddInvoice}
                      className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition-all"
                    >
                      Créer
                    </button>
                    <button
                      onClick={() => setShowForm(false)}
                      className="flex-1 bg-slate-700 text-white py-2 rounded-lg font-bold hover:bg-slate-600 transition-all"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Invoices List */}
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold mb-3">Factures Récentes</h3>
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
                  className="bg-slate-800 rounded-lg p-4 cursor-pointer hover:bg-slate-700 transition-all border border-slate-700 hover:border-blue-500/50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-white">{invoice.client}</h4>
                      <p className="text-sm text-gray-400">{invoice.id}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        invoice.status === 'paid'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {invoice.status === 'paid' ? 'Payée' : 'En attente'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{invoice.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{invoice.date}</span>
                    <span className="text-lg font-bold text-blue-400">${invoice.amount}</span>
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
            className="pb-20"
          >
            <div className="p-4">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="text-blue-400 hover:text-blue-300 transition-colors mb-4"
              >
                ← Retour
              </button>

              <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/30 space-y-4">
                {/* Invoice Header */}
                <div className="border-b border-slate-700 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedInvoice.id}</h2>
                      <p className="text-gray-400">{selectedInvoice.date}</p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-bold ${
                        selectedInvoice.status === 'paid'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {selectedInvoice.status === 'paid' ? 'Payée' : 'En attente'}
                    </span>
                  </div>
                </div>

                {/* Client Info */}
                <div>
                  <p className="text-gray-400 text-sm mb-1">Client</p>
                  <p className="text-xl font-bold">{selectedInvoice.client}</p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-400 text-sm mb-1">Description</p>
                  <p className="text-white">{selectedInvoice.description}</p>
                </div>

                {/* Amount */}
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <p className="text-gray-400 text-sm mb-2">Montant Total</p>
                  <p className="text-3xl font-bold text-blue-400">${selectedInvoice.amount}</p>
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
                    className="w-full bg-red-500/20 text-red-400 py-3 rounded-lg font-bold hover:bg-red-500/40 transition-all flex items-center justify-center gap-2"
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
            className="pb-20 p-4"
          >
            <h2 className="text-2xl font-bold mb-4">Statistiques</h2>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-400 text-sm mb-2">Revenu ce mois</p>
                <p className="text-3xl font-bold text-blue-400">${totalRevenue}</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-400 text-sm mb-2">Nombre de factures</p>
                <p className="text-3xl font-bold text-white">{invoices.length}</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-400 text-sm mb-2">Taux de paiement</p>
                <p className="text-3xl font-bold text-green-400">
                  {Math.round((paidInvoices / invoices.length) * 100)}%
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-400 text-sm mb-2">Montant en attente</p>
                <p className="text-3xl font-bold text-orange-400">
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
        className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-blue-500/20"
      >
        <div className="flex justify-around items-center py-3">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentPage === 'dashboard'
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Accueil</span>
          </button>

          <button
            onClick={() => setCurrentPage('stats')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentPage === 'stats'
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <BarChart3 size={24} />
            <span className="text-xs">Stats</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-white transition-all">
            <FileText size={24} />
            <span className="text-xs">Factures</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-gray-400 hover:text-white transition-all">
            <Settings size={24} />
            <span className="text-xs">Paramètres</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
