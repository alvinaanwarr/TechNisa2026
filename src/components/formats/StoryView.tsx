import React, { useState } from 'react';
import { StoryContent } from '../../types';
import { AudioPlayer } from '../AudioPlayer';
import { DynamicIcon } from '../DynamicIcon';
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StoryViewProps {
  content: StoryContent;
  isCalmMode: boolean;
  onTryAnotherFormat?: () => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  content,
  isCalmMode,
  onTryAnotherFormat
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const slides = content.slides || [];
  const currentSlide = slides[currentSlideIndex] || slides[0];
  const totalSlides = slides.length;

  const handleNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
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
    if (isFinished) {
      setIsFinished(false);
    } else if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentSlideIndex(0);
    setIsFinished(false);
  };

  const currentSpeechText = isFinished
    ? `${content.conclusion}. Reflection question: ${content.reflectionQuestion}`
    : `${currentSlide.title}. ${currentSlide.text}. Islamic teaching: ${currentSlide.islamicTeaching}. ${currentSlide.actionPrompt || ''}`;

  return (
    <div id="story-mode-container" className="space-y-6 max-w-4xl mx-auto">
      {/* Header Info Bar */}
      <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-[2rem] p-4 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold mb-1 border border-purple-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>📖 Story Mode • {content.theme || 'Story Adventure'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            {content.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <AudioPlayer textToRead={currentSpeechText} isCalmMode={isCalmMode} />
        </div>
      </div>

      {/* Main Story Stage */}
      {!isFinished ? (
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-slate-100/90 text-slate-700 font-bold text-xs rounded-full border border-slate-200">
                Chapter {currentSlideIndex + 1} of {totalSlides}
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                • {currentSlide.title}
              </span>
            </div>

            {/* Visual Step Bar */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-purple-600'
                      : idx < currentSlideIndex
                      ? 'w-3 bg-purple-200'
                      : 'w-3 bg-slate-200'
                  }`}
                  aria-label={`Jump to Chapter ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Content Card */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0 shadow-2xs border border-purple-200">
                <DynamicIcon name={currentSlide.iconName || 'Sparkles'} className="w-8 h-8 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentSlide.title}
                </h3>
                {currentSlide.interestConnection && (
                  <p className="text-xs text-purple-700 font-semibold mt-0.5">
                    ✨ {currentSlide.interestConnection}
                  </p>
                )}
              </div>
            </div>

            {/* Narrative text with high legibility */}
            <div className="p-6 sm:p-8 bg-[#FDFCF9]/90 rounded-[2rem] border border-slate-200/80 text-slate-800 text-base sm:text-lg leading-relaxed sm:leading-loose backdrop-blur-xs">
              {currentSlide.text}
            </div>

            {/* Islamic Teaching Highlight */}
            <div className="p-4 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-2xl flex items-start gap-3 backdrop-blur-xs">
              <Sparkles className="w-5 h-5 text-[#7B9A7A] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#4A6349] uppercase tracking-wider block">
                  Islamic Principle
                </span>
                <p className="text-sm font-medium text-slate-800 mt-0.5">
                  {currentSlide.islamicTeaching}
                </p>
              </div>
            </div>

            {/* Action prompt if available */}
            {currentSlide.actionPrompt && (
              <div className="p-4 bg-[#FCE8D5]/90 border border-[#FCE8D5] rounded-2xl text-[#D97706] text-sm font-medium flex items-center gap-3 backdrop-blur-xs">
                <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span><strong className="text-slate-900">Try this:</strong> {currentSlide.actionPrompt}</span>
              </div>
            )}
          </div>

          {/* Bottom Action Controls */}
          <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200/80">
            <button
              id="story-prev-btn"
              type="button"
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={`px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors border ${
                currentSlideIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                  : 'bg-white/80 text-slate-700 border-slate-300 hover:bg-white shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>

            <button
              id="story-next-btn"
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm rounded-full shadow-xs flex items-center gap-2 transition-colors"
            >
              <span>{currentSlideIndex === totalSlides - 1 ? 'Finish Story ✨' : 'Next Chapter'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Finished Story Card */
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-10 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mx-auto shadow-2xs border border-purple-200">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className="px-3.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full border border-purple-200">
              🌟 Story Completed!
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 font-heading">
              Alhamdulillah! Wonderful Reading!
            </h3>
          </div>

          <div className="p-6 bg-[#FDFCF9]/90 border border-slate-200/80 rounded-[2rem] max-w-xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed text-left backdrop-blur-xs">
            <p className="font-medium">{content.conclusion}</p>
          </div>

          {content.reflectionQuestion && (
            <div className="p-5 bg-[#FCE8D5]/90 border border-[#FCE8D5] rounded-2xl max-w-xl mx-auto text-slate-800 text-left backdrop-blur-xs">
              <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1">
                💭 Think & Share
              </span>
              <p className="text-sm font-semibold">{content.reflectionQuestion}</p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="story-read-again-btn"
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 bg-white/80 border border-slate-300 hover:bg-white text-slate-700 font-bold text-sm rounded-full flex items-center gap-2 shadow-2xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Read Story Again</span>
            </button>

            {onTryAnotherFormat && (
              <button
                id="story-try-another-format-btn"
                type="button"
                onClick={onTryAnotherFormat}
                className="px-6 py-2.5 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-xs"
              >
                <span>Try Another Way (Visual / Steps)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
