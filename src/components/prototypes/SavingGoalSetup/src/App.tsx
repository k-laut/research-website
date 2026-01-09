import React, { useState } from 'react';
import { LevelSelection } from './components/LevelSelection';
import { GoalSetup } from './components/GoalSetup';
import { GoalsDashboard } from './components/GoalsDashboard';
import { MonthlyProgressCheck } from './components/MonthlyProgressCheck';
import { OpportunityNotification } from './components/OpportunityNotification';

export type AutomationLevel = 0 | 1 | 2 | 3 | 4;

export interface SavingGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  monthlySuggestion?: number;
  autoAssign?: boolean;
  nextAssignment?: string; // For Level 3/4 - date of next automated assignment
  automatedContributions?: boolean; // For Level 3/4
}

function App() {
  const [screen, setScreen] = useState<'level-selection' | 'goal-setup' | 'dashboard' | 'progress-check'>('level-selection');
  const [selectedLevel, setSelectedLevel] = useState<AutomationLevel | null>(null);
  const [goals, setGoals] = useState<SavingGoal[]>([]);
  const [availableBalance] = useState(2500);
  const [showOpportunityNotification, setShowOpportunityNotification] = useState(false);

  const handleLevelSelect = (level: AutomationLevel) => {
    setSelectedLevel(level);
    
    // For Level 3/4, show progress check first if there are goals
    if ((level === 3 || level === 4) && goals.length > 0) {
      setScreen('progress-check');
    } else if (level === 3) {
      // Initialize with a sample goal for Level 3 demo
      const sampleGoal: SavingGoal = {
        id: 'sample-1',
        name: 'Vacation to Japan',
        targetAmount: 3000,
        currentAmount: 600,
        targetDate: '2026-06-01',
        monthlySuggestion: 400,
        autoAssign: true,
        nextAssignment: getNextMonthFirstDay(),
        automatedContributions: true
      };
      setGoals([sampleGoal]);
      setScreen('progress-check');
    } else if (level === 4) {
      // Initialize with a sample goal for Level 4 demo
      const sampleGoal: SavingGoal = {
        id: 'sample-1',
        name: 'Emergency Fund',
        targetAmount: 5000,
        currentAmount: 1200,
        targetDate: '2026-03-01',
        monthlySuggestion: 500,
        autoAssign: true,
        nextAssignment: getNextMonthFirstDay(),
        automatedContributions: true
      };
      setGoals([sampleGoal]);
      setScreen('progress-check');
      // Show opportunity notification after a brief delay
      setTimeout(() => setShowOpportunityNotification(true), 2000);
    } else {
      setScreen('goal-setup');
    }
  };

  const getNextMonthFirstDay = () => {
    const next = new Date();
    next.setMonth(next.getMonth() + 1);
    next.setDate(1);
    return next.toISOString().split('T')[0];
  };

  const handleGoalCreate = (goal: SavingGoal) => {
    setGoals([...goals, goal]);
    setScreen('dashboard');
  };

  const handleAddMoney = (goalId: string, amount: number) => {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, currentAmount: goal.currentAmount + amount }
        : goal
    ));
  };

  const handleBack = () => {
    if (screen === 'goal-setup') {
      setScreen('level-selection');
    } else if (screen === 'dashboard') {
      setScreen('level-selection');
    } else if (screen === 'progress-check') {
      setScreen('level-selection');
    }
  };

  const handleProgressCheckContinue = () => {
    setScreen('dashboard');
  };

  const handleOpportunityAccept = (goalId: string, amount: number) => {
    handleAddMoney(goalId, amount);
    setShowOpportunityNotification(false);
  };

  const handleOpportunityDismiss = () => {
    setShowOpportunityNotification(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col" style={{ height: '812px' }}>
        {screen === 'level-selection' && (
          <LevelSelection onSelectLevel={handleLevelSelect} />
        )}
        {screen === 'goal-setup' && selectedLevel !== null && (
          <GoalSetup 
            level={selectedLevel} 
            onGoalCreate={handleGoalCreate}
            onBack={handleBack}
          />
        )}
        {screen === 'progress-check' && selectedLevel !== null && (
          <MonthlyProgressCheck
            level={selectedLevel}
            goals={goals}
            availableBalance={availableBalance}
            onContinue={handleProgressCheckContinue}
            onAddMoney={handleAddMoney}
          />
        )}
        {screen === 'dashboard' && selectedLevel !== null && (
          <GoalsDashboard 
            level={selectedLevel}
            goals={goals}
            availableBalance={availableBalance}
            onAddMoney={handleAddMoney}
            onBack={handleBack}
          />
        )}
        
        {showOpportunityNotification && selectedLevel === 4 && goals.length > 0 && (
          <OpportunityNotification
            goal={goals[0]}
            opportunityAmount={14.99}
            opportunitySource="Netflix"
            onAccept={handleOpportunityAccept}
            onDismiss={handleOpportunityDismiss}
          />
        )}
      </div>
    </div>
  );
}

export default App;