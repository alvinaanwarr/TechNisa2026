import React, { useState, useMemo } from 'react';

export type CharacterTheme = 'princess' | 'chase' | 'bluey' | 'astronaut' | 'superhero' | 'sheep' | 'nature';

export const RANDOM_ENCOURAGEMENT_MESSAGES = [
  "You are doing wonderful practicing this part!",
  "MashaAllah! You are doing such an amazing job!",
  "SubhanAllah, look how focused and gentle you are!",
  "Take your time, you are doing fantastic with this step!",
  "Bismillah! You are making great progress step by step!",
  "Allah loves your sincere effort — keep up the awesome work!",
  "Super job! Take a calm breath and smile, you got this!",
  "You're a star learner! Every little step counts!",
  "MashaAllah, you are learning with such care and patience!",
  "High five! You are doing an incredible job today!",
  "Keep going! Your effort brings so much barakah and joy!",
  "Wonderful work! You are practicing like a true champion!",
  "Peaceful and steady! You are doing beautifully!",
  "MashaAllah, Allah sees your kind heart and great effort!"
];

export function getRandomCompanionMessage(stepNumber?: number, seed?: number): string {
  const list = RANDOM_ENCOURAGEMENT_MESSAGES;
  let idx: number;
  if (typeof seed === 'number') {
    idx = Math.abs(seed) % list.length;
  } else {
    idx = Math.floor(Math.random() * list.length);
  }
  const msg = list[idx];
  return stepNumber ? `Step ${stepNumber}: ${msg}` : msg;
}

interface CartoonCompanionProps {
  theme?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  actionMessage?: string;
  stepNumber?: number;
  className?: string;
  interactive?: boolean;
  onSelectTheme?: (theme: CharacterTheme) => void;
}

export function detectCharacterTheme(interestString?: string): CharacterTheme {
  const str = (interestString || '').toLowerCase();
  if (str.includes('princess') || str.includes('castle') || str.includes('tiara') || str.includes('royal')) {
    return 'princess';
  }
  if (str.includes('chase') || str.includes('paw patrol') || str.includes('puppy') || str.includes('dog') && str.includes('patrol')) {
    return 'chase';
  }
  if (str.includes('bluey') || str.includes('bingo') || str.includes('heeler')) {
    return 'bluey';
  }
  if (str.includes('space') || str.includes('astronaut') || str.includes('rocket') || str.includes('planet')) {
    return 'astronaut';
  }
  if (str.includes('superhero') || str.includes('hero') || str.includes('power') || str.includes('cape')) {
    return 'superhero';
  }
  if (str.includes('sheep') || str.includes('hajj') || str.includes('eid') || str.includes('animal') || str.includes('lamb')) {
    return 'sheep';
  }
  return 'princess'; // Default friendly princess/character
}

export const CartoonCompanion: React.FC<CartoonCompanionProps> = ({
  theme,
  size = 'md',
  actionMessage,
  stepNumber,
  className = '',
  interactive = false,
  onSelectTheme
}) => {
  const activeTheme = theme ? detectCharacterTheme(theme) : 'princess';
  const [randomBonusIndex, setRandomBonusIndex] = useState(0);

  const displayMessage = useMemo(() => {
    if (actionMessage) return actionMessage;
    const msg = RANDOM_ENCOURAGEMENT_MESSAGES[randomBonusIndex % RANDOM_ENCOURAGEMENT_MESSAGES.length];
    return stepNumber ? `Step ${stepNumber}: ${msg}` : msg;
  }, [actionMessage, stepNumber, randomBonusIndex]);

  const handleShuffleCheer = () => {
    setRandomBonusIndex((prev) => prev + 1);
  };

  const sizeDimensions = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36'
  }[size];

  const renderCharacterIllustration = (t: CharacterTheme) => {
    switch (t) {
      case 'princess':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Soft Glow */}
            <circle cx="60" cy="60" r="54" fill="#FDF2F8" stroke="#F472B6" strokeWidth="2.5" />
            {/* Castle Turret in BG */}
            <path d="M22 65V45L28 40L34 45V65H22Z" fill="#FBCFE8" stroke="#F472B6" strokeWidth="1.5" />
            <path d="M86 65V45L92 40L98 45V65H86Z" fill="#FBCFE8" stroke="#F472B6" strokeWidth="1.5" />
            {/* Princess Hair Back */}
            <path d="M38 48C38 32 82 32 82 48C82 68 86 86 86 92C78 96 42 96 34 92C34 86 38 68 38 48Z" fill="#92400E" />
            {/* Princess Dress */}
            <path d="M42 82L32 110H88L78 82H42Z" fill="#EC4899" />
            <path d="M50 82L44 110H76L70 82H50Z" fill="#F472B6" />
            {/* Neck & Face */}
            <rect x="54" y="68" width="12" height="15" rx="3" fill="#FBD5C6" />
            <circle cx="60" cy="56" r="18" fill="#FDE2D8" />
            {/* Hair Front Bangs */}
            <path d="M44 48C48 40 72 40 76 48C72 44 48 44 44 48Z" fill="#B45309" />
            <path d="M42 50C44 58 43 65 41 68" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M78 50C76 58 77 65 79 68" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
            {/* Sparkling Gold Tiara */}
            <path d="M48 40L53 45L60 35L67 45L72 40L70 47H50L48 40Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
            <circle cx="60" cy="38" r="2.5" fill="#EF4444" />
            <circle cx="53" cy="43" r="1.5" fill="#3B82F6" />
            <circle cx="67" cy="43" r="1.5" fill="#10B981" />
            {/* Cute Cartoon Eyes */}
            <circle cx="54" cy="55" r="3" fill="#1E293B" />
            <circle cx="53" cy="54" r="1" fill="#FFFFFF" />
            <circle cx="66" cy="55" r="3" fill="#1E293B" />
            <circle cx="65" cy="54" r="1" fill="#FFFFFF" />
            {/* Cheeks & Smile */}
            <circle cx="50" cy="60" r="2.5" fill="#F472B6" opacity="0.6" />
            <circle cx="70" cy="60" r="2.5" fill="#F472B6" opacity="0.6" />
            <path d="M57 62C58 64 62 64 63 62" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" />
            {/* Sparkles */}
            <path d="M96 28L98 32L102 34L98 36L96 40L94 36L90 34L94 32L96 28Z" fill="#F59E0B" />
            <path d="M18 30L19.5 33L22.5 34.5L19.5 36L18 39L16.5 36L13.5 34.5L16.5 33L18 30Z" fill="#EC4899" />
          </svg>
        );

      case 'chase':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Soft Glow */}
            <circle cx="60" cy="60" r="54" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2.5" />
            {/* Police Pup Hat */}
            <ellipse cx="60" cy="40" rx="26" ry="12" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="2" />
            <path d="M42 38C42 26 78 26 78 38H42Z" fill="#1E40AF" />
            <path d="M36 43C42 45 78 45 84 43C86 46 80 50 60 50C40 50 34 46 36 43Z" fill="#1D4ED8" />
            {/* Gold Police Badge on Hat */}
            <path d="M60 27L65 31L63 38L60 41L57 38L55 31L60 27Z" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
            <circle cx="60" cy="34" r="2" fill="#1E3A8A" />
            {/* Pup Ears */}
            <path d="M34 46C26 50 20 62 26 74C30 80 36 78 38 68L36 52" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
            <path d="M86 46C94 50 100 62 94 74C90 80 84 78 82 68L84 52" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
            {/* Pup Head */}
            <ellipse cx="60" cy="64" rx="22" ry="20" fill="#92400E" />
            {/* Pup Snout & Chin */}
            <ellipse cx="60" cy="72" rx="13" ry="10" fill="#FDE68A" />
            <ellipse cx="60" cy="67" rx="5" ry="3.5" fill="#1E293B" />
            <path d="M60 70V74M56 74C58 76 62 76 64 74" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
            {/* Cute Puppy Eyes */}
            <circle cx="51" cy="59" r="4.5" fill="#7C2D12" />
            <circle cx="51" cy="59" r="3" fill="#1E293B" />
            <circle cx="50" cy="58" r="1.2" fill="#FFFFFF" />
            <circle cx="69" cy="59" r="4.5" fill="#7C2D12" />
            <circle cx="69" cy="59" r="3" fill="#1E293B" />
            <circle cx="68" cy="58" r="1.2" fill="#FFFFFF" />
            {/* Blue Rescue Vest & Star Collar */}
            <path d="M44 82L38 110H82L76 82H44Z" fill="#2563EB" />
            <path d="M50 82L47 110H73L70 82H50Z" fill="#1D4ED8" />
            <circle cx="60" cy="88" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            <path d="M60 85L61.5 88L64 88.5L62 90.5L62.5 93L60 91.5L57.5 93L58 90.5L56 88.5L58.5 88L60 85Z" fill="#FFFFFF" />
          </svg>
        );

      case 'bluey':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Soft Glow */}
            <circle cx="60" cy="60" r="54" fill="#F0F9FF" stroke="#38BDF8" strokeWidth="2.5" />
            {/* Bluey Heeler Ears */}
            <path d="M38 46L44 22L58 40" fill="#0284C7" stroke="#0369A1" strokeWidth="2" strokeLinejoin="round" />
            <path d="M44 38L47 28L54 38" fill="#BAE6FD" />
            <path d="M82 46L76 22L62 40" fill="#0284C7" stroke="#0369A1" strokeWidth="2" strokeLinejoin="round" />
            <path d="M76 38L73 28L66 38" fill="#BAE6FD" />
            {/* Bluey Head Blocky Oval */}
            <rect x="36" y="38" width="48" height="42" rx="14" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
            {/* Dark Blue Spot on Eyebrow */}
            <path d="M36 48C36 42 46 38 56 42C48 50 42 56 36 48Z" fill="#0369A1" />
            {/* Light Yellow Muzzle */}
            <ellipse cx="60" cy="65" rx="16" ry="12" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.5" />
            {/* Big Black Nose */}
            <ellipse cx="60" cy="59" rx="6" ry="4.5" fill="#0F172A" />
            <ellipse cx="58" cy="58" rx="1.5" ry="1" fill="#FFFFFF" />
            {/* Happy Doggy Mouth */}
            <path d="M54 67C56 71 64 71 66 67" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
            {/* Big Cartoon Eyes */}
            <ellipse cx="50" cy="50" rx="5" ry="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <circle cx="51" cy="50" r="3" fill="#0F172A" />
            <circle cx="50" cy="49" r="1" fill="#FFFFFF" />
            <ellipse cx="70" cy="50" rx="5" ry="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <circle cx="69" cy="50" r="3" fill="#0F172A" />
            <circle cx="68" cy="49" r="1" fill="#FFFFFF" />
            {/* Body */}
            <path d="M42 80L38 110H82L78 80H42Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
            <ellipse cx="60" cy="95" rx="12" ry="10" fill="#BAE6FD" />
            {/* Wagging Tail Hint */}
            <path d="M82 92C92 88 98 94 96 102" stroke="#0369A1" strokeWidth="5" strokeLinecap="round" />
          </svg>
        );

      case 'astronaut':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="54" fill="#0F172A" stroke="#818CF8" strokeWidth="2.5" />
            {/* Stars */}
            <circle cx="28" cy="30" r="1.5" fill="#FDE047" />
            <circle cx="92" cy="34" r="1.5" fill="#FDE047" />
            <circle cx="85" cy="85" r="1.5" fill="#38BDF8" />
            <circle cx="26" cy="80" r="1.5" fill="#A78BFA" />
            {/* Space Helmet */}
            <circle cx="60" cy="54" r="26" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
            {/* Reflective Visor */}
            <rect x="42" y="42" width="36" height="24" rx="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
            <path d="M46 46C52 44 68 44 74 46" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            {/* Cute smiling astronaut inside reflection */}
            <circle cx="53" cy="53" r="2" fill="#FFFFFF" />
            <circle cx="67" cy="53" r="2" fill="#FFFFFF" />
            <path d="M57 58C58 60 62 60 63 58" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            {/* Suit & Rocket Badge */}
            <path d="M40 80L34 110H86L80 80H40Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
            <rect x="52" y="86" width="16" height="14" rx="3" fill="#6366F1" />
            <path d="M60 88L64 93H56L60 88Z" fill="#FDE047" />
          </svg>
        );

      case 'superhero':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="54" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.5" />
            {/* Flying Cape */}
            <path d="M32 50L18 95L44 90L40 60" fill="#DC2626" />
            <path d="M88 50L102 95L76 90L80 60" fill="#DC2626" />
            {/* Hero Head */}
            <circle cx="60" cy="50" r="18" fill="#FDE2D8" />
            {/* Hero Mask */}
            <path d="M44 48C48 44 72 44 76 48C74 56 68 56 60 52C52 56 46 56 44 48Z" fill="#2563EB" />
            <ellipse cx="52" cy="49" rx="3" ry="2.5" fill="#FFFFFF" />
            <ellipse cx="68" cy="49" rx="3" ry="2.5" fill="#FFFFFF" />
            {/* Smile */}
            <path d="M56 58C58 61 62 61 64 58" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" />
            {/* Suit & Kindness Emblem */}
            <path d="M42 70L36 110H84L78 70H42Z" fill="#1D4ED8" />
            <path d="M60 74L70 82L60 94L50 82L60 74Z" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
            <path d="M60 78L65 83H55L60 78Z" fill="#DC2626" />
          </svg>
        );

      case 'sheep':
      default:
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="54" fill="#F0FDF4" stroke="#4ADE80" strokeWidth="2.5" />
            {/* Meadow Cloud */}
            <ellipse cx="60" cy="62" rx="32" ry="26" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
            {/* Fluffy Cloud Bumps */}
            <circle cx="38" cy="48" r="10" fill="#F8FAFC" />
            <circle cx="82" cy="48" r="10" fill="#F8FAFC" />
            <circle cx="48" cy="38" r="11" fill="#F8FAFC" />
            <circle cx="72" cy="38" r="11" fill="#F8FAFC" />
            <circle cx="60" cy="34" r="11" fill="#F8FAFC" />
            {/* Sheep Face */}
            <ellipse cx="60" cy="60" rx="14" ry="16" fill="#FBCFE8" />
            {/* Droopy Soft Ears */}
            <ellipse cx="44" cy="56" rx="6" ry="3.5" fill="#F472B6" transform="rotate(-20 44 56)" />
            <ellipse cx="76" cy="56" rx="6" ry="3.5" fill="#F472B6" transform="rotate(20 76 56)" />
            {/* Eyes */}
            <circle cx="54" cy="58" r="2.5" fill="#1E293B" />
            <circle cx="53" cy="57" r="1" fill="#FFFFFF" />
            <circle cx="66" cy="58" r="2.5" fill="#1E293B" />
            <circle cx="65" cy="57" r="1" fill="#FFFFFF" />
            {/* Nose & Smile */}
            <path d="M58 64H62M60 64V66M57 66C58 68 62 68 63 66" stroke="#9D174D" strokeWidth="1.5" strokeLinecap="round" />
            {/* Little Bell / Flower Garland for Eid/Hajj */}
            <circle cx="60" cy="84" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            <path d="M60 88V91" stroke="#D97706" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  const getThemeTitle = (t: CharacterTheme) => {
    switch (t) {
      case 'princess': return 'Princess Amira & Royal Castle';
      case 'chase': return 'Chase Rescue Hero Pup';
      case 'bluey': return 'Bluey Loving Explorer';
      case 'astronaut': return 'Astronaut Zayd Cosmos';
      case 'superhero': return 'Superhero Champion';
      case 'sheep': return 'Gentle Meadow Sheep (Eid & Hajj)';
      default: return 'Friendly Companion';
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3.5 ${className}`}>
      <div className={`relative shrink-0 ${sizeDimensions} transition-transform hover:scale-105`}>
        {renderCharacterIllustration(activeTheme)}
      </div>

      {displayMessage && (
        <div
          onClick={handleShuffleCheer}
          title="Tap for another encouragement cheer!"
          className="relative bg-white/95 backdrop-blur-xs border-2 border-amber-300/80 hover:border-amber-400 rounded-2xl px-4 py-2.5 shadow-sm text-left max-w-sm cursor-pointer transition-all hover:scale-[1.01]"
        >
          {/* Comic speech bubble tail */}
          <div className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-amber-300/80" />
          <div className="flex items-center justify-between gap-1.5 text-2xs font-extrabold uppercase tracking-wider text-amber-800 mb-0.5">
            <span>⭐ {getThemeTitle(activeTheme)}</span>
            <span className="text-3xs font-semibold text-amber-600 bg-amber-100/70 px-1.5 py-0.2 rounded-full">Tap to cheer 🎲</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
            {displayMessage}
          </p>
        </div>
      )}

      {interactive && onSelectTheme && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {(['princess', 'chase', 'bluey', 'superhero', 'astronaut', 'sheep'] as CharacterTheme[]).map((thm) => (
            <button
              key={thm}
              type="button"
              onClick={() => onSelectTheme(thm)}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all border ${
                activeTheme === thm
                  ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-2xs scale-105'
                  : 'bg-white/80 hover:bg-white text-slate-600 border-slate-200'
              }`}
            >
              {thm === 'princess' && '👑 Princess'}
              {thm === 'chase' && '🐾 Chase Pup'}
              {thm === 'bluey' && '🐕 Bluey'}
              {thm === 'superhero' && '🦸 Superhero'}
              {thm === 'astronaut' && '🚀 Astronaut'}
              {thm === 'sheep' && '🐑 Gentle Sheep'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};