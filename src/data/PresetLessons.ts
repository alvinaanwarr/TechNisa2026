import { TopicPreset, LearningPreferenceOption, LessonData } from '../types';
export {
  PILLAR_1_SADAQAH_LESSON,
  PILLAR_2_SALAH_LESSON,
  PILLAR_3_SIYAM_LESSON,
  PILLAR_4_ZAKAT_LESSON,
  PILLAR_5_HAJJ_LESSON,
  FIVE_PILLARS_INDIVIDUAL_LESSONS
} from './fivePillarsLessons';

export const LEARNING_PREFERENCES: LearningPreferenceOption[] = [
  {
    id: 'visual',
    label: 'Visual Learning',
    description: 'Pictures, icons, cards, and clear visual cues',
    icon: 'Eye',
    tag: 'Visual'
  },
  {
    id: 'short_instructions',
    label: 'Short Instructions',
    description: 'Crisp, simple sentences without unnecessary words',
    icon: 'FileText',
    tag: 'Concise'
  },
  {
    id: 'one_step',
    label: 'One Step at a Time',
    description: 'Predictable, sequential pacing with one action per screen',
    icon: 'CheckSquare',
    tag: 'Sequential'
  },
  {
    id: 'repetition',
    label: 'Repetition & Routine',
    description: 'Reinforces key ideas through structured gentle review',
    icon: 'RotateCcw',
    tag: 'Routine'
  },
  {
    id: 'storytelling',
    label: 'Storytelling & Narrative',
    description: 'Lessons woven into adventures and relatable character journeys',
    icon: 'BookOpen',
    tag: 'Story'
  },
  {
    id: 'interactive',
    label: 'Interactive Activities',
    description: 'Hands-on checks, flip cards, and tactile click actions',
    icon: 'Sparkles',
    tag: 'Interactive'
  },
  {
    id: 'simple_language',
    label: 'Simple Clear Language',
    description: 'Concrete vocabulary, minimal metaphors, gentle phrasing',
    icon: 'Smile',
    tag: 'Accessible'
  },
  {
    id: 'low_stimulation',
    label: 'Low-Stimulation Content',
    description: 'Calm colors, generous spacing, no sudden flashes or loud sounds',
    icon: 'Feather',
    tag: 'Calm'
  },
  {
    id: 'audio_tts',
    label: 'Audio & Read to Me',
    description: 'Text-to-speech with clear phonetic pronunciation of terms',
    icon: 'Volume2',
    tag: 'Audio'
  },
  {
    id: 'interest_based',
    label: 'Interest-Based Examples',
    description: 'Connects sacred teachings to passions like Space, Animals, or Heroes',
    icon: 'Heart',
    tag: 'Passions'
  }
];

export const TOPIC_PRESETS: TopicPreset[] = [
  {
    id: 'pillar_1_sadaqah',
    title: 'Pillar 1: Sadaqah & Shahadah (Faith & Kindness)',
    category: 'The 5 Pillars of Islam',
    description: 'Declaration of faith, the Fitrah compass in our heart, and daily smiling and helping acts of Sadaqah.',
    coreConcepts: ['Shahadah (One God)', 'Fitrah (Pure Compass)', 'Smiling is Sadaqah', 'Kind Words', 'Helping Others', 'Kindness to Animals'],
    icon: 'Heart',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    id: 'pillar_2_salah',
    title: 'Pillar 2: Salah & Suratul Fatiha Line-by-Line',
    category: 'The 5 Pillars of Islam',
    description: 'Complete 5 daily prayers, line-by-line Suratul Fatiha with Tafsir Ibn Kathir, Mercy (Rahmah), saying Alhamdulillah, and all prayer postures.',
    coreConcepts: ['Qiyam & Takbir', 'Suratul Fatiha Line-by-Line', 'Mercy (Rahmah)', 'Saying Alhamdulillah (Tafsir Ibn Kathir)', 'Ruku, Sujood, Tashahhud & Taslim'],
    icon: 'Compass',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'pillar_3_siyam',
    title: 'Pillar 3: Siyam (Fasting & Gratitude in Ramadan)',
    category: 'The 5 Pillars of Islam',
    description: 'Fasting from dawn to sunset, pre-dawn Suhoor, empathy for the hungry, sweet Iftar dates, and night Taraweeh.',
    coreConcepts: ['Siyam (Fasting)', 'Suhoor Barakah', 'Empathy for Others', 'Sunset Iftar Dates & Dua', 'Taraweeh & Gratitude'],
    icon: 'Moon',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    id: 'pillar_4_zakat',
    title: 'Pillar 4: Zakat (Giving Charity & Fairness)',
    category: 'The 5 Pillars of Islam',
    description: 'Mandatory 2.5% annual charity that purifies wealth, shares blessings with children in need, and creates a fair world.',
    coreConcepts: ['Zakat 2.5% Sharing', 'Purifying Wealth', 'Fairness & Justice', 'Helping 8 Groups', 'Care Package Mini-Mission'],
    icon: 'HeartHandshake',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'pillar_5_hajj',
    title: 'Pillar 5: Hajj (Pilgrimage & Ka\'bah Journey)',
    category: 'The 5 Pillars of Islam',
    description: 'The sacred journey to Makkah, white Ihram clothes of equality, Ka\'bah Tawaf, Sa\'i Zamzam, Arafat, and gentle sheep Eid celebration.',
    coreConcepts: ['Ihram Equality', 'Ka\'bah Tawaf 7 Circles', 'Safa & Marwa Sa\'i', 'Zamzam Water', 'Mount Arafat Dua', 'Eid al-Adha Feast'],
    icon: 'Sparkles',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
  },
  {
    id: 'wudu',
    title: 'How to Make Wudu (Ablution)',
    category: 'Daily Worship & Purity',
    description: 'Learn the sacred step-by-step water purification before praying Salah.',
    coreConcepts: ['Niyyah (Intention)', 'Bismillah', 'Washing hands, mouth, nose, face, arms', 'Wiping head', 'Washing feet'],
    icon: 'Droplets',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'five_pillars',
    title: 'The Five Pillars Master Overview (Arkān al-Islām)',
    category: 'Foundations of Faith',
    description: 'Master overview of all 5 Pillars: Sadaqah, Salah, Siyam, Zakat, and Hajj holding up our Deen.',
    coreConcepts: ['Arkān al-Islām Shelter', 'Shahada & Sadaqah', 'Salah & Fatihah', 'Siyam Fasting', 'Zakat Sharing', 'Hajj Pilgrimage'],
    icon: 'ShieldCheck',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
  },
  {
    id: 'islamic_manners',
    title: 'Islamic Manners & Kindness (Adab)',
    category: 'Character & Kindness',
    description: 'Small acts of goodness: smiling, saying Salaam, sharing, and respecting elders.',
    coreConcepts: ['Saying As-salamu alaykum', 'Smiling is charity', 'Saying Bismillah & Alhamdulillah', 'Helping family and neighbours'],
    icon: 'HeartHandshake',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    id: 'daily_dhikr',
    title: 'Daily Du\'as & Words of Gratitude (Dhikr)',
    category: 'Remembrance & Calming Duas',
    description: 'Gentle, soothing daily words of peace: Bismillah, Alhamdulillah, SubhanAllah, and bedtime du\'as.',
    coreConcepts: ['Bismillah (In Allah’s Name)', 'Alhamdulillah (All Praise to Allah)', 'SubhanAllah (Glory to Allah)', 'Ayat al-Kursi Comfort', 'Calming Morning & Evening Duas'],
    icon: 'Sun',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  }
];

export const POPULAR_INTERESTS = [
  'Superheroes',
  'Space & Astronomy',
  'Animals & Safari',
  'Cars & Trains',
  'Dinosaurs',
  'Princesses & Castles',
  'Sports & Soccer',
  'Robotics & Coding',
  'Ocean & Sea Creatures',
  'Gardening & Nature',
  'Building & Lego'
];

/**
 * Pre-curated Hackathon Demo Lessons for instant high-contrast demonstration:
 * 1. Learner 1 (Age 6, Visual, Short instructions, One step at a time, Interest: Superheroes)
 * 2. Learner 2 (Age 8, Storytelling, Repetition, Low stimulation, Interest: Space)
 */
export const HACKATHON_DEMO_LEARNER_1: LessonData = {
  id: 'demo-wudu-superhero',
  topic: 'How to Make Wudu',
  title: 'Superhero Wudu Power Guide',
  learningObjective: 'Master the 7 steps of Wudu with superhero focus and pure intention for Salah.',
  introduction: 'Every superhero has a sacred preparation routine. For young Muslim heroes, Wudu cleanses our senses, boosts our focus, and prepares our heart for Salah!',
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'Step 1: Superhero Intention & Clean Hands',
      instruction: 'Say Bismillah in your heart and wash both hands up to the wrists 3 times.',
      arabicTerm: 'بِسْمِ اللَّهِ (Bismillah)',
      arabicTransliteration: 'In the name of Allah',
      tip: 'Rinse your hands clean like putting on glowing hero gloves.',
      detail: 'Make sure water reaches between all fingers with care.',
      iconName: 'Sparkles',
      repeatPhrase: 'Clean hands do good deeds.',
      sensoryTip: 'Feel the cool, soothing water flowing over your fingers.',
      actionPrompt: 'Can you show your clean hero hands?'
    },
    {
      stepNumber: 2,
      title: 'Step 2: Clean Words Mouth Rinse',
      instruction: 'Take fresh water in your right hand and rinse your mouth gently 3 times.',
      arabicTerm: 'المَضْمَضَة (Al-Madmadah)',
      arabicTransliteration: 'Rinsing mouth',
      tip: 'Superheroes only speak kind, honest, and helpful words.',
      detail: 'Swirl the water softly without rushing.',
      iconName: 'Droplets',
      repeatPhrase: 'A clean mouth speaks kindness.',
      sensoryTip: 'A gentle swish without any rushing.'
    },
    {
      stepNumber: 3,
      title: 'Step 3: Breathe In Clean Air',
      instruction: 'Gently sniff a little water into your nose and blow it out 3 times.',
      arabicTerm: 'الاسْتِنْشَاق (Al-Istinshaq)',
      arabicTransliteration: 'Sniffing water gently',
      tip: 'Clearing your hero senses for prayer.',
      detail: 'Use a light touch with your left hand to clear.',
      iconName: 'Wind',
      repeatPhrase: 'Fresh breath and clear mind.',
      sensoryTip: 'Only a few gentle drops at comfortable temperature.'
    },
    {
      stepNumber: 4,
      title: 'Step 4: Wash Your Bright Face',
      instruction: 'Wash your whole face 3 times from your hairline down to your chin.',
      arabicTerm: 'غَسْلُ الوَجْهِ (Ghasl Al-Wajh)',
      arabicTransliteration: 'Washing the face',
      tip: 'Make your smiling hero face shine bright for Allah.',
      detail: 'From ear to ear with both gentle hands.',
      iconName: 'Smile',
      repeatPhrase: 'A smiling face for Allah.',
      sensoryTip: 'Cup water in your hands like a soft bowl.'
    },
    {
      stepNumber: 5,
      title: 'Step 5: Power Up Both Arms',
      instruction: 'Wash your right arm up to the elbow 3 times, then your left arm 3 times.',
      arabicTerm: 'غَسْلُ اليَدَيْن (Ghasl Al-Yadayn)',
      arabicTransliteration: 'Washing arms to elbows',
      tip: 'Hero arms ready to help family and do good deeds.',
      detail: 'Rub gently so all parts of the arm get wet.',
      iconName: 'Zap',
      repeatPhrase: 'Right arm first, then left arm.',
      sensoryTip: 'Feel the smooth glide of water from fingers to elbow.'
    },
    {
      stepNumber: 6,
      title: 'Step 6: Gentle Head & Ear Wipe',
      instruction: 'Wipe your wet hands gently over your head and ears 1 time.',
      arabicTerm: 'مَسْحُ الرَّأْس (Mash Al-Ra’s)',
      arabicTransliteration: 'Wiping head & ears',
      tip: 'A calm hero crown of peace and good thoughts.',
      detail: 'Just one soft wipe from front to back is needed.',
      iconName: 'Crown',
      repeatPhrase: 'Calm thoughts in my hero mind.',
      sensoryTip: 'Light like a feather resting on your head.'
    },
    {
      stepNumber: 7,
      title: 'Step 7: Speedy Clean Feet',
      instruction: 'Wash your right foot up to the ankle 3 times, then your left foot 3 times.',
      arabicTerm: 'غَسْلُ الرِّجْلَيْن (Ghasl Al-Rijlayn)',
      arabicTransliteration: 'Washing feet to ankles',
      tip: 'Feet ready to stand respectfully on the prayer rug.',
      detail: 'Clean gently between all your toes.',
      iconName: 'Footprints',
      repeatPhrase: 'Clean feet walking to prayer.',
      sensoryTip: 'Wiggle your clean toes on the soft towel!'
    }
  ],
  activity: {
    title: 'Superhero Wudu Checklist Mission',
    type: 'hands-on',
    instructions: 'Follow Captain Ameen’s interactive superhero checklist at the sink to complete your purification power routine!',
    actionItems: [
      '1. Whisper "Bismillah" and wash both hands 3 times.',
      '2. Rinse mouth and nose gently 3 times.',
      '3. Wash face and both arms up to elbows 3 times.',
      '4. Wipe head once and wash both feet clean up to ankles.'
    ],
    interestConnection: 'Charging up your spiritual energy shield like a superhero preparing for their highest noble mission.',
    completionPrompt: 'Check off all steps to unlock your Super Clean Hero Badge!'
  },
  reviewQuestion: {
    question: 'Why do Muslim superheroes make Wudu before praying Salah?',
    hint: 'Think about how water cleanses our body and calms our heart before we talk to Allah.',
    options: [
      {
        id: 'wudu-opt-1',
        text: 'To be clean, calm, and pure before standing to pray to Allah',
        isCorrect: true,
        explanation: 'MashaAllah, exactly right! Wudu cleans our body and prepares our heart with peace.'
      },
      {
        id: 'wudu-opt-2',
        text: 'Just to play with water and make big splashes',
        isCorrect: false,
        explanation: 'In Wudu, we use water respectfully without wasting it or splashing.'
      },
      {
        id: 'wudu-opt-3',
        text: 'Because we are running a race',
        isCorrect: false,
        explanation: 'Wudu is done with calm focus, not in a rush.'
      }
    ],
    correctAnswerExplanation: 'Wudu is a sacred Islamic wash that cleanses our body, relaxes our mind, and prepares our heart to speak directly with Allah in prayer.'
  },
  topicKey: 'wudu',
  ageRange: '4-6',
  learnerNickname: 'Learner 1 (Superhero Fan)',
  selectedInterest: 'Superheroes',
  activeFormat: 'visual',
  learningPreferences: ['visual', 'short_instructions', 'one_step'],
  isCalmMode: false,
  visualContent: {
    title: 'Superhero Wudu Power Steps',
    subtitle: 'Get clean and recharge your good deeds power before praying!',
    completionBadge: '🌟 Super Clean Hero Badge Unlocked!',
    cards: [
      {
        stepNumber: 1,
        title: 'Step 1: Superhero Intention',
        simpleSentence: 'Say Bismillah in your heart and wash both hands 3 times.',
        arabicTerm: 'بِسْمِ اللَّهِ (Bismillah)',
        arabicTransliteration: 'In the name of Allah',
        iconName: 'Sparkles',
        visualHint: 'Rinse hands clean like putting on glowing hero gloves.',
        badge: 'Power Prep'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Clean Words Rinse',
        simpleSentence: 'Rinse your mouth with water 3 times.',
        arabicTerm: 'المَضْمَضَة (Al-Madmadah)',
        arabicTransliteration: 'Rinsing mouth',
        iconName: 'Droplets',
        visualHint: 'Heroes only speak kind, honest words.',
        badge: 'Pure Voice'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Breathe In Clean Air',
        simpleSentence: 'Gently sniff a little water into your nose and blow out 3 times.',
        arabicTerm: 'الاسْتِنْشَاق (Al-Istinshaq)',
        arabicTransliteration: 'Sniffing water gently',
        iconName: 'Wind',
        visualHint: 'Clearing your hero senses for prayer.',
        badge: 'Fresh Breath'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Wash Your Bright Face',
        simpleSentence: 'Wash your entire face from forehead to chin 3 times.',
        arabicTerm: 'غَسْلُ الوَجْهِ (Ghasl Al-Wajh)',
        arabicTransliteration: 'Washing the face',
        iconName: 'Smile',
        visualHint: 'Make your smiling hero face shine bright for Allah.',
        badge: 'Shining Shield'
      },
      {
        stepNumber: 5,
        title: 'Step 5: Power Up Both Arms',
        simpleSentence: 'Wash your right arm then left arm up to the elbow 3 times.',
        arabicTerm: 'غَسْلُ اليَدَيْن (Ghasl Al-Yadayn)',
        arabicTransliteration: 'Washing arms to elbows',
        iconName: 'Zap',
        visualHint: 'Hero arms ready to help family and do good deeds.',
        badge: 'Strong Helping Arms'
      },
      {
        stepNumber: 6,
        title: 'Step 6: Gentle Head & Ear Wipe',
        simpleSentence: 'Wipe your wet hands gently over your head and ears 1 time.',
        arabicTerm: 'مَسْحُ الرَّأْس (Mash Al-Ra’s)',
        arabicTransliteration: 'Wiping the head & ears',
        iconName: 'Crown',
        visualHint: 'A calm hero crown of peace and good thoughts.',
        badge: 'Calm Hero Mind'
      },
      {
        stepNumber: 7,
        title: 'Step 7: Speedy Clean Feet',
        simpleSentence: 'Wash your right foot then left foot up to the ankles 3 times.',
        arabicTerm: 'غَسْلُ الرِّجْلَيْن (Ghasl Al-Rijlayn)',
        arabicTransliteration: 'Washing feet to ankles',
        iconName: 'Footprints',
        visualHint: 'Feet ready to stand respectfully on the prayer rug.',
        badge: 'Ready for Salah'
      }
    ]
  },
  storyContent: {
    title: 'Captain Ameen & The Purity Shield',
    theme: 'Superhero preparation',
    intro: 'Every superhero has a special routine before their most important mission. For Captain Ameen, that mission is meeting Allah in Salah!',
    slides: [
      {
        id: 's1',
        chapterNumber: 1,
        title: 'The Secret Power of Water',
        text: 'Captain Ameen walked over to the clean water tap. He whispered "Bismillah" in his heart. As clean water flowed over his hands, he smiled: "My hands are ready to help others!"',
        interestConnection: 'Like a hero wearing clean protective gloves.',
        islamicTeaching: 'Starting with Bismillah and washing hands 3 times.',
        iconName: 'Sparkles',
        actionPrompt: 'Can you show your clean hero hands?'
      },
      {
        id: 's2',
        chapterNumber: 2,
        title: 'Words of Truth and Light',
        text: 'Next, Captain Ameen gently rinsed his mouth and nose with fresh water. "A superhero always speaks kindness and tells the truth," he remembered.',
        interestConnection: 'Clear voice transmitters for peaceful messages.',
        islamicTeaching: 'Rinsing mouth and nose cleans our speech and senses.',
        iconName: 'Smile'
      },
      {
        id: 's3',
        chapterNumber: 3,
        title: 'The Shining Face Shield',
        text: 'With three scoops of fresh water, Ameen washed his cheerful face. His face felt cool and refreshed. "Allah loves those who stay clean and pure," he smiled.',
        interestConnection: 'Polishing the hero helmet to shine bright.',
        islamicTeaching: 'Washing the entire face 3 times with gentle care.',
        iconName: 'Sun'
      },
      {
        id: 's4',
        chapterNumber: 4,
        title: 'Ready for the Highest Mission',
        text: 'After washing his arms and wiping his head gently, Ameen washed both feet clean. Standing tall and peaceful on his prayer mat, Captain Ameen was 100% ready to pray Salah to Allah.',
        interestConnection: 'Mission Launch Ready!',
        islamicTeaching: 'Completing Wudu brings tranquility before prayer.',
        iconName: 'CheckCircle2'
      }
    ],
    conclusion: 'Wudu is the Muslim superhero way to cleanse our bodies and calm our hearts before talking to Allah.',
    reflectionQuestion: 'How do you feel when your hands and face are fresh and clean?'
  },
  stepContent: {
    title: 'One-by-One Wudu Steps',
    goal: 'Complete each step one at a time.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Intention & Wash Hands',
        instruction: 'Say Bismillah in your heart. Wash both hands up to the wrists 3 times.',
        detail: 'Make sure water reaches between your fingers.',
        repeatPhrase: 'Clean hands do good deeds.',
        iconName: 'Droplets',
        sensoryTip: 'Feel the cool, soothing water on your palms.'
      },
      {
        stepNumber: 2,
        title: '2. Rinse Mouth',
        instruction: 'Take water in your right hand, rinse your mouth gently 3 times.',
        detail: 'Swirl the water softly and spit it out.',
        repeatPhrase: 'Clean mouth speaks kindness.',
        iconName: 'Smile',
        sensoryTip: 'A gentle swish without any rushing.'
      },
      {
        stepNumber: 3,
        title: '3. Rinse Nose',
        instruction: 'Sniff a little water into your nose and gently blow it out 3 times.',
        detail: 'Use a light touch with your left hand to clear.',
        repeatPhrase: 'Fresh breath and clear mind.',
        iconName: 'Wind',
        sensoryTip: 'Only a few gentle drops.'
      },
      {
        stepNumber: 4,
        title: '4. Wash Face',
        instruction: 'Wash your whole face 3 times from your hairline down to your chin.',
        detail: 'From ear to ear with both gentle hands.',
        repeatPhrase: 'A smiling face for Allah.',
        iconName: 'Sun',
        sensoryTip: 'Cup water in your hands like a soft bowl.'
      },
      {
        stepNumber: 5,
        title: '5. Wash Arms to Elbows',
        instruction: 'Wash your right arm up to the elbow 3 times, then your left arm 3 times.',
        detail: 'Rub gently so all parts get wet.',
        repeatPhrase: 'Right side first, then left side.',
        iconName: 'Zap',
        sensoryTip: 'Feel the smooth glide of water from fingers to elbow.'
      },
      {
        stepNumber: 6,
        title: '6. Wipe Head & Ears',
        instruction: 'Wet your hands, wipe over your hair from front to back, and gently wipe ears 1 time.',
        detail: 'Just one soft wipe is needed.',
        repeatPhrase: 'Calm thoughts in my mind.',
        iconName: 'Crown',
        sensoryTip: 'Light like a feather resting on your head.'
      },
      {
        stepNumber: 7,
        title: '7. Wash Feet to Ankles',
        instruction: 'Wash your right foot up to the ankle 3 times, then your left foot 3 times.',
        detail: 'Clean between all your toes.',
        repeatPhrase: 'Clean feet walking to prayer.',
        iconName: 'Footprints',
        sensoryTip: 'Wiggle your clean toes on the towel!'
      }
    ],
    successMessage: 'Alhamdulillah! You completed all 7 Wudu steps with superhero focus!'
  },
  flashcardContent: {
    title: 'Wudu Action Cards',
    cards: [
      {
        id: 'fc1',
        frontTerm: 'Wudu',
        frontArabic: 'الوُضُوء',
        frontTransliteration: 'Al-Wudu',
        frontSubtext: 'The special Islamic wash',
        backDefinition: 'Cleaning specific body parts with pure water before praying Salah.',
        backInterestAnalogy: 'Like a superhero charging their solar battery before a mission.',
        backActionOrQuestion: 'Why do we make Wudu? (To be pure and peaceful before Allah)',
        iconName: 'Droplets'
      },
      {
        id: 'fc2',
        frontTerm: 'Niyyah',
        frontArabic: 'النِّيَّة',
        frontTransliteration: 'An-Niyyah',
        frontSubtext: 'Intention in the heart',
        backDefinition: 'Quietly deciding in your heart that you are doing this action for Allah.',
        backInterestAnalogy: 'Like setting your superpower target before taking flight.',
        backActionOrQuestion: 'Where does Niyyah live? (In the heart!)',
        iconName: 'Heart'
      },
      {
        id: 'fc3',
        frontTerm: 'Bismillah',
        frontArabic: 'بِسْمِ اللَّهِ',
        frontTransliteration: 'Bismillah',
        frontSubtext: 'Starting with blessing',
        backDefinition: 'Means "In the name of Allah". We say it before starting anything good.',
        backInterestAnalogy: 'The master activation phrase for goodness.',
        backActionOrQuestion: 'When can you say Bismillah today? (Before eating, drinking, or learning)',
        iconName: 'Sparkles'
      }
    ]
  },
  parentTips: {
    summary: 'Tailored for early visual learners who thrive on short, concrete cues and superhero framing.',
    reviewStrategy: 'Keep the 7-step visual cards near the bathroom sink as a visual schedule so the child can point to each card while practicing.',
    repetitionTip: 'Use the phrase "Clean hands, shining face, happy heart" to establish a calm rhythmic sequence.',
    activitySuggestion: 'Let your child place a toy superhero next to the towel to act as their "Wudu Mission Buddy".',
    sensoryBreakTip: 'If water temperature is sensitive, test a gentle lukewarm stream and use soft microfiber towels for drying.',
    nextFormatRecommendation: 'If they find the sequence easy, try Step-by-Step Mode to let them check off each step individually.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.'
};

export const HACKATHON_DEMO_LEARNER_2: LessonData = {
  id: 'demo-wudu-space',
  topic: 'How to Make Wudu',
  title: 'Astronaut Zayd & The Calm Space Wudu Routine',
  learningObjective: 'Learn to complete Wudu with steady, unhurried mindfulness before prayer.',
  introduction: 'Deep in the calm stillness of space, Astronaut Zayd prepares for prayer by following the sacred Wudu routine step by step.',
  lessonSteps: [
    {
      stepNumber: 1,
      title: '1. Silent Intention & Hand Wash',
      instruction: 'Pause in gentle stillness. Intend in your heart to make Wudu and whisper Bismillah. Wash hands 3 times.',
      arabicTerm: 'بِسْمِ اللَّهِ',
      arabicTransliteration: 'Bismillah',
      tip: 'Notice the temperature and calm flow of the water.',
      detail: 'Wash slowly up to the wrists.',
      iconName: 'Droplets',
      repeatPhrase: 'Bismillah. My hands are clean and ready.',
      sensoryTip: 'Adjust water flow to a quiet, soothing gentle stream.',
      actionPrompt: 'Take a deep breath and whisper Bismillah.'
    },
    {
      stepNumber: 2,
      title: '2. Gentle Mouth & Nose Rinse',
      instruction: 'Rinse your mouth 3 times and nose 3 times with gentle water.',
      arabicTerm: 'المَضْمَضَة وَالاسْتِنْشَاق',
      arabicTransliteration: 'Al-Madmadah & Al-Istinshaq',
      tip: 'Move slowly without sudden splashing.',
      detail: 'Clear your speech and breath with calm focus.',
      iconName: 'Wind',
      repeatPhrase: 'Speaking peace and truth.',
      sensoryTip: 'Take a soft breath between each rinse.'
    },
    {
      stepNumber: 3,
      title: '3. Wash Face with Care',
      instruction: 'Wash your face 3 times from hairline down to chin.',
      arabicTerm: 'غَسْلُ الوَجْهِ',
      arabicTransliteration: 'Ghasl Al-Wajh',
      tip: 'Cool water refreshes your senses like morning starlight.',
      detail: 'Cover the whole face with calm care.',
      iconName: 'Sun',
      repeatPhrase: 'A clean face ready for prayer.',
      sensoryTip: 'Feel the refreshing warmth or coolness.'
    },
    {
      stepNumber: 4,
      title: '4. Wash Arms to Elbows',
      instruction: 'Wash right arm to elbow 3 times, then left arm 3 times.',
      arabicTerm: 'غَسْلُ اليَدَيْن',
      arabicTransliteration: 'Ghasl Al-Yadayn',
      tip: 'Right side first, left side second.',
      detail: 'Trace the water smoothly with your fingers.',
      iconName: 'Shield',
      repeatPhrase: 'Right side first, then left side.',
      sensoryTip: 'Feel the smooth glide of water from fingers to elbow.'
    },
    {
      stepNumber: 5,
      title: '5. Light Head & Ear Wipe',
      instruction: 'Lightly wipe damp hands over hair and inside ears 1 time.',
      arabicTerm: 'مَسْحُ الرَّأْس',
      arabicTransliteration: 'Mash Al-Ra’s',
      tip: 'Just one soft, peaceful pass is needed.',
      detail: 'Very gentle touch from front to back.',
      iconName: 'Moon',
      repeatPhrase: 'Calm mind, listening for good words.',
      sensoryTip: 'Very light pressure like a soft breeze.'
    },
    {
      stepNumber: 6,
      title: '6. Wash Feet to Ankles',
      instruction: 'Wash right foot 3 times, then left foot 3 times to the ankles.',
      arabicTerm: 'غَسْلُ الرِّجْلَيْن',
      arabicTransliteration: 'Ghasl Al-Rijlayn',
      tip: 'Clean between toes with quiet patience.',
      detail: 'Ensure water touches the ankles and heels.',
      iconName: 'Footprints',
      repeatPhrase: 'Standing on clean ground for Allah.',
      sensoryTip: 'Pat dry softly with a comforting towel.'
    }
  ],
  activity: {
    title: 'Space Explorer Mindfulness Checklist',
    type: 'reflection',
    instructions: 'Practice Astronaut Zayd’s calm pre-flight Wudu routine with zero rush:',
    actionItems: [
      '1. Take 2 slow deep breaths and whisper Bismillah.',
      '2. Follow the 6 water steps at a peaceful, steady rhythm.',
      '3. Align your prayer rug toward the Qiblah and say Alhamdulillah.'
    ],
    interestConnection: 'Calibrating your focus like an astronaut preparing instruments for an orbit check.',
    completionPrompt: 'Completed with full serenity!'
  },
  reviewQuestion: {
    question: 'Why is it recommended to perform Wudu calmly and step by step without rushing?',
    hint: 'Think about how moving slowly helps our mind and heart feel peaceful before talking to Allah.',
    options: [
      {
        id: 'space-opt-1',
        text: 'Because moving slowly and mindfully helps calm our heart and brings focus for prayer',
        isCorrect: true,
        explanation: 'Excellent! Mindful, unhurried actions bring tranquility (Sakina) to our worship.'
      },
      {
        id: 'space-opt-2',
        text: 'Because rushing makes us win a prize',
        isCorrect: false,
        explanation: 'Prayer and Wudu are about sincerity and peace, not winning a race.'
      },
      {
        id: 'space-opt-3',
        text: 'Because we should skip steps when we want to',
        isCorrect: false,
        explanation: 'Following the correct sequence is part of following the Sunnah of Prophet Muhammad (ﷺ).'
      }
    ],
    correctAnswerExplanation: 'Performing Wudu calmly and thoughtfully helps soothe our nervous system, clears distractions, and centers our intention solely for Allah.'
  },
  topicKey: 'wudu',
  ageRange: '7-9',
  learnerNickname: 'Learner 2 (Calm Space Explorer)',
  selectedInterest: 'Space & Astronomy',
  activeFormat: 'story',
  learningPreferences: ['storytelling', 'repetition', 'low_stimulation'],
  isCalmMode: true,
  storyContent: {
    title: 'The Quiet Orbit: Astronaut Zayd Prepares for Salah',
    theme: 'Calm Space Exploration',
    intro: 'Deep in the calm stillness of space, Astronaut Zayd floated by the observatory window of his research station. The stars outside were quiet and steady. It was time for Dhuhr prayer.',
    slides: [
      {
        id: 'sp1',
        chapterNumber: 1,
        title: '1. The Stillness of Intention',
        text: 'Zayd floated to the station wash bay. Before touching the pure water dispenser, he paused in gentle silence. In his heart, he made his Niyyah (intention) and whispered "Bismillah". The quiet hum of the spaceship felt steady and safe.',
        interestConnection: 'Like an astronaut checking flight systems before ignition.',
        islamicTeaching: 'Every good deed begins with a quiet intention in the heart for Allah.',
        iconName: 'Moon',
        actionPrompt: 'Take a deep breath and whisper Bismillah.'
      },
      {
        id: 'sp2',
        chapterNumber: 2,
        title: '2. Washing Hands and Speaking Peace',
        text: 'Zayd washed both hands three times, watching the clear water droplets. He rinsed his mouth and nose gently. "Just as space requires calm communication, my words should bring peace to everyone around me," Zayd thought.',
        interestConnection: 'Testing clear audio frequencies to Mission Control.',
        islamicTeaching: 'Rinsing mouth and nose cleanses our speech and clears our breathing.',
        iconName: 'Droplets'
      },
      {
        id: 'sp3',
        chapterNumber: 3,
        title: '3. A Face as Clear as Starlight',
        text: 'Zayd washed his face three times. The cool water felt refreshing and soothing. He then washed his right arm up to the elbow three times, and his left arm three times. Every movement was slow, deliberate, and unhurried.',
        interestConnection: 'Gentle solar panels aligning smoothly with the morning light.',
        islamicTeaching: 'Washing the face and arms with patience and mindfulness.',
        iconName: 'Sun'
      },
      {
        id: 'sp4',
        chapterNumber: 4,
        title: '4. Soft Head Wipe and Clean Footsteps',
        text: 'With damp hands, Zayd lightly swept over his hair and ears once. Finally, he washed his right foot then his left foot to the ankles. His body felt light, calm, and pure. He unrolled his prayer mat facing the Qiblah direction of planet Earth.',
        interestConnection: 'Final countdown complete. Station aligned with Earth.',
        islamicTeaching: 'Wiping the head once and washing feet completes Wudu with full serenity.',
        iconName: 'Compass'
      }
    ],
    conclusion: 'No matter where we are—on planet Earth or traveling among the stars—Wudu brings a quiet calm to our hearts before we converse with Allah.',
    reflectionQuestion: 'Why do you think taking our time in Wudu helps our mind feel peaceful?'
  },
  visualContent: {
    title: 'Space Station Wudu Sequence',
    subtitle: 'Calm, steady steps to align your heart before Salah.',
    completionBadge: '🌌 Space Mission Cleanliness Completed',
    cards: [
      {
        stepNumber: 1,
        title: 'Step 1: Quiet Niyyah & Hands',
        simpleSentence: 'Say Bismillah quietly in your heart and wash hands 3 times.',
        arabicTerm: 'بِسْمِ اللَّهِ',
        iconName: 'Sparkles',
        visualHint: 'Clear water on palms.',
        badge: 'Orbit Step 1'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Gentle Mouth & Nose Rinse',
        simpleSentence: 'Rinse mouth 3 times and nose 3 times with gentle water.',
        arabicTerm: 'المَضْمَضَة وَالاسْتِنْشَاق',
        iconName: 'Droplets',
        visualHint: 'Fresh, calm breath.',
        badge: 'Orbit Step 2'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Wash Face',
        simpleSentence: 'Wash your entire face gently 3 times.',
        arabicTerm: 'غَسْلُ الوَجْهِ',
        iconName: 'Smile',
        visualHint: 'Cool water on face.',
        badge: 'Orbit Step 3'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Wash Arms to Elbows',
        simpleSentence: 'Wash right arm 3 times, then left arm 3 times up to elbows.',
        arabicTerm: 'غَسْلُ اليَدَيْن',
        iconName: 'Shield',
        visualHint: 'Right first, then left.',
        badge: 'Orbit Step 4'
      },
      {
        stepNumber: 5,
        title: 'Step 5: Light Head & Ear Wipe',
        simpleSentence: 'Wipe damp hands once over head and ears.',
        arabicTerm: 'مَسْحُ الرَّأْس',
        iconName: 'Moon',
        visualHint: 'One soft pass.',
        badge: 'Orbit Step 5'
      },
      {
        stepNumber: 6,
        title: 'Step 6: Wash Feet to Ankles',
        simpleSentence: 'Wash right foot 3 times, then left foot 3 times to ankles.',
        arabicTerm: 'غَسْلُ الرِّجْلَيْن',
        iconName: 'Footprints',
        visualHint: 'Right foot first, then left foot.',
        badge: 'Orbit Step 6'
      }
    ]
  },
  stepContent: {
    title: 'Calm Step-by-Step Wudu',
    goal: 'Take your time. One peaceful step at a time.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Silent Intention & Hand Wash',
        instruction: 'Pause in silence. Intend in your heart to make Wudu. Wash your hands 3 times.',
        detail: 'Notice the temperature of the water.',
        repeatPhrase: 'Bismillah. My hands are clean.',
        iconName: 'Droplets',
        sensoryTip: 'Adjust water flow to a quiet, gentle stream.'
      },
      {
        stepNumber: 2,
        title: '2. Rinse Mouth & Nose',
        instruction: 'Gently rinse mouth 3 times and nose 3 times.',
        detail: 'Move slowly without sudden splashing.',
        repeatPhrase: 'Speaking peace and truth.',
        iconName: 'Wind',
        sensoryTip: 'Take a soft breath between each rinse.'
      },
      {
        stepNumber: 3,
        title: '3. Wash Face',
        instruction: 'Wash your face 3 times from forehead to chin.',
        detail: 'Cover the whole face with calm care.',
        repeatPhrase: 'A clean face ready for prayer.',
        iconName: 'Sun',
        sensoryTip: 'Feel the refreshing warmth or coolness.'
      },
      {
        stepNumber: 4,
        title: '4. Wash Arms to Elbows',
        instruction: 'Wash right arm to elbow 3 times, then left arm 3 times.',
        detail: 'Right side first, left side second.',
        repeatPhrase: 'Right side first, then left side.',
        iconName: 'Shield',
        sensoryTip: 'Trace the water smoothly with your fingers.'
      },
      {
        stepNumber: 5,
        title: '5. Wipe Head and Ears',
        instruction: 'Lightly wipe over hair and inside ears 1 time.',
        detail: 'Just one gentle touch.',
        repeatPhrase: 'Calm mind, listening for good words.',
        iconName: 'Moon',
        sensoryTip: 'Very light pressure.'
      },
      {
        stepNumber: 6,
        title: '6. Wash Feet to Ankles',
        instruction: 'Wash right foot 3 times, then left foot 3 times.',
        detail: 'Ensure water touches between toes and ankles.',
        repeatPhrase: 'Standing on clean ground for Allah.',
        iconName: 'Footprints',
        sensoryTip: 'Pat dry softly with a comforting towel.'
      }
    ],
    successMessage: 'Alhamdulillah. Your quiet Wudu routine is complete.'
  },
  flashcardContent: {
    title: 'Quiet Reflection Flashcards',
    cards: [
      {
        id: 'sc1',
        frontTerm: 'Wudu (Purity)',
        frontArabic: 'الوُضُوء',
        frontTransliteration: 'Al-Wudu',
        frontSubtext: 'The calming preparation',
        backDefinition: 'A sacred cleansing of hands, face, arms, and feet that prepares our heart for Salah.',
        backInterestAnalogy: 'Like the quiet pre-flight checklist that gives astronauts safety and peace.',
        backActionOrQuestion: 'How does water help our body feel calm?',
        iconName: 'Droplets'
      },
      {
        id: 'sc2',
        frontTerm: 'Niyyah (Heart Intent)',
        frontArabic: 'النِّيَّة',
        frontTransliteration: 'An-Niyyah',
        frontSubtext: 'The inner purpose',
        backDefinition: 'The quiet focus in the heart deciding to do an action purely for Allah’s pleasure.',
        backInterestAnalogy: 'Like calibrating the ship’s gyroscope to the true star map.',
        backActionOrQuestion: 'Can anyone hear your Niyyah? (Allah knows what is in our quiet hearts.)',
        iconName: 'Heart'
      },
      {
        id: 'sc3',
        frontTerm: 'Salah (Connection)',
        frontArabic: 'الصَّلَاة',
        frontTransliteration: 'As-Salah',
        frontSubtext: 'Direct line to Allah',
        backDefinition: 'The 5 daily prayers where we speak directly to Allah, praising Him and asking for guidance.',
        backInterestAnalogy: 'A secure communication channel open 24/7 across the universe.',
        backActionOrQuestion: 'How many times each day do Muslims pause for Salah? (5 times)',
        iconName: 'Compass'
      }
    ]
  },
  parentTips: {
    summary: 'Created for narrative-driven, low-stimulation learners who benefit from soothing rhythms and space analogies.',
    reviewStrategy: 'Read the story slide by slide in a calm, dimly lit or comfortable reading corner before visiting the sink.',
    repetitionTip: 'Use a predictable countdown or routine song so the learner knows exactly what step comes next.',
    activitySuggestion: 'Let the child hold a small tactile item (like a smooth pebble or space badge) while listening to the story.',
    sensoryBreakTip: 'Offer a choice of hand towel texture (fluffy vs smooth) and keep ambient bathroom lighting soft.',
    nextFormatRecommendation: 'Try Flashcard Mode for a quiet 3-minute vocabulary check-in when winding down before bedtime.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.'
};

/**
 * The Five Pillars of Islam (Arkān al-Islām) - Master Structured Lesson
 * Complete with:
 * 1. Names of the Five Pillars (Arkan ul-Islam: Shahadah, Salah, Zakat, Siyam, Hajj)
 * 2. Simplified concept of how they "hold up" our Deen like strong shelter pillars and why we need each
 * 3. Dedicated Surah Al-Fatihah line-by-line learning breakdown with Tafsir Ibn Kathir,
 *    explanation of Mercy (Rahmah) and how we show mercy, and teaching the child to say Alhamdulillah
 * 4. Complete Salah steps with Arabic, transliteration, and meanings (Thana, Fatihah, Ruku, I'tidal, Sujood, Tashahhud, Salawat, Taslim)
 * 5. Zakat charity giving mini-game to help other children and make the world fair
 * 6. Siyam (Ramadan Sawm) gratitude and day simulator (Suhoor -> Dhikr -> Prep -> Iftar -> Taraweeh)
 * 7. Hajj story of Prophet Ibrahim (AS), Ka'bah, and cute gentle sheep visuals
 * 8. Tailored cartoon companion visuals (Princesses & Castles, Bluey, Chase Paw Patrol, Astronauts, Superheroes, Sheep)
 */
export const FIVE_PILLARS_LESSON: LessonData = {
  id: 'five-pillars-structured-master',
  topic: 'The Five Pillars of Islam (Arkān al-Islām)',
  title: 'Arkān al-Islām: The 5 Pillars Holding Up Our Deen',
  learningObjective: 'Master the 5 Pillars of Islam (Shahadah, Salah, Zakat, Siyam, Hajj), learn how they hold up our Deen, memorize Suratul Fatiha verse-by-verse with meanings and Tafsir Ibn Kathir, and practice prayer movements with visual PEC cards.',
  introduction: 'Welcome! Today we discover Arkān al-Islām (The Five Pillars of Islam): 1. Shahadah, 2. Salah, 3. Zakat, 4. Siyam, 5. Hajj. Think of our Deen like a beautiful, safe castle or shelter. The roof protects our heart with peace, and the 5 strong Pillars hold the roof high so it never falls down! We need each pillar to keep our life safe, clean, fair, and filled with Allah\'s love.',
  topicKey: 'five_pillars',
  ageRange: '7-9',
  learnerNickname: 'Young Faithful Explorer',
  selectedInterest: 'Princesses & Castles (or Bluey, Chase Paw Patrol, Astronauts)',
  activeFormat: 'interactive_cards',
  learningPreferences: ['visual', 'short_instructions', 'one_step', 'repetition', 'storytelling'],
  isCalmMode: false,
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'Arkān al-Islām: The 5 Pillars Holding Up Our Deen',
      instruction: 'Learn the 5 Names: 1. Shahadah (Faith), 2. Salah (Prayer), 3. Zakat (Charity), 4. Siyam (Fasting), 5. Hajj (Pilgrimage).',
      arabicTerm: 'أَرْكَانُ الإِسْلَامِ خَمْسَة: الشَّهَادَة • الصَّلَاة • الزَّكَاة • الصِّيَام • الحَجّ',
      arabicTransliteration: 'Arkān al-Islām: Ash-Shahadah, As-Salah, Az-Zakat, As-Siyam, Al-Hajj',
      tip: 'Our Deen is like a sturdy shelter or royal castle: the 5 pillars hold up the roof of peace and faith!',
      detail: 'Why we need each one: Shahadah anchors our heart to One Allah; Salah connects us 5 times daily; Zakat shares blessings so the world is fair; Siyam builds patience and gratitude; Hajj unites all Muslims as one family.',
      iconName: 'Shield',
      repeatPhrase: 'Shahadah, Salah, Zakat, Siyam, Hajj — The 5 Pillars of Islam!',
      sensoryTip: 'Picture 5 glowing pillars of light holding up a cozy, warm roof protecting your heart.',
      actionPrompt: 'Can you count all 5 pillars on your 5 fingers?'
    },
    {
      stepNumber: 2,
      title: 'Pillar 1: Shahadah (Declaration of Faith & Fitrah)',
      instruction: 'Declare with your heart: There is no God except Allah, and Muhammad is His Messenger.',
      arabicTerm: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ',
      arabicTransliteration: 'Laa ilaaha ill-Allah, Muhammadur-Rasulullah',
      tip: 'Fitrah is our heart\'s natural compass knowing there is One Creator who made the stars, castles, and animals.',
      detail: 'We love Allah through His Beautiful Names: Al-Khaliq (The Creator), Ar-Rahman (The Most Merciful), and Al-Ahad (The Only One).',
      iconName: 'Heart',
      repeatPhrase: 'Laa ilaaha ill-Allah — There is no god but Allah.',
      sensoryTip: 'Place a gentle hand on your heart and feel its steady, calm rhythm as you whisper the Shahadah.',
      actionPrompt: 'Say "Laa ilaaha ill-Allah" with a peaceful smile.'
    },
    {
      stepNumber: 3,
      title: 'Pillar 2: Salah - Qiyam & Opening Thana Praise',
      instruction: 'Stand tall facing the Qiblah. Raise both hands saying "Allahu Akbar" and recite the opening Thana.',
      arabicTerm: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ',
      arabicTransliteration: 'Subhanaka Allahumma wa bi hamdika, wa tabaaraka ismuka, wa taʿala jadduka, wa la ilaaha ghayruk',
      tip: 'Task = Reward: Unlocking the Standing Praise Badge!',
      detail: 'Meaning: "Glory is to You, O Allah, and praise. Blessed is Your Name, and exalted is Your Majesty. There is no god besides You."',
      iconName: 'Sparkles',
      repeatPhrase: 'Glory is to You, O Allah, and all praise is for You.',
      sensoryTip: 'Feel your feet flat, balanced, and grounded on the soft prayer rug.',
      actionPrompt: 'Fold hands gently right over left across your chest.'
    },
    {
      stepNumber: 4,
      title: 'Suratul Fatiha: Verse 1 - Bismillah & Mercy (Rahmah)',
      instruction: 'Recite Verse 1: "Bismillah ar-Rahman ar-Raheem" (In the name of Allah, the Most Merciful, the Especially Merciful).',
      arabicTerm: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ١',
      arabicTransliteration: 'Bismillah ar-Rahman ar-Raheem (Verse 1)',
      tip: 'What is Mercy (Rahmah)? Mercy is gentle care, soothing hugs, forgiving mistakes, and being kind to friends and animals!',
      detail: 'Tafsir Ibn Kathir explains: "Ar-Rahman" is Allah\'s vast mercy embracing all creations; "Ar-Raheem" is His special, loving mercy for believers. The Prophet ﷺ taught: "Those who show mercy will be shown mercy by the Most Merciful."',
      iconName: 'BookOpen',
      repeatPhrase: 'Bismillah ar-Rahman ar-Raheem — In the name of Allah, the Most Merciful, the Especially Merciful.',
      sensoryTip: 'Take a slow, deep breath in and whisper the words smoothly.',
      actionPrompt: 'How can you show mercy to someone today? (e.g. sharing a toy or giving a gentle hug).'
    },
    {
      stepNumber: 5,
      title: 'Suratul Fatiha: Verse 2 - Saying "Alhamdulillah" with Gratitude',
      instruction: 'Recite Verse 2: "Alhamdu lillahi Rabbil \'alameen" (All thanks and praise are for Allah, Lord of the Worlds).',
      arabicTerm: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ٢',
      arabicTransliteration: 'Alhamdu lillahi Rabbil \'alameen (Verse 2)',
      tip: 'What does Alhamdulillah mean? It means saying "Thank you Allah!" with wholehearted love for our heartbeat, eyes, family, yummy food, and water.',
      detail: 'Tafsir Ibn Kathir notes: "Al-Hamd" is expressing sincere gratitude and praise; "Rabb al-\'Alameen" means Allah is the supreme Caretaker, Sustainer, and Guardian of all existing worlds—humans, angels, stars, oceans, and animals.',
      iconName: 'Sun',
      repeatPhrase: 'Alhamdulillah! (All praise and thanks to Allah!).',
      sensoryTip: 'Say "Alhamdulillah" out loud right now and smile as you think of your favorite blessing.',
      actionPrompt: 'Teach yourself to say "Alhamdulillah" every time you drink water or finish a meal!'
    },
    {
      stepNumber: 6,
      title: 'Suratul Fatiha: Verses 3 to 7 (Guidance on the Straight Path)',
      instruction: 'Recite Verses 3-7 line by line, completing the sacred conversation with Allah.',
      arabicTerm: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ٣ • مَـٰلِكِ يَوْمِ ٱلدِّينِ ٤ • إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٥ • ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ٦ • صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ٧',
      arabicTransliteration: '3. Ar-Rahmaani-r-Raheem • 4. Maaliki yawmi-d-deen • 5. Iyyaka naʿbudu wa iyyaka nastaʿin • 6. Ihdina-s-siraata-l-mustaqim • 7. Siraata-l-ladheena anʿamta ʿalayhim ghayri-l-maghdoobi ʿalayhim wa la-d-daalleen',
      tip: 'In Verse 5 ("Iyyaka na\'budu wa iyyaka nasta\'een"), we remember we can ask Allah for help anytime we feel tired, scared, or happy!',
      detail: 'Meanings: 3. The Most Merciful. 4. Master of the Day of Judgment. 5. You alone we worship and ask for help. 6. Guide us to the Straight Path. 7. The path of those You have favored and blessed.',
      iconName: 'Compass',
      repeatPhrase: 'Iyyaka naʿbudu wa iyyaka nastaʿin — You alone we worship, and You alone we ask for help.',
      sensoryTip: 'Recite calmly like following a bright, peaceful path of light.',
      actionPrompt: 'Recite any short Surah (like Surah Al-Ikhlas) after Al-Fatihah in the first two Rakat.'
    },
    {
      stepNumber: 7,
      title: 'Salah: Ruku (Bowing) & I’tidal (Standing Straight)',
      instruction: 'Bow placing hands on knees (Ruku) saying "Subhaana Rabbiyal-ʿAdheem" (x3). Stand up straight (I’tidal) saying "Samiʿa Allahu liman hamidah • Rabbana wa Lakal Hamd".',
      arabicTerm: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ (Ruku x3) • سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ • رَبَّنَا وَلَكَ الْحَمْدُ (I’tidal)',
      arabicTransliteration: 'Subhaana Rabbiyal-ʿAdheem (x3) • Samiʿa Allahu liman hamidah • Rabbana wa Lakal Hamd',
      tip: 'Task = Reward: Unlocking the Bowing of Respect Badge!',
      detail: 'Meanings: "Glory is to my Lord, the Most Great" (Ruku). "Allah hears the one who praises Him" and "Our Lord, to You belongs all praise" (I’tidal).',
      iconName: 'Smile',
      repeatPhrase: 'Subhaana Rabbiyal-ʿAdheem — Glory to my Lord the Most Great.',
      sensoryTip: 'Keep your back flat like a gentle table, pause for 3 quiet seconds, then stand straight.',
      actionPrompt: 'Bow smoothly with hands cupping your knees.'
    },
    {
      stepNumber: 8,
      title: 'Salah: Sujood, Tashahhud, Salawat & Taslim (Completion)',
      instruction: 'Prostrate in Sujood ("Subhaana Rabbiyal-Aʿla" x3), sit for Tashahhud & Salawat, and conclude with Taslim ("As-salaamu ʿalaykum wa rahmatullah").',
      arabicTerm: 'سُبْحَانَ رَبِّيَ الأَعْلَى (x3) • التَّحِيَّاتُ لِلَّهِ... • اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ... • السَّلَامُ عَلَيْكُم وَرَحْمَةُ اللَّهِ',
      arabicTransliteration: 'Subhaana Rabbiyal-Aʿla (x3) • At-tahiyyatu lillaahi... • Allahumma salli ʿala Muhammad... • As-salaamu ʿalaykum wa rahmatullah',
      tip: 'In Sujood, we are closest to Allah! You can whisper any sweet dua in your heart.',
      detail: 'Tashahhud: "All greetings and good things are for Allah..." Salawat: Blessings on Muhammad ﷺ and Ibrahim (AS). Taslim: Turn head right, then left, spreading peace.',
      iconName: 'CheckCircle2',
      repeatPhrase: 'As-salaamu ʿalaykum wa rahmatullah — Peace and mercy of Allah be upon you.',
      sensoryTip: 'Feel the soft, comforting rug under your forehead in Sujood.',
      actionPrompt: 'Turn your head gently to the right, then to the left with Taslim.'
    },
    {
      stepNumber: 9,
      title: 'Pillar 3: Zakat (Giving Charity & Making the World Fair)',
      instruction: 'Share wealth and charity with children and families in need so everyone has food, clothes, and school books.',
      arabicTerm: 'الزَّكَاة (Az-Zakat)',
      arabicTransliteration: 'Az-Zakat (Purifying Charity)',
      tip: 'Giving charity never decreases wealth; it brings barakah (blessings) and happy smiles to everyone!',
      detail: 'Zakat is mandatory charity that purifies our heart from greed. Even sharing a kind smile or helping a friend is Sadaqah (charity)!',
      iconName: 'HeartHandshake',
      repeatPhrase: 'Sharing brings joy and keeps the world fair and kind.',
      sensoryTip: 'Notice the warm, happy glow in your chest when you help someone.',
      actionPrompt: 'Think of 1 generous thing you can share with a friend today.'
    },
    {
      stepNumber: 10,
      title: 'Pillar 4: Siyam (Sawm - Fasting & Gratitude in Ramadan)',
      instruction: 'Fast from dawn to sunset in Ramadan to remember Allah, build kindness, and appreciate all our blessings.',
      arabicTerm: 'الصِّيَام (As-Siyam / As-Sawm)',
      arabicTransliteration: 'As-Siyam (Ramadan Fasting)',
      tip: 'Ramadan Day Routine: Suhoor meal -> Morning prayers & Dhikr -> Helping family with food prep -> Sweet dates at Iftar -> Peaceful Taraweeh.',
      detail: 'Fasting teaches us empathy for those who are hungry and fills our day with gratitude and Quran recitation.',
      iconName: 'Moon',
      repeatPhrase: 'Alhamdulillah for all our food, water, and blessings.',
      sensoryTip: 'Enjoy the sweet, comforting taste of water and fresh dates at Iftar.',
      actionPrompt: 'Can you name 3 blessings you say Alhamdulillah for every single day?'
    },
    {
      stepNumber: 11,
      title: 'Pillar 5: Hajj (Pilgrimage, Prophet Ibrahim AS & Gentle Sheep)',
      instruction: 'Visit the sacred Ka’bah in Makkah once in a lifetime if able, honoring Prophet Ibrahim (AS) and uniting all Muslims as equals.',
      arabicTerm: 'الحَجّ (Al-Hajj)',
      arabicTransliteration: 'Al-Hajj (The Sacred Pilgrimage)',
      tip: 'Hajj Steps: Ihram white clothes -> Tawaf around Ka’bah -> Sa’i walking -> Mount Arafat prayer -> Mina -> Eid celebration with cute gentle sheep!',
      detail: 'Prophet Ibrahim (AS) and Ismail (AS) built the Ka’bah. In Hajj, millions of believers wear simple white clothes as equal brothers and sisters under Allah.',
      iconName: 'Compass',
      repeatPhrase: 'Labbayk Allahumma Labbayk — Here I am at Your service, O Allah.',
      sensoryTip: 'Imagine walking around the Ka’bah under the open blue sky with gentle breezes.',
      actionPrompt: 'Picture Muslims from every country around the world praying peacefully together.'
    }
  ],
  activity: {
    title: 'Arkān al-Islām Interactive Adventure & Giving Mini-Game',
    type: 'multi-part-mission',
    instructions: 'Complete the 5-step interactive mission: 1. Name the 5 Pillars of Islam, 2. Practice Saying "Alhamdulillah", 3. Recite Fatihah line by line, 4. Distribute Zakat Charity Packages, and 5. Complete the Hajj Steps Sequence!',
    actionItems: [
      '1. Pillars Check: Name the 5 Arkan ul-Islam (Shahadah, Salah, Zakat, Siyam, Hajj) and how they hold up our Deen like shelter posts.',
      '2. Alhamdulillah Practice: Say "Alhamdulillah" 3 times with a big smile, thanking Allah for your breathing, eyes, and family (referencing Tafsir Ibn Kathir).',
      '3. Suratul Fatiha Master: Recite Verse 1 (Bismillah, Ar-Rahman, Ar-Raheem) and explain how we show Mercy (Rahmah) to friends, pets, and family.',
      '4. Zakat Giving Game: Distribute 3 charity packages (Healthy Food, Warm Blankets, School Books) to help other children and make the world fair.',
      '5. Ramadan & Hajj Journey: Check off the Ramadan daily routine (Suhoor, Dhikr, Prep, Iftar, Taraweeh) and Hajj Ka’bah steps with cute gentle sheep celebration!'
    ],
    interestConnection: 'Whether exploring royal castles as a Princess, rescuing with Chase Paw Patrol, playing with Bluey, or soaring in space as an Astronaut, the 5 Pillars give us the strength of faith, kindness, and prayer!',
    completionPrompt: 'Congratulations! You unlocked the Master Arkān al-Islām Champion Crown Badge!'
  },
  reviewQuestion: {
    question: 'Why do we need the 5 Pillars of Islam (Arkān al-Islām) to hold up our Deen?',
    hint: 'Think about how Shahadah guides our heart, Salah connects us daily, Zakat makes the world fair, Siyam teaches gratitude and mercy, and Hajj unites all Muslims.',
    options: [
      {
        id: 'fp-opt-1',
        text: 'They hold up our Deen like strong posts holding up a roof: Shahadah guides faith, Salah connects us daily, Zakat shares with children in need, Siyam teaches gratitude, and Hajj unites everyone',
        isCorrect: true,
        explanation: 'MashaAllah, perfect! Tafsir and Islamic tradition teach that the 5 Pillars keep our heart safe, strong, merciful, and close to Allah.'
      },
      {
        id: 'fp-opt-2',
        text: 'We only need one pillar and can ignore the other four',
        isCorrect: false,
        explanation: 'Just like a house needs all its pillars to hold up the roof securely, our Deen is complete and strong with all 5 Pillars!'
      },
      {
        id: 'fp-opt-3',
        text: 'They are only for grown-ups and children never practice them',
        isCorrect: false,
        explanation: 'Children can learn Shahadah, practice Salah, say Alhamdulillah, give charity smiles, fast part of the day, and learn the story of Ibrahim (AS)!'
      }
    ],
    correctAnswerExplanation: 'Arkān al-Islām are the 5 foundational pillars that hold up our Deen: Shahadah anchors our faith in One Allah, Salah connects us 5 times daily, Zakat shares love and fairness, Siyam builds gratitude and mercy, and Hajj shows global unity.'
  },
  visualContent: {
    title: 'Arkān al-Islām & Suratul Fatiha Visual PECS Guide',
    subtitle: 'Visual cards & PEC communication boards for all 5 pillars, Fatihah verse-by-verse, and Salah movements.',
    completionBadge: '🌟 Arkān al-Islām & Suratul Fatiha Master Badge Unlocked!',
    cards: [
      {
        stepNumber: 1,
        title: 'Arkān al-Islām (The 5 Pillars of Islam)',
        simpleSentence: 'Shahadah, Salah, Zakat, Siyam, Hajj hold up our Deen like 5 sturdy castle pillars.',
        arabicTerm: 'أَرْكَانُ الإِسْلَامِ خَمْسَة',
        arabicTransliteration: 'Arkān al-Islām: Shahadah, Salah, Zakat, Siyam, Hajj',
        iconName: 'Shield',
        visualHint: 'Deen Shelter: The 5 pillars hold up the roof of safety, peace, and Allah\'s love.',
        badge: '5 Pillars'
      },
      {
        stepNumber: 2,
        title: 'Pillar 1: Shahadah (Declaration of Faith)',
        simpleSentence: 'Say with your heart: There is no God but Allah, and Muhammad is His messenger.',
        arabicTerm: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ',
        arabicTransliteration: 'Laa ilaaha ill-Allah, Muhammadur-Rasulullah',
        iconName: 'Heart',
        visualHint: 'Fitrah & Names of Allah: Al-Khaliq (Creator), Ar-Rahman (Merciful), Al-Ahad (The One).',
        badge: 'Pillar 1'
      },
      {
        stepNumber: 3,
        title: 'Salah: Qiyam & Opening Thana',
        simpleSentence: 'Stand tall facing Qiblah. Say Allahu Akbar and recite opening praise.',
        arabicTerm: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ...',
        arabicTransliteration: 'Subhanaka Allahumma wa bi hamdika, wa tabaaraka ismuka...',
        iconName: 'Sparkles',
        visualHint: 'Meaning: Glory is to You O Allah and praise. Blessed is Your Name.',
        badge: 'Standing Praise'
      },
      {
        stepNumber: 4,
        title: 'Suratul Fatiha Verse 1: Bismillah & Mercy',
        simpleSentence: 'Bismillah ar-Rahman ar-Raheem: In the name of Allah, the Most Merciful, the Especially Merciful.',
        arabicTerm: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ١',
        arabicTransliteration: 'Bismillah ar-Rahman ar-Raheem (Verse 1)',
        iconName: 'BookOpen',
        visualHint: 'Tafsir Ibn Kathir: Rahmah (Mercy) is gentle kindness, forgiving, hugging, and helping others.',
        badge: 'Mercy (Rahmah)'
      },
      {
        stepNumber: 5,
        title: 'Suratul Fatiha Verse 2: Saying Alhamdulillah',
        simpleSentence: 'Alhamdu lillahi Rabbil \'alameen: All thanks and praise are for Allah, Lord of the Worlds.',
        arabicTerm: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ٢',
        arabicTransliteration: 'Alhamdu lillahi Rabbil \'alameen (Verse 2)',
        iconName: 'Sun',
        visualHint: 'Tafsir Ibn Kathir: Sincere gratitude for every blessing: heartbeat, water, food, and family!',
        badge: 'Alhamdulillah'
      },
      {
        stepNumber: 6,
        title: 'Suratul Fatiha Verses 3-7: Straight Path',
        simpleSentence: 'Recite verses 3-7 asking Allah for guidance and help on the Straight Path.',
        arabicTerm: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ • ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        arabicTransliteration: 'Iyyaka naʿbudu wa iyyaka nastaʿin • Ihdina-s-siraata-l-mustaqim',
        iconName: 'Compass',
        visualHint: 'You alone we worship and ask for help. Guide us to the Straight Path.',
        badge: 'Straight Path'
      },
      {
        stepNumber: 7,
        title: 'Salah: Ruku (Bowing Down)',
        simpleSentence: 'Bow hands on knees: Subhaana Rabbiyal-ʿAdheem (x3).',
        arabicTerm: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ (x3)',
        arabicTransliteration: 'Subhaana Rabbiyal-ʿAdheem',
        iconName: 'Smile',
        visualHint: 'Meaning: Glory is to my Lord, the Most Great.',
        badge: 'Respect in Ruku'
      },
      {
        stepNumber: 8,
        title: 'Salah: I’tidal (Standing Straight)',
        simpleSentence: 'Stand up straight: Samiʿa Allahu liman hamidah • Rabbana wa Lakal Hamd.',
        arabicTerm: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ • رَبَّنَا وَلَكَ الْحَمْدُ',
        arabicTransliteration: 'Samiʿa Allahu liman hamidah • Rabbana wa Lakal Hamd',
        iconName: 'CheckCircle2',
        visualHint: 'Meaning: Allah hears who praises Him. Our Lord, all praise is for You.',
        badge: 'Grateful Standing'
      },
      {
        stepNumber: 9,
        title: 'Salah: Sujood (Prostration)',
        simpleSentence: 'Place forehead and palms softly on floor: Subhaana Rabbiyal-Aʿla (x3).',
        arabicTerm: 'سُبْحَانَ رَبِّيَ الأَعْلَى (x3)',
        arabicTransliteration: 'Subhaana Rabbiyal-Aʿla',
        iconName: 'Moon',
        visualHint: 'Meaning: Glory is to my Lord, the Most High. Nearest position to Allah.',
        badge: 'Closest to Allah'
      },
      {
        stepNumber: 10,
        title: 'Salah: Tashahhud, Salawat & Taslim',
        simpleSentence: 'Recite Tashahhud, send Salawat on Muhammad ﷺ & Ibrahim (AS), and turn with Taslim.',
        arabicTerm: 'التَّحِيَّاتُ لِلَّهِ... • السَّلَامُ عَلَيْكُم وَرَحْمَةُ اللَّهِ',
        arabicTransliteration: 'At-tahiyyatu lillaahi... • As-salaamu ʿalaykum wa rahmatullah',
        iconName: 'CheckCircle2',
        visualHint: 'Meaning: Greetings for Allah, peace upon the Prophets, and peace on all Muslims.',
        badge: 'Completed Prayer'
      },
      {
        stepNumber: 11,
        title: 'Pillar 3: Zakat (Giving & Fairness)',
        simpleSentence: 'Share mandatory charity to help other children and keep the world caring and fair.',
        arabicTerm: 'الزَّكَاة (Az-Zakat)',
        arabicTransliteration: 'Az-Zakat (Purifying Charity)',
        iconName: 'HeartHandshake',
        visualHint: 'Giving mini-game: Sharing food, clothing, and warm smiles with friends in need.',
        badge: 'Generous Heart'
      },
      {
        stepNumber: 12,
        title: 'Pillar 4: Siyam (Ramadan Fasting & Gratitude)',
        simpleSentence: 'Fast from dawn to sunset: Suhoor -> Dhikr -> Helping out -> Iftar dates -> Taraweeh.',
        arabicTerm: 'الصِّيَام (As-Siyam)',
        arabicTransliteration: 'As-Siyam (Fasting)',
        iconName: 'Moon',
        visualHint: 'Fasting builds patience, empathy for the hungry, and gratitude for blessings.',
        badge: 'Grateful Fast'
      },
      {
        stepNumber: 13,
        title: 'Pillar 5: Hajj (Prophet Ibrahim AS & Gentle Sheep)',
        simpleSentence: 'Pilgrimage to Makkah with Ihram, Tawaf around Ka’bah, and Eid gentle sheep celebration!',
        arabicTerm: 'الحَجّ (Al-Hajj)',
        arabicTransliteration: 'Al-Hajj (The Pilgrimage)',
        iconName: 'Compass',
        visualHint: 'Hajj puzzle: Ka’bah Tawaf, Sa’i, Arafat, Mina, and cute gentle sheep celebration!',
        badge: 'Pilgrimage Champion'
      }
    ]
  },
  storyContent: {
    title: 'The Great Journey of Arkān al-Islām',
    theme: '5 Strong Pillars Holding Up Our Deen Castle',
    intro: 'Come along on an inspiring journey across Arkān al-Islām (The Five Pillars of Islam): Shahadah, Salah, Zakat, Siyam, and Hajj. Discover how they hold up our shelter of faith, prayer, and kindness!',
    slides: [
      {
        id: 'fp-s1',
        chapterNumber: 1,
        title: 'The 5 Strong Pillars Holding Up Our Deen',
        text: 'Imagine a magnificent castle or shelter. The roof keeps us safe, calm, and cozy under Allah\'s protection. The roof rests on 5 sturdy pillars called Arkān al-Islām: 1. Shahadah, 2. Salah, 3. Zakat, 4. Siyam, and 5. Hajj. If one pillar were missing, the shelter would wobble. We need all 5 to keep our hearts strong, clean, and full of light!',
        interestConnection: 'Like strong castle towers protecting the kingdom, the 5 Pillars protect our Deen.',
        islamicTeaching: 'Arkān al-Islām are the essential foundations of a Muslim\'s life.',
        iconName: 'Shield',
        actionPrompt: 'Name the 5 Pillars: Shahadah, Salah, Zakat, Siyam, Hajj!'
      },
      {
        id: 'fp-s2',
        chapterNumber: 2,
        title: 'Pillar 1: The Pure Fitrah of Shahadah',
        text: 'Our heart is born with Fitrah—a natural knowing that there is One Creator who made the blue sky, green trees, and cute animals. We say: "Laa ilaaha ill-Allah, Muhammadur-Rasulullah" (There is no God but Allah, and Muhammad is His messenger). We remember Allah\'s Beautiful Names: Al-Khaliq (The Creator), Ar-Rahman (The Most Merciful), and Al-Ahad (The Only One).',
        interestConnection: 'The master key that opens the gates of wisdom and peace.',
        islamicTeaching: 'Shahadah is the first and greatest pillar of Islam.',
        iconName: 'Heart',
        actionPrompt: 'Whisper "Laa ilaaha ill-Allah" with your hand over your heart.'
      },
      {
        id: 'fp-s3',
        chapterNumber: 3,
        title: 'Suratul Fatiha: Verse 1 & The Gift of Mercy (Rahmah)',
        text: 'When we pray Salah, we recite the opening Surah: "Bismillah ar-Rahman ar-Raheem" (Verse 1). Mercy (Rahmah) means gentle kindness, sharing hugs when someone feels sad, forgiving mistakes, and treating animals gently. In Tafsir Ibn Kathir, we learn that Ar-Rahman is Allah\'s mercy for all creation, and Ar-Raheem is His special mercy for believers. The Prophet ﷺ taught: "Be merciful to those on earth, and the One in the heavens will have mercy on you!"',
        interestConnection: 'Like a gentle princess or helper rescuing a friend with kindness.',
        islamicTeaching: 'Rahmah (Mercy) is at the heart of our worship and character.',
        iconName: 'BookOpen',
        actionPrompt: 'Say "Bismillah ar-Rahman ar-Raheem" smoothly.'
      },
      {
        id: 'fp-s4',
        chapterNumber: 4,
        title: 'Suratul Fatiha: Verse 2 & The Joy of Saying "Alhamdulillah"',
        text: 'Next we recite: "Alhamdu lillahi Rabbil \'alameen" (Verse 2). Saying Alhamdulillah means saying "Thank You Allah!" for our beating heart, clean drinking water, loving parents, yummy food, and restful sleep. In Tafsir Ibn Kathir, Rabb al-\'Alameen means Allah is the loving Caretaker and Sustainer of all worlds: humans, angels, stars, oceans, and animals!',
        interestConnection: 'Counting blessings like sparkling stars in the night sky.',
        islamicTeaching: 'Alhamdulillah is the sweetest expression of gratitude to our Creator.',
        iconName: 'Sun',
        actionPrompt: 'Practice saying "Alhamdulillah!" with a big joyful smile.'
      },
      {
        id: 'fp-s5',
        chapterNumber: 5,
        title: 'Pillar 2: Salah - Ruku, Sujood & Spreading Peace',
        text: 'Five times a day, we stand in Qiyam, bow in Ruku saying "Subhaana Rabbiyal-ʿAdheem" (x3), stand in I\'tidal saying "Samiʿa Allahu liman hamidah", and prostrate in Sujood saying "Subhaana Rabbiyal-Aʿla" (x3). We sit for Tashahhud, send Salawat on Prophet Muhammad ﷺ and Ibrahim (AS), and spread peace to the right and left saying "As-salaamu ʿalaykum wa rahmatullah".',
        interestConnection: 'A rhythmic conversation that recharges our spirit with calm and light.',
        islamicTeaching: 'Salah is the daily pillar that keeps us directly connected to Allah.',
        iconName: 'Smile',
        actionPrompt: 'Can you show how to bow gently in Ruku?'
      },
      {
        id: 'fp-s6',
        chapterNumber: 6,
        title: 'Pillar 3: Zakat - The Joy of Fair Giving',
        text: 'Allah blesses us with resources, and Zakat is the mandatory charity that keeps our world fair and kind. We give a portion to help other children and families like ourselves who need food, warm clothes, and school books. Giving never decreases our wealth; it brings barakah (blessings) and smiles to everyone.',
        interestConnection: 'Sharing toys and food so every child in the kingdom is happy and healthy.',
        islamicTeaching: 'Zakat purifies our wealth and spreads mercy through society.',
        iconName: 'HeartHandshake',
        actionPrompt: 'Think of one item or kind smile you can share today.'
      },
      {
        id: 'fp-s7',
        chapterNumber: 7,
        title: 'Pillar 4: Siyam - A Loving Day in Ramadan',
        text: 'During Ramadan, Muslims fast from dawn to sunset. Let us trace a day: We wake up early for healthy Suhoor meal, pray Fajr, remember Allah through calm Dhikr during the day, help family prepare dinner, break our fast with sweet dates and water at sunset (Iftar), and pray peaceful Taraweeh at night. Siyam teaches us empathy and deep gratitude for all our blessings.',
        interestConnection: 'A quiet, loving routine of mindfulness and thanksgiving.',
        islamicTeaching: 'Fasting builds Taqwa (mindfulness of Allah) and compassion for others.',
        iconName: 'Moon',
        actionPrompt: 'Name your favorite healthy food to eat at Suhoor or Iftar.'
      },
      {
        id: 'fp-s8',
        chapterNumber: 8,
        title: 'Pillar 5: Hajj - The Story of Ibrahim (AS) & Cute Gentle Sheep',
        text: 'Prophet Ibrahim (AS) and his son Ismail (AS) built the holy Ka’bah with love and devotion. In Hajj, millions of Muslims from every country gather wearing simple white garments (Ihram). They perform Tawaf around the Ka’bah, walk between Safa and Marwa, pray together at Mount Arafat, stay in Mina, and celebrate Eid al-Adha with gentle sheep gifts to feed neighbors and families in need.',
        interestConnection: 'Like a global family reunion where everyone stands equal and united.',
        islamicTeaching: 'Hajj is the journey of lifetime unity, humility, and obedience to Allah.',
        iconName: 'Compass',
        actionPrompt: 'Picture walking peacefully around the Ka’bah under the open sky.'
      }
    ],
    conclusion: 'Arkān al-Islām hold up our Deen: Shahadah in our heart, Salah in our daily routine, Zakat in our generosity, Siyam in our yearly gratitude, and Hajj in our global unity.',
    reflectionQuestion: 'Which of the 5 Pillars do you practice or see your family practice every day?'
  },
  stepContent: {
    title: 'Arkān al-Islām & Suratul Fatiha Step-by-Step Checklist',
    goal: 'Check off each pillar, verse, and prayer movement slowly and master each step.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Arkān al-Islām (The 5 Pillars Holding Up Our Deen)',
        instruction: 'Name the 5 Pillars: Shahadah, Salah, Zakat, Siyam, Hajj. Understand how they hold up our shelter of faith.',
        detail: 'Why we need each: Shahadah anchors faith; Salah connects daily; Zakat ensures fairness; Siyam builds gratitude; Hajj unites everyone.',
        repeatPhrase: 'Shahadah, Salah, Zakat, Siyam, Hajj — The 5 Pillars of Islam!',
        iconName: 'Shield',
        sensoryTip: 'Rest your hands comfortably and take a deep, soothing breath.'
      },
      {
        stepNumber: 2,
        title: '2. Pillar 1: Shahadah (Declaration of Faith)',
        instruction: 'Recite: "Laa ilaaha ill-Allah, Muhammadur-Rasulullah". Remember Allah is One (Al-Ahad).',
        detail: 'Meaning: There is no God but Allah, and Muhammad is His messenger.',
        repeatPhrase: 'There is only One God, Allah.',
        iconName: 'Heart',
        sensoryTip: 'Rest hands on your heart and feel its gentle beat.'
      },
      {
        stepNumber: 3,
        title: '3. Salah: Qiyam & Opening Thana',
        instruction: 'Stand facing Qiblah. Say Allahu Akbar and recite Thana: "Subhanaka Allahumma wa bi hamdika...".',
        detail: 'Meaning: Glory is to You, O Allah, and praise. Blessed is Your Name.',
        repeatPhrase: 'Glory is to You, O Allah, and all praise is for You.',
        iconName: 'Sparkles',
        sensoryTip: 'Feel your feet balanced and still on the prayer rug.'
      },
      {
        stepNumber: 4,
        title: '4. Suratul Fatiha Verse 1: Bismillah & Mercy (Rahmah)',
        instruction: 'Recite: "Bismillah ar-Rahman ar-Raheem" (In the name of Allah, the Most Merciful, the Especially Merciful).',
        detail: 'Tafsir Ibn Kathir: Rahmah (Mercy) is gentle kindness, hugging, forgiving, and helping others.',
        repeatPhrase: 'Bismillah ar-Rahman ar-Raheem.',
        iconName: 'BookOpen',
        sensoryTip: 'Whisper smoothly with a calm, gentle rhythm.'
      },
      {
        stepNumber: 5,
        title: '5. Suratul Fatiha Verse 2: Saying "Alhamdulillah"',
        instruction: 'Recite: "Alhamdu lillahi Rabbil \'alameen" (All thanks and praise are for Allah, Lord of the Worlds).',
        detail: 'Tafsir Ibn Kathir: Expressing sincere gratitude for every blessing: heartbeat, water, food, and family!',
        repeatPhrase: 'Alhamdulillah! (All praise and thanks to Allah!).',
        iconName: 'Sun',
        sensoryTip: 'Say "Alhamdulillah" with a big smile!'
      },
      {
        stepNumber: 6,
        title: '6. Suratul Fatiha Verses 3-7: Straight Path',
        instruction: 'Recite verses 3-7: "Ar-Rahmani-r-Rahim • Maliki yawmi-d-din • Iyyaka na\'budu... • Ihdina-s-siraata-l-mustaqim...".',
        detail: 'Meaning: Asking Allah for guidance on the Straight Path of good deeds.',
        repeatPhrase: 'Iyyaka naʿbudu wa iyyaka nastaʿin.',
        iconName: 'Compass',
        sensoryTip: 'Recite at a calm, slow pace without rushing.'
      },
      {
        stepNumber: 7,
        title: '7. Salah: Ruku (Bowing) & I’tidal',
        instruction: 'Bow hands on knees: "Subhaana Rabbiyal-ʿAdheem" (x3). Stand up straight: "Samiʿa Allahu liman hamidah • Rabbana wa Lakal Hamd".',
        detail: 'Meanings: Glory to my Lord the Most Great. Allah hears who praises Him.',
        repeatPhrase: 'Subhaana Rabbiyal-ʿAdheem.',
        iconName: 'Smile',
        sensoryTip: 'Pause for a 3-second steady breath in Ruku.'
      },
      {
        stepNumber: 8,
        title: '8. Salah: Sujood, Tashahhud, Salawat & Taslim',
        instruction: 'Prostrate in Sujood ("Subhaana Rabbiyal-Aʿla" x3), sit for Tashahhud & Salawat, and turn right and left saying "As-salaamu ʿalaykum wa rahmatullah".',
        detail: 'Sujood brings us closest to Allah. Conclude with Taslim to spread peace.',
        repeatPhrase: 'As-salaamu ʿalaykum wa rahmatullah.',
        iconName: 'CheckCircle2',
        sensoryTip: 'Turn your head gently right, then left.'
      },
      {
        stepNumber: 9,
        title: '9. Pillar 3: Zakat (Charity & Fairness)',
        instruction: 'Share mandatory charity and practice helping other children to keep our world fair and caring.',
        detail: 'Zakat helps children and families have food, clothes, and school books.',
        repeatPhrase: 'Generosity and kindness make the world fair.',
        iconName: 'HeartHandshake',
        sensoryTip: 'Smile warmly as you think about helping a friend.'
      },
      {
        stepNumber: 10,
        title: '10. Pillar 4: Siyam (Ramadan Fasting & Gratitude)',
        instruction: 'Fast from dawn to sunset: Suhoor -> Dhikr & Prayers -> Helping with food -> Sweet Iftar dates -> Taraweeh.',
        detail: 'Fasting builds patience, empathy, and gratitude for all our blessings.',
        repeatPhrase: 'Alhamdulillah for all of Allah’s gifts.',
        iconName: 'Moon',
        sensoryTip: 'Appreciate the sweet taste of water and dates.'
      },
      {
        stepNumber: 11,
        title: '11. Pillar 5: Hajj (Pilgrimage, Ibrahim AS & Gentle Sheep)',
        instruction: 'Remember the story of Prophet Ibrahim (AS), the sacred Ka’bah, unity in white clothes, and gentle Eid sheep.',
        detail: 'Hajj brings Muslims from all nations together as one equal family.',
        repeatPhrase: 'Labbayk Allahumma Labbayk.',
        iconName: 'Compass',
        sensoryTip: 'Visualize Muslims from all over the world standing shoulder to shoulder.'
      }
    ],
    successMessage: 'Alhamdulillah! You mastered Arkān al-Islām, Suratul Fatiha with Tafsir Ibn Kathir, and the sacred movements of Salah!'
  },
  flashcardContent: {
    title: 'Arkān al-Islām & Suratul Fatiha Study Cards',
    cards: [
      {
        id: 'fpc0',
        frontTerm: 'Arkān al-Islām (The 5 Pillars)',
        frontArabic: 'أَرْكَانُ الإِسْلَامِ',
        frontTransliteration: 'Arkān al-Islām',
        frontSubtext: 'The 5 Foundation Pillars of Faith',
        backDefinition: '1. Shahadah, 2. Salah, 3. Zakat, 4. Siyam, 5. Hajj. They hold up our Deen shelter like sturdy castle posts!',
        backInterestAnalogy: 'Like the 5 strong castle towers holding up the royal roof of peace and safety.',
        backActionOrQuestion: 'Why do we need each of the 5 pillars? (To keep our Deen shelter strong, safe, and balanced!)',
        iconName: 'Shield'
      },
      {
        id: 'fpc1',
        frontTerm: 'Shahadah (Pillar 1)',
        frontArabic: 'الشَّهَادَة',
        frontTransliteration: 'Ash-Shahadah',
        frontSubtext: 'Declaration of Faith',
        backDefinition: 'Believing in your heart and declaring: "Laa ilaaha ill-Allah, Muhammadur-Rasulullah" (There is no God but Allah, and Muhammad is His messenger).',
        backInterestAnalogy: 'The master key that opens the doorway to all Islamic virtues.',
        backActionOrQuestion: 'What are two Beautiful Names of Allah? (Al-Khaliq The Creator, Ar-Rahman The Merciful)',
        iconName: 'Heart'
      },
      {
        id: 'fpc2',
        frontTerm: 'Suratul Fatiha (Verse 1)',
        frontArabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        frontTransliteration: 'Bismillah ar-Rahman ar-Raheem',
        frontSubtext: 'Mercy & Compassion',
        backDefinition: '"In the name of Allah, the Most Merciful, the Especially Merciful." Tafsir Ibn Kathir: Rahmah (Mercy) is gentle care, forgiving, hugging, and helping others.',
        backInterestAnalogy: 'Like wrapping someone in a warm, soft blanket of kindness.',
        backActionOrQuestion: 'How can you show mercy to someone today? (Share a toy or give a gentle hug)',
        iconName: 'BookOpen'
      },
      {
        id: 'fpc3',
        frontTerm: 'Suratul Fatiha (Verse 2)',
        frontArabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        frontTransliteration: 'Alhamdu lillahi Rabbil \'alameen',
        frontSubtext: 'Gratitude & Praise',
        backDefinition: '"All thanks and praise are for Allah, Lord of the Worlds." Tafsir Ibn Kathir: Sincere gratitude for heartbeat, water, food, and family!',
        backInterestAnalogy: 'Counting our blessings like sparkling jewels in a treasure chest.',
        backActionOrQuestion: 'When should we say "Alhamdulillah"? (After eating, drinking, waking up, and whenever we feel happy!)',
        iconName: 'Sun'
      },
      {
        id: 'fpc4',
        frontTerm: 'Salah (Pillar 2)',
        frontArabic: 'الصَّلَاة',
        frontTransliteration: 'As-Salah',
        frontSubtext: 'The 5 Daily Prayers',
        backDefinition: 'Our direct connection to Allah 5 times daily with Qiyam, Suratul Fatiha, Ruku, Sujood, Tashahhud, and Taslim.',
        backInterestAnalogy: 'A peaceful daily bridge keeping our heart filled with calm and light.',
        backActionOrQuestion: 'What do we say in Ruku? ("Subhaana Rabbiyal-ʿAdheem" 3 times)',
        iconName: 'Smile'
      },
      {
        id: 'fpc5',
        frontTerm: 'Zakat (Pillar 3)',
        frontArabic: 'الزَّكَاة',
        frontTransliteration: 'Az-Zakat',
        frontSubtext: 'Purifying Charity & Fairness',
        backDefinition: 'Mandatory charity given to help other children and families in need and ensure fairness in the world.',
        backInterestAnalogy: 'Sharing food and clothing so every child in the kingdom has what they need.',
        backActionOrQuestion: 'Why do Muslims give Zakat? (To please Allah and keep the world fair and kind)',
        iconName: 'HeartHandshake'
      },
      {
        id: 'fpc6',
        frontTerm: 'Siyam (Pillar 4)',
        frontArabic: 'الصِّيَام',
        frontTransliteration: 'As-Siyam / As-Sawm',
        frontSubtext: 'Ramadan Fasting & Gratitude',
        backDefinition: 'Fasting from dawn (Suhoor) to sunset (Iftar) in Ramadan to remember Allah, build empathy for the hungry, and feel gratitude.',
        backInterestAnalogy: 'A spiritual training routine that strengthens our patience and compassion.',
        backActionOrQuestion: 'What does fasting teach us? (Gratitude for blessings and kindness for those in need)',
        iconName: 'Moon'
      },
      {
        id: 'fpc7',
        frontTerm: 'Hajj (Pillar 5)',
        frontArabic: 'الحَجّ',
        frontTransliteration: 'Al-Hajj',
        frontSubtext: 'The Sacred Pilgrimage & Ibrahim AS',
        backDefinition: 'The journey to the Ka’bah in Makkah honoring Prophet Ibrahim (AS) and uniting all Muslims as equals in white clothes.',
        backInterestAnalogy: 'A global gathering where everyone stands equal and united as brothers and sisters.',
        backActionOrQuestion: 'Who built the Ka’bah? (Prophet Ibrahim AS and his son Ismail AS)',
        iconName: 'Compass'
      }
    ]
  },
  parentTips: {
    summary: 'Master structured guide for neurodivergent learners covering Arkān al-Islām (The 5 Pillars), line-by-line Suratul Fatiha with Tafsir Ibn Kathir, complete Salah movements, Zakat giving mini-game, and Hajj stories.',
    reviewStrategy: 'Use the PECS communication board and visual step cards to practice the physical movements of Salah (Standing, Bowing, Prostrating) and practice saying "Alhamdulillah" together after meals.',
    repetitionTip: 'Practice one pillar per day, repeating key phrases like "Laa ilaaha ill-Allah", "Bismillah ar-Rahman ar-Raheem", and "Alhamdulillah" in calm, predictable routines.',
    activitySuggestion: 'Set up a small pretend giving station for Zakat with toy food/books, and practice the 5 Pillars castle shelter analogy with blocks.',
    sensoryBreakTip: 'Keep prayer mat textures comfortable and encourage gentle, slow movements with 3-second pauses between prayer postures.',
    nextFormatRecommendation: 'Explore Comic / Visual Mode for full-screen PEC cards or Story Mode for the Ibrahim (AS) and Ramadan narratives.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.'
};

export const HACKATHON_DEMO_LEARNER_3 = FIVE_PILLARS_LESSON;

export const DAILY_DHIKR_LESSON: LessonData = {
  id: 'daily-dhikr-step-master',
  topic: 'Daily Du\'as & Words of Gratitude (Dhikr)',
  title: 'Daily Dhikr: 8 Step-by-Step Words of Peace & Remembrance',
  learningObjective: 'Learn and practice 8 core Dhikr remembrance words step-by-step with clear Arabic script, phonetic transliteration, explicit English translations, meaning-matched visual PECS pictures, and calming sensory pacing.',
  introduction: 'Dhikr (ذِكْر) means remembering Allah with gentle, loving words. The Prophet ﷺ taught that remembering Allah makes our heart feel calm, peaceful, and safe—just like resting under a cool, leafy tree. We learn these 8 Dhikr words one step at a time so our mind never feels rushed or overwhelmed.',
  topicKey: 'daily_dhikr',
  ageRange: '7-9',
  learnerNickname: 'Peaceful Explorer',
  selectedInterest: 'Nature & Stars',
  activeFormat: 'interactive_cards',
  learningPreferences: ['visual', 'short_instructions', 'one_step', 'repetition', 'low_stimulation'],
  isCalmMode: true,
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'Step 1: Bismillah (In the Name of Allah)',
      instruction: 'Say "Bismillah" before starting anything: eating, drinking, opening a book, or playing.',
      arabicTerm: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
      arabicTransliteration: 'Bismillah ir-Rahman ir-Raheem',
      tip: 'Meaning = "In the Name of Allah, the Most Merciful, the Especially Merciful".',
      detail: 'Starting with Bismillah invites Allah\'s blessing (Barakah) and protection into every small moment of our day.',
      iconName: 'BookOpen',
      repeatPhrase: 'Bismillah — I begin with Allah.',
      sensoryTip: 'Take a soft breath and whisper Bismillah whenever you touch your food or open your school bag.',
      actionPrompt: 'Whisper "Bismillah" right now before we move to Step 2!'
    },
    {
      stepNumber: 2,
      title: 'Step 2: SubhanAllah (Glory be to Allah / How Perfect Allah Is)',
      instruction: 'Say "SubhanAllah" when you admire something beautiful in creation like twinkling stars, cute animals, or glowing sunsets.',
      arabicTerm: 'سُبْحَانَ ٱللَّهِ',
      arabicTransliteration: 'SubhanAllah',
      tip: 'Meaning = "Glory be to Allah" (Allah is completely flawless and perfect).',
      detail: 'Whenever we see the vast cosmos or a tiny honeybee, our heart remembers that Allah created everything with flawless perfection.',
      iconName: 'Sparkles',
      repeatPhrase: 'SubhanAllah — How perfect is Allah!',
      sensoryTip: 'Picture looking up at a dark, quiet night sky filled with millions of glittering stars.',
      actionPrompt: 'Think of your favorite animal or planet and say "SubhanAllah".'
    },
    {
      stepNumber: 3,
      title: 'Step 3: Alhamdulillah (All Praise and Thanks to Allah)',
      instruction: 'Say "Alhamdulillah" when feeling happy, after eating delicious food, drinking cold water, or when waking up in the morning.',
      arabicTerm: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
      arabicTransliteration: 'Alhamdulillahi Rabbil \'Alameen',
      tip: 'Meaning = "All Praise and Thanks belong to Allah, Lord of the Worlds".',
      detail: 'Saying Alhamdulillah fills our heart with warm gratitude for every blessing: our eyes, our heartbeat, our safe home, and our family.',
      iconName: 'Sun',
      repeatPhrase: 'Alhamdulillah — Thank You, Allah!',
      sensoryTip: 'Place a warm hand over your chest, feel your gentle heartbeat, and smile as you say Alhamdulillah.',
      actionPrompt: 'Name one blessing you love today and say "Alhamdulillah".'
    },
    {
      stepNumber: 4,
      title: 'Step 4: Allahu Akbar (Allah is the Greatest)',
      instruction: 'Say "Allahu Akbar" during prayer and whenever you need courage to face a loud noise, a worry, or a big challenge.',
      arabicTerm: 'ٱللَّهُ أَكْبَرُ',
      arabicTransliteration: 'Allahu Akbar',
      tip: 'Meaning = "Allah is the Greatest" (Greater than any fear or problem).',
      detail: 'When things feel scary or overwhelming, Allahu Akbar reminds us that Allah is stronger and more powerful than any worry.',
      iconName: 'Shield',
      repeatPhrase: 'Allahu Akbar — Allah is greater than all worries.',
      sensoryTip: 'Stand tall with relaxed shoulders, knowing you are protected and cared for by Allah.',
      actionPrompt: 'Say "Allahu Akbar" with calm strength and confidence.'
    },
    {
      stepNumber: 5,
      title: 'Step 5: La ilaha illallah (There is No God Except Allah)',
      instruction: 'Recite the foundational declaration that only One true God created and sustains the universe.',
      arabicTerm: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
      arabicTransliteration: 'Laa ilaaha ill-Allah',
      tip: 'Meaning = "There is no deity worthy of worship except Allah" (The Key to Jannah).',
      detail: 'The Prophet ﷺ taught that "La ilaha illallah" is the highest and most noble phrase in our entire Deen.',
      iconName: 'Key',
      repeatPhrase: 'Laa ilaaha ill-Allah — One God, One Creator.',
      sensoryTip: 'Feel the peaceful focus of your breath aligning with the steady truth in your heart.',
      actionPrompt: 'Tap one finger gently on your knee as you recite "Laa ilaaha ill-Allah".'
    },
    {
      stepNumber: 6,
      title: 'Step 6: Astaghfirullah (I Seek Allah’s Forgiveness & Fresh Start)',
      instruction: 'Say "Astaghfirullah" when you make a mistake, feel angry, or want a clean, fresh emotional reset.',
      arabicTerm: 'أَسْتَغْفِرُ ٱللَّٰهَ',
      arabicTransliteration: 'Astaghfirullah',
      tip: 'Meaning = "I ask Allah to forgive me and give my heart a clean fresh start".',
      detail: 'Mistakes are normal when learning! Allah loves when we say Astaghfirullah because it washes our heart clean with love and mercy.',
      iconName: 'RotateCcw',
      repeatPhrase: 'Astaghfirullah — Allah wipes my heart clean.',
      sensoryTip: 'Inhale fresh calm air through your nose, exhale slowly, and let go of any tension as you say Astaghfirullah.',
      actionPrompt: 'Take a soft reset breath and whisper "Astaghfirullah".'
    },
    {
      stepNumber: 7,
      title: 'Step 7: La hawla wa la quwwata illa billah (All Strength Comes from Allah)',
      instruction: 'Say this phrase whenever a task feels difficult or when you need gentle inner energy.',
      arabicTerm: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ',
      arabicTransliteration: 'Laa hawla wa laa quwwata illaa billaah',
      tip: 'Meaning = "There is no power and no strength except through Allah" (A Treasure of Jannah).',
      detail: 'We do not have to carry hard things alone. When we recite this Dhikr, Allah sends us strength and ease.',
      iconName: 'Mountain',
      repeatPhrase: 'Laa hawla wa laa quwwata illaa billaah — Allah gives me strength.',
      sensoryTip: 'Picture a sturdy, deep-rooted green tree standing calm and safe through the breeze.',
      actionPrompt: 'Whisper this treasure of Jannah and feel calm energy in your hands.'
    },
    {
      stepNumber: 8,
      title: 'Step 8: Salawat on Prophet Muhammad ﷺ (Sending Peace & Blessings)',
      instruction: 'Send peace and blessings upon our kind and gentle Prophet Muhammad ﷺ.',
      arabicTerm: 'ٱللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ',
      arabicTransliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammad',
      tip: 'Meaning = "O Allah, send peace, blessings, and honor upon Muhammad and his family".',
      detail: 'Whenever we say Salawat, Allah sends us 10 blessings of mercy and peace in return.',
      iconName: 'Heart',
      repeatPhrase: 'Allahumma salli \'ala Muhammad — Peace upon our beloved Prophet.',
      sensoryTip: 'Feel the warmth of love and gentle kindness radiating in your heart.',
      actionPrompt: 'Say "Sallallahu \'Alayhi wa Sallam" (Peace and blessings upon him).'
    }
  ],
  activity: {
    title: 'Interactive Dhikr Step Journey',
    type: 'step-sequence',
    instructions: 'Check off each Dhikr step as you recite it with calm focus!',
    actionItems: [
      '1. Step 1-3: Daily Three (SubhanAllah, Alhamdulillah, Allahu Akbar) x3',
      '2. Step 4-5: Heart Reset & Fresh Start (Astaghfirullah & Bismillah)',
      '3. Step 6-7: Jannah Treasures (La ilaha illallah & La hawla)',
      '4. Step 8: Loving blessings upon Prophet Muhammad (Salawat)'
    ],
    interestConnection: 'Tracking your peaceful Dhikr routine like completing a celestial explorer checklist.',
    completionPrompt: 'Master of Calming Dhikr & Peace of Heart Badge earned!'
  },
  reviewQuestion: {
    question: 'What is the beautiful meaning of saying "SubhanAllah"?',
    hint: 'Think about how perfect and flawless Allah is in creating everything.',
    options: [
      {
        id: 'dhikr-opt-1',
        text: 'Glory be to Allah (How Perfect and Flawless Allah Is)',
        isCorrect: true,
        explanation: 'SubhanAllah means "Glory be to Allah" — reminding us that Allah is completely perfect, flawless, and the Creator of all beautiful things!'
      },
      {
        id: 'dhikr-opt-2',
        text: 'Time to go to sleep',
        isCorrect: false,
        explanation: 'Before sleeping we say specific bedtime duas, but SubhanAllah means Glory be to Allah.'
      },
      {
        id: 'dhikr-opt-3',
        text: 'Washing our hands with water',
        isCorrect: false,
        explanation: 'Washing our hands is part of Wudu; SubhanAllah is a word of Dhikr praising Allah.'
      }
    ],
    correctAnswerExplanation: 'SubhanAllah means "Glory be to Allah" — reminding us that Allah is completely perfect and free from any imperfection.'
  },
  storyContent: {
    title: 'The Gentle Path of Whispered Remembrance',
    theme: 'Peace of Heart Through Step-by-Step Dhikr',
    intro: 'Come along with a gentle traveler through a quiet, glowing garden where each Dhikr word blooms like a soothing blossom of light.',
    slides: [
      {
        id: 'dhikr-story-1',
        chapterNumber: 1,
        title: 'Chapter 1: The Morning Key — Bismillah',
        text: 'As the golden dawn touches the quiet earth, the traveler takes a calm breath and whispers "Bismillah". Starting with Allah’s name brings immediate safety and gentle blessings to the whole morning.',
        interestConnection: 'Like starting a spacecraft launch checklist with calm precision.',
        islamicTeaching: 'Saying Bismillah before every action invites Barakah (divine blessing).',
        iconName: 'BookOpen',
        actionPrompt: 'Say "Bismillah" before you take your next sip of water.'
      },
      {
        id: 'dhikr-story-2',
        chapterNumber: 2,
        title: 'Chapter 2: Wonder in the Stars — SubhanAllah',
        text: 'Looking up at the twinkling night sky and the gentle moon, the traveler says "SubhanAllah". Every planet, star, and flower is designed with flawless perfection by Allah.',
        interestConnection: 'Admiring the flawless geometry of distant galaxies and constellations.',
        islamicTeaching: 'SubhanAllah glorifies Allah above any weakness or imperfection.',
        iconName: 'Sparkles',
        actionPrompt: 'Look at something in nature and say "SubhanAllah".'
      },
      {
        id: 'dhikr-story-3',
        chapterNumber: 3,
        title: 'Chapter 3: The Warm Sunshine — Alhamdulillah',
        text: 'Sitting down to enjoy a fresh meal and cool water, warmth fills the traveler’s chest: "Alhamdulillah!" Gratitude for our heartbeat and safe home makes every blessing shine brighter.',
        interestConnection: 'Like charging a friendly robot’s battery with bright solar energy.',
        islamicTeaching: 'Alhamdulillah expresses sincere praise and thanks to Allah.',
        iconName: 'Sun',
        actionPrompt: 'Smile and whisper "Alhamdulillah" for your favorite family memory.'
      },
      {
        id: 'dhikr-story-4',
        chapterNumber: 4,
        title: 'Chapter 4: The Sturdy Shield — Allahu Akbar',
        text: 'When thunder rumbles or a loud noise sounds, the traveler stands firm with "Allahu Akbar". Allah is greater, kinder, and stronger than any fear or worry.',
        interestConnection: 'Like holding an unbreakable superhero shield of pure light.',
        islamicTeaching: 'Allahu Akbar reminds us of Allah\'s supreme greatness and protection.',
        iconName: 'Shield',
        actionPrompt: 'Say "Allahu Akbar" with calm strength in your voice.'
      },
      {
        id: 'dhikr-story-5',
        chapterNumber: 5,
        title: 'Chapter 5: Clean Rain & Fresh Start — Astaghfirullah',
        text: 'When a mistake happens, a gentle cooling rain falls as the traveler whispers "Astaghfirullah". Allah wipes the slate clean with endless love, giving our heart a fresh, peaceful start.',
        interestConnection: 'Like pressing the peaceful reset button on a simulator.',
        islamicTeaching: 'Astaghfirullah brings forgiveness, peace, and spiritual renewal.',
        iconName: 'RotateCcw',
        actionPrompt: 'Take a soft reset breath and say "Astaghfirullah".'
      }
    ],
    conclusion: 'With each Dhikr word, the traveler’s heart stays calm, gentle, and filled with light. Remember: Allah is always near whenever we whisper His name.',
    reflectionQuestion: 'Which Dhikr word feels most comforting to your heart when you need a calm moment?'
  },
  visualContent: {
    title: 'Daily Dhikr Visual Step Cards',
    subtitle: '8 Step-by-Step Words of Remembrance with Arabic, English, Translations, and Meaning Pictures',
    cards: [
      {
        stepNumber: 1,
        title: 'Step 1: Bismillah',
        simpleSentence: 'Say before eating, drinking, and starting tasks to welcome blessing.',
        arabicTerm: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        arabicTransliteration: 'Bismillah ir-Rahman ir-Raheem',
        englishTranslation: 'In the Name of Allah (Starting with Blessings)',
        iconName: 'BookOpen',
        visualHint: 'An open holy book with glowing rays of light and starting blessings',
        badge: 'Step 1 • Beginning'
      },
      {
        stepNumber: 2,
        title: 'Step 2: SubhanAllah',
        simpleSentence: 'Say when admiring beautiful stars, animals, mountains, and wonders.',
        arabicTerm: 'سُبْحَانَ ٱللَّهِ',
        arabicTransliteration: 'SubhanAllah',
        englishTranslation: 'Glory be to Allah (How Perfect & Flawless Allah Is)',
        iconName: 'Sparkles',
        visualHint: 'Glittering night stars and glowing crescent moon in peaceful sky',
        badge: 'Step 2 • Wonder'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Alhamdulillah',
        simpleSentence: 'Say when feeling happy, after meals, drinking water, and after sneezing.',
        arabicTerm: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        arabicTransliteration: 'Alhamdulillahi Rabbil \'Alameen',
        englishTranslation: 'All Praise and Thanks to Allah (Grateful Heart)',
        iconName: 'Sun',
        visualHint: 'Warm beaming golden sun shining over green meadows of blessings',
        badge: 'Step 3 • Gratitude'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Allahu Akbar',
        simpleSentence: 'Say during prayer and whenever you need calm courage against fear.',
        arabicTerm: 'ٱللَّهُ أَكْبَرُ',
        arabicTransliteration: 'Allahu Akbar',
        englishTranslation: 'Allah is the Greatest (Bigger than Any Fear)',
        iconName: 'Shield',
        visualHint: 'A strong golden protective shield standing firm against storm clouds',
        badge: 'Step 4 • Courage'
      },
      {
        stepNumber: 5,
        title: 'Step 5: La ilaha illallah',
        simpleSentence: 'Declare that only One true God created and cares for all of us.',
        arabicTerm: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
        arabicTransliteration: 'Laa ilaaha ill-Allah',
        englishTranslation: 'There is No God Except Allah (The Key to Jannah)',
        iconName: 'Key',
        visualHint: 'A shining golden key opening the peaceful gateway of Jannah',
        badge: 'Step 5 • Faith Key'
      },
      {
        stepNumber: 6,
        title: 'Step 6: Astaghfirullah',
        simpleSentence: 'Say when making a mistake to reset your heart with forgiveness and love.',
        arabicTerm: 'أَسْتَغْفِرُ ٱللَّٰهَ',
        arabicTransliteration: 'Astaghfirullah',
        englishTranslation: 'I Seek Allah’s Forgiveness (Fresh Clean Start)',
        iconName: 'RotateCcw',
        visualHint: 'Gentle pure raindrops washing a green leaf clean and fresh',
        badge: 'Step 6 • Fresh Reset'
      },
      {
        stepNumber: 7,
        title: 'Step 7: La hawla wa la quwwata illa billah',
        simpleSentence: 'Say when a task feels hard to ask Allah for gentle inner strength.',
        arabicTerm: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ',
        arabicTransliteration: 'Laa hawla wa laa quwwata illaa billaah',
        englishTranslation: 'All Strength Comes from Allah (Treasure of Jannah)',
        iconName: 'Mountain',
        visualHint: 'A steadfast mountain standing calm and majestic beneath the clouds',
        badge: 'Step 7 • Inner Strength'
      },
      {
        stepNumber: 8,
        title: 'Step 8: Salawat on the Prophet ﷺ',
        simpleSentence: 'Send loving peace and blessings upon our kind Prophet Muhammad ﷺ.',
        arabicTerm: 'ٱللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ',
        arabicTransliteration: 'Allahumma salli \'ala Muhammad',
        englishTranslation: 'Peace & Blessings upon Prophet Muhammad ﷺ',
        iconName: 'Heart',
        visualHint: 'A warm glowing heart surrounded by gentle blossoms and light',
        badge: 'Step 8 • Loving Peace'
      }
    ],
    completionBadge: 'Dhikr Remembrance Champion • Alhamdulillah!'
  },
  stepContent: {
    title: 'Daily Dhikr Step-by-Step Practice Guide',
    goal: 'Recite all 8 Dhikr phrases step-by-step with calm pacing and clear meanings.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Bismillah (In the Name of Allah)',
        instruction: 'Whisper "Bismillah" at the start of any activity.',
        detail: 'Invites peace, Barakah, and protection into whatever you begin.',
        repeatPhrase: 'Bismillah — In the Name of Allah.',
        iconName: 'BookOpen',
        sensoryTip: 'Pause for 2 seconds before eating or opening a book to say Bismillah.'
      },
      {
        stepNumber: 2,
        title: '2. SubhanAllah (Glory be to Allah)',
        instruction: 'Say "SubhanAllah" when seeing beautiful animals, stars, or nature.',
        detail: 'Remembers that Allah makes everything with flawless perfection.',
        repeatPhrase: 'SubhanAllah — How perfect is Allah.',
        iconName: 'Sparkles',
        sensoryTip: 'Touch your thumb to your index finger gently as you say SubhanAllah.'
      },
      {
        stepNumber: 3,
        title: '3. Alhamdulillah (All Praise to Allah)',
        instruction: 'Say "Alhamdulillah" whenever you feel grateful, happy, or full.',
        detail: 'Fills your heart with deep satisfaction for all your blessings.',
        repeatPhrase: 'Alhamdulillah — Thank You, Allah.',
        iconName: 'Sun',
        sensoryTip: 'Feel the warm air exhaling gently from your chest as you praise Allah.'
      },
      {
        stepNumber: 4,
        title: '4. Allahu Akbar (Allah is the Greatest)',
        instruction: 'Say "Allahu Akbar" when praying and when needing bravery.',
        detail: 'Reminds us that Allah is bigger and stronger than any fear or worry.',
        repeatPhrase: 'Allahu Akbar — Allah is the Greatest.',
        iconName: 'Shield',
        sensoryTip: 'Keep your hands open and relaxed at your sides.'
      },
      {
        stepNumber: 5,
        title: '5. La ilaha illallah (There is No God but Allah)',
        instruction: 'Recite the foundational declaration of faith.',
        detail: 'The greatest phrase in Islam and the key to Jannah.',
        repeatPhrase: 'Laa ilaaha ill-Allah.',
        iconName: 'Key',
        sensoryTip: 'Focus your mind on the simple, singular truth of One loving Creator.'
      },
      {
        stepNumber: 6,
        title: '6. Astaghfirullah (I Seek Allah\'s Forgiveness)',
        instruction: 'Say "Astaghfirullah" when making a mistake or needing a reset.',
        detail: 'Cleanses our heart and restores calmness and peace.',
        repeatPhrase: 'Astaghfirullah — A clean fresh start.',
        iconName: 'RotateCcw',
        sensoryTip: 'Take a slow, deep breath in and exhale all tension.'
      },
      {
        stepNumber: 7,
        title: '7. La hawla wa la quwwata illa billah (All Strength from Allah)',
        instruction: 'Say this treasure when facing a challenging task.',
        detail: 'Gives us patience and gentle resilience through Allah’s help.',
        repeatPhrase: 'Laa hawla wa laa quwwata illaa billaah.',
        iconName: 'Mountain',
        sensoryTip: 'Feel your feet grounded on the floor, sturdy like a mountain.'
      },
      {
        stepNumber: 8,
        title: '8. Salawat on the Prophet ﷺ (Peace & Blessings)',
        instruction: 'Send peace and blessings upon Prophet Muhammad ﷺ.',
        detail: 'Brings 10 mercies from Allah and fills your heart with warmth.',
        repeatPhrase: 'Allahumma salli \'ala Muhammad.',
        iconName: 'Heart',
        sensoryTip: 'Smile softly as you remember our Prophet’s gentle character.'
      }
    ],
    successMessage: 'MashaAllah! You have completed all 8 steps of Daily Dhikr with peace and clarity.'
  },
  flashcardContent: {
    title: 'Daily Dhikr Flashcards',
    cards: [
      {
        id: 'dhikr-fc-1',
        frontTerm: 'Bismillah',
        frontArabic: 'بِسْمِ ٱللَّهِ',
        frontTransliteration: 'Bismillah',
        frontSubtext: 'Starting Action Dhikr',
        backDefinition: 'In the Name of Allah. We say this before eating, drinking, reading, or starting any task to welcome peace and blessing.',
        backInterestAnalogy: 'Like entering a warm, welcoming home with the master key of blessing.',
        backActionOrQuestion: 'When do you say Bismillah during your day?',
        iconName: 'BookOpen'
      },
      {
        id: 'dhikr-fc-2',
        frontTerm: 'SubhanAllah',
        frontArabic: 'سُبْحَانَ ٱللَّهِ',
        frontTransliteration: 'SubhanAllah',
        frontSubtext: 'Wonder & Praise Dhikr',
        backDefinition: 'Glory be to Allah. Allah is free from any fault, flaw, or weakness. We say it when looking at the stars, flowers, and animals.',
        backInterestAnalogy: 'Like gazing through a high-powered telescope at the flawless beauty of the cosmos.',
        backActionOrQuestion: 'Look at the sky or a plant and say SubhanAllah!',
        iconName: 'Sparkles'
      },
      {
        id: 'dhikr-fc-3',
        frontTerm: 'Alhamdulillah',
        frontArabic: 'ٱلْحَمْدُ لِلَّهِ',
        frontTransliteration: 'Alhamdulillah',
        frontSubtext: 'Gratitude & Thanks Dhikr',
        backDefinition: 'All praise and thanks to Allah. We say it when we are happy, after drinking water, finishing food, or waking up safely.',
        backInterestAnalogy: 'Like a warm glowing sunbeam filling your heart with cozy appreciation.',
        backActionOrQuestion: 'Name 3 things you are grateful for today and say Alhamdulillah!',
        iconName: 'Sun'
      },
      {
        id: 'dhikr-fc-4',
        frontTerm: 'Allahu Akbar',
        frontArabic: 'ٱللَّهُ أَكْبَرُ',
        frontTransliteration: 'Allahu Akbar',
        frontSubtext: 'Strength & Courage Dhikr',
        backDefinition: 'Allah is the Greatest. Allah is bigger and stronger than any challenge, scary shadow, or worry.',
        backInterestAnalogy: 'Like a sturdy shield protecting a gentle kingdom from any loud storm.',
        backActionOrQuestion: 'Stand tall with courage and whisper Allahu Akbar.',
        iconName: 'Shield'
      },
      {
        id: 'dhikr-fc-5',
        frontTerm: 'La ilaha illallah',
        frontArabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
        frontTransliteration: 'Laa ilaaha ill-Allah',
        frontSubtext: 'Key of Faith Dhikr',
        backDefinition: 'There is no god except Allah. The most sacred declaration of faith that anchors our heart to the One Creator.',
        backInterestAnalogy: 'The golden master key that unlocks the gates of Jannah.',
        backActionOrQuestion: 'What does La ilaha illallah mean? (There is no god except Allah)',
        iconName: 'Key'
      },
      {
        id: 'dhikr-fc-6',
        frontTerm: 'Astaghfirullah',
        frontArabic: 'أَسْتَغْفِرُ ٱللَّٰهَ',
        frontTransliteration: 'Astaghfirullah',
        frontSubtext: 'Fresh Start & Forgiveness Dhikr',
        backDefinition: 'I ask Allah for forgiveness. A gentle reset button that washes away mistakes and brings fresh emotional peace.',
        backInterestAnalogy: 'Like cool pure rainwater washing clean a dusty green leaf.',
        backActionOrQuestion: 'Take a soft breath and practice a calm heart reset with Astaghfirullah.',
        iconName: 'RotateCcw'
      },
      {
        id: 'dhikr-fc-7',
        frontTerm: 'La hawla wa la quwwata illa billah',
        frontArabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ',
        frontTransliteration: 'Laa hawla wa laa quwwata illaa billaah',
        frontSubtext: 'Inner Strength Treasure',
        backDefinition: 'There is no power and no strength except with Allah. A treasure from under the Throne of Allah for moments when we need energy and patience.',
        backInterestAnalogy: 'Like a deep mountain root that holds firm through every breeze.',
        backActionOrQuestion: 'Say this treasure whenever something feels difficult or tiring.',
        iconName: 'Mountain'
      },
      {
        id: 'dhikr-fc-8',
        frontTerm: 'Salawat on the Prophet ﷺ',
        frontArabic: 'ٱللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ',
        frontTransliteration: 'Allahumma salli \'ala Muhammad',
        frontSubtext: 'Peace & Love Dhikr',
        backDefinition: 'O Allah, send peace and blessings upon Prophet Muhammad ﷺ. Brings 10 blessings of peace and mercy from Allah.',
        backInterestAnalogy: 'Like sending a loving bouquet of gentle light to our beloved teacher.',
        backActionOrQuestion: 'Send a blessing upon the Prophet ﷺ with a peaceful smile.',
        iconName: 'Heart'
      }
    ]
  },
  parentTips: {
    summary: 'Evidence-based structured guide for teaching Daily Dhikr words in discrete, non-overwhelming steps. Every phrase is presented with clear Arabic script, phonetic transliteration, explicit English translations, and meaning-matched imagery.',
    reviewStrategy: 'Use the PECS schedule strip to practice the 3-step morning Dhikr routine (SubhanAllah ➔ Alhamdulillah ➔ Allahu Akbar) or single-card focus mode with the tactile bead tap counter.',
    repetitionTip: 'Practice one Dhikr phrase per day in natural daily routines (e.g. Bismillah before snacks, Alhamdulillah after drinking, Astaghfirullah during sensory resets).',
    activitySuggestion: 'Use the interactive bead tap counter to practice counting 3 or 33 praises without sensory-overwhelming alarms.',
    sensoryBreakTip: 'If the learner feels fatigued, switch to Single-Card Focus Mode or Calm Mode with 0.8x speech pacing.',
    nextFormatRecommendation: 'Explore PECS Board for visual scheduling or Comic / Visual Mode for full-screen step cards.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.'
};

