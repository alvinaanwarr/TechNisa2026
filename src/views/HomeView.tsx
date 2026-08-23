import React from 'react';
import { TOPIC_PRESETS, HACKATHON_DEMO_LEARNER_1, HACKATHON_DEMO_LEARNER_2 } from '../data/presetLessons';
import { LessonData } from '../types';
import { PillarSelector } from '../components/PillarSelector';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Eye,
  CheckSquare,
  MessageSquare,
  Users,
  Heart
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onSelectPresetTopic: (topicTitle: string) => void;
  onLoadDemoLesson: (lesson: LessonData) => void;
  currentLessonId?: string;
  isCalmMode?: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectPresetTopic,
  onLoadDemoLesson,
  currentLessonId,
  isCalmMode = false
}) => {
  return (
    <div id="home-view-container" className="space-y-14 max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-5 max-w-3xl mx-auto pt-4">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
            isCalmMode
              ? 'bg-[#E8EEF8] border border-[#99AFD7]/40 text-[#344D76]'
              : 'bg-[#bae6fd] border border-[#7dd3fc] text-[#1e3a8a]'
          }`}
        >
          <Sparkles className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#344D76]' : 'text-[#1e3a8a]'}`} />
          <span>Sensory-Friendly Islamic Learning</span>
        </div>

        <h1
          className={`text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight ${
            isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'
          }`}
        >
          Adaptive Islamic Learning for Every Child
        </h1>

        <p
          className={`text-base sm:text-lg max-w-xl mx-auto leading-relaxed ${
            isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/80'
          }`}
        >
          Transform any Islamic lesson into visual step cards, soothing interactive stories, and checklists tailored to your learner's pace and sensory needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            id="hero-create-lesson-btn"
            type="button"
            onClick={() => onNavigate('create')}
            className={`px-7 py-3.5 font-bold text-sm sm:text-base rounded-2xl shadow-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-white ${
              isCalmMode
                ? 'bg-[#344D76] hover:bg-[#24334A]'
                : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
            }`}
          >
            <span>Create a Lesson</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-demo-lesson-btn"
            type="button"
            onClick={() => {
              onLoadDemoLesson(HACKATHON_DEMO_LEARNER_1);
              onNavigate('lesson');
            }}
            className={`px-6 py-3.5 font-bold text-sm sm:text-base rounded-2xl border shadow-2xs transition-colors ${
              isCalmMode
                ? 'bg-white hover:bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/50'
                : 'bg-white hover:bg-[#bae6fd]/40 text-[#1e3a8a] border-[#93c5fd]'
            }`}
          >
            Try Demo Lesson
          </button>
        </div>
      </section>

      {/* The 5 Pillars of Islam Dedicated Navigation Hub */}
      <PillarSelector
        currentLessonId={currentLessonId}
        isCalmMode={isCalmMode}
        onSelectLesson={(lesson) => {
          onLoadDemoLesson(lesson);
          onNavigate('lesson');
        }}
      />

      {/* Neurodivergent Daily Routine & Sensory Support Hub */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className={`text-xl sm:text-2xl font-bold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
              Daily Engagement & Sensory Tools
            </h2>
            <p className={`text-xs sm:text-sm ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/70'}`}>
              Built specifically for sensory-sensitive and neurodivergent Muslim learners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Good Deeds */}
          <div
            id="home-card-gooddeeds"
            onClick={() => onNavigate('gooddeeds')}
            className={`cursor-pointer rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all space-y-3 border group ${
              isCalmMode
                ? 'bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border-emerald-200/70 hover:border-emerald-400'
                : 'bg-gradient-to-br from-emerald-100/50 via-white to-emerald-50/40 border-emerald-300/70 hover:border-emerald-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-3xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Daily Tracker
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800">
                My Good Deeds Today
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Log kind acts, helping parents, smiling, and praying with visual tags and reward stars.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-900 gap-1">
              <span>Open Deeds Journal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Sensory Prep */}
          <div
            id="home-card-sensory"
            onClick={() => onNavigate('sensory')}
            className={`cursor-pointer rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all space-y-3 border group ${
              isCalmMode
                ? 'bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 border-blue-200/70 hover:border-blue-400'
                : 'bg-gradient-to-br from-sky-100/50 via-white to-blue-50/40 border-sky-300/70 hover:border-sky-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-3xs font-extrabold bg-blue-100 text-blue-800 border border-blue-200">
                Social Stories
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-800">
                Sensory Prep & What to Expect
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Clear expectations for water temperature, loud masjid acoustics, crowds, and heat.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-blue-700 group-hover:text-blue-900 gap-1">
              <span>View Social Prep Stories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Favourites & Progress */}
          <div
            id="home-card-favorites"
            onClick={() => onNavigate('favorites')}
            className={`cursor-pointer rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all space-y-3 border group ${
              isCalmMode
                ? 'bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 border-purple-200/70 hover:border-purple-400'
                : 'bg-gradient-to-br from-purple-100/50 via-white to-purple-50/40 border-purple-300/70 hover:border-purple-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-3xs font-extrabold bg-purple-100 text-purple-800 border border-purple-200">
                Saved & Badges
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-800">
                Favourites & Progress
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Access your bookmarked PEC cards, favorite micro-stories, and earned badges.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-purple-700 group-hover:text-purple-900 gap-1">
              <span>View Progress</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Complete 25 Prophets Series Spotlight */}
      <section
        className={`rounded-[2.5rem] p-6 sm:p-8 shadow-xs space-y-6 border ${
          isCalmMode
            ? 'bg-gradient-to-br from-[#E8EEF8]/60 via-white to-[#DFE8F6]/60 border-[#99AFD7]/40'
            : 'bg-gradient-to-br from-[#bae6fd]/30 via-white to-[#bfdbfe]/40 border-[#93c5fd]'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-3xs font-extrabold uppercase tracking-wider border ${
                isCalmMode
                  ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/40'
                  : 'bg-[#bae6fd] text-[#1e3a8a] border-[#7dd3fc]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isCalmMode ? 'text-[#344D76]' : 'text-[#1e3a8a]'}`} />
              <span>Complete Qur'anic Prophetic Heritage</span>
            </div>
            <h2
              className={`text-xl sm:text-2xl font-extrabold font-heading ${
                isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'
              }`}
            >
              Stories of all 25 Prophets in Islam
            </h2>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'
              }`}
            >
              Every single Prophet mentioned in the Qur'an (from Prophet Adam to Prophet Muhammad ﷺ) with direct <span className={`font-semibold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>Quran.com</span> verses, <span className={`font-semibold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>Tafsir Ibn Kathir</span>, <span className={`font-semibold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>Bayyinah & Yaqeen Institutes</span>, and structured using <span className={`font-semibold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>neurodivergent learning science</span> (UDL, Strengths Safari, OT Sensory Regulation, and Executive Function Chunking).
            </p>
          </div>

          <button
            type="button"
            id="home-explore-prophets-btn"
            onClick={() => onNavigate('prophets')}
            className={`px-6 py-3 rounded-2xl text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 shrink-0 self-start sm:self-center ${
              isCalmMode
                ? 'bg-[#344D76] hover:bg-[#24334A]'
                : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
            }`}
          >
            <span>Explore All 25 Prophets</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Prophet Mini Grid Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pt-2">
          {[
            { num: 1, name: 'Adam', arabic: 'آدم', desc: 'Gift of Learning' },
            { num: 3, name: 'Nuh', arabic: 'نوح', desc: 'The Great Ark' },
            { num: 6, name: 'Ibrahim', arabic: 'إبراهيم', desc: 'Friend of Allah' },
            { num: 11, name: 'Yusuf', arabic: 'يوسف', desc: 'Beautiful Patience' },
            { num: 14, name: 'Musa', arabic: 'موسى', desc: 'Parting the Sea' },
            { num: 25, name: 'Muhammad ﷺ', arabic: 'محمد', desc: 'Mercy to All Worlds' }
          ].map((p) => (
            <button
              key={p.num}
              type="button"
              onClick={() => onNavigate('prophets')}
              className={`p-3 rounded-2xl text-left transition-all group shadow-2xs hover:shadow-xs border ${
                isCalmMode
                  ? 'bg-white/90 hover:bg-white border-[#99AFD7]/40 hover:border-[#869EC9]'
                  : 'bg-white/90 hover:bg-white border-[#93c5fd]/50 hover:border-[#60a5fa]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-3xs font-extrabold px-1.5 py-0.5 rounded-md ${
                    isCalmMode
                      ? 'text-[#344D76] bg-[#E8EEF8]'
                      : 'text-[#1e3a8a] bg-[#bae6fd]'
                  }`}
                >
                  #{p.num}
                </span>
                <span
                  className={`text-xs font-bold font-arabic ${
                    isCalmMode ? 'text-slate-700' : 'text-[#1e3a8a]'
                  }`}
                  dir="rtl"
                >
                  {p.arabic}
                </span>
              </div>
              <p
                className={`text-xs font-bold truncate ${
                  isCalmMode
                    ? 'text-slate-800 group-hover:text-[#344D76]'
                    : 'text-[#1e3a8a] group-hover:text-[#60a5fa]'
                }`}
              >
                {p.name}
              </p>
              <p className={`text-3xs truncate ${isCalmMode ? 'text-slate-500' : 'text-[#1e3a8a]/60'}`}>
                {p.desc}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* 3 Simple Learning Formats */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className={`text-xl sm:text-2xl font-bold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
            One Lesson, Multiple Formats
          </h2>
          <p className={`text-xs sm:text-sm ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/70'}`}>
            Switch formats anytime during a lesson to fit what works best today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div
            onClick={() => {
              onLoadDemoLesson(HACKATHON_DEMO_LEARNER_1);
              onNavigate('lesson');
            }}
            className={`cursor-pointer rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all space-y-3 border ${
              isCalmMode
                ? 'bg-white/90 border-[#99AFD7]/40 hover:border-[#869EC9]'
                : 'bg-white/90 border-[#93c5fd]/50 hover:border-[#60a5fa]'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isCalmMode ? 'bg-[#E8EEF8] text-[#344D76]' : 'bg-[#bae6fd] text-[#1e3a8a]'
              }`}
            >
              <Eye className="w-5 h-5" />
            </div>
            <h3 className={`text-base font-bold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>Step Cards & Visuals</h3>
            <p className={`text-xs leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'}`}>
              One clear step per screen with visual cues and sensory check-ins.
            </p>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => {
              onLoadDemoLesson(HACKATHON_DEMO_LEARNER_2);
              onNavigate('lesson');
            }}
            className={`cursor-pointer rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all space-y-3 border ${
              isCalmMode
                ? 'bg-white/90 border-[#99AFD7]/40 hover:border-[#869EC9]'
                : 'bg-white/90 border-[#93c5fd]/50 hover:border-[#60a5fa]'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isCalmMode ? 'bg-[#DFE8F6] text-[#344D76]' : 'bg-[#bfdbfe] text-[#1e3a8a]'
              }`}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className={`text-base font-bold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>Story & Analogy</h3>
            <p className={`text-xs leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'}`}>
              Weaves child's favorite themes (space, animals, nature) into the topic.
            </p>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => {
              const stepDemo = JSON.parse(JSON.stringify(HACKATHON_DEMO_LEARNER_1));
              stepDemo.activeFormat = 'step_by_step';
              onLoadDemoLesson(stepDemo);
              onNavigate('lesson');
            }}
            className={`cursor-pointer rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all space-y-3 border ${
              isCalmMode
                ? 'bg-white/90 border-[#99AFD7]/40 hover:border-[#869EC9]'
                : 'bg-white/90 border-[#93c5fd]/50 hover:border-[#60a5fa]'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isCalmMode ? 'bg-[#E8EEF8] text-[#344D76]' : 'bg-[#7dd3fc]/40 text-[#1e3a8a]'
              }`}
            >
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className={`text-base font-bold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>Interactive Checklist</h3>
            <p className={`text-xs leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'}`}>
              Check off tasks as you go with calming repetition phrases.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Topics Section */}
      <section
        className={`space-y-4 pt-4 border-t ${
          isCalmMode ? 'border-[#99AFD7]/30' : 'border-[#93c5fd]/30'
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className={`text-lg sm:text-xl font-bold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
            Popular Topics
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('create')}
            className={`text-xs font-bold hover:underline flex items-center gap-1 ${
              isCalmMode ? 'text-[#344D76] hover:text-slate-900' : 'text-[#1e3a8a] hover:text-[#60a5fa]'
            }`}
          >
            <span>Create Custom Topic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {TOPIC_PRESETS.slice(0, 3).map((preset) => (
            <div
              key={preset.id}
              onClick={() => {
                onSelectPresetTopic(preset.title);
                onNavigate('create');
              }}
              className={`cursor-pointer rounded-xl p-4 transition-all space-y-1.5 shadow-2xs hover:shadow-xs border ${
                isCalmMode
                  ? 'bg-white/90 border-[#99AFD7]/40 hover:border-[#869EC9]'
                  : 'bg-white/90 border-[#93c5fd]/50 hover:border-[#60a5fa]'
              }`}
            >
              <span
                className={`text-3xs font-bold uppercase px-2 py-0.5 rounded border ${
                  isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/40'
                    : 'bg-[#bae6fd] text-[#1e3a8a] border-[#7dd3fc]'
                }`}
              >
                {preset.category}
              </span>
              <h3 className={`text-sm font-bold ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
                {preset.title}
              </h3>
              <p className={`text-xs line-clamp-2 ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/70'}`}>
                {preset.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Parent & Educator Community Forum Spotlight */}
      <section
        className={`rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4 border ${
          isCalmMode
            ? 'bg-gradient-to-r from-[#E8EEF8]/60 via-white to-[#DFE8F6]/60 border-[#99AFD7]/40'
            : 'bg-gradient-to-r from-[#bae6fd]/40 via-white to-[#bfdbfe]/40 border-[#93c5fd]'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-2xl text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-2xs ${
                isCalmMode ? 'bg-[#344D76]' : 'bg-[#1e3a8a]'
              }`}
            >
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className={`text-lg sm:text-xl font-bold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
                  Bridge Parent & Educator Community
                </h2>
                <span
                  className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    isCalmMode ? 'bg-[#99AFD7]/30 text-[#344D76]' : 'bg-[#60a5fa]/25 text-[#1e3a8a]'
                  }`}
                >
                  Active Forum
                </span>
              </div>
              <p className={`text-xs sm:text-sm max-w-xl leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/75'}`}>
                Connect with thousands of Muslim families sharing practical sensory Salah accommodations, PECS laminations, and neurodiversity-affirming learning routines.
              </p>
            </div>
          </div>

          <button
            type="button"
            id="home-explore-community-btn"
            onClick={() => onNavigate('community')}
            className={`px-5 py-3 rounded-xl text-white font-bold text-xs sm:text-sm transition-all shadow-2xs flex items-center justify-center gap-2 shrink-0 ${
              isCalmMode
                ? 'bg-[#344D76] hover:bg-[#24334A]'
                : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
            }`}
          >
            <span>Visit Community Forum</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
