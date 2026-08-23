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
          ? 'bg-[#869EC9] text-white border-[#728CB6] shadow-xs'
          : 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/50 hover:bg-[#DCE5F4] hover:border-[#99AFD7]'
      } ${className}`}
    >
      <Feather className={`w-3.5 h-3.5 ${isCalmMode ? 'text-white' : 'text-[#5D7CAE]'}`} />
      <span className="font-bold whitespace-nowrap">
        {isCalmMode ? 'Calm: ON' : 'Calm Mode'}
      </span>
    </button>
  );
};
