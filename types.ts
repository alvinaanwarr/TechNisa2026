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
