import { useState } from 'react';
import { RotateCcw, Edit2, X, Lightbulb } from 'lucide-react';
import type { Transaction } from '../App';
import { TransactionEditForm } from './TransactionEditForm';

interface LinkedAccountViewLevel4Props {
  transactions: Transaction[];
  accountBalance: number;
  onEditTransaction: (id: string, transaction: Partial<Transaction>) => void;
  onUndoAll: () => void;
  onBack: () => void;
}

const categoryIcons: Record<string, string> = {
  Groceries: '🛒',
  Transportation: '🚗',
  Entertainment: '🎬',
  Bills: '📄',
  Dining: '🍽️',
  Shopping: '🛍️',
  Health: '🏥',
  Other: '💳',
};

export function LinkedAccountViewLevel4({
  transactions,
  accountBalance,
  onEditTransaction,
  onUndoAll,
  onBack,
}: LinkedAccountViewLevel4Props) {
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null);
  const [showAIInsight, setShowAIInsight] = useState(true);
  const [showLearningNotification, setShowLearningNotification] = useState(false);

  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const editingTransaction = transactions.find(t => t.id === editingTransactionId);

  const handleUndoAll = () => {
    onUndoAll();
    setShowAIInsight(false);
    setShowLearningNotification(true);
    
    // Auto-dismiss learning notification after 5 seconds
    setTimeout(() => {
      setShowLearningNotification(false);
    }, 5000);
  };

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
          <div className="flex items-center justify-between">
            <div>
              <h1>Transaction Input</h1>
              <p className="text-gray-700 mt-1">Level 4: AI Insights</p>
            </div>
            <button
              onClick={handleUndoAll}
              className="flex items-center gap-1 px-3 py-2 border-2 border-gray-900 bg-white text-sm"
              title="Undo All"
            >
              <RotateCcw className="w-4 h-4" />
              Undo
            </button>
          </div>
          
          {/* Account Balance */}
          <div className="mt-3 p-3 border-2 border-gray-900 bg-gray-50">
            <p className="text-sm text-gray-600">Account Balance</p>
            <p className="text-gray-900">${accountBalance.toFixed(2)}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {editingTransaction ? (
            <div>
              <div className="mb-4">
                <h2 className="text-gray-900">Edit Transaction</h2>
                <p className="text-sm text-gray-600">AI categorized - you can override</p>
              </div>
              <TransactionEditForm
                transaction={editingTransaction}
                onSave={(updatedTransaction) => {
                  onEditTransaction(editingTransaction.id, updatedTransaction);
                  setEditingTransactionId(null);
                }}
                onCancel={() => setEditingTransactionId(null)}
              />
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-gray-900">
                <h2 className="text-gray-900">Transactions</h2>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p>${totalSpent.toFixed(2)}</p>
                </div>
              </div>

              {transactions.length === 0 ? (
                <div className="text-center py-12 border-2 border-gray-300">
                  <p className="text-gray-500">No transactions</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="bg-white border-2 border-gray-900 p-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0">
                          {categoryIcons[transaction.category] || '💳'}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{transaction.category}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(transaction.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right flex items-start gap-2">
                          <p className="text-gray-900">
                            ${transaction.amount.toFixed(2)}
                          </p>
                          <button
                            onClick={() => setEditingTransactionId(transaction.id)}
                            className="bg-white border-2 border-gray-900 p-1.5 hover:bg-gray-100"
                            aria-label="Edit transaction"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* AI Insight Notification */}
        {showAIInsight && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white border-4 border-gray-900 max-w-sm w-full">
              {/* Header */}
              <div className="bg-gray-900 text-white p-4 relative">
                <button
                  onClick={() => setShowAIInsight(false)}
                  className="absolute top-3 right-3 text-white"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6" />
                  <div>
                    <h3>AI Insight</h3>
                    <p className="text-sm mt-0.5">Smart recommendation</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-900 mb-1">
                  You've spent $340 on subscriptions this month. 3 overlap in function — want me to compare?
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setShowAIInsight(false)}
                    className="flex-1 px-3 py-2 border-2 border-gray-900 bg-white"
                  >
                    Not Now
                  </button>
                  <button
                    onClick={() => setShowAIInsight(false)}
                    className="flex-1 px-3 py-2 bg-gray-900 text-white border-2 border-gray-900"
                  >
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Learning Notification */}
        {showLearningNotification && (
          <div className="fixed bottom-4 left-4 right-4 max-w-sm mx-auto z-50">
            <div className="bg-gray-900 text-white p-4 border-4 border-gray-900">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="mb-1">AI learned something</p>
                  <p className="text-sm text-gray-300">
                    I noticed you undid all transactions. I'll be more conservative with automatic categorization and wait for your confirmation on uncertain items.
                  </p>
                </div>
                <button
                  onClick={() => setShowLearningNotification(false)}
                  className="text-white flex-shrink-0"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}