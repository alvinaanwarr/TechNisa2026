import React, { useState } from 'react';
import { LessonData, FormatType } from '../types';
import { InteractiveLessonCardView } from '../components/formats/InteractiveLessonCardView';
import { StoryView } from '../components/formats/StoryView';
import { VisualView } from '../components/formats/VisualView';
import { StepByStepView } from '../components/formats/StepByStepView';
import { FlashcardView } from '../components/formats/FlashcardView';
import { ParentTipsModal } from '../components/ParentTipsModal';
import { QuranScholarlySourcesModal } from '../components/QuranScholarlySourcesModal';
import { HackathonDemoBar } from '../components/HackathonDemoBar';
import { PillarSelector } from '../components/PillarSelector';
import {
  BookOpen,
  Layers,
  CheckSquare,
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  RefreshCw,
  Eye,
  Heart,
  LayoutGrid,
  FileCheck
} from 'lucide-react';

interface LessonViewProps {
  lesson: LessonData;
  isCalmMode: boolean;
  onToggleCalmMode: (enabled: boolean) => void;
  onEditPreferences: () => void;
  onLoadDemoLesson: (demoLesson: LessonData) => void;
  onNavigate: (view: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  isCalmMode,
  onToggleCalmMode,
  onEditPreferences,
  onLoadDemoLesson,
  onNavigate
}) => {
  const [activeFormat, setActiveFormat] = useState<FormatType>(
    lesson.activeFormat || (lesson.lessonSteps ? 'interactive_cards' : 'visual')
  );
  const [isParentAssistantOpen, setIsParentAssistantOpen] = useState(false);
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

  const formatList: { id: FormatType; label: string; icon: any; color: string }[] = [
    { id: 'interactive_cards', label: '🎴 Step Cards (AI)', icon: Sparkles, color: 'text-emerald-700 bg-emerald-50' },
    { id: 'visual', label: '🎨 Comic / Visual', icon: Layers, color: 'text-teal-700 bg-teal-50' },
    { id: 'step_by_step', label: '🧩 Checklist Mode', icon: CheckSquare, color: 'text-blue-700 bg-blue-50' },
    { id: 'story', label: '📖 Story Mode', icon: BookOpen, color: 'text-purple-700 bg-purple-50' },
    { id: 'flashcard', label: '✨ Flashcards', icon: Sparkles, color: 'text-amber-700 bg-amber-50' }
  ];

  const handleNextFormatCycle = () => {
    const currentIndex = formatList.findIndex((f) => f.id === activeFormat);
    const nextIndex = (currentIndex + 1) % formatList.length;
    setActiveFormat(formatList[nextIndex].id);
  };

  return (
    <div id="active-lesson-view" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Hackathon Demo Quick Switcher */}
      <HackathonDemoBar
        currentLessonId={lesson.id}
        onSelectDemoLesson={(demo) => {
          onLoadDemoLesson(demo);
          setActiveFormat(demo.activeFormat);
        }}
      />

      {/* The 5 Pillars of Islam Dedicated Navigation Hub */}
      <PillarSelector
        currentLessonId={lesson.id}
        onSelectLesson={(pillarLesson) => {
          onLoadDemoLesson(pillarLesson);
          setActiveFormat(pillarLesson.activeFormat || 'interactive_cards');
        }}
      />

      {/* Top Lesson Control Toolbar */}
      <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-5 sm:p-7 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="px-3 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full border border-[#7B9A7A]/30">
                Topic: {lesson.topic}
              </span>
              <span className="px-3 py-1 bg-slate-100/80 text-slate-700 rounded-full border border-slate-200">
                Learner: {lesson.learnerNickname} (Age {lesson.ageRange})
              </span>
              {lesson.selectedInterest && (
                <span className="px-3 py-1 bg-[#FCE8D5] text-[#D97706] border border-[#FCE8D5]/80 rounded-full">
                  Interest: {lesson.selectedInterest}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading pt-1">
              {lesson.title || lesson.topic}
            </h1>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              id="quran-tafsir-sources-btn"
              type="button"
              onClick={() => setIsSourcesModalOpen(true)}
              className="px-4 py-2 bg-[#E8F1E7] hover:bg-[#d8e7d7] text-[#4A6349] border border-[#7B9A7A]/40 font-bold text-xs sm:text-sm rounded-full flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <BookOpen className="w-4 h-4 text-[#7B9A7A]" />
              <span>Qur'an & Tafsir Sources</span>
            </button>

            <button
              id="helping-your-learner-btn"
              type="button"
              onClick={() => setIsParentAssistantOpen(true)}
              className="px-4 py-2 bg-[#FCE8D5] hover:bg-[#fadfc5] text-[#D97706] border border-[#FCE8D5]/80 font-bold text-xs sm:text-sm rounded-full flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>Helping Your Learner</span>
            </button>

            <button
              id="edit-preferences-btn"
              type="button"
              onClick={onEditPreferences}
              className="px-4 py-2 bg-white/80 hover:bg-white text-slate-700 font-bold text-xs sm:text-sm rounded-full flex items-center gap-1.5 transition-all border border-slate-200 shadow-2xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Change Settings</span>
            </button>
          </div>
        </div>

        {/* Multi-Format Selector Pills */}
        <div className="pt-3 border-t border-slate-200/60">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Choose Lesson Format:
            </span>
            <button
              id="try-another-way-btn"
              type="button"
              onClick={handleNextFormatCycle}
              className="text-xs font-extrabold text-[#4A6349] hover:text-[#384c37] flex items-center gap-1 bg-[#E8F1E7] px-3 py-1.5 rounded-full border border-[#7B9A7A]/30 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Try Another Way</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {formatList.map((fmt) => {
              const isActive = activeFormat === fmt.id;
              const IconComp = fmt.icon;
              return (
                <button
                  key={fmt.id}
                  id={`format-tab-${fmt.id}`}
                  type="button"
                  onClick={() => setActiveFormat(fmt.id)}
                  className={`py-3 px-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border shadow-2xs ${
                    isActive
                      ? 'bg-[#7B9A7A] text-white border-[#5A7359] shadow-xs'
                      : 'bg-white/60 hover:bg-white text-slate-700 border-slate-200/80 backdrop-blur-xs'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span className="truncate">{fmt.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ACTIVE FORMAT PRESENTATION VIEW */}
      <main id="active-format-stage">
        {activeFormat === 'interactive_cards' && (
          <InteractiveLessonCardView
            lesson={lesson}
            isCalmMode={isCalmMode}
            onTryAnotherFormat={(fmtId) => setActiveFormat(fmtId as FormatType)}
          />
        )}

        {activeFormat === 'story' && (
          <StoryView
            content={lesson.storyContent}
            isCalmMode={isCalmMode}
            onTryAnotherFormat={() => setActiveFormat('interactive_cards')}
          />
        )}

        {activeFormat === 'visual' && (
          <VisualView
            content={lesson.visualContent}
            isCalmMode={isCalmMode}
            onTryAnotherFormat={() => setActiveFormat('interactive_cards')}
          />
        )}

        {activeFormat === 'step_by_step' && (
          <StepByStepView
            content={lesson.stepContent}
            isCalmMode={isCalmMode}
            onTryAnotherFormat={() => setActiveFormat('interactive_cards')}
          />
        )}

        {activeFormat === 'flashcard' && (
          <FlashcardView
            content={lesson.flashcardContent}
            isCalmMode={isCalmMode}
            onTryAnotherFormat={() => setActiveFormat('interactive_cards')}
          />
        )}
      </main>

      {/* Quran & Tafsir Footnote Section */}
      {lesson.quranReferences && lesson.quranReferences.length > 0 && (
        <div className="p-6 bg-gradient-to-r from-[#F4F8F3] via-white to-[#E8F1E7]/50 border border-[#7B9A7A]/30 rounded-3xl space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#7B9A7A]" />
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4A6349]">
                Scriptural & Scholarly Sourcing
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setIsSourcesModalOpen(true)}
              className="text-xs font-bold text-[#4A6349] hover:underline"
            >
              View Full Commentary →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {lesson.quranReferences.map((ref, i) => (
              <div key={i} className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs space-y-1">
                <div className="font-bold text-slate-800 flex items-center justify-between">
                  <span>{ref.surahName} ({ref.surahNumber}:{ref.ayahRange})</span>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7B9A7A] hover:underline text-2xs"
                    >
                      Quran.com ↗
                    </a>
                  )}
                </div>
                {ref.englishSnippet && (
                  <p className="text-slate-600 text-2xs italic line-clamp-2">
                    "{ref.englishSnippet}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Educational Support Disclaimer */}
      <div className="p-4 bg-white border border-stone-200 rounded-2xl flex items-start gap-3 text-stone-500 text-xs leading-relaxed shadow-2xs">
        <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
        <p>
          <strong className="text-stone-700 font-semibold">Educational Disclaimer:</strong> Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.
        </p>
      </div>

      {/* Parent Assistant Modal */}
      <ParentTipsModal
        parentTips={lesson.parentTips}
        learnerNickname={lesson.learnerNickname}
        topic={lesson.topic}
        isOpen={isParentAssistantOpen}
        onClose={() => setIsParentAssistantOpen(false)}
      />

      {/* Quran & Tafsir Scholarly Sources Modal */}
      <QuranScholarlySourcesModal
        lesson={lesson}
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
      />
    </div>
  );
};
