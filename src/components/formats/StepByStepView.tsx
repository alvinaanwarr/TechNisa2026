import React, { useState } from 'react';
import { StepContent } from '../../types';
import { AudioPlayer } from '../AudioPlayer';
import { DynamicIcon } from '../DynamicIcon';
import {
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  CheckCircle2,
  RotateCcw,
  Feather,
  Sparkles,
  Eye,
  EyeOff,
  Type
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../services/storageService';

interface StepByStepViewProps {
  content: StepContent;
  isCalmMode: boolean;
  onTryAnotherFormat?: () => void;
}

export const StepByStepView: React.FC<StepByStepViewProps> = ({
  content,
  isCalmMode,
  onTryAnotherFormat
}) => {
  const contentKey = encodeURIComponent(content.title || 'default');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useLocalStorage<number[]>(
    `${STORAGE_KEYS.STEP_BY_STEP_PROGRESS_PREFIX}${contentKey}`,
    []
  );
  const [isFinished, setIsFinished] = useState(false);
  const [hideCompletedSteps, setHideCompletedSteps] = useState(false);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'xlarge'>('standard');
  const [unclutteredMode, setUnclutteredMode] = useState(false);

  const steps = content.steps || [];
  const currentStep = steps[currentStepIndex] || steps[0];
  const totalSteps = steps.length;

  const toggleComplete = (stepNum: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNum) ? prev.filter((s) => s !== stepNum) : [...prev, stepNum]
    );
  };

  const handleNext = () => {
    // Auto mark as completed
    if (!completedSteps.includes(currentStep.stepNumber)) {
      setCompletedSteps((prev) => [...prev, currentStep.stepNumber]);
    }

    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
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
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setCompletedSteps([]);
    setIsFinished(false);
  };

  const currentSpeechText = isFinished
    ? content.successMessage
    : `${currentStep.title}. Instruction: ${currentStep.instruction}. ${currentStep.detail}. ${currentStep.repeatPhrase ? `Repeat: ${currentStep.repeatPhrase}` : ''}`;

  const textSizeClass =
    fontSize === 'xlarge'
      ? 'text-2xl sm:text-4xl'
      : fontSize === 'large'
      ? 'text-xl sm:text-3xl'
      : 'text-xl sm:text-2xl';

  const detailSizeClass =
    fontSize === 'xlarge'
      ? 'text-base sm:text-xl'
      : fontSize === 'large'
      ? 'text-sm sm:text-lg'
      : 'text-sm sm:text-base';

  return (
    <div id="step-by-step-container" className="space-y-6 max-w-4xl mx-auto">
      {/* Header Info with Sensory & Accessibility Controls */}
      <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-[2rem] p-4 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F4FF] text-[#5C7CFA] rounded-full text-xs font-bold mb-1 border border-[#5C7CFA]/30">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>🧩 Step-by-Step Guide • Tactile Checkmarks</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            {content.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{content.goal}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Hide Completed Steps Toggle to avoid overstimulation */}
          <button
            type="button"
            onClick={() => setHideCompletedSteps(!hideCompletedSteps)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
              hideCompletedSteps
                ? 'bg-blue-600 text-white border-blue-700 shadow-2xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Hide finished steps to avoid cognitive overwhelm"
          >
            {hideCompletedSteps ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{hideCompletedSteps ? 'Hiding Done Steps' : 'Hide Done Steps'}</span>
          </button>

          {/* Text Size Control */}
          <div className="inline-flex p-0.5 bg-slate-100 rounded-xl border border-slate-200 text-3xs font-extrabold">
            <button
              type="button"
              onClick={() => setFontSize('standard')}
              className={`px-2 py-1 rounded-lg ${fontSize === 'standard' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize('large')}
              className={`px-2 py-1 rounded-lg ${fontSize === 'large' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
            >
              A+
            </button>
            <button
              type="button"
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-1 rounded-lg ${fontSize === 'xlarge' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
            >
              A++
            </button>
          </div>

          <AudioPlayer textToRead={currentSpeechText} isCalmMode={isCalmMode} />
        </div>
      </div>

      {/* Main Single Instruction Stage */}
      {!isFinished ? (
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-10 shadow-sm space-y-6">
          {/* Predictable Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700">
              <span className="text-[#5C7CFA]">
                Step {currentStepIndex + 1} of {totalSteps}
              </span>
              <span className="text-slate-500">
                {completedSteps.length} of {totalSteps} completed ✓
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100/90 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-[#5C7CFA] rounded-full transition-all duration-300"
                style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Single Instruction Box */}
          <div className="space-y-6 pt-2">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F0F4FF] text-[#5C7CFA] flex items-center justify-center shrink-0 shadow-2xs border border-[#5C7CFA]/30">
                <DynamicIcon name={currentStep.iconName || 'CheckSquare'} className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {currentStep.title}
                </h3>
              </div>
            </div>

            {/* Instruction Focus Area */}
            <div className="p-6 sm:p-8 bg-[#FDFCF9]/90 border border-slate-200/80 rounded-[2rem] shadow-2xs space-y-4 backdrop-blur-xs">
              <p className={`${textSizeClass} font-bold text-slate-900 leading-snug`}>
                {currentStep.instruction}
              </p>
              {currentStep.detail && (
                <p className={`${detailSizeClass} text-slate-600 leading-relaxed`}>
                  {currentStep.detail}
                </p>
              )}
            </div>

            {/* Repetition Phrase for memory retention */}
            {currentStep.repeatPhrase && !unclutteredMode && (
              <div className="p-4 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-2xl flex items-start gap-3 backdrop-blur-xs">
                <Sparkles className="w-5 h-5 text-[#7B9A7A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#4A6349] uppercase tracking-wider block">
                    Say Together:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    "{currentStep.repeatPhrase}"
                  </p>
                </div>
              </div>
            )}

            {/* Sensory Tip */}
            {currentStep.sensoryTip && !unclutteredMode && (
              <div className="p-4 bg-[#FCE8D5]/90 border border-[#FCE8D5] rounded-2xl flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 backdrop-blur-xs">
                <Feather className="w-4 h-4 text-[#D97706] shrink-0" />
                <span><strong className="text-slate-900">Sensory Tip:</strong> {currentStep.sensoryTip}</span>
              </div>
            )}

            {/* Completion Checkbox */}
            <button
              type="button"
              onClick={() => toggleComplete(currentStep.stepNumber)}
              className={`w-full p-4 rounded-2xl border font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all ${
                completedSteps.includes(currentStep.stepNumber)
                  ? 'bg-[#E8F1E7] border-[#7B9A7A]/50 text-[#4A6349] shadow-2xs'
                  : 'bg-white/80 border-slate-300 text-slate-700 hover:bg-white'
              }`}
            >
              <CheckCircle2
                className={`w-6 h-6 ${
                  completedSteps.includes(currentStep.stepNumber)
                    ? 'text-[#7B9A7A]'
                    : 'text-slate-300'
                }`}
              />
              <span>
                {completedSteps.includes(currentStep.stepNumber)
                  ? 'Done! Marked as completed ✓'
                  : 'Click checkmark when finished with this step'}
              </span>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
            <button
              id="step-prev-btn"
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
              <span>Previous Step</span>
            </button>

            <button
              id="step-next-btn"
              type="button"
              onClick={handleNext}
              className="px-7 py-3 bg-[#5C7CFA] hover:bg-[#4b6ceb] text-white font-extrabold text-sm sm:text-base rounded-full shadow-xs flex items-center gap-2 transition-colors"
            >
              <span>{currentStepIndex === totalSteps - 1 ? 'Finish Lesson 🎉' : 'Next Step'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Finished Screen */
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="w-20 h-20 bg-[#F0F4FF] text-[#5C7CFA] rounded-3xl flex items-center justify-center mx-auto shadow-2xs border border-[#5C7CFA]/30">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="px-4 py-1.5 bg-[#F0F4FF] text-[#5C7CFA] text-xs font-extrabold rounded-full border border-[#5C7CFA]/30">
              🌟 LESSON COMPLETED
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              {content.successMessage || 'Alhamdulillah! Fantastic job!'}
            </h3>
            <p className="text-slate-600 text-base max-w-md mx-auto">
              You completed all {totalSteps} instructions step by step!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="step-restart-btn"
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 bg-white/80 border border-slate-300 hover:bg-white text-slate-700 font-bold text-sm rounded-full flex items-center gap-2 shadow-2xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice Steps Again</span>
            </button>

            {onTryAnotherFormat && (
              <button
                id="step-try-another-format-btn"
                type="button"
                onClick={onTryAnotherFormat}
                className="px-6 py-2.5 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-xs"
              >
                <span>Try Flashcard Mode</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
