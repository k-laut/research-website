import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TransactionEntryProps {
  onAddTransaction: (transaction: {
    amount: number;
    category: string;
    date: string;
    description: string;
  }) => void;
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

export function TransactionEntry({ onAddTransaction }: TransactionEntryProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Groceries');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    onAddTransaction({
      amount: parseFloat(amount),
      category,
      date,
      description: description || category,
    });

    // Reset form
    setAmount('');
    setDescription('');
    setDate(new Date().toISOString().split('T')[0]);
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="w-full bg-gray-900 text-white py-3 border-2 border-gray-900 flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Add Transaction
      </button>
    );
  }

  return (
    <div className="bg-white p-4 border-2 border-gray-900">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-900">New Transaction</h2>
        <button
          onClick={() => setShowForm(false)}
          className="text-gray-700"
        >
          ✕
        </button>
      </div>

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
            placeholder="Optional"
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
            onClick={() => setShowForm(false)}
            className="flex-1 px-3 py-2 border-2 border-gray-900 bg-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-3 py-2 bg-gray-900 text-white border-2 border-gray-900"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}