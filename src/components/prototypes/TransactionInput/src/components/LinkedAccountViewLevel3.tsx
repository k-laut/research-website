import { useState } from 'react';
import { RotateCcw, Edit2 } from 'lucide-react';
import type { Transaction } from '../App';
import { TransactionEditForm } from './TransactionEditForm';

interface LinkedAccountViewLevel3Props {
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

export function LinkedAccountViewLevel3({
  transactions,
  accountBalance,
  onEditTransaction,
  onUndoAll,
  onBack,
}: LinkedAccountViewLevel3Props) {
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null);

  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const editingTransaction = transactions.find(t => t.id === editingTransactionId);

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
              <p className="text-gray-700 mt-1">Level 3: Auto-Categorization</p>
            </div>
            <button
              onClick={onUndoAll}
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
      </div>
    </div>
  );
}