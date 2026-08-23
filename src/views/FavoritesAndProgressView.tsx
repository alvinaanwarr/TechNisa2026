import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../services/storageService';
import { FavoriteItem, GoodDeedLogItem, LessonData } from '../types';
import { speakText } from '../utils/speech';
import {
  Heart,
  Award,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Layers,
  Star,
  Trash2,
  Calendar,
  ArrowRight,
  Flame,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FavoritesAndProgressViewProps {
  isCalmMode: boolean;
  onNavigate: (view: string) => void;
  onLoadLesson?: (lesson: any) => void;
}

export const FavoritesAndProgressView: React.FC<FavoritesAndProgressViewProps> = ({
  isCalmMode,
  onNavigate,
  onLoadLesson
}) => {
  const [activeTab, setActiveTab] = useState<'favorites' | 'progress'>('favorites');
  const [favorites, setFavorites] = useLocalStorage<FavoriteItem[]>(STORAGE_KEYS.FAVORITES, [
    {
      id: 'fav-yunus',
      type: 'prophet',
      title: 'Hazrat Yunus AS & The Whale',
      subtitle: '5-Scene Micro Story • Turning to Allah in fear or mistakes',
      iconName: 'Compass',
      addedAt: 'Recently Saved'
    },
    {
      id: 'fav-dhikr-3',
      type: 'dhikr',
      title: 'Alhamdulillah (All Praise to Allah)',
      subtitle: 'Daily Remembrance • Saying when feeling happy or grateful',
      iconName: 'Sun',
      addedAt: 'Recently Saved'
    },
    {
      id: 'fav-salah',
      type: 'lesson',
      title: 'How to Pray Salah (5 Daily Prayers)',
      subtitle: 'Interactive Step Cards • Tactile 1-step checkpoints',
      iconName: 'Sparkles',
      addedAt: 'Recently Saved'
    }
  ]);

  const [deeds] = useLocalStorage<GoodDeedLogItem[]>(STORAGE_KEYS.GOOD_DEEDS_LOG, []);
  const completedDeedsCount = deeds.filter((d) => d.isCompleted).length;

  const handleRemoveFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const handleTriggerCelebration = () => {
    if (!isCalmMode) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    speakText('Masha\'Allah! Look at all the wonderful progress you have made learning Islam!');
  };

  return (
    <div id="favorites-progress-container" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header with Switcher Tabs */}
      <div
        className={`rounded-[2.5rem] p-6 sm:p-8 shadow-sm border transition-colors ${
          isCalmMode ? 'bg-white/90 border-[#99AFD7]/40' : 'bg-white/90 border-[#93c5fd]/50'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                  isCalmMode
                    ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/40'
                    : 'bg-[#bae6fd] text-[#1e3a8a] border-[#7dd3fc]'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Learner Hub</span>
              </div>
              <span
                className={`text-2xs font-semibold px-2.5 py-0.5 rounded-full border ${
                  isCalmMode ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-amber-100 text-amber-900 border-amber-300'
                }`}
              >
                Zero-Pressure Celebration
              </span>
            </div>

            <h1 className={`text-2xl sm:text-4xl font-extrabold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
              {activeTab === 'favorites' ? 'My Saved Favourites' : 'My Learning Progress & Deeds'}
            </h1>
            <p className={`text-xs sm:text-base leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/80'}`}>
              Review your favorite comforting stories, step cards, and daily good deeds in one uncluttered space.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === 'favorites'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white shadow-xs'
                    : 'bg-[#1e3a8a] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Favourites ({favorites.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('progress')}
              className={`px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === 'progress'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white shadow-xs'
                    : 'bg-[#1e3a8a] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Progress & Deeds</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: FAVORITES */}
      {activeTab === 'favorites' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
              Your Saved Learning Materials
            </h2>
            <span className="text-xs text-slate-500">{favorites.length} Items Bookmarked</span>
          </div>

          {favorites.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 space-y-3">
              <Heart className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-800 text-base">No favourites saved yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Tap the heart icon on any prophet story, lesson, or Dhikr card to save it here for fast 1-tap access!
              </p>
              <button
                type="button"
                onClick={() => onNavigate('prophets')}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold shadow-xs hover:bg-blue-700 transition-colors"
              >
                Browse 25 Prophet Stories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {favorites.map((fav) => (
                <div
                  key={fav.id}
                  onClick={() => {
                    if (fav.type === 'prophet') onNavigate('prophets');
                    else onNavigate('lesson');
                  }}
                  className={`p-5 rounded-2xl border bg-white shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group ${
                    isCalmMode ? 'border-[#99AFD7]/40 hover:border-[#344D76]' : 'border-[#93c5fd]/50 hover:border-[#1e3a8a]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                        {fav.type}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleRemoveFavorite(fav.id, e)}
                        className="p-1 rounded-lg text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                        title="Remove from favorites"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-700 leading-snug">
                        {fav.title}
                      </h3>
                      {fav.subtitle && (
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                          {fav.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-2xs font-extrabold text-blue-600">
                    <span>Open & Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PROGRESS & DEEDS */}
      {activeTab === 'progress' && (
        <div className="space-y-6">
          {/* Progress Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className={`p-6 rounded-[2rem] border text-center space-y-2 bg-white ${
                isCalmMode ? 'border-[#99AFD7]/40' : 'border-[#93c5fd]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto text-xl">
                🌟
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {completedDeedsCount}
              </div>
              <p className="text-xs font-bold text-slate-600">Good Deeds Logged</p>
            </div>

            <div
              className={`p-6 rounded-[2rem] border text-center space-y-2 bg-white ${
                isCalmMode ? 'border-[#99AFD7]/40' : 'border-[#93c5fd]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto text-xl">
                📿
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">8 Steps</div>
              <p className="text-xs font-bold text-slate-600">Dhikr Practice Completed</p>
            </div>

            <div
              className={`p-6 rounded-[2rem] border text-center space-y-2 bg-white ${
                isCalmMode ? 'border-[#99AFD7]/40' : 'border-[#93c5fd]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center mx-auto text-xl">
                👑
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">25 Stories</div>
              <p className="text-xs font-bold text-slate-600">Prophet Heritage Library</p>
            </div>
          </div>

          {/* Celebratory Cheer Button */}
          <div
            className={`rounded-[2rem] p-6 text-center space-y-4 border ${
              isCalmMode ? 'bg-[#E8EEF8]/60 border-[#99AFD7]/40' : 'bg-[#bae6fd]/30 border-[#93c5fd]'
            }`}
          >
            <h3 className="text-lg font-bold text-slate-900">
              Celebrate Every Effort with Allah's Blessings
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              In Islam, Allah rewards the intention, effort, and every single step of neurodivergent learners.
            </p>
            <button
              id="cheer-progress-btn"
              type="button"
              onClick={handleTriggerCelebration}
              className={`px-6 py-3 rounded-full font-extrabold text-xs sm:text-sm text-white shadow-xs transition-all ${
                isCalmMode ? 'bg-[#344D76] hover:bg-[#24334A]' : 'bg-[#1e3a8a] hover:bg-[#60a5fa]'
              }`}
            >
              <span>🎉 Celebrate My Effort!</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
