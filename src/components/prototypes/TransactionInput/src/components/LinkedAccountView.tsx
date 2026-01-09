import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import type { Transaction } from '../App';
import { TransactionEntry } from './TransactionEntry';
import { TransactionList } from './TransactionList';

interface LinkedAccountViewProps {
  linkedTransactions: Transaction[];
  confirmedTransactions: Transaction[];
  accountBalance: number;
  onConfirmTransaction: (id: string) => void;
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  onDeleteTransaction: (id: string) => void;
  onBack: () => void;
}

export function LinkedAccountView({
  linkedTransactions,
  confirmedTransactions,
  accountBalance,
  onConfirmTransaction,
  onAddTransaction,
  onDeleteTransaction,
  onBack,
}: LinkedAccountViewProps) {
  const [activeTab, setActiveTab] = useState<'pending' | 'confirmed'>('pending');
  const [showManualEntry, setShowManualEntry] = useState(false);

  const pendingTransactions = linkedTransactions.filter(t => !t.confirmed);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto bg-white min-h-screen border-x border-gray-300">
        {/* Header */}
        <div className="bg-white border-b-2 border-gray-900 p-4">
          <button
            onClick={onBack}
            className="mb-2 flex items-center gap-1 text-gray-900"
          >
            <span>←</span> Back
          </button>
          <h1>Transaction Input</h1>
          <p className="text-gray-700 mt-1">Level 2: Linked Account</p>
          
          {/* Account Balance */}
          <div className="mt-3 p-3 border-2 border-gray-900 bg-gray-50">
            <p className="text-sm text-gray-600">Account Balance</p>
            <p className="text-gray-900">${accountBalance.toFixed(2)}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-gray-900">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 py-3 border-r-2 border-gray-900 ${
              activeTab === 'pending' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
          >
            Recent ({pendingTransactions.length})
          </button>
          <button
            onClick={() => setActiveTab('confirmed')}
            className={`flex-1 py-3 ${
              activeTab === 'confirmed' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
          >
            Confirmed ({confirmedTransactions.length})
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === 'pending' ? (
            <div>
              {/* Manual Entry Button */}
              {!showManualEntry && (
                <button
                  onClick={() => setShowManualEntry(true)}
                  className="w-full bg-gray-900 text-white py-3 border-2 border-gray-900 flex items-center justify-center gap-2 mb-4"
                >
                  <Plus className="w-5 h-5" />
                  Manual Transaction
                </button>
              )}

              {/* Manual Entry Form */}
              {showManualEntry && (
                <div className="mb-4">
                  <TransactionEntry 
                    onAddTransaction={(transaction) => {
                      onAddTransaction(transaction);
                      setShowManualEntry(false);
                    }} 
                  />
                </div>
              )}

              {/* Pending Transactions */}
              <div>
                <h2 className="text-gray-900 mb-3 pb-2 border-b-2 border-gray-900">
                  Recent Transactions
                </h2>
                {pendingTransactions.length === 0 ? (
                  <div className="text-center py-8 border-2 border-gray-300">
                    <p className="text-gray-500">No pending transactions</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {pendingTransactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="bg-white border-2 border-gray-900 p-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="text-gray-900">{transaction.description}</p>
                            <p className="text-sm text-gray-600">{transaction.category}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(transaction.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <p className="text-gray-900">
                              ${transaction.amount.toFixed(2)}
                            </p>
                            <button
                              onClick={() => onConfirmTransaction(transaction.id)}
                              className="bg-gray-900 text-white p-2 border-2 border-gray-900 hover:bg-gray-800"
                              aria-label="Confirm transaction"
                              title="Confirm"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <TransactionList
              transactions={confirmedTransactions}
              onDeleteTransaction={onDeleteTransaction}
            />
          )}
        </div>
      </div>
    </div>
  );
}