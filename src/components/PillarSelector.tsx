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
  className = ''
}) => {
  const isAllOverview = currentLessonId === FIVE_PILLARS_LESSON.id;

  return (
    <section
      id="five-pillars-navigation-hub"
      aria-label="The 5 Pillars of Islam (Arkān ul-Islām) Navigation"
      className={`bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-stone-200/90 space-y-4 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-[#7B9A7A]/15 text-[#7B9A7A] flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-stone-900">
                The 5 Pillars of Islam (Arkān ul-Islām)
              </h3>
              <span className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-full text-xs font-semibold">
                5 Distinct Lessons
              </span>
            </div>
            <p className="text-xs text-stone-500">
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
              ? 'bg-[#7B9A7A] text-white border-[#7B9A7A] shadow-xs'
              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
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
              className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between group ${
                isSelected
                  ? pillar.activeColor
                  : `bg-stone-50/70 border-stone-200/80 ${pillar.color}`
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-white/90 shadow-2xs border border-stone-200 text-xs font-extrabold flex items-center justify-center text-stone-700">
                    {pillar.number}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-2xs font-semibold text-stone-500" dir="rtl">
                      {pillar.arabicName}
                    </span>
                    {isSelected && (
                      <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-4 h-4 text-stone-700 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-sm text-stone-900 line-clamp-1">
                    {pillar.name}
                  </span>
                </div>

                <p className="text-2xs text-stone-600 line-clamp-2 leading-tight">
                  {pillar.subtext}
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-stone-200/60 flex items-center justify-between text-2xs font-bold text-stone-500">
                <span>{pillar.lesson.lessonSteps.length} Steps</span>
                <span className={isSelected ? 'text-emerald-700 font-extrabold' : 'text-stone-400 group-hover:text-stone-700'}>
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
