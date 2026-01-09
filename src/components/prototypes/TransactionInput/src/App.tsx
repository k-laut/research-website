import { useState, useEffect } from 'react';
import { AutomationLevelMenu } from './components/AutomationLevelMenu';
import { TransactionEntry } from './components/TransactionEntry';
import { TransactionList } from './components/TransactionList';
import { DailyReminder } from './components/DailyReminder';
import { LinkedAccountView } from './components/LinkedAccountView';
import { LinkedAccountViewLevel3 } from './components/LinkedAccountViewLevel3';
import { LinkedAccountViewLevel4 } from './components/LinkedAccountViewLevel4';

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  confirmed?: boolean;
}

export default function App() {
  const [automationLevel, setAutomationLevel] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showReminder, setShowReminder] = useState(false);
  const [lastReminderDate, setLastReminderDate] = useState<string | null>(null);
  const [accountBalance, setAccountBalance] = useState(2500.00);

  // Mock linked account transactions for Level 2
  const [linkedTransactions, setLinkedTransactions] = useState<Transaction[]>([
    {
      id: 'linked-1',
      amount: 45.99,
      category: 'Groceries',
      date: new Date().toISOString().split('T')[0],
      description: 'Whole Foods Market',
      confirmed: false,
    },
    {
      id: 'linked-2',
      amount: 12.50,
      category: 'Transportation',
      date: new Date().toISOString().split('T')[0],
      description: 'Metro Card',
      confirmed: false,
    },
    {
      id: 'linked-3',
      amount: 89.00,
      category: 'Bills',
      date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
      description: 'Electric Company',
      confirmed: false,
    },
  ]);

  // Mock auto-categorized transactions for Level 3 & 4
  const [autoCategorizedTransactions, setAutoCategorizedTransactions] = useState<Transaction[]>([
    {
      id: 'auto-1',
      amount: 45.99,
      category: 'Groceries',
      date: new Date().toISOString().split('T')[0],
      description: 'Whole Foods Market',
      confirmed: true,
    },
    {
      id: 'auto-2',
      amount: 12.50,
      category: 'Transportation',
      date: new Date().toISOString().split('T')[0],
      description: 'Metro Card',
      confirmed: true,
    },
    {
      id: 'auto-3',
      amount: 89.00,
      category: 'Bills',
      date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
      description: 'Electric Company',
      confirmed: true,
    },
    {
      id: 'auto-4',
      amount: 15.99,
      category: 'Entertainment',
      date: new Date(Date.now() - 172800000).toISOString().split('T')[0],
      description: 'Netflix Subscription',
      confirmed: true,
    },
  ]);

  // Check if daily reminder should be shown for Level 1
  useEffect(() => {
    if (automationLevel === 1) {
      const today = new Date().toDateString();
      const lastTransactionToday = transactions.some(
        t => new Date(t.date).toDateString() === today
      );
      
      // Simulate end-of-day check (show reminder if no transactions added today)
      const checkReminder = () => {
        const now = new Date();
        const currentHour = now.getHours();
        
        // Show reminder after 6 PM if no transactions today and not shown today
        if (currentHour >= 18 && !lastTransactionToday && lastReminderDate !== today) {
          setShowReminder(true);
          setLastReminderDate(today);
        }
      };
      
      checkReminder();
      const interval = setInterval(checkReminder, 60000); // Check every minute
      
      return () => clearInterval(interval);
    }
  }, [automationLevel, transactions, lastReminderDate]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      confirmed: automationLevel === 2 ? false : true,
    };
    
    if (automationLevel === 2) {
      setLinkedTransactions([newTransaction, ...linkedTransactions]);
    } else {
      setTransactions([newTransaction, ...transactions]);
    }
  };

  const confirmTransaction = (id: string) => {
    const transaction = linkedTransactions.find(t => t.id === id);
    if (transaction) {
      setLinkedTransactions(linkedTransactions.map(t => 
        t.id === id ? { ...t, confirmed: true } : t
      ));
      setTransactions([{ ...transaction, confirmed: true }, ...transactions]);
      setAccountBalance(accountBalance - transaction.amount);
    }
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const handleBack = () => {
    setAutomationLevel(null);
  };

  if (automationLevel === null) {
    return <AutomationLevelMenu onSelectLevel={setAutomationLevel} />;
  }

  if (automationLevel === 4) {
    return (
      <LinkedAccountViewLevel4
        transactions={autoCategorizedTransactions}
        accountBalance={accountBalance}
        onEditTransaction={(id, updatedTransaction) => {
          setAutoCategorizedTransactions(autoCategorizedTransactions.map(t =>
            t.id === id ? { ...t, ...updatedTransaction } : t
          ));
        }}
        onUndoAll={() => {
          setAutoCategorizedTransactions([]);
          setAccountBalance(2500.00);
        }}
        onBack={handleBack}
      />
    );
  }

  if (automationLevel === 3) {
    return (
      <LinkedAccountViewLevel3
        transactions={autoCategorizedTransactions}
        accountBalance={accountBalance}
        onEditTransaction={(id, updatedTransaction) => {
          setAutoCategorizedTransactions(autoCategorizedTransactions.map(t =>
            t.id === id ? { ...t, ...updatedTransaction } : t
          ));
        }}
        onUndoAll={() => {
          setAutoCategorizedTransactions([]);
          setAccountBalance(2500.00);
        }}
        onBack={handleBack}
      />
    );
  }

  if (automationLevel === 2) {
    return (
      <LinkedAccountView
        linkedTransactions={linkedTransactions}
        confirmedTransactions={transactions}
        accountBalance={accountBalance}
        onConfirmTransaction={confirmTransaction}
        onAddTransaction={addTransaction}
        onDeleteTransaction={deleteTransaction}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto bg-white min-h-screen border-x border-gray-300">
        {/* Header */}
        <div className="bg-white border-b-2 border-gray-900 p-4">
          <button
            onClick={handleBack}
            className="mb-2 flex items-center gap-1 text-gray-900"
          >
            <span>←</span> Back
          </button>
          <h1>Transaction Input</h1>
          <p className="text-gray-700 mt-1">
            {automationLevel === 0 && 'Level 0: Manual Entry'}
            {automationLevel === 1 && 'Level 1: Manual + Reminders'}
          </p>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <TransactionEntry onAddTransaction={addTransaction} />
          <div className="mt-6">
            <TransactionList 
              transactions={transactions} 
              onDeleteTransaction={deleteTransaction}
            />
          </div>
        </div>

        {/* Daily Reminder for Level 1 */}
        {automationLevel === 1 && showReminder && (
          <DailyReminder 
            onDismiss={() => setShowReminder(false)}
            onAddTransaction={() => setShowReminder(false)}
          />
        )}
      </div>
    </div>
  );
}