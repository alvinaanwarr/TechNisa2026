import React, { useState } from 'react';
import { CalmModeToggle } from './CalmModeToggle';
import {
  Sparkles,
  Menu,
  X,
  BookOpen,
  User,
  Info,
  ShieldCheck,
  PlusCircle,
  LogIn,
  LogOut,
  Heart,
  MessageSquare,
  Users,
  Headphones,
  Award
} from 'lucide-react';
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
      className={`sticky top-0 z-40 backdrop-blur-md shadow-2xs transition-colors ${
        isCalmMode
          ? 'bg-white/90 border-b border-[#99AFD7]/35'
          : 'bg-white/90 border-b border-[#93c5fd]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo Brand */}
          <div
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-2.5 sm:gap-3 group select-none"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl text-white flex items-center justify-center shadow-xs transition-colors ${
                isCalmMode
                  ? 'bg-[#99AFD7] group-hover:bg-[#869EC9]'
                  : 'bg-[#1e3a8a] group-hover:bg-[#60a5fa]'
              }`}
            >
              <span className="font-extrabold text-lg sm:text-xl tracking-tight font-heading">B</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span
                  className={`text-xl sm:text-2xl font-bold tracking-tight font-heading ${
                    isCalmMode ? 'text-slate-800' : 'text-[#1e3a8a]'
                  }`}
                >
                  Bridge
                </span>
                <span
                  className={`text-3xs sm:text-2xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isCalmMode
                      ? 'text-[#344D76] bg-[#E8EEF8] border-[#99AFD7]/40'
                      : 'text-[#1e3a8a] bg-[#bae6fd] border-[#7dd3fc]'
                  }`}
                >
                  Adaptive
                </span>
              </div>
              <p
                className={`text-3xs sm:text-2xs font-medium hidden sm:block ${
                  isCalmMode ? 'text-slate-500' : 'text-[#1e3a8a]/70'
                }`}
              >
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
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/50 shadow-2xs font-bold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] border border-[#93c5fd] shadow-2xs font-bold'
                  : isCalmMode
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-[#E8EEF8]/60'
                    : 'text-[#1e3a8a]/80 hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              Home
            </button>

            <button
              id="nav-deeds-btn"
              type="button"
              onClick={() => handleNavClick('gooddeeds')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'gooddeeds'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-[#1e3a8a] text-white shadow-2xs'
                  : isCalmMode
                    ? 'text-emerald-800 hover:text-emerald-950 hover:bg-emerald-50'
                    : 'text-emerald-800 hover:text-emerald-900 hover:bg-emerald-100/70'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${currentView === 'gooddeeds' ? 'text-white fill-current' : 'text-emerald-600 fill-emerald-500'}`} />
              <span>Good Deeds</span>
            </button>

            <button
              id="nav-sensory-btn"
              type="button"
              onClick={() => handleNavClick('sensory')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'sensory'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-[#1e3a8a] text-white shadow-2xs'
                  : isCalmMode
                    ? 'text-[#344D76] hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              <Headphones className={`w-3.5 h-3.5 ${currentView === 'sensory' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>Sensory Prep</span>
            </button>

            <button
              id="nav-prophets-btn"
              type="button"
              onClick={() => handleNavClick('prophets')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'prophets'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-[#1e3a8a] text-white shadow-2xs'
                  : isCalmMode
                    ? 'text-[#344D76] hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${currentView === 'prophets' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>25 Prophets</span>
            </button>

            <button
              id="nav-favorites-btn"
              type="button"
              onClick={() => handleNavClick('favorites')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'favorites'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-[#1e3a8a] text-white shadow-2xs'
                  : isCalmMode
                    ? 'text-[#344D76] hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              <Award className={`w-3.5 h-3.5 ${currentView === 'favorites' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>Favourites</span>
            </button>

            {hasActiveLesson && (
              <button
                id="nav-active-lesson-btn"
                type="button"
                onClick={() => handleNavClick('lesson')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  currentView === 'lesson'
                    ? isCalmMode
                      ? 'bg-[#E0E7F5] text-[#344D76] border border-[#99AFD7]/60 shadow-2xs font-extrabold'
                      : 'bg-[#bfdbfe] text-[#1e3a8a] border border-[#60a5fa]/60 shadow-2xs font-extrabold'
                    : isCalmMode
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-[#E8EEF8]'
                      : 'text-[#1e3a8a]/80 hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
                }`}
              >
                <BookOpen className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
                <span>Current Lesson</span>
              </button>
            )}

            <button
              id="nav-create-btn"
              type="button"
              onClick={() => handleNavClick('create')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'create'
                  ? isCalmMode
                    ? 'bg-[#99AFD7] text-white shadow-2xs'
                    : 'bg-[#1e3a8a] text-white shadow-2xs'
                  : isCalmMode
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              <PlusCircle className={`w-3.5 h-3.5 ${currentView === 'create' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>Create</span>
            </button>

            <button
              id="nav-community-btn"
              type="button"
              onClick={() => handleNavClick('community')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentView === 'community'
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/50 shadow-2xs font-extrabold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] border border-[#7dd3fc] shadow-2xs font-extrabold'
                  : isCalmMode
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a]/80 hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              <MessageSquare className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>Community</span>
            </button>

            <button
              id="nav-profile-btn"
              type="button"
              onClick={() => handleNavClick('learner-profile')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentView === 'learner-profile'
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40 shadow-2xs font-bold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] border border-[#93c5fd] shadow-2xs font-bold'
                  : isCalmMode
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a]/80 hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              <User className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>Learners</span>
            </button>

            <button
              id="nav-about-btn"
              type="button"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentView === 'about'
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40 shadow-2xs font-bold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] border border-[#93c5fd] shadow-2xs font-bold'
                  : isCalmMode
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a]/80 hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
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
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40 shadow-2xs font-bold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] border border-[#93c5fd] shadow-2xs font-bold'
                  : isCalmMode
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a]/80 hover:text-[#1e3a8a] hover:bg-[#bae6fd]/50'
              }`}
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
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
                  className={`px-2.5 sm:px-3.5 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xs ${
                    isCalmMode
                      ? 'bg-[#E8EEF8] border border-[#99AFD7]/50 text-[#344D76] hover:bg-[#DCE5F4]'
                      : 'bg-[#bfdbfe] border border-[#93c5fd] text-[#1e3a8a] hover:bg-[#93c5fd]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full text-white flex items-center justify-center text-3xs sm:text-2xs font-extrabold ${
                      isCalmMode ? 'bg-[#344D76]' : 'bg-[#1e3a8a]'
                    }`}
                  >
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[80px] sm:max-w-[120px] truncate">{currentUser.name}</span>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border py-2 z-50 animate-in fade-in zoom-in-95 ${
                      isCalmMode ? 'border-[#99AFD7]/40' : 'border-[#93c5fd]/50'
                    }`}
                  >
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className={`text-xs font-bold truncate ${isCalmMode ? 'text-slate-800' : 'text-[#1e3a8a]'}`}>{currentUser.name}</p>
                      <p className="text-2xs text-slate-500 truncate">{currentUser.email}</p>
                      <span
                        className={`inline-block mt-1 text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          isCalmMode ? 'bg-[#E8EEF8] text-[#344D76]' : 'bg-[#bae6fd] text-[#1e3a8a]'
                        }`}
                      >
                        {currentUser.role}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleNavClick('community')}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center gap-2 ${
                        isCalmMode ? 'text-slate-700 hover:bg-[#E8EEF8]' : 'text-[#1e3a8a] hover:bg-[#bae6fd]/40'
                      }`}
                    >
                      <MessageSquare className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
                      <span>Community Forum</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('learner-profile')}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center gap-2 ${
                        isCalmMode ? 'text-slate-700 hover:bg-[#E8EEF8]' : 'text-[#1e3a8a] hover:bg-[#bae6fd]/40'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
                      <span>My Learner Profiles</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('login')}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center gap-2 ${
                        isCalmMode ? 'text-slate-700 hover:bg-[#E8EEF8]' : 'text-[#1e3a8a] hover:bg-[#bae6fd]/40'
                      }`}
                    >
                      <User className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
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
                    ? isCalmMode
                      ? 'bg-[#344D76] text-white shadow-2xs'
                      : 'bg-[#1e3a8a] text-white shadow-2xs'
                    : isCalmMode
                      ? 'bg-white hover:bg-[#F2F6FC] text-slate-700 border border-[#99AFD7]/40 shadow-2xs'
                      : 'bg-white hover:bg-[#bae6fd]/50 text-[#1e3a8a] border border-[#93c5fd] shadow-2xs'
                }`}
              >
                <LogIn className={`w-3.5 h-3.5 ${currentView === 'login' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
                <span>Sign In</span>
              </button>
            )}

            {/* 3 Lines / Hamburger Menu Button (Top Right Corner) */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`p-2 rounded-xl border transition-all flex items-center justify-center ${
                isCalmMode
                  ? 'bg-[#E8EEF8] border-[#99AFD7]/50 text-[#344D76] hover:bg-[#DCE5F4] focus:ring-2 focus:ring-[#99AFD7]'
                  : 'bg-[#bfdbfe] border-[#7dd3fc] text-[#1e3a8a] hover:bg-[#93c5fd] focus:ring-2 focus:ring-[#60a5fa]'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              title="Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${isCalmMode ? 'text-[#344D76]' : 'text-[#1e3a8a]'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isCalmMode ? 'text-[#344D76]' : 'text-[#1e3a8a]'}`} />
              )}
            </button>
          </div>
        </div>

        {/* 3 Dash / Hamburger Dropdown Menu (Under the 3 Lines in Top Right) */}
        {mobileMenuOpen && (
          <div
            className={`py-3 border-t space-y-1.5 bg-white/95 backdrop-blur-md rounded-b-2xl px-2 shadow-md animate-in slide-in-from-top-2 duration-200 ${
              isCalmMode ? 'border-[#99AFD7]/30' : 'border-[#93c5fd]/30'
            }`}
          >
            {currentUser ? (
              <div
                className={`p-3 rounded-xl mb-2 flex items-center justify-between border ${
                  isCalmMode
                    ? 'bg-[#E8EEF8] border-[#99AFD7]/40'
                    : 'bg-[#bae6fd]/50 border-[#93c5fd]/50'
                }`}
              >
                <div>
                  <p className={`text-xs font-bold ${isCalmMode ? 'text-slate-800' : 'text-[#1e3a8a]'}`}>{currentUser.name}</p>
                  <p className={`text-2xs font-medium capitalize ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'}`}>
                    {currentUser.role} Account
                  </p>
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
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border mb-1 ${
                  isCalmMode
                    ? 'text-[#344D76] bg-[#E8EEF8] border-[#99AFD7]/50'
                    : 'text-[#1e3a8a] bg-[#bfdbfe] border-[#7dd3fc]'
                }`}
              >
                <LogIn className={`w-4 h-4 ${isCalmMode ? 'text-[#344D76]' : 'text-[#1e3a8a]'}`} />
                <span>Sign In / Create Account</span>
              </button>
            )}

            <button
              id="mobile-nav-home"
              type="button"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                currentView === 'home'
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] font-extrabold'
                  : isCalmMode
                    ? 'text-slate-700 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:bg-[#bae6fd]/40'
              }`}
            >
              Home
            </button>

            {/* My Good Deeds Option */}
            <button
              id="mobile-nav-deeds"
              type="button"
              onClick={() => handleNavClick('gooddeeds')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2.5 transition-all ${
                currentView === 'gooddeeds'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white font-extrabold shadow-2xs'
                    : 'bg-[#1e3a8a] text-white font-extrabold shadow-2xs'
                  : isCalmMode
                    ? 'text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60'
                    : 'text-emerald-900 bg-emerald-100/60 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${currentView === 'gooddeeds' ? 'text-white fill-current' : 'text-emerald-600 fill-emerald-500'}`} />
              <div className="flex-1 flex items-center justify-between">
                <span>My Good Deeds</span>
                <span
                  className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    currentView === 'gooddeeds'
                      ? 'bg-white/25 text-white'
                      : 'bg-emerald-200 text-emerald-900'
                  }`}
                >
                  Daily Log
                </span>
              </div>
            </button>

            {/* Sensory Prep Social Stories */}
            <button
              id="mobile-nav-sensory"
              type="button"
              onClick={() => handleNavClick('sensory')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2.5 transition-all ${
                currentView === 'sensory'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white font-extrabold shadow-2xs'
                    : 'bg-[#1e3a8a] text-white font-extrabold shadow-2xs'
                  : isCalmMode
                    ? 'text-[#344D76] bg-[#E8EEF8] hover:bg-[#DCE5F4] border border-[#99AFD7]/40'
                    : 'text-[#1e3a8a] bg-[#bae6fd]/50 hover:bg-[#bae6fd] border border-[#7dd3fc]'
              }`}
            >
              <Headphones className={`w-4 h-4 ${currentView === 'sensory' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <div className="flex-1 flex items-center justify-between">
                <span>Sensory Prep & Expectations</span>
                <span
                  className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    currentView === 'sensory'
                      ? 'bg-white/25 text-white'
                      : isCalmMode
                        ? 'bg-[#99AFD7]/30 text-[#344D76]'
                        : 'bg-[#60a5fa]/20 text-[#1e3a8a]'
                  }`}
                >
                  Social Stories
                </span>
              </div>
            </button>

            {/* 25 Prophets Option */}
            <button
              id="mobile-nav-prophets"
              type="button"
              onClick={() => handleNavClick('prophets')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2.5 transition-all ${
                currentView === 'prophets'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white font-extrabold shadow-2xs'
                    : 'bg-[#1e3a8a] text-white font-extrabold shadow-2xs'
                  : isCalmMode
                    ? 'text-[#344D76] bg-[#E8EEF8] hover:bg-[#DCE5F4] border border-[#99AFD7]/40'
                    : 'text-[#1e3a8a] bg-[#bae6fd]/50 hover:bg-[#bae6fd] border border-[#7dd3fc]'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${currentView === 'prophets' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <div className="flex-1 flex items-center justify-between">
                <span>25 Prophet Stories</span>
                <span
                  className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    currentView === 'prophets'
                      ? 'bg-white/25 text-white'
                      : isCalmMode
                        ? 'bg-[#344D76] text-white'
                        : 'bg-[#1e3a8a] text-white'
                  }`}
                >
                  Complete Series
                </span>
              </div>
            </button>

            {/* Favourites & Progress */}
            <button
              id="mobile-nav-favorites"
              type="button"
              onClick={() => handleNavClick('favorites')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2.5 transition-all ${
                currentView === 'favorites'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white font-extrabold shadow-2xs'
                    : 'bg-[#1e3a8a] text-white font-extrabold shadow-2xs'
                  : isCalmMode
                    ? 'text-[#344D76] bg-[#E8EEF8] hover:bg-[#DCE5F4] border border-[#99AFD7]/40'
                    : 'text-[#1e3a8a] bg-[#bae6fd]/50 hover:bg-[#bae6fd] border border-[#7dd3fc]'
              }`}
            >
              <Award className={`w-4 h-4 ${currentView === 'favorites' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <div className="flex-1 flex items-center justify-between">
                <span>Favourites & Badges</span>
                <span
                  className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    currentView === 'favorites'
                      ? 'bg-white/25 text-white'
                      : isCalmMode
                        ? 'bg-[#99AFD7]/30 text-[#344D76]'
                        : 'bg-[#60a5fa]/20 text-[#1e3a8a]'
                  }`}
                >
                  Progress
                </span>
              </div>
            </button>

            {/* Community Forum Option Under 3 Lines */}
            <button
              id="mobile-nav-community"
              type="button"
              onClick={() => handleNavClick('community')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2.5 transition-all ${
                currentView === 'community'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white font-extrabold shadow-2xs'
                    : 'bg-[#1e3a8a] text-white font-extrabold shadow-2xs'
                  : isCalmMode
                    ? 'text-[#344D76] bg-[#E8EEF8] hover:bg-[#DCE5F4] border border-[#99AFD7]/40'
                    : 'text-[#1e3a8a] bg-[#bae6fd]/50 hover:bg-[#bae6fd] border border-[#7dd3fc]'
              }`}
            >
              <MessageSquare className={`w-4 h-4 ${currentView === 'community' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <div className="flex-1 flex items-center justify-between">
                <span>Community Forum</span>
                <span
                  className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    currentView === 'community'
                      ? 'bg-white/25 text-white'
                      : isCalmMode
                        ? 'bg-[#99AFD7]/30 text-[#344D76]'
                        : 'bg-[#60a5fa]/20 text-[#1e3a8a]'
                  }`}
                >
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
                  ? isCalmMode
                    ? 'bg-[#99AFD7] text-white font-extrabold shadow-2xs'
                    : 'bg-[#1e3a8a] text-white font-extrabold shadow-2xs'
                  : isCalmMode
                    ? 'text-slate-800 bg-[#E8EEF8]/70 hover:bg-[#E8EEF8] border border-[#99AFD7]/40'
                    : 'text-[#1e3a8a] bg-[#bae6fd]/40 hover:bg-[#bae6fd] border border-[#93c5fd]'
              }`}
            >
              <PlusCircle className={`w-4 h-4 ${currentView === 'create' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>Create Lesson</span>
            </button>

            {hasActiveLesson && (
              <button
                id="mobile-nav-lesson"
                type="button"
                onClick={() => handleNavClick('lesson')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                  currentView === 'lesson'
                    ? isCalmMode
                      ? 'bg-[#344D76] text-white font-extrabold shadow-2xs'
                      : 'bg-[#1e3a8a] text-white font-extrabold shadow-2xs'
                    : isCalmMode
                      ? 'text-slate-800 bg-[#E8EEF8]/70 hover:bg-[#E8EEF8] border border-[#99AFD7]/40'
                      : 'text-[#1e3a8a] bg-[#bae6fd]/40 hover:bg-[#bae6fd] border border-[#93c5fd]'
                }`}
              >
                <BookOpen className={`w-4 h-4 ${currentView === 'lesson' ? 'text-white' : isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
                <span>Current Lesson</span>
              </button>
            )}

            <button
              id="mobile-nav-profile"
              type="button"
              onClick={() => handleNavClick('learner-profile')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentView === 'learner-profile'
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] font-extrabold'
                  : isCalmMode
                    ? 'text-slate-700 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:bg-[#bae6fd]/40'
              }`}
            >
              <User className={`w-4 h-4 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>About My Learner</span>
            </button>

            <button
              id="mobile-nav-about"
              type="button"
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentView === 'about'
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] font-extrabold'
                  : isCalmMode
                    ? 'text-slate-700 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:bg-[#bae6fd]/40'
              }`}
            >
              <Info className={`w-4 h-4 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>About Bridge</span>
            </button>

            <button
              id="mobile-nav-privacy"
              type="button"
              onClick={() => handleNavClick('privacy')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentView === 'privacy'
                  ? isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] font-extrabold'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] font-extrabold'
                  : isCalmMode
                    ? 'text-slate-700 hover:bg-[#E8EEF8]'
                    : 'text-[#1e3a8a] hover:bg-[#bae6fd]/40'
              }`}
            >
              <ShieldCheck className={`w-4 h-4 ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#60a5fa]'}`} />
              <span>Privacy & Safety</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
