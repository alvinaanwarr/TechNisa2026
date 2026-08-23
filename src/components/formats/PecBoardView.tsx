import React, { useState } from 'react';
import { VisualContent, VisualCard } from '../../types';
import { DynamicIcon } from '../DynamicIcon';
import { CartoonCompanion, CharacterTheme } from '../CartoonCompanion';
import { speakText, stopSpeech } from '../../utils/speech';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../services/storageService';
import {
  Volume2,
  Plus,
  Trash2,
  Printer,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Scissors,
  ArrowRight,
  HelpCircle,
  Coffee,
  Heart,
  Hand,
  Layers,
  Check
} from 'lucide-react';

export interface PecCardItem {
  id: string;
  label: string;
  sublabel?: string;
  arabic?: string;
  arabicTransliteration?: string;
  iconName: string;
  category: 'lesson' | 'communication' | 'routine' | 'faith' | 'interest';
  color: string;
  characterTheme?: CharacterTheme;
}

interface PecBoardViewProps {
  content: VisualContent;
  isCalmMode: boolean;
}

const CORE_COMMUNICATION_PECS: PecCardItem[] = [
  {
    id: 'pec-i-want',
    label: 'I Want',
    sublabel: 'Communication',
    iconName: 'Hand',
    category: 'communication',
    color: 'border-[#5C7CFA] bg-[#EBF0FF] text-[#5C7CFA]'
  },
  {
    id: 'pec-first',
    label: 'First',
    sublabel: 'Sequencing',
    iconName: 'ArrowRight',
    category: 'routine',
    color: 'border-[#D97706] bg-[#FCE8D5] text-[#D97706]'
  },
  {
    id: 'pec-then',
    label: 'Then',
    sublabel: 'Sequencing',
    iconName: 'ArrowRight',
    category: 'routine',
    color: 'border-[#D97706] bg-[#FCE8D5] text-[#D97706]'
  },
  {
    id: 'pec-help',
    label: 'Need Help',
    sublabel: 'Support',
    iconName: 'HelpCircle',
    category: 'communication',
    color: 'border-rose-400 bg-rose-50 text-rose-600'
  },
  {
    id: 'pec-break',
    label: 'Sensory Break',
    sublabel: 'Rest time',
    iconName: 'Coffee',
    category: 'communication',
    color: 'border-purple-400 bg-purple-50 text-purple-700'
  },
  {
    id: 'pec-all-done',
    label: 'All Done',
    sublabel: 'Finished',
    iconName: 'CheckCircle2',
    category: 'communication',
    color: 'border-[#7B9A7A] bg-[#E8F1E7] text-[#4A6349]'
  },
  {
    id: 'pec-bismillah',
    label: 'Bismillah',
    sublabel: 'Rahmah (Mercy & Kindness)',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ',
    arabicTransliteration: 'In the name of Allah, the Most Merciful',
    iconName: 'BookOpen',
    category: 'faith',
    color: 'border-[#7B9A7A] bg-[#E8F1E7] text-[#4A6349]'
  },
  {
    id: 'pec-alhamdulillah',
    label: 'Alhamdulillah',
    sublabel: 'Gratitude & Sincere Thanks',
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    arabicTransliteration: 'All thanks and praise are for Allah',
    iconName: 'Sun',
    category: 'faith',
    color: 'border-[#7B9A7A] bg-[#E8F1E7] text-[#4A6349]'
  },
  {
    id: 'pec-charity-gift',
    label: 'Zakat Gift',
    sublabel: 'Fairness & Sharing',
    arabic: 'الزَّكَاة',
    arabicTransliteration: 'Giving charity to friends',
    iconName: 'HeartHandshake',
    category: 'faith',
    color: 'border-emerald-400 bg-emerald-50 text-emerald-800'
  },
  {
    id: 'pec-water',
    label: 'Water',
    arabic: 'مَاء',
    arabicTransliteration: 'Clean Water',
    iconName: 'Droplets',
    category: 'routine',
    color: 'border-cyan-400 bg-cyan-50 text-cyan-700'
  },
  {
    id: 'pec-good-job',
    label: 'Good Job!',
    sublabel: 'Praise & Reward',
    iconName: 'Star',
    category: 'communication',
    color: 'border-amber-400 bg-amber-50 text-amber-600'
  },
  // Character Interest Badges
  {
    id: 'pec-char-princess',
    label: 'Princess & Castle',
    sublabel: 'Royal Manners & Kindness',
    iconName: 'Crown',
    category: 'interest',
    color: 'border-pink-400 bg-pink-50 text-pink-700',
    characterTheme: 'princess'
  },
  {
    id: 'pec-char-chase',
    label: 'Chase Pup Hero',
    sublabel: 'Rescue Helper Mission',
    iconName: 'Shield',
    category: 'interest',
    color: 'border-blue-400 bg-blue-50 text-blue-700',
    characterTheme: 'chase'
  },
  {
    id: 'pec-char-bluey',
    label: 'Bluey & Friends',
    sublabel: 'Playful Love & Smiles',
    iconName: 'Smile',
    category: 'interest',
    color: 'border-sky-400 bg-sky-50 text-sky-700',
    characterTheme: 'bluey'
  },
  {
    id: 'pec-char-sheep',
    label: 'Gentle Sheep',
    sublabel: 'Eid & Hajj Harmony',
    iconName: 'Compass',
    category: 'interest',
    color: 'border-green-400 bg-green-50 text-green-700',
    characterTheme: 'sheep'
  }
];

export const PecBoardView: React.FC<PecBoardViewProps> = ({ content, isCalmMode }) => {
  const contentKey = encodeURIComponent(content.title || 'default');
  const [stripCards, setStripCards] = useLocalStorage<PecCardItem[]>(
    `${STORAGE_KEYS.PECS_STRIP_PREFIX}${contentKey}`,
    []
  );
  const [stripCompleted, setStripCompleted] = useLocalStorage<Record<number, boolean>>(
    `${STORAGE_KEYS.PECS_DONE_PREFIX}${contentKey}`,
    {}
  );
  const [selectedTheme, setSelectedTheme] = useState<CharacterTheme>('princess');
  const [stripMode, setStripMode] = useState<'schedule' | 'first_then' | 'sentence'>('schedule');
  const [showPrintSheet, setShowPrintSheet] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'lesson' | 'communication' | 'faith' | 'interest'>('all');

  // Convert lesson visual cards into PEC format
  const lessonPecCards: PecCardItem[] = (content.cards || []).map((card, idx) => ({
    id: `lesson-card-${idx}-${card.stepNumber}`,
    label: card.title || `Step ${card.stepNumber}`,
    sublabel: card.simpleSentence,
    arabic: card.arabicTerm,
    arabicTransliteration: card.arabicTransliteration,
    iconName: card.iconName || 'Sparkles',
    category: 'lesson',
    color: 'border-[#7B9A7A] bg-white text-slate-800'
  }));

  const allAvailablePecs = [...lessonPecCards, ...CORE_COMMUNICATION_PECS];

  const displayedPecs = allAvailablePecs.filter((pec) => {
    if (activeCategoryFilter === 'lesson') return pec.category === 'lesson';
    if (activeCategoryFilter === 'communication') return pec.category === 'communication' || pec.category === 'routine';
    if (activeCategoryFilter === 'faith') return pec.category === 'faith';
    if (activeCategoryFilter === 'interest') return pec.category === 'interest';
    return true;
  });

  const handleAddToStrip = (pec: PecCardItem) => {
    setStripCards((prev) => [...prev, pec]);
  };

  const handleRemoveFromStrip = (index: number) => {
    setStripCards((prev) => prev.filter((_, i) => i !== index));
    setStripCompleted((prev) => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  const handleClearStrip = () => {
    setStripCards([]);
    setStripCompleted({});
    stopSpeech();
  };

  const handleToggleDone = (index: number) => {
    setStripCompleted((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSpeakCard = (pec: PecCardItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const phrase = pec.arabicTransliteration
      ? `${pec.label}. ${pec.arabicTransliteration}`
      : pec.sublabel
      ? `${pec.label}. ${pec.sublabel}`
      : pec.label;
    speakText(phrase, { rate: isCalmMode ? 0.8 : 0.9 });
  };

  const handleSpeakStrip = () => {
    if (stripCards.length === 0) {
      speakText('The sentence strip is empty. Tap any PEC card to add it to your strip.', { rate: 0.9 });
      return;
    }

    let sentence = '';
    if (stripMode === 'first_then' && stripCards.length >= 2) {
      sentence = `First, ${stripCards[0].label}. Then, ${stripCards[1].label}.`;
    } else {
      sentence = stripCards.map((c) => c.label).join('. ');
    }

    speakText(sentence, { rate: isCalmMode ? 0.82 : 0.9 });
  };

  const handlePrint = () => {
    window.print();
  };

  const populateFirstThenPreset = () => {
    const firstPec = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-first');
    const step1 = lessonPecCards[0];
    const thenPec = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-then');
    const step2 = lessonPecCards[1] || CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-good-job');

    const newStrip: PecCardItem[] = [];
    if (firstPec) newStrip.push(firstPec);
    if (step1) newStrip.push(step1);
    if (thenPec) newStrip.push(thenPec);
    if (step2) newStrip.push(step2);

    setStripMode('first_then');
    setStripCards(newStrip);
    setStripCompleted({});
  };

  const populateAllLessonSteps = () => {
    setStripMode('schedule');
    setStripCards([...lessonPecCards]);
    setStripCompleted({});
  };

  return (
    <div id="pecs-board-container" className="space-y-8">
      {/* Top Banner with PECS Explanation & Cartoon Companion */}
      <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-5 sm:p-7 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full text-xs font-bold border border-[#7B9A7A]/30">
            <Layers className="w-3.5 h-3.5 text-[#7B9A7A]" />
            <span>PECS & Visual Communication Board</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            Picture Exchange (PEC) Communication & Schedule
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Tap cards to build your visual schedule or communication strip. Tap the audio button on any card or read the whole strip aloud!
          </p>

          {/* Child Interest Cartoon Companion */}
          <div className="pt-2">
            <CartoonCompanion
              theme={selectedTheme}
              size="sm"
              actionMessage="Pick your favorite character companion to cheer you through the 5 Pillars & Fatihah!"
              interactive={true}
              onSelectTheme={(t) => setSelectedTheme(t)}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            id="pecs-print-toggle-btn"
            type="button"
            onClick={() => setShowPrintSheet(!showPrintSheet)}
            className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-2xs border ${
              showPrintSheet
                ? 'bg-[#7B9A7A] text-white border-[#7B9A7A]'
                : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-white'
            }`}
          >
            <Printer className="w-4 h-4 text-[#7B9A7A]" />
            <span>{showPrintSheet ? 'Hide Printable Sheet' : 'Printable PECS Sheet'}</span>
          </button>
        </div>
      </div>

      {/* PRINTABLE CUTOUT SHEET MODAL / EXPANDED VIEW */}
      {showPrintSheet && (
        <div
          id="printable-pecs-sheet"
          className="bg-white rounded-[2.5rem] p-6 sm:p-10 border-2 border-[#7B9A7A]/40 shadow-lg space-y-6 print:border-none print:shadow-none print:p-0"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 print:hidden">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4A6349] uppercase tracking-wider">
                <Scissors className="w-4 h-4 text-[#7B9A7A]" />
                <span>Ready-to-Print PECS Cutout Grid</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading">
                Physical Communication Cards & Schedule Strip
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Standard square size with velcro dot placement cues. Print on cardstock and laminate for Sunday school or home routines!
              </p>
            </div>

            <button
              id="actual-print-trigger-btn"
              type="button"
              onClick={handlePrint}
              className="px-6 py-2.5 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-extrabold text-sm rounded-full shadow-xs flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Cards Now</span>
            </button>
          </div>

          {/* Grid of Printable Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
            {allAvailablePecs.map((pec) => (
              <div
                key={pec.id}
                className="border-2 border-dashed border-slate-300 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[140px] bg-white relative print:border-slate-400"
              >
                {/* Simulated Velcro Dot Circle */}
                <div className="w-3.5 h-3.5 rounded-full border border-dashed border-slate-400 absolute top-2 right-2 print:border-slate-500" />

                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center my-auto">
                  <DynamicIcon name={pec.iconName} className="w-6 h-6 text-slate-700" />
                </div>

                <div className="space-y-0.5 mt-2 w-full">
                  <div className="font-extrabold text-xs text-slate-900 leading-tight">
                    {pec.label}
                  </div>
                  {pec.arabic && (
                    <div className="text-2xs font-bold font-arabic text-emerald-800 truncate">
                      {pec.arabic}
                    </div>
                  )}
                  {pec.sublabel && (
                    <div className="text-3xs text-slate-500 truncate">{pec.sublabel}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE SCHEDULE / SENTENCE STRIP (Velcro Board simulation) */}
      <div
        id="pecs-sentence-strip"
        className="bg-[#2D3748] border-4 border-[#1A202C] rounded-[2.5rem] p-5 sm:p-8 shadow-md text-white space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-300">
              Interactive Velcro Board Strip
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              id="strip-first-then-btn"
              type="button"
              onClick={populateFirstThenPreset}
              className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-full text-xs font-bold transition-colors"
            >
              First ➜ Then Mode
            </button>
            <button
              id="strip-all-steps-btn"
              type="button"
              onClick={populateAllLessonSteps}
              className="px-3 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-bold transition-colors"
            >
              All Lesson Cards ({lessonPecCards.length})
            </button>
            {stripCards.length > 0 && (
              <button
                id="strip-clear-btn"
                type="button"
                onClick={handleClearStrip}
                className="px-3 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 rounded-full text-xs font-bold transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Strip</span>
              </button>
            )}
          </div>
        </div>

        {/* The Strip Cards Container */}
        <div className="min-h-[120px] bg-[#1A202C] rounded-2xl p-4 flex items-center gap-3 overflow-x-auto border-2 border-dashed border-slate-600 scrollbar-none">
          {stripCards.length === 0 ? (
            <div className="w-full text-center py-6 text-slate-400 text-xs sm:text-sm font-medium">
              ✨ Tap any PEC card below to place it onto this schedule strip!
            </div>
          ) : (
            stripCards.map((card, idx) => {
              const isDone = stripCompleted[idx];
              return (
                <div
                  key={`${card.id}-${idx}`}
                  className={`relative shrink-0 w-28 sm:w-32 h-32 sm:h-36 rounded-2xl p-2.5 flex flex-col justify-between items-center text-center transition-all bg-white text-slate-900 shadow-sm border-2 ${
                    isDone ? 'opacity-50 grayscale border-slate-300' : 'border-amber-400 scale-100'
                  }`}
                >
                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => handleRemoveFromStrip(idx)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs shadow-sm hover:bg-rose-600 transition-colors"
                    title="Remove from strip"
                  >
                    ×
                  </button>

                  <div
                    onClick={() => handleToggleDone(idx)}
                    className="cursor-pointer w-full flex flex-col items-center h-full justify-between"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 mt-1">
                      <DynamicIcon name={card.iconName} className="w-5 h-5 text-slate-800" />
                    </div>

                    <div className="space-y-0.5 my-auto">
                      <div className="font-extrabold text-2xs sm:text-xs text-slate-900 line-clamp-2 leading-tight">
                        {card.label}
                      </div>
                      {card.arabic && (
                        <div className="text-3xs font-bold font-arabic text-emerald-800 truncate max-w-[100px]">
                          {card.arabic}
                        </div>
                      )}
                    </div>

                    {/* Done Toggle Pill */}
                    <div
                      className={`w-full py-0.5 rounded-lg text-3xs font-extrabold flex items-center justify-center gap-1 ${
                        isDone ? 'bg-slate-200 text-slate-700' : 'bg-[#E8F1E7] text-[#4A6349]'
                      }`}
                    >
                      {isDone ? <span>Done ✓</span> : <span>Tap when done</span>}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Speak Strip Action */}
        {stripCards.length > 0 && (
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-400">
              {Object.keys(stripCompleted).length} of {stripCards.length} tasks completed
            </span>

            <button
              id="read-strip-aloud-btn"
              type="button"
              onClick={handleSpeakStrip}
              className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-sm flex items-center gap-2 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>Read Strip Aloud</span>
            </button>
          </div>
        )}
      </div>

      {/* PECS CARDS REPOSITORY / PICKER */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
              Available PEC Cards
            </span>
            <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
              {displayedPecs.length}
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCategoryFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
              }`}
            >
              All ({allAvailablePecs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('lesson')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCategoryFilter === 'lesson'
                  ? 'bg-[#7B9A7A] text-white'
                  : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
              }`}
            >
              Lesson Steps ({lessonPecCards.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('faith')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCategoryFilter === 'faith'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
              }`}
            >
              Faith & Praise
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('interest')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCategoryFilter === 'interest'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
              }`}
            >
              Character Badges
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('communication')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCategoryFilter === 'communication'
                  ? 'bg-[#5C7CFA] text-white'
                  : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
              }`}
            >
              Communication & Routine
            </button>
          </div>
        </div>

        {/* PEC Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {displayedPecs.map((pec) => (
            <div
              key={pec.id}
              onClick={() => handleAddToStrip(pec)}
              className="group cursor-pointer bg-white/90 hover:bg-white border-2 border-slate-200 hover:border-[#7B9A7A] rounded-2xl p-3.5 flex flex-col justify-between items-center text-center shadow-2xs hover:shadow-md transition-all relative"
            >
              {/* Quick Audio Preview Button */}
              <button
                type="button"
                onClick={(e) => handleSpeakCard(pec, e)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-[#E8F1E7] text-slate-600 hover:text-[#4A6349] flex items-center justify-center text-2xs transition-colors"
                title="Listen to card audio"
              >
                <Volume2 className="w-3 h-3" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center my-2 group-hover:scale-105 transition-transform">
                <DynamicIcon name={pec.iconName} className="w-6 h-6 text-slate-800" />
              </div>

              <div className="space-y-0.5 w-full mt-1">
                <div className="font-extrabold text-xs text-slate-900 leading-tight">
                  {pec.label}
                </div>
                {pec.arabic && (
                  <div className="text-2xs font-bold font-arabic text-emerald-800 truncate">
                    {pec.arabic}
                  </div>
                )}
                {pec.sublabel && (
                  <div className="text-3xs text-slate-500 line-clamp-2">{pec.sublabel}</div>
                )}
              </div>

              <div className="w-full mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-center gap-1 text-3xs font-extrabold text-[#4A6349] opacity-80 group-hover:opacity-100">
                <Plus className="w-3 h-3" />
                <span>Add to Strip</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
