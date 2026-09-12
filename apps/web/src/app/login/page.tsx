'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, UserRole } from '../../context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login, ssoLogin, forgotPassword } = useAuth();

  const [userName, setUserName] = useState('Dhanunjay Narra');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [selectedRole, setSelectedRole] = useState<UserRole>('Executive');
  
  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Forgot password modal state
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');
  const [isForgotSubmitting, setIsForgotSubmitting] = useState(false);

  const roles: UserRole[] = ['Executive', 'Finance', 'Sales', 'HR', 'Support', 'Security', 'Admin'];

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const res = await login(email, password, selectedRole, rememberMe, userName);
    setIsLoading(false);

    if (res.success) {
      setAuthSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 600);
    } else {
      setErrorMessage(res.error || 'Authentication failed. Please verify credentials.');
    }
  };

  const handleSSOClick = async (provider: string) => {
    setIsLoading(true);
    setErrorMessage('');
    const res = await ssoLogin(provider, selectedRole);
    setIsLoading(false);

    if (res.success) {
      setAuthSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 600);
    } else {
      setErrorMessage(res.error || `Failed to sign in with ${provider}`);
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsForgotSubmitting(true);
    const res = await forgotPassword(forgotEmail || email);
    setIsForgotSubmitting(false);
    setForgotMessage(res.message);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#F7F8FA] font-sans antialiased text-[#1E2022]">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#E2DFD8]/60 space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-[#1E2022] tracking-tight">Welcome Back</h3>
          <p className="text-xs text-[#1E2022]/60">Sign in to your NEXORA account</p>
        </div>

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <span>⚠️</span> {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* User Name / Display Name */}
          <div className="space-y-1.5">
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">👤</span>
              <input
                type="text"
                required
                placeholder="User Name (e.g. Dhanunjay Narra)"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022] placeholder:text-[#1E2022]/40"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">✉</span>
              <input
                type="text"
                required
                placeholder="Email address (any email works)"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022] placeholder:text-[#1E2022]/40"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022] placeholder:text-[#1E2022]/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-[#1E2022]/40 hover:text-[#1E2022] text-xs transition"
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          {/* Checkbox & Forgot Password */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-[#1E2022]/80">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                className="rounded border-[#E2DFD8] text-[#5E6AD2] focus:ring-[#5E6AD2]"
              />
              Remember me
            </label>
            <button
              type="button"
              onClick={() => {
                setForgotEmail(email);
                setForgotMessage('');
                setIsForgotModalOpen(true);
              }}
              className="text-[#5E6AD2] hover:underline font-semibold text-xs"
            >
              Forgot password?
            </button>
          </div>

          {/* Role Selector */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">
              Select Your Role
            </label>
            <div className="flex flex-wrap gap-1.5">
              {roles.map(role => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold transition ${
                    selectedRole === role
                      ? 'bg-[#5E6AD2] text-white shadow-sm'
                      : 'bg-[#EFECE6] text-[#1E2022]/70 hover:bg-[#E2DFD8]'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || authSuccess}
            className="w-full py-3 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⚙</span> Authenticating...
              </>
            ) : authSuccess ? (
              <>
                <span>✓</span> Signed In! Redirecting...
              </>
            ) : (
              <>
                <span>➔</span> Sign In as {selectedRole}
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-[#E2DFD8] w-full" />
          <span className="bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-[#1E2022]/40 relative">
            OR
          </span>
        </div>

        {/* SSO Provider Buttons */}
        <div className="grid grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => handleSSOClick('Google')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] hover:bg-[#EFECE6] text-xs font-semibold text-[#1E2022] transition"
          >
            <span className="font-bold text-blue-600">G</span> Google
          </button>
          <button
            type="button"
            onClick={() => handleSSOClick('Microsoft')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] hover:bg-[#EFECE6] text-xs font-semibold text-[#1E2022] transition"
          >
            <span className="text-amber-500 font-bold">田</span> Microsoft
          </button>
          <button
            type="button"
            onClick={() => handleSSOClick('SAML Enterprise')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] hover:bg-[#EFECE6] text-xs font-semibold text-[#1E2022] transition"
          >
            <span className="text-[#5E6AD2] text-xs">🛡️</span> SSO
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E2DFD8] flex items-center justify-between">
          <span className="text-[11px] text-[#1E2022]/60 font-medium">Audit & Logins:</span>
          <a
            href="http://localhost:4000/api/v1/export/logins.xlsx"
            download
            className="px-3 py-1.5 bg-[#E8F0EC] hover:bg-[#D5E5DC] text-[#2E5A44] border border-[#C8DDD2] text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5"
            title="Download Excel report of all user logins"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>Download Login Excel</span>
          </a>
        </div>
      </div>

      {/* FORGOT PASSWORD MODAL */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E2DFD8] space-y-4 relative animate-in fade-in zoom-in duration-200">
            <button
              type="button"
              onClick={() => setIsForgotModalOpen(false)}
              className="absolute top-4 right-4 text-[#1E2022]/40 hover:text-[#1E2022] text-sm"
            >
              ✕
            </button>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#1E2022]">Reset Password</h3>
              <p className="text-xs text-[#1E2022]/60">
                Enter your account email to receive reset instructions via NEXORA Auth Gateway.
              </p>
            </div>

            {forgotMessage ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-3">
                <p className="font-semibold">✓ Dispatch Successful</p>
                <p>{forgotMessage}</p>
                <button
                  type="button"
                  onClick={() => setIsForgotModalOpen(false)}
                  className="w-full py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">✉</span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your registered email"
                    value={forgotEmail}
                    onChange={e => setForgotEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsForgotModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isForgotSubmitting}
                    className="flex-1 py-2.5 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl shadow-md transition disabled:opacity-50"
                  >
                    {isForgotSubmitting ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
