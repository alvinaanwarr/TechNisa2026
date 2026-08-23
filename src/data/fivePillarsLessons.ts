import { LessonData } from '../types';
import { SHARED_PEDAGOGICAL_RESEARCH } from './pedagogicalResearch';

/**
 * PILLAR 1: SADAQAH & SHAHADAH
 * Faith, Pure Intentions, and Daily Acts of Kindness
 */
export const PILLAR_1_SADAQAH_LESSON: LessonData = {
  id: 'pillar-1-sadaqah',
  topic: 'Pillar 1: Sadaqah & Shahadah (Faith & Kindness)',
  title: 'Pillar 1: Shahadah & Sadaqah — Pure Heart & Kind Deeds',
  learningObjective: 'Understand the declaration of faith (Shahadah), the natural compass of our heart (Fitrah), and how every kind smile and deed is a blessing of Sadaqah.',
  introduction: 'Welcome to Pillar 1! The first pillar of Islam begins in our heart with Shahadah (believing in One Allah) and blossoms outward through Sadaqah (sharing love, kind words, and helping hands). Every time you smile or share, you are practicing Sadaqah!',
  topicKey: 'sadaqah',
  ageRange: '7-9',
  learnerNickname: 'Kind Explorer',
  selectedInterest: 'Princesses & Castles (or Superheroes, Bluey, Chase)',
  activeFormat: 'interactive_cards',
  learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
  isCalmMode: false,
  quranReferences: [
    {
      surahName: 'Al-Baqarah',
      surahNumber: 2,
      ayahRange: '261',
      url: 'https://quran.com/2/261',
      arabicSnippet: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ',
      englishSnippet: 'The example of those who spend their wealth in the way of Allah is like a seed of grain which grows seven spikes; in each spike is a hundred grains.'
    },
    {
      surahName: 'Al-Ikhlas',
      surahNumber: 112,
      ayahRange: '1-4',
      url: 'https://quran.com/112',
      arabicSnippet: 'قُلْ هُوَ اللَّهُ أَحَدٌ • اللَّهُ الصَّمَدُ',
      englishSnippet: 'Say: He is Allah, [who is] One. Allah, the Eternal Refuge.'
    }
  ],
  scholarlySources: {
    tafsirIbnKathir: 'Ibn Kathir notes that sincere charity multiplies blessings infinitely and purifies the spiritual heart (Qalb).',
    bayyinahInstitute: 'Nouman Ali Khan highlights how Shahadah aligns human nature (Fitrah) with cosmic purpose, turning small daily kindnesses into acts of worship.',
    yaqeenInstitute: 'Dr. Omar Suleiman explains that smiling and gentleness (Sadaqah) activate positive empathy and emotional co-regulation in family and community spaces.'
  },
  pedagogicalResearch: [
    SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
    SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
    SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION
  ],
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'The Declaration of Faith (Shahadah)',
      instruction: 'Whisper with your heart: There is no god except Allah, and Muhammad is His Messenger.',
      arabicTerm: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ',
      arabicTransliteration: 'Laa ilaaha ill-Allah, Muhammadur-Rasulullah',
      tip: 'Our heart knows Allah created the stars, animals, and trees.',
      detail: 'Shahadah is our spiritual compass. We worship Allah alone who is Al-Khaliq (The Creator) and Ar-Rahman (The Most Merciful).',
      iconName: 'Heart',
      repeatPhrase: 'Laa ilaaha ill-Allah — There is only One God, Allah.',
      sensoryTip: 'Place a gentle hand on your heart and feel its steady, calm beat.',
      actionPrompt: 'Say "Laa ilaaha ill-Allah" with a peaceful smile.'
    },
    {
      stepNumber: 2,
      title: 'Our Natural Inner Compass (Fitrah)',
      instruction: 'Remember that Allah placed goodness, truthfulness, and compassion inside every child\'s heart.',
      arabicTerm: 'الفِطْرَة (Al-Fitrah)',
      arabicTransliteration: 'Al-Fitrah (Natural Pure Compass)',
      tip: 'When you do good, your heart feels warm and light.',
      detail: 'Fitrah is the pure, clean state we are born with that naturally loves what is good, fair, and kind.',
      iconName: 'Sparkles',
      repeatPhrase: 'My heart naturally loves goodness and truth.',
      sensoryTip: 'Take a slow, deep breath in and feel peaceful inside.'
    },
    {
      stepNumber: 3,
      title: 'A Warm Smile is Sadaqah',
      instruction: 'Smile warmly at your family, friends, and teachers—smiling is a gift of charity!',
      arabicTerm: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
      arabicTransliteration: 'Tabassumuka fee wajhi akheeka sadaqah',
      tip: 'The Prophet ﷺ taught: "Smiling in the face of your brother or sister is charity (Sadaqah)."',
      detail: 'Sadaqah does not just mean money. A friendly face cheers people up and spreads light in the room.',
      iconName: 'Smile',
      repeatPhrase: 'A cheerful smile spreads peace and is Sadaqah!',
      sensoryTip: 'Show your happiest, warmest smile right now!',
      actionPrompt: 'Give someone in the room a cheerful, friendly smile.'
    },
    {
      stepNumber: 4,
      title: 'Kind Words and Gentle Voice',
      instruction: 'Speak kind words, say "As-salamu alaykum", and say "JazakAllahu Khayran" when someone helps you.',
      arabicTerm: 'الكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ',
      arabicTransliteration: 'Al-kalimatu at-tayyibatu sadaqah',
      tip: 'Kind words make people feel valued, safe, and happy.',
      detail: 'Saying "Bismillah", giving compliments, or cheering on a classmate are all blessed acts of Sadaqah.',
      iconName: 'Sun',
      repeatPhrase: 'Kind words are sweet like honey and count as Sadaqah.',
      sensoryTip: 'Whisper "JazakAllahu Khayran" in a soft, gentle voice.'
    },
    {
      stepNumber: 5,
      title: 'Helping Hands and Removing Obstacles',
      instruction: 'Help clean up toys, hold a door open, or remove a stone or stick from a walking path.',
      arabicTerm: 'إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ',
      arabicTransliteration: 'Imaatatul-adhaa \'anit-tareeqi sadaqah',
      tip: 'Removing harmful things from the path keeps everyone safe.',
      detail: 'Every helpful action you do with your hands to make someone\'s day easier is rewarded by Allah.',
      iconName: 'HeartHandshake',
      repeatPhrase: 'Helping others makes our world safer and brighter.',
      sensoryTip: 'Reach your hands forward like offering a helpful hand to a friend.'
    },
    {
      stepNumber: 6,
      title: 'Gentleness to Animals and Nature',
      instruction: 'Give water to a thirsty kitten, feed birds in the park, and treat plants with care.',
      arabicTerm: 'فِي كُلِّ كَبِدٍ رَطْبَةٍ أَجْرٌ',
      arabicTransliteration: 'Fee kulli kabidin ratbatin ajr',
      tip: 'There is a reward of Sadaqah for showing mercy to every living creature.',
      detail: 'Prophet Muhammad ﷺ told of a person forgiven by Allah simply for giving water to a thirsty dog in a shoe!',
      iconName: 'Shield',
      repeatPhrase: 'Be kind and gentle to all animals and nature.',
      sensoryTip: 'Imagine gently stroking the soft fur of a friendly bunny or cat.'
    }
  ],
  activity: {
    title: 'Daily Sadaqah Kindness Challenge',
    type: 'hands-on',
    instructions: 'Complete 3 simple acts of Sadaqah today with a joyful heart:',
    actionItems: [
      '1. Smile warmly at 3 people and say "As-salamu alaykum".',
      '2. Say "JazakAllahu Khayran" to a family member or teacher who helps you.',
      '3. Pick up a toy or object from the floor to make the space tidy and safe.'
    ],
    interestConnection: 'Like a hero or gentle ruler protecting the realm, your kindness makes the world happier for everyone!',
    completionPrompt: 'Congratulations! You unlocked the Sadaqah Kindness Champion Badge!'
  },
  reviewQuestion: {
    question: 'What did Prophet Muhammad ﷺ teach us about smiling at others?',
    hint: 'Think about how a smile can be a wonderful gift of goodness.',
    options: [
      {
        id: 'sad-opt-1',
        text: 'Smiling in the face of your brother or sister is a blessed act of Sadaqah (charity)',
        isCorrect: true,
        explanation: 'MashaAllah, exactly! Giving a smile brings joy and is rewarded as charity by Allah.'
      },
      {
        id: 'sad-opt-2',
        text: 'Smiling only counts if you buy a gift first',
        isCorrect: false,
        explanation: 'Sadaqah includes any simple, sincere act of kindness, including a free smile!'
      },
      {
        id: 'sad-opt-3',
        text: 'Smiling is not allowed in Islam',
        isCorrect: false,
        explanation: 'Prophet Muhammad ﷺ was known for his warm, cheerful, and pleasant smile.'
      }
    ],
    correctAnswerExplanation: 'Smiling, speaking gentle words, helping family, and being kind to animals are all beautiful acts of Sadaqah that fill our scale of good deeds.'
  },
  storyContent: {
    title: 'The Secret Garden of Sadaqah',
    theme: 'Spreading Light through Kind Deeds',
    intro: 'Follow young Ameen as he discovers that true wealth is found in a generous heart that shares smiles, kind words, and gentle care.',
    slides: [
      {
        id: 'sad-s1',
        chapterNumber: 1,
        title: 'The Compass of Faith',
        text: 'Ameen woke up and placed his hand on his chest. "Laa ilaaha ill-Allah," he whispered. He remembered that Allah is Ar-Rahman (The Most Merciful) and loves when we show mercy to others.',
        interestConnection: 'Setting your inner navigation system to pure kindness.',
        islamicTeaching: 'Shahadah gives our heart purpose and love for Allah.',
        iconName: 'Heart'
      },
      {
        id: 'sad-s2',
        chapterNumber: 2,
        title: 'The Gift of a Smile',
        text: 'At breakfast, Ameen smiled brightly at his little sister and said "Good morning!" Her eyes lit up with joy. "A smile is Sadaqah," his mother reminded him with a warm hug.',
        interestConnection: 'A magic spark that lights up the whole room.',
        islamicTeaching: 'A cheerful smile is charity that brings hearts together.',
        iconName: 'Smile'
      },
      {
        id: 'sad-s3',
        chapterNumber: 3,
        title: 'Clear Paths and Caring Hands',
        text: 'On the way to school, Ameen noticed a fallen branch on the walkway. He paused and carefully moved it to the grass so nobody would trip. "Imaatatul-adhaa (removing obstacles) is Sadaqah," he smiled.',
        interestConnection: 'A true hero always leaves the path safer than they found it.',
        islamicTeaching: 'Removing obstacles from paths is rewarded by Allah.',
        iconName: 'Sparkles'
      }
    ],
    conclusion: 'Every day is full of chances to practice Sadaqah—through smiles, sweet words, helping hands, and gentle care for all creations.',
    reflectionQuestion: 'What is one act of Sadaqah you can do right now?'
  },
  visualContent: {
    title: 'Pillar 1: Sadaqah & Shahadah Visual Cards',
    subtitle: 'Visual cards showing daily kindness and faith actions.',
    completionBadge: '🌟 Sadaqah Champion Badge Unlocked!',
    cards: [
      {
        stepNumber: 1,
        title: 'Shahadah in Heart',
        simpleSentence: 'Say Laa ilaaha ill-Allah with a calm, peaceful heart.',
        arabicTerm: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
        iconName: 'Heart',
        visualHint: 'Faith compass: One Creator of all things.',
        badge: 'Pillar 1'
      },
      {
        stepNumber: 2,
        title: 'Smiling is Sadaqah',
        simpleSentence: 'Smile at your family and friends to spread happiness.',
        arabicTerm: 'تَبَسُّمُكَ صَدَقَةٌ',
        iconName: 'Smile',
        visualHint: 'Warm smile brightening someone\'s day.',
        badge: 'Smile Gift'
      },
      {
        stepNumber: 3,
        title: 'Kind Words',
        simpleSentence: 'Speak gently and say JazakAllahu Khayran.',
        arabicTerm: 'الكَلِمَةُ الطَّيِّبَةُ',
        iconName: 'Sun',
        visualHint: 'Sweet words like comforting honey.',
        badge: 'Pure Voice'
      },
      {
        stepNumber: 4,
        title: 'Helping Hands',
        simpleSentence: 'Pick up toys and remove obstacles from walking paths.',
        arabicTerm: 'إِمَاطَةُ الأَذَى',
        iconName: 'HeartHandshake',
        visualHint: 'Clear, safe paths for everyone.',
        badge: 'Helper Hero'
      },
      {
        stepNumber: 5,
        title: 'Mercy to Animals',
        simpleSentence: 'Give fresh water and gentle love to birds and pets.',
        arabicTerm: 'الرَّحْمَة',
        iconName: 'Shield',
        visualHint: 'Gentle petting and feeding thirsty creatures.',
        badge: 'Animal Friend'
      }
    ]
  },
  stepContent: {
    title: 'Sadaqah & Faith Step-by-Step Checklist',
    goal: 'Practice daily kindness and faith one gentle step at a time.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Shahadah in the Heart',
        instruction: 'Whisper "Laa ilaaha ill-Allah" and feel calm in your heart.',
        detail: 'Believe that Allah is One and loves good deeds.',
        repeatPhrase: 'Laa ilaaha ill-Allah.',
        iconName: 'Heart',
        sensoryTip: 'Place a gentle hand on your heart.'
      },
      {
        stepNumber: 2,
        title: '2. Smile at Someone',
        instruction: 'Give a big warm smile to a friend or family member.',
        detail: 'Smiling is a free and joyful gift of Sadaqah.',
        repeatPhrase: 'A smile spreads joy!',
        iconName: 'Smile',
        sensoryTip: 'Feel the corners of your mouth lift comfortably.'
      },
      {
        stepNumber: 3,
        title: '3. Speak Sweet Words',
        instruction: 'Say "JazakAllahu Khayran" or a kind compliment.',
        detail: 'Kind words make others feel appreciated.',
        repeatPhrase: 'Kind words are Sadaqah.',
        iconName: 'Sun',
        sensoryTip: 'Speak softly and clearly.'
      },
      {
        stepNumber: 4,
        title: '4. Tidy Up and Help',
        instruction: 'Help clean up or pick up an item off the floor.',
        detail: 'Keeping spaces safe and clean pleases Allah.',
        repeatPhrase: 'Helping hands do good deeds.',
        iconName: 'HeartHandshake',
        sensoryTip: 'Smooth and orderly surroundings bring calm.'
      }
    ],
    successMessage: 'Alhamdulillah! You mastered Pillar 1: Sadaqah & Shahadah!'
  },
  flashcardContent: {
    title: 'Sadaqah & Shahadah Study Flashcards',
    cards: [
      {
        id: 'fc-sad1',
        frontTerm: 'Shahadah',
        frontArabic: 'الشَّهَادَة',
        frontTransliteration: 'Ash-Shahadah',
        frontSubtext: 'The Declaration of Faith',
        backDefinition: 'Believing in One Allah and Muhammad as His Messenger.',
        backInterestAnalogy: 'The royal foundation of all good actions.',
        backActionOrQuestion: 'Where does Shahadah live? (In our heart!)',
        iconName: 'Heart'
      },
      {
        id: 'fc-sad2',
        frontTerm: 'Sadaqah',
        frontArabic: 'الصَّدَقَة',
        frontTransliteration: 'As-Sadaqah',
        frontSubtext: 'Voluntary Charity & Kindness',
        backDefinition: 'Any good deed done for Allah: smiling, speaking gently, helping, and sharing.',
        backInterestAnalogy: 'Planting seeds of happiness that grow into tall shade trees.',
        backActionOrQuestion: 'Is smiling considered Sadaqah? (Yes, the Prophet ﷺ taught smiling is charity!)',
        iconName: 'Smile'
      },
      {
        id: 'fc-sad3',
        frontTerm: 'Fitrah',
        frontArabic: 'الفِطْرَة',
        frontTransliteration: 'Al-Fitrah',
        frontSubtext: 'Natural Pure Compass',
        backDefinition: 'The clean nature we are born with that naturally loves Allah and goodness.',
        backInterestAnalogy: 'A pure compass pointing always to truth and kindness.',
        backActionOrQuestion: 'How does doing good feel in your heart? (Warm and peaceful)',
        iconName: 'Sparkles'
      }
    ]
  },
  parentTips: {
    summary: 'Focuses on building empathy, gentle emotional regulation, and recognizing everyday kindness as sacred worship.',
    reviewStrategy: 'Practice identifying 1 act of Sadaqah at dinner every evening (e.g., "What kind thing did we do or see today?").',
    repetitionTip: 'Use the phrase "Clean heart, kind smile, helpful hands" to reinforce daily habits.',
    activitySuggestion: 'Create a small "Kindness Jar" where the child drops a marble or pebble each time they share or help.',
    sensoryBreakTip: 'Encourage soft tactile sensory items (like a soft fleece or sensory stone) during calm story readings.',
    nextFormatRecommendation: 'Try Step Cards or Comic Mode for visual reinforcement.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice.'
};

/**
 * PILLAR 2: SALAH & SURATUL FATIHA (LINE-BY-LINE)
 * Complete Prayer movements with Verse-by-Verse recitation, Tafsir Ibn Kathir, Rahmah, & Alhamdulillah
 */
export const PILLAR_2_SALAH_LESSON: LessonData = {
  id: 'pillar-2-salah',
  topic: 'Pillar 2: Salah & Suratul Fatiha Line-by-Line (Prayer Pillar)',
  title: 'Pillar 2: Salah — The 5 Daily Prayers & Suratul Fatiha Master',
  learningObjective: 'Master the 5 daily prayers (Salah), learn Suratul Fatiha verse-by-verse with meanings and Tafsir Ibn Kathir, explore Mercy (Rahmah) and saying Alhamdulillah, and practice all prayer postures.',
  introduction: 'Welcome to Pillar 2: Salah! Prayer is our private 5-times-daily conversation with Allah. In this lesson, we break down Suratul Fatiha line-by-line with Tafsir Ibn Kathir, discover what Mercy (Rahmah) and Alhamdulillah mean, and practice all the peaceful movements of prayer from Takbir to Taslim.',
  topicKey: 'salah_prayer',
  ageRange: '7-9',
  learnerNickname: 'Prayer Master',
  selectedInterest: 'Princesses & Castles (or Bluey, Chase, Astronauts, Superheroes)',
  activeFormat: 'interactive_cards',
  learningPreferences: ['visual', 'short_instructions', 'one_step', 'repetition', 'interactive'],
  isCalmMode: false,
  quranReferences: [
    {
      surahName: 'Al-Fatihah',
      surahNumber: 1,
      ayahRange: '1-7',
      url: 'https://quran.com/1',
      arabicSnippet: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ • الرَّحْمَٰنِ الرَّحِيمِ • مَالِكِ يَوْمِ الدِّينِ',
      englishSnippet: 'In the name of Allah, the Entirely Merciful, the Especially Merciful. [All] praise is [due] to Allah, Lord of the worlds...'
    },
    {
      surahName: 'Ta-Ha',
      surahNumber: 20,
      ayahRange: '14',
      url: 'https://quran.com/20/14',
      arabicSnippet: 'وَأَقِمِ الصَّلَاةَ لِذِكْرِي',
      englishSnippet: 'And establish prayer for My remembrance.'
    }
  ],
  scholarlySources: {
    tafsirIbnKathir: 'Ibn Kathir explains that Suratul Fatiha is "Umm al-Kitab" (The Mother of the Book) — reciting it is a direct reciprocal dialogue where Allah answers every verse.',
    bayyinahInstitute: 'Nouman Ali Khan analyzes the word "Ar-Rahman" (intense, immediate, enveloping compassion) and "Alhamdulillah" as unreserved, joyful gratitude.',
    yaqeenInstitute: 'Dr. Omar Suleiman highlights the sensory grounding of prayer: physical prostration (Sujood) provides neurological stillness and intimacy with the Divine.'
  },
  pedagogicalResearch: [
    SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
    SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
    SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
  ],
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'Step 1: Takbirat al-Ihram & Standing (Qiyam)',
      instruction: 'Stand straight facing the Qiblah. Raise both hands to earlobes/shoulders and say "Allahu Akbar" (Allah is the Greatest).',
      arabicTerm: 'اللَّهُ أَكْبَرُ',
      arabicTransliteration: 'Allahu Akbar',
      tip: 'When you say Allahu Akbar, leave all distractions behind and focus on talking to Allah.',
      detail: 'Fold your right hand gently over your left wrist across your chest. Keep your eyes looking down at the prayer spot with calm respect.',
      iconName: 'Sparkles',
      repeatPhrase: 'Allahu Akbar — Allah is the Greatest.',
      sensoryTip: 'Feel your feet flat, balanced, and rooted on the soft prayer rug.',
      actionPrompt: 'Raise your hands and fold right over left across your chest.'
    },
    {
      stepNumber: 2,
      title: 'Step 2: Opening Thana Praise (Du’a al-Istiftah)',
      instruction: 'Recite the opening Thana praise before reciting Suratul Fatiha.',
      arabicTerm: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ',
      arabicTransliteration: 'Subhanaka Allahumma wa bi hamdika, wa tabaaraka ismuka, wa taʿala jadduka, wa la ilaaha ghayruk',
      tip: 'Meaning: "Glory is to You, O Allah, and praise. Blessed is Your Name, exalted is Your Majesty, and there is no god besides You."',
      detail: 'We begin our prayer by glorifying Allah\'s greatness and purity before asking for anything.',
      iconName: 'Sun',
      repeatPhrase: 'Glory is to You, O Allah, and all praise is for You.',
      sensoryTip: 'Whisper smoothly with a steady, quiet rhythm.',
      actionPrompt: 'Keep your gaze soft and rested on the prayer rug.'
    },
    {
      stepNumber: 3,
      title: 'Suratul Fatiha: Verse 1 — Bismillah & Mercy (Rahmah)',
      instruction: 'Recite Verse 1: "Bismillah ar-Rahman ar-Raheem" (In the name of Allah, the Most Merciful, the Especially Merciful).',
      arabicTerm: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ١',
      arabicTransliteration: 'Bismillah ar-Rahman ar-Raheem (Verse 1)',
      tip: 'What is Mercy (Rahmah)? Rahmah means gentle love, forgiving mistakes, comforting sadness, and being kind to friends and pets!',
      detail: 'Tafsir Ibn Kathir: "Ar-Rahman" is Allah\'s vast mercy embracing all living things; "Ar-Raheem" is His special, enduring mercy for believers. The Prophet ﷺ taught: "Show mercy to those on earth, and Allah will show mercy to you."',
      iconName: 'BookOpen',
      repeatPhrase: 'Bismillah ar-Rahman ar-Raheem.',
      sensoryTip: 'Take a slow, deep breath in and whisper the words gently.',
      actionPrompt: 'How can you show mercy to someone today? (e.g. sharing a toy or giving a gentle hug).'
    },
    {
      stepNumber: 4,
      title: 'Suratul Fatiha: Verse 2 — Saying "Alhamdulillah" with Gratitude',
      instruction: 'Recite Verse 2: "Alhamdu lillahi Rabbil \'alameen" (All thanks and praise are for Allah, Lord of the Worlds).',
      arabicTerm: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ٢',
      arabicTransliteration: 'Alhamdu lillahi Rabbil \'alameen (Verse 2)',
      tip: 'What does Alhamdulillah mean? It means saying "Thank you Allah!" for our breathing, beating heart, clean water, yummy food, and loving family.',
      detail: 'Tafsir Ibn Kathir: "Al-Hamd" is sincere gratitude and love; "Rabb al-\'Alameen" means Allah is the supreme Caretaker, Sustainer, and Guardian of all existing worlds—humans, angels, stars, oceans, and animals.',
      iconName: 'Heart',
      repeatPhrase: 'Alhamdulillah! (All praise and thanks belong to Allah!).',
      sensoryTip: 'Say "Alhamdulillah" out loud right now and smile thinking of your favorite blessing.',
      actionPrompt: 'Teach yourself to say "Alhamdulillah" every time you finish eating or drinking water!'
    },
    {
      stepNumber: 5,
      title: 'Suratul Fatiha: Verse 3 — The Most Compassionate',
      instruction: 'Recite Verse 3: "Ar-Rahman ar-Raheem" (The Most Merciful, the Especially Merciful).',
      arabicTerm: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ٣',
      arabicTransliteration: 'Ar-Rahmaani-r-Raheem (Verse 3)',
      tip: 'Allah reminds us twice of His vast Mercy so our heart always feels safe, protected, and hopeful.',
      detail: 'No matter what happens, Allah\'s mercy is bigger than everything. We turn to Him whenever we feel worried or scared.',
      iconName: 'Shield',
      repeatPhrase: 'Ar-Rahmaani-r-Raheem — The Most Merciful.',
      sensoryTip: 'Feel the soothing warmth in your chest as you remember Allah\'s kindness.'
    },
    {
      stepNumber: 6,
      title: 'Suratul Fatiha: Verse 4 — Master of the Day of Judgment',
      instruction: 'Recite Verse 4: "Maaliki Yawmid-Deen" (Sovereign of the Day of Recompense / Judgment).',
      arabicTerm: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ ٤',
      arabicTransliteration: 'Maaliki yawmi-d-deen (Verse 4)',
      tip: 'Allah is the Fair King who rewards every single good deed—even a tiny smile or a gentle word!',
      detail: 'Tafsir Ibn Kathir: On that Day, all absolute authority belongs to Allah alone, where perfect justice and mercy will prevail.',
      iconName: 'Crown',
      repeatPhrase: 'Maaliki yawmi-d-deen — Sovereign of the Day of Recompense.',
      sensoryTip: 'Stand tall with respect, like standing before the Most Just King.'
    },
    {
      stepNumber: 7,
      title: 'Suratul Fatiha: Verse 5 — Asking Allah Alone for Help',
      instruction: 'Recite Verse 5: "Iyyaka na\'budu wa iyyaka nasta\'een" (You alone we worship, and You alone we ask for help).',
      arabicTerm: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٥',
      arabicTransliteration: 'Iyyaka naʿbudu wa iyyaka nastaʿin (Verse 5)',
      tip: 'This is the heart of the Surah! We worship only Allah and we can ask Him for help anytime, anywhere.',
      detail: 'When you need help with school, feeling brave, or being patient, whisper: "O Allah, help me!"',
      iconName: 'Compass',
      repeatPhrase: 'Iyyaka naʿbudu wa iyyaka nastaʿin — You alone we worship and ask for help.',
      sensoryTip: 'Whisper this verse slowly and know that Allah is listening directly to you.'
    },
    {
      stepNumber: 8,
      title: 'Suratul Fatiha: Verse 6 — The Straight Path of Light',
      instruction: 'Recite Verse 6: "Ihdina-s-siraata-l-mustaqeem" (Guide us to the Straight Path).',
      arabicTerm: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ٦',
      arabicTransliteration: 'Ihdina-s-siraata-l-mustaqim (Verse 6)',
      tip: 'The Straight Path is the clear, beautiful road of honesty, prayer, kindness, and doing what is right.',
      detail: 'We ask Allah 17 times each day in our mandatory prayers to keep our footsteps steady on the path of goodness.',
      iconName: 'Sun',
      repeatPhrase: 'Ihdina-s-siraata-l-mustaqim — Guide us to the Straight Path.',
      sensoryTip: 'Picture a glowing, peaceful path of light guiding your steps.'
    },
    {
      stepNumber: 9,
      title: 'Suratul Fatiha: Verse 7 — The Path of the Blessed (+ Ameen)',
      instruction: 'Recite Verse 7: "Siraata-l-ladheena an\'amta \'alayhim..." concluding with a peaceful "Ameen".',
      arabicTerm: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ٧ • آمِين',
      arabicTransliteration: 'Siraata-l-ladheena anʿamta ʿalayhim ghayri-l-maghdoobi ʿalayhim wa la-d-daalleen • Ameen',
      tip: 'Meaning: "The path of those You have blessed—not of those who earned anger, nor of those who are lost." Ameen means: "O Allah, please accept our prayer!"',
      detail: 'Those who are blessed are the Prophets, the truthful, and righteous believers who lived with kindness and faith.',
      iconName: 'CheckCircle2',
      repeatPhrase: 'Ameen — O Allah, accept our prayer!',
      sensoryTip: 'Say "Ameen" softly with your heart full of hope and tranquility.'
    },
    {
      stepNumber: 10,
      title: 'Salah: Ruku (Bowing with Reverence)',
      instruction: 'Say "Allahu Akbar" and bow placing your hands flat on your knees. Say "Subhaana Rabbiyal-ʿAdheem" 3 times.',
      arabicTerm: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ (x3)',
      arabicTransliteration: 'Subhaana Rabbiyal-ʿAdheem (Glory to my Lord, the Most Great x3)',
      tip: 'Keep your back flat like a smooth, level table and pause for 3 calm seconds.',
      detail: 'Bowing shows our humility and deep love for our Creator. We glorify Allah who is Al-ʿAdheem (The Magnificent).',
      iconName: 'Smile',
      repeatPhrase: 'Subhaana Rabbiyal-ʿAdheem — Glory to my Lord the Most Great.',
      sensoryTip: 'Rest your hands cupping your knees and feel your back level and steady.',
      actionPrompt: 'Bow smoothly into Ruku and count 3 calm breaths.'
    },
    {
      stepNumber: 11,
      title: 'Salah: I’tidal (Standing Straight with Praise)',
      instruction: 'Stand up straight saying "Samiʿa Allahu liman hamidah" (Allah hears who praises Him), then say "Rabbana wa Lakal Hamd".',
      arabicTerm: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ • رَبَّنَا وَلَكَ الْحَمْدُ',
      arabicTransliteration: 'Samiʿa Allahu liman hamidah • Rabbana wa Lakal Hamd',
      tip: 'Meaning: "Allah hears whoever praises Him. Our Lord, to You belongs all praise."',
      detail: 'Stand completely upright and still for a moment before moving down to Sujood.',
      iconName: 'Sparkles',
      repeatPhrase: 'Rabbana wa Lakal Hamd — Our Lord, all praise is for You.',
      sensoryTip: 'Feel your posture upright, relaxed, and grateful.'
    },
    {
      stepNumber: 12,
      title: 'Salah: Sujood (Prostration — Closest to Allah)',
      instruction: 'Say "Allahu Akbar" and prostrate touching forehead, nose, both palms, knees, and toes to floor. Say "Subhaana Rabbiyal-Aʿla" 3 times.',
      arabicTerm: 'سُبْحَانَ رَبِّيَ الأَعْلَى (x3)',
      arabicTransliteration: 'Subhaana Rabbiyal-Aʿla (Glory to my Lord, the Most High x3)',
      tip: 'In Sujood, we are closest to Allah! You can whisper any sweet dua in your heart.',
      detail: 'Prophet Muhammad ﷺ taught: "The nearest a servant is to their Lord is when they are in Sujood, so make plenty of dua."',
      iconName: 'Moon',
      repeatPhrase: 'Subhaana Rabbiyal-Aʿla — Glory to my Lord the Most High.',
      sensoryTip: 'Feel the soft, comforting prayer mat under your forehead.',
      actionPrompt: 'Place forehead softly on the rug and whisper a sweet dua to Allah.'
    },
    {
      stepNumber: 13,
      title: 'Salah: Tashahhud & Salawat upon the Prophets',
      instruction: 'Sit peacefully on your heels and recite the Tashahhud and Salawat upon Prophet Muhammad ﷺ and Prophet Ibrahim (AS).',
      arabicTerm: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ... • اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ...',
      arabicTransliteration: 'At-tahiyyatu lillaahi was-salawaatu wat-tayyibaat... • Allahumma salli ʿala Muhammad...',
      tip: 'We send blessings of peace upon Prophet Muhammad ﷺ and his family, just as Allah blessed Prophet Ibrahim (AS).',
      detail: 'Tashahhud is the royal greeting we offer to Allah, expressing peace and brotherhood with all righteous servants.',
      iconName: 'Heart',
      repeatPhrase: 'Peace and blessings upon Prophet Muhammad and Prophet Ibrahim.',
      sensoryTip: 'Rest your hands on your thighs in calm, balanced posture.'
    },
    {
      stepNumber: 14,
      title: 'Salah: Taslim (Spreading Peace to the World)',
      instruction: 'Turn your head gently to the right: "As-salaamu ʿalaykum wa rahmatullah", then to the left: "As-salaamu ʿalaykum wa rahmatullah".',
      arabicTerm: 'السَّلَامُ عَلَيْكُم وَرَحْمَةُ اللَّهِ (Right & Left)',
      arabicTransliteration: 'As-salaamu ʿalaykum wa rahmatullah',
      tip: 'Taslim concludes our prayer by sending greetings of peace and mercy to angels and everyone around us!',
      detail: 'We finish our prayer calm, refreshed, and ready to share kindness with the world.',
      iconName: 'CheckCircle2',
      repeatPhrase: 'As-salaamu ʿalaykum wa rahmatullah — Peace and mercy of Allah be upon you.',
      sensoryTip: 'Turn your head slowly to the right shoulder, then to the left shoulder.',
      actionPrompt: 'Complete your prayer with Taslim and say "Alhamdulillah"!'
    }
  ],
  activity: {
    title: 'Suratul Fatiha & Prayer Master Sequence',
    type: 'hands-on-recitation',
    instructions: 'Practice the complete prayer cycle and recite Suratul Fatiha line-by-line:',
    actionItems: [
      '1. Practice saying "Alhamdulillah" 3 times with gratitude for heartbeat, water, and food (Tafsir Ibn Kathir).',
      '2. Recite Verse 1 (Bismillah, Ar-Rahman, Ar-Raheem) and think of 1 way to show Mercy (Rahmah) today.',
      '3. Follow the 7 verses of Al-Fatihah slowly with calm breathing.',
      '4. Practice Ruku (Bowing), Sujood (Prostration), and Taslim (Peace to the right and left).'
    ],
    interestConnection: 'Like a peaceful fortress of light, the 5 daily prayers protect your heart and keep you connected to Allah 24/7!',
    completionPrompt: 'MashaAllah! You unlocked the Suratul Fatiha & Salah Master Badge!'
  },
  reviewQuestion: {
    question: 'What does Tafsir Ibn Kathir teach us about the word "Alhamdulillah" in Suratul Fatiha?',
    hint: 'Think about how we express heartfelt thankfulness to Allah for all our blessings.',
    options: [
      {
        id: 'sal-opt-1',
        text: 'It is wholehearted praise and gratitude to Allah, the loving Caretaker and Sustainer of all worlds',
        isCorrect: true,
        explanation: 'MashaAllah, perfect! Tafsir Ibn Kathir explains that Al-Hamd is expressing sincere gratitude to Allah for all His endless gifts.'
      },
      {
        id: 'sal-opt-2',
        text: 'It means we only thank Allah on weekends',
        isCorrect: false,
        explanation: 'We say Alhamdulillah in every unit of prayer and throughout our daily life!'
      },
      {
        id: 'sal-opt-3',
        text: 'It means rushing through prayer as fast as possible',
        isCorrect: false,
        explanation: 'Salah is performed with calm stillness, peace, and reflection.'
      }
    ],
    correctAnswerExplanation: 'Suratul Fatiha is the Mother of the Book (Umm al-Kitab). Saying Alhamdulillah fills our heart with gratitude, and prayer connects us directly to Allah 5 times every day.'
  },
  storyContent: {
    title: 'The Golden Garden of Prayer',
    theme: 'Talking Directly to Allah 5 Times a Day',
    intro: 'Step onto the prayer rug with young Ameen as he learns how every verse of Suratul Fatiha is a direct conversation with our Creator.',
    slides: [
      {
        id: 'sal-s1',
        chapterNumber: 1,
        title: 'Standing in Qiyam & Opening Praise',
        text: 'Ameen unrolled his prayer rug facing the Qiblah. He raised his hands and said "Allahu Akbar". The world became quiet and calm. In his heart, he recited the Thana: "Subhanaka Allahumma wa bi hamdika..." praising Allah\'s glorious name.',
        interestConnection: 'Entering a sanctuary of peace where distractions disappear.',
        islamicTeaching: 'Standing in Qiyam prepares our heart to converse with Allah.',
        iconName: 'Sparkles'
      },
      {
        id: 'sal-s2',
        chapterNumber: 2,
        title: 'The Gift of Mercy & Saying Alhamdulillah',
        text: 'Ameen recited Verse 1: "Bismillah ar-Rahman ar-Raheem". He remembered that Rahmah means gentle kindness and sharing love. Then he recited Verse 2: "Alhamdu lillahi Rabbil \'alameen". He smiled warmly, thanking Allah for his family, eyes, breathing, and tasty meals.',
        interestConnection: 'Counting blessings that shine like diamonds.',
        islamicTeaching: 'Fatihah teaches us about Allah\'s vast Mercy and our gratitude.',
        iconName: 'Sun'
      },
      {
        id: 'sal-s3',
        chapterNumber: 3,
        title: 'The Straight Path and Asking for Help',
        text: 'Reaching Verse 5, Ameen whispered: "Iyyaka na\'budu wa iyyaka nasta\'een" (You alone we worship and ask for help). He asked Allah for guidance on the Straight Path of goodness and honesty.',
        interestConnection: 'A bright beacon of light guiding every step.',
        islamicTeaching: 'Allah promises to answer whenever we ask for guidance.',
        iconName: 'Compass'
      },
      {
        id: 'sal-s4',
        chapterNumber: 4,
        title: 'Nearest to Allah in Sujood',
        text: 'Ameen bowed in Ruku and then rested his forehead softly on the rug in Sujood. "Subhaana Rabbiyal-Aʿla," he whispered three times. In Sujood, he felt closest to Allah. He finished with Taslim, turning right and left to spread peace.',
        interestConnection: 'Completing the sacred flight with full tranquility.',
        islamicTeaching: 'Sujood brings us nearest to Allah, and Taslim spreads peace to everyone.',
        iconName: 'CheckCircle2'
      }
    ],
    conclusion: 'Salah is our daily conversation of light, mercy, and gratitude with Allah.',
    reflectionQuestion: 'How do you feel when you place your forehead on the prayer rug in Sujood?'
  },
  visualContent: {
    title: 'Pillar 2: Salah & Suratul Fatiha Visual PECS Guide',
    subtitle: 'Step-by-step visual cards for all prayer postures and Fatihah verses.',
    completionBadge: '🌟 Salah & Suratul Fatiha Master Badge Unlocked!',
    cards: [
      {
        stepNumber: 1,
        title: 'Qiyam & Takbir',
        simpleSentence: 'Stand facing Qiblah, raise hands: Allahu Akbar.',
        arabicTerm: 'اللَّهُ أَكْبَرُ',
        iconName: 'Sparkles',
        visualHint: 'Stand tall with eyes looking at prayer spot.',
        badge: 'Standing Focus'
      },
      {
        stepNumber: 2,
        title: 'Thana Opening Praise',
        simpleSentence: 'Recite Subhanaka Allahumma wa bi hamdika...',
        arabicTerm: 'سُبْحَانَكَ اللَّهُمَّ',
        iconName: 'Sun',
        visualHint: 'Glory and praise to You, O Allah.',
        badge: 'Opening Praise'
      },
      {
        stepNumber: 3,
        title: 'Fatiha Verse 1: Mercy (Rahmah)',
        simpleSentence: 'Bismillah ar-Rahman ar-Raheem: The Most Merciful.',
        arabicTerm: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        iconName: 'BookOpen',
        visualHint: 'Tafsir Ibn Kathir: Rahmah is gentle kindness, hugs, and forgiveness.',
        badge: 'Rahmah'
      },
      {
        stepNumber: 4,
        title: 'Fatiha Verse 2: Alhamdulillah',
        simpleSentence: 'Alhamdu lillahi Rabbil \'alameen: Gratitude for all blessings!',
        arabicTerm: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        iconName: 'Heart',
        visualHint: 'Tafsir Ibn Kathir: Saying thank you Allah for heartbeats, water, and food.',
        badge: 'Gratitude'
      },
      {
        stepNumber: 5,
        title: 'Fatiha Verses 3-7: Straight Path',
        simpleSentence: 'Iyyaka na\'budu... Ihdina-s-siraat: Guide us on the Straight Path.',
        arabicTerm: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        iconName: 'Compass',
        visualHint: 'Asking Allah for help on the road of honesty.',
        badge: 'Straight Path'
      },
      {
        stepNumber: 6,
        title: 'Ruku: Bowing',
        simpleSentence: 'Bow hands on knees: Subhaana Rabbiyal-ʿAdheem (x3).',
        arabicTerm: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
        iconName: 'Smile',
        visualHint: 'Level back like a table, 3 calm seconds.',
        badge: 'Ruku Bow'
      },
      {
        stepNumber: 7,
        title: 'I’tidal: Standing Up Straight',
        simpleSentence: 'Samiʿa Allahu liman hamidah • Rabbana wa Lakal Hamd.',
        arabicTerm: 'رَبَّنَا وَلَكَ الْحَمْدُ',
        iconName: 'CheckCircle2',
        visualHint: 'Allah hears who praises Him. Our Lord, all praise is for You.',
        badge: 'I\'tidal'
      },
      {
        stepNumber: 8,
        title: 'Sujood: Nearest to Allah',
        simpleSentence: 'Forehead on floor: Subhaana Rabbiyal-Aʿla (x3).',
        arabicTerm: 'سُبْحَانَ رَبِّيَ الأَعْلَى',
        iconName: 'Moon',
        visualHint: 'Closest position to Allah, whisper sweet duas.',
        badge: 'Sujood'
      },
      {
        stepNumber: 9,
        title: 'Tashahhud & Salawat',
        simpleSentence: 'Sit peacefully: At-tahiyyatu lillah & blessings on Muhammad ﷺ.',
        arabicTerm: 'التَّحِيَّاتُ لِلَّهِ',
        iconName: 'Heart',
        visualHint: 'Royal greetings and peace upon the Prophets.',
        badge: 'Tashahhud'
      },
      {
        stepNumber: 10,
        title: 'Taslim: Spreading Peace',
        simpleSentence: 'Turn right then left: As-salaamu ʿalaykum wa rahmatullah.',
        arabicTerm: 'السَّلَامُ عَلَيْكُم وَرَحْمَةُ اللَّهِ',
        iconName: 'CheckCircle2',
        visualHint: 'Spreading peace to angels and everyone around you.',
        badge: 'Prayer Complete'
      }
    ]
  },
  stepContent: {
    title: 'Salah & Suratul Fatiha Step-by-Step Checklist',
    goal: 'Master each posture and verse slowly with calm breathing.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Takbir & Standing Qiyam',
        instruction: 'Stand facing Qiblah. Raise hands saying "Allahu Akbar" and fold across chest.',
        detail: 'Look down softly at the prayer rug spot.',
        repeatPhrase: 'Allahu Akbar.',
        iconName: 'Sparkles',
        sensoryTip: 'Feet balanced and grounded.'
      },
      {
        stepNumber: 2,
        title: '2. Opening Thana Praise',
        instruction: 'Recite "Subhanaka Allahumma wa bi hamdika...".',
        detail: 'Glorifying Allah\'s pure name.',
        repeatPhrase: 'Glory is to You O Allah.',
        iconName: 'Sun',
        sensoryTip: 'Whisper smoothly.'
      },
      {
        stepNumber: 3,
        title: '3. Fatiha Verse 1: Bismillah & Mercy',
        instruction: 'Recite "Bismillah ar-Rahman ar-Raheem". Remember Mercy (Rahmah).',
        detail: 'Rahmah is gentle care, hugging, and forgiving.',
        repeatPhrase: 'Bismillah ar-Rahman ar-Raheem.',
        iconName: 'BookOpen',
        sensoryTip: 'Slow, deep breath.'
      },
      {
        stepNumber: 4,
        title: '4. Fatiha Verse 2: Saying Alhamdulillah',
        instruction: 'Recite "Alhamdu lillahi Rabbil \'alameen".',
        detail: 'Say thank you Allah for heartbeat, water, food, and family (Tafsir Ibn Kathir).',
        repeatPhrase: 'Alhamdulillah!',
        iconName: 'Heart',
        sensoryTip: 'Smile as you say Alhamdulillah.'
      },
      {
        stepNumber: 5,
        title: '5. Fatiha Verses 3 to 7 (+ Ameen)',
        instruction: 'Recite verses 3-7 asking for help on the Straight Path. Say "Ameen".',
        detail: 'Iyyaka na\'budu wa iyyaka nasta\'een.',
        repeatPhrase: 'Ihdina-s-siraata-l-mustaqim.',
        iconName: 'Compass',
        sensoryTip: 'Follow the calm rhythm.'
      },
      {
        stepNumber: 6,
        title: '6. Bowing in Ruku',
        instruction: 'Bow with hands on knees: "Subhaana Rabbiyal-ʿAdheem" (x3).',
        detail: 'Back level like a table.',
        repeatPhrase: 'Subhaana Rabbiyal-ʿAdheem.',
        iconName: 'Smile',
        sensoryTip: '3-second steady pause.'
      },
      {
        stepNumber: 7,
        title: '7. Prostrating in Sujood',
        instruction: 'Forehead on floor: "Subhaana Rabbiyal-Aʿla" (x3).',
        detail: 'You are nearest to Allah in Sujood.',
        repeatPhrase: 'Subhaana Rabbiyal-Aʿla.',
        iconName: 'Moon',
        sensoryTip: 'Feel the soft rug.'
      },
      {
        stepNumber: 8,
        title: '8. Tashahhud, Salawat & Taslim',
        instruction: 'Sit for Tashahhud, send Salawat, and turn head right and left with Taslim.',
        detail: 'As-salaamu ʿalaykum wa rahmatullah.',
        repeatPhrase: 'As-salaamu ʿalaykum wa rahmatullah.',
        iconName: 'CheckCircle2',
        sensoryTip: 'Turn head gently right, then left.'
      }
    ],
    successMessage: 'Alhamdulillah! You mastered Pillar 2: Salah & Suratul Fatiha!'
  },
  flashcardContent: {
    title: 'Salah & Suratul Fatiha Flashcards',
    cards: [
      {
        id: 'fc-sal1',
        frontTerm: 'Salah',
        frontArabic: 'الصَّلَاة',
        frontTransliteration: 'As-Salah',
        frontSubtext: 'The 5 Daily Prayers',
        backDefinition: 'Our direct connection to Allah 5 times daily with Qiyam, Fatihah, Ruku, Sujood, and Taslim.',
        backInterestAnalogy: 'A 24/7 direct communication line to the Creator of the universe.',
        backActionOrQuestion: 'How many daily prayers are there? (5: Fajr, Dhuhr, Asr, Maghrib, Isha)',
        iconName: 'Compass'
      },
      {
        id: 'fc-sal2',
        frontTerm: 'Suratul Fatiha',
        frontArabic: 'سُورَة الفَاتِحَة',
        frontTransliteration: 'Surat Al-Fatihah',
        frontSubtext: 'The Opening of the Quran',
        backDefinition: 'The 7-verse Surah recited in every unit of prayer, expressing Mercy (Rahmah) and gratitude (Alhamdulillah).',
        backInterestAnalogy: 'The master key that unlocks every prayer.',
        backActionOrQuestion: 'What does Alhamdulillah mean? (All praise and thanks belong to Allah!)',
        iconName: 'BookOpen'
      },
      {
        id: 'fc-sal3',
        frontTerm: 'Sujood',
        frontArabic: 'السُّجُود',
        frontTransliteration: 'As-Sujood',
        frontSubtext: 'Prostration — Nearest to Allah',
        backDefinition: 'Resting forehead and palms on the floor, glorifying Allah as Al-A\'la (The Most High).',
        backInterestAnalogy: 'The most peaceful moment where all worries melt away.',
        backActionOrQuestion: 'What do we say in Sujood? ("Subhaana Rabbiyal-A\'la" 3 times)',
        iconName: 'Moon'
      }
    ]
  },
  parentTips: {
    summary: 'Comprehensive multi-sensory guide for teaching the 5 daily prayers and line-by-line Suratul Fatiha with Tafsir Ibn Kathir insights.',
    reviewStrategy: 'Use the visual PECS cards near the prayer area so the child can point to each prayer position.',
    repetitionTip: 'Practice one verse of Fatihah per day with its meaning and practice saying "Alhamdulillah" after meals.',
    activitySuggestion: 'Trace the prayer sequence with hands-on movements and 3-second pauses in Ruku and Sujood.',
    sensoryBreakTip: 'Choose a soft, cozy prayer rug and adjust lighting to a calm, comfortable level.',
    nextFormatRecommendation: 'Explore Comic / Visual Mode for full-screen PEC cards or Step-by-Step Mode.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice.'
};

/**
 * PILLAR 3: SIYAM (SAWM)
 * Ramadan Fasting, Gratitude, and Daily Compassion Routine
 */
export const PILLAR_3_SIYAM_LESSON: LessonData = {
  id: 'pillar-3-siyam',
  topic: 'Pillar 3: Siyam (Fasting & Gratitude in Ramadan)',
  title: 'Pillar 3: Siyam — Ramadan Fasting, Gratitude & Compassion',
  learningObjective: 'Understand why Muslims fast during Ramadan (Sawm/Siyam), explore the daily routine from Suhoor to Iftar, and discover how fasting builds empathy and gratitude for Allah\'s blessings.',
  introduction: 'Welcome to Pillar 3: Siyam! Fasting during the holy month of Ramadan means not eating or drinking from dawn to sunset. Siyam teaches our heart patience, gratitude for every drop of water, and empathy for hungry people around the world.',
  topicKey: 'ramadan_fasting',
  ageRange: '7-9',
  learnerNickname: 'Grateful Observer',
  selectedInterest: 'Princesses & Castles (or Superheroes, Space, Animals)',
  activeFormat: 'interactive_cards',
  learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
  isCalmMode: false,
  quranReferences: [
    {
      surahName: 'Al-Baqarah',
      surahNumber: 2,
      ayahRange: '183-185',
      url: 'https://quran.com/2/183',
      arabicSnippet: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
      englishSnippet: 'O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous (gain Taqwa).'
    }
  ],
  scholarlySources: {
    tafsirIbnKathir: 'Ibn Kathir notes that fasting purifies physical desires, breaks negative habits, and awakens genuine empathy for the impoverished.',
    bayyinahInstitute: 'Nouman Ali Khan highlights the linguistic root of "Taqwa" as building a conscious protective shield between the soul and harmful actions.',
    yaqeenInstitute: 'Dr. Omar Suleiman explains that structured rituals in Ramadan provide routine, predictability, and dopamine reward pathways for neurodivergent children.'
  },
  pedagogicalResearch: [
    SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
    SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
    SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
  ],
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'What is Siyam (Sawm)?',
      instruction: 'Learn the definition: Fasting from dawn (Fajr) until sunset (Maghrib) during the holy month of Ramadan.',
      arabicTerm: 'الصِّيَام (As-Siyam / As-Sawm)',
      arabicTransliteration: 'As-Siyam (Ramadan Fasting)',
      tip: 'Fasting is not just about skipping food—it is about training our tongue to speak kindness and our eyes to look at goodness.',
      detail: 'Fasting is the 3rd Pillar of Islam. Allah commands it so we can gain Taqwa (mindfulness of Allah and loving obedience).',
      iconName: 'Moon',
      repeatPhrase: 'Siyam builds patience, gratitude, and a clean heart.',
      sensoryTip: 'Picture a serene silver crescent moon shining in the night sky.',
      actionPrompt: 'Can you whisper "Ramadan Mubarak" with a happy smile?'
    },
    {
      stepNumber: 2,
      title: 'Morning Suhoor Meal & Pure Intention',
      instruction: 'Wake up early before sunrise to eat a healthy Suhoor meal and make the intention (Niyyah) in your heart to fast for Allah.',
      arabicTerm: 'السَّحُور (As-Suhoor)',
      arabicTransliteration: 'As-Suhoor (The Pre-Dawn Meal)',
      tip: 'The Prophet ﷺ taught: "Eat Suhoor, for indeed there is blessing (Barakah) in Suhoor."',
      detail: 'Eating oats, fruits, eggs, and drinking plenty of water helps nourish our body with energy throughout the day.',
      iconName: 'Sun',
      repeatPhrase: 'Suhoor brings barakah and strength for our fast.',
      sensoryTip: 'Imagine the cozy warmth of eating a calm meal with family before sunrise.'
    },
    {
      stepNumber: 3,
      title: 'Empathy for Others & Patient Heart',
      instruction: 'When our tummy feels a little hungry, we remember children and families who don\'t have enough food every day.',
      arabicTerm: 'الشُّعُورُ بِالآخَرِين (Empathy)',
      arabicTransliteration: 'Ash-Shu\'oor bil-aakhareen (Empathy & Compassion)',
      tip: 'Fasting softens our heart and makes us want to share food, charity, and warmth with everyone in need.',
      detail: 'Instead of complaining, we practice Sabr (patience) and make sweet duas for hungry people everywhere.',
      iconName: 'Heart',
      repeatPhrase: 'Fasting teaches us kindness and empathy for others.',
      sensoryTip: 'Place your hand over your tummy and whisper a gentle dua for others.'
    },
    {
      stepNumber: 4,
      title: 'Helping Family Prepare for Iftar',
      instruction: 'Help set the dinner table, wash fresh dates, pour water cups, and recite Quran while waiting for sunset.',
      arabicTerm: 'خِدْمَةُ الصَّائِمِينَ (Helping Fasters)',
      arabicTransliteration: 'Khidmat us-saa\'imeen (Serving the Fasting)',
      tip: 'Whoever helps feed a fasting person receives a huge reward from Allah!',
      detail: 'Helping in the kitchen with safe tasks like placing napkins or washing berries earns big blessings.',
      iconName: 'Sparkles',
      repeatPhrase: 'Helping others break their fast brings joy and blessings.',
      sensoryTip: 'Smell the delicious aroma of soup and warm food being prepared.'
    },
    {
      stepNumber: 5,
      title: 'Sunset Iftar: Sweet Dates & Saying Alhamdulillah',
      instruction: 'When the Maghrib Adhan sounds, break your fast with sweet dates and fresh water, and say the Iftar dua!',
      arabicTerm: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ العُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ',
      arabicTransliteration: 'Dhahaba adh-dhama\'u wab-tallatil-\'urooqu wa thabatal-ajru in sha Allah',
      tip: 'Meaning: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills."',
      detail: 'The first sip of cool water and the first bite of a sweet date taste wonderful when you have been patient all day.',
      iconName: 'HeartHandshake',
      repeatPhrase: 'Alhamdulillah for cool water, sweet dates, and yummy food!',
      sensoryTip: 'Taste the comforting sweetness of a date melting in your mouth.',
      actionPrompt: 'Say "Alhamdulillah" as you enjoy your water and dinner!'
    },
    {
      stepNumber: 6,
      title: 'Night Taraweeh Prayers & Peaceful Sleep',
      instruction: 'Pray Maghrib, Isha, and join family for special Taraweeh prayers filled with beautiful Quran recitation.',
      arabicTerm: 'صَلَاةُ التَّرَاوِيح (Taraweeh Prayers)',
      arabicTransliteration: 'Salat ut-Taraweeh',
      tip: 'Taraweeh comes from the Arabic word meaning "rest" because we pause peacefully between units of prayer.',
      detail: 'Listening to the melodic recitation of the Quran calms our mind and prepares us for restful sleep.',
      iconName: 'Moon',
      repeatPhrase: 'Peaceful Quran recitation brings tranquility to the night.',
      sensoryTip: 'Listen to the soothing, rhythmic melody of Quran recitation.'
    }
  ],
  activity: {
    title: 'Ramadan Fasting & Gratitude Daily Tracker',
    type: 'routine-simulator',
    instructions: 'Trace the 5 steps of a blessed Ramadan day from dawn to bedtime:',
    actionItems: [
      '1. Suhoor Prep: Name 2 healthy foods (like oats or bananas) to eat before sunrise.',
      '2. Empathy Dua: Make a dua for children around the world who are hungry.',
      '3. Table Helper: Help set napkins or pour cups of water for Iftar.',
      '4. Iftar Gratitude: Say "Bismillah" and "Alhamdulillah" while enjoying dates and water.'
    ],
    interestConnection: 'Like a patient champion training their superpower of self-control, fasting strengthens your heart!',
    completionPrompt: 'Congratulations! You unlocked the Ramadan Fasting Champion Badge!'
  },
  reviewQuestion: {
    question: 'Why do Muslims fast during the month of Ramadan (Siyam)?',
    hint: 'Think about how fasting builds patience, empathy for the poor, and deep gratitude to Allah.',
    options: [
      {
        id: 'siy-opt-1',
        text: 'To build Taqwa (mindfulness of Allah), learn patience, feel empathy for the hungry, and thank Allah for our blessings',
        isCorrect: true,
        explanation: 'MashaAllah, exactly right! Fasting purifies our soul, teaches empathy, and fills our heart with gratitude.'
      },
      {
        id: 'siy-opt-2',
        text: 'Because we don\'t like eating food',
        isCorrect: false,
        explanation: 'Food is a blessed gift from Allah; we fast for a period to appreciate His gifts and draw closer to Him.'
      },
      {
        id: 'siy-opt-3',
        text: 'Just to stay awake all night playing video games',
        isCorrect: false,
        explanation: 'Ramadan is a holy month of prayer, charity, Quran recitation, and good manners.'
      }
    ],
    correctAnswerExplanation: 'Siyam (Fasting) is the 3rd Pillar of Islam. It strengthens our willpower, softens our heart for the needy, and teaches us to say Alhamdulillah for every blessing.'
  },
  storyContent: {
    title: 'A Day of Light in Ramadan',
    theme: 'Patience, Gratitude, and Sweet Iftar',
    intro: 'Follow young Zayd as he experiences the beautiful daily rhythm of fasting in Ramadan from pre-dawn Suhoor to sweet sunset Iftar.',
    slides: [
      {
        id: 'siy-s1',
        chapterNumber: 1,
        title: 'The Pre-Dawn Suhoor Glow',
        text: 'The house was quiet and lit by warm yellow lamps. Zayd sat with his family eating warm oatmeal and dates. "Bismillah," he whispered, setting his intention to fast for Allah.',
        interestConnection: 'A cozy secret breakfast before the morning sun rises.',
        islamicTeaching: 'Eating Suhoor brings barakah and strength.',
        iconName: 'Sun'
      },
      {
        id: 'siy-s2',
        chapterNumber: 2,
        title: 'The Tummy of Compassion',
        text: 'In the afternoon, Zayd felt a gentle rumble in his stomach. Instead of feeling grumpy, he smiled: "Now I understand how hungry people feel every single day. O Allah, please feed all hungry children."',
        interestConnection: 'Unlocking the superpower of true empathy.',
        islamicTeaching: 'Fasting builds compassion and softens our heart.',
        iconName: 'Heart'
      },
      {
        id: 'siy-s3',
        chapterNumber: 3,
        title: 'Sweet Sunset Iftar & Gratitude',
        text: 'At sunset, the sweet call of the Maghrib Adhan filled the room. Zayd took a sip of cool water and ate a delicious date. "Alhamdulillah!" he smiled. Water had never tasted so sweet.',
        interestConnection: 'The most rewarding celebration at the end of a patient quest.',
        islamicTeaching: 'Breaking the fast with dates and water is Sunnah.',
        iconName: 'Moon'
      }
    ],
    conclusion: 'Siyam is a journey of gratitude that makes us appreciate every bite of food and every drop of water.',
    reflectionQuestion: 'What food or drink do you feel most grateful for after fasting?'
  },
  visualContent: {
    title: 'Pillar 3: Siyam Visual Daily Routine Guide',
    subtitle: 'Visual cards showing the peaceful Ramadan day sequence.',
    completionBadge: '🌟 Siyam Fasting Badge Unlocked!',
    cards: [
      {
        stepNumber: 1,
        title: 'Pre-Dawn Suhoor',
        simpleSentence: 'Eat healthy food and drink water before sunrise.',
        arabicTerm: 'السَّحُور',
        iconName: 'Sun',
        visualHint: 'Warm oats, bananas, and water before Fajr.',
        badge: 'Suhoor'
      },
      {
        stepNumber: 2,
        title: 'Fasting & Good Manners',
        simpleSentence: 'Fast from food and speak kind, peaceful words.',
        arabicTerm: 'الصِّيَام',
        iconName: 'Heart',
        visualHint: 'Guarding speech and smiling with patience.',
        badge: 'Patience'
      },
      {
        stepNumber: 3,
        title: 'Empathy for Others',
        simpleSentence: 'Remember the hungry and make sweet duas for them.',
        arabicTerm: 'الشُّعُورُ بِالآخَرِين',
        iconName: 'Sparkles',
        visualHint: 'Hand on heart making sincere prayers.',
        badge: 'Empathy'
      },
      {
        stepNumber: 4,
        title: 'Iftar Sunset Dates',
        simpleSentence: 'Break fast with sweet dates, water, and Alhamdulillah.',
        arabicTerm: 'الإِفْطَار',
        iconName: 'Moon',
        visualHint: 'Sweet dates and cool water at Maghrib.',
        badge: 'Sweet Iftar'
      },
      {
        stepNumber: 5,
        title: 'Night Taraweeh Prayers',
        simpleSentence: 'Pray with family and listen to calming Quran.',
        arabicTerm: 'التَّرَاوِيح',
        iconName: 'CheckCircle2',
        visualHint: 'Peaceful standing and bowing under the night sky.',
        badge: 'Taraweeh'
      }
    ]
  },
  stepContent: {
    title: 'Siyam Daily Step-by-Step Checklist',
    goal: 'Track each part of the Ramadan routine with calm focus.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Suhoor Meal before Sunrise',
        instruction: 'Wake up, eat a nutritious meal, drink water, and make intention.',
        detail: 'Pre-dawn barakah meal.',
        repeatPhrase: 'Bismillah. Suhoor gives us strength.',
        iconName: 'Sun',
        sensoryTip: 'Cozy, quiet morning atmosphere.'
      },
      {
        stepNumber: 2,
        title: '2. Day of Patience & Kindness',
        instruction: 'Fast from food and drink, avoid complaining, and speak gently.',
        detail: 'Training our patience (Sabr).',
        repeatPhrase: 'I am fasting with a patient heart.',
        iconName: 'Heart',
        sensoryTip: 'Deep, calming breaths.'
      },
      {
        stepNumber: 3,
        title: '3. Helping with Iftar Prep',
        instruction: 'Help set the table with napkins, cups, and dates.',
        detail: 'Serving fasting people brings big rewards.',
        repeatPhrase: 'Helping others brings barakah.',
        iconName: 'Sparkles',
        sensoryTip: 'Delightful dinner aromas.'
      },
      {
        stepNumber: 4,
        title: '4. Sunset Iftar & Saying Alhamdulillah',
        instruction: 'Break fast at Maghrib with dates and water, reciting the Iftar dua.',
        detail: 'Alhamdulillah for all our food and blessings.',
        repeatPhrase: 'Alhamdulillah for sweet dates and water!',
        iconName: 'Moon',
        sensoryTip: 'Sweet, soothing taste of fresh dates.'
      }
    ],
    successMessage: 'Alhamdulillah! You mastered Pillar 3: Siyam (Fasting)!'
  },
  flashcardContent: {
    title: 'Siyam (Ramadan Fasting) Flashcards',
    cards: [
      {
        id: 'fc-siy1',
        frontTerm: 'Siyam / Sawm',
        frontArabic: 'الصِّيَام',
        frontTransliteration: 'As-Siyam',
        frontSubtext: 'Fasting in Ramadan',
        backDefinition: 'Abstaining from food and drink from dawn to sunset to please Allah and build empathy.',
        backInterestAnalogy: 'Recharging your spiritual battery with patience and kindness.',
        backActionOrQuestion: 'What does fasting teach us? (Patience, empathy for the poor, and gratitude)',
        iconName: 'Moon'
      },
      {
        id: 'fc-siy2',
        frontTerm: 'Suhoor',
        frontArabic: 'السَّحُور',
        frontTransliteration: 'As-Suhoor',
        frontSubtext: 'Pre-Dawn Meal',
        backDefinition: 'The blessed meal eaten before sunrise to prepare for fasting.',
        backInterestAnalogy: 'Fueling up the rocket before takeoff.',
        backActionOrQuestion: 'When is Suhoor eaten? (Before the Fajr dawn prayer)',
        iconName: 'Sun'
      },
      {
        id: 'fc-siy3',
        frontTerm: 'Iftar',
        frontArabic: 'الإِفْطَار',
        frontTransliteration: 'Al-Iftar',
        frontSubtext: 'Breaking the Fast at Sunset',
        backDefinition: 'The meal eaten at sunset to break the fast, traditionally started with dates and water.',
        backInterestAnalogy: 'The joyous celebration feast after a victorious quest.',
        backActionOrQuestion: 'What should we say when breaking our fast? (Say Bismillah, make dua, and say Alhamdulillah!)',
        iconName: 'HeartHandshake'
      }
    ]
  },
  parentTips: {
    summary: 'Focuses on the beauty of Ramadan routines, emotional self-regulation, empathy for the hungry, and gratitude for daily food.',
    reviewStrategy: 'Encourage young children to try "half-day fasts" or "mini-fasts" to build confidence without physical fatigue.',
    repetitionTip: 'Celebrate saying "Alhamdulillah" together at Iftar time for every item on the table.',
    activitySuggestion: 'Make a visual Ramadan countdown calendar with daily good deed stickers.',
    sensoryBreakTip: 'Keep resting areas cozy with soft blankets during afternoon hours.',
    nextFormatRecommendation: 'Try Visual Mode or Story Mode for peaceful bedtime reading.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice.'
};

/**
 * PILLAR 4: ZAKAT
 * Purifying Wealth, Giving to Children in Need & Making the World Fair
 */
export const PILLAR_4_ZAKAT_LESSON: LessonData = {
  id: 'pillar-4-zakat',
  topic: 'Pillar 4: Zakat (Giving Charity & Making the World Fair)',
  title: 'Pillar 4: Zakat — Purifying Wealth & Helping Children in Need',
  learningObjective: 'Understand Zakat as the mandatory 4th Pillar of Islam that purifies wealth, shares blessings with children and families in need, and creates a fair and compassionate world.',
  introduction: 'Welcome to Pillar 4: Zakat! Everything in the universe belongs to Allah, and He shares resources with us so we can share them with others. Zakat is a mandatory annual charity (2.5% of saved wealth) that provides food, warm clothes, shelter, and school books to people in need, making the world loving and fair.',
  topicKey: 'zakat_charity',
  ageRange: '7-9',
  learnerNickname: 'Generous Heart',
  selectedInterest: 'Princesses & Castles (or Superheroes, Bluey, Animals)',
  activeFormat: 'interactive_cards',
  learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling', 'interactive'],
  isCalmMode: false,
  quranReferences: [
    {
      surahName: 'At-Tawbah',
      surahNumber: 9,
      ayahRange: '103',
      url: 'https://quran.com/9/103',
      arabicSnippet: 'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا',
      englishSnippet: 'Take from their wealth a charity by which you purify them and cause them increase.'
    },
    {
      surahName: 'At-Tawbah',
      surahNumber: 9,
      ayahRange: '60',
      url: 'https://quran.com/9/60',
      arabicSnippet: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ',
      englishSnippet: 'Zakat expenditures are only for the poor and for the needy...'
    }
  ],
  scholarlySources: {
    tafsirIbnKathir: 'Ibn Kathir clarifies that Zakat purifies human character from selfishness and ensures equitable distribution of divine resources.',
    bayyinahInstitute: 'Nouman Ali Khan highlights the linguistic dimension of "Tazkiyah" — growth through shedding excess and sharing with empathy.',
    yaqeenInstitute: 'Dr. Omar Suleiman explains that teaching children about economic justice and dignity fosters moral grounding and prosocial development.'
  },
  pedagogicalResearch: [
    SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
    SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
    SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING
  ],
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'What is Zakat (Purifying Charity)?',
      instruction: 'Learn the meaning of Zakat: Mandatory charity that cleanses our wealth and shares blessings with those in need.',
      arabicTerm: 'الزَّكَاة (Az-Zakat)',
      arabicTransliteration: 'Az-Zakat (Purification & Growth)',
      tip: 'The word Zakat means "purification" and "growth". Giving never decreases your blessings—it makes them multiply!',
      detail: 'Muslims who have extra saved wealth for a year give 2.5% of it to help poorer families so nobody is left hungry or cold.',
      iconName: 'HeartHandshake',
      repeatPhrase: 'Zakat purifies our heart from greed and brings blessings.',
      sensoryTip: 'Feel the warm, cozy feeling of opening your hands to share.',
      actionPrompt: 'Open your palms gently and imagine offering a helpful gift.'
    },
    {
      stepNumber: 2,
      title: 'Why Zakat Makes the World Fair',
      instruction: 'Imagine a community where every child has warm shoes, healthy food, a cozy bed, and books for school.',
      arabicTerm: 'العَدْلُ وَالتَّكَافُل (Fairness & Support)',
      arabicTransliteration: 'Al-\'Adl wat-Takaaful (Justice & Mutual Support)',
      tip: 'Zakat ensures that money doesn\'t stay only with rich people, but flows like fresh water to everyone.',
      detail: 'When we share, communities become safer, happier, and filled with love. There is less jealousy and more friendship.',
      iconName: 'Shield',
      repeatPhrase: 'Sharing blessings keeps the world fair and kind for every child.',
      sensoryTip: 'Picture children playing happily together in a sunny park with toys.'
    },
    {
      stepNumber: 3,
      title: 'Who Receives Zakat?',
      instruction: 'Zakat is given to 8 specific groups mentioned in the Quran, including the poor, needy, travelers, and those in debt.',
      arabicTerm: 'مَصَارِفُ الزَّكَاة (Recipients of Zakat)',
      arabicTransliteration: 'Masaarif uz-Zakat',
      tip: 'It directly helps families buy groceries, pay for medicine, buy warm winter coats, and send children to school.',
      detail: 'Allah protects the dignity of those in need so they receive help respectfully as their rightful share.',
      iconName: 'Heart',
      repeatPhrase: 'Zakat helps families have food, medicine, and warm clothing.',
      sensoryTip: 'Imagine handing a soft, warm winter jacket to someone shivering in the cold.'
    },
    {
      stepNumber: 4,
      title: 'The Difference Between Zakat and Sadaqah',
      instruction: 'Zakat is mandatory (obligatory) once a year for eligible Muslims; Sadaqah is voluntary kindness you can do anytime!',
      arabicTerm: 'الزَّكَاةُ فَرِيضَةٌ • الصَّدَقَةُ تَطَوُّعٌ',
      arabicTransliteration: 'Az-Zakatu fareedah • As-Sadaqatu tatawwu\'',
      tip: 'Zakat is like the strong castle walls holding up the city, while Sadaqah is the beautiful flowers blooming everywhere!',
      detail: 'Even a child who doesn\'t pay Zakat yet can give Sadaqah every day with their pocket money, sharing a toy, or giving a smile.',
      iconName: 'Sparkles',
      repeatPhrase: 'Zakat is mandatory duty; Sadaqah is daily love and kindness.',
      sensoryTip: 'Smile as you realize that both Zakat and Sadaqah bring huge smiles to people.'
    },
    {
      stepNumber: 5,
      title: 'The Giving Mini-Game: Packing Care Boxes',
      instruction: 'Pack 3 virtual care boxes for families in need: 1. Nutritious Food Box, 2. Warm Winter Blankets, 3. School Books & Crayons.',
      arabicTerm: 'صَنَادِيقُ الخَيْر (Charity Care Packages)',
      arabicTransliteration: 'Sanaadeeq ul-Khayr (Boxes of Goodness)',
      tip: 'Giving brings immense happiness to the giver even more than the receiver!',
      detail: 'When you share blessings, Allah promises to replace what you spent with even greater blessings and peace in your life.',
      iconName: 'CheckCircle2',
      repeatPhrase: 'Giving brings joy to our heart and smiles to others.',
      sensoryTip: 'Imagine carefully taping up a colorful care package filled with gifts.',
      actionPrompt: 'What item would you like to put in a care box for another child?'
    }
  ],
  activity: {
    title: 'Zakat Community Giving Mission',
    type: 'giving-simulator',
    instructions: 'Complete the 3-step generous giving challenge:',
    actionItems: [
      '1. Care Package Packing: Assemble Food, Warm Clothing, and School Supplies.',
      '2. Fairness Check: Explain how sharing wealth makes the world happy and fair.',
      '3. Pocket Money Coin: Drop a coin in your home charity box with the intention of Sadaqah.'
    ],
    interestConnection: 'Like a generous kingdom that ensures every citizen has food and shelter, Zakat protects everyone!',
    completionPrompt: 'MashaAllah! You unlocked the Zakat Generous Heart Badge!'
  },
  reviewQuestion: {
    question: 'How does giving Zakat help society and make the world fair?',
    hint: 'Think about how sharing money helps provide food, clothes, and school books to families in need.',
    options: [
      {
        id: 'zak-opt-1',
        text: 'It purifies our wealth from greed and ensures families in need have food, clothes, medicine, and education',
        isCorrect: true,
        explanation: 'MashaAllah, exactly! Zakat keeps society fair, caring, and united so nobody is left behind.'
      },
      {
        id: 'zak-opt-2',
        text: 'It makes people who give charity poor and unhappy',
        isCorrect: false,
        explanation: 'The Prophet ﷺ said: "Charity does not decrease wealth." It brings barakah and peace!'
      },
      {
        id: 'zak-opt-3',
        text: 'It is only for buying video games',
        isCorrect: false,
        explanation: 'Zakat is dedicated to helping people in need with essential life necessities.'
      }
    ],
    correctAnswerExplanation: 'Zakat is the 4th Pillar of Islam. It is a mandatory annual charity (2.5%) that purifies wealth, prevents greed, and spreads fairness and love across the world.'
  },
  storyContent: {
    title: 'The Treasure of the Generous Heart',
    theme: 'Purifying Wealth and Sharing Joy',
    intro: 'Join young Layla as she learns how her family calculates Zakat and prepares care packages for children in need.',
    slides: [
      {
        id: 'zak-s1',
        chapterNumber: 1,
        title: 'The 2.5% Sharing Secret',
        text: 'Layla watched her father count out the family\'s yearly savings. "Why are we setting aside this portion, Baba?" she asked. "This is Zakat," her father smiled. "It belongs to Allah and is meant to help our brothers and sisters who need it."',
        interestConnection: 'A sacred law that keeps the whole kingdom balanced and fair.',
        islamicTeaching: 'Zakat is a mandatory 2.5% share on saved wealth.',
        iconName: 'HeartHandshake'
      },
      {
        id: 'zak-s2',
        chapterNumber: 2,
        title: 'Packing Care Packages of Joy',
        text: 'Together, they packed boxes with bags of rice, honey, warm wool socks, and bright storybooks. Layla tucked a handwritten card inside that said: "You are loved and special!"',
        interestConnection: 'Preparing royal gift hampers of friendship and warmth.',
        islamicTeaching: 'Giving with kindness and preserving people\'s dignity.',
        iconName: 'Heart'
      },
      {
        id: 'zak-s3',
        chapterNumber: 3,
        title: 'The Warmth of Barakah',
        text: 'When the delivery truck drove off to the community center, Layla felt a wonderful, warm glow in her chest. "Giving makes me feel so happy inside," she beamed. "That is Barakah, my sweet daughter," her mother smiled.',
        interestConnection: 'The magical feeling of making someone else\'s life brighter.',
        islamicTeaching: 'Giving charity brings immense barakah (blessings) to our home.',
        iconName: 'Sparkles'
      }
    ],
    conclusion: 'Zakat is the bridge of compassion that unites rich and poor as one caring family.',
    reflectionQuestion: 'How do you feel when you give a toy or treat to someone else?'
  },
  visualContent: {
    title: 'Pillar 4: Zakat & Giving Visual Cards',
    subtitle: 'Visual cards demonstrating the power of sharing blessings.',
    completionBadge: '🌟 Zakat Champion Badge Unlocked!',
    cards: [
      {
        stepNumber: 1,
        title: 'Zakat (Purifying Charity)',
        simpleSentence: 'Mandatory 2.5% charity on savings to help people in need.',
        arabicTerm: 'الزَّكَاة',
        iconName: 'HeartHandshake',
        visualHint: '2.5% gold coin sharing with community.',
        badge: 'Pillar 4'
      },
      {
        stepNumber: 2,
        title: 'Fair & Caring World',
        simpleSentence: 'Makes sure every child has food, warm clothes, and school books.',
        arabicTerm: 'العَدْلُ',
        iconName: 'Shield',
        visualHint: 'Happy children with food, clothes, and books.',
        badge: 'Fairness'
      },
      {
        stepNumber: 3,
        title: 'Helping 8 Groups',
        simpleSentence: 'Given directly to the poor, needy, and families facing hardship.',
        arabicTerm: 'مَصَارِفُ الزَّكَاة',
        iconName: 'Heart',
        visualHint: 'Nutritious groceries and warm winter coats.',
        badge: 'Dignity'
      },
      {
        stepNumber: 4,
        title: 'Packing Care Packages',
        simpleSentence: 'Pack food, blankets, and school supplies with love.',
        arabicTerm: 'صَنَادِيقُ الخَيْر',
        iconName: 'Sparkles',
        visualHint: 'Care boxes packed with groceries and books.',
        badge: 'Care Package'
      }
    ]
  },
  stepContent: {
    title: 'Zakat Step-by-Step Checklist',
    goal: 'Learn and practice the values of generosity and fairness.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Understand Zakat',
        instruction: 'Learn that Zakat is mandatory 2.5% charity that purifies wealth.',
        detail: 'Shares blessings with families in need.',
        repeatPhrase: 'Sharing wealth purifies our heart.',
        iconName: 'HeartHandshake',
        sensoryTip: 'Open palms comfortably.'
      },
      {
        stepNumber: 2,
        title: '2. Making the World Fair',
        instruction: 'Understand how Zakat provides food, clothing, and education to all.',
        detail: 'Keeps society united and caring.',
        repeatPhrase: 'Fairness and kindness for every child.',
        iconName: 'Shield',
        sensoryTip: 'Warm, peaceful thoughts.'
      },
      {
        stepNumber: 3,
        title: '3. Packing Virtual Care Box',
        instruction: 'Select food, warm clothing, and school supplies to share.',
        detail: 'Giving brings joy to giver and receiver.',
        repeatPhrase: 'Giving brings barakah and happiness.',
        iconName: 'Sparkles',
        sensoryTip: 'Notice the warm glow in your heart.'
      }
    ],
    successMessage: 'Alhamdulillah! You mastered Pillar 4: Zakat (Giving)!'
  },
  flashcardContent: {
    title: 'Zakat Study Flashcards',
    cards: [
      {
        id: 'fc-zak1',
        frontTerm: 'Zakat',
        frontArabic: 'الزَّكَاة',
        frontTransliteration: 'Az-Zakat',
        frontSubtext: 'Purifying Mandatory Charity',
        backDefinition: 'The 4th Pillar of Islam: 2.5% mandatory annual charity given to help poor and needy families.',
        backInterestAnalogy: 'Like watering a garden so every plant gets moisture and blooms brightly.',
        backActionOrQuestion: 'What percentage of annual savings is given as Zakat? (2.5%)',
        iconName: 'HeartHandshake'
      },
      {
        id: 'fc-zak2',
        frontTerm: 'Barakah',
        frontArabic: 'البَرَكَة',
        frontTransliteration: 'Al-Barakah',
        frontSubtext: 'Divine Blessings & Increase',
        backDefinition: 'Allah\'s special blessing that makes a little bit of wealth or food go a long, happy way.',
        backInterestAnalogy: 'A multiplier that makes good deeds grow exponentially.',
        backActionOrQuestion: 'Does charity decrease our wealth? (No, it increases our barakah!)',
        iconName: 'Sparkles'
      }
    ]
  },
  parentTips: {
    summary: 'Focuses on financial empathy, understanding economic fairness, reducing greed, and finding joy in giving.',
    reviewStrategy: 'Involve the child when donating to a charity or food bank by letting them select items to donate.',
    repetitionTip: 'Use the phrase "When we share, everyone has enough" to reinforce fairness.',
    activitySuggestion: 'Set up a home "Giving Box" where the child deposits coins or unused toys for donation.',
    sensoryBreakTip: 'Use physical tokens or colorful counters to demonstrate how sharing works visually.',
    nextFormatRecommendation: 'Try Comic Mode or Checklist Mode for structured interactive practice.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice.'
};

/**
 * PILLAR 5: HAJJ
 * The Sacred Pilgrimage, Prophet Ibrahim (AS), Ka'bah & Gentle Sheep Celebration
 */
export const PILLAR_5_HAJJ_LESSON: LessonData = {
  id: 'pillar-5-hajj',
  topic: 'Pillar 5: Hajj (Pilgrimage & Prophet Ibrahim AS)',
  title: 'Pillar 5: Hajj — The Sacred Journey to Makkah & Global Unity',
  learningObjective: 'Master the 5th Pillar of Islam (Hajj), learn the story of Prophet Ibrahim (AS) and the Ka\'bah, discover the steps of pilgrimage in simple white clothes, and celebrate Eid with gentle sheep gifts.',
  introduction: 'Welcome to Pillar 5: Hajj! Hajj is the sacred journey to Makkah that every Muslim tries to make once in their lifetime if they are able. Millions of believers from all countries gather wearing simple white clothes (Ihram), standing shoulder to shoulder as equals under Allah.',
  topicKey: 'hajj_pilgrimage',
  ageRange: '7-9',
  learnerNickname: 'Sacred Pilgrim',
  selectedInterest: 'Princesses & Castles (or Superheroes, Space, Animals)',
  activeFormat: 'interactive_cards',
  learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
  isCalmMode: false,
  quranReferences: [
    {
      surahName: 'Al-Hajj',
      surahNumber: 22,
      ayahRange: '27',
      url: 'https://quran.com/22/27',
      arabicSnippet: 'وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ',
      englishSnippet: 'And proclaim to the people the Hajj [pilgrimage]; they will come to you on foot and on every lean camel; they will come from every distant pass.'
    },
    {
      surahName: 'Ali \'Imran',
      surahNumber: 3,
      ayahRange: '96-97',
      url: 'https://quran.com/3/96',
      arabicSnippet: 'إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِّلْعَالَمِينَ',
      englishSnippet: 'Indeed, the first House [of worship] established for mankind was that at Bakkah [Makkah] — blessed and a guidance for the worlds.'
    }
  ],
  scholarlySources: {
    tafsirIbnKathir: 'Ibn Kathir details how Prophet Ibrahim (AS) and Ismail (AS) laid the foundations of the Ka\'bah with pure Tawheed, inviting believers through all eras.',
    bayyinahInstitute: 'Nouman Ali Khan highlights the emotional resilience of Hajar (AS) running between Safa and Marwa, embodying absolute Tawakkul (reliance upon Allah).',
    yaqeenInstitute: 'Dr. Omar Suleiman explains that the unified Ihram garments dismantle sensory and social hierarchies, fostering radical equality and spiritual presence.'
  },
  pedagogicalResearch: [
    SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
    SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
    SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION
  ],
  lessonSteps: [
    {
      stepNumber: 1,
      title: 'What is Hajj (The Sacred Pilgrimage)?',
      instruction: 'Learn the 5th Pillar: Traveling to the holy city of Makkah during the month of Dhul-Hijjah once in a lifetime if able.',
      arabicTerm: 'الحَجّ (Al-Hajj)',
      arabicTransliteration: 'Al-Hajj (The Sacred Journey)',
      tip: 'Muslims from every country—speaking different languages and having different skin colors—gather together as one united family!',
      detail: 'Hajj commemorates the deep faith and trust of Prophet Ibrahim (AS), his wife Hajar (AS), and his son Prophet Ismail (AS).',
      iconName: 'Compass',
      repeatPhrase: 'Labbayk Allahumma Labbayk — Here I am at Your service, O Allah.',
      sensoryTip: 'Picture millions of peaceful people walking together under the warm blue sky.',
      actionPrompt: 'Whisper "Labbayk Allahumma Labbayk" with a reverent heart.'
    },
    {
      stepNumber: 2,
      title: 'Ihram: The Simple White Robes of Equality',
      instruction: 'Pilgrims put on simple, seamless white garments called Ihram. Everyone looks identical—kings and ordinary people stand equal!',
      arabicTerm: 'الإِحْرَام (Al-Ihram)',
      arabicTransliteration: 'Al-Ihram (Sacred White Garments)',
      tip: 'In Ihram, everyone is equal in front of Allah. No fancy clothes, jewelry, or wealth matters—only a pure heart!',
      detail: 'Ihram also means entering a state of peace where you cannot harm plants, animals, or argue with anyone.',
      iconName: 'Heart',
      repeatPhrase: 'In the sight of Allah, all human beings are equal.',
      sensoryTip: 'Feel the clean, breezy simplicity of soft white cloth.'
    },
    {
      stepNumber: 3,
      title: 'The Ka’bah & Tawaf (Walking 7 Times with Praise)',
      instruction: 'Visit the holy Ka\'bah built by Prophet Ibrahim (AS) and Ismail (AS). Walk around it 7 times counter-clockwise in Tawaf.',
      arabicTerm: 'الكَعْبَةُ المُشَرَّفَة • الطَّوَاف',
      arabicTransliteration: 'Al-Ka\'bah • At-Tawaaf (7 Circles of Praise)',
      tip: 'The Ka\'bah is the House of Allah built of black stone and draped in elegant black cloth (Kiswa). It is our Qiblah direction!',
      detail: 'While circling the Ka\'bah, pilgrims make dua, praise Allah, and remember that our whole life revolves around worshiping Him.',
      iconName: 'Sparkles',
      repeatPhrase: 'SubhanAllah, wal-Hamdulillah, wa laa ilaaha ill-Allah, wallahu Akbar.',
      sensoryTip: 'Trace a gentle circle with your finger in the air 7 times.',
      actionPrompt: 'Can you count 7 circles on your fingers?'
    },
    {
      stepNumber: 4,
      title: 'Sa’i: Walking Between Safa and Marwa Hills',
      instruction: 'Walk 7 times between the two hills of Safa and Marwa, remembering mother Hajar looking for water for baby Ismail (AS).',
      arabicTerm: 'السَّعْي بَيْنَ الصَّفَا وَالمَرْوَة',
      arabicTransliteration: 'As-Sa\'i bayna as-Safa wal-Marwah',
      tip: 'Because of Hajar\'s trust in Allah, the miracle spring of Zamzam water gushed forth from the desert sand!',
      detail: 'Zamzam is pure, sweet, and blessed water that millions of pilgrims drink to this day.',
      iconName: 'Droplets',
      repeatPhrase: 'Allah always provides for those who trust Him.',
      sensoryTip: 'Imagine drinking a cool, refreshing sip of sweet Zamzam water.'
    },
    {
      stepNumber: 5,
      title: 'The Day of Arafat (The Peak of Hajj & Forgiveness)',
      instruction: 'Stand on the plain of Mount Arafat from noon to sunset, raising your hands in sincere prayer and asking Allah for forgiveness.',
      arabicTerm: 'يَوْمُ عَرَفَة (Day of Arafat)',
      arabicTransliteration: 'Yawmu \'Arafah',
      tip: 'The Prophet ﷺ said: "Hajj is Arafat." On this day, Allah forgives mistakes and showers His vast Mercy on all pilgrims.',
      detail: 'It is the most important day of Hajj where every pilgrim whispers their deepest hopes, dreams, and duas to Allah.',
      iconName: 'Sun',
      repeatPhrase: 'O Allah, forgive our mistakes and guide us to goodness.',
      sensoryTip: 'Raise your open palms softly towards the sky in heartfelt prayer.'
    },
    {
      stepNumber: 6,
      title: 'Mina, Jamarat & Eid al-Adha with Gentle Sheep',
      instruction: 'Stay in tent city Mina, remember Prophet Ibrahim\'s rejection of evil, and celebrate Eid al-Adha with meat gifts to feed the poor!',
      arabicTerm: 'عِيدُ الأَضْحَى (Eid al-Adha & Gentle Sheep Gifts)',
      arabicTransliteration: '\'Eid ul-Adha',
      tip: 'We celebrate Prophet Ibrahim\'s obedience to Allah. Healthy, gentle sheep are sacrificed and the meat is shared with families in need.',
      detail: 'Eid al-Adha is a joyful festival of sharing delicious feasts, wearing nice clothes, and hugging friends and neighbors!',
      iconName: 'CheckCircle2',
      repeatPhrase: 'Eid Mubarak! Sharing food brings joy to everyone.',
      sensoryTip: 'Picture a fluffy, gentle, happy sheep in a green grassy meadow.',
      actionPrompt: 'Say "Eid Mubarak!" and wish peace to your loved ones.'
    }
  ],
  activity: {
    title: 'The Great Hajj Pilgrimage Map Journey',
    type: 'interactive-pilgrimage',
    instructions: 'Trace the 6 sacred stations of Hajj on your pilgrim map:',
    actionItems: [
      '1. Put on White Ihram (Equality of all people).',
      '2. Complete 7 Circles of Tawaf around the Ka\'bah.',
      '3. Walk 7 times in Sa\'i between Safa and Marwa and drink Zamzam water.',
      '4. Stand at Mount Arafat raising hands in dua.',
      '5. Celebrate Eid al-Adha with gentle sheep feasts for families in need!'
    ],
    interestConnection: 'Like a grand quest where millions of heroes travel across the globe to honor the Creator!',
    completionPrompt: 'Alhamdulillah! You completed the Hajj Journey and unlocked the Pilgrim Badge!'
  },
  reviewQuestion: {
    question: 'Who built the holy Ka’bah in Makkah that pilgrims visit during Hajj?',
    hint: 'Think about the great Prophet who was a close friend of Allah (Khalilullah) and his son Ismail.',
    options: [
      {
        id: 'haj-opt-1',
        text: 'Prophet Ibrahim (AS) and his son Prophet Ismail (AS)',
        isCorrect: true,
        explanation: 'MashaAllah, exactly! Prophet Ibrahim (AS) and Ismail (AS) raised the foundations of the holy Ka\'bah with pure devotion.'
      },
      {
        id: 'haj-opt-2',
        text: 'Astronauts from the moon',
        isCorrect: false,
        explanation: 'The Ka\'bah was built by Prophet Ibrahim (AS) and Ismail (AS) in ancient Makkah on Earth.'
      },
      {
        id: 'haj-opt-3',
        text: 'It was built just last year',
        isCorrect: false,
        explanation: 'The Ka\'bah has been the sacred center of monotheistic prayer for thousands of years!'
      }
    ],
    correctAnswerExplanation: 'Hajj is the 5th Pillar of Islam. It honors the legacy of Prophet Ibrahim (AS), unites Muslims worldwide in white Ihram garments, and concludes with the festive celebration of Eid al-Adha.'
  },
  storyContent: {
    title: 'The Great Gathering Under the Makkah Sky',
    theme: 'Unity, Tawaf, and the Ka’bah',
    intro: 'Travel alongside young Tariq as he joins millions of pilgrims from every corner of the world on the sacred journey of Hajj.',
    slides: [
      {
        id: 'haj-s1',
        chapterNumber: 1,
        title: 'The Sea of White Garments',
        text: 'Tariq stood at the airport looking around in awe. Everyone was wearing simple white cloth (Ihram). There were doctors, builders, teachers, and grandparents from Africa, Asia, Europe, and America—all chanting together: "Labbayk Allahumma Labbayk!"',
        interestConnection: 'A global gathering of friends all united under one banner.',
        islamicTeaching: 'Ihram symbolizes equality and purity before Allah.',
        iconName: 'Heart'
      },
      {
        id: 'haj-s2',
        chapterNumber: 2,
        title: 'The Sight of the Blessed Ka’bah',
        text: 'Walking into the Grand Mosque, Tariq saw the Ka\'bah draped in golden calligraphy. His heart beat with wonder. As he completed the 7 circles of Tawaf with his father, tears of joy filled his eyes.',
        interestConnection: 'Reaching the heart of the sacred sanctuary.',
        islamicTeaching: 'The Ka\'bah is the house of monotheism built by Ibrahim (AS).',
        iconName: 'Sparkles'
      },
      {
        id: 'haj-s3',
        chapterNumber: 3,
        title: 'The Miraculous Zamzam Water',
        text: 'After walking between Safa and Marwa hills, Tariq drank a cup of cool Zamzam water. It was sweet, crisp, and refreshing. "This spring has flowed for thousands of years since mother Hajar trusted Allah," his father smiled.',
        interestConnection: 'A miraculous desert oasis that never runs dry.',
        islamicTeaching: 'Zamzam is blessed water provided by Allah\'s mercy.',
        iconName: 'Droplets'
      },
      {
        id: 'haj-s4',
        chapterNumber: 4,
        title: 'Eid Celebration with Gentle Sheep',
        text: 'After standing in prayer on Mount Arafat, Tariq celebrated Eid al-Adha. He saw fluffy gentle sheep and helped distribute meat packages to families in need so everyone could feast and smile.',
        interestConnection: 'The grand celebratory feast of sharing and kindness.',
        islamicTeaching: 'Eid al-Adha celebrates Ibrahim\'s obedience and sharing with the poor.',
        iconName: 'CheckCircle2'
      }
    ],
    conclusion: 'Hajj teaches us that no matter what language we speak or where we come from, we are all one united family under Allah.',
    reflectionQuestion: 'Why do you think all pilgrims wear the same simple white clothes during Hajj?'
  },
  visualContent: {
    title: 'Pillar 5: Hajj Pilgrimage Visual Guide',
    subtitle: 'Visual cards showing the sacred sequence of Hajj.',
    completionBadge: '🌟 Hajj Pilgrim Badge Unlocked!',
    cards: [
      {
        stepNumber: 1,
        title: 'Ihram White Garments',
        simpleSentence: 'Put on simple white clothes. All people are equal in front of Allah.',
        arabicTerm: 'الإِحْرَام',
        iconName: 'Heart',
        visualHint: 'White robes of equality and peaceful manners.',
        badge: 'Ihram'
      },
      {
        stepNumber: 2,
        title: 'Tawaf 7 Times',
        simpleSentence: 'Walk 7 circles around the Ka’bah praising Allah.',
        arabicTerm: 'الطَّوَاف',
        iconName: 'Sparkles',
        visualHint: 'Ka\'bah circled 7 times in prayer.',
        badge: 'Tawaf'
      },
      {
        stepNumber: 3,
        title: 'Sa’i & Zamzam Water',
        simpleSentence: 'Walk between Safa and Marwa hills and drink sweet Zamzam.',
        arabicTerm: 'السَّعْي • زَمْزَم',
        iconName: 'Droplets',
        visualHint: 'Hills of Safa/Marwa and fresh Zamzam cup.',
        badge: 'Zamzam'
      },
      {
        stepNumber: 4,
        title: 'Day of Arafat Prayer',
        simpleSentence: 'Raise hands in dua on Mount Arafat asking for forgiveness.',
        arabicTerm: 'يَوْمُ عَرَفَة',
        iconName: 'Sun',
        visualHint: 'Open hands raised in dua at Mount Arafat.',
        badge: 'Arafat'
      },
      {
        stepNumber: 5,
        title: 'Eid al-Adha Feast',
        simpleSentence: 'Celebrate with family and share gentle sheep gifts with the poor.',
        arabicTerm: 'عِيدُ الأَضْحَى',
        iconName: 'CheckCircle2',
        visualHint: 'Cute fluffy sheep and happy Eid family feast.',
        badge: 'Eid Feast'
      }
    ]
  },
  stepContent: {
    title: 'Hajj Pilgrimage Step-by-Step Checklist',
    goal: 'Track the sacred stations of Hajj one peaceful step at a time.',
    steps: [
      {
        stepNumber: 1,
        title: '1. Put on White Ihram',
        instruction: 'Wear simple white garments. Remember equality of all people.',
        detail: 'Enter state of peace and good manners.',
        repeatPhrase: 'Labbayk Allahumma Labbayk.',
        iconName: 'Heart',
        sensoryTip: 'Clean, light, airy feeling.'
      },
      {
        stepNumber: 2,
        title: '2. Tawaf around the Ka’bah',
        instruction: 'Walk 7 times around the Ka\'bah making sincere duas.',
        detail: 'Built by Prophet Ibrahim (AS) and Ismail (AS).',
        repeatPhrase: 'SubhanAllah wal-Hamdulillah.',
        iconName: 'Sparkles',
        sensoryTip: 'Trace 7 smooth circles.'
      },
      {
        stepNumber: 3,
        title: '3. Sa’i and Zamzam Water',
        instruction: 'Walk between Safa and Marwa hills 7 times and drink Zamzam.',
        detail: 'Remembering mother Hajar\'s trust in Allah.',
        repeatPhrase: 'Allah always provides for us.',
        iconName: 'Droplets',
        sensoryTip: 'Cool, refreshing water sip.'
      },
      {
        stepNumber: 4,
        title: '4. Day of Arafat Duas',
        instruction: 'Stand on Mount Arafat raising hands in sincere prayer.',
        detail: 'Peak day of forgiveness and mercy.',
        repeatPhrase: 'O Allah, forgive our mistakes.',
        iconName: 'Sun',
        sensoryTip: 'Hands raised peacefully to sky.'
      },
      {
        stepNumber: 5,
        title: '5. Eid al-Adha & Gentle Sheep Feast',
        instruction: 'Celebrate Eid, share meat with families in need, and give hugs.',
        detail: 'Festival of generosity and joy.',
        repeatPhrase: 'Eid Mubarak! Sharing brings joy.',
        iconName: 'CheckCircle2',
        sensoryTip: 'Warm Eid hugs and happy smiles.'
      }
    ],
    successMessage: 'Alhamdulillah! You mastered Pillar 5: Hajj (Pilgrimage)!'
  },
  flashcardContent: {
    title: 'Hajj (Pilgrimage) Study Flashcards',
    cards: [
      {
        id: 'fc-haj1',
        frontTerm: 'Hajj',
        frontArabic: 'الحَجّ',
        frontTransliteration: 'Al-Hajj',
        frontSubtext: 'The Sacred Pilgrimage',
        backDefinition: 'The 5th Pillar of Islam: Traveling to Makkah to worship Allah, perform Tawaf, and stand at Arafat.',
        backInterestAnalogy: 'A global family reunion where millions stand united as equals.',
        backActionOrQuestion: 'How often is Hajj required? (Once in a lifetime for those who are able)',
        iconName: 'Compass'
      },
      {
        id: 'fc-haj2',
        frontTerm: 'The Ka’bah',
        frontArabic: 'الكَعْبَةُ المُشَرَّفَة',
        frontTransliteration: 'Al-Ka\'bah',
        frontSubtext: 'The House of Allah',
        backDefinition: 'The sacred cube-shaped building in Makkah built by Prophet Ibrahim (AS) and Ismail (AS) as the direction of prayer (Qiblah).',
        backInterestAnalogy: 'The central compass anchor for Muslims all around planet Earth.',
        backActionOrQuestion: 'How many times do pilgrims walk around the Ka’bah in Tawaf? (7 times)',
        iconName: 'Sparkles'
      },
      {
        id: 'fc-haj3',
        frontTerm: 'Ihram',
        frontArabic: 'الإِحْرَام',
        frontTransliteration: 'Al-Ihram',
        frontSubtext: 'Garments of Equality',
        backDefinition: 'Simple white unstitched cloths worn by pilgrims to show that all people are completely equal in the sight of Allah.',
        backInterestAnalogy: 'The universal uniform of peace and humility.',
        backActionOrQuestion: 'What does wearing Ihram teach us? (Equality, simplicity, and inner purity)',
        iconName: 'Heart'
      }
    ]
  },
  parentTips: {
    summary: 'Focuses on global unity, equality, the historical legacy of Prophet Ibrahim (AS) and mother Hajar, and the festive charity of Eid al-Adha.',
    reviewStrategy: 'Use visual maps or toy blocks to recreate the Ka\'bah, Safa/Marwa, and Arafat with the child.',
    repetitionTip: 'Practice chanting "Labbayk Allahumma Labbayk" together during Dhul-Hijjah days.',
    activitySuggestion: 'Draw or color a picture of the Ka\'bah and cute fluffy Eid sheep.',
    sensoryBreakTip: 'Offer a cool drink of water while discussing Zamzam to create an experiential sensory anchor.',
    nextFormatRecommendation: 'Try Story Mode or Flashcards for reflective learning.'
  },
  disclaimer: 'Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice.'
};

/**
 * All 5 Individual Pillar Lessons in Order:
 * 1. Sadaqah & Shahadah
 * 2. Salah & Suratul Fatiha (Line-by-Line Breakdown)
 * 3. Siyam (Ramadan Fasting)
 * 4. Zakat (Purifying Charity)
 * 5. Hajj (Sacred Pilgrimage)
 */
export const FIVE_PILLARS_INDIVIDUAL_LESSONS: LessonData[] = [
  PILLAR_1_SADAQAH_LESSON,
  PILLAR_2_SALAH_LESSON,
  PILLAR_3_SIYAM_LESSON,
  PILLAR_4_ZAKAT_LESSON,
  PILLAR_5_HAJJ_LESSON
];
