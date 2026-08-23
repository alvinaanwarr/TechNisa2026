import React from 'react';
import { Sparkles, ArrowRightLeft, Shield, Moon, Eye, BookOpen, Heart, Compass, HeartHandshake } from 'lucide-react';
import { LessonData } from '../types';
import {
  HACKATHON_DEMO_LEARNER_1,
  HACKATHON_DEMO_LEARNER_2,
  FIVE_PILLARS_LESSON,
  PILLAR_1_SADAQAH_LESSON,
  PILLAR_2_SALAH_LESSON,
  PILLAR_3_SIYAM_LESSON,
  PILLAR_4_ZAKAT_LESSON,
  PILLAR_5_HAJJ_LESSON
} from '../data/presetLessons';

interface HackathonDemoBarProps {
  currentLessonId?: string;
  onSelectDemoLesson: (lesson: LessonData) => void;
  className?: string;
}

export const HackathonDemoBar: React.FC<HackathonDemoBarProps> = ({
  currentLessonId,
  onSelectDemoLesson,
  className = ''
}) => {
  const isLearner1 = currentLessonId === HACKATHON_DEMO_LEARNER_1.id;
  const isLearner2 = currentLessonId === HACKATHON_DEMO_LEARNER_2.id;
  const isFivePillars = currentLessonId === FIVE_PILLARS_LESSON.id;
  const isPillar1 = currentLessonId === PILLAR_1_SADAQAH_LESSON.id;
  const isPillar2 = currentLessonId === PILLAR_2_SALAH_LESSON.id;
  const isPillar3 = currentLessonId === PILLAR_3_SIYAM_LESSON.id;
  const isPillar4 = currentLessonId === PILLAR_4_ZAKAT_LESSON.id;
  const isPillar5 = currentLessonId === PILLAR_5_HAJJ_LESSON.id;

  const currentLessonName = isPillar1
    ? 'Pillar 1: Sadaqah & Shahadah'
    : isPillar2
    ? 'Pillar 2: Salah & Suratul Fatiha'
    : isPillar3
    ? 'Pillar 3: Siyam (Ramadan)'
    : isPillar4
    ? 'Pillar 4: Zakat (Giving)'
    : isPillar5
    ? 'Pillar 5: Hajj (Pilgrimage)'
    : isFivePillars
    ? '5 Pillars Master Overview'
    : isLearner1
    ? 'Superhero Wudu (Learner 1)'
    : isLearner2
    ? 'Astronaut Wudu (Learner 2)'
    : 'Custom Islamic Lesson';

  return (
    <div
      id="hackathon-demo-scenario-bar"
      className={`bg-slate-900/90 backdrop-blur-md text-slate-100 rounded-[2rem] p-5 sm:p-7 shadow-lg border border-slate-800/80 space-y-4 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-extrabold rounded-full uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Curriculum Presets & Live Demos
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-300">
            Selected: <strong className="text-white">{currentLessonName}</strong>
          </span>
        </div>

        <div className="text-xs font-bold text-[#A3C4A2]">
          “Same lesson. Different learner. Different experience.”
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Learner 1 Demo Card */}
        <div
          onClick={() => onSelectDemoLesson(HACKATHON_DEMO_LEARNER_1)}
          className={`cursor-pointer rounded-2xl p-4 transition-all border-2 text-left flex flex-col justify-between ${
            isLearner1
              ? 'bg-slate-800/90 border-[#7B9A7A] ring-2 ring-[#7B9A7A]/30 shadow-md'
              : 'bg-slate-800/50 backdrop-blur-xs border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/80'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#E8F1E7] bg-[#7B9A7A]/40 px-3 py-1 rounded-full border border-[#7B9A7A]/50">
                <Shield className="w-3.5 h-3.5 text-[#A3C4A2]" />
                Learner 1 (Age 6)
              </span>
              <span className="text-2xs font-bold uppercase text-slate-400">
                Visual Mode
              </span>
            </div>

            <div className="text-sm sm:text-base font-bold text-white line-clamp-1">
              Superhero Wudu Power Steps
            </div>

            <p className="text-xs text-slate-300">
              Preferences: <span className="text-[#D4E5D3]">Visual</span> • <span className="text-[#D4E5D3]">One Step</span>
            </p>
            <p className="text-xs text-slate-400">
              Interest: 🦸 <strong>Superheroes</strong>
            </p>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold">
            <span className={isLearner1 ? 'text-[#A3C4A2] font-bold' : 'text-slate-400'}>
              {isLearner1 ? '● Active in Demo' : 'Load Learner 1'}
            </span>
            <Eye className="w-4 h-4 text-[#A3C4A2]" />
          </div>
        </div>

        {/* Learner 2 Demo Card */}
        <div
          onClick={() => onSelectDemoLesson(HACKATHON_DEMO_LEARNER_2)}
          className={`cursor-pointer rounded-2xl p-4 transition-all border-2 text-left flex flex-col justify-between ${
            isLearner2
              ? 'bg-slate-800/90 border-[#5C7CFA] ring-2 ring-[#5C7CFA]/30 shadow-md'
              : 'bg-slate-800/50 backdrop-blur-xs border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/80'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#F0F4FF] bg-[#5C7CFA]/40 px-3 py-1 rounded-full border border-[#5C7CFA]/50">
                <Moon className="w-3.5 h-3.5 text-[#5C7CFA]" />
                Learner 2 (Age 8)
              </span>
              <span className="text-2xs font-bold uppercase text-slate-400">
                Story Mode (Calm)
              </span>
            </div>

            <div className="text-sm sm:text-base font-bold text-white line-clamp-1">
              Astronaut Zayd Space Wudu
            </div>

            <p className="text-xs text-slate-300">
              Preferences: <span className="text-[#C7D7FE]">Story</span> • <span className="text-[#C7D7FE]">Low Stim</span>
            </p>
            <p className="text-xs text-slate-400">
              Interest: 🚀 <strong>Space & Astronomy</strong>
            </p>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold">
            <span className={isLearner2 ? 'text-[#8FA8FF] font-bold' : 'text-slate-400'}>
              {isLearner2 ? '● Active in Demo' : 'Load Learner 2'}
            </span>
            <BookOpen className="w-4 h-4 text-[#8FA8FF]" />
          </div>
        </div>

        {/* 5 Pillars Master Lesson Card */}
        <div
          onClick={() => onSelectDemoLesson(FIVE_PILLARS_LESSON)}
          className={`cursor-pointer rounded-2xl p-4 transition-all border-2 text-left flex flex-col justify-between ${
            isFivePillars
              ? 'bg-slate-800/90 border-emerald-500 ring-2 ring-emerald-500/30 shadow-md'
              : 'bg-slate-800/50 backdrop-blur-xs border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/80'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-100 bg-emerald-700/50 px-3 py-1 rounded-full border border-emerald-500/50">
                <Heart className="w-3.5 h-3.5 text-emerald-300" />
                Master Curriculum
              </span>
              <span className="text-2xs font-bold uppercase text-slate-400">
                Arkān ul-Islām
              </span>
            </div>

            <div className="text-sm sm:text-base font-bold text-white line-clamp-1">
              The 5 Pillars of Islam Master
            </div>

            <p className="text-xs text-slate-300">
              Complete: <span className="text-emerald-300">Sadaqah</span> • <span className="text-emerald-300">Salah</span> • <span className="text-emerald-300">Siyam</span> • <span className="text-emerald-300">Zakat</span> • <span className="text-emerald-300">Hajj</span>
            </p>
            <p className="text-xs text-slate-400">
              Includes: 🕋 <strong>PECS, Arabic, Fatiha & Tafsir</strong>
            </p>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold">
            <span className={isFivePillars ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
              {isFivePillars ? '● Active Master Lesson' : 'Load 5 Pillars Overview'}
            </span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      </div>

      {/* 5 Distinct Pillars Quick Launch Strip */}
      <div className="pt-2 border-t border-slate-800">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            Launch 5 Distinct Pillar Lessons:
          </span>
          <span className="text-2xs text-slate-400">
            Sadaqah → Salah & Fatiha → Siyam → Zakat → Hajj
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          <button
            type="button"
            onClick={() => onSelectDemoLesson(PILLAR_1_SADAQAH_LESSON)}
            className={`p-2 rounded-xl text-left border transition-all text-xs flex items-center gap-2 ${
              isPillar1
                ? 'bg-rose-900/60 border-rose-400 text-white shadow-xs'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold truncate">1. Sadaqah</div>
              <div className="text-2xs text-slate-400 truncate">Faith & Smiles</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectDemoLesson(PILLAR_2_SALAH_LESSON)}
            className={`p-2 rounded-xl text-left border transition-all text-xs flex items-center gap-2 ${
              isPillar2
                ? 'bg-emerald-900/60 border-emerald-400 text-white shadow-xs'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold truncate">2. Salah & Fatiha</div>
              <div className="text-2xs text-slate-400 truncate">Verse-by-Verse</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectDemoLesson(PILLAR_3_SIYAM_LESSON)}
            className={`p-2 rounded-xl text-left border transition-all text-xs flex items-center gap-2 ${
              isPillar3
                ? 'bg-indigo-900/60 border-indigo-400 text-white shadow-xs'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold truncate">3. Siyam</div>
              <div className="text-2xs text-slate-400 truncate">Ramadan Fasting</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectDemoLesson(PILLAR_4_ZAKAT_LESSON)}
            className={`p-2 rounded-xl text-left border transition-all text-xs flex items-center gap-2 ${
              isPillar4
                ? 'bg-amber-900/60 border-amber-400 text-white shadow-xs'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold truncate">4. Zakat</div>
              <div className="text-2xs text-slate-400 truncate">2.5% Sharing</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectDemoLesson(PILLAR_5_HAJJ_LESSON)}
            className={`p-2 rounded-xl text-left border transition-all text-xs flex items-center gap-2 col-span-2 sm:col-span-1 ${
              isPillar5
                ? 'bg-teal-900/60 border-teal-400 text-white shadow-xs'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold truncate">5. Hajj</div>
              <div className="text-2xs text-slate-400 truncate">Ka'bah Pilgrimage</div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-2xs text-slate-400">
        <span>Click any preset to explore differentiated Islamic education modes.</span>
        <button
          id="toggle-between-learners-btn"
          type="button"
          onClick={() => {
            if (isLearner1) {
              onSelectDemoLesson(HACKATHON_DEMO_LEARNER_2);
            } else if (isLearner2) {
              onSelectDemoLesson(PILLAR_1_SADAQAH_LESSON);
            } else if (isPillar1) {
              onSelectDemoLesson(PILLAR_2_SALAH_LESSON);
            } else if (isPillar2) {
              onSelectDemoLesson(PILLAR_3_SIYAM_LESSON);
            } else if (isPillar3) {
              onSelectDemoLesson(PILLAR_4_ZAKAT_LESSON);
            } else if (isPillar4) {
              onSelectDemoLesson(PILLAR_5_HAJJ_LESSON);
            } else if (isPillar5) {
              onSelectDemoLesson(FIVE_PILLARS_LESSON);
            } else {
              onSelectDemoLesson(HACKATHON_DEMO_LEARNER_1);
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xs transition-colors border border-slate-700 shadow-2xs"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>Cycle All Lessons</span>
        </button>
      </div>
    </div>
  );
};


