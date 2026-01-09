import React, { useState } from 'react';
import { SavingGoal } from '../App';
import { X } from 'lucide-react';

interface ManualAddModalProps {
  goal: SavingGoal;
  onClose: () => void;
  onAdd: (amount: number) => void;
}

export function ManualAddModal({ goal, onClose, onAdd }: ManualAddModalProps) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (value > 0) {
      onAdd(value);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-2 border-gray-900 p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-6">
          <h2>Add Money</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="amount" className="block mb-2 text-gray-700">
              Goal: {goal.name}
            </label>
            <p className="text-sm text-gray-600 mb-4">
              Current: ${goal.currentAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)}
            </p>
            <label htmlFor="amount" className="block mb-2 text-gray-700">
              Amount to Add ($)
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none"
              required
              autoFocus
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border-2 border-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
