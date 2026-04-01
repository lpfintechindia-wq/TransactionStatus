import { useState } from 'react';
import { PaymentStatus } from './components/PaymentStatus';

type StatusType = 'success' | 'pending' | 'reject';

export default function App() {
  const [currentStatus, setCurrentStatus] = useState<StatusType>('success');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Status Selector */}
        <div className="flex gap-3 mb-6 justify-center">
          <button
            onClick={() => setCurrentStatus('success')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentStatus === 'success'
                ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Success
          </button>
          <button
            onClick={() => setCurrentStatus('pending')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentStatus === 'pending'
                ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setCurrentStatus('reject')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentStatus === 'reject'
                ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Reject
          </button>
        </div>

        {/* Payment Status Component */}
        <PaymentStatus status={currentStatus} />
      </div>
    </div>
  );
}
