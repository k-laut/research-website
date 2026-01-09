import { Trash2 } from 'lucide-react';
import type { Transaction } from '../App';

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}

export function TransactionList({ transactions, onDeleteTransaction }: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-12 border-2 border-gray-300">
        <p className="text-gray-500">No transactions yet</p>
      </div>
    );
  }

  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-gray-900">
        <h2 className="text-gray-900">Transactions</h2>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total</p>
          <p>${totalSpent.toFixed(2)}</p>
        </div>
      </div>

      <div className="space-y-2">
        {transactions.map((transaction) => (
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
              <div className="text-right flex items-start gap-2">
                <p className="text-gray-900">
                  ${transaction.amount.toFixed(2)}
                </p>
                <button
                  onClick={() => onDeleteTransaction(transaction.id)}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}