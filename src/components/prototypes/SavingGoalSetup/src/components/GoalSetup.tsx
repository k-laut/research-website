import React, { useState, useEffect } from 'react';
import { AutomationLevel, SavingGoal } from '../App';
import { ArrowLeft, Info, Bot, Calendar, Zap } from 'lucide-react';

interface GoalSetupProps {
  level: AutomationLevel;
  onGoalCreate: (goal: SavingGoal) => void;
  onBack: () => void;
}

export function GoalSetup({ level, onGoalCreate, onBack }: GoalSetupProps) {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [monthlySuggestion, setMonthlySuggestion] = useState<number | null>(null);
  const [enableAutoAssign, setEnableAutoAssign] = useState(false);
  const [goalCreated, setGoalCreated] = useState(false);
  const [createdGoal, setCreatedGoal] = useState<SavingGoal | null>(null);

  useEffect(() => {
    if ((level >= 1) && targetAmount && targetDate) {
      calculateMonthlySuggestion();
    }
  }, [targetAmount, targetDate, level]);

  const calculateMonthlySuggestion = () => {
    const target = parseFloat(targetAmount);
    const today = new Date();
    const target_date = new Date(targetDate);
    
    if (target && target_date > today) {
      const monthsRemaining = Math.max(1, Math.ceil(
        (target_date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 30)
      ));
      const suggestion = target / monthsRemaining;
      setMonthlySuggestion(suggestion);
    } else {
      setMonthlySuggestion(null);
    }
  };

  const getNextMonthFirstDay = () => {
    const next = new Date();
    next.setMonth(next.getMonth() + 1);
    next.setDate(1);
    return next.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const goal: SavingGoal = {
      id: Date.now().toString(),
      name,
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
      targetDate,
      monthlySuggestion: (level >= 1) ? monthlySuggestion || undefined : undefined,
      autoAssign: level === 2 ? enableAutoAssign : false,
      nextAssignment: (level === 3 || level === 4) ? getNextMonthFirstDay() : undefined,
      automatedContributions: (level === 3 || level === 4) ? true : false,
    };
    
    if (level === 3 || level === 4) {
      setCreatedGoal(goal);
      setGoalCreated(true);
    } else {
      onGoalCreate(goal);
    }
  };

  const handleConfirmGoal = () => {
    if (createdGoal) {
      onGoalCreate(createdGoal);
    }
  };

  const formatNextAssignment = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const getLevelName = () => {
    switch (level) {
      case 0: return 'Level 0: Full Manual';
      case 1: return 'Level 1: Manual with Suggestions';
      case 2: return 'Level 2: Assisted Automation';
      case 3: return 'Level 3: Agent-Assisted';
      case 4: return 'Level 4: Multi-Agent Orchestration';
    }
  };

  // Show confirmation screen for Level 3/4 after goal creation
  if (goalCreated && createdGoal && (level === 3 || level === 4)) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="mb-2">Goal Created Successfully!</h1>
          <p className="text-gray-600">{getLevelName()}</p>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          {/* Assignment Notification at the top */}
          <div className={`p-4 border-2 rounded-lg mb-6 ${
            level === 4 
              ? 'bg-purple-50 border-purple-300' 
              : 'bg-green-50 border-green-300'
          }`}>
            <div className="flex items-start gap-3 mb-3">
              {level === 4 ? (
                <Zap size={24} className="text-purple-600 flex-shrink-0" />
              ) : (
                <Bot size={24} className="text-green-600 flex-shrink-0" />
              )}
              <div className="flex-1">
                <h3 className="mb-1">
                  {level === 4 ? 'Multi-Agent System Activated' : 'Automated Saving Enabled'}
                </h3>
                <p className="text-sm text-gray-700">
                  {level === 4 
                    ? 'Your goal has been registered with the AI agent system'
                    : 'The agent will handle monthly transfers automatically'
                  }
                </p>
              </div>
            </div>

            {createdGoal.nextAssignment && (
              <div className="flex items-start gap-2 p-3 bg-white border border-gray-300 rounded">
                <Calendar size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Next automated assignment:</p>
                  <p className={level === 4 ? 'text-purple-900' : 'text-green-900'}>
                    {formatNextAssignment(createdGoal.nextAssignment)}
                  </p>
                  {createdGoal.monthlySuggestion && (
                    <p className="text-sm text-gray-700 mt-1">
                      Amount: ${createdGoal.monthlySuggestion.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Goal Summary */}
          <div className="border-2 border-gray-900 p-4 bg-white mb-6">
            <h3 className="mb-3">Goal Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span>{createdGoal.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Target Amount:</span>
                <span>${createdGoal.targetAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Target Date:</span>
                <span>{new Date(createdGoal.targetDate).toLocaleDateString()}</span>
              </div>
              {createdGoal.monthlySuggestion && (
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-600">Monthly Amount:</span>
                  <span className={level === 4 ? 'text-purple-900' : 'text-green-900'}>
                    ${createdGoal.monthlySuggestion.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {level === 3 && (
            <div className="p-4 bg-blue-50 border border-blue-300 rounded">
              <p className="text-sm text-gray-700">
                ℹ️ You can manually override the agent's actions at any time from the dashboard.
              </p>
            </div>
          )}

          {level === 4 && (
            <div className="p-4 bg-purple-50 border border-purple-300 rounded">
              <p className="text-sm mb-2">
                <span className="text-purple-900">Active Agents:</span>
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>🤖 Savings Agent - Manages automated contributions</li>
                <li>📊 Budget Agent - Monitors spending patterns</li>
                <li>💡 Opportunity Agent - Detects saving opportunities</li>
              </ul>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={handleConfirmGoal}
            className={`w-full py-4 text-white hover:opacity-90 transition-opacity ${
              level === 4 ? 'bg-purple-600' : 'bg-green-600'
            }`}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-700 mb-4 hover:text-gray-900">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="mb-2">New Saving Goal</h1>
        <p className="text-gray-600">{getLevelName()}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex-1 flex flex-col overflow-y-auto">
        <div className="space-y-6 flex-1">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Goal Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Emergency Fund"
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="amount" className="block mb-2 text-gray-700">
              Target Amount ($)
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block mb-2 text-gray-700">
              Target Date
            </label>
            <input
              id="date"
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none"
              required
            />
          </div>

          {(level === 1 || level === 2) && monthlySuggestion !== null && (
            <div className="p-4 bg-blue-50 border-2 border-blue-200">
              <div className="flex items-start gap-2">
                <Info size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm mb-1">
                    <span className="text-gray-700">Suggested monthly contribution:</span>
                  </p>
                  <p className="text-blue-900">
                    ${monthlySuggestion.toFixed(2)} per month
                  </p>
                </div>
              </div>
            </div>
          )}

          {(level === 3 || level === 4) && monthlySuggestion !== null && (
            <div className={`p-4 border-2 rounded ${
              level === 4 
                ? 'bg-purple-50 border-purple-300' 
                : 'bg-blue-50 border-blue-300'
            }`}>
              <div className="flex items-start gap-2">
                {level === 4 ? (
                  <Zap size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <Bot size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="text-sm mb-1">
                    <span className="text-gray-700">
                      {level === 4 ? 'AI-calculated monthly contribution:' : 'Agent will assign monthly:'}
                    </span>
                  </p>
                  <p className={level === 4 ? 'text-purple-900' : 'text-blue-900'}>
                    ${monthlySuggestion.toFixed(2)} per month
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {level === 4 
                      ? 'This amount will be automatically transferred by the Savings Agent'
                      : 'Automated transfers will happen on the 1st of each month'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {level === 2 && monthlySuggestion !== null && (
            <div className="pt-4 border-t border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableAutoAssign}
                  onChange={(e) => setEnableAutoAssign(e.target.checked)}
                  className="mt-1 w-5 h-5 border-2 border-gray-300"
                />
                <div>
                  <span className="block text-gray-900">Enable quick assignment</span>
                  <span className="block text-sm text-gray-600">
                    Show monthly amount and one-click assign button on dashboard
                  </span>
                </div>
              </label>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors mt-6"
        >
          {level === 3 || level === 4 ? 'Create Goal & Enable Agent' : 'Create Goal'}
        </button>
      </form>
    </div>
  );
}