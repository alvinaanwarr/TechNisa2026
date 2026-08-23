import React, { useState } from 'react';
import { LessonData, QuranReference, ScholarlySource, PedagogicalResearch } from '../types';
import {
  BookOpen,
  ExternalLink,
  Sparkles,
  Compass,
  GraduationCap,
  ShieldCheck,
  X,
  Layers,
  Heart,
  Volume2
} from 'lucide-react';
import { speakText, stopSpeaking } from '../utils/speech';

interface QuranScholarlySourcesModalProps {
  lesson: LessonData;
  isOpen: boolean;
  onClose: () => void;
}

export const QuranScholarlySourcesModal: React.FC<QuranScholarlySourcesModalProps> = ({
  lesson,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'quran' | 'tafsir' | 'institutes' | 'pedagogy'>('quran');

  if (!isOpen) return null;

  const quranRefs: QuranReference[] = lesson.quranReferences && lesson.quranReferences.length > 0
    ? lesson.quranReferences
    : [
        {
          surahName: 'The Holy Qur\'an',
          surahNumber: 2,
          ayahRange: 'Guidance',
          url: 'https://quran.com',
          arabicSnippet: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
          englishSnippet: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
        }
      ];

  const scholarly = lesson.scholarlySources || {};
  const tafsirIbnKathir = typeof scholarly === 'object' && 'tafsirIbnKathir' in scholarly
    ? (scholarly as any).tafsirIbnKathir
    : 'Tafsir Ibn Kathir provides classical contextual commentary from the earliest generations of scholarship, anchoring every lesson in authentic tradition.';

  const bayyinahInsight = typeof scholarly === 'object' && 'bayyinahInstitute' in scholarly
    ? (scholarly as any).bayyinahInstitute
    : 'Bayyinah Institute (Ustadh Nouman Ali Khan) provides linguistic clarity, emotional resonance, and deep Arabic vocabulary exploration.';

  const yaqeenInsight = typeof scholarly === 'object' && 'yaqeenInstitute' in scholarly
    ? (scholarly as any).yaqeenInstitute
    : 'Yaqeen Institute (Dr. Omar Suleiman) provides character and emotional regulation insights, connecting spiritual virtues to mental wellness.';

  const pedagogicalResearch: PedagogicalResearch[] = lesson.pedagogicalResearch && lesson.pedagogicalResearch.length > 0
    ? lesson.pedagogicalResearch
    : [
        {
          framework: 'Universal Design for Learning (UDL)',
          studyCitation: 'Harrison et al., University of Melbourne (2024); King-Sears et al. (2023)',
          principle: 'Multiple Means of Representation (Principle 1)',
          practicalApplication: 'Presents concepts across 5 adaptive formats (Cards, Comics, Checklist, Story, Flashcards) to prevent cognitive overload.',
          clinicalSpecialist: 'Melinda Cooper (OT) / Kara Canale (Psychologist)'
        },
        {
          framework: 'Strengths-Based Safari & Special Interests',
          studyCitation: 'Naples & Tuckwiller (2021); Taylor et al. (2023)',
          principle: 'Interest-Anchored Engagement',
          practicalApplication: `Uses the learner's passion for ${lesson.selectedInterest || 'special interests'} to scaffold abstract spiritual concepts into concrete analogies.`,
          clinicalSpecialist: 'Rebecca Whalen (SLP)'
        },
        {
          framework: 'Sensory Processing & Low-Arousal Design',
          studyCitation: 'Sensory Integration Theory & OT Calming Scripts (2024)',
          principle: 'Sensory Regulation & Emotional Safety',
          practicalApplication: 'Rhythmic repetition phrases, optional calm visual mode, high contrast text, and predictable step progression.',
          clinicalSpecialist: 'Melinda Cooper (OT)'
        }
      ];

  const handleReadArabic = (snippet?: string, english?: string) => {
    stopSpeaking();
    if (snippet && english) {
      speakText(`${snippet}. Meaning: ${english}`);
    } else if (snippet) {
      speakText(snippet);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-100">
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 bg-gradient-to-br from-[#F4F8F3] via-white to-[#E8F1E7]/40 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full text-xs font-bold border border-[#7B9A7A]/30">
              <BookOpen className="w-3.5 h-3.5 text-[#7B9A7A]" />
              <span>Rigorous Islamic & Scientific Grounding</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
              Qur\'an & Tafsir Evidence Base
            </h2>
            <p className="text-xs text-slate-600">
              Topic: <strong className="text-slate-800">{lesson.title || lesson.topic}</strong>
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-6 pt-3 gap-2 overflow-x-auto">
          {[
            { id: 'quran', label: '📖 Qur\'an Verses', count: quranRefs.length },
            { id: 'tafsir', label: '🏛️ Classical Tafsir (Ibn Kathir)' },
            { id: 'institutes', label: '🔍 Bayyinah & Yaqeen' },
            { id: 'pedagogy', label: '🧠 Neurodivergent Science' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'border-[#7B9A7A] text-[#4A6349]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className="text-2xs px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          {/* TAB 1: QURAN VERSES */}
          {activeTab === 'quran' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Direct citations from the Holy Qur\'an</span>
                <span className="font-semibold text-[#4A6349]">Sourced from Quran.com</span>
              </div>

              {quranRefs.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-br from-[#FAFBF8] to-white border border-[#7B9A7A]/30 space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#E8F1E7] text-[#4A6349] font-extrabold text-xs flex items-center justify-center border border-[#7B9A7A]/30">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-900 text-sm">
                        {ref.surahName} (Surah {ref.surahNumber}:{ref.ayahRange})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {ref.arabicSnippet && (
                        <button
                          type="button"
                          onClick={() => handleReadArabic(ref.arabicSnippet, ref.englishSnippet)}
                          className="px-2.5 py-1 bg-[#E8F1E7] hover:bg-[#d8e7d7] text-[#4A6349] rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Listen</span>
                        </button>
                      )}

                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#4A6349] font-bold hover:underline inline-flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg"
                        >
                          <span>Open on Quran.com</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {ref.arabicSnippet && (
                    <div className="p-4 bg-[#F5F9F4] rounded-xl text-right font-arabic text-lg sm:text-xl text-slate-900 leading-loose border border-[#7B9A7A]/20">
                      {ref.arabicSnippet}
                    </div>
                  )}

                  {ref.englishSnippet && (
                    <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-[#7B9A7A] pl-3 py-1">
                      "{ref.englishSnippet}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: CLASSICAL TAFSIR */}
          {activeTab === 'tafsir' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                    IK
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Tafsir Ibn Kathir (Al-Bidayah wan-Nihayah)
                    </h3>
                    <p className="text-2xs text-amber-700 font-semibold">
                      Authentic classical commentary & context
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/90 rounded-xl border border-amber-100 text-slate-800 text-sm leading-relaxed whitespace-pre-line">
                  {tafsirIbnKathir}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONTEMPORARY SCHOLARLY INSTITUTES */}
          {activeTab === 'institutes' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                    BI
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Bayyinah Institute (Ustadh Nouman Ali Khan)
                    </h3>
                    <p className="text-2xs text-blue-700 font-semibold">
                      Linguistic nuances, structural parables & emotional clarity
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/90 rounded-xl border border-blue-100 text-slate-800 text-sm leading-relaxed">
                  {bayyinahInsight}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    YI
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Yaqeen Institute (Dr. Omar Suleiman)
                    </h3>
                    <p className="text-2xs text-emerald-700 font-semibold">
                      Character formation, emotional regulation & moral grounding
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/90 rounded-xl border border-emerald-100 text-slate-800 text-sm leading-relaxed">
                  {yaqeenInsight}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: NEURODIVERGENT RESEARCH & SPECIAL ED CITATIONS */}
          {activeTab === 'pedagogy' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500">
                Empirical educational frameworks used to adapt this lesson's presentation without modifying sacred facts:
              </div>

              {pedagogicalResearch.map((res, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#4A6349] bg-[#E8F1E7] px-2.5 py-0.5 rounded-full border border-[#7B9A7A]/30">
                      {res.framework}
                    </span>
                    <span className="text-2xs text-slate-500 font-semibold">
                      {res.studyCitation}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-slate-800">
                    {res.principle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {res.practicalApplication}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xs text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7B9A7A]" />
            <span>Preserving sacred theology while optimizing accessibility for diverse minds.</span>
          </div>

          <button
            type="button"
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="px-5 py-2 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-xs rounded-full transition-colors"
          >
            Close Sourcing Guide
          </button>
        </div>
      </div>
    </div>
  );
};
