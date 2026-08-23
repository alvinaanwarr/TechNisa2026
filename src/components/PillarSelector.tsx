import React from 'react';
import { Heart, Compass, Moon, HeartHandshake, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { LessonData } from '../types';
import {
  PILLAR_1_SADAQAH_LESSON,
  PILLAR_2_SALAH_LESSON,
  PILLAR_3_SIYAM_LESSON,
  PILLAR_4_ZAKAT_LESSON,
  PILLAR_5_HAJJ_LESSON,
  FIVE_PILLARS_LESSON
} from '../data/presetLessons';

interface PillarSelectorProps {
  currentLessonId?: string;
  onSelectLesson: (lesson: LessonData) => void;
  className?: string;
  isCalmMode?: boolean;
}

interface PillarItem {
  number: number;
  name: string;
  arabicName: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  activeColor: string;
  lesson: LessonData;
}

export const PILLARS_LIST: PillarItem[] = [
  {
    number: 1,
    name: 'Sadaqah & Shahadah',
    arabicName: 'الشَّهَادَة وَالصَّدَقَة',
    subtext: 'Fitrah Compass, Faith & Daily Kind Deeds',
    icon: Heart,
    color: 'hover:border-rose-300 hover:bg-rose-50/60',
    activeColor: 'bg-rose-50 border-rose-500 ring-2 ring-rose-500/20 text-rose-950',
    lesson: PILLAR_1_SADAQAH_LESSON
  },
  {
    number: 2,
    name: 'Salah & Al-Fatihah',
    arabicName: 'الصَّلَاة وَالفَاتِحَة',
    subtext: 'Suratul Fatiha Breakdown & Prayer Steps',
    icon: Compass,
    color: 'hover:border-emerald-300 hover:bg-emerald-50/60',
    activeColor: 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 text-emerald-950',
    lesson: PILLAR_2_SALAH_LESSON
  },
  {
    number: 3,
    name: 'Siyam (Fasting)',
    arabicName: 'الصِّيَام',
    subtext: 'Ramadan Routine, Suhoor & Sweet Iftar',
    icon: Moon,
    color: 'hover:border-indigo-300 hover:bg-indigo-50/60',
    activeColor: 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20 text-indigo-950',
    lesson: PILLAR_3_SIYAM_LESSON
  },
  {
    number: 4,
    name: 'Zakat (Giving)',
    arabicName: 'الزَّكَاة',
    subtext: '2.5% Sharing, Care Packages & Fairness',
    icon: HeartHandshake,
    color: 'hover:border-amber-300 hover:bg-amber-50/60',
    activeColor: 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 text-amber-950',
    lesson: PILLAR_4_ZAKAT_LESSON
  },
  {
    number: 5,
    name: 'Hajj (Pilgrimage)',
    arabicName: 'الحَجّ',
    subtext: 'Ka’bah Tawaf, White Ihram & Eid Sheep',
    icon: Sparkles,
    color: 'hover:border-teal-300 hover:bg-teal-50/60',
    activeColor: 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 text-teal-950',
    lesson: PILLAR_5_HAJJ_LESSON
  }
];

export const PillarSelector: React.FC<PillarSelectorProps> = ({
  currentLessonId,
  onSelectLesson,
  className = '',
  isCalmMode = false
}) => {
  const isAllOverview = currentLessonId === FIVE_PILLARS_LESSON.id;

  return (
    <section
      id="five-pillars-navigation-hub"
      aria-label="The 5 Pillars of Islam (Arkān ul-Islām) Navigation"
      className={`bg-white rounded-3xl p-5 sm:p-6 shadow-sm space-y-4 transition-colors ${
        isCalmMode ? 'border border-[#99AFD7]/40' : 'border border-[#93c5fd]/50'
      } ${className}`}
    >
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${
        isCalmMode ? 'border-[#99AFD7]/30' : 'border-[#93c5fd]/30'
      }`}>
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold ${
              isCalmMode ? 'bg-[#E8EEF8] text-[#344D76]' : 'bg-[#bae6fd] text-[#1e3a8a]'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-base font-bold ${isCalmMode ? 'text-slate-800' : 'text-[#1e3a8a]'}`}>
                The 5 Pillars of Islam (Arkān ul-Islām)
              </h3>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                  isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/40'
                    : 'bg-[#bfdbfe] text-[#1e3a8a] border-[#7dd3fc]'
                }`}
              >
                5 Distinct Lessons
              </span>
            </div>
            <p className={`text-xs ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/70'}`}>
              5 sacred pillars holding up our Deen: Sadaqah, Salah, Siyam, Zakat, and Hajj.
            </p>
          </div>
        </div>

        <button
          type="button"
          id="select-master-overview-btn"
          onClick={() => onSelectLesson(FIVE_PILLARS_LESSON)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
            isAllOverview
              ? isCalmMode
                ? 'bg-[#344D76] text-white border-[#344D76] shadow-xs'
                : 'bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-xs'
              : isCalmMode
                ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/50 hover:bg-[#DCE5F4]'
                : 'bg-[#bae6fd]/30 text-[#1e3a8a] border-[#93c5fd] hover:bg-[#bae6fd]/60'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full Master Curriculum</span>
        </button>
      </div>

      {/* Grid of 5 Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {PILLARS_LIST.map((pillar) => {
          const Icon = pillar.icon;
          const isSelected = currentLessonId === pillar.lesson.id;

          return (
            <button
              key={pillar.number}
              type="button"
              id={`pillar-btn-${pillar.number}`}
              onClick={() => onSelectLesson(pillar.lesson)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between group shadow-2xs hover:shadow-xs ${
                isSelected
                  ? isCalmMode
                    ? 'bg-[#E0E7F5] border-[#344D76] ring-2 ring-[#99AFD7]/50 text-[#344D76]'
                    : 'bg-[#bfdbfe] border-[#1e3a8a] ring-2 ring-[#60a5fa]/40 text-[#1e3a8a]'
                  : isCalmMode
                    ? 'bg-white/80 border-[#99AFD7]/40 hover:border-[#869EC9] hover:bg-[#F2F6FC] text-slate-800'
                    : 'bg-white/80 border-[#93c5fd]/50 hover:border-[#60a5fa] hover:bg-[#bae6fd]/30 text-[#1e3a8a]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span
                    className={`w-6 h-6 rounded-full bg-white shadow-2xs border text-xs font-extrabold flex items-center justify-center ${
                      isCalmMode
                        ? 'border-[#99AFD7]/50 text-[#344D76]'
                        : 'border-[#93c5fd] text-[#1e3a8a]'
                    }`}
                  >
                    {pillar.number}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className={`text-2xs font-semibold ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/70'}`} dir="rtl">
                      {pillar.arabicName}
                    </span>
                    {isSelected && (
                      <span
                        className={`w-4 h-4 rounded-full text-white flex items-center justify-center ${
                          isCalmMode ? 'bg-[#344D76]' : 'bg-[#1e3a8a]'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`w-4 h-4 shrink-0 group-hover:scale-110 transition-transform ${isCalmMode ? 'text-[#5D7CAE]' : 'text-[#1e3a8a]'}`} />
                  <span className={`font-bold text-sm line-clamp-1 ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
                    {pillar.name}
                  </span>
                </div>

                <p className={`text-2xs line-clamp-2 leading-tight ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'}`}>
                  {pillar.subtext}
                </p>
              </div>

              <div className={`mt-2 pt-2 border-t flex items-center justify-between text-2xs font-bold ${
                isCalmMode ? 'border-[#99AFD7]/20 text-slate-500' : 'border-[#93c5fd]/30 text-[#1e3a8a]/70'
              }`}>
                <span>{pillar.lesson.lessonSteps.length} Steps</span>
                <span className={
                  isSelected
                    ? isCalmMode ? 'text-[#344D76] font-extrabold' : 'text-[#1e3a8a] font-extrabold'
                    : isCalmMode ? 'text-slate-400 group-hover:text-slate-700' : 'text-[#1e3a8a]/50 group-hover:text-[#1e3a8a]'
                }>
                  {isSelected ? '● Active' : 'Start Lesson →'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
