import React from 'react';
import { AutomationLevel, SavingGoal } from '../App';
import { Calendar, TrendingUp, Bot, Zap } from 'lucide-react';

interface MonthlyProgressCheckProps {
  level: AutomationLevel;
  goals: SavingGoal[];
  availableBalance: number;
  onContinue: () => void;
  onAddMoney: (goalId: string, amount: number) => void;
}

export function MonthlyProgressCheck({ level, goals, availableBalance, onContinue, onAddMoney }: MonthlyProgressCheckProps) {
  const getLevelName = () => {
    switch (level) {
      case 3: return 'Level 3: Agent-Assisted';
      case 4: return 'Level 4: Multi-Agent Orchestration';
      default: return '';
    }
  };

  const getProgress = (goal: SavingGoal) => {
    return (goal.currentAmount / goal.targetAmount) * 100;
  };

  const getMonthsRemaining = (targetDate: string) => {
    const today = new Date();
    const target = new Date(targetDate);
    const months = Math.max(0, Math.ceil(
      (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 30)
    ));
    return months;
  };

  const getCurrentMonthName = () => {
    return new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatNextAssignment = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          {level === 4 ? (
            <Zap size={24} className="text-purple-600" />
          ) : (
            <Bot size={24} className="text-blue-600" />
          )}
          <h1>Monthly Progress Check</h1>
        </div>
        <p className="text-gray-600">{getLevelName()}</p>
      </div>

      <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={18} className="text-gray-600" />
          <p className="text-sm text-gray-600">{getCurrentMonthName()}</p>
        </div>
        <p className="text-gray-900">Available Balance: ${availableBalance.toFixed(2)}</p>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        {level === 4 && (
          <div className="mb-6 p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <div className="flex items-start gap-3">
              <Zap size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm mb-1">
                  <span className="text-purple-900">Multi-Agent System Active</span>
                </p>
                <p className="text-xs text-gray-700">
                  Savings Agent, Budget Agent, and Opportunity Agent are monitoring your finances and optimizing your goals.
                </p>
              </div>
            </div>
          </div>
        )}

        <h2 className="mb-4">Active Goals</h2>

        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="border-2 border-gray-900 p-4 bg-white">
              <div className="mb-3">
                <h3 className="mb-1">{goal.name}</h3>
                <p className="text-sm text-gray-600">
                  Target: {new Date(goal.targetDate).toLocaleDateString()} 
                  ({getMonthsRemaining(goal.targetDate)} months remaining)
                </p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span>${goal.currentAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)}</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${level === 4 ? 'bg-purple-600' : 'bg-blue-600'} transition-all`}
                    style={{ width: `${Math.min(100, getProgress(goal))}%` }}
                  />
                </div>
              </div>

              {goal.monthlySuggestion && (
                <div className={`p-4 border-2 ${level === 4 ? 'bg-purple-50 border-purple-300' : 'bg-blue-50 border-blue-300'} mb-3`}>
                  <div className="flex items-start gap-2">
                    <TrendingUp size={20} className={level === 4 ? 'text-purple-600' : 'text-blue-600'} />
                    <div className="flex-1">
                      <p className="text-sm mb-1 text-gray-700">
                        {level === 4 ? 'AI Prognosis for this month:' : 'Agent prognosis for this month:'}
                      </p>
                      <p className={`text-lg ${level === 4 ? 'text-purple-900' : 'text-blue-900'}`}>
                        ${goal.monthlySuggestion.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {level === 4 
                          ? 'Calculated by Budget Agent based on your spending patterns'
                          : 'Recommended contribution to stay on track'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {goal.nextAssignment && (
                <div className="p-3 bg-green-50 border border-green-300 rounded">
                  <p className="text-sm text-gray-700">
                    {level === 4 ? '🤖 Next auto-assignment:' : '⚡ Next scheduled assignment:'}
                  </p>
                  <p className="text-green-900">
                    {formatNextAssignment(goal.nextAssignment)}
                  </p>
                </div>
              )}

              {level === 3 && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    ℹ️ Manual override available anytime from dashboard
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <button
          onClick={onContinue}
          className={`w-full py-4 text-white hover:opacity-90 transition-opacity ${
            level === 4 ? 'bg-purple-600' : 'bg-blue-600'
          }`}
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
}
