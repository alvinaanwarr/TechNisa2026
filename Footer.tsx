import React from 'react';
import { ShieldCheck, Heart, Sparkles, Feather } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-[#99AFD7]/30 bg-white/75 backdrop-blur-md text-slate-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#99AFD7] text-white flex items-center justify-center font-bold text-base shadow-2xs">
                B
              </div>
              <span className="text-xl font-bold text-slate-800 font-heading">Bridge</span>
              <span className="text-2xs font-semibold text-[#344D76] bg-[#E8EEF8] px-2.5 py-0.5 rounded-full border border-[#99AFD7]/40">
                Sensory-Friendly
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md">
              An adaptive, sensory-friendly Islamic learning platform designed for neurodivergent learners — personalized visual step cards, calm story analogies, and interactive routines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs font-medium text-slate-600">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#435C87] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-create"
                  onClick={() => onNavigate('create')}
                  className="hover:text-[#435C87] transition-colors"
                >
                  Create Lesson
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-profile"
                  onClick={() => onNavigate('learner-profile')}
                  className="hover:text-[#435C87] transition-colors"
                >
                  Learner Profiles
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-login"
                  onClick={() => onNavigate('login')}
                  className="hover:text-[#213554] transition-colors text-[#344D76] font-bold"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>

          {/* Privacy & Safety Badge */}
          <div className="md:col-span-3 p-4 bg-[#E8EEF8]/70 border border-[#99AFD7]/40 rounded-2xl space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#344D76] font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-[#5D7CAE]" />
              <span>Private & Safe</span>
            </div>
            <p className="text-3xs text-slate-500 leading-relaxed">
              No diagnostic data stored. Designed with gentle colors, optional audio cues, and zero sensory overload.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#99AFD7]/20 text-center text-3xs text-slate-400">
          © 2026 Bridge • Adaptive Islamic Learning
        </div>
      </div>
    </footer>
  );
};
