import React from 'react';
import { SavingGoal } from '../App';
import { Sparkles, X } from 'lucide-react';

interface OpportunityNotificationProps {
  goal: SavingGoal;
  opportunityAmount: number;
  opportunitySource: string;
  onAccept: (goalId: string, amount: number) => void;
  onDismiss: () => void;
}

export function OpportunityNotification({ 
  goal, 
  opportunityAmount, 
  opportunitySource, 
  onAccept, 
  onDismiss 
}: OpportunityNotificationProps) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl animate-slide-up">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-purple-100 rounded-full">
                <Sparkles size={24} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="mb-1">New Saving Opportunity</h2>
                <p className="text-sm text-gray-600">Detected by Opportunity Agent</p>
              </div>
            </div>
            <button
              onClick={onDismiss}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 mb-4">
            <p className="text-gray-700 mb-3">
              You have canceled your <span className="font-semibold">{opportunitySource}</span> subscription.
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-sm text-gray-600">Recovered amount:</p>
              <p className="text-2xl text-purple-900">${opportunityAmount.toFixed(2)}</p>
              <p className="text-sm text-gray-600">/ month</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Suggested allocation:</p>
            <div className="p-3 bg-gray-50 border border-gray-300 rounded">
              <p className="text-sm text-gray-700">Move to goal:</p>
              <p className="text-gray-900">{goal.name}</p>
              <p className="text-xs text-gray-600 mt-1">
                ${goal.currentAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onDismiss}
              className="flex-1 py-3 px-4 border-2 border-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Not Now
            </button>
            <button
              onClick={() => onAccept(goal.id, opportunityAmount)}
              className="flex-1 py-3 px-4 bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Accept & Allocate
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            💡 The system learns from your decisions to improve future suggestions
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
