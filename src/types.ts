export type AgeRange = '4-6' | '7-9' | '10-12' | '13+';

export type LearningPreferenceId =
  | 'visual'
  | 'short_instructions'
  | 'one_step'
  | 'repetition'
  | 'storytelling'
  | 'interactive'
  | 'simple_language'
  | 'low_stimulation'
  | 'audio_tts'
  | 'auditory'
  | 'interest_based';

export interface LearningPreferenceOption {
  id: LearningPreferenceId;
  label: string;
  description: string;
  icon: string;
  tag: string;
}

export type FormatType = 'interactive_cards' | 'step_by_step' | 'visual' | 'story' | 'flashcard';

export interface LearnerProfile {
  id: string;
  nickname: string;
  ageRange: AgeRange;
  preferences: LearningPreferenceId[];
  interests: string[];
  preferredFormat: FormatType;
  readingComplexity: 'early' | 'simple' | 'standard';
  lessonDetail: 'short' | 'detailed';
  repetition: boolean;
  soundEnabled: boolean;
  calmModeDefault: boolean;
}

export interface StorySlide {
  id: string;
  chapterNumber: number;
  title: string;
  text: string;
  subtext?: string;
  interestConnection: string;
  islamicTeaching: string;
  iconName: string;
  actionPrompt?: string;
}

export interface StoryContent {
  title: string;
  theme: string;
  intro: string;
  slides: StorySlide[];
  conclusion: string;
  reflectionQuestion: string;
}

export interface VisualCard {
  stepNumber: number;
  title: string;
  simpleSentence: string;
  arabicTerm?: string;
  arabicTransliteration?: string;
  englishTranslation?: string;
  iconName: string;
  visualHint: string;
  badge?: string;
}

export interface VisualContent {
  title: string;
  subtitle: string;
  cards: VisualCard[];
  completionBadge: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  instruction: string;
  detail: string;
  repeatPhrase?: string;
  iconName: string;
  sensoryTip?: string;
}

export interface StepContent {
  title: string;
  goal: string;
  steps: StepItem[];
  successMessage: string;
}

export interface FlashcardItem {
  id: string;
  frontTerm: string;
  frontArabic?: string;
  frontTransliteration?: string;
  frontSubtext?: string;
  backDefinition: string;
  backInterestAnalogy: string;
  backActionOrQuestion?: string;
  iconName: string;
}

export interface FlashcardContent {
  title: string;
  cards: FlashcardItem[];
}

export interface ParentTips {
  summary: string;
  reviewStrategy: string;
  repetitionTip: string;
  activitySuggestion: string;
  sensoryBreakTip: string;
  nextFormatRecommendation: string;
}

export interface LessonStep {
  stepNumber: number;
  title: string;
  instruction: string;
  tip?: string;
  detail?: string;
  arabicTerm?: string;
  arabicTransliteration?: string;
  englishTranslation?: string;
  iconName: string;
  repeatPhrase?: string;
  sensoryTip?: string;
  actionPrompt?: string;
}

export interface LessonActivity {
  title: string;
  type: string;
  instructions: string;
  actionItems: string[];
  interestConnection: string;
  completionPrompt?: string;
}

export interface ReviewQuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface ReviewQuestion {
  question: string;
  hint?: string;
  options: ReviewQuestionOption[];
  correctAnswerExplanation: string;
}

export interface QuranReference {
  surahName: string;
  surahNumber: number;
  ayahRange: string;
  url: string;
  arabicSnippet?: string;
  englishSnippet?: string;
}

export interface ScholarlySource {
  title: string;
  scholarOrInstitute: string;
  sourceType: 'Quran' | 'Tafsir Ibn Kathir' | 'Bayyinah Institute' | 'Yaqeen Institute' | 'Hadith';
  keyInsight: string;
  referenceUrl?: string;
}

export interface PedagogicalResearch {
  framework: string; // e.g. "Universal Design for Learning (UDL)", "Strengths-Based Safari", "Sensory Processing (OT)"
  studyCitation: string; // e.g. "Harrison et al., University of Melbourne (2024); King-Sears et al. (2023)"
  principle: string;
  practicalApplication: string;
  clinicalSpecialist?: string; // e.g. "Kara Canale (Psychologist) / Melinda Cooper (OT) / Rebecca Whalen (SLP)"
}

export interface ProphetItem {
  id: string;
  number: number;
  nameEnglish: string;
  nameArabic: string;
  epithet: string;
  era:
    | 'Early Creation'
    | 'The Patriarchs'
    | 'Patience & Law'
    | 'Wisdom & Leadership'
    | 'Kings & Guidance'
    | 'The Messianic & Final Era'
    | 'Final Messengers';
  quranReferences: QuranReference[];
  tafsirIbnKathirSummary: string;
  bayyinahInsight: string;
  yaqeenInsight: string;
  pedagogicalResearch: PedagogicalResearch[];
  coreThemes: string[];
  iconName: string;
  summary: string;
  lesson: LessonData;
}

export interface LessonData {
  id: string;
  topic: string;
  title: string;
  learningObjective: string;
  introduction: string;
  lessonSteps: LessonStep[];
  activity: LessonActivity;
  reviewQuestion: ReviewQuestion;
  topicKey?: string;
  ageRange: AgeRange;
  learnerNickname: string;
  selectedInterest: string;
  activeFormat: FormatType;
  learningPreferences: LearningPreferenceId[];
  isCalmMode: boolean;
  storyContent: StoryContent;
  visualContent: VisualContent;
  stepContent: StepContent;
  flashcardContent: FlashcardContent;
  parentTips: ParentTips;
  disclaimer: string;
  generatedAt?: string;
  quranReferences?: QuranReference[];
  scholarlySources?: ScholarlySource[] | { tafsirIbnKathir?: string; bayyinahInstitute?: string; yaqeenInstitute?: string; [key: string]: any };
  pedagogicalResearch?: PedagogicalResearch[];
}

export interface TopicPreset {
  id: string;
  title: string;
  category: string;
  description: string;
  coreConcepts: string[];
  icon: string;
  badgeColor: string;
}

export type UserRole = 'parent' | 'educator' | 'learner';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarIcon?: string;
  savedLearnerCount?: number;
  joinedDate?: string;
}

export type CommunityCategory =
  | 'all'
  | 'salah_accommodations'
  | 'visual_pecs'
  | 'interests_stories'
  | 'ramadan_fasting'
  | 'daily_wins'
  | 'qa_advice'
  | 'resources';

export interface CommunityComment {
  id: string;
  postId: string;
  authorName: string;
  authorRole: string;
  authorBadge?: string;
  content: string;
  createdAt: string;
  upvotes: number;
  userVote?: 'up' | 'down' | null;
}

export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  category: CommunityCategory;
  categoryLabel: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  createdAt: string;
  upvotes: number;
  userVote?: 'up' | 'down' | null;
  commentsCount: number;
  comments: CommunityComment[];
  tags: string[];
  pinned?: boolean;
  saved?: boolean;
  linkedLessonTopic?: string;
}

export interface SensorySocialStory {
  id: string;
  topic: string;
  title: string;
  icon: string;
  category: 'wudhu' | 'salah_masjid' | 'umrah_hajj' | 'ramadan' | 'eid' | 'social';
  sensoryTriggers: string[];
  copingStrategies: string[];
  storyLines: string[];
  audioScript?: string;
  practicalPrepTips: string[];
}

export interface MicroStoryScene {
  sceneNumber: number;
  emoji: string;
  title: string;
  sentence: string;
  iconName: string;
}

export interface MicroStory {
  id: string;
  prophetOrTopic: string;
  title: string;
  eraOrCategory: string;
  scenes: [
    MicroStoryScene,
    MicroStoryScene,
    MicroStoryScene,
    MicroStoryScene,
    MicroStoryScene
  ];
  singleLesson: string;
  audioPrompt?: string;
}

export interface GoodDeedLogItem {
  id: string;
  title: string;
  iconName: string;
  emoji: string;
  category: 'kindness' | 'worship' | 'cleanliness' | 'learning' | 'patience' | 'custom';
  timestamp: string;
  dateKey: string; // YYYY-MM-DD
  notes?: string;
  isCompleted: boolean;
}

export interface FavoriteItem {
  id: string;
  type: 'lesson' | 'prophet' | 'pec' | 'dhikr' | 'story' | 'sensory';
  title: string;
  subtitle?: string;
  iconName: string;
  linkPayload?: any;
  addedAt: string;
}

export interface AccessibilitySettings {
  fontSize: 'standard' | 'large' | 'xlarge';
  hideCompletedSteps: boolean;
  unclutteredMode: boolean;
  highContrastText: boolean;
  autoAudioNarration: boolean;
}
