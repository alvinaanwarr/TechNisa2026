import React, { useState } from 'react';
import { StoryContent, FavoriteItem } from '../../types';
import { AudioPlayer } from '../AudioPlayer';
import { DynamicIcon } from '../DynamicIcon';
import { MICRO_STORIES_5_SCENES } from '../../data/microStoriesData';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../services/storageService';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  HelpCircle,
  Layers,
  Heart,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StoryViewProps {
  content: StoryContent;
  isCalmMode: boolean;
  onTryAnotherFormat?: () => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  content,
  isCalmMode,
  onTryAnotherFormat
}) => {
  const [storyMode, setStoryMode] = useState<'micro' | 'chapters'>('micro');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentMicroIndex, setCurrentMicroIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const [favorites, setFavorites] = useLocalStorage<FavoriteItem[]>(STORAGE_KEYS.FAVORITES, []);

  const isFavorite = favorites.some((f) => f.title === content.title);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites((prev) => prev.filter((f) => f.title !== content.title));
    } else {
      const newFav: FavoriteItem = {
        id: `fav-${Date.now()}`,
        type: 'story',
        title: content.title,
        subtitle: content.theme || 'Story Mode',
        iconName: 'BookOpen',
        addedAt: new Date().toLocaleDateString()
      };
      setFavorites((prev) => [newFav, ...prev]);
    }
  };

  // Find matching 5-scene micro story or fallback to Yunus/first
  const matchingMicroStory =
    MICRO_STORIES_5_SCENES.find(
      (m) =>
        content.title.toLowerCase().includes(m.prophetOrTopic.toLowerCase()) ||
        m.prophetOrTopic.toLowerCase().includes(content.title.toLowerCase())
    ) || MICRO_STORIES_5_SCENES[0];

  const slides = content.slides || [];
  const currentSlide = slides[currentSlideIndex] || slides[0];
  const totalSlides = slides.length;

  const currentMicroScene = matchingMicroStory.scenes[currentMicroIndex];
  const totalMicroScenes = matchingMicroStory.scenes.length;

  const handleNext = () => {
    if (storyMode === 'micro') {
      if (currentMicroIndex < totalMicroScenes - 1) {
        setCurrentMicroIndex((prev) => prev + 1);
      } else {
        setIsFinished(true);
        if (!isCalmMode) {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        }
      }
    } else {
      if (currentSlideIndex < totalSlides - 1) {
        setCurrentSlideIndex((prev) => prev + 1);
      } else {
        setIsFinished(true);
        if (!isCalmMode) {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        }
      }
    }
  };

  const handlePrev = () => {
    if (isFinished) {
      setIsFinished(false);
    } else if (storyMode === 'micro' && currentMicroIndex > 0) {
      setCurrentMicroIndex((prev) => prev - 1);
    } else if (storyMode === 'chapters' && currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentSlideIndex(0);
    setCurrentMicroIndex(0);
    setIsFinished(false);
  };

  const currentSpeechText = isFinished
    ? storyMode === 'micro'
      ? `Lesson: ${matchingMicroStory.singleLesson}`
      : `${content.conclusion}. Reflection question: ${content.reflectionQuestion}`
    : storyMode === 'micro'
    ? `Scene ${currentMicroScene.sceneNumber}: ${currentMicroScene.title}. ${currentMicroScene.sentence}`
    : `${currentSlide.title}. ${currentSlide.text}. Islamic teaching: ${currentSlide.islamicTeaching}. ${currentSlide.actionPrompt || ''}`;

  return (
    <div id="story-mode-container" className="space-y-6 max-w-4xl mx-auto">
      {/* Header Info Bar */}
      <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-[2rem] p-4 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold mb-1 border border-purple-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>📖 {storyMode === 'micro' ? '5-Scene Micro-Story' : 'Full Chapters Mode'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            {storyMode === 'micro' ? matchingMicroStory.title : content.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Switch between 5-Scene Micro Mode and Chapters Mode */}
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              type="button"
              onClick={() => {
                setStoryMode('micro');
                setIsFinished(false);
              }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                storyMode === 'micro'
                  ? 'bg-purple-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌟 5-Scene Micro Story
            </button>
            <button
              type="button"
              onClick={() => {
                setStoryMode('chapters');
                setIsFinished(false);
              }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                storyMode === 'chapters'
                  ? 'bg-purple-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📚 Chapters
            </button>
          </div>

          <button
            type="button"
            onClick={toggleFavorite}
            className={`p-2.5 rounded-2xl border transition-all ${
              isFavorite
                ? 'bg-rose-50 border-rose-300 text-rose-600'
                : 'bg-white border-slate-200 text-slate-400 hover:text-rose-500'
            }`}
            title="Save to Favourites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <AudioPlayer textToRead={currentSpeechText} isCalmMode={isCalmMode} />
        </div>
      </div>

      {/* Main Story Stage */}
      {!isFinished ? (
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-10 shadow-sm relative overflow-hidden space-y-6">
          {/* Mode 1: 5-Scene Micro Story (High Visual Anchor, 1 Short Sentence, 1 Clear Lesson) */}
          {storyMode === 'micro' ? (
            <div className="space-y-6">
              {/* Scene Progress Bar */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 bg-purple-100 text-purple-900 font-extrabold text-xs rounded-full border border-purple-200">
                    Scene {currentMicroIndex + 1} of 5
                  </span>
                  <span className="text-sm font-bold text-slate-700">
                    {currentMicroScene.title}
                  </span>
                </div>

                {/* 5 Visual Scene Buttons */}
                <div className="flex items-center gap-2">
                  {matchingMicroStory.scenes.map((sc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentMicroIndex(idx)}
                      className={`w-9 h-9 rounded-2xl text-base flex items-center justify-center transition-all ${
                        idx === currentMicroIndex
                          ? 'bg-purple-600 text-white scale-110 shadow-xs ring-2 ring-purple-300'
                          : idx < currentMicroIndex
                          ? 'bg-purple-100 text-slate-800'
                          : 'bg-slate-100 text-slate-400 opacity-60'
                      }`}
                    >
                      {sc.emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scene Large Display Card */}
              <div className="text-center py-6 sm:py-8 space-y-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-purple-50 border-2 border-purple-200 flex items-center justify-center mx-auto text-5xl sm:text-6xl shadow-2xs">
                  {currentMicroScene.emoji}
                </div>

                <div className="space-y-3 max-w-xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    {currentMicroScene.title}
                  </h3>
                  <p className="text-lg sm:text-2xl font-bold text-purple-950 leading-relaxed sm:leading-loose bg-purple-50/60 p-6 rounded-3xl border border-purple-100">
                    "{currentMicroScene.sentence}"
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Mode 2: Full Chapters Mode */
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-100/90 text-slate-700 font-bold text-xs rounded-full border border-slate-200">
                    Chapter {currentSlideIndex + 1} of {totalSlides}
                  </span>
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    • {currentSlide.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === currentSlideIndex
                          ? 'w-8 bg-purple-600'
                          : idx < currentSlideIndex
                          ? 'w-3 bg-purple-200'
                          : 'w-3 bg-slate-200'
                      }`}
                      aria-label={`Jump to Chapter ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Content Card */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0 shadow-2xs border border-purple-200">
                    <DynamicIcon name={currentSlide.iconName || 'Sparkles'} className="w-8 h-8 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {currentSlide.title}
                    </h3>
                    {currentSlide.interestConnection && (
                      <p className="text-xs text-purple-700 font-semibold mt-0.5">
                        ✨ {currentSlide.interestConnection}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 bg-[#FDFCF9]/90 rounded-[2rem] border border-slate-200/80 text-slate-800 text-base sm:text-lg leading-relaxed sm:leading-loose backdrop-blur-xs">
                  {currentSlide.text}
                </div>

                <div className="p-4 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-2xl flex items-start gap-3 backdrop-blur-xs">
                  <Sparkles className="w-5 h-5 text-[#7B9A7A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#4A6349] uppercase tracking-wider block">
                      Islamic Principle
                    </span>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      {currentSlide.islamicTeaching}
                    </p>
                  </div>
                </div>

                {currentSlide.actionPrompt && (
                  <div className="p-4 bg-[#FCE8D5]/90 border border-[#FCE8D5] rounded-2xl text-[#D97706] text-sm font-medium flex items-center gap-3 backdrop-blur-xs">
                    <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span><strong className="text-slate-900">Try this:</strong> {currentSlide.actionPrompt}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bottom Action Controls */}
          <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
            <button
              id="story-prev-btn"
              type="button"
              onClick={handlePrev}
              disabled={storyMode === 'micro' ? currentMicroIndex === 0 : currentSlideIndex === 0}
              className={`px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors border ${
                (storyMode === 'micro' ? currentMicroIndex === 0 : currentSlideIndex === 0)
                  ? 'opacity-40 cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                  : 'bg-white/80 text-slate-700 border-slate-300 hover:bg-white shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous {storyMode === 'micro' ? 'Scene' : 'Chapter'}</span>
            </button>

            <button
              id="story-next-btn"
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm rounded-full shadow-xs flex items-center gap-2 transition-colors"
            >
              <span>
                {storyMode === 'micro'
                  ? currentMicroIndex === totalMicroScenes - 1
                    ? 'See Final Lesson ✨'
                    : 'Next Scene'
                  : currentSlideIndex === totalSlides - 1
                  ? 'Finish Story ✨'
                  : 'Next Chapter'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Finished Story Card */
        <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 sm:p-10 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mx-auto shadow-2xs border border-purple-200 text-3xl">
            🌟
          </div>

          <div>
            <span className="px-3.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full border border-purple-200">
              🌟 Story Completed!
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 font-heading">
              Alhamdulillah! Wonderful Story Reflection!
            </h3>
          </div>

          {/* Core Takeaway Lesson */}
          <div className="p-6 bg-[#E8F1E7]/90 border border-[#7B9A7A]/30 rounded-[2rem] max-w-xl mx-auto text-slate-800 text-left space-y-2 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4A6349] uppercase">
              <Lightbulb className="w-4 h-4 text-[#7B9A7A]" />
              <span>One Key Takeaway Lesson:</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
              "{storyMode === 'micro' ? matchingMicroStory.singleLesson : content.conclusion}"
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="story-read-again-btn"
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 bg-white/80 border border-slate-300 hover:bg-white text-slate-700 font-bold text-sm rounded-full flex items-center gap-2 shadow-2xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Read Story Again</span>
            </button>

            {onTryAnotherFormat && (
              <button
                id="story-try-another-format-btn"
                type="button"
                onClick={onTryAnotherFormat}
                className="px-6 py-2.5 bg-[#7B9A7A] hover:bg-[#6c8c6b] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-xs"
              >
                <span>Try Step-by-Step Mode</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
