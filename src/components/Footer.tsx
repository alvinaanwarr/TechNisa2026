import React from 'react';
import { ShieldCheck, Heart, Sparkles, Feather } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  isCalmMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, isCalmMode = false }) => {
  return (
    <footer
      className={`mt-20 border-t py-10 transition-colors ${
        isCalmMode
          ? 'border-[#99AFD7]/35 bg-white/85 text-[#24334A]'
          : 'border-[#93c5fd]/40 bg-white/80 backdrop-blur-md text-[#1e3a8a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-xl text-white flex items-center justify-center font-bold text-base shadow-2xs ${
                  isCalmMode ? 'bg-[#99AFD7]' : 'bg-[#1e3a8a]'
                }`}
              >
                B
              </div>
              <span className={`text-xl font-bold font-heading ${isCalmMode ? 'text-slate-800' : 'text-[#1e3a8a]'}`}>
                Bridge
              </span>
              <span
                className={`text-2xs font-semibold px-2.5 py-0.5 rounded-full border ${
                  isCalmMode
                    ? 'text-[#344D76] bg-[#E8EEF8] border-[#99AFD7]/40'
                    : 'text-[#1e3a8a] bg-[#bae6fd] border-[#7dd3fc]'
                }`}
              >
                Sensory-Friendly
              </span>
            </div>
            <p className={`text-xs leading-relaxed max-w-md ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'}`}>
              An adaptive, sensory-friendly Islamic learning platform designed for neurodivergent learners — personalized visual step cards, calm story analogies, and interactive routines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isCalmMode ? 'text-slate-700' : 'text-[#1e3a8a]'}`}>
              Quick Links
            </h4>
            <ul className={`space-y-1.5 text-xs font-medium ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/80'}`}>
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => onNavigate('home')}
                  className={isCalmMode ? 'hover:text-[#344D76] transition-colors' : 'hover:text-[#60a5fa] transition-colors'}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-create"
                  onClick={() => onNavigate('create')}
                  className={isCalmMode ? 'hover:text-[#344D76] transition-colors' : 'hover:text-[#60a5fa] transition-colors'}
                >
                  Create Lesson
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-profile"
                  onClick={() => onNavigate('learner-profile')}
                  className={isCalmMode ? 'hover:text-[#344D76] transition-colors' : 'hover:text-[#60a5fa] transition-colors'}
                >
                  Learner Profiles
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-prophets"
                  onClick={() => onNavigate('prophets')}
                  className={`transition-colors font-semibold ${isCalmMode ? 'text-[#344D76] hover:text-slate-900' : 'text-[#1e3a8a] hover:text-[#60a5fa]'}`}
                >
                  25 Prophet Stories
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-community"
                  onClick={() => onNavigate('community')}
                  className={`transition-colors font-semibold ${isCalmMode ? 'text-[#344D76] hover:text-slate-900' : 'text-[#1e3a8a] hover:text-[#60a5fa]'}`}
                >
                  Community Forum
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-login"
                  onClick={() => onNavigate('login')}
                  className={`transition-colors font-bold ${isCalmMode ? 'text-[#344D76] hover:text-slate-900' : 'text-[#1e3a8a] hover:text-[#60a5fa]'}`}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>

          {/* Privacy & Safety Badge */}
          <div
            className={`md:col-span-3 p-4 rounded-2xl space-y-1.5 border ${
              isCalmMode
                ? 'bg-[#E8EEF8]/70 border-[#99AFD7]/40'
                : 'bg-[#bfdbfe]/50 border-[#7dd3fc]'
            }`}
          >
            <div className={`flex items-center gap-1.5 font-bold text-xs ${isCalmMode ? 'text-[#344D76]' : 'text-[#1e3a8a]'}`}>
              <ShieldCheck className={`w-4 h-4 ${isCalmMode ? 'text-[#344D76]' : 'text-[#1e3a8a]'}`} />
              <span>Private & Safe</span>
            </div>
            <p className={`text-3xs leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/70'}`}>
              No diagnostic data stored. Designed with gentle colors, optional audio cues, and zero sensory overload.
            </p>
          </div>
        </div>

        <div
          className={`pt-4 border-t text-center text-3xs ${
            isCalmMode ? 'border-[#99AFD7]/25 text-slate-500' : 'border-[#93c5fd]/30 text-[#1e3a8a]/50'
          }`}
        >
          © 2026 Bridge • Adaptive Islamic Learning
        </div>
      </div>
    </footer>
  );
};
