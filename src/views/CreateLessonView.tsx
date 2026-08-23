import React, { useState, useEffect } from 'react';
import { AgeRange, LearningPreferenceId, FormatType, LessonData, LearnerProfile } from '../types';
import { LEARNING_PREFERENCES, TOPIC_PRESETS, POPULAR_INTERESTS } from '../data/presetLessons';
import { generateLesson } from '../services/geminiService';
import { storageService, STORAGE_KEYS } from '../services/storageService';
import {
  Sparkles,
  BookOpen,
  Layers,
  CheckSquare,
  ShieldCheck,
  Check,
  Loader2,
  HelpCircle,
  Feather,
  ChevronRight,
  User,
  Heart
} from 'lucide-react';
import { DynamicIcon } from '../components/DynamicIcon';

interface CreateLessonViewProps {
  initialTopic?: string;
  onLessonGenerated: (lesson: LessonData) => void;
  isCalmMode: boolean;
  onNavigate: (view: string) => void;
}

export const CreateLessonView: React.FC<CreateLessonViewProps> = ({
  initialTopic = 'How to Make Wudu',
  onLessonGenerated,
  isCalmMode,
  onNavigate
}) => {
  // Read stored learner profile for defaults
  const savedProfile = storageService.getItem<LearnerProfile | null>(STORAGE_KEYS.LEARNER_PROFILE, null);

  const [topic, setTopic] = useState(initialTopic);
  const [customTopic, setCustomTopic] = useState('');
  const [useCustomTopic, setUseCustomTopic] = useState(false);
  const [ageRange, setAgeRange] = useState<AgeRange>(savedProfile?.ageRange || '7-9');
  const [selectedPreferences, setSelectedPreferences] = useState<LearningPreferenceId[]>(
    savedProfile?.preferences || ['visual', 'short_instructions', 'one_step']
  );
  const [selectedInterest, setSelectedInterest] = useState<string>(
    savedProfile?.interests?.[0] || 'Space & Astronomy'
  );
  const [customInterest, setCustomInterest] = useState<string>('');
  const [preferredFormat, setPreferredFormat] = useState<FormatType>(savedProfile?.preferredFormat || 'visual');
  const [learnerNickname, setLearnerNickname] = useState<string>(savedProfile?.nickname || 'Learner A');
  const [readingComplexity, setReadingComplexity] = useState<'early' | 'simple' | 'standard'>(
    savedProfile?.readingComplexity || 'simple'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState('Connecting with Gemini AI...');
  const [loadingProgress, setLoadingProgress] = useState(15);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const activeTopic = useCustomTopic ? customTopic : topic;
  const activeInterest = customInterest.trim() ? customInterest.trim() : selectedInterest;

  const togglePreference = (prefId: LearningPreferenceId) => {
    setSelectedPreferences((prev) =>
      prev.includes(prefId) ? prev.filter((p) => p !== prefId) : [...prev, prefId]
    );
  };

  const handleGenerate = async (e: React.FormEvent, forceFresh = true) => {
    e.preventDefault();
    if (!activeTopic.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);
    setLoadingProgress(20);
    setLoadingStage('Connecting with Gemini AI on the server...');

    // Progress updates to provide reassuring feedback
    const timer1 = setTimeout(() => {
      setLoadingProgress(45);
      setLoadingStage(`Personalizing for Age ${ageRange} and selected preferences...`);
    }, 1100);

    const timer2 = setTimeout(() => {
      setLoadingProgress(70);
      setLoadingStage(`Weaving ${activeInterest} metaphors and analogies into steps...`);
    }, 2400);

    const timer3 = setTimeout(() => {
      setLoadingProgress(90);
      setLoadingStage('Formatting structured JSON cards, activity & review questions...');
    }, 3800);

    try {
      const lesson = await generateLesson({
        topic: activeTopic,
        ageRange,
        learningPreferences: selectedPreferences,
        interests: [activeInterest],
        activeFormat: preferredFormat,
        learnerNickname: learnerNickname.trim() || 'Learner A',
        readingComplexity,
        isCalmMode
      }, forceFresh);

      // Save generated lesson to persistent saved lessons collection
      const existingSaved = storageService.getItem<LessonData[]>(STORAGE_KEYS.SAVED_LESSONS, []);
      const updatedSaved = [lesson, ...existingSaved.filter((l) => l.id !== lesson.id)].slice(0, 20);
      storageService.setItem(STORAGE_KEYS.SAVED_LESSONS, updatedSaved);

      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      setLoadingProgress(100);
      setLoadingStage('Lesson ready! Opening interactive view...');

      setTimeout(() => {
        setIsLoading(false);
        onLessonGenerated(lesson);
      }, 400);
    } catch (error: any) {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      console.error('Error generating lesson:', error);
      setIsLoading(false);
      setErrorMessage(
        error?.message || 'Unable to connect with AI generator right now. You can try again or use the offline template.'
      );
    }
  };

  return (
    <div id="create-lesson-container" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full text-xs font-bold border border-[#7B9A7A]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#7B9A7A]" />
          <span>Adaptive Lesson Generator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Create a Personalized Lesson
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Select what to teach and how your learner thrives. The AI adapts the presentation format without modifying sacred facts.
        </p>
      </div>

      {/* Main Generator Form */}
      <form onSubmit={handleGenerate} className="space-y-8">
        {/* SECTION 1: WHAT TO TEACH */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#E8F1E7] text-[#4A6349] font-extrabold text-sm flex items-center justify-center border border-[#7B9A7A]/30">
                1
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  What would you like to teach?
                </h2>
                <p className="text-xs text-slate-500">
                  Type any Quranic story, Surah theme, or custom topic, or choose a foundation preset
                </p>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setUseCustomTopic(true)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  useCustomTopic
                    ? 'bg-[#7B9A7A] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Quran / Topic</span>
              </button>
              <button
                type="button"
                onClick={() => setUseCustomTopic(false)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  !useCustomTopic
                    ? 'bg-[#7B9A7A] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Presets (5 Pillars)</span>
              </button>
            </div>
          </div>

          {/* CUSTOM TOPIC MODE */}
          {useCustomTopic ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="custom-topic-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Type Any Topic, Quran Story, or Surah Reflection:
                </label>
                <div className="relative">
                  <input
                    id="custom-topic-input"
                    type="text"
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    placeholder="e.g. The story of the two men and the gardens from Suratul Kahf"
                    className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-2xl text-slate-900 text-sm font-medium focus:bg-white focus:border-[#7B9A7A] focus:ring-2 focus:ring-[#7B9A7A]/20 focus:outline-hidden shadow-2xs"
                  />
                  {customTopic.trim() && (
                    <button
                      type="button"
                      onClick={() => setCustomTopic('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Inspiration Chips for Quran & Tafsir stories */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-2xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-[#7B9A7A]" />
                    <span>Popular Quran & Tafsir Topics (Click to Auto-Fill):</span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'The Story of the Two Men and the Gardens (Surah Al-Kahf 18:32-44)',
                    'Companions of the Cave & Trust in Allah (Surah Al-Kahf 18:9-26)',
                    'Prophet Musa & Al-Khidr: Patience in Learning (Surah Al-Kahf 18:60-82)',
                    'Luqman\'s Wisdom & Advice to His Son (Surah Luqman 31:12-19)',
                    'Prophet Yunus & The Whale (Surah Al-Anbiya 21:87)',
                    'The Wonders of the Honeybee & Nature (Surah An-Nahl 16:68)',
                    'Gratitude for Allah\'s Blessings (Surah Ar-Rahman 55)',
                    'Kindness & Gentle Words to Parents (Surah Al-Isra 17:23)'
                  ].map((presetTitle) => (
                    <button
                      key={presetTitle}
                      type="button"
                      onClick={() => setCustomTopic(presetTitle)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all text-left ${
                        customTopic === presetTitle
                          ? 'bg-[#E8F1E7] border-[#7B9A7A] text-[#4A6349] font-bold shadow-2xs'
                          : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:border-[#7B9A7A]/40'
                      }`}
                    >
                      {presetTitle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sourcing Guarantee Badge */}
              <div className="p-3.5 bg-gradient-to-r from-[#F4F8F3] to-[#E8F1E7]/40 border border-[#7B9A7A]/30 rounded-2xl flex items-center gap-3 text-xs text-slate-700">
                <div className="w-7 h-7 rounded-xl bg-[#7B9A7A] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-[#4A6349]">
                    Rigorous Quran & Tafsir Sourcing
                  </p>
                  <p className="text-2xs text-slate-600">
                    Sourced from Quran.com (exact Arabic & verses), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, formatted with neurodivergent UDL frameworks.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* PRESET FOUNDATION TOPICS */
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TOPIC_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setTopic(preset.title);
                    }}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between gap-2 ${
                      !useCustomTopic && topic === preset.title
                        ? 'bg-[#E8F1E7] border-[#7B9A7A] text-[#4A6349] font-bold shadow-2xs'
                        : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white hover:border-[#7B9A7A]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <DynamicIcon name={preset.icon} className="w-4 h-4 text-[#7B9A7A] shrink-0" />
                      <span className="text-sm font-semibold">{preset.title}</span>
                    </div>
                    {!useCustomTopic && topic === preset.title && (
                      <Check className="w-4 h-4 text-[#7B9A7A] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 25 Prophets Interactive Library Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E8EEF8] via-white to-[#E8EEF8] border border-[#99AFD7]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#99AFD7] text-white flex items-center justify-center font-bold text-sm shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#344D76]">
                  Looking for Prophet Stories? (Adam to Muhammad ﷺ)
                </p>
                <p className="text-2xs text-slate-500">
                  Explore all 25 Prophets with Quran.com verses, Ibn Kathir tafsir, and neurodivergent research citations.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('prophets')}
              className="w-full sm:w-auto px-4 py-2 bg-[#344D76] hover:bg-[#283C5C] text-white font-bold text-xs rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5"
            >
              <span>Explore All 25 Prophets</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* SECTION 2: AGE RANGE & LEARNER NICKNAME */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-200/80">
            <span className="w-8 h-8 rounded-full bg-[#E8F1E7] text-[#4A6349] font-extrabold text-sm flex items-center justify-center border border-[#7B9A7A]/30">
              2
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Age Range & Learner Nickname
              </h2>
              <p className="text-xs text-slate-500">
                Helps calibrate sentence length and vocabulary
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Age Range */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Age Range
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['4-6', '7-9', '10-12', '13+'] as AgeRange[]).map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => setAgeRange(age)}
                    className={`py-2.5 px-3 rounded-2xl font-extrabold text-sm border transition-all ${
                      ageRange === age
                        ? 'bg-[#7B9A7A] text-white border-[#7B9A7A] shadow-2xs'
                        : 'bg-white/70 text-slate-700 border-slate-200 hover:bg-white'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            {/* Learner Nickname */}
            <div>
              <label htmlFor="learner-nickname-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Learner Nickname (No real name needed)
              </label>
              <div className="relative">
                <input
                  id="learner-nickname-input"
                  type="text"
                  value={learnerNickname}
                  onChange={(e) => setLearnerNickname(e.target.value)}
                  placeholder="e.g. Learner A, Zayd, Maryam"
                  className="w-full px-4 py-2.5 bg-white/90 border border-slate-200 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-[#7B9A7A] focus:outline-hidden shadow-2xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: HOW DOES THIS LEARNER PREFER TO LEARN? */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#EBF0FF] text-[#5C7CFA] font-extrabold text-sm flex items-center justify-center border border-[#5C7CFA]/30">
                3
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  How does this learner prefer to learn?
                </h2>
                <p className="text-xs text-slate-500">
                  Select all the formats and supports that help them focus
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#5C7CFA] bg-[#EBF0FF] px-3 py-1 rounded-full border border-[#5C7CFA]/30">
              {selectedPreferences.length} Selected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LEARNING_PREFERENCES.map((pref) => {
              const isChecked = selectedPreferences.includes(pref.id);
              return (
                <div
                  key={pref.id}
                  onClick={() => togglePreference(pref.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-[#EBF0FF]/80 border-[#5C7CFA] shadow-2xs'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg border flex items-center justify-center mt-0.5 shrink-0 ${
                      isChecked
                        ? 'bg-[#5C7CFA] border-[#5C7CFA] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <DynamicIcon name={pref.icon} className="w-4 h-4 text-[#5C7CFA] inline" />
                      <span>{pref.label}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      {pref.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: WHAT DOES THE LEARNER ENJOY? (INTERESTS) */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-200/80">
            <span className="w-8 h-8 rounded-full bg-[#FCE8D5] text-[#D97706] font-extrabold text-sm flex items-center justify-center border border-[#FCE8D5]/80">
              4
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                What does the learner enjoy?
              </h2>
              <p className="text-xs text-slate-500">
                Bridge uses passions as anchors for memorable metaphors and analogies
              </p>
            </div>
          </div>

          {/* Interest Chips */}
          <div className="flex flex-wrap gap-2">
            {POPULAR_INTERESTS.map((interest) => {
              const isSelected = !customInterest.trim() && selectedInterest === interest;
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => {
                    setSelectedInterest(interest);
                    setCustomInterest('');
                  }}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold border transition-all ${
                    isSelected
                      ? 'bg-[#FCE8D5] border-[#D97706] text-[#D97706] shadow-2xs'
                      : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  {interest}
                </button>
              );
            })}
          </div>

          {/* Custom Interest Input */}
          <div className="pt-1">
            <label htmlFor="custom-interest-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Or Type a Unique Interest:
            </label>
            <input
              id="custom-interest-input"
              type="text"
              value={customInterest}
              onChange={(e) => setCustomInterest(e.target.value)}
              placeholder="e.g. Baking, Aviation, Deep Ocean, Minecraft, Horses"
              className="w-full px-4 py-2.5 bg-white/90 border border-slate-200 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-[#D97706] focus:outline-hidden shadow-2xs"
            />
          </div>
        </div>

        {/* SECTION 5: PREFERRED INITIAL FORMAT */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-200/80">
            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 font-extrabold text-sm flex items-center justify-center border border-slate-200">
              5
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Preferred Initial Format
              </h2>
              <p className="text-xs text-slate-500">
                You can switch between any of these 4 formats anytime during the lesson
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { id: 'story', label: '📖 Story Mode', desc: 'Narrative adventure using passions' },
              { id: 'visual', label: '🎨 Comic / Visual', desc: 'Single simple sentence visual cards' },
              { id: 'step_by_step', label: '🧩 Step-by-Step', desc: 'One instruction at a time with checks' },
              { id: 'flashcard', label: '🎴 Flashcards', desc: 'Interactive concept review & flip cards' },
            ].map((fmt) => (
              <button
                key={fmt.id}
                type="button"
                onClick={() => setPreferredFormat(fmt.id as FormatType)}
                className={`p-4 rounded-2xl border text-left transition-all space-y-1 ${
                  preferredFormat === fmt.id
                    ? 'bg-[#7B9A7A] text-white border-[#7B9A7A] shadow-xs'
                    : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                }`}
              >
                <div className="text-sm font-bold">{fmt.label}</div>
                <div className={`text-2xs ${preferredFormat === fmt.id ? 'text-white/80' : 'text-slate-500'}`}>
                  {fmt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="p-4 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl flex items-start gap-3 text-slate-600 text-xs leading-relaxed shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-[#7B9A7A] shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 font-semibold">Privacy Reminder:</strong> Bridge never asks for medical diagnoses or sensitive health files. Your selections are used purely to customize layout, visual pacing, and analogies.
          </div>
        </div>

        {/* Error State Banner */}
        {errorMessage && (
          <div className="p-5 bg-rose-50 border border-rose-200 rounded-3xl text-slate-800 space-y-3 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                !
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-rose-900">
                  Lesson Generation Notice
                </h4>
                <p className="text-xs text-rose-700 leading-relaxed">
                  {errorMessage}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={(e) => handleGenerate(e, true)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full text-xs font-bold transition-colors shadow-2xs"
              >
                Try Again with Gemini
              </button>
              <button
                type="button"
                onClick={(e) => handleGenerate(e, false)}
                className="px-4 py-2 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-xs font-bold transition-colors"
              >
                Generate Offline Template
              </button>
            </div>
          </div>
        )}

        {/* Loading Progress State */}
        {isLoading && (
          <div className="p-6 bg-white/90 backdrop-blur-md border border-[#7B9A7A]/40 rounded-3xl space-y-4 shadow-sm animate-pulse">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E8F1E7] text-[#4A6349] flex items-center justify-center border border-[#7B9A7A]/30">
                  <Loader2 className="w-5 h-5 animate-spin text-[#7B9A7A]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#4A6349] uppercase tracking-wider block">
                    Generating Adaptive Lesson
                  </span>
                  <div className="text-sm font-bold text-slate-900">
                    {loadingStage}
                  </div>
                </div>
              </div>
              <span className="text-xs font-extrabold text-[#4A6349] bg-[#E8F1E7] px-3 py-1 rounded-full border border-[#7B9A7A]/30">
                {loadingProgress}%
              </span>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-[#7B9A7A] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            <p className="text-2xs text-slate-500 text-center">
              Generating tailored step-by-step instructions, hands-on activity, and gentle review question...
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <button
            id="create-my-lesson-submit-btn"
            type="submit"
            disabled={isLoading || !activeTopic.trim()}
            className={`w-full py-4 sm:py-5 px-8 rounded-full font-extrabold text-lg text-white transition-all shadow-md flex items-center justify-center gap-3 ${
              isLoading || !activeTopic.trim()
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-[#7B9A7A] hover:bg-[#6c8c6b] hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>{loadingStage}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6 text-[#E8F1E7]" />
                <span>✨ Create My Lesson</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
