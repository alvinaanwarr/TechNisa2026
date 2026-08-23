import React from 'react';
import { Feather } from 'lucide-react';

interface CalmModeToggleProps {
  isCalmMode: boolean;
  onToggle: (enabled: boolean) => void;
  className?: string;
}

export const CalmModeToggle: React.FC<CalmModeToggleProps> = ({
  isCalmMode,
  onToggle,
  className = ''
}) => {
  return (
    <button
      id="calm-mode-toggle-btn"
      type="button"
      onClick={() => onToggle(!isCalmMode)}
      aria-pressed={isCalmMode}
      title={isCalmMode ? 'Calm Mode is ON (Sensory-friendly, no animations, minimal clutter)' : 'Turn ON Calm Mode (Sensory-friendly)'}
      className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-medium text-xs transition-all border shadow-2xs ${
        isCalmMode
          ? 'bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-xs'
          : 'bg-[#bfdbfe] text-[#1e3a8a] border-[#7dd3fc] hover:bg-[#93c5fd] hover:border-[#60a5fa]'
      } ${className}`}
    >
      <Feather className={`w-3.5 h-3.5 ${isCalmMode ? 'text-white' : 'text-[#1e3a8a]'}`} />
      <span className="font-bold whitespace-nowrap">
        {isCalmMode ? 'Calm: ON' : 'Calm Mode'}
      </span>
    </button>
  );
};
