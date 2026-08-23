import React, { useState } from 'react';
import { GoodDeedLogItem } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../services/storageService';
import { speakText } from '../utils/speech';
import {
  Heart,
  Sparkles,
  Plus,
  CheckCircle2,
  Trash2,
  Volume2,
  Smile,
  Droplets,
  BookOpen,
  Sun,
  Shield,
  Star,
  Award,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GoodDeedsViewProps {
  isCalmMode: boolean;
  onNavigate: (view: string) => void;
}

const PRESET_GOOD_DEEDS: Omit<GoodDeedLogItem, 'id' | 'timestamp' | 'dateKey' | 'isCompleted'>[] = [
  {
    title: 'Smiled at my parents or teacher (Sadaqah!)',
    emoji: '😊',
    iconName: 'Smile',
    category: 'kindness'
  },
  {
    title: 'Said "Bismillah" before eating or drinking',
    emoji: '🤲',
    iconName: 'BookOpen',
    category: 'worship'
  },
  {
    title: 'Made Wudhu calmly with comfortable water',
    emoji: '💧',
    iconName: 'Droplets',
    category: 'cleanliness'
  },
  {
    title: 'Recited "SubhanAllah" and "Alhamdulillah" 3 times',
    emoji: '📿',
    iconName: 'Sparkles',
    category: 'worship'
  },
  {
    title: 'Shared a toy, snack, or book with someone',
    emoji: '🧸',
    iconName: 'Heart',
    category: 'kindness'
  },
  {
    title: 'Cleaned up my play area or put my shoes away',
    emoji: '🧹',
    iconName: 'Shield',
    category: 'cleanliness'
  },
  {
    title: 'Prayed Salah with my family or at the masjid',
    emoji: '🕌',
    iconName: 'Sun',
    category: 'worship'
  },
  {
    title: 'Took a gentle sensory breath or wore my headphones when overwhelmed',
    emoji: '🎧',
    iconName: 'Award',
    category: 'patience'
  },
  {
    title: 'Was gentle and caring to a pet, bird, or plant',
    emoji: '🕊️',
    iconName: 'Heart',
    category: 'kindness'
  },
  {
    title: 'Said "JazakAllahu Khairan" (Thank you!)',
    emoji: '💖',
    iconName: 'Smile',
    category: 'kindness'
  }
];

export const GoodDeedsView: React.FC<GoodDeedsViewProps> = ({ isCalmMode, onNavigate }) => {
  const todayDateKey = new Date().toISOString().split('T')[0];
  const [deeds, setDeeds] = useLocalStorage<GoodDeedLogItem[]>(STORAGE_KEYS.GOOD_DEEDS_LOG, [
    {
      id: 'default-deed-1',
      title: 'Said "Bismillah" before my breakfast',
      emoji: '🤲',
      iconName: 'BookOpen',
      category: 'worship',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateKey: todayDateKey,
      isCompleted: true
    },
    {
      id: 'default-deed-2',
      title: 'Gave a warm smile to my family',
      emoji: '😊',
      iconName: 'Smile',
      category: 'kindness',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateKey: todayDateKey,
      isCompleted: true
    }
  ]);

  const [customDeedText, setCustomDeedText] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🌟');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'today' | 'history'>('today');

  const todayDeeds = deeds.filter((d) => d.dateKey === todayDateKey);
  const completedTodayCount = todayDeeds.filter((d) => d.isCompleted).length;

  const handleAddPresetDeed = (preset: typeof PRESET_GOOD_DEEDS[0]) => {
    const newDeed: GoodDeedLogItem = {
      id: `deed-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title: preset.title,
      emoji: preset.emoji,
      iconName: preset.iconName,
      category: preset.category,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateKey: todayDateKey,
      isCompleted: true
    };

    setDeeds((prev) => [newDeed, ...prev]);

    if (!isCalmMode) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
    speakText(`Masha'Allah! You logged: ${preset.title}! May Allah reward your good deed!`);
  };

  const handleAddCustomDeed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDeedText.trim()) return;

    const newDeed: GoodDeedLogItem = {
      id: `deed-${Date.now()}`,
      title: customDeedText.trim(),
      emoji: selectedEmoji,
      iconName: 'Star',
      category: 'custom',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateKey: todayDateKey,
      isCompleted: true
    };

    setDeeds((prev) => [newDeed, ...prev]);
    setCustomDeedText('');

    if (!isCalmMode) {
      confetti({
        particleCount: 35,
        spread: 65,
        origin: { y: 0.6 }
      });
    }
    speakText(`Alhamdulillah! Good deed added: ${newDeed.title}`);
  };

  const handleToggleDeed = (id: string) => {
    setDeeds((prev) =>
      prev.map((d) => (d.id === id ? { ...d, isCompleted: !d.isCompleted } : d))
    );
  };

  const handleDeleteDeed = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeeds((prev) => prev.filter((d) => d.id !== id));
  };

  const handleReadTodaySummary = () => {
    const speech = `Alhamdulillah! Today you did ${completedTodayCount} good deeds! ${todayDeeds
      .filter((d) => d.isCompleted)
      .map((d) => d.title)
      .join('. ')}. Allah loves when we do good deeds!`;
    speakText(speech);
  };

  return (
    <div id="good-deeds-view-container" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Hero Banner */}
      <div
        className={`rounded-[2.5rem] p-6 sm:p-8 shadow-sm border transition-colors ${
          isCalmMode
            ? 'bg-white/90 border-[#99AFD7]/40'
            : 'bg-white/90 border-[#93c5fd]/50'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                  isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/40'
                    : 'bg-[#bae6fd] text-[#1e3a8a] border-[#7dd3fc]'
                }`}
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>My Good Deeds Garden • Daily Hasanaat</span>
              </div>
              <div
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-semibold border ${
                  isCalmMode
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                }`}
              >
                <Star className="w-3 h-3 text-emerald-600 fill-emerald-500" />
                <span>{completedTodayCount} Deeds Today</span>
              </div>
            </div>

            <h1 className={`text-2xl sm:text-4xl font-extrabold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
              What Good Deeds Did You Do Today?
            </h1>
            <p className={`text-xs sm:text-base leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/80'}`}>
              The Prophet Muhammad ﷺ taught us that even a simple smile or gentle word is a reward from Allah! Tap any deed below or write your own to fill your good deed journal.
            </p>
          </div>

          {/* Quick Audio Readout & Badge Box */}
          <div
            className={`shrink-0 p-5 rounded-3xl text-center space-y-2 border ${
              isCalmMode ? 'bg-[#E8EEF8]/70 border-[#99AFD7]/40' : 'bg-[#bae6fd]/40 border-[#7dd3fc]'
            }`}
          >
            <div className="text-3xl">✨ 🤲 🌟</div>
            <div className="font-extrabold text-lg text-slate-900">
              {completedTodayCount} {completedTodayCount === 1 ? 'Good Deed' : 'Good Deeds'}
            </div>
            <p className="text-2xs text-slate-500">Logged for Today</p>

            <button
              id="read-deeds-summary-btn"
              type="button"
              onClick={handleReadTodaySummary}
              className={`w-full px-4 py-2 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-white shadow-2xs ${
                isCalmMode ? 'bg-[#344D76] hover:bg-[#24334A]' : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Listen to Summary</span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Deed Quick Logger Form */}
      <div
        className={`rounded-[2rem] p-5 sm:p-6 border shadow-2xs bg-white ${
          isCalmMode ? 'border-[#99AFD7]/40' : 'border-[#93c5fd]/50'
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 font-heading">
            Write What Good Deed You Did Today
          </h2>
        </div>

        <form onSubmit={handleAddCustomDeed} className="flex flex-col sm:flex-row items-stretch gap-2.5">
          {/* Emoji selector */}
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-2xl p-1 shrink-0">
            {['🌟', '💖', '🤲', '💧', '🧸', '😊', '🕊️'].map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setSelectedEmoji(emoji)}
                className={`w-8 h-8 rounded-xl text-sm flex items-center justify-center transition-all ${
                  selectedEmoji === emoji ? 'bg-white shadow-xs scale-110 border border-amber-300' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>

          <input
            id="custom-deed-input"
            type="text"
            value={customDeedText}
            onChange={(e) => setCustomDeedText(e.target.value)}
            placeholder="e.g. I helped my mom set the table, recited Surah Al-Fatihah, shared my crayon..."
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            id="add-custom-deed-btn"
            type="submit"
            disabled={!customDeedText.trim()}
            className={`px-6 py-3 rounded-2xl font-extrabold text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all shadow-xs shrink-0 ${
              customDeedText.trim()
                ? isCalmMode
                  ? 'bg-[#344D76] hover:bg-[#24334A]'
                  : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
                : 'opacity-50 cursor-not-allowed bg-slate-400'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Add Good Deed</span>
          </button>
        </form>
      </div>

      {/* 1-Tap Preset Good Deeds Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-800">
              Tap Any Good Deed You Did Today
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">1-Tap to Log</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRESET_GOOD_DEEDS.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleAddPresetDeed(preset)}
              className={`p-3.5 rounded-2xl text-left border transition-all flex items-start gap-3 bg-white shadow-2xs hover:shadow-sm group transform hover:-translate-y-0.5 ${
                isCalmMode ? 'border-[#99AFD7]/40 hover:border-[#344D76]' : 'border-[#93c5fd]/50 hover:border-[#1e3a8a]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                {preset.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#1e3a8a] leading-tight">
                  {preset.title}
                </p>
                <span className="inline-block mt-1 text-3xs font-semibold text-slate-500 uppercase">
                  + Log this deed
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Today's Logged Deeds List */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
              Today's Deeds Journal ({todayDeeds.length})
            </h2>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('today')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                activeCategoryFilter === 'today'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Today ({todayDeeds.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('history')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                activeCategoryFilter === 'history'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Time ({deeds.length})
            </button>
          </div>
        </div>

        {deeds.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center text-slate-500 space-y-2 border border-slate-200">
            <p className="text-sm font-bold">No good deeds logged yet today!</p>
            <p className="text-xs text-slate-400">
              Tap any of the friendly buttons above or type in what kind thing you did.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {(activeCategoryFilter === 'today' ? todayDeeds : deeds).map((deed) => (
              <div
                key={deed.id}
                onClick={() => handleToggleDeed(deed.id)}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer bg-white ${
                  deed.isCompleted
                    ? 'border-emerald-200 bg-emerald-50/40 shadow-2xs'
                    : 'border-slate-200 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      deed.isCompleted ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300'
                    }`}
                  >
                    {deed.isCompleted ? '✓' : ''}
                  </div>

                  <span className="text-xl shrink-0">{deed.emoji}</span>

                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-extrabold text-slate-900 leading-tight ${
                        deed.isCompleted ? '' : 'line-through text-slate-500'
                      }`}
                    >
                      {deed.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 text-3xs text-slate-500">
                      <span>{deed.dateKey}</span>
                      <span>•</span>
                      <span>{deed.timestamp}</span>
                      {deed.category && (
                        <>
                          <span>•</span>
                          <span className="uppercase font-bold text-emerald-700">{deed.category}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakText(deed.title);
                    }}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    title="Listen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleDeleteDeed(deed.id, e)}
                    className="p-2 rounded-xl text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                    title="Delete deed"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
