import React, { useState, useEffect } from 'react';
import { LessonData, LessonStep } from '../../types';
import { AudioPlayer } from '../AudioPlayer';
import { DynamicIcon } from '../DynamicIcon';
import { CartoonCompanion, CharacterTheme } from '../CartoonCompanion';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../services/storageService';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  RotateCcw,
  Feather,
  BookOpen,
  Target,
  Smile,
  Award,
  Check,
  RefreshCw,
  Lightbulb,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveLessonCardViewProps {
  lesson: LessonData;
  isCalmMode: boolean;
  onTryAnotherFormat?: (formatId: string) => void;
  onRestart?: () => void;
}

export const InteractiveLessonCardView: React.FC<InteractiveLessonCardViewProps> = ({
  lesson,
  isCalmMode,
  onTryAnotherFormat,
  onRestart
}) => {
  // Steps in the card journey:
  // Card 0: Introduction & Learning Objective
  // Cards 1..N: Lesson Steps
  // Card N+1: Hands-On Activity
  // Card N+2: Interactive Review Question
  // Card N+3: Completion Celebration

  const steps = lesson.lessonSteps && lesson.lessonSteps.length > 0
    ? lesson.lessonSteps
    : (lesson.stepContent?.steps || []).map((s, idx) => ({
        stepNumber: s.stepNumber || idx + 1,
        title: s.title || `Step ${idx + 1}`,
        instruction: s.instruction || s.detail,
        tip: s.sensoryTip || s.repeatPhrase,
        detail: s.detail || s.instruction,
        iconName: s.iconName || 'Sparkles',
        repeatPhrase: s.repeatPhrase,
        sensoryTip: s.sensoryTip
      }));

  const totalStepsCount = steps.length;
  // Total cards = 1 (Intro) + totalStepsCount + 1 (Activity) + 1 (Review) + 1 (Completion)
  const totalCards = 1 + totalStepsCount + 1 + 1 + 1;

  const lessonKey = encodeURIComponent(lesson.id || lesson.title || 'default');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useLocalStorage<number[]>(
    `${STORAGE_KEYS.INTERACTIVE_PROGRESS_PREFIX}steps_${lessonKey}`,
    []
  );
  const [completedActivityItems, setCompletedActivityItems] = useLocalStorage<number[]>(
    `${STORAGE_KEYS.INTERACTIVE_PROGRESS_PREFIX}act_${lessonKey}`,
    []
  );
  const [selectedReviewOption, setSelectedReviewOption] = useLocalStorage<string | null>(
    `${STORAGE_KEYS.INTERACTIVE_PROGRESS_PREFIX}opt_${lessonKey}`,
    null
  );
  const [hasAnsweredReview, setHasAnsweredReview] = useLocalStorage<boolean>(
    `${STORAGE_KEYS.INTERACTIVE_PROGRESS_PREFIX}ans_${lessonKey}`,
    false
  );
  const [showHint, setShowHint] = useState(false);
  const [characterTheme, setCharacterTheme] = useState<CharacterTheme>(
    lesson.selectedInterest?.toLowerCase().includes('bluey')
      ? 'bluey'
      : lesson.selectedInterest?.toLowerCase().includes('chase') || lesson.selectedInterest?.toLowerCase().includes('paw')
      ? 'chase'
      : lesson.selectedInterest?.toLowerCase().includes('space') || lesson.selectedInterest?.toLowerCase().includes('astro')
      ? 'astronaut'
      : lesson.selectedInterest?.toLowerCase().includes('super')
      ? 'superhero'
      : 'princess'
  );

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentCardIndex < totalCards - 1) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && currentCardIndex > 0) {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCardIndex, totalCards]);

  const handleNext = () => {
    if (currentCardIndex < totalCards - 1) {
      const nextIndex = currentCardIndex + 1;
      setCurrentCardIndex(nextIndex);

      // If moving to the final celebration card, trigger confetti
      if (nextIndex === totalCards - 1 && !isCalmMode) {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prev) => prev - 1);
    }
  };

  const handleJumpToCard = (index: number) => {
    setCurrentCardIndex(index);
    if (index === totalCards - 1 && !isCalmMode) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const toggleStepCompleted = (stepNum: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNum) ? prev.filter((s) => s !== stepNum) : [...prev, stepNum]
    );
  };

  const toggleActivityItem = (itemIdx: number) => {
    setCompletedActivityItems((prev) =>
      prev.includes(itemIdx) ? prev.filter((i) => i !== itemIdx) : [...prev, itemIdx]
    );
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedReviewOption(optionId);
    setHasAnsweredReview(true);

    const isCorrect = lesson.reviewQuestion?.options?.find((o) => o.id === optionId)?.isCorrect;
    if (isCorrect && !isCalmMode) {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  const handleReset = () => {
    setCurrentCardIndex(0);
    setCompletedSteps([]);
    setCompletedActivityItems([]);
    setSelectedReviewOption(null);
    setHasAnsweredReview(false);
    setShowHint(false);
    if (onRestart) onRestart();
  };

  // Card Type Identification
  const isIntroCard = currentCardIndex === 0;
  const isStepCard = currentCardIndex >= 1 && currentCardIndex <= totalStepsCount;
  const isActivityCard = currentCardIndex === totalStepsCount + 1;
  const isReviewCard = currentCardIndex === totalStepsCount + 2;
  const isCompletionCard = currentCardIndex === totalCards - 1;

  const currentStepData: LessonStep | undefined = isStepCard
    ? steps[currentCardIndex - 1]
    : undefined;

  // Text for Speech reader
  let speechText = '';
  if (isIntroCard) {
    speechText = `${lesson.title}. Learning Objective: ${lesson.learningObjective}. ${lesson.introduction}`;
  } else if (isStepCard && currentStepData) {
    speechText = `Step ${currentStepData.stepNumber}: ${currentStepData.title}. ${currentStepData.instruction}. ${currentStepData.detail || ''} ${currentStepData.repeatPhrase ? `Repeat: ${currentStepData.repeatPhrase}` : ''}`;
  } else if (isActivityCard && lesson.activity) {
    speechText = `Hands-on Activity: ${lesson.activity.title}. ${lesson.activity.instructions}`;
  } else if (isReviewCard && lesson.reviewQuestion) {
    speechText = `Review Question: ${lesson.reviewQuestion.question}`;
  } else if (isCompletionCard) {
    speechText = `Alhamdulillah! You completed all steps, the activity, and review for ${lesson.title}!`;
  }

  // Progress percentage calculation
  const progressPercent = Math.round(((currentCardIndex + 1) / totalCards) * 100);

  return (
    <div id="interactive-card-lesson-view" className="space-y-6 max-w-4xl mx-auto">
      {/* Header bar with Topic Info & Audio */}
      <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2rem] p-4 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full text-xs font-bold border border-[#7B9A7A]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#7B9A7A]" />
              <span>Interactive Step Cards</span>
            </span>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              Card {currentCardIndex + 1} of {totalCards}
            </span>
          </div>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-heading">
            {lesson.title || lesson.topic}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <AudioPlayer textToRead={speechText} isCalmMode={isCalmMode} showVoiceBadge={true} />
        </div>
      </div>

      {/* Segmented Stepper / Navigation Breadcrumbs */}
      <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-3 shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
          <span className="flex items-center gap-1.5 text-[#4A6349]">
            <Target className="w-3.5 h-3.5" />
            {isIntroCard && 'Overview & Objective'}
            {isStepCard && `Step ${currentStepData?.stepNumber} of ${totalStepsCount}`}
            {isActivityCard && 'Hands-on Activity'}
            {isReviewCard && 'Review Checkpoint'}
            {isCompletionCard && 'Celebration'}
          </span>
          <span>{progressPercent}% Completed</span>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/80">
          <div
            className="h-full bg-[#7B9A7A] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Quick Stepper Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          <button
            type="button"
            onClick={() => handleJumpToCard(0)}
            className={`px-2.5 py-1 rounded-lg text-2xs font-bold transition-all shrink-0 ${
              currentCardIndex === 0
                ? 'bg-[#7B9A7A] text-white'
                : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            Intro
          </button>

          {steps.map((st, idx) => {
            const cardIdx = idx + 1;
            const isCompleted = completedSteps.includes(st.stepNumber);
            const isCurrent = currentCardIndex === cardIdx;
            return (
              <button
                key={st.stepNumber}
                type="button"
                onClick={() => handleJumpToCard(cardIdx)}
                className={`px-2.5 py-1 rounded-lg text-2xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                  isCurrent
                    ? 'bg-[#7B9A7A] text-white'
                    : isCompleted
                    ? 'bg-[#E8F1E7] text-[#4A6349] border border-[#7B9A7A]/30'
                    : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
                }`}
              >
                <span>Step {st.stepNumber}</span>
                {isCompleted && <Check className="w-2.5 h-2.5 text-[#7B9A7A]" />}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handleJumpToCard(totalStepsCount + 1)}
            className={`px-2.5 py-1 rounded-lg text-2xs font-bold transition-all shrink-0 ${
              currentCardIndex === totalStepsCount + 1
                ? 'bg-[#D97706] text-white'
                : completedActivityItems.length > 0
                ? 'bg-[#FCE8D5] text-[#D97706] border border-[#D97706]/30'
                : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            Activity
          </button>

          <button
            type="button"
            onClick={() => handleJumpToCard(totalStepsCount + 2)}
            className={`px-2.5 py-1 rounded-lg text-2xs font-bold transition-all shrink-0 ${
              currentCardIndex === totalStepsCount + 2
                ? 'bg-[#5C7CFA] text-white'
                : hasAnsweredReview
                ? 'bg-[#EBF0FF] text-[#5C7CFA] border border-[#5C7CFA]/30'
                : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            Review
          </button>

          <button
            type="button"
            onClick={() => handleJumpToCard(totalCards - 1)}
            className={`px-2.5 py-1 rounded-lg text-2xs font-bold transition-all shrink-0 ${
              currentCardIndex === totalCards - 1
                ? 'bg-[#7B9A7A] text-white'
                : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
            }`}
          >
            Done 🎉
          </button>
        </div>
      </div>

      {/* MAIN INTERACTIVE CARD CONTAINER */}
      <div className="bg-white/85 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-10 shadow-sm min-h-[380px] flex flex-col justify-between space-y-6">
        {/* CARD 0: INTRODUCTION & OBJECTIVE */}
        {isIntroCard && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F1E7] text-[#4A6349] flex items-center justify-center border border-[#7B9A7A]/30">
                <BookOpen className="w-6 h-6 text-[#7B9A7A]" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#4A6349] uppercase tracking-wider">
                  Lesson Objective
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Welcome to {lesson.title || lesson.topic}
                </h3>
              </div>
            </div>

            {/* Learning Objective Box */}
            <div className="p-5 sm:p-6 bg-[#E8F1E7]/80 border border-[#7B9A7A]/30 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A6349] uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#7B9A7A]" />
                <span>What We Will Learn</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {lesson.learningObjective}
              </p>
            </div>

            {/* Introduction Story / Overview */}
            <div className="p-6 bg-[#FDFCF9]/90 border border-slate-200/80 rounded-2xl space-y-3">
              <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>Introduction</span>
              </h4>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {lesson.introduction}
              </p>
            </div>

            {lesson.selectedInterest && (
              <div className="p-4 bg-[#FCE8D5]/80 border border-[#D97706]/30 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <Heart className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>
                  <strong>Passions Connection:</strong> Lessons are adapted with themes from{' '}
                  <strong className="text-[#D97706]">{lesson.selectedInterest}</strong> for relatable learning.
                </span>
              </div>
            )}
          </div>
        )}

        {/* CARD 1..N: INDIVIDUAL LESSON STEP CARDS */}
        {isStepCard && currentStepData && (
          <div className="space-y-6">
            {/* Step Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F1E7] text-[#4A6349] flex items-center justify-center shrink-0 border border-[#7B9A7A]/30 shadow-2xs">
                  <DynamicIcon name={currentStepData.iconName || 'Sparkles'} className="w-7 h-7 text-[#7B9A7A]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#4A6349] uppercase tracking-wider block">
                    Step {currentStepData.stepNumber} of {totalStepsCount}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {currentStepData.title}
                  </h3>
                </div>
              </div>

              {currentStepData.arabicTerm && (
                <div className="hidden sm:block text-right">
                  <div className="text-base font-bold font-arabic text-emerald-800">
                    {currentStepData.arabicTerm}
                  </div>
                  {currentStepData.arabicTransliteration && (
                    <div className="text-2xs text-slate-500 font-medium">
                      {currentStepData.arabicTransliteration}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Instruction Focus Block */}
            <div className="p-6 sm:p-8 bg-[#FDFCF9] border border-slate-200/90 rounded-[2rem] shadow-2xs space-y-4">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentStepData.instruction}
              </p>
              {currentStepData.detail && (
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentStepData.detail}
                </p>
              )}
            </div>

            {/* Repetition Phrase / Tip */}
            {currentStepData.repeatPhrase && (
              <div className="p-4 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-2xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#7B9A7A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#4A6349] uppercase tracking-wider block">
                    Say & Practice Together:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    "{currentStepData.repeatPhrase}"
                  </p>
                </div>
              </div>
            )}

            {/* Interactive Cartoon Cheerleader */}
            <div className="pt-1">
              <CartoonCompanion
                theme={characterTheme}
                size="md"
                actionMessage={
                  completedSteps.includes(currentStepData.stepNumber)
                    ? 'MashaAllah! You mastered this step! Ready for the next one!'
                    : currentStepData.repeatPhrase
                    ? `Let's practice saying "${currentStepData.repeatPhrase}" together!`
                    : `You are doing amazing! Take your time with step ${currentStepData.stepNumber}.`
                }
                interactive={true}
                onSelectTheme={(t) => setCharacterTheme(t)}
              />
            </div>

            {/* Sensory Tip */}
            {currentStepData.sensoryTip && (
              <div className="p-4 bg-[#FCE8D5]/90 border border-[#FCE8D5] rounded-2xl flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Feather className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>
                  <strong className="text-slate-900">Sensory Tip:</strong> {currentStepData.sensoryTip}
                </span>
              </div>
            )}

            {/* Action Prompt */}
            {currentStepData.actionPrompt && (
              <div className="p-4 bg-[#EBF0FF]/90 border border-[#5C7CFA]/30 rounded-2xl flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Lightbulb className="w-4 h-4 text-[#5C7CFA] shrink-0" />
                <span>
                  <strong className="text-[#5C7CFA]">Action Prompt:</strong> {currentStepData.actionPrompt}
                </span>
              </div>
            )}

            {/* Practice Step Checkbox */}
            <button
              type="button"
              onClick={() => toggleStepCompleted(currentStepData.stepNumber)}
              className={`w-full p-4 rounded-2xl border font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all ${
                completedSteps.includes(currentStepData.stepNumber)
                  ? 'bg-[#E8F1E7] border-[#7B9A7A]/50 text-[#4A6349] shadow-2xs'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2
                className={`w-6 h-6 ${
                  completedSteps.includes(currentStepData.stepNumber)
                    ? 'text-[#7B9A7A]'
                    : 'text-slate-300'
                }`}
              />
              <span>
                {completedSteps.includes(currentStepData.stepNumber)
                  ? 'Step Practiced & Completed ✓'
                  : 'Click when you have practiced this step'}
              </span>
            </button>
          </div>
        )}

        {/* CARD N+1: HANDS-ON ACTIVITY */}
        {isActivityCard && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FCE8D5] text-[#D97706] flex items-center justify-center border border-[#D97706]/30">
                <Sparkles className="w-6 h-6 text-[#D97706]" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#D97706] uppercase tracking-wider">
                  Interactive Practice Activity
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {lesson.activity?.title || 'Hands-On Learning Activity'}
                </h3>
              </div>
            </div>

            <div className="p-6 bg-[#FDFCF9] border border-slate-200/90 rounded-2xl space-y-3">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                {lesson.activity?.instructions || 'Practice the core steps together using these interactive checkpoints:'}
              </p>
            </div>

            {/* Checkable Action Items */}
            {lesson.activity?.actionItems && lesson.activity.actionItems.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Activity Checkpoints:
                </span>
                {lesson.activity.actionItems.map((item, idx) => {
                  const isChecked = completedActivityItems.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleActivityItem(idx)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center gap-3.5 ${
                        isChecked
                          ? 'bg-[#E8F1E7] border-[#7B9A7A]/50 text-[#4A6349]'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 ${
                          isChecked
                            ? 'bg-[#7B9A7A] border-[#7B9A7A] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4" />}
                      </div>
                      <span className="text-sm sm:text-base font-semibold">{item}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Interest Connection */}
            {lesson.activity?.interestConnection && (
              <div className="p-4 bg-[#FCE8D5]/80 border border-[#D97706]/30 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <Heart className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Passion Connection:</strong>
                  {lesson.activity.interestConnection}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CARD N+2: INTERACTIVE REVIEW QUESTION */}
        {isReviewCard && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF0FF] text-[#5C7CFA] flex items-center justify-center border border-[#5C7CFA]/30">
                  <HelpCircle className="w-6 h-6 text-[#5C7CFA]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#5C7CFA] uppercase tracking-wider">
                    Gentle Review Checkpoint
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Test What You Learned
                  </h3>
                </div>
              </div>

              {lesson.reviewQuestion?.hint && (
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
                </button>
              )}
            </div>

            {/* Hint Box */}
            {showHint && lesson.reviewQuestion?.hint && (
              <div className="p-3.5 bg-amber-50/90 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-900 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Hint:</strong> {lesson.reviewQuestion.hint}</span>
              </div>
            )}

            {/* Question Text */}
            <div className="p-6 bg-[#FDFCF9] border border-slate-200/90 rounded-2xl">
              <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {lesson.reviewQuestion?.question || 'What is the most important lesson you learned today?'}
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-3">
              {lesson.reviewQuestion?.options?.map((opt) => {
                const isSelected = selectedReviewOption === opt.id;
                let optionStyle = 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';

                if (hasAnsweredReview && isSelected) {
                  optionStyle = opt.isCorrect
                    ? 'bg-[#E8F1E7] border-[#7B9A7A] text-[#4A6349] font-bold shadow-2xs'
                    : 'bg-rose-50 border-rose-300 text-rose-800 font-bold';
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${optionStyle}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-[#7B9A7A] border-[#7B9A7A] text-white'
                            : 'bg-rose-500 border-rose-500 text-white'
                          : 'border-slate-300 bg-slate-50 text-slate-600'
                      }`}
                    >
                      {opt.isCorrect && isSelected ? '✓' : opt.id.slice(-1)}
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-semibold leading-snug">
                        {opt.text}
                      </div>
                      {hasAnsweredReview && isSelected && (
                        <div className="text-xs text-slate-600 font-normal pt-1">
                          {opt.explanation}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Correct Answer Explanation Banner */}
            {hasAnsweredReview && lesson.reviewQuestion?.correctAnswerExplanation && (
              <div className="p-4 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#7B9A7A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4A6349] block mb-0.5">Key Insight:</strong>
                  {lesson.reviewQuestion.correctAnswerExplanation}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CARD N+3: CELEBRATION & COMPLETION */}
        {isCompletionCard && (
          <div className="space-y-6 text-center py-4">
            <div className="w-20 h-20 bg-[#E8F1E7] text-[#4A6349] rounded-3xl flex items-center justify-center mx-auto shadow-2xs border border-[#7B9A7A]/30">
              <Award className="w-12 h-12 text-[#7B9A7A]" />
            </div>

            <div className="space-y-2">
              <span className="px-4 py-1.5 bg-[#E8F1E7] text-[#4A6349] text-xs font-extrabold rounded-full border border-[#7B9A7A]/30">
                🌟 LESSON COMPLETED • MABROOK!
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Alhamdulillah! Outstanding Work!
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                You completed the full lesson on <strong>{lesson.title || lesson.topic}</strong>, practiced the steps, and completed the review!
              </p>
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto pt-2">
              <div className="p-3.5 bg-white border border-slate-200 rounded-2xl text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">Steps Practiced</div>
                <div className="text-xl font-extrabold text-[#4A6349]">
                  {completedSteps.length} of {totalStepsCount}
                </div>
              </div>

              <div className="p-3.5 bg-white border border-slate-200 rounded-2xl text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">Activity Check</div>
                <div className="text-xl font-extrabold text-[#D97706]">
                  {completedActivityItems.length} Done
                </div>
              </div>

              <div className="p-3.5 bg-white border border-slate-200 rounded-2xl text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">Review Check</div>
                <div className="text-xl font-extrabold text-[#5C7CFA]">
                  {hasAnsweredReview ? 'Completed ✓' : 'Reviewed'}
                </div>
              </div>
            </div>

            {/* Next Steps Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-full flex items-center gap-2 shadow-2xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Review Cards Again</span>
              </button>

              {onTryAnotherFormat && (
                <button
                  type="button"
                  onClick={() => onTryAnotherFormat('visual')}
                  className="px-6 py-3 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-extrabold text-sm rounded-full flex items-center gap-2 shadow-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Try Visual Comic Mode</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* BOTTOM BACK / NEXT NAVIGATION CONTROLS */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
          <button
            id="card-prev-btn"
            type="button"
            onClick={handlePrev}
            disabled={currentCardIndex === 0}
            className={`px-5 py-3 rounded-full font-bold text-sm flex items-center gap-2 border transition-all ${
              currentCardIndex === 0
                ? 'opacity-40 cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 shadow-2xs'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            id="card-next-btn"
            type="button"
            onClick={handleNext}
            className="px-7 py-3 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-extrabold text-sm sm:text-base rounded-full shadow-xs flex items-center gap-2 transition-all"
          >
            <span>
              {isIntroCard
                ? 'Start Step 1 →'
                : isStepCard && currentCardIndex < totalStepsCount
                ? `Next: Step ${currentCardIndex + 1} →`
                : isStepCard && currentCardIndex === totalStepsCount
                ? 'Go to Activity →'
                : isActivityCard
                ? 'Go to Review Question →'
                : isReviewCard
                ? 'Complete Lesson 🎉'
                : 'Finished!'}
            </span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
