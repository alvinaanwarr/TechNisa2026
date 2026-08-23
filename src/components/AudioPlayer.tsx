import React, { useState, useEffect } from 'react';
import { Volume2, Pause, Play, RotateCcw, Sparkles } from 'lucide-react';
import {
  speakText,
  stopSpeech,
  pauseSpeech,
  resumeSpeech,
  registerSpeechListener,
  unregisterSpeechListener
} from '../utils/speech';

interface AudioPlayerProps {
  textToRead: string;
  label?: string;
  isCalmMode?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showVoiceBadge?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  textToRead,
  label = 'Read to Me',
  isCalmMode = false,
  className = '',
  size = 'md',
  showVoiceBadge = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    registerSpeechListener((speaking, paused) => {
      setIsPlaying(speaking && !paused);
      setIsPaused(paused);
    });

    return () => {
      stopSpeech();
      unregisterSpeechListener();
    };
  }, []);

  const handleToggle = () => {
    if (isPlaying) {
      pauseSpeech();
      setIsPlaying(false);
      setIsPaused(true);
    } else if (isPaused) {
      resumeSpeech();
      setIsPlaying(true);
      setIsPaused(false);
    } else {
      speakText(textToRead, {
        isCalmMode,
        rate: isCalmMode ? 0.83 : 0.90,
        pitch: isCalmMode ? 1.0 : 1.06,
        onEnd: () => {
          setIsPlaying(false);
          setIsPaused(false);
        }
      });
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopSpeech();
    speakText(textToRead, {
      isCalmMode,
      rate: isCalmMode ? 0.83 : 0.90,
      pitch: isCalmMode ? 1.0 : 1.06,
      onEnd: () => {
        setIsPlaying(false);
        setIsPaused(false);
      }
    });
    setIsPlaying(true);
    setIsPaused(false);
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base'
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className={`inline-flex items-center gap-1.5 flex-wrap ${className}`}>
      <button
        id="audio-read-to-me-btn"
        type="button"
        onClick={handleToggle}
        className={`inline-flex items-center gap-2 rounded-full font-bold transition-all border shadow-2xs ${
          isPlaying
            ? 'bg-[#5C7CFA] text-white border-[#4A68DB] hover:bg-[#4A68DB] shadow-xs'
            : isPaused
            ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
            : 'bg-[#F0F4FF] text-[#5C7CFA] border-[#5C7CFA]/30 hover:bg-[#e2ecff]'
        } ${sizeClasses[size]}`}
        title={isPlaying ? 'Pause narration' : isPaused ? 'Resume narration' : 'Listen with natural voice and Arabic pronunciations'}
      >
        {isPlaying ? (
          <>
            <Pause className={iconSizes[size]} />
            <span>Pause Audio</span>
            {/* Equalizer Soundwave Animation */}
            <span className="flex items-center gap-0.5 ml-0.5">
              <span className={`w-1 bg-white rounded-full ${isCalmMode ? 'h-2 animate-pulse duration-1000' : 'h-3 animate-pulse'}`} />
              <span className={`w-1 bg-white rounded-full ${isCalmMode ? 'h-3 animate-pulse delay-150 duration-1000' : 'h-4.5 animate-pulse delay-75'}`} />
              <span className={`w-1 bg-white rounded-full ${isCalmMode ? 'h-2 animate-pulse delay-300 duration-1000' : 'h-2.5 animate-pulse delay-150'}`} />
            </span>
          </>
        ) : isPaused ? (
          <>
            <Play className={`${iconSizes[size]} text-amber-700`} />
            <span>Resume</span>
          </>
        ) : (
          <>
            <Volume2 className={`${iconSizes[size]} text-[#5C7CFA]`} />
            <span>{label}</span>
          </>
        )}
      </button>

      {(isPlaying || isPaused) && (
        <button
          id="audio-restart-btn"
          type="button"
          onClick={handleRestart}
          title="Restart audio from beginning"
          className="p-2 rounded-full bg-white/90 backdrop-blur-xs text-slate-600 hover:text-slate-900 hover:bg-white border border-slate-200 shadow-2xs transition-colors"
          aria-label="Restart audio from beginning"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      )}

      {showVoiceBadge && (
        <span className="inline-flex items-center gap-1 text-2xs text-stone-500 font-semibold bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200/70">
          <Sparkles className="w-3 h-3 text-[#7B9A7A]" />
          <span>Natural Voice • Arabic Pronunciation</span>
        </span>
      )}
    </div>
  );
};