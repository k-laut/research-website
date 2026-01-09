import { useState } from 'react';
import type { Transaction } from '../App';

interface TransactionEditFormProps {
  transaction: Transaction;
  onSave: (transaction: Partial<Transaction>) => void;
  onCancel: () => void;
}

const categories = [
  'Groceries',
  'Transportation',
  'Entertainment',
  'Bills',
  'Dining',
  'Shopping',
  'Health',
  'Other',
];

export function TransactionEditForm({ transaction, onSave, onCancel }: TransactionEditFormProps) {
  const [amount, setAmount] = useState(transaction.amount.toString());
  const [category, setCategory] = useState(transaction.category);
  const [description, setDescription] = useState(transaction.description);
  const [date, setDate] = useState(transaction.date);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    onSave({
      amount: parseFloat(amount),
      category,
      date,
      description,
    });
  };

  return (
    <div className="bg-white p-4 border-2 border-gray-900">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="amount" className="block text-sm text-gray-700 mb-1">
            Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full px-3 py-2 border-2 border-gray-900"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-900"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full px-3 py-2 border-2 border-gray-900"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-900"
            required
          />
        </div>

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-3 py-2 border-2 border-gray-900 bg-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-3 py-2 bg-gray-900 text-white border-2 border-gray-900"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
