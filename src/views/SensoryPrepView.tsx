import React, { useState } from 'react';
import { SENSORY_SOCIAL_STORIES } from '../data/sensoryStoriesData';
import { SensorySocialStory } from '../types';
import { speakText, stopSpeech } from '../utils/speech';
import {
  Sparkles,
  Volume2,
  VolumeX,
  Building2,
  Droplets,
  Compass,
  Moon,
  Shield,
  Heart,
  Headphones,
  CheckCircle2,
  Smile,
  AlertTriangle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface SensoryPrepViewProps {
  isCalmMode: boolean;
  onNavigate: (view: string) => void;
  onSelectTopic?: (topic: string) => void;
}

export const SensoryPrepView: React.FC<SensoryPrepViewProps> = ({
  isCalmMode,
  onNavigate,
  onSelectTopic
}) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>(SENSORY_SOCIAL_STORIES[0].id);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [checkedLines, setCheckedLines] = useState<Record<string, boolean>>({});

  const activeStory =
    SENSORY_SOCIAL_STORIES.find((s) => s.id === selectedStoryId) || SENSORY_SOCIAL_STORIES[0];

  const handlePlayStoryAudio = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      speakText(activeStory.audioScript || activeStory.storyLines.join('. '), {
        onEnd: () => setIsPlayingAudio(false)
      });
    }
  };

  const toggleCheckLine = (index: number) => {
    const key = `${activeStory.id}-${index}`;
    setCheckedLines((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div id="sensory-prep-view-container" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Banner */}
      <div
        className={`rounded-[2.5rem] p-6 sm:p-8 shadow-sm border transition-colors ${
          isCalmMode
            ? 'bg-white/90 border-[#99AFD7]/40'
            : 'bg-white/90 border-[#93c5fd]/50'
        }`}
      >
        <div className="space-y-2 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                isCalmMode
                  ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/40'
                  : 'bg-[#bae6fd] text-[#1e3a8a] border-[#7dd3fc]'
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Sensory Processing & First-Person Social Stories</span>
            </div>
            <div
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-semibold border ${
                isCalmMode
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-emerald-100 text-emerald-900 border-emerald-300'
              }`}
            >
              <Smile className="w-3 h-3 text-emerald-700" />
              <span>Low-Anxiety Islamic Preparation</span>
            </div>
          </div>

          <h1 className={`text-2xl sm:text-4xl font-extrabold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
            Sensory Notes & Social Stories for Islamic Rituals
          </h1>
          <p className={`text-xs sm:text-base leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/80'}`}>
            For autistic and neurodivergent children, unexpected sensory inputs (water temperature, crowded rooms, microphone echoes, tight spaces) cause anxiety. These simple first-person social scripts teach children what to expect and what coping options they have.
          </p>
        </div>

        {/* Story Selector Horizontal Tabs */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 mt-6">
          {SENSORY_SOCIAL_STORIES.map((story) => {
            const isSelected = story.id === activeStory.id;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => {
                  setSelectedStoryId(story.id);
                  stopSpeech();
                  setIsPlayingAudio(false);
                }}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all border shadow-2xs ${
                  isSelected
                    ? isCalmMode
                      ? 'bg-[#344D76] text-white border-[#344D76]'
                      : 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                <span>{story.title.split('(')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Social Story Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: The Social Story Script Card */}
        <div
          className={`lg:col-span-2 rounded-[2.5rem] p-6 sm:p-8 bg-white border shadow-sm space-y-6 ${
            isCalmMode ? 'border-[#99AFD7]/40' : 'border-[#93c5fd]/50'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-3xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                {activeStory.topic}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-1">
                {activeStory.title}
              </h2>
            </div>

            <button
              id="play-social-story-btn"
              type="button"
              onClick={handlePlayStoryAudio}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 text-white shadow-xs transition-all ${
                isPlayingAudio
                  ? 'bg-rose-500 hover:bg-rose-600 animate-pulse'
                  : isCalmMode
                  ? 'bg-[#344D76] hover:bg-[#24334A]'
                  : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'Stop Audio' : 'Read Story Aloud'}</span>
            </button>
          </div>

          {/* First-Person Script Sentences with Interactive Checkoff */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              First-Person Visual Script (Tap line to confirm step):
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 rounded-[2rem] border border-slate-200 space-y-3 font-medium text-slate-900 text-sm sm:text-base leading-relaxed">
              {activeStory.storyLines.map((line, idx) => {
                const key = `${activeStory.id}-${idx}`;
                const isChecked = checkedLines[key];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheckLine(idx)}
                    className={`p-3 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                      isChecked
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isChecked ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 text-transparent'
                      }`}
                    >
                      ✓
                    </div>
                    <span className="flex-1 leading-snug">{line}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sensory Triggers & Coping Strategies Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Sensory Triggers */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-900 uppercase">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                <span>Sensory Triggers to Expect</span>
              </div>
              <ul className="text-xs text-amber-950 space-y-1.5 list-disc list-inside">
                {activeStory.sensoryTriggers.map((trig, i) => (
                  <li key={i}>{trig}</li>
                ))}
              </ul>
            </div>

            {/* Coping Tools */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-900 uppercase">
                <Shield className="w-3.5 h-3.5 text-emerald-700" />
                <span>Coping Tools & Accommodations</span>
              </div>
              <ul className="text-xs text-emerald-950 space-y-1.5 list-disc list-inside">
                {activeStory.copingStrategies.map((strat, i) => (
                  <li key={i}>{strat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Col: Practical Parent & Teacher Prep Tips */}
        <div className="space-y-4">
          <div
            className={`rounded-[2.5rem] p-6 bg-white border shadow-sm space-y-4 ${
              isCalmMode ? 'border-[#99AFD7]/40' : 'border-[#93c5fd]/50'
            }`}
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base font-heading">
                Parent & Educator Guide
              </h3>
            </div>

            <div className="space-y-3">
              {activeStory.practicalPrepTips.map((tip, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">Tip {idx + 1}:</span>
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Jump to Lesson */}
          <div
            className={`rounded-[2rem] p-5 border text-center space-y-3 ${
              isCalmMode ? 'bg-[#E8EEF8]/60 border-[#99AFD7]/40' : 'bg-[#bae6fd]/30 border-[#93c5fd]'
            }`}
          >
            <p className="text-xs font-bold text-slate-800">
              Ready to practice the physical steps?
            </p>
            <button
              type="button"
              onClick={() => onNavigate('lesson')}
              className={`w-full py-2.5 rounded-xl font-extrabold text-xs text-white flex items-center justify-center gap-2 shadow-xs transition-colors ${
                isCalmMode ? 'bg-[#344D76] hover:bg-[#24334A]' : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
              }`}
            >
              <span>Go to Interactive Step Cards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
