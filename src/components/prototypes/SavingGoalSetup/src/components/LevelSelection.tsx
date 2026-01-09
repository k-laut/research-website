import React from 'react';
import { AutomationLevel } from '../App';

interface LevelSelectionProps {
  onSelectLevel: (level: AutomationLevel) => void;
}

export function LevelSelection({ onSelectLevel }: LevelSelectionProps) {
  return (
    <div className="p-6 h-full flex flex-col overflow-y-auto">
      <div className="mb-8">
        <h1 className="mb-2">Setting Up Saving Goals</h1>
        <p className="text-gray-600">Choose automation level</p>
      </div>

      <div className="space-y-4 flex-1">
        <button
          onClick={() => onSelectLevel(0)}
          className="w-full p-6 border-2 border-gray-900 bg-white text-left hover:bg-gray-50 transition-colors"
        >
          <h2 className="mb-2">Level 0: Full Manual</h2>
          <p className="text-gray-600 text-sm">
            Set up goals and manually transfer money at your own pace. 
            Complete control over when and how you save toward your goals.
          </p>
        </button>

        <button
          onClick={() => onSelectLevel(1)}
          className="w-full p-6 border-2 border-gray-900 bg-white text-left hover:bg-gray-50 transition-colors"
        >
          <h2 className="mb-2">Level 1: Manual with Suggestions</h2>
          <p className="text-gray-600 text-sm">
            Set up goals and receive helpful monthly contribution suggestions.
            Still manually transfer money, but with guidance to reach your target.
          </p>
        </button>

        <button
          onClick={() => onSelectLevel(2)}
          className="w-full p-6 border-2 border-gray-900 bg-white text-left hover:bg-gray-50 transition-colors"
        >
          <h2 className="mb-2">Level 2: Assisted Automation</h2>
          <p className="text-gray-600 text-sm">
            Receive suggestions and quickly assign the recommended amount with one click.
            Automatic tracking of monthly contributions needed.
          </p>
        </button>

        <button
          onClick={() => onSelectLevel(3)}
          className="w-full p-6 border-2 border-gray-900 bg-white text-left hover:bg-gray-50 transition-colors"
        >
          <h2 className="mb-2">Level 3: Agent-Assisted</h2>
          <p className="text-gray-600 text-sm">
            AI agent performs automated saving with scheduled transfers.
            Monthly progress checks and prognosis. Manual override available anytime.
          </p>
        </button>

        <button
          onClick={() => onSelectLevel(4)}
          className="w-full p-6 border-2 border-gray-900 bg-white text-left hover:bg-gray-50 transition-colors"
        >
          <h2 className="mb-2">Level 4: Multi-Agent Orchestration</h2>
          <p className="text-gray-600 text-sm">
            Fully automated system with intelligent agents that learn and adapt.
            Detects opportunities, optimizes savings, and evolves with your habits.
          </p>
        </button>
      </div>
    </div>
  );
}