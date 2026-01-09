import React, { useState } from 'react';
import { AutomationLevel, SavingGoal } from '../App';
import { ArrowLeft, Plus, Bot, Zap, Calendar } from 'lucide-react';
import { ManualAddModal } from './ManualAddModal';

interface GoalsDashboardProps {
  level: AutomationLevel;
  goals: SavingGoal[];
  availableBalance: number;
  onAddMoney: (goalId: string, amount: number) => void;
  onBack: () => void;
}

export function GoalsDashboard({ level, goals, availableBalance, onAddMoney, onBack }: GoalsDashboardProps) {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const getLevelName = () => {
    switch (level) {
      case 0: return 'Level 0: Full Manual';
      case 1: return 'Level 1: Manual with Suggestions';
      case 2: return 'Level 2: Assisted Automation';
      case 3: return 'Level 3: Agent-Assisted';
      case 4: return 'Level 4: Multi-Agent Orchestration';
    }
  };

  const handleQuickAssign = (goalId: string, amount: number) => {
    onAddMoney(goalId, amount);
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

  const formatNextAssignment = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-700 mb-4 hover:text-gray-900">
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="flex items-center gap-2 mb-2">
          {level === 4 && <Zap size={20} className="text-purple-600" />}
          {level === 3 && <Bot size={20} className="text-blue-600" />}
          <h1>Saving Goals</h1>
        </div>
        <p className="text-gray-600">{getLevelName()}</p>
      </div>

      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <p className="text-sm text-gray-600 mb-1">Available Balance</p>
        <p className="text-2xl">${availableBalance.toFixed(2)}</p>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        {goals.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>No saving goals yet</p>
            <p className="text-sm mt-2">Create your first goal to get started</p>
          </div>
        ) : (
          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className="border-2 border-gray-900 p-4 bg-white">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="mb-1">{goal.name}</h3>
                    <p className="text-sm text-gray-600">
                      Target: {new Date(goal.targetDate).toLocaleDateString()} 
                      ({getMonthsRemaining(goal.targetDate)} months)
                    </p>
                  </div>
                  {(level === 3 || level === 4) && goal.automatedContributions && (
                    <div className={`px-2 py-1 rounded text-xs ${
                      level === 4 ? 'bg-purple-100 text-purple-900' : 'bg-blue-100 text-blue-900'
                    }`}>
                      {level === 4 ? '🤖 AI Active' : '⚡ Automated'}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span>${goal.currentAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200">
                    <div 
                      className={`h-full transition-all ${
                        level === 4 ? 'bg-purple-600' : 
                        level === 3 ? 'bg-blue-600' : 
                        'bg-gray-900'
                      }`}
                      style={{ width: `${Math.min(100, getProgress(goal))}%` }}
                    />
                  </div>
                </div>

                {(level === 1 || level === 2) && goal.monthlySuggestion && (
                  <div className="mb-3 p-3 bg-blue-50 border border-blue-200">
                    <p className="text-sm text-gray-700">Monthly suggestion:</p>
                    <p className="text-blue-900">${goal.monthlySuggestion.toFixed(2)}</p>
                  </div>
                )}

                {(level === 3 || level === 4) && goal.nextAssignment && (
                  <div className={`mb-3 p-3 border rounded ${
                    level === 4 
                      ? 'bg-purple-50 border-purple-300' 
                      : 'bg-blue-50 border-blue-300'
                  }`}>
                    <div className="flex items-start gap-2">
                      <Calendar size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600">
                          {level === 4 ? 'Next AI assignment:' : 'Next auto-transfer:'}
                        </p>
                        <p className={`text-sm ${level === 4 ? 'text-purple-900' : 'text-blue-900'}`}>
                          {formatNextAssignment(goal.nextAssignment)}
                        </p>
                        {goal.monthlySuggestion && (
                          <p className="text-xs text-gray-600">
                            ${goal.monthlySuggestion.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedGoal(goal.id)}
                    className="flex-1 py-2 px-4 border-2 border-gray-900 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={16} className="inline mr-1" />
                    {(level === 3 || level === 4) ? 'Manual Override' : 'Add Money'}
                  </button>

                  {level === 2 && goal.autoAssign && goal.monthlySuggestion && (
                    <button
                      onClick={() => handleQuickAssign(goal.id, goal.monthlySuggestion!)}
                      className="flex-1 py-2 px-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                    >
                      Quick Assign ${goal.monthlySuggestion.toFixed(2)}
                    </button>
                  )}
                </div>

                {(level === 3 || level === 4) && (
                  <p className="text-xs text-gray-500 mt-2">
                    ℹ️ Manual additions work alongside automated transfers
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedGoal && (
        <ManualAddModal
          goal={goals.find(g => g.id === selectedGoal)!}
          onClose={() => setSelectedGoal(null)}
          onAdd={(amount) => {
            onAddMoney(selectedGoal, amount);
            setSelectedGoal(null);
          }}
        />
      )}
    </div>
  );
}