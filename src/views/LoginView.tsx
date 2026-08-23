import React, { useState } from 'react';
import { UserAccount, UserRole } from '../types';
import {
  Eye,
  EyeOff,
  Heart,
  Smile,
  Star,
  Moon,
  Sun,
  BookOpen
} from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: (user: UserAccount) => void;
  onNavigate: (view: string) => void;
  isCalmMode: boolean;
  currentUser?: UserAccount | null;
  onLogout?: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({
  onLoginSuccess,
  onNavigate,
  isCalmMode,
  currentUser,
  onLogout
}) => {
  const [accountType, setAccountType] = useState<'standard' | 'learner'>('standard');
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Standard Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Learner Form States
  const [learnerName, setLearnerName] = useState('');
  const [selectedBadge, setSelectedBadge] = useState<string>('star');
  
  // Feedback
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const learnerBadges = [
    { id: 'star', label: 'Star', icon: Star },
    { id: 'moon', label: 'Moon', icon: Moon },
    { id: 'sun', label: 'Sun', icon: Sun },
    { id: 'book', label: 'Book', icon: BookOpen },
    { id: 'heart', label: 'Heart', icon: Heart },
    { id: 'smile', label: 'Smile', icon: Smile }
  ];

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please fill in your email and password.');
      return;
    }

    const account: UserAccount = {
      id: `usr-${Date.now()}`,
      name: name.trim() || 'Parent Account',
      email: email.trim(),
      role: 'parent',
      avatarIcon: 'Heart',
      savedLearnerCount: 2,
      joinedDate: 'August 2026'
    };

    onLoginSuccess(account);
  };

  const handleLearnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!learnerName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    const account: UserAccount = {
      id: `learner-${Date.now()}`,
      name: learnerName.trim(),
      email: `${learnerName.toLowerCase().replace(/\s+/g, '')}@bridgelearner.local`,
      role: 'learner',
      avatarIcon: 'Smile',
      savedLearnerCount: 1,
      joinedDate: 'August 2026'
    };

    onLoginSuccess(account);
  };

  const handleDemoSignIn = (role: UserRole) => {
    if (role === 'parent') {
      onLoginSuccess({
        id: 'demo-parent',
        name: 'Amina Rahman',
        email: 'amina@example.com',
        role: 'parent',
        avatarIcon: 'Heart',
        savedLearnerCount: 2
      });
    } else if (role === 'educator') {
      onLoginSuccess({
        id: 'demo-educator',
        name: 'Ustadh Tariq',
        email: 'tariq@madrasah.org',
        role: 'educator',
        avatarIcon: 'School',
        savedLearnerCount: 12
      });
    } else {
      onLoginSuccess({
        id: 'demo-learner',
        name: 'Zayd',
        email: 'zayd@bridge.local',
        role: 'learner',
        avatarIcon: 'Smile',
        savedLearnerCount: 1
      });
    }
  };

  // If already logged in, show simple profile
  if (currentUser) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xs border border-[#99AFD7]/40 space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#E8EEF8] text-[#344D76] flex items-center justify-center mx-auto text-xl font-bold border border-[#99AFD7]/40">
            {currentUser.name.charAt(0)}
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900">
              Assalamu Alaikum, {currentUser.name}
            </h2>
            <p className="text-sm text-slate-500">{currentUser.email}</p>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('create')}
              className="w-full py-3 bg-[#99AFD7] hover:bg-[#869EC9] text-white font-bold text-sm rounded-xl transition-colors shadow-2xs"
            >
              Create a Lesson
            </button>
            <button
              type="button"
              onClick={() => onNavigate('learner-profile')}
              className="w-full py-3 bg-[#E8EEF8] hover:bg-[#DCE5F4] text-[#344D76] font-bold text-sm rounded-xl transition-colors border border-[#99AFD7]/40"
            >
              Learner Profiles
            </button>
            {onLogout && (
              <button
                type="button"
                onClick={onLogout}
                className="w-full py-2.5 text-rose-600 hover:text-rose-700 font-semibold text-xs transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      {/* Clean Header */}
      <div className="text-center space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h1>
        <p className="text-sm text-slate-500">
          Personalized Islamic learning for every child
        </p>
      </div>

      {/* Account Type Toggle */}
      <div className="bg-[#E8EEF8]/80 p-1 rounded-2xl flex gap-1 border border-[#99AFD7]/30">
        <button
          type="button"
          onClick={() => {
            setAccountType('standard');
            setErrorMsg(null);
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            accountType === 'standard'
              ? 'bg-white text-[#344D76] shadow-2xs border border-[#99AFD7]/30'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Parent / Educator
        </button>
        <button
          type="button"
          onClick={() => {
            setAccountType('learner');
            setErrorMsg(null);
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            accountType === 'learner'
              ? 'bg-white text-[#344D76] shadow-2xs border border-[#99AFD7]/30'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Learner Space
        </button>
      </div>

      {/* Main Form Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xs border border-[#99AFD7]/35 space-y-5">
        {errorMsg && (
          <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-xl font-medium border border-rose-100">
            {errorMsg}
          </div>
        )}

        {accountType === 'standard' ? (
          <form onSubmit={handleStandardSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Amina"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#99AFD7]/30 focus:border-[#99AFD7] focus:ring-2 focus:ring-[#99AFD7]/30 text-sm outline-none bg-[#F7F9FD]"
                  required
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#99AFD7]/30 focus:border-[#99AFD7] focus:ring-2 focus:ring-[#99AFD7]/30 text-sm outline-none bg-[#F7F9FD]"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-[#99AFD7]/30 focus:border-[#99AFD7] focus:ring-2 focus:ring-[#99AFD7]/30 text-sm outline-none bg-[#F7F9FD]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#99AFD7] hover:bg-[#869EC9] text-white font-bold text-sm rounded-xl transition-colors mt-2 shadow-2xs"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-xs text-[#435C87] hover:text-[#213554] font-medium"
              >
                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Create one"}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLearnerSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600">Your Name</label>
              <input
                type="text"
                value={learnerName}
                onChange={(e) => setLearnerName(e.target.value)}
                placeholder="e.g. Zayd"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#99AFD7]/30 focus:border-[#99AFD7] focus:ring-2 focus:ring-[#99AFD7]/30 text-sm outline-none font-medium bg-[#F7F9FD]"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600">Pick a Badge</label>
              <div className="grid grid-cols-3 gap-2">
                {learnerBadges.map((badge) => {
                  const isSelected = selectedBadge === badge.id;
                  const Icon = badge.icon;
                  return (
                    <button
                      key={badge.id}
                      type="button"
                      onClick={() => setSelectedBadge(badge.id)}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                        isSelected
                          ? 'border-[#99AFD7] bg-[#E8EEF8] text-[#344D76] font-bold shadow-2xs'
                          : 'border-[#99AFD7]/20 bg-[#F7F9FD] text-slate-600 hover:bg-[#EEF3F9]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-2xs">{badge.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#99AFD7] hover:bg-[#869EC9] text-white font-bold text-sm rounded-xl transition-colors mt-2 shadow-2xs"
            >
              Start Learning
            </button>
          </form>
        )}

        {/* Quick 1-Click Demo Logins */}
        <div className="pt-4 border-t border-[#99AFD7]/25 space-y-2 text-center">
          <span className="text-3xs font-bold text-[#5D7CAE] uppercase tracking-wider">
            Quick Demo Sign-In
          </span>
          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={() => handleDemoSignIn('parent')}
              className="px-3 py-1.5 bg-[#E8EEF8] hover:bg-[#DCE5F4] border border-[#99AFD7]/40 rounded-lg text-xs font-semibold text-[#344D76] transition-colors"
            >
              Parent
            </button>
            <button
              type="button"
              onClick={() => handleDemoSignIn('educator')}
              className="px-3 py-1.5 bg-[#E8EEF8] hover:bg-[#DCE5F4] border border-[#99AFD7]/40 rounded-lg text-xs font-semibold text-[#344D76] transition-colors"
            >
              Educator
            </button>
            <button
              type="button"
              onClick={() => handleDemoSignIn('learner')}
              className="px-3 py-1.5 bg-[#E8EEF8] hover:bg-[#DCE5F4] border border-[#99AFD7]/40 rounded-lg text-xs font-semibold text-[#344D76] transition-colors"
            >
              Learner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
