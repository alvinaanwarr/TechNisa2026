import React, { useState } from 'react';
import { VisualContent } from '../../types';
import { AudioPlayer } from '../AudioPlayer';
import { DynamicIcon } from '../DynamicIcon';
import { CartoonCompanion, CharacterTheme, getRandomCompanionMessage } from '../CartoonCompanion';
import { PecBoardView } from './PecBoardView';
import { ChevronLeft, ChevronRight, LayoutGrid, Layers, CheckCircle2, RotateCcw, Sparkles, Grid } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VisualViewProps {
  content: VisualContent;
  isCalmMode: boolean;
  onTryAnotherFormat?: () => void;
}

export const VisualView: React.FC<VisualViewProps> = ({
  content,
  isCalmMode,
  onTryAnotherFormat
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'card' | 'grid' | 'pecs'>('card');
  const [isFinished, setIsFinished] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState<CharacterTheme>('princess');

  const cards = content.cards || [];
  const currentCard = cards[currentStepIndex] || cards[0];
  const totalCards = cards.length;

  const handleNext = () => {
    if (currentStepIndex < totalCards - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      if (!isCalmMode) {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handlePrev = () => {
    if (isFinished) {
      setIsFinished(false);
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setIsFinished(false);
  };

  const currentSpeechText = isFinished
    ? `${content.completionBadge || 'All steps completed! Alhamdulillah!'}`
    : `Step ${currentCard.stepNumber}: ${currentCard.title}. ${currentCard.englishTranslation ? `Meaning: ${currentCard.englishTranslation}. ` : ''}${currentCard.simpleSentence}. ${currentCard.arabicTransliteration ? `In Arabic: ${currentCard.arabicTransliteration}.` : ''}`;

  return (
    <div id="visual-mode-container" className="space-y-6 max-w-4xl mx-auto">
      {/* Visual Header */}
      <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-[2rem] p-4 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full text-xs font-bold mb-1 border border-[#7B9A7A]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>🎨 Comic & Visual Guide</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            {content.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{content.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Toggle Card Focus vs Full Sequence vs PECS */}
          <div className="inline-flex p-1 bg-slate-100/80 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              id="visual-card-view-btn"
              type="button"
              onClick={() => { setViewMode('card'); setIsFinished(false); }}
              className={`px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 ${
                viewMode === 'card' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Step Focus</span>
            </button>
            <button
              id="visual-grid-view-btn"
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 ${
                viewMode === 'grid' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Cards ({totalCards})</span>
            </button>
            <button
              id="visual-pecs-view-btn"
              type="button"
              onClick={() => setViewMode('pecs')}
              className={`px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 ${
                viewMode === 'pecs' ? 'bg-[#7B9A7A] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🧩 PECS Cards</span>
            </button>
          </div>

          {viewMode !== 'pecs' && (
            <AudioPlayer textToRead={currentSpeechText} isCalmMode={isCalmMode} />
          )}
        </div>
      </div>

      {/* Mode 1: Single Step Focus Card (Predictable, Low Stimulation, High Clarity) */}
      {viewMode === 'card' && !isFinished && (
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-10 shadow-sm space-y-8">
          {/* Step Progress Header */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div>
              <span className="text-sm sm:text-base font-extrabold text-[#4A6349] bg-[#E8F1E7] px-3.5 py-1.5 rounded-full border border-[#7B9A7A]/30">
                Step {currentCard.stepNumber} of {totalCards}
              </span>
              {currentCard.badge && (
                <span className="ml-2.5 px-3 py-1 bg-[#FCE8D5] text-[#D97706] text-xs font-bold rounded-full border border-[#FCE8D5]/80">
                  {currentCard.badge}
                </span>
              )}
            </div>

            {/* Visual Mini Steps */}
            <div className="flex items-center gap-1 sm:gap-2">
              {cards.map((card, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                    idx === currentStepIndex
                      ? 'bg-[#7B9A7A] text-white shadow-xs'
                      : idx < currentStepIndex
                      ? 'bg-[#E8F1E7] text-[#4A6349]'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                  aria-label={`Go to Step ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Central Visual Focus Box */}
          <div className="text-center py-4 sm:py-6 space-y-6">
            {/* Giant Visual Icon / Badge */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[2rem] bg-[#E8F1E7] border-2 border-[#7B9A7A]/40 text-[#4A6349] flex items-center justify-center mx-auto shadow-2xs">
              <DynamicIcon name={currentCard.iconName || 'Sparkles'} className="w-14 h-14 sm:w-16 sm:h-16 text-[#4A6349]" />
            </div>

            {/* Arabic Term and English Translation if present */}
            {(currentCard.arabicTerm || currentCard.englishTranslation) && (
              <div className="inline-flex flex-col items-center gap-1 bg-white/90 px-5 py-3 rounded-2xl border border-slate-200 shadow-2xs backdrop-blur-xs max-w-md mx-auto">
                {currentCard.arabicTerm && (
                  <span className="text-xl sm:text-2xl font-bold text-slate-800 tracking-wide font-arabic" dir="rtl">
                    {currentCard.arabicTerm}
                  </span>
                )}
                {currentCard.englishTranslation && (
                  <span className="px-3 py-0.5 bg-blue-50 text-[#1e3a8a] text-xs font-extrabold rounded-lg border border-blue-200">
                    = {currentCard.englishTranslation}
                  </span>
                )}
                {currentCard.arabicTransliteration && (
                  <span className="text-xs text-slate-500 font-medium">
                    ({currentCard.arabicTransliteration})
                  </span>
                )}
              </div>
            )}

            {/* ONE Simple Sentence (Strict Prompt Requirement) */}
            <div className="p-6 sm:p-8 bg-[#FDFCF9]/90 border border-slate-200/80 rounded-[2rem] max-w-2xl mx-auto shadow-2xs backdrop-blur-xs">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-800 leading-snug">
                {currentCard.simpleSentence}
              </p>
            </div>

            {/* Visual Hint */}
            {currentCard.visualHint && (
              <p className="text-sm font-medium text-slate-600 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7B9A7A]" />
                <span><strong className="text-slate-800">Visual Cue:</strong> {currentCard.visualHint}</span>
              </p>
            )}

            {/* Child Interest Cartoon Companion */}
            <div className="max-w-md mx-auto pt-2">
              <CartoonCompanion
                theme={selectedCompanion}
                size="md"
                stepNumber={currentCard.stepNumber}
                interactive={true}
                onSelectTheme={(t) => setSelectedCompanion(t)}
              />
            </div>
          </div>

          {/* Action Navigation */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
            <button
              id="visual-prev-btn"
              type="button"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`px-5 py-3 rounded-full font-bold text-sm flex items-center gap-2 border transition-colors ${
                currentStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                  : 'bg-white/80 text-slate-700 border-slate-300 hover:bg-white shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              id="visual-next-btn"
              type="button"
              onClick={handleNext}
              className="px-7 py-3 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-extrabold text-sm sm:text-base rounded-full shadow-xs flex items-center gap-2 transition-colors"
            >
              <span>{currentStepIndex === totalCards - 1 ? 'Complete Sequence 🎉' : 'Next Step'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Finished State */}
      {viewMode === 'card' && isFinished && (
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="w-20 h-20 bg-[#E8F1E7] text-[#4A6349] rounded-3xl flex items-center justify-center mx-auto shadow-2xs border border-[#7B9A7A]/30">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="px-4 py-1.5 bg-[#E8F1E7] text-[#4A6349] text-xs font-extrabold rounded-full border border-[#7B9A7A]/30">
              🌟 ALL STEPS DONE!
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              {content.completionBadge || 'Mabrook! Clean & Prepared!'}
            </h3>
            <p className="text-slate-600 text-base max-w-md mx-auto">
              You practiced all {totalCards} steps with wonderful focus and patience.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="visual-restart-btn"
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 bg-white/80 border border-slate-300 hover:bg-white text-slate-700 font-bold text-sm rounded-full flex items-center gap-2 shadow-2xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice Again</span>
            </button>

            <button
              id="visual-switch-grid-btn"
              type="button"
              onClick={() => setViewMode('grid')}
              className="px-5 py-2.5 bg-[#E8F1E7] border border-[#7B9A7A]/30 text-[#4A6349] font-bold text-sm rounded-full flex items-center gap-2"
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Review All Visual Cards</span>
            </button>

            {onTryAnotherFormat && (
              <button
                id="visual-try-another-format-btn"
                type="button"
                onClick={onTryAnotherFormat}
                className="px-6 py-2.5 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-xs"
              >
                <span>Try Story Mode</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mode 2: Full Card Grid (Visual Storyboard) */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2rem] p-5 shadow-2xs hover:border-[#7B9A7A]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-7 h-7 bg-[#E8F1E7] text-[#4A6349] font-extrabold text-xs rounded-full flex items-center justify-center border border-[#7B9A7A]/30">
                      {card.stepNumber}
                    </span>
                    {card.badge && (
                      <span className="text-2xs font-bold uppercase tracking-wider text-[#D97706] bg-[#FCE8D5] px-2.5 py-0.5 rounded-full border border-[#FCE8D5]/80">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <div className="w-14 h-14 bg-[#E8F1E7] text-[#4A6349] rounded-2xl flex items-center justify-center mx-auto my-3 border border-[#7B9A7A]/20 shadow-2xs">
                    <DynamicIcon name={card.iconName || 'Sparkles'} className="w-7 h-7" />
                  </div>

                  {card.arabicTerm && (
                    <div className="text-center text-sm font-bold text-slate-800 mb-1">
                      {card.arabicTerm}
                    </div>
                  )}

                  <p className="text-slate-800 font-bold text-sm text-center leading-snug mt-2">
                    {card.simpleSentence}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-center">
                  <span className="text-xs text-slate-500">
                    🔍 {card.visualHint}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              id="back-to-step-focus-btn"
              type="button"
              onClick={() => { setViewMode('card'); setCurrentStepIndex(0); setIsFinished(false); }}
              className="px-6 py-2.5 bg-[#7B9A7A] text-white font-bold text-sm rounded-full hover:bg-[#6c8c6b] transition-colors shadow-xs"
            >
              Go to Interactive Step-by-Step Card Mode
            </button>
          </div>
        </div>
      )}

      {/* Mode 3: PECS Communication Cards & Interactive Schedule Strip */}
      {viewMode === 'pecs' && (
        <PecBoardView content={content} isCalmMode={isCalmMode} />
      )}
    </div>
  );
};