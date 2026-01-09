import { Settings, Bell, Sparkles } from 'lucide-react';

interface AutomationLevelMenuProps {
  onSelectLevel: (level: number) => void;
}

export function AutomationLevelMenu({ onSelectLevel }: AutomationLevelMenuProps) {
  const levels = [
    {
      level: 0,
      title: 'Level 0: Full Manual',
      description: 'Add all transactions manually at your own pace. Complete control over when and how you track your spending.',
    },
    {
      level: 1,
      title: 'Level 1: Manual with Reminders',
      description: 'Add transactions manually, but receive a daily reminder notification at the end of the day to log your spending.',
    },
    {
      level: 2,
      title: 'Level 2: Linked Account',
      description: 'Transactions automatically pulled from linked account. Confirm each transaction to update your budget.',
    },
    {
      level: 3,
      title: 'Level 3: Auto-Categorization',
      description: 'AI automatically categorizes transactions. Edit any transaction or use global undo.',
    },
    {
      level: 4,
      title: 'Level 4: AI Insights',
      description: 'AI provides proactive insights and learns from your actions to improve recommendations.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto border-x border-gray-300 min-h-screen">
        <div className="p-4 border-b-2 border-gray-900">
          <h1>Transaction Input</h1>
          <p className="text-gray-700 mt-1">
            Choose automation level
          </p>
        </div>

        <div className="p-4 space-y-3">
          {levels.map(({ level, title, description }) => (
            <button
              key={level}
              onClick={() => onSelectLevel(level)}
              className="w-full text-left p-4 border-2 border-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}