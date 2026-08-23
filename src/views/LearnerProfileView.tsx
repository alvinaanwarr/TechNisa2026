import React, { useState } from 'react';
import { LearnerProfile, LearningPreferenceId, FormatType, AgeRange } from '../types';
import { LEARNING_PREFERENCES, POPULAR_INTERESTS } from '../data/presetLessons';
import {
  User,
  ShieldCheck,
  Sparkles,
  Heart,
  Save,
  Check,
  Feather,
  Volume2,
  VolumeX,
  BookOpen,
  Layers,
  CheckSquare,
  ArrowRight
} from 'lucide-react';
import { DynamicIcon } from '../components/DynamicIcon';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../services/storageService';

interface LearnerProfileViewProps {
  onStartLessonWithProfile: (profile: LearnerProfile) => void;
  onNavigate: (view: string) => void;
}

const DEFAULT_PROFILE: LearnerProfile = {
  id: 'learner-1',
  nickname: 'Learner A',
  ageRange: '7-9',
  preferences: ['visual', 'short_instructions', 'one_step'],
  interests: ['Space & Astronomy', 'Animals & Safari'],
  preferredFormat: 'visual',
  readingComplexity: 'simple',
  lessonDetail: 'short',
  repetition: true,
  soundEnabled: true,
  calmModeDefault: false
};

export const LearnerProfileView: React.FC<LearnerProfileViewProps> = ({
  onStartLessonWithProfile,
  onNavigate
}) => {
  const [profile, setProfile] = useLocalStorage<LearnerProfile>(
    STORAGE_KEYS.LEARNER_PROFILE,
    DEFAULT_PROFILE
  );

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [customInterestInput, setCustomInterestInput] = useState('');

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Explicitly re-save into storage to trigger persistence feedback
    setProfile((prev) => ({ ...prev }));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const togglePref = (id: LearningPreferenceId) => {
    setProfile((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(id)
        ? prev.preferences.filter((p) => p !== id)
        : [...prev.preferences, id]
    }));
  };

  const toggleInterest = (interest: string) => {
    setProfile((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const addCustomInterest = () => {
    if (customInterestInput.trim() && !profile.interests.includes(customInterestInput.trim())) {
      setProfile((prev) => ({
        ...prev,
        interests: [...prev.interests, customInterestInput.trim()]
      }));
      setCustomInterestInput('');
    }
  };

  return (
    <div id="learner-profile-view" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8F1E7] text-[#4A6349] rounded-full text-xs font-bold border border-[#7B9A7A]/30">
          <User className="w-3.5 h-3.5 text-[#7B9A7A]" />
          <span>Learner Preferences</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          About My Learner
        </h1>
        <div className="p-4 bg-white/70 backdrop-blur-md border border-[#7B9A7A]/30 rounded-2xl text-[#4A6349] font-bold text-sm sm:text-base italic shadow-2xs">
          “We don't need to know your child's diagnosis. We only need to know how they prefer to learn.”
        </div>
      </div>

      {/* Privacy Guarantee Card */}
      <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2.5 text-[#4A6349] font-bold text-base">
          <ShieldCheck className="w-5 h-5 text-[#7B9A7A]" />
          <span>🔒 Privacy by Design</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Bridge does not require medical records, diagnoses, or sensitive health information. Personalization is based purely on learning preferences selected by the parent or educator. For this prototype, no account or registration is required.
        </p>
      </div>

      {/* Main Preferences Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Nickname & Age */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 font-heading border-b border-slate-200/80 pb-2">
            1. Learner Profile Tag & Age
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="profile-nickname-field" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Nickname / Label
              </label>
              <input
                id="profile-nickname-field"
                type="text"
                value={profile.nickname}
                onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
                placeholder="e.g. Learner A, Zayd, Amina"
                className="w-full px-4 py-2.5 bg-white/90 border border-slate-200 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-[#7B9A7A] focus:outline-hidden shadow-2xs"
              />
              <p className="text-2xs text-slate-500 mt-1">Use a pseudonym if you prefer.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Age Range
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['4-6', '7-9', '10-12', '13+'] as AgeRange[]).map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => setProfile({ ...profile, ageRange: age })}
                    className={`py-2 px-2 rounded-2xl text-xs font-extrabold border transition-all ${
                      profile.ageRange === age
                        ? 'bg-[#7B9A7A] text-white border-[#7B9A7A] shadow-2xs'
                        : 'bg-white/70 text-slate-700 border-slate-200 hover:bg-white'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reading & Lesson Detail */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 font-heading border-b border-slate-200/80 pb-2">
            2. Reading & Pacing Preferences
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Reading Complexity */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Reading Complexity
              </label>
              <div className="space-y-2">
                {[
                  { id: 'early', label: 'Early Reader', desc: 'Short phrases, large visual cues' },
                  { id: 'simple', label: 'Simple Sentences', desc: 'Clear concrete vocabulary' },
                  { id: 'standard', label: 'Standard', desc: 'Rich vocabulary with simple grammar' }
                ].map((rc) => (
                  <div
                    key={rc.id}
                    onClick={() => setProfile({ ...profile, readingComplexity: rc.id as any })}
                    className={`cursor-pointer p-3 rounded-2xl border transition-all flex items-center justify-between ${
                      profile.readingComplexity === rc.id
                        ? 'bg-[#E8F1E7] border-[#7B9A7A] text-[#4A6349] font-bold shadow-2xs'
                        : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{rc.label}</div>
                      <div className="text-2xs text-slate-500">{rc.desc}</div>
                    </div>
                    {profile.readingComplexity === rc.id && <Check className="w-4 h-4 text-[#7B9A7A]" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Detail & Routine */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Lesson Depth
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setProfile({ ...profile, lessonDetail: 'short' })}
                    className={`p-3 rounded-2xl text-xs font-bold border transition-all ${
                      profile.lessonDetail === 'short'
                        ? 'bg-[#EBF0FF] border-[#5C7CFA] text-[#5C7CFA]'
                        : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                    }`}
                  >
                    Short Micro-Lessons
                  </button>
                  <button
                    type="button"
                    onClick={() => setProfile({ ...profile, lessonDetail: 'detailed' })}
                    className={`p-3 rounded-2xl text-xs font-bold border transition-all ${
                      profile.lessonDetail === 'detailed'
                        ? 'bg-[#EBF0FF] border-[#5C7CFA] text-[#5C7CFA]'
                        : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                    }`}
                  >
                    Detailed Sections
                  </button>
                </div>
              </div>

              {/* Repetition Toggle */}
              <div className="p-3.5 bg-white/70 border border-slate-200/80 rounded-2xl flex items-center justify-between shadow-2xs">
                <div>
                  <div className="text-xs font-bold text-slate-800">Include Repetition Phrases</div>
                  <div className="text-2xs text-slate-500">Reinforces memory through rhythmic repetition</div>
                </div>
                <input
                  type="checkbox"
                  checked={profile.repetition}
                  onChange={(e) => setProfile({ ...profile, repetition: e.target.checked })}
                  className="w-5 h-5 rounded text-[#7B9A7A] focus:ring-[#7B9A7A] border-slate-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sensory & Media Settings */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 font-heading border-b border-slate-200/80 pb-2">
            3. Sensory & Accessibility Defaults
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white/70 border border-slate-200/80 rounded-2xl flex items-center justify-between shadow-2xs">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Feather className="w-4 h-4 text-[#7B9A7A]" />
                  <span>Default Calm Mode ON</span>
                </div>
                <p className="text-xs text-slate-500">Starts all lessons with minimal clutter and no animations</p>
              </div>
              <input
                type="checkbox"
                checked={profile.calmModeDefault}
                onChange={(e) => setProfile({ ...profile, calmModeDefault: e.target.checked })}
                className="w-5 h-5 rounded text-[#7B9A7A] focus:ring-[#7B9A7A] border-slate-300"
              />
            </div>

            <div className="p-4 bg-white/70 border border-slate-200/80 rounded-2xl flex items-center justify-between shadow-2xs">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-[#5C7CFA]" />
                  <span>Audio & Sound Features</span>
                </div>
                <p className="text-xs text-slate-500">Enable Read to Me audio narration controls</p>
              </div>
              <input
                type="checkbox"
                checked={profile.soundEnabled}
                onChange={(e) => setProfile({ ...profile, soundEnabled: e.target.checked })}
                className="w-5 h-5 rounded text-[#7B9A7A] focus:ring-[#7B9A7A] border-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Interests Selection */}
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              4. Favorite Topics & Passions
            </h2>
            <span className="text-xs font-bold text-[#D97706] bg-[#FCE8D5] px-2.5 py-0.5 rounded-full border border-[#FCE8D5]/80">
              {profile.interests.length} Selected
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {POPULAR_INTERESTS.map((interest) => {
              const isSelected = profile.interests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold border transition-all ${
                    isSelected
                      ? 'bg-[#FCE8D5] border-[#D97706] text-[#D97706] shadow-2xs'
                      : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  {interest} {isSelected && '✓'}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="text"
              value={customInterestInput}
              onChange={(e) => setCustomInterestInput(e.target.value)}
              placeholder="Add custom interest (e.g. Baking, Trains, Astronomy)"
              className="flex-1 px-4 py-2 bg-white/90 border border-slate-200 rounded-2xl text-sm shadow-2xs focus:outline-hidden focus:border-[#D97706]"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addCustomInterest();
                }
              }}
            />
            <button
              type="button"
              onClick={addCustomInterest}
              className="px-4 py-2 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-xs rounded-full shadow-2xs transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {/* Save & Apply Action buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <button
            id="save-learner-profile-btn"
            type="submit"
            className="px-6 py-3 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-xs transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>{savedSuccess ? 'Preferences Saved ✓' : 'Save Preferences'}</span>
          </button>

          <button
            id="create-lesson-with-profile-btn"
            type="button"
            onClick={() => {
              handleSave();
              onStartLessonWithProfile(profile);
              onNavigate('create');
            }}
            className="px-6 py-3 bg-slate-900 hover:bg-black text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-xs transition-colors"
          >
            <span>Create Lesson with this Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
