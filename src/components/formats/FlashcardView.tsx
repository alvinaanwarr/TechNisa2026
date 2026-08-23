import React, { useState } from 'react';
import { FlashcardContent } from '../../types';
import { AudioPlayer } from '../AudioPlayer';
import { DynamicIcon } from '../DynamicIcon';
import { ChevronLeft, ChevronRight, RotateCcw, Sparkles, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../services/storageService';

interface FlashcardViewProps {
  content: FlashcardContent;
  isCalmMode: boolean;
  onTryAnotherFormat?: () => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  content,
  isCalmMode,
  onTryAnotherFormat
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const storageKey = `${STORAGE_KEYS.FLASHCARD_MASTERED_PREFIX}${encodeURIComponent(content.title || 'default')}`;
  const [knownCards, setKnownCards] = useLocalStorage<string[]>(storageKey, []);
  const [isFinished, setIsFinished] = useState(false);

  const cards = content.cards || [];
  const currentCard = cards[currentCardIndex] || cards[0];
  const totalCards = cards.length;

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      if (!isCalmMode) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (isFinished) {
      setIsFinished(false);
    } else if (currentCardIndex > 0) {
      setCurrentCardIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsFinished(false);
  };

  const toggleKnown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setKnownCards((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const currentSpeechText = !isFlipped
    ? `Term: ${currentCard.frontTerm}. ${currentCard.frontTransliteration ? `Arabic: ${currentCard.frontTransliteration}.` : ''} ${currentCard.frontSubtext || ''}. Click to flip.`
    : `Meaning: ${currentCard.backDefinition}. Analogy: ${currentCard.backInterestAnalogy}. ${currentCard.backActionOrQuestion || ''}`;

  return (
    <div id="flashcard-mode-container" className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-[2rem] p-4 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FCE8D5] text-[#D97706] rounded-full text-xs font-bold mb-1 border border-[#FCE8D5]/80">
            <Layers className="w-3.5 h-3.5" />
            <span>🎴 Flashcard Mode • Interactive Review</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            {content.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <AudioPlayer textToRead={currentSpeechText} isCalmMode={isCalmMode} />
        </div>
      </div>

      {/* Main Flashcard Stage */}
      {!isFinished ? (
        <div className="space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-sm font-bold text-slate-700">
            <span className="px-3.5 py-1 bg-white/80 rounded-full text-xs border border-slate-200 shadow-2xs">
              Card {currentCardIndex + 1} of {totalCards}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {knownCards.length} mastered
            </span>
          </div>

          {/* Interactive Flip Card Container */}
          <div
            id="flashcard-interactive-card"
            onClick={handleFlip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleFlip();
              }
            }}
            className={`cursor-pointer transition-all duration-300 min-h-[360px] rounded-[2.5rem] p-8 sm:p-12 text-center border backdrop-blur-md flex flex-col justify-between shadow-sm ${
              isFlipped
                ? 'bg-[#FDFCF9]/95 border-[#D97706]/40'
                : 'bg-white/80 border-white/80 hover:border-[#D97706]/30 hover:shadow-md'
            }`}
          >
            {/* Card Top Pill */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200">
                {isFlipped ? 'Back (Meaning & Connection)' : 'Front (Tap to Flip)'}
              </span>

              <button
                type="button"
                onClick={(e) => toggleKnown(currentCard.id, e)}
                className={`text-xs font-bold px-3.5 py-1 rounded-full border transition-colors flex items-center gap-1.5 ${
                  knownCards.includes(currentCard.id)
                    ? 'bg-[#E8F1E7] text-[#4A6349] border-[#7B9A7A]/30'
                    : 'bg-white/80 text-slate-600 border-slate-200 hover:bg-white'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{knownCards.includes(currentCard.id) ? 'Mastered ✓' : 'Mark Mastered'}</span>
              </button>
            </div>

            {/* Card Main Body */}
            {!isFlipped ? (
              <div className="my-auto py-6 space-y-4">
                <div className="w-20 h-20 bg-[#FCE8D5] text-[#D97706] rounded-3xl flex items-center justify-center mx-auto shadow-2xs border border-[#FCE8D5]/80">
                  <DynamicIcon name={currentCard.iconName || 'BookOpen'} className="w-10 h-10" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                  {currentCard.frontTerm}
                </h3>

                {currentCard.frontArabic && (
                  <p className="text-2xl sm:text-3xl font-bold text-[#4A6349]">
                    {currentCard.frontArabic}
                  </p>
                )}

                {currentCard.frontTransliteration && (
                  <p className="text-sm font-semibold text-slate-500">
                    ({currentCard.frontTransliteration})
                  </p>
                )}

                {currentCard.frontSubtext && (
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    {currentCard.frontSubtext}
                  </p>
                )}

                <div className="pt-2 text-xs font-bold text-[#D97706] flex items-center justify-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Tap anywhere on this card to reveal meaning</span>
                </div>
              </div>
            ) : (
              <div className="my-auto py-4 space-y-6 text-left max-w-xl mx-auto">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    Meaning & Purpose
                  </span>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {currentCard.backDefinition}
                  </p>
                </div>

                {currentCard.backInterestAnalogy && (
                  <div className="p-4 bg-white/80 border border-slate-200/80 rounded-2xl flex items-start gap-3 shadow-2xs backdrop-blur-xs">
                    <Sparkles className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block">
                        Interest Metaphor
                      </span>
                      <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">
                        {currentCard.backInterestAnalogy}
                      </p>
                    </div>
                  </div>
                )}

                {currentCard.backActionOrQuestion && (
                  <div className="p-3.5 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-[#4A6349] backdrop-blur-xs">
                    <HelpCircle className="w-4 h-4 text-[#7B9A7A] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Question:</strong> {currentCard.backActionOrQuestion}</span>
                  </div>
                )}
              </div>
            )}

            {/* Bottom cue */}
            <div className="text-center text-xs text-slate-400">
              Click to flip back and forth anytime
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              id="flashcard-prev-btn"
              type="button"
              onClick={handlePrev}
              disabled={currentCardIndex === 0}
              className={`px-5 py-3 rounded-full font-bold text-sm flex items-center gap-2 border transition-colors ${
                currentCardIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                  : 'bg-white/80 text-slate-700 border-slate-300 hover:bg-white shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Card</span>
            </button>

            <button
              id="flashcard-flip-btn"
              type="button"
              onClick={handleFlip}
              className="px-5 py-3 bg-white/80 hover:bg-white text-slate-700 font-bold text-sm rounded-full border border-slate-200 shadow-2xs flex items-center gap-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isFlipped ? 'Show Front' : 'Flip Card'}</span>
            </button>

            <button
              id="flashcard-next-btn"
              type="button"
              onClick={handleNext}
              className="px-7 py-3 bg-[#D97706] hover:bg-[#b45309] text-white font-extrabold text-sm sm:text-base rounded-full shadow-xs flex items-center gap-2 transition-colors"
            >
              <span>{currentCardIndex === totalCards - 1 ? 'Finish Flashcards 🎉' : 'Next Card'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Finished State */
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="w-20 h-20 bg-[#FCE8D5] text-[#D97706] rounded-3xl flex items-center justify-center mx-auto shadow-2xs border border-[#FCE8D5]/80">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="px-4 py-1.5 bg-[#FCE8D5] text-[#D97706] text-xs font-extrabold rounded-full border border-[#FCE8D5]/80">
              🌟 FLASHCARD SET COMPLETE!
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Alhamdulillah! All Cards Reviewed!
            </h3>
            <p className="text-slate-600 text-base max-w-md mx-auto">
              You reviewed {totalCards} concepts ({knownCards.length} marked as mastered).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="flashcard-restart-btn"
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 bg-white/80 border border-slate-300 hover:bg-white text-slate-700 font-bold text-sm rounded-full flex items-center gap-2 shadow-2xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Review Again</span>
            </button>

            {onTryAnotherFormat && (
              <button
                id="flashcard-try-another-format-btn"
                type="button"
                onClick={onTryAnotherFormat}
                className="px-6 py-2.5 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-xs"
              >
                <span>Try Visual Guide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
