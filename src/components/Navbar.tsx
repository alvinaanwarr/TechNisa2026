import React, { useState } from 'react';
import { CalmModeToggle } from './CalmModeToggle';
import { Sparkles, Menu, X, BookOpen, User, Info, ShieldCheck, PlusCircle, LogIn, LogOut, Heart, MessageSquare, Users } from 'lucide-react';
import { UserAccount } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  isCalmMode: boolean;
  onToggleCalmMode: (enabled: boolean) => void;
  hasActiveLesson: boolean;
  currentUser?: UserAccount | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  isCalmMode,
  onToggleCalmMode,
  hasActiveLesson,
  currentUser,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header
      id="main-app-header"
      className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#99AFD7]/30 shadow-2xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo Brand */}
          <div
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-2.5 sm:gap-3 group select-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#99AFD7] text-white flex items-center justify-center shadow-xs group-hover:bg-[#869EC9] transition-colors">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight font-heading">B</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 font-heading">
                  Bridge
                </span>
                <span className="text-3xs sm:text-2xs font-extrabold uppercase tracking-wider text-[#435C87] bg-[#E8EEF8] px-2 py-0.5 rounded-full border border-[#99AFD7]/40">
                  Adaptive
                </span>
              </div>
              <p className="text-3xs sm:text-2xs text-slate-500 font-medium hidden sm:block">
                Islamic Learning for Every Child
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            <button
              id="nav-home-btn"
              type="button"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentView === 'home'
                  ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#F2F6FC]'
              }`}
            >
              Home
            </button>

            <button
              id="nav-create-btn"
              type="button"
              onClick={() => handleNavClick('create')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'create'
                  ? 'bg-[#99AFD7] text-white shadow-2xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-[#F2F6FC]'
              }`}
            >
              <PlusCircle className={`w-3.5 h-3.5 ${currentView === 'create' ? 'text-white' : 'text-[#728CB6]'}`} />
              <span>Create Lesson</span>
            </button>

            {hasActiveLesson && (
              <button
                id="nav-active-lesson-btn"
                type="button"
                onClick={() => handleNavClick('lesson')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  currentView === 'lesson'
                    ? 'bg-[#E0E7F5] text-[#344D76] border border-[#99AFD7]/60 shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-[#F2F6FC]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#5D7CAE]" />
                <span>Current Lesson</span>
              </button>
            )}

            <button
              id="nav-community-btn"
              type="button"
              onClick={() => handleNavClick('community')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'community'
                  ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/50 shadow-2xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#F2F6FC]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#5D7CAE]" />
              <span>Community</span>
            </button>

            <button
              id="nav-profile-btn"
              type="button"
              onClick={() => handleNavClick('learner-profile')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentView === 'learner-profile'
                  ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#F2F6FC]'
              }`}
            >
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>Learners</span>
            </button>

            <button
              id="nav-about-btn"
              type="button"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentView === 'about'
                  ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#F2F6FC]'
              }`}
            >
              About
            </button>

            <button
              id="nav-privacy-btn"
              type="button"
              onClick={() => handleNavClick('privacy')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                currentView === 'privacy'
                  ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#F2F6FC]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Privacy</span>
            </button>
          </nav>

          {/* Calm Mode, Sign In, & Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <CalmModeToggle isCalmMode={isCalmMode} onToggle={onToggleCalmMode} />

            {/* User Account Button */}
            {currentUser ? (
              <div className="relative">
                <button
                  id="user-profile-menu-btn"
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#E8EEF8] border border-[#99AFD7]/50 text-[#344D76] font-bold text-xs flex items-center gap-1.5 sm:gap-2 hover:bg-[#DCE5F4] transition-all shadow-2xs"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#99AFD7] text-white flex items-center justify-center text-3xs sm:text-2xs font-extrabold">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[80px] sm:max-w-[120px] truncate">{currentUser.name}</span>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-[#99AFD7]/30 py-2 z-50 animate-in fade-in zoom-in-95">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</p>
                      <p className="text-2xs text-slate-500 truncate">{currentUser.email}</p>
                      <span className="inline-block mt-1 text-3xs font-extrabold uppercase px-2 py-0.5 bg-[#E8EEF8] text-[#344D76] rounded-full">
                        {currentUser.role}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleNavClick('community')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-[#F0F4FA] flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#5D7CAE]" />
                      <span>Community Forum</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('learner-profile')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-[#F0F4FA] flex items-center gap-2"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#99AFD7]" />
                      <span>My Learner Profiles</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('login')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-[#F0F4FA] flex items-center gap-2"
                    >
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Account Settings</span>
                    </button>

                    {onLogout && (
                      <div className="border-t border-slate-100 mt-1 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setUserDropdownOpen(false);
                            onLogout();
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2"
                        >
                          <LogOut className="w-3.5 h-3.5 text-rose-500" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button
                id="nav-login-btn"
                type="button"
                onClick={() => handleNavClick('login')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  currentView === 'login'
                    ? 'bg-[#99AFD7] text-white shadow-2xs'
                    : 'bg-white hover:bg-[#F2F6FC] text-slate-700 border border-[#99AFD7]/40 shadow-2xs'
                }`}
              >
                <LogIn className={`w-3.5 h-3.5 ${currentView === 'login' ? 'text-white' : 'text-[#728CB6]'}`} />
                <span>Sign In</span>
              </button>
            )}

            {/* 3 Lines / Hamburger Menu Button (Top Right Corner) */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl bg-[#E8EEF8] border border-[#99AFD7]/40 text-[#344D76] hover:text-[#213554] hover:bg-[#DCE5F4] transition-all focus:ring-2 focus:ring-[#99AFD7] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              title="Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#344D76]" /> : <Menu className="w-5 h-5 text-[#344D76]" />}
            </button>
          </div>
        </div>

        {/* 3 Dash / Hamburger Dropdown Menu (Under the 3 Lines in Top Right) */}
        {mobileMenuOpen && (
          <div className="py-3 border-t border-[#99AFD7]/20 space-y-1.5 bg-white/95 backdrop-blur-md rounded-b-2xl px-2 shadow-md animate-in slide-in-from-top-2 duration-200">
            {currentUser ? (
              <div className="p-3 bg-[#E8EEF8] rounded-xl mb-2 flex items-center justify-between border border-[#99AFD7]/30">
                <div>
                  <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                  <p className="text-2xs text-[#435C87] font-medium capitalize">{currentUser.role} Account</p>
                </div>
                {onLogout && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onLogout();
                    }}
                    className="px-2.5 py-1 bg-white text-rose-600 rounded-lg text-2xs font-bold border border-rose-200 hover:bg-rose-50"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            ) : (
              <button
                id="mobile-nav-login"
                type="button"
                onClick={() => handleNavClick('login')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-[#344D76] bg-[#E8EEF8] flex items-center gap-2 border border-[#99AFD7]/40 mb-1"
              >
                <LogIn className="w-4 h-4 text-[#728CB6]" />
                <span>Sign In / Create Account</span>
              </button>
            )}

            <button
              id="mobile-nav-home"
              type="button"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                currentView === 'home' ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold' : 'text-slate-800 hover:bg-[#F2F6FC]'
              }`}
            >
              Home
            </button>

            {/* Community Forum Option Under 3 Lines */}
            <button
              id="mobile-nav-community"
              type="button"
              onClick={() => handleNavClick('community')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2.5 transition-all ${
                currentView === 'community'
                  ? 'bg-[#99AFD7] text-white font-extrabold shadow-2xs'
                  : 'text-[#344D76] bg-[#E8EEF8]/80 hover:bg-[#E8EEF8] border border-[#99AFD7]/40'
              }`}
            >
              <MessageSquare className={`w-4 h-4 ${currentView === 'community' ? 'text-white' : 'text-[#5D7CAE]'}`} />
              <div className="flex-1 flex items-center justify-between">
                <span>Community Forum</span>
                <span className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                  currentView === 'community' ? 'bg-white/25 text-white' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  Parents & Educators
                </span>
              </div>
            </button>

            <button
              id="mobile-nav-create"
              type="button"
              onClick={() => handleNavClick('create')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentView === 'create'
                  ? 'bg-[#99AFD7] text-white font-extrabold shadow-2xs'
                  : 'text-[#344D76] bg-[#E8EEF8]/60 hover:bg-[#E8EEF8] border border-[#99AFD7]/30'
              }`}
            >
              <PlusCircle className={`w-4 h-4 ${currentView === 'create' ? 'text-white' : 'text-[#728CB6]'}`} />
              <span>Create Lesson</span>
            </button>

            {hasActiveLesson && (
              <button
                id="mobile-nav-lesson"
                type="button"
                onClick={() => handleNavClick('lesson')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                  currentView === 'lesson'
                    ? 'bg-[#869EC9] text-white font-extrabold shadow-2xs'
                    : 'text-[#344D76] bg-[#E8EEF8]/60 hover:bg-[#E8EEF8] border border-[#99AFD7]/30'
                }`}
              >
                <BookOpen className={`w-4 h-4 ${currentView === 'lesson' ? 'text-white' : 'text-[#728CB6]'}`} />
                <span>Current Lesson</span>
              </button>
            )}

            <button
              id="mobile-nav-profile"
              type="button"
              onClick={() => handleNavClick('learner-profile')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentView === 'learner-profile' ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold' : 'text-slate-800 hover:bg-[#F2F6FC]'
              }`}
            >
              <User className="w-4 h-4 text-slate-500" />
              <span>About My Learner</span>
            </button>

            <button
              id="mobile-nav-about"
              type="button"
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentView === 'about' ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold' : 'text-slate-800 hover:bg-[#F2F6FC]'
              }`}
            >
              <Info className="w-4 h-4 text-slate-500" />
              <span>About Bridge</span>
            </button>

            <button
              id="mobile-nav-privacy"
              type="button"
              onClick={() => handleNavClick('privacy')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentView === 'privacy' ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold' : 'text-slate-800 hover:bg-[#F2F6FC]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              <span>Privacy & Safety</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

