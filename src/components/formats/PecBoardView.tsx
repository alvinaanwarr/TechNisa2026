import React, { useState } from 'react';
import { VisualContent, VisualCard } from '../../types';
import { DynamicIcon } from '../DynamicIcon';
import { CartoonCompanion, CharacterTheme } from '../CartoonCompanion';
import { speakText, stopSpeech } from '../../utils/speech';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../services/storageService';
import {
  Volume2,
  VolumeX,
  Plus,
  Trash2,
  Printer,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Scissors,
  ArrowRight,
  HelpCircle,
  Coffee,
  Heart,
  Hand,
  Layers,
  Check,
  Languages,
  BookOpen,
  Info,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sun,
  Shield,
  Key,
  Mountain,
  CircleDot
} from 'lucide-react';

export interface PecCardItem {
  id: string;
  stepNumber?: number; // Sequential Step indicator (1..8)
  label: string; // English term/action (e.g., "SubhanAllah", "Zakat", "Salah", "I Want", etc.)
  englishTranslation?: string; // Explicit English Translation (e.g., "Glory be to Allah (How Perfect Allah Is)", "Alms Tax / Charity")
  sublabel?: string; // Child-friendly concrete description/action
  arabic?: string; // Sacred Arabic script
  arabicTransliteration?: string; // Phonetic pronunciation
  iconName: string; // Visual picture coinciding with meaning
  category: 'lesson' | 'dhikr' | 'communication' | 'routine' | 'faith' | 'interest';
  color: string;
  characterTheme?: CharacterTheme;
}

interface PecBoardViewProps {
  content: VisualContent;
  isCalmMode: boolean;
}

export const CORE_COMMUNICATION_PECS: PecCardItem[] = [
  // 📿 STEP-BY-STEP DHIKR REMEMBRANCE CARDS (Sequential with meaning-matched images & clear English translations)
  {
    id: 'pec-dhikr-step-1',
    stepNumber: 1,
    label: 'Bismillah',
    englishTranslation: 'In the Name of Allah (Starting with Blessings)',
    sublabel: 'Say before eating, drinking, or starting any task to invite peace and safety.',
    arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    arabicTransliteration: 'Bismillah ir-Rahman ir-Raheem',
    iconName: 'BookOpen',
    category: 'dhikr',
    color: 'border-emerald-400 bg-emerald-50 text-emerald-800'
  },
  {
    id: 'pec-dhikr-step-2',
    stepNumber: 2,
    label: 'SubhanAllah',
    englishTranslation: 'Glory be to Allah (How Perfect & Flawless Allah Is)',
    sublabel: 'Say when admiring beautiful stars, cute animals, sunsets, and wonders.',
    arabic: 'سُبْحَانَ ٱللَّهِ',
    arabicTransliteration: 'SubhanAllah',
    iconName: 'Sparkles',
    category: 'dhikr',
    color: 'border-sky-400 bg-sky-50 text-sky-800'
  },
  {
    id: 'pec-dhikr-step-3',
    stepNumber: 3,
    label: 'Alhamdulillah',
    englishTranslation: 'All Praise and Thanks to Allah (Grateful Heart)',
    sublabel: 'Say when feeling happy, after meals, drinking water, or after sneezing.',
    arabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
    arabicTransliteration: 'Alhamdulillahi Rabbil \'Alameen',
    iconName: 'Sun',
    category: 'dhikr',
    color: 'border-amber-400 bg-amber-50 text-amber-800'
  },
  {
    id: 'pec-dhikr-step-4',
    stepNumber: 4,
    label: 'Allahu Akbar',
    englishTranslation: 'Allah is the Greatest (Bigger than Any Fear)',
    sublabel: 'Say during prayer and whenever you need calm courage against fear or worry.',
    arabic: 'ٱللَّهُ أَكْبَرُ',
    arabicTransliteration: 'Allahu Akbar',
    iconName: 'Shield',
    category: 'dhikr',
    color: 'border-blue-400 bg-blue-50 text-blue-800'
  },
  {
    id: 'pec-dhikr-step-5',
    stepNumber: 5,
    label: 'La ilaha illallah',
    englishTranslation: 'There is No God Except Allah (The Key to Jannah)',
    sublabel: 'The most sacred declaration of faith anchoring our heart to One Creator.',
    arabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
    arabicTransliteration: 'Laa ilaaha ill-Allah',
    iconName: 'Key',
    category: 'dhikr',
    color: 'border-indigo-400 bg-indigo-50 text-indigo-800'
  },
  {
    id: 'pec-dhikr-step-6',
    stepNumber: 6,
    label: 'Astaghfirullah',
    englishTranslation: 'I Seek Allah’s Forgiveness (Fresh Clean Start)',
    sublabel: 'Say when making a mistake or feeling upset to reset our heart with love.',
    arabic: 'أَسْتَغْفِرُ ٱللَّٰهَ',
    arabicTransliteration: 'Astaghfirullah',
    iconName: 'RotateCcw',
    category: 'dhikr',
    color: 'border-purple-400 bg-purple-50 text-purple-800'
  },
  {
    id: 'pec-dhikr-step-7',
    stepNumber: 7,
    label: 'La hawla wa la quwwata illa billah',
    englishTranslation: 'All Strength Comes from Allah (Inner Resilience)',
    sublabel: 'Say when a task feels hard, asking Allah for gentle energy and calm focus.',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ',
    arabicTransliteration: 'Laa hawla wa laa quwwata illaa billaah',
    iconName: 'Mountain',
    category: 'dhikr',
    color: 'border-teal-400 bg-teal-50 text-teal-800'
  },
  {
    id: 'pec-dhikr-step-8',
    stepNumber: 8,
    label: 'Salawat on Prophet Muhammad ﷺ',
    englishTranslation: 'Peace & Blessings upon Prophet Muhammad ﷺ',
    sublabel: 'Sending love and blessings upon our gentle Prophet brings angels of peace.',
    arabic: 'ٱللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ',
    arabicTransliteration: 'Allahumma salli \'ala Muhammad',
    iconName: 'Heart',
    category: 'dhikr',
    color: 'border-rose-400 bg-rose-50 text-rose-800'
  },

  // 🕌 FAITH & PILLARS OF ISLAM (with full English writing, transliteration & explicit translation breakdown)
  {
    id: 'pec-shahadah',
    label: 'Shahadah',
    englishTranslation: 'Declaration of Faith',
    sublabel: 'Belief in One Allah and Prophet Muhammad ﷺ',
    arabic: 'الشَّهَادَة',
    arabicTransliteration: 'Ash-Shahadah',
    iconName: 'Sparkles',
    category: 'faith',
    color: 'border-emerald-400 bg-emerald-50 text-emerald-800'
  },
  {
    id: 'pec-salah',
    label: 'Salah',
    englishTranslation: 'Daily Prayer (5 Times)',
    sublabel: 'Standing, bowing, and speaking with Allah with peace',
    arabic: 'الصَّلَاة',
    arabicTransliteration: 'As-Salah',
    iconName: 'Compass',
    category: 'faith',
    color: 'border-blue-400 bg-blue-50 text-blue-800'
  },
  {
    id: 'pec-wudu',
    label: 'Wudu',
    englishTranslation: 'Ablution & Clean Washing',
    sublabel: 'Pure water washing routine before prayer',
    arabic: 'الوُضُوء',
    arabicTransliteration: 'Al-Wudu',
    iconName: 'Droplets',
    category: 'faith',
    color: 'border-cyan-400 bg-cyan-50 text-cyan-800'
  },
  {
    id: 'pec-zakat',
    label: 'Zakat',
    englishTranslation: 'Alms Tax & Obligatory Charity',
    sublabel: 'Giving 2.5% of saved wealth to help community and friends',
    arabic: 'الزَّكَاة',
    arabicTransliteration: 'Az-Zakat',
    iconName: 'HeartHandshake',
    category: 'faith',
    color: 'border-amber-400 bg-amber-50 text-amber-900'
  },
  {
    id: 'pec-siyam',
    label: 'Siyam (Sawm)',
    englishTranslation: 'Fasting & Mindful Rest',
    sublabel: 'Resting food from dawn to sunset during Ramadan',
    arabic: 'الصِّيَام',
    arabicTransliteration: 'As-Siyam / As-Sawm',
    iconName: 'Moon',
    category: 'faith',
    color: 'border-indigo-400 bg-indigo-50 text-indigo-900'
  },
  {
    id: 'pec-hajj',
    label: 'Hajj',
    englishTranslation: 'Sacred Pilgrimage to Makkah',
    sublabel: 'Special holy journey to the Ka\'bah once in a lifetime',
    arabic: 'الحَجّ',
    arabicTransliteration: 'Al-Hajj',
    iconName: 'ShieldCheck',
    category: 'faith',
    color: 'border-teal-400 bg-teal-50 text-teal-900'
  },
  {
    id: 'pec-ruku',
    label: 'Ruku',
    englishTranslation: 'Bowing Down with Humility',
    sublabel: 'Hands on knees, back straight, saying praises to Allah',
    arabic: 'الرُّكُوع',
    arabicTransliteration: 'Ar-Ruku\'',
    iconName: 'ArrowDown',
    category: 'faith',
    color: 'border-teal-400 bg-teal-50 text-teal-800'
  },
  {
    id: 'pec-sujud',
    label: 'Sujud',
    englishTranslation: 'Prostration / Forehead to Rug',
    sublabel: 'Touching forehead and nose gently to the prayer floor',
    arabic: 'السُّجُود',
    arabicTransliteration: 'As-Sujud',
    iconName: 'Heart',
    category: 'faith',
    color: 'border-rose-400 bg-rose-50 text-rose-800'
  },
  {
    id: 'pec-dua',
    label: 'Du\'a',
    englishTranslation: 'Personal Supplication / Talking to Allah',
    sublabel: 'Open your palms and ask Allah for anything you need',
    arabic: 'الدُّعَاء',
    arabicTransliteration: 'Ad-Du\'a',
    iconName: 'Hand',
    category: 'faith',
    color: 'border-indigo-400 bg-indigo-50 text-indigo-800'
  },
  {
    id: 'pec-quran',
    label: 'Qur\'an',
    englishTranslation: 'Holy Book of Allah',
    sublabel: 'Reading divine guidance, comfort, and soothing words',
    arabic: 'القُرْآن الكَرِيم',
    arabicTransliteration: 'Al-Qur\'an Al-Kareem',
    iconName: 'BookOpen',
    category: 'faith',
    color: 'border-emerald-400 bg-emerald-50 text-emerald-800'
  },
  {
    id: 'pec-qiblah',
    label: 'Qiblah',
    englishTranslation: 'Direction of Prayer (Ka\'bah in Makkah)',
    sublabel: 'Turning our body towards the holy Ka\'bah before praying',
    arabic: 'القِبْلَة',
    arabicTransliteration: 'Al-Qiblah',
    iconName: 'Compass',
    category: 'faith',
    color: 'border-blue-400 bg-blue-50 text-blue-800'
  },

  // 💬 CORE COMMUNICATION & AUTISM SENSORY ACCOMMODATIONS
  {
    id: 'pec-i-want',
    label: 'I Want',
    englishTranslation: 'Communication Request',
    sublabel: 'Use this card to express your choice or need',
    iconName: 'Hand',
    category: 'communication',
    color: 'border-[#5C7CFA] bg-[#EBF0FF] text-[#5C7CFA]'
  },
  {
    id: 'pec-first',
    label: 'First',
    englishTranslation: 'Sequence Step 1',
    sublabel: 'What we do right now before anything else',
    iconName: 'ArrowRight',
    category: 'routine',
    color: 'border-[#D97706] bg-[#FCE8D5] text-[#D97706]'
  },
  {
    id: 'pec-then',
    label: 'Then',
    englishTranslation: 'Sequence Step 2',
    sublabel: 'What comes next after completing the first step',
    iconName: 'ArrowRight',
    category: 'routine',
    color: 'border-[#D97706] bg-[#FCE8D5] text-[#D97706]'
  },
  {
    id: 'pec-help',
    label: 'Need Help',
    englishTranslation: 'Support & Assistance',
    sublabel: 'Please pause and guide me gently through this step',
    iconName: 'HelpCircle',
    category: 'communication',
    color: 'border-rose-400 bg-rose-50 text-rose-700'
  },
  {
    id: 'pec-break',
    label: 'Sensory Break',
    englishTranslation: 'Rest & Quiet Time',
    sublabel: 'Take a break, put on headphones, or sit in quiet space',
    iconName: 'Coffee',
    category: 'communication',
    color: 'border-purple-400 bg-purple-50 text-purple-700'
  },
  {
    id: 'pec-deep-breath',
    label: 'Deep Breath',
    englishTranslation: 'Calm & Reset Routine',
    sublabel: 'Inhale peace through nose, exhale slowly through mouth',
    iconName: 'Wind',
    category: 'routine',
    color: 'border-teal-400 bg-teal-50 text-teal-700'
  },
  {
    id: 'pec-water',
    label: 'Water Drink',
    englishTranslation: 'Hydration Break',
    sublabel: 'Drink a sip of fresh clean water',
    arabic: 'مَاء',
    arabicTransliteration: 'Ma\'an (Clean Water)',
    iconName: 'Droplets',
    category: 'routine',
    color: 'border-cyan-400 bg-cyan-50 text-cyan-700'
  },
  {
    id: 'pec-all-done',
    label: 'All Done',
    englishTranslation: 'Finished Activity',
    sublabel: 'We finished our task! Alhamdulillah!',
    iconName: 'CheckCircle2',
    category: 'communication',
    color: 'border-[#7B9A7A] bg-[#E8F1E7] text-[#4A6349]'
  },
  {
    id: 'pec-good-job',
    label: 'Good Job!',
    englishTranslation: 'Praise & Positive Reinforcement',
    sublabel: 'MashaAllah! You did an amazing job today!',
    iconName: 'Star',
    category: 'communication',
    color: 'border-amber-400 bg-amber-50 text-amber-700'
  },

  // ⭐ CHARACTER INTEREST BADGES (Monotropism / Passion Anchors)
  {
    id: 'pec-char-princess',
    label: 'Princess & Castle',
    englishTranslation: 'Special Interest Anchor',
    sublabel: 'Royal Manners, Kindness & Glowing Palaces in Jannah',
    iconName: 'Crown',
    category: 'interest',
    color: 'border-pink-400 bg-pink-50 text-pink-700',
    characterTheme: 'princess'
  },
  {
    id: 'pec-char-chase',
    label: 'Chase Pup Hero',
    englishTranslation: 'Special Interest Anchor',
    sublabel: 'Rescue Helper Mission, Bravery & Helping Neighbors',
    iconName: 'Shield',
    category: 'interest',
    color: 'border-blue-400 bg-blue-50 text-blue-700',
    characterTheme: 'chase'
  },
  {
    id: 'pec-char-bluey',
    label: 'Bluey & Friends',
    englishTranslation: 'Special Interest Anchor',
    sublabel: 'Playful Love, Family Warmth & Sharing Smiles',
    iconName: 'Smile',
    category: 'interest',
    color: 'border-sky-400 bg-sky-50 text-sky-700',
    characterTheme: 'bluey'
  },
  {
    id: 'pec-char-sheep',
    label: 'Gentle Sheep',
    englishTranslation: 'Special Interest Anchor',
    sublabel: 'Eid & Hajj Harmony, Soft Wool & Nature Joy',
    iconName: 'Compass',
    category: 'interest',
    color: 'border-green-400 bg-green-50 text-green-700',
    characterTheme: 'sheep'
  }
];

export const PecBoardView: React.FC<PecBoardViewProps> = ({ content, isCalmMode }) => {
  const contentKey = encodeURIComponent(content.title || 'default');
  const [stripCards, setStripCards] = useLocalStorage<PecCardItem[]>(
    `${STORAGE_KEYS.PECS_STRIP_PREFIX}${contentKey}`,
    []
  );
  const [stripCompleted, setStripCompleted] = useLocalStorage<Record<number, boolean>>(
    `${STORAGE_KEYS.PECS_DONE_PREFIX}${contentKey}`,
    {}
  );
  const [selectedTheme, setSelectedTheme] = useState<CharacterTheme>('princess');
  const [stripMode, setStripMode] = useState<'schedule' | 'first_then' | 'sentence'>('schedule');
  const [showPrintSheet, setShowPrintSheet] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'dhikr' | 'faith' | 'lesson' | 'communication' | 'interest'>('all');
  const [currentlySpeakingCardId, setCurrentlySpeakingCardId] = useState<string | null>(null);

  // Step-by-Step Single Card Focus Mode (Reduces cognitive load / sensory overwhelm for autistic learners)
  const [viewMode, setViewMode] = useState<'grid' | 'step_focus'>('grid');
  const [activeFocusStepIndex, setActiveFocusStepIndex] = useState<number>(0);
  const [dhikrTapCount, setDhikrTapCount] = useState<number>(0);
  const [dhikrTargetCount, setDhikrTargetCount] = useState<number>(3); // 3 or 33 praises

  // Convert lesson visual cards into rich PECS format with full English translation mapping
  const lessonPecCards: PecCardItem[] = (content.cards || []).map((card, idx) => {
    // Generate intelligent English translation if not explicitly provided
    let translation = card.englishTranslation;
    if (!translation && card.arabicTerm) {
      if (card.arabicTerm.includes('زَكَاة') || card.arabicTerm.toLowerCase().includes('zakat')) {
        translation = 'Alms Tax & Giving Charity';
      } else if (card.arabicTerm.includes('صَلَاة') || card.arabicTerm.toLowerCase().includes('salah')) {
        translation = 'Daily Prayer / Connecting with Allah';
      } else if (card.arabicTerm.includes('وُضُوء') || card.arabicTerm.toLowerCase().includes('wudu')) {
        translation = 'Ablution / Clean Washing';
      } else if (card.arabicTerm.includes('صِيَام') || card.arabicTerm.toLowerCase().includes('siyam')) {
        translation = 'Fasting & Patience';
      } else if (card.arabicTerm.includes('حَجّ') || card.arabicTerm.toLowerCase().includes('hajj')) {
        translation = 'Sacred Pilgrimage to Makkah';
      } else if (card.arabicTerm.includes('شَهَادَة') || card.arabicTerm.toLowerCase().includes('shahadah')) {
        translation = 'Declaration of Faith in Allah';
      } else if (card.arabicTransliteration) {
        translation = card.arabicTransliteration;
      }
    }

    return {
      id: `lesson-card-${idx}-${card.stepNumber}`,
      stepNumber: card.stepNumber,
      label: card.title || `Step ${card.stepNumber}`,
      englishTranslation: translation,
      sublabel: card.simpleSentence,
      arabic: card.arabicTerm,
      arabicTransliteration: card.arabicTransliteration,
      iconName: card.iconName || 'Sparkles',
      category: 'lesson',
      color: 'border-[#7B9A7A] bg-white text-slate-800'
    };
  });

  const allAvailablePecs = [...CORE_COMMUNICATION_PECS, ...lessonPecCards];

  // Dedicated collection of Step Dhikr cards (sorted 1..8)
  const dhikrStepPecs = allAvailablePecs.filter((p) => p.category === 'dhikr');

  const displayedPecs = allAvailablePecs.filter((pec) => {
    if (activeCategoryFilter === 'dhikr') return pec.category === 'dhikr';
    if (activeCategoryFilter === 'faith') return pec.category === 'faith';
    if (activeCategoryFilter === 'lesson') return pec.category === 'lesson';
    if (activeCategoryFilter === 'communication') return pec.category === 'communication' || pec.category === 'routine';
    if (activeCategoryFilter === 'interest') return pec.category === 'interest';
    return true;
  });

  const activeFocusCard = dhikrStepPecs[activeFocusStepIndex] || dhikrStepPecs[0];

  const handleAddToStrip = (pec: PecCardItem) => {
    setStripCards((prev) => [...prev, pec]);
  };

  const handleRemoveFromStrip = (index: number) => {
    setStripCards((prev) => prev.filter((_, i) => i !== index));
    setStripCompleted((prev) => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  const handleClearStrip = () => {
    setStripCards([]);
    setStripCompleted({});
    stopSpeech();
    setCurrentlySpeakingCardId(null);
  };

  const handleToggleDone = (index: number) => {
    setStripCompleted((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Comprehensive Text-to-Speech playback for PEC cards
  const handleSpeakCard = (pec: PecCardItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentlySpeakingCardId(pec.id);

    // Build rich, crystal-clear spoken sentence
    const parts: string[] = [];
    if (pec.stepNumber) {
      parts.push(`Step ${pec.stepNumber}:`);
    }
    parts.push(pec.label);

    if (pec.englishTranslation) {
      parts.push(`which means ${pec.englishTranslation}.`);
    }

    if (pec.arabicTransliteration && pec.arabicTransliteration !== pec.label) {
      parts.push(`Recitation: ${pec.arabicTransliteration}.`);
    }

    if (pec.sublabel) {
      parts.push(pec.sublabel);
    }

    const fullSpokenText = parts.join(' ');

    speakText(fullSpokenText, {
      rate: isCalmMode ? 0.8 : 0.88,
      onEnd: () => setCurrentlySpeakingCardId(null)
    });
  };

  const handleSpeakStrip = () => {
    if (stripCards.length === 0) {
      speakText('The visual schedule strip is empty. Tap any PEC card below to add it to your schedule.', {
        rate: isCalmMode ? 0.82 : 0.9
      });
      return;
    }

    let sentence = '';
    if (stripMode === 'first_then' && stripCards.length >= 2) {
      const firstText = stripCards[0].englishTranslation
        ? `${stripCards[0].label}, which is ${stripCards[0].englishTranslation}`
        : stripCards[0].label;
      const thenText = stripCards[1].englishTranslation
        ? `${stripCards[1].label}, which is ${stripCards[1].englishTranslation}`
        : stripCards[1].label;
      sentence = `First, ${firstText}. Then, ${thenText}.`;
    } else {
      const cardSentences = stripCards.map((card, idx) => {
        const stepNum = idx + 1;
        const meaning = card.englishTranslation ? ` (${card.englishTranslation})` : '';
        return `Step ${stepNum}: ${card.label}${meaning}. ${card.sublabel || ''}`;
      });
      sentence = `Here is your visual schedule: ${cardSentences.join(' ')}`;
    }

    speakText(sentence, { rate: isCalmMode ? 0.8 : 0.88 });
  };

  const handlePrint = () => {
    window.print();
  };

  const populateFirstThenPreset = () => {
    const firstPec = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-first');
    const step1 = dhikrStepPecs[0] || lessonPecCards[0] || CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-wudu');
    const thenPec = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-then');
    const step2 = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-good-job');

    const newStrip: PecCardItem[] = [];
    if (firstPec) newStrip.push(firstPec);
    if (step1) newStrip.push(step1);
    if (thenPec) newStrip.push(thenPec);
    if (step2) newStrip.push(step2);

    setStripMode('first_then');
    setStripCards(newStrip);
    setStripCompleted({});
  };

  const populateDailyThreeDhikr = () => {
    const subhanallah = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-dhikr-step-2');
    const alhamdulillah = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-dhikr-step-3');
    const allahuakbar = CORE_COMMUNICATION_PECS.find((p) => p.id === 'pec-dhikr-step-4');

    const newStrip: PecCardItem[] = [];
    if (subhanallah) newStrip.push(subhanallah);
    if (alhamdulillah) newStrip.push(alhamdulillah);
    if (allahuakbar) newStrip.push(allahuakbar);

    setStripMode('schedule');
    setStripCards(newStrip);
    setStripCompleted({});
  };

  const populateAllDhikrSteps = () => {
    setStripMode('schedule');
    setStripCards([...dhikrStepPecs]);
    setStripCompleted({});
  };

  const populateAllLessonSteps = () => {
    setStripMode('schedule');
    setStripCards([...lessonPecCards]);
    setStripCompleted({});
  };

  // Tactile bead tap handler
  const handleTapBead = () => {
    setDhikrTapCount((prev) => {
      const next = prev + 1;
      if (next >= dhikrTargetCount) {
        // Trigger soft completion confirmation
        return dhikrTargetCount;
      }
      return next;
    });
  };

  const handleResetBeadCount = () => {
    setDhikrTapCount(0);
  };

  return (
    <div id="pecs-board-container" className="space-y-8">
      {/* Top Banner with Autism PECS Explanation, English Writing & Audio Guide */}
      <div
        className={`backdrop-blur-md rounded-[2.5rem] p-5 sm:p-7 shadow-sm flex flex-wrap items-center justify-between gap-4 border transition-colors ${
          isCalmMode
            ? 'bg-white/90 border-[#99AFD7]/40'
            : 'bg-white/90 border-[#93c5fd]/50'
        }`}
      >
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                isCalmMode
                  ? 'bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/40'
                  : 'bg-[#bae6fd] text-[#1e3a8a] border-[#7dd3fc]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>PECS • Picture Exchange Communication Board</span>
            </div>
            <div
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-semibold border ${
                isCalmMode
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-emerald-100 text-emerald-900 border-emerald-300'
              }`}
            >
              <Volume2 className="w-3 h-3 text-emerald-700" />
              <span>Full Text-to-Speech & English Translations</span>
            </div>
          </div>

          <h3 className={`text-xl sm:text-2xl font-bold font-heading ${isCalmMode ? 'text-slate-900' : 'text-[#1e3a8a]'}`}>
            Visual Step Cards & PECS Schedule Strip
          </h3>
          <p className={`text-xs sm:text-sm leading-relaxed ${isCalmMode ? 'text-slate-600' : 'text-[#1e3a8a]/80'}`}>
            Designed specifically for autistic learners and visual thinkers. Every card features structured sequential steps, clear English writing, explicit translations (e.g. <strong>Zakat = Alms Tax / Charity</strong>, <strong>SubhanAllah = Glory be to Allah</strong>), meaning-matched illustrations, and instant text-to-speech audio.
          </p>

          {/* Child Interest Cartoon Companion */}
          <div className="pt-2">
            <CartoonCompanion
              theme={selectedTheme}
              size="sm"
              actionMessage="Tap any card to hear its clear English translation or add it to your daily routine strip!"
              interactive={true}
              onSelectTheme={(t) => setSelectedTheme(t)}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* View Mode Toggle: Grid vs. Step Focus Mode (Crucial for sensory reduction) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Grid View
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('step_focus');
                setActiveCategoryFilter('dhikr');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'step_focus'
                  ? isCalmMode
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-[#1e3a8a] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CircleDot className="w-3.5 h-3.5" />
              <span>Step-by-Step Focus Mode</span>
            </button>
          </div>

          <button
            id="pecs-print-toggle-btn"
            type="button"
            onClick={() => setShowPrintSheet(!showPrintSheet)}
            className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-2xs border ${
              showPrintSheet
                ? isCalmMode
                  ? 'bg-[#344D76] text-white border-[#344D76]'
                  : 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
                : isCalmMode
                ? 'bg-white hover:bg-[#E8EEF8] text-[#344D76] border-[#99AFD7]/50'
                : 'bg-white hover:bg-[#bae6fd]/40 text-[#1e3a8a] border-[#93c5fd]'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>{showPrintSheet ? 'Hide Printable Cutouts' : 'Printable PECS Cards (Lamination Sheet)'}</span>
          </button>
        </div>
      </div>

      {/* PRINTABLE CUTOUT SHEET (Square cards with velcro placement circles for laminating) */}
      {showPrintSheet && (
        <div
          id="printable-pecs-sheet"
          className="bg-white rounded-[2.5rem] p-6 sm:p-10 border-2 border-slate-300 shadow-lg space-y-6 print:border-none print:shadow-none print:p-0"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 print:hidden">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <Scissors className="w-4 h-4 text-emerald-600" />
                <span>Ready-to-Print PECS Cutout Grid with English Translations & Dhikr Steps</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading">
                Physical Communication Cards & Schedule Strip
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Standard square 2.5" size with velcro dot cues, step indicators, and clear English definitions. Print on cardstock and laminate for home, mosque, or classroom routines!
              </p>
            </div>

            <button
              id="actual-print-trigger-btn"
              type="button"
              onClick={handlePrint}
              className="px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#60a5fa] text-white font-extrabold text-sm rounded-xl shadow-xs flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Cards Now</span>
            </button>
          </div>

          {/* Grid of Printable Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
            {allAvailablePecs.map((pec) => (
              <div
                key={pec.id}
                className="border-2 border-dashed border-slate-300 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[170px] bg-white relative print:border-slate-400"
              >
                {/* Step badge if applicable */}
                {pec.stepNumber && (
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-3xs font-extrabold text-slate-700">
                    Step {pec.stepNumber}
                  </div>
                )}

                {/* Simulated Velcro Dot Circle */}
                <div className="w-4 h-4 rounded-full border-2 border-dashed border-slate-400 absolute top-2 right-2 print:border-slate-500 flex items-center justify-center text-3xs text-slate-400">
                  •
                </div>

                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center my-auto">
                  <DynamicIcon name={pec.iconName} className="w-6 h-6 text-slate-800" />
                </div>

                <div className="space-y-1 mt-2 w-full">
                  <div className="font-extrabold text-xs text-slate-900 leading-tight">
                    {pec.label}
                  </div>
                  {pec.englishTranslation && (
                    <div className="text-3xs font-bold text-[#1e3a8a] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 line-clamp-1">
                      = {pec.englishTranslation}
                    </div>
                  )}
                  {pec.arabic && (
                    <div className="text-2xs font-bold font-arabic text-emerald-800" dir="rtl">
                      {pec.arabic}
                    </div>
                  )}
                  {pec.sublabel && (
                    <div className="text-3xs text-slate-500 line-clamp-2 leading-tight">
                      {pec.sublabel}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🌟 STEP-BY-STEP SINGLE CARD FOCUS MODE (Special-Ed Accommodation: Prevents Sensory Overload) */}
      {viewMode === 'step_focus' && (
        <div
          id="dhikr-single-step-focus-card"
          className={`rounded-[2.5rem] p-6 sm:p-10 border-2 shadow-sm space-y-6 transition-all ${
            isCalmMode
              ? 'bg-white border-[#99AFD7]/50'
              : 'bg-white border-[#93c5fd]'
          }`}
        >
          {/* Header & Step Pagination Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                <CircleDot className="w-3.5 h-3.5" />
                <span>Single-Step Focus Mode • Step {activeFocusStepIndex + 1} of {dhikrStepPecs.length}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                {activeFocusCard.label}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveFocusStepIndex((prev) => Math.max(0, prev - 1));
                  setDhikrTapCount(0);
                }}
                disabled={activeFocusStepIndex === 0}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveFocusStepIndex((prev) => Math.min(dhikrStepPecs.length - 1, prev + 1));
                  setDhikrTapCount(0);
                }}
                disabled={activeFocusStepIndex === dhikrStepPecs.length - 1}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1 transition-colors"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Focus Card Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Meaning Illustration Box */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-8 bg-slate-50/80 rounded-3xl border border-slate-200/80 text-center space-y-4">
              <div className="w-28 h-28 rounded-3xl bg-white shadow-sm border border-slate-200 flex items-center justify-center relative">
                <DynamicIcon name={activeFocusCard.iconName} className="w-14 h-14 text-slate-800" />
                <div className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#1e3a8a] text-white font-extrabold text-xs shadow-xs">
                  Step {activeFocusCard.stepNumber}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-400">
                  Visual Meaning Anchor
                </span>
                <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
                  {activeFocusCard.sublabel}
                </p>
              </div>

              {/* Quick Add to Schedule Strip */}
              <button
                type="button"
                onClick={() => handleAddToStrip(activeFocusCard)}
                className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 flex items-center justify-center gap-2 shadow-2xs transition-colors"
              >
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>Add This Step to Schedule Strip</span>
              </button>
            </div>

            {/* Language & Meaning Breakdown */}
            <div className="md:col-span-7 space-y-5">
              {/* Sacred Arabic Script */}
              <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-center sm:text-right space-y-1">
                <div className="text-3xs font-extrabold uppercase text-emerald-700 tracking-wider">
                  Sacred Arabic Recitation
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-arabic text-emerald-900 leading-relaxed" dir="rtl">
                  {activeFocusCard.arabic}
                </div>
                <div className="text-xs font-semibold text-emerald-800 italic">
                  {activeFocusCard.arabicTransliteration}
                </div>
              </div>

              {/* Explicit English Translation */}
              <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 space-y-1">
                <div className="flex items-center gap-1.5 text-3xs font-extrabold uppercase text-blue-700 tracking-wider">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Explicit English Translation</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-blue-950">
                  {activeFocusCard.englishTranslation}
                </div>
              </div>

              {/* Tactile Bead Tap Counter (Sensory Accommodation) */}
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Tactile Praise Bead Counter: {dhikrTapCount} / {dhikrTargetCount}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => { setDhikrTargetCount(3); setDhikrTapCount(0); }}
                      className={`px-2 py-0.5 rounded text-3xs font-extrabold ${
                        dhikrTargetCount === 3 ? 'bg-amber-600 text-white' : 'bg-white text-amber-800 border border-amber-300'
                      }`}
                    >
                      3 Times
                    </button>
                    <button
                      type="button"
                      onClick={() => { setDhikrTargetCount(33); setDhikrTapCount(0); }}
                      className={`px-2 py-0.5 rounded text-3xs font-extrabold ${
                        dhikrTargetCount === 33 ? 'bg-amber-600 text-white' : 'bg-white text-amber-800 border border-amber-300'
                      }`}
                    >
                      33 Times
                    </button>
                  </div>
                </div>

                {/* Tactile Tap Button */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleTapBead}
                    className={`flex-1 py-3 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98 ${
                      dhikrTapCount >= dhikrTargetCount
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 hover:bg-amber-600 text-white'
                    }`}
                  >
                    {dhikrTapCount >= dhikrTargetCount ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>MashaAllah! Target Completed ({dhikrTargetCount}x)</span>
                      </>
                    ) : (
                      <>
                        <CircleDot className="w-5 h-5 animate-pulse" />
                        <span>Tap Bead to Count Praise ({dhikrTapCount} / {dhikrTargetCount})</span>
                      </>
                    )}
                  </button>

                  {dhikrTapCount > 0 && (
                    <button
                      type="button"
                      onClick={handleResetBeadCount}
                      className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-600 border border-slate-300 transition-colors"
                      title="Reset counter"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Audio Listen Button */}
              <button
                type="button"
                onClick={() => handleSpeakCard(activeFocusCard)}
                className={`w-full py-3 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xs ${
                  currentlySpeakingCardId === activeFocusCard.id
                    ? 'bg-emerald-600 text-white animate-pulse'
                    : isCalmMode
                    ? 'bg-[#344D76] hover:bg-[#283C5C] text-white'
                    : 'bg-[#1e3a8a] hover:bg-[#152860] text-white'
                }`}
              >
                <Volume2 className="w-5 h-5" />
                <span>Listen to Clear Pronunciation & Translation</span>
              </button>
            </div>
          </div>

          {/* Stepper Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {dhikrStepPecs.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveFocusStepIndex(idx);
                  setDhikrTapCount(0);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  idx === activeFocusStepIndex
                    ? 'w-8 bg-[#1e3a8a]'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                title={`Jump to Step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE SCHEDULE / SENTENCE STRIP (Interactive Velcro Board) */}
      <div
        id="pecs-sentence-strip"
        className="bg-slate-900 border-4 border-slate-800 rounded-[2.5rem] p-5 sm:p-8 shadow-md text-white space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-200">
              Interactive Schedule & Routine Strip
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              id="strip-daily-dhikr-btn"
              type="button"
              onClick={populateDailyThreeDhikr}
              className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Sun className="w-3 h-3" />
              <span>3-Step Morning Dhikr</span>
            </button>
            <button
              id="strip-all-dhikr-btn"
              type="button"
              onClick={populateAllDhikrSteps}
              className="px-3 py-1.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3" />
              <span>All 8 Dhikr Steps</span>
            </button>
            <button
              id="strip-first-then-btn"
              type="button"
              onClick={populateFirstThenPreset}
              className="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <ArrowRight className="w-3 h-3" />
              <span>First ➜ Then Mode</span>
            </button>
            {stripCards.length > 0 && (
              <button
                id="strip-clear-btn"
                type="button"
                onClick={handleClearStrip}
                className="px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 rounded-full text-xs font-bold transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Strip</span>
              </button>
            )}
          </div>
        </div>

        {/* The Strip Cards Container */}
        <div className="min-h-[140px] bg-slate-950/80 rounded-2xl p-4 flex items-center gap-3.5 overflow-x-auto border-2 border-dashed border-slate-700 scrollbar-none">
          {stripCards.length === 0 ? (
            <div className="w-full text-center py-8 text-slate-400 text-xs sm:text-sm font-medium space-y-1">
              <div>✨ Tap any PEC card below to place it onto this visual schedule strip!</div>
              <div className="text-3xs text-slate-500">
                You can listen to each card individually, toggle task completion, or read the whole strip aloud with Text-to-Speech.
              </div>
            </div>
          ) : (
            stripCards.map((card, idx) => {
              const isDone = stripCompleted[idx];
              const isSpeaking = currentlySpeakingCardId === card.id;
              return (
                <div
                  key={`${card.id}-${idx}`}
                  className={`relative shrink-0 w-32 sm:w-36 h-40 sm:h-44 rounded-2xl p-2.5 flex flex-col justify-between items-center text-center transition-all bg-white text-slate-900 shadow-sm border-2 ${
                    isDone
                      ? 'opacity-50 grayscale border-slate-300'
                      : isSpeaking
                      ? 'border-emerald-500 ring-2 ring-emerald-400 scale-102'
                      : 'border-amber-400 hover:border-amber-500'
                  }`}
                >
                  {/* Step indicator if present */}
                  {card.stepNumber && (
                    <div className="absolute top-1.5 left-1.5 px-1 py-0.2 bg-slate-800 text-white rounded text-3xs font-extrabold">
                      Step {card.stepNumber}
                    </div>
                  )}

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => handleRemoveFromStrip(idx)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs shadow-sm hover:bg-rose-600 transition-colors z-10"
                    title="Remove from strip"
                  >
                    ×
                  </button>

                  {/* Individual Audio Button on Strip Card */}
                  <button
                    type="button"
                    onClick={(e) => handleSpeakCard(card, e)}
                    className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-2xs shadow-sm transition-colors z-10 ${
                      isSpeaking ? 'bg-emerald-500 text-white animate-pulse' : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                    title="Listen to card audio"
                  >
                    <Volume2 className="w-3 h-3" />
                  </button>

                  <div
                    onClick={() => handleToggleDone(idx)}
                    className="cursor-pointer w-full flex flex-col items-center h-full justify-between pt-1"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
                      <DynamicIcon name={card.iconName} className="w-5 h-5 text-slate-800" />
                    </div>

                    <div className="space-y-0.5 my-auto w-full">
                      <div className="font-extrabold text-2xs sm:text-xs text-slate-900 line-clamp-1 leading-tight">
                        {card.label}
                      </div>
                      {card.englishTranslation && (
                        <div className="text-3xs font-bold text-[#1e3a8a] bg-blue-50 px-1 py-0.2 rounded line-clamp-1">
                          {card.englishTranslation}
                        </div>
                      )}
                      {card.arabic && (
                        <div className="text-3xs font-bold font-arabic text-emerald-800 truncate max-w-[110px]" dir="rtl">
                          {card.arabic}
                        </div>
                      )}
                    </div>

                    {/* Done Toggle Pill */}
                    <div
                      className={`w-full py-1 rounded-lg text-3xs font-extrabold flex items-center justify-center gap-1 transition-colors ${
                        isDone ? 'bg-slate-200 text-slate-700' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {isDone ? <span>Done ✓</span> : <span>Tap when done</span>}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Speak Strip Action & Status */}
        {stripCards.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <span className="text-xs text-slate-400 font-medium">
              {Object.keys(stripCompleted).length} of {stripCards.length} tasks completed
            </span>

            <button
              id="read-strip-aloud-btn"
              type="button"
              onClick={handleSpeakStrip}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Volume2 className="w-4 h-4" />
              <span>Read Full Schedule Aloud</span>
            </button>
          </div>
        )}
      </div>

      {/* PECS CARDS REPOSITORY / PICKER WITH CATEGORIES & ENGLISH TRANSLATIONS */}
      {viewMode === 'grid' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-extrabold uppercase tracking-wider ${isCalmMode ? 'text-slate-800' : 'text-[#1e3a8a]'}`}>
                Available PEC Cards Library
              </span>
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  isCalmMode ? 'bg-[#E8EEF8] text-[#344D76]' : 'bg-[#bae6fd] text-[#1e3a8a]'
                }`}
              >
                {displayedPecs.length} Cards
              </span>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategoryFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All ({allAvailablePecs.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategoryFilter('dhikr')}
                className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 ${
                  activeCategoryFilter === 'dhikr'
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Dhikr Steps (8)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveCategoryFilter('faith')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategoryFilter === 'faith'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                5 Pillars & Faith
              </button>
              <button
                type="button"
                onClick={() => setActiveCategoryFilter('lesson')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategoryFilter === 'lesson'
                    ? isCalmMode ? 'bg-[#344D76] text-white' : 'bg-[#1e3a8a] text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Lesson Steps ({lessonPecCards.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategoryFilter('communication')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategoryFilter === 'communication'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Communication & Sensory
              </button>
              <button
                type="button"
                onClick={() => setActiveCategoryFilter('interest')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategoryFilter === 'interest'
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Character Badges
              </button>
            </div>
          </div>

          {/* PECS Cards Grid with High-Contrast English Writing, Audio Buttons, and Translation Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedPecs.map((pec) => {
              const isSpeaking = currentlySpeakingCardId === pec.id;
              return (
                <div
                  key={pec.id}
                  onClick={() => handleAddToStrip(pec)}
                  className={`group cursor-pointer rounded-2xl p-4 flex flex-col justify-between text-left shadow-2xs hover:shadow-md transition-all relative border-2 ${
                    isSpeaking
                      ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-300'
                      : isCalmMode
                      ? 'bg-white border-[#99AFD7]/40 hover:border-[#344D76]'
                      : 'bg-white border-[#93c5fd]/50 hover:border-[#1e3a8a]'
                  }`}
                >
                  {/* Audio Button with Text-to-Speech */}
                  <button
                    type="button"
                    id={`pec-speak-btn-${pec.id}`}
                    onClick={(e) => handleSpeakCard(pec, e)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isSpeaking
                        ? 'bg-emerald-600 text-white shadow-xs animate-bounce'
                        : 'bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800'
                    }`}
                    title="Listen to card audio (English + Translation)"
                    aria-label={`Read aloud ${pec.label}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <div>
                    {/* Icon & Category / Step Pill */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                        <DynamicIcon name={pec.iconName} className="w-5 h-5 text-slate-800" />
                      </div>
                      <div className="pr-8 space-y-0.5">
                        <span
                          className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded-full border ${
                            pec.category === 'dhikr'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : pec.category === 'faith'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : pec.category === 'communication' || pec.category === 'routine'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : pec.category === 'interest'
                              ? 'bg-pink-50 text-pink-800 border-pink-200'
                              : 'bg-slate-50 text-slate-800 border-slate-200'
                          }`}
                        >
                          {pec.stepNumber ? `Step ${pec.stepNumber}` : pec.category}
                        </span>
                      </div>
                    </div>

                    {/* English Label (Prominent) */}
                    <div className="font-extrabold text-sm text-slate-900 leading-tight">
                      {pec.label}
                    </div>

                    {/* Explicit English Translation (e.g. Zakat = Alms Tax) */}
                    {pec.englishTranslation && (
                      <div className="mt-1 flex items-center gap-1 text-2xs font-bold text-[#1e3a8a] bg-blue-50/90 border border-blue-200 px-2 py-0.5 rounded-lg">
                        <Languages className="w-3 h-3 shrink-0 text-[#1e3a8a]" />
                        <span className="truncate">{pec.englishTranslation}</span>
                      </div>
                    )}

                    {/* Arabic Script & Transliteration */}
                    {pec.arabic && (
                      <div className="mt-1 flex items-center justify-between text-2xs text-slate-600">
                        <span className="font-bold font-arabic text-emerald-800 text-xs" dir="rtl">
                          {pec.arabic}
                        </span>
                        {pec.arabicTransliteration && (
                          <span className="text-3xs italic text-slate-500 font-medium">
                            ({pec.arabicTransliteration})
                          </span>
                        )}
                      </div>
                    )}

                    {/* Concrete Sublabel / Actionable Description */}
                    {pec.sublabel && (
                      <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {pec.sublabel}
                      </p>
                    )}
                  </div>

                  {/* Bottom Add Action */}
                  <div
                    className={`mt-3 pt-2.5 border-t flex items-center justify-between text-2xs font-extrabold ${
                      isCalmMode
                        ? 'border-[#99AFD7]/20 text-[#344D76]'
                        : 'border-slate-100 text-[#1e3a8a]'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Schedule</span>
                    </span>
                    <span className="text-3xs font-bold text-slate-400 group-hover:text-slate-700">
                      Tap card ➜
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};