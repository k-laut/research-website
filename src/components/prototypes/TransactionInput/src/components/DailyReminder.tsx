import { Bell, X } from 'lucide-react';

interface DailyReminderProps {
  onDismiss: () => void;
  onAddTransaction: () => void;
}

export function DailyReminder({ onDismiss, onAddTransaction }: DailyReminderProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-4 border-gray-900 max-w-sm w-full">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 relative">
          <button
            onClick={onDismiss}
            className="absolute top-3 right-3 text-white"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6" />
            <div>
              <h3>Daily Reminder</h3>
              <p className="text-sm mt-0.5">End of day check-in</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-900 mb-1">
            Did you make any purchases today?
          </p>
          <p className="text-sm text-gray-600">
            Log today's transactions to keep your budget on track.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={onDismiss}
              className="flex-1 px-3 py-2 border-2 border-gray-900 bg-white"
            >
              Dismiss
            </button>
            <button
              onClick={onAddTransaction}
              className="flex-1 px-3 py-2 bg-gray-900 text-white border-2 border-gray-900"
            >
              Add Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}