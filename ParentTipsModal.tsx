import React from 'react';
import { ParentTips } from '../types';
import { Sparkles, Clock, RotateCcw, Puzzle, Coffee, Compass, ShieldAlert, X } from 'lucide-react';

interface ParentTipsModalProps {
  parentTips: ParentTips;
  learnerNickname: string;
  topic: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ParentTipsModal: React.FC<ParentTipsModalProps> = ({
  parentTips,
  learnerNickname,
  topic,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="parent-assistant-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="parent-assistant-title"
    >
      <div className="bg-[#FDFCF9]/95 backdrop-blur-xl border border-white/80 rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FCE8D5] text-[#D97706] rounded-full text-xs font-bold mb-2 border border-[#FCE8D5]/80">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              Parent & Educator Assistant
            </div>
            <h3 id="parent-assistant-title" className="text-xl sm:text-2xl font-bold text-slate-800 font-heading">
              Helping Your Learner: {topic}
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Practical, gentle tips tailored for <span className="font-semibold text-slate-800">{learnerNickname}</span>
            </p>
          </div>

          <button
            id="close-parent-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100/80 transition-colors"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-4 my-6">
          {/* Summary Box */}
          <div className="p-4 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-2xl text-[#4A6349] text-sm leading-relaxed backdrop-blur-xs">
            <span className="font-bold block mb-1">💡 Adaptation Focus</span>
            {parentTips.summary}
          </div>

          {/* Strategy grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white/70 backdrop-blur-xs border border-slate-200/80 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 text-[#5C7CFA] font-bold text-sm mb-2">
                <Clock className="w-4 h-4" />
                <span>Pacing & Review</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {parentTips.reviewStrategy}
              </p>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-xs border border-slate-200/80 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 text-[#7B9A7A] font-bold text-sm mb-2">
                <RotateCcw className="w-4 h-4" />
                <span>Routine & Repetition</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {parentTips.repetitionTip}
              </p>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-xs border border-slate-200/80 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-2">
                <Puzzle className="w-4 h-4" />
                <span>Hands-on Activity</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {parentTips.activitySuggestion}
              </p>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-xs border border-slate-200/80 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm mb-2">
                <Coffee className="w-4 h-4" />
                <span>Sensory & Breaks</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {parentTips.sensoryBreakTip}
              </p>
            </div>
          </div>

          {/* Next format hint */}
          <div className="p-4 bg-[#F0F4FF] border border-[#5C7CFA]/30 rounded-2xl text-slate-800 text-xs sm:text-sm flex items-start gap-3 backdrop-blur-xs">
            <Compass className="w-5 h-5 text-[#5C7CFA] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5 text-[#5C7CFA]">Alternative Format & PECS Cards</span>
              <p>{parentTips.nextFormatRecommendation} You can also use the <strong>PECS Cards & Visual Strip</strong> in Visual Mode for non-verbal picture exchange and printable schedules.</p>
            </div>
          </div>
        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="p-4 bg-slate-100/70 border border-slate-200 rounded-2xl text-slate-600 text-xs leading-relaxed flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-slate-800">Educational Support Disclaimer:</strong> Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            id="parent-modal-got-it-btn"
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white text-sm font-semibold rounded-xl transition-colors shadow-xs"
          >
            Got It, Back to Lesson
          </button>
        </div>
      </div>
    </div>
  );
};
