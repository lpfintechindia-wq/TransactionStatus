import { useEffect, useState } from 'react';
import { CheckCircle, Copy, ArrowRight } from 'lucide-react';

export function PaymentSuccess() {
  const [countdown, setCountdown] = useState(29);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Success Icon */}
        <div className="flex justify-center mb-3">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <CheckCircle className="w-14 h-14 text-green-500 relative" strokeWidth={1.5} />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3">
            <h1 className="text-xl text-white text-center font-medium">Payment Successful</h1>
            <p className="text-green-50 text-center mt-0.5 text-xs">Your transaction has been completed</p>
          </div>

          {/* Amount Section */}
          <div className="px-6 py-4 bg-gradient-to-b from-green-50 to-white border-b border-slate-200">
            <div className="text-center">
              <p className="text-slate-600 text-xs mb-1">Amount Paid</p>
              <p className="text-4xl font-light text-slate-900">₹100.00</p>
              <p className="text-slate-500 text-xs mt-1">INR</p>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="px-6 py-4 space-y-4">
            {/* Order Info */}
            <div>
              <h2 className="text-slate-900 font-medium mb-2 flex items-center gap-2 text-sm">
                <span className="w-1 h-4 bg-green-500 rounded-full"></span>
                Order Information
              </h2>
              <div className="bg-slate-50 rounded-xl p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Order ID</p>
                    <p className="text-xs text-slate-900 font-mono">ORD_20260401061355_H6864</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('ORD_20260401061355_H6864')}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                    title="Copy Order ID"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div>
              <h2 className="text-slate-900 font-medium mb-2 flex items-center gap-2 text-sm">
                <span className="w-1 h-4 bg-green-500 rounded-full"></span>
                Transaction Details
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 text-xs">Customer Name</span>
                  <span className="text-slate-900 text-xs font-medium">Shaily</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 text-xs">Transaction ID</span>
                  <span className="text-slate-900 text-xs font-mono">LPI177502413508001</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 text-xs">Status</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    SUCCESS
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-600 text-xs">Date & Time</span>
                  <span className="text-slate-900 text-xs">01-Apr-2026 11:45:35</span>
                </div>
              </div>
            </div>
          </div>

          {/* Redirect Section */}
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-200">
            <div className="bg-white border border-slate-200 rounded-xl p-3 mb-3">
              <p className="text-slate-600 text-xs text-center">
                Redirecting to merchant app in{' '}
                <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-medium text-xs mx-1">
                  {countdown}
                </span>{' '}
                seconds
              </p>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-xl font-medium text-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group">
              Go to Merchant App Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copy Notification */}
        {copied && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}