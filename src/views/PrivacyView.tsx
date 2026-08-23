import React from 'react';
import { ShieldCheck, Lock, Heart, CheckCircle2, AlertTriangle, ShieldAlert, ArrowRight } from 'lucide-react';

interface PrivacyViewProps {
  onNavigate: (view: string) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigate }) => {
  return (
    <div id="privacy-view-container" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full text-xs font-bold border border-[#7B9A7A]/30">
          <ShieldCheck className="w-3.5 h-3.5 text-[#7B9A7A]" />
          <span>Trust & Safety Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
          Privacy & Safety by Design
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          How Bridge protects your family’s privacy while delivering safe, verified Islamic education.
        </p>
      </div>

      {/* Core Privacy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 1 */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#E8F1E7] text-[#4A6349] flex items-center justify-center border border-[#7B9A7A]/30">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            No Medical Records or Diagnoses Required
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Bridge never asks for medical history, clinical diagnoses, or developmental paperwork. Parents and educators simply choose presentation preferences (e.g., visual cards, short sentences, storytelling).
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#EBF0FF] text-[#5C7CFA] flex items-center justify-center border border-[#5C7CFA]/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            Zero Medical Claims or Diagnostic AI
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our AI is strictly an educational presentation engine. It does not attempt to evaluate, score, assess, or diagnose any medical or cognitive condition.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#F3E8FF] text-purple-700 flex items-center justify-center border border-purple-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            Reviewed Islamic Educational Material
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Lessons adapt the <em>modality and formatting</em> of orthodox Islamic knowledge (e.g. Wudu steps, 5 Pillars, Ramadan) rather than generating unverified theological rulings.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FCE8D5] text-[#D97706] flex items-center justify-center border border-[#FCE8D5]/80">
            <Heart className="w-6 h-6 text-[#D97706]" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            Parent & Educator Controlled
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            You maintain full sovereignty over what your child views. Settings are stored locally in your browser and you can reset or adjust preferences anytime.
          </p>
        </div>
      </div>

      {/* Required Support Disclaimer Box */}
      <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-md border border-white/80 rounded-[2.5rem] space-y-3 shadow-sm">
        <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
          <ShieldAlert className="w-5 h-5 text-[#D97706]" />
          <span>Educational Support Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong>Bridge is an educational support tool.</strong> It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.
        </p>
      </div>

      {/* Button */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={() => onNavigate('create')}
          className="px-7 py-3.5 bg-slate-900 hover:bg-black text-white font-bold text-sm rounded-full shadow-xs inline-flex items-center gap-2 transition-colors"
        >
          <span>Return to Lesson Generator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
