import { useEffect, useState } from 'react';
import { CheckCircle, Copy, ArrowRight, Clock, XCircle } from 'lucide-react';
import svgPaths from '../../imports/RedesignInterface/svg-6tta4s468m';

type StatusType = 'success' | 'pending' | 'reject';

interface PaymentStatusProps {
  status: StatusType;
}

const statusConfig = {
  success: {
    title: 'Payment Successful',
    subtitle: 'Your transaction has been completed',
    gradientFrom: '#C07BFC',
    gradientTo: '#4B1B91',
    statusBg: '#e4c5ff',
    statusText: '#5d3991',
    statusDot: '#4b1b91',
    statusLabel: 'SUCCESS',
    showRedirect: true,
  },
  pending: {
    title: 'Payment Pending',
    subtitle: 'Your transaction is being processed',
    gradientFrom: '#FFA726',
    gradientTo: '#F57C00',
    statusBg: '#fff4e6',
    statusText: '#e65100',
    statusDot: '#f57c00',
    statusLabel: 'PENDING',
    showRedirect: false,
  },
  reject: {
    title: 'Payment Failed',
    subtitle: 'Your transaction could not be completed',
    gradientFrom: '#EF5350',
    gradientTo: '#C62828',
    statusBg: '#ffebee',
    statusText: '#c62828',
    statusDot: '#ef5350',
    statusLabel: 'FAILED',
    showRedirect: false,
  },
};

function SuccessIcon() {
  return (
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 blur-[40px] opacity-40 rounded-full" style={{ background: '#C07BFC' }}></div>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g>
          <path d={svgPaths.p18fb3a80} stroke="url(#paint0_linear_success)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p2b701700} stroke="url(#paint1_linear_success)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_success" x1="45.9841" x2="-12.5622" y1="-13.476" y2="21.8164">
            <stop offset="0" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_success" x1="47.8528" x2="15.7091" y1="0.263951" y2="25.4535">
            <stop offset="0" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PendingIcon() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <Clock className="w-14 h-14 text-orange-600 relative animate-pulse" strokeWidth={1.5} />
    </div>
  );
}

function RejectIcon() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-20"></div>
      <XCircle className="w-14 h-14 text-red-600 relative" strokeWidth={1.5} />
    </div>
  );
}

export function PaymentStatus({ status }: PaymentStatusProps) {
  const [countdown, setCountdown] = useState(26);
  const [copied, setCopied] = useState(false);
  const config = statusConfig[status];

  useEffect(() => {
    if (config.showRedirect) {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [config.showRedirect]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderIcon = () => {
    switch (status) {
      case 'success':
        return <SuccessIcon />;
      case 'pending':
        return <PendingIcon />;
      case 'reject':
        return <RejectIcon />;
    }
  };

  return (
    <div className="w-full">
      {/* Status Icon */}
      <div className="flex justify-center mb-3">
        {renderIcon()}
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div 
          className="px-6 py-3"
          style={{
            background: `linear-gradient(192.716deg, ${config.gradientFrom} 7.4574%, ${config.gradientTo} 99.258%)`
          }}
        >
          <h1 className="text-xl text-white text-center font-medium">{config.title}</h1>
          <p className="text-white/90 text-center mt-0.5 text-xs">{config.subtitle}</p>
        </div>

        {/* Amount Section */}
        <div className="px-6 py-4 bg-gradient-to-b from-green-50/30 to-white border-b border-slate-200">
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
              <span 
                className="w-1 h-4 rounded-full"
                style={{ background: config.gradientTo }}
              ></span>
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
              <span 
                className="w-1 h-4 rounded-full"
                style={{ background: config.gradientTo }}
              ></span>
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
                <span 
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: config.statusBg,
                    color: config.statusText
                  }}
                >
                  <span 
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: config.statusDot }}
                  ></span>
                  {config.statusLabel}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600 text-xs">Date & Time</span>
                <span className="text-slate-900 text-xs">01-Apr-2026 11:45:35</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redirect Section - Only for Success */}
        {config.showRedirect && (
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-200">
            <div className="bg-white border border-slate-200 rounded-xl p-3 mb-3">
              <p className="text-slate-600 text-xs text-center">
                Redirecting to merchant app in{' '}
                <span 
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full font-medium text-xs mx-1"
                  style={{
                    backgroundColor: config.statusBg,
                    color: config.statusText
                  }}
                >
                  {countdown}
                </span>{' '}
                seconds
              </p>
            </div>

            <button 
              className="w-full text-white py-3 rounded-xl font-medium text-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
              style={{
                background: `linear-gradient(188.893deg, ${config.gradientFrom} 7.4574%, ${config.gradientTo} 99.258%)`
              }}
            >
              Go to Merchant App Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Action Buttons for Pending/Reject */}
        {!config.showRedirect && (
          null
        )}
      </div>

      {/* Copy Notification */}
      {copied && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in z-50">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}
