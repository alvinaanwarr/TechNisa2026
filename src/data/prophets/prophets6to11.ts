import { ProphetItem } from '../../types';
import { SHARED_PEDAGOGICAL_RESEARCH } from '../pedagogicalResearch';

export const PROPHETS_PATRIARCHS: ProphetItem[] = [
  // 6. IBRAHIM (AS)
  {
    id: 'prophet_ibrahim',
    number: 6,
    nameEnglish: 'Prophet Ibrahim',
    nameArabic: 'إبراهيم عليه السلام',
    epithet: 'Khalilullah (The Intimate Friend of Allah)',
    era: 'The Patriarchs',
    quranReferences: [
      {
        surahName: 'Al-An\'am',
        surahNumber: 6,
        ayahRange: '74-83',
        url: 'https://quran.com/6/74-83',
        arabicSnippet: 'فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ',
        englishSnippet: 'When the night covered him over, he saw a star. He said: This is my Lord. But when it set, he said: I like not those that disappear.'
      },
      {
        surahName: 'Ibrahim',
        surahNumber: 14,
        ayahRange: '35-41',
        url: 'https://quran.com/14/35-41',
        arabicSnippet: 'رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا',
        englishSnippet: 'My Lord, make this city [Makkah] secure.'
      },
      {
        surahName: 'Al-Baqarah',
        surahNumber: 2,
        ayahRange: '124-129',
        url: 'https://quran.com/2/124-129',
        arabicSnippet: 'وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا',
        englishSnippet: 'And when Ibrahim and Ismail were raising the foundations of the House, [saying]: Our Lord, accept [this] from us.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details how Ibrahim questioned the universe with curiosity and scientific observation (the star, moon, sun) to discover Allah. He built the Ka\'bah with his son Ismail, survived the cooling fire through Allah’s command, and was granted the title Khalilullah.',
    bayyinahInsight: 'Nouman Ali Khan highlights Ibrahim\'s emotional intelligence and deep questioning ("Qalb Saleem" - a sound, peaceful heart). Ibrahim loved logic, astronomy, and gentle questioning to uncover the truth.',
    yaqeenInsight: 'Dr. Omar Suleiman explores Ibrahim as the champion of moral courage and family warmth: his famous dua "Rabbana taqabbal minna" teaches us that true success is having our sincere daily efforts accepted by Allah.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING
    ],
    coreThemes: ['Curiosity & Observation', 'Scientific Thinking (Stars, Moon, Sun)', 'Pure Monotheism (Tawhid)', 'Building the Ka\'bah', 'A Sound, Peaceful Heart (Qalb Saleem)'],
    iconName: 'Compass',
    summary: 'The beloved friend of Allah who looked up at the stars, moon, and sun with curiosity to find the Creator, and together with his son Ismail built the sacred Ka\'bah in Makkah.',
    lesson: {
      id: 'lesson-prophet-ibrahim',
      topic: 'Prophet Ibrahim (AS): The Star Explorer & The Builder of the Ka\'bah',
      title: 'Prophet Ibrahim & The Wonder of the Universe',
      learningObjective: 'Explore how Prophet Ibrahim observed the stars, moon, and sun to know Allah, and built the Ka\'bah with pure love and teamwork.',
      introduction: 'Prophet Ibrahim (AS) loved looking at the night sky and asking questions! When he saw the twinkling stars and glowing moon set, he realized only Allah is the Eternal Creator of all galaxies.',
      topicKey: 'prophet_ibrahim',
      ageRange: '7-9',
      learnerNickname: 'Star Explorer',
      selectedInterest: 'Space, Astronomy & Architecture',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Observing the Night Sky',
          instruction: 'Prophet Ibrahim observed the bright stars and moon, asking: "Who created this beautiful universe?"',
          arabicTerm: 'كَوْكَب (Kawkab - Star)',
          arabicTransliteration: 'Kawkab (Star / Planet in Surah Al-An\'am 6:76)',
          tip: 'Asking "Why?" and "How?" is a sign of a curious and bright mind.',
          detail: 'Ibrahim realized that because stars rise and set, they are creations. Only Allah is always present.',
          iconName: 'Sparkles',
          repeatPhrase: 'Allah is the Creator of the stars, moon, and sun.',
          sensoryTip: 'Close your eyes and picture a calm, twinkling starry sky.',
          actionPrompt: 'Tap to shine a star of knowledge!'
        },
        {
          stepNumber: 2,
          title: 'Building the Sacred Ka\'bah',
          instruction: 'Together with his son Ismail, Ibrahim placed the smooth black and golden stones of the Ka\'bah in Makkah.',
          arabicTerm: 'رَبَّنَا تَقَبَّلْ مِنَّا',
          arabicTransliteration: 'Rabbana taqabbal minna (Our Lord, accept from us)',
          tip: 'Teamwork with your family makes big building projects joyful and successful.',
          detail: 'Surah Al-Baqarah (2:127) records their gentle prayer as they placed each stone.',
          iconName: 'Layers',
          repeatPhrase: 'Rabbana taqabbal minna — O Allah, accept our good deeds.',
          sensoryTip: 'Clap your hands together gently in a steady rhythm of teamwork.',
          actionPrompt: 'Whisper "Rabbana taqabbal minna".'
        },
        {
          stepNumber: 3,
          title: 'A Sound, Peaceful Heart (Qalb Saleem)',
          instruction: 'Prophet Ibrahim came to Allah with a heart full of peace, love, and truth.',
          arabicTerm: 'قَلْبٍ سَلِيمٍ (Qalb Saleem)',
          arabicTransliteration: 'Qalb Saleem (A Pure, Sound & Peaceful Heart)',
          tip: 'When you let go of anger and choose kindness, your heart feels light like a feather.',
          detail: 'Yaqeen Institute notes that Qalb Saleem is free of malice, arrogance, and anxiety.',
          iconName: 'Heart',
          repeatPhrase: 'My heart is peaceful, honest, and loving.',
          sensoryTip: 'Place your hand over your heart and take three soothing breaths.',
          actionPrompt: 'Smile and share peace with the world!'
        }
      ],
      activity: {
        title: 'Star Explorer & Ka\'bah Builder Challenge',
        type: 'Hands-On Action',
        instructions: 'Practice the wisdom of Prophet Ibrahim with these 3 steps.',
        actionItems: [
          'Look up at the sky or out the window and say "SubhanAllah" for the clouds and stars',
          'Recite the Ka\'bah building prayer: "Rabbana taqabbal minna"',
          'Help a family member complete a small shared project or chore'
        ],
        interestConnection: 'Like an architect designing a sacred monument that stands for thousands of years!',
        completionPrompt: 'Check off each item to earn your Ka\'bah Architect Star!'
      },
      reviewQuestion: {
        question: 'What did Prophet Ibrahim (AS) and his son Prophet Ismail (AS) say while building the Ka\'bah?',
        hint: 'Think about asking Allah to accept their hard work and good deed.',
        options: [
          {
            id: 'opt1',
            text: '"Rabbana taqabbal minna" (Our Lord, accept this good deed from us)',
            isCorrect: true,
            explanation: 'Correct! Surah Al-Baqarah (2:127) records this beautiful prayer of humility and devotion.'
          },
          {
            id: 'opt2',
            text: '"Look how great we are at building walls"',
            isCorrect: false,
            explanation: 'They were deeply humble and only wanted Allah’s pleasure.'
          },
          {
            id: 'opt3',
            text: '"We are done and we never want to build again"',
            isCorrect: false,
            explanation: 'They built with immense love, care, and continuous prayer.'
          }
        ],
        correctAnswerExplanation: 'Prophet Ibrahim taught us to always ask Allah with humility: "Rabbana taqabbal minna" (Our Lord, accept from us).'
      },
      storyContent: {
        title: 'The Sky Watcher of Makkah',
        theme: 'Curiosity, Astronomy, Architecture & Monotheism',
        intro: 'Prophet Ibrahim lived in a time when people forgot Allah, but his sharp mind and pure heart guided him to the truth.',
        slides: [
          {
            id: 'ibrahim_slide_1',
            chapterNumber: 1,
            title: 'The Night Sky Investigation',
            text: 'Ibrahim looked at the glowing Venus, the silver Moon, and the golden Sun. He thought: "The Creator of all this never sets or disappears!"',
            interestConnection: 'Using logical inquiry to appreciate the universe.',
            islamicTeaching: 'Allah invites us in the Quran to reflect on the heavens and earth.',
            iconName: 'Sparkles'
          },
          {
            id: 'ibrahim_slide_2',
            chapterNumber: 2,
            title: 'The House of Peace',
            text: 'Years later in Makkah, Ibrahim and Ismail lifted stone after stone, building the Ka\'bah as a sanctuary of peace for all humanity.',
            interestConnection: 'Collaborative engineering built on devotion and precision.',
            islamicTeaching: 'The Ka\'bah is the focal point (Qiblah) of universal unity in Islam.',
            iconName: 'Layers'
          }
        ],
        conclusion: 'Ibrahim became Khalilullah (the Friend of Allah) because his heart was always sincere, inquiring, and loving.',
        reflectionQuestion: 'What is something amazing in nature that makes you say SubhanAllah?'
      },
      visualContent: {
        title: 'Prophet Ibrahim Visual Steps',
        subtitle: 'Observing the cosmos and building the Ka\'bah',
        cards: [
          {
            stepNumber: 1,
            title: '1. Star Explorer',
            simpleSentence: 'Ibrahim observed stars to find the Creator.',
            arabicTerm: 'كَوْكَب',
            iconName: 'Sparkles',
            visualHint: 'Looking at bright stars in the night sky'
          },
          {
            stepNumber: 2,
            title: '2. Build Ka\'bah',
            simpleSentence: 'Ibrahim and Ismail built the sacred Ka\'bah.',
            arabicTerm: 'رَبَّنَا تَقَبَّلْ مِنَّا',
            iconName: 'Layers',
            visualHint: 'Lifting stones of the Ka\'bah with smiles'
          },
          {
            stepNumber: 3,
            title: '3. Pure Heart',
            simpleSentence: 'Ibrahim had a peaceful, sound heart for Allah.',
            arabicTerm: 'قَلْبٍ سَلِيمٍ',
            iconName: 'Heart',
            visualHint: 'Glowing heart radiating warmth'
          }
        ],
        completionBadge: 'Ka\'bah Builder Badge'
      },
      stepContent: {
        title: 'Prophet Ibrahim Action Plan',
        goal: 'Practice inquiry, humble prayer, and family teamwork.',
        steps: [
          {
            stepNumber: 1,
            title: 'Explore with Wonder',
            instruction: 'Look at the sky or a plant and appreciate how Allah made it.',
            detail: 'Reflection increases faith and curiosity.',
            iconName: 'Sparkles',
            repeatPhrase: 'SubhanAllah, the Creator of the universe.'
          },
          {
            stepNumber: 2,
            title: 'Make the Dua',
            instruction: 'Say "Rabbana taqabbal minna" when finishing a good deed.',
            detail: 'This invites Barakah into your work.',
            iconName: 'Heart',
            repeatPhrase: 'Rabbana taqabbal minna.'
          }
        ],
        successMessage: 'MashaAllah! You learned the noble lessons of Prophet Ibrahim!'
      },
      flashcardContent: {
        title: 'Prophet Ibrahim Flashcards',
        cards: [
          {
            id: 'fc_ibrahim_1',
            frontTerm: 'What is Prophet Ibrahim\'s special title?',
            frontArabic: 'خَلِيلُ اللَّهِ (Khalilullah)',
            backDefinition: 'The Intimate, Beloved Friend of Allah.',
            backInterestAnalogy: 'The highest honorary title in the universe!',
            iconName: 'Heart'
          },
          {
            id: 'fc_ibrahim_2',
            frontTerm: 'What sacred building did Ibrahim build in Makkah?',
            frontArabic: 'الكَعْبَة (Al-Ka\'bah)',
            backDefinition: 'The sacred House of Allah, built with his son Ismail.',
            backInterestAnalogy: 'The central navigation coordinate for all Muslim prayers worldwide!',
            iconName: 'Compass'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Ibrahim’s story models inquiry-based learning, scientific curiosity, and using logical observation to build deep convictions without cognitive rigidity.',
        reviewStrategy: 'Encourage your child’s "why" questions about nature and faith as valuable Ibrahim-like curiosity.',
        repetitionTip: 'Make "Rabbana taqabbal minna" a regular post-activity ritual after chores or art projects.',
        activitySuggestion: 'Do some stargazing together or look up space photos, discussing the immense scale of Allah’s universe.',
        sensoryBreakTip: 'Soft dim lighting or a star projector provides relaxing visual sensory input.',
        nextFormatRecommendation: 'Try Story Mode for an immersive narrative journey.'
      },
      disclaimer: 'Grounded in Quran (2:124-129, 6:74-83, 14:35-41), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 7. LUT (AS)
  {
    id: 'prophet_lut',
    number: 7,
    nameEnglish: 'Prophet Lut',
    nameArabic: 'لوط عليه السلام',
    epithet: 'Ar-Rajul as-Salih (The Courageous Advocate for Justice)',
    era: 'The Patriarchs',
    quranReferences: [
      {
        surahName: 'Al-Anbiya',
        surahNumber: 21,
        ayahRange: '74-75',
        url: 'https://quran.com/21/74-75',
        arabicSnippet: 'وَلُوطًا آتَيْنَاهُ حُكْمًا وَعِلْمًا وَنَجَّيْنَاهُ مِنَ الْقَرْيَةِ',
        englishSnippet: 'And to Lut We gave judgment and knowledge, and We saved him from the city.'
      },
      {
        surahName: 'Ash-Shu\'ara',
        surahNumber: 26,
        ayahRange: '160-166',
        url: 'https://quran.com/26/160-166',
        arabicSnippet: 'إِنِّي لَكُمْ رَسُولٌ أَمِينٌ',
        englishSnippet: 'Indeed, I am to you a trustworthy messenger.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir notes that Lut was a nephew/companion of Ibrahim who stood steadfastly for righteousness, moral integrity, hospitality to guests, and protecting vulnerable travelers.',
    bayyinahInsight: 'Nouman Ali Khan highlights the immense moral bravery of Lut: standing as a solitary beacon of ethics and decency when surrounded by corrupt social norms.',
    yaqeenInsight: 'Dr. Omar Suleiman focuses on moral grounding: how to maintain personal purity, compassion, and unwavering ethical standards when facing overwhelming social pressure.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION
    ],
    coreThemes: ['Moral Bravery', 'Hospitality & Protecting Guests', 'Standing for Integrity', 'Resisting Negative Peer Pressure', 'Knowledge & Judgment (Hikmah)'],
    iconName: 'ShieldCheck',
    summary: 'A brave prophet gifted with wisdom and sound judgment who stood up for moral integrity, protected guests with hospitality, and stayed steadfast against peer pressure.',
    lesson: {
      id: 'lesson-prophet-lut',
      topic: 'Prophet Lut (AS): Moral Courage & Hospitality',
      title: 'Prophet Lut & The Power of Standing for Good',
      learningObjective: 'Understand how Prophet Lut practiced moral courage, stood up for honesty and fairness, and protected guests with warm hospitality.',
      introduction: 'Prophet Lut (AS) was gifted with wisdom, knowledge, and courage! Even when others were behaving unfairly, Lut remained a shining example of honesty, decency, and kindness to visitors.',
      topicKey: 'prophet_lut',
      ageRange: '7-9',
      learnerNickname: 'Brave Defender',
      selectedInterest: 'Shields, Castles & Heroes',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Stand Firm for What is Right',
          instruction: 'Prophet Lut taught that we must always choose honesty, fairness, and goodness even if we are the only one.',
          arabicTerm: 'حُكْمًا وَعِلْمًا',
          arabicTransliteration: 'Hukman wa \'Ilma (Sound Judgment & Knowledge - Surah 21:74)',
          tip: 'Having moral courage means doing the right thing even when no one is looking.',
          detail: 'Surah Al-Anbiya celebrates Lut\'s deep wisdom and clarity of heart.',
          iconName: 'ShieldCheck',
          repeatPhrase: 'I am brave, honest, and stand for what is right.',
          sensoryTip: 'Stand tall with your feet firmly planted on the ground.',
          actionPrompt: 'Tap to activate your shield of integrity!'
        },
        {
          stepNumber: 2,
          title: 'Warm Hospitality to Guests',
          instruction: 'Prophet Lut rushed to protect travelers and welcomed guests into his home with food, safety, and respect.',
          arabicTerm: 'إِكْرَامُ الضَّيْفِ',
          arabicTransliteration: 'Ikramud-Dayf (Honoring and welcoming guests)',
          tip: 'When guests or friends visit your home, offering a drink or sharing toys brings immense blessings.',
          detail: 'Ibn Kathir highlights how Lut prioritized the safety and comfort of visitors above all else.',
          iconName: 'Heart',
          repeatPhrase: 'Welcoming guests with kindness brings light to our home.',
          sensoryTip: 'Smile warmly and imagine saying "Welcome to our home!"',
          actionPrompt: 'Say "Ahlan wa Sahlan" (Welcome) with a smile.'
        }
      ],
      activity: {
        title: 'Hospitality & Courage Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the noble qualities of Prophet Lut today.',
        actionItems: [
          'Offer a glass of water or snack to a family member or guest with a smile',
          'Practice saying "No thank you" calmly when someone asks you to do something unsafe',
          'Say "Alhamdulillah" for safety and a loving home'
        ],
        interestConnection: 'Like a castle knight who guards the gates and welcomes travelers with warmth!',
        completionPrompt: 'Check off both items to earn your Knight of Honor Star!'
      },
      reviewQuestion: {
        question: 'What special quality did Allah give Prophet Lut (AS) in Surah Al-Anbiya?',
        hint: 'Think about wisdom, deep knowledge, and standing for justice.',
        options: [
          {
            id: 'opt1',
            text: 'Sound judgment, knowledge, and moral courage to protect guests and do what is right',
            isCorrect: true,
            explanation: 'Correct! Surah 21:74 states: "And to Lut We gave judgment and knowledge."'
          },
          {
            id: 'opt2',
            text: 'The ability to make stone castles fly',
            isCorrect: false,
            explanation: 'Lut was blessed with spiritual wisdom, integrity, and knowledge from Allah.'
          }
        ],
        correctAnswerExplanation: 'Prophet Lut was a brave defender of truth, sound judgment, and hospitable care for travelers.'
      },
      storyContent: {
        title: 'The Guardian of Justice',
        theme: 'Moral Courage, Wisdom & Hospitality',
        intro: 'Prophet Lut lived in challenging times, but his faith in Allah gave him an unbreakable shield of integrity.',
        slides: [
          {
            id: 'lut_slide_1',
            chapterNumber: 1,
            title: 'The Shining Shield',
            text: 'While others made poor choices, Lut remained truthful and fair, guiding people towards pure manners.',
            interestConnection: 'Standing firm like a brave defender of goodness.',
            islamicTeaching: 'Integrity means living by your values regardless of peer pressure.',
            iconName: 'ShieldCheck'
          }
        ],
        conclusion: 'Lut showed us that truth and dignity always triumph through Allah’s protection.',
        reflectionQuestion: 'How can you show kindness to a visitor or classmate today?'
      },
      visualContent: {
        title: 'Prophet Lut Visual Cards',
        subtitle: 'Integrity, courage, and hospitality',
        cards: [
          {
            stepNumber: 1,
            title: '1. Moral Courage',
            simpleSentence: 'Lut stood firm for honesty and good manners.',
            arabicTerm: 'حُكْمًا وَعِلْمًا',
            iconName: 'ShieldCheck',
            visualHint: 'Shining shield of integrity'
          },
          {
            stepNumber: 2,
            title: '2. Welcome Guests',
            simpleSentence: 'Lut protected and welcomed visitors with love.',
            arabicTerm: 'إِكْرَامُ الضَّيْفِ',
            iconName: 'Heart',
            visualHint: 'Warm open door welcoming travelers'
          }
        ],
        completionBadge: 'Courageous Leader Badge'
      },
      stepContent: {
        title: 'Prophet Lut Courage Steps',
        goal: 'Practice integrity and hospitality.',
        steps: [
          {
            stepNumber: 1,
            title: 'Be Welcoming',
            instruction: 'Say Salam and offer comfort to someone entering the room.',
            detail: 'Hospitality is a beloved sunnah.',
            iconName: 'Heart',
            repeatPhrase: 'Welcome with peace!'
          }
        ],
        successMessage: 'MashaAllah! You walked with courage like Prophet Lut!'
      },
      flashcardContent: {
        title: 'Prophet Lut Key Learnings',
        cards: [
          {
            id: 'fc_lut_1',
            frontTerm: 'What is moral courage in Islam?',
            frontArabic: 'شَجَاعَة (Courage)',
            backDefinition: 'Doing what is right, fair, and pleasing to Allah even when others do not.',
            backInterestAnalogy: 'Like holding your shield high and staying true to your code!',
            iconName: 'ShieldCheck'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Lut’s lesson helps children build autonomy, resist negative peer influence, and develop self-advocacy skills.',
        reviewStrategy: 'Discuss scenarios where peers might pressure them, and role-play calm, firm responses.',
        repetitionTip: 'Reinforce: "We are proud of choosing kindness and truth, no matter what others do."',
        activitySuggestion: 'Practice greeting family members at the front door with water and a warm greeting.',
        sensoryBreakTip: 'Deep pressure proprioceptive grounding (e.g. wall push-ups) to build physical confidence.',
        nextFormatRecommendation: 'Try Checklist Mode for clear actionable tasks.'
      },
      disclaimer: 'Grounded in Quran (21:74-75, 26:160-166), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 8. ISMAIL (AS)
  {
    id: 'prophet_ismail',
    number: 8,
    nameEnglish: 'Prophet Ismail',
    nameArabic: 'إسماعيل عليه السلام',
    epithet: 'Sadiq al-Wa\'d (The True to His Promise & Ka\'bah Builder)',
    era: 'The Patriarchs',
    quranReferences: [
      {
        surahName: 'Maryam',
        surahNumber: 19,
        ayahRange: '54-55',
        url: 'https://quran.com/19/54-55',
        arabicSnippet: 'وَاذْكُرْ فِي الْكِتَابِ إِسْمَاعِيلَ ۚ إِنَّهُ كَانَ صَادِقَ الْوَعْدِ وَكَانَ رَسُولًا نَّبِيًّا • وَكَانَ يَأْمُرُ أَهْلَهُ بِالصَّلَاةِ وَالزَّكَاةِ',
        englishSnippet: 'And mention in the Book, Ismail. Indeed, he was true to his promise, and he was a messenger and a prophet. And he used to enjoin on his people prayer and zakat.'
      },
      {
        surahName: 'As-Saffat',
        surahNumber: 37,
        ayahRange: '101-111',
        url: 'https://quran.com/37/101-111',
        arabicSnippet: 'قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ',
        englishSnippet: 'He said: O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details Ismail’s youth: the bubbling of the Zamzam well beneath his heels, his partnership with his father Ibrahim in building the Ka\'bah, his prompt fulfillment of every promise, and his legendary patience and trust in Allah.',
    bayyinahInsight: 'Nouman Ali Khan highlights the linguistic title "Sadiq al-Wa\'d" — keeping promises is the foundation of character reliability and mutual trust in relationships.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights the bond of father-son trust: Ismail communicated with his father with deep respect, calm optimism, and complete surrender to Allah.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Keeping Promises (Sadiq al-Wa\'d)', 'Loving Respect for Parents', 'Building the Ka\'bah', 'The Miracle of Zamzam Water', 'Patience & Trust in Allah'],
    iconName: 'Droplets',
    summary: 'The devoted son praised by Allah as "true to his promise," who helped his father build the Ka\'bah, drank from the miraculous Zamzam spring, and inspired the celebration of Eid.',
    lesson: {
      id: 'lesson-prophet-ismail',
      topic: 'Prophet Ismail (AS): True to Promises & The Gift of Zamzam',
      title: 'Prophet Ismail & The Miracle of Keeping Promises',
      learningObjective: 'Discover how Prophet Ismail kept every promise he made, helped his father build the Ka\'bah, and learned about the sweet, blessed Zamzam water.',
      introduction: 'Prophet Ismail (AS) was famous for his honesty and reliability! Whenever he made a promise, he kept it 100%. When he was a little boy, the pure Zamzam well bubbled up in the desert, and later he helped build the Ka\'bah.',
      topicKey: 'prophet_ismail',
      ageRange: '7-9',
      learnerNickname: 'Promise Keeper',
      selectedInterest: 'Water, Springs & Building',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Always Keep Your Promises (Sadiq al-Wa\'d)',
          instruction: 'Prophet Ismail always did what he promised to do on time and with a cheerful heart.',
          arabicTerm: 'صَادِقُ الْوَعْدِ',
          arabicTransliteration: 'Sadiq al-Wa\'d (True to His Word / Promise - Surah 19:54)',
          tip: 'When you say "I will clean my room" or "I will share", keeping your word makes you trustworthy.',
          detail: 'Surah Maryam honors Ismail for prioritizing prayer, sharing, and honesty.',
          iconName: 'ShieldCheck',
          repeatPhrase: 'I keep my promises and people can count on me.',
          sensoryTip: 'Hold your hand out and make a firm, gentle "promise fist" over your heart.',
          actionPrompt: 'Tap to make a sincere promise of kindness!'
        },
        {
          stepNumber: 2,
          title: 'The Sweet Bubbling Zamzam Spring',
          instruction: 'In the desert of Makkah, fresh, cool Zamzam water bubbled up to quench Ismail and his mother Hajar.',
          arabicTerm: 'مَاءُ زَمْزَمَ (Ma\'u Zamzam)',
          arabicTransliteration: 'Ma\'u Zamzam (The Blessed Zamzam Water)',
          tip: 'Zamzam water is full of healing, blessings, and cool refreshment.',
          detail: 'Millions of pilgrims drink Zamzam in Makkah today, remembering Ismail\'s childhood.',
          iconName: 'Droplets',
          repeatPhrase: 'Bismillah when I drink, and Alhamdulillah when I finish.',
          sensoryTip: 'Take a sip of water and notice its cool, refreshing sensation.',
          actionPrompt: 'Whisper "Bismillah" and take a sip of water.'
        },
        {
          stepNumber: 3,
          title: 'Teamwork on the Ka\'bah',
          instruction: 'Ismail carried stones and handed them to his father Ibrahim as they built the walls of the Ka\'bah.',
          arabicTerm: 'سَتَجِدُنِي مِنَ الصَّابِرِينَ',
          arabicTransliteration: 'You will find me of the patient (Surah 37:102)',
          tip: 'Working together with parents or siblings creates amazing memories and great achievements.',
          detail: 'Ibn Kathir describes the harmony and love between Ibrahim and Ismail as they worked.',
          iconName: 'Layers',
          repeatPhrase: 'Teamwork and patience make everything better.',
          sensoryTip: 'High-five a family member or pat yourself on the shoulder for good teamwork.',
          actionPrompt: 'Say "Alhamdulillah" for loving family!'
        }
      ],
      activity: {
        title: 'Promise Keeper & Water Blessing Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the noble strengths of Prophet Ismail today.',
        actionItems: [
          'Make one small promise today (e.g. putting your shoes away) and complete it right away',
          'Drink a cup of water sitting down, saying Bismillah before and Alhamdulillah after',
          'Help your parent or teacher with a small task, just like Ismail helped Ibrahim'
        ],
        interestConnection: 'Like a dependable crew member on an important mission whose word is gold!',
        completionPrompt: 'Check off each item to earn your Promise Keeper Star!'
      },
      reviewQuestion: {
        question: 'Why is Prophet Ismail (AS) praised as "Sadiq al-Wa\'d" in the Quran?',
        hint: 'Think about what he did whenever he gave his word or made a promise.',
        options: [
          {
            id: 'opt1',
            text: 'Because he was always 100% faithful and true to every promise he made',
            isCorrect: true,
            explanation: 'Correct! Surah Maryam (19:54) honors him as "Sadiq al-Wa\'d" (True to his promise).'
          },
          {
            id: 'opt2',
            text: 'Because he broke his promises whenever he was busy',
            isCorrect: false,
            explanation: 'Prophet Ismail never broke a promise; he was deeply reliable.'
          }
        ],
        correctAnswerExplanation: 'Prophet Ismail is a model of truthfulness, keeping promises, loving devotion to parents, and teamwork.'
      },
      storyContent: {
        title: 'The Spring in the Desert',
        theme: 'Trust, Reliability, Promises & Zamzam',
        intro: 'In the golden valley of Makkah, a young boy named Ismail showed the world the beauty of keeping promises and trusting Allah.',
        slides: [
          {
            id: 'ismail_slide_1',
            chapterNumber: 1,
            title: 'The Miraculous Well',
            text: 'Beneath baby Ismail’s heels, a crystal-clear spring of water burst through the sand: Zamzam! It brought life and birds to the valley.',
            interestConnection: 'The miraculous power of water and nature.',
            islamicTeaching: 'Allah provides relief and nourishment in unexpected ways.',
            iconName: 'Droplets'
          },
          {
            id: 'ismail_slide_2',
            chapterNumber: 2,
            title: 'Raising the Foundations',
            text: 'As a young man, Ismail lifted heavy stones, smiling at his father as they constructed the Ka\'bah together in harmony.',
            interestConnection: 'Father-son teamwork and architectural harmony.',
            islamicTeaching: 'Serving Allah with your family strengthens bonds of love.',
            iconName: 'Layers'
          }
        ],
        conclusion: 'Ismail taught us that keeping our word makes us strong, trustworthy, and beloved to Allah.',
        reflectionQuestion: 'What is a promise you can make and keep today?'
      },
      visualContent: {
        title: 'Prophet Ismail Visual PECS',
        subtitle: 'Promises, Zamzam water, and Ka\'bah teamwork',
        cards: [
          {
            stepNumber: 1,
            title: '1. Keep Promises',
            simpleSentence: 'Ismail was always true to his word.',
            arabicTerm: 'صَادِقُ الْوَعْدِ',
            iconName: 'ShieldCheck',
            visualHint: 'Hand over heart keeping a promise'
          },
          {
            stepNumber: 2,
            title: '2. Zamzam Water',
            simpleSentence: 'Pure Zamzam water bubbled up in Makkah.',
            arabicTerm: 'مَاءُ زَمْزَمَ',
            iconName: 'Droplets',
            visualHint: 'Cool water bubbling from clean desert well'
          },
          {
            stepNumber: 3,
            title: '3. Ka\'bah Teamwork',
            simpleSentence: 'Ismail helped build the Ka\'bah with his father.',
            arabicTerm: 'الكَعْبَة',
            iconName: 'Layers',
            visualHint: 'Father and son placing Ka\'bah stones'
          }
        ],
        completionBadge: 'Promise Keeper Badge'
      },
      stepContent: {
        title: 'Prophet Ismail Action Checklist',
        goal: 'Practice reliability and gratitude for water.',
        steps: [
          {
            stepNumber: 1,
            title: 'Keep Your Word',
            instruction: 'If you say you will do something, do it with a smile.',
            detail: 'Being reliable builds trust.',
            iconName: 'ShieldCheck',
            repeatPhrase: 'I am true to my word.'
          },
          {
            stepNumber: 2,
            title: 'Drink with Manners',
            instruction: 'Say Bismillah and drink water calmly.',
            detail: 'Manners bring blessing into our body.',
            iconName: 'Droplets',
            repeatPhrase: 'Bismillah, Alhamdulillah.'
          }
        ],
        successMessage: 'MashaAllah! You lived the values of Prophet Ismail!'
      },
      flashcardContent: {
        title: 'Prophet Ismail Flashcards',
        cards: [
          {
            id: 'fc_ismail_1',
            frontTerm: 'What is Zamzam water?',
            frontArabic: 'زَمْزَم',
            backDefinition: 'The blessed, miraculous spring of fresh water in Makkah gifted to baby Ismail and Hajar.',
            backInterestAnalogy: 'The most famous eternal fresh spring in history!',
            iconName: 'Droplets'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Ismail’s narrative builds executive function accountability, follow-through on commitments, and strong parent-child collaboration.',
        reviewStrategy: 'Celebrate whenever your child follows through on a commitment: "You kept your word just like Prophet Ismail!"',
        repetitionTip: 'Use "Promise Checkpoints" where small tasks have explicit, celebrated milestones.',
        activitySuggestion: 'Enjoy a glass of water together while sharing a fun story about family teamwork.',
        sensoryBreakTip: 'Water play or sipping water through a straw offers excellent oral-motor and vagal calming regulation.',
        nextFormatRecommendation: 'Try Visual Cards for clear visual icon routines.'
      },
      disclaimer: 'Grounded in Quran (19:54-55, 37:101-111), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 9. ISHAQ (AS)
  {
    id: 'prophet_ishaq',
    number: 9,
    nameEnglish: 'Prophet Ishaq',
    nameArabic: 'إسحاق عليه السلام',
    epithet: 'Al-Ghulām al-\'Aleem (The Righteous Scholar & Prophet)',
    era: 'The Patriarchs',
    quranReferences: [
      {
        surahName: 'As-Saffat',
        surahNumber: 37,
        ayahRange: '112-113',
        url: 'https://quran.com/37/112-113',
        arabicSnippet: 'وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ • وَبَارَكْنَا عَلَيْهِ وَعَلَىٰ إِسْحَاقَ',
        englishSnippet: 'And We gave him good tidings of Isaac, a prophet from among the righteous. And We blessed him and Isaac.'
      },
      {
        surahName: 'Maryam',
        surahNumber: 19,
        ayahRange: '49-50',
        url: 'https://quran.com/19/49-50',
        arabicSnippet: 'وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ ۖ وَكُلًّا جَعَلْنَا نَبِيًّا',
        englishSnippet: 'And We bestowed upon him Isaac and Jacob, and each We made a prophet.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir describes Ishaq (Isaac) as a blessed prophet endowed with deep wisdom, serenity, and devotion. From his lineage came generations of prophets including Ya\'qub and Yusuf.',
    bayyinahInsight: 'Nouman Ali Khan highlights the peace and Barakah in Ishaq\'s household: a legacy of gentle manners, steady scholarship, and generational goodness.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights Ishaq as an embodiment of quiet excellence: not every hero makes loud waves; quiet, steady worship and teaching are immensely beloved to Allah.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Quiet Excellence & Serenity', 'Blessed Generational Goodness', 'Wisdom & Righteousness', 'Gentle Manners', 'Devoted Worship'],
    iconName: 'Sun',
    summary: 'The gentle and righteous prophet gifted to Ibrahim and Sarah in their elder years, renowned for his serene wisdom, deep knowledge, and blessed family lineage.',
    lesson: {
      id: 'lesson-prophet-ishaq',
      topic: 'Prophet Ishaq (AS): Serenity & Quiet Excellence',
      title: 'Prophet Ishaq & The Power of Gentle Wisdom',
      learningObjective: 'Learn how Prophet Ishaq practiced quiet kindness, gentle manners, and steady worship, showing that peace in our daily routine is a magnificent strength.',
      introduction: 'Prophet Ishaq (AS) was a blessing of joy and peace to his parents! He loved learning, praying peacefully, and speaking with gentle words. He shows us that quiet, calm kindness is one of the most powerful qualities in the world.',
      topicKey: 'prophet_ishaq',
      ageRange: '7-9',
      learnerNickname: 'Peaceful Scholar',
      selectedInterest: 'Quiet Spaces, Books & Nature',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'low_stimulation', 'one_step'],
      isCalmMode: true,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'The Gift of Serenity (Sakinah)',
          instruction: 'Prophet Ishaq brought calm and comfort to everyone around him with his soothing presence.',
          arabicTerm: 'السَّكِينَة (As-Sakinah)',
          arabicTransliteration: 'As-Sakinah (Divine Inner Calm & Serenity)',
          tip: 'When the room is noisy, you can create a quiet, calm bubble inside your mind.',
          detail: 'Surah As-Saffat describes Ishaq as a prophet from among the righteous and blessed.',
          iconName: 'Feather',
          repeatPhrase: 'My heart is calm, peaceful, and still.',
          sensoryTip: 'Take a soft, quiet breath and let your eyes rest peacefully.',
          actionPrompt: 'Tap to welcome peaceful calm!'
        },
        {
          stepNumber: 2,
          title: 'Quiet Daily Excellence',
          instruction: 'Prophet Ishaq did his daily prayers and good deeds steadily, without needing to show off.',
          arabicTerm: 'الصَّالِحِينَ',
          arabicTransliteration: 'As-Saliheen (The Righteous & Sincere)',
          tip: 'Doing good quietly—like smiling or picking up a toy—is deeply loved by Allah.',
          detail: 'Yaqeen Institute notes that quiet, consistent routines create lasting emotional stability.',
          iconName: 'Sun',
          repeatPhrase: 'Small good deeds done with love shine brightly.',
          sensoryTip: 'Feel the warmth in your hands and relax your jaw.',
          actionPrompt: 'Whisper "Alhamdulillah" in a soft, peaceful voice.'
        }
      ],
      activity: {
        title: 'Peaceful Calm & Reflection Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the quiet serenity of Prophet Ishaq.',
        actionItems: [
          'Find a quiet, cozy corner and take 5 slow, peaceful breaths',
          'Read or look at a picture in a book quietly for 3 minutes',
          'Whisper a kind "Salam" to someone in your house'
        ],
        interestConnection: 'Like a peaceful garden where flowers grow steadily and beautifully in the soft sunlight!',
        completionPrompt: 'Check off both items to earn your Serenity Shield!'
      },
      reviewQuestion: {
        question: 'What is one of the most inspiring qualities of Prophet Ishaq (AS)?',
        hint: 'Think about quiet kindness, peace, and steady goodness.',
        options: [
          {
            id: 'opt1',
            text: 'Serene wisdom, gentle manners, and steady righteous deeds for Allah',
            isCorrect: true,
            explanation: 'Correct! Surah As-Saffat (37:112) praises Ishaq as a prophet from among the righteous.'
          },
          {
            id: 'opt2',
            text: 'Being as loud as possible in every room',
            isCorrect: false,
            explanation: 'Prophet Ishaq was gentle, peaceful, and calm.'
          }
        ],
        correctAnswerExplanation: 'Prophet Ishaq embodies quiet excellence, peaceful worship, and gentle manners.'
      },
      storyContent: {
        title: 'The Serene Valley',
        theme: 'Calmness, Wisdom & Righteousness',
        intro: 'Prophet Ishaq lived a life of peaceful prayer, gentle teaching, and family love.',
        slides: [
          {
            id: 'ishaq_slide_1',
            chapterNumber: 1,
            title: 'The Calm Light',
            text: 'Ishaq walked through the green hills with quiet dignity. His heart was always connected to Allah in peace.',
            interestConnection: 'Honoring quiet, low-stimulation environments.',
            islamicTeaching: 'Allah loves continuous, gentle deeds.',
            iconName: 'Sun'
          }
        ],
        conclusion: 'Ishaq taught us that peace and quiet goodness can change the world.',
        reflectionQuestion: 'What helps you feel most calm and peaceful?'
      },
      visualContent: {
        title: 'Prophet Ishaq Visual Cards',
        subtitle: 'Peace, gentle manners, and quiet worship',
        cards: [
          {
            stepNumber: 1,
            title: '1. Inner Peace',
            simpleSentence: 'Ishaq lived with calm serenity and peace.',
            arabicTerm: 'السَّكِينَة',
            iconName: 'Feather',
            visualHint: 'Peaceful feather floating softly in air'
          },
          {
            stepNumber: 2,
            title: '2. Gentle Deeds',
            simpleSentence: 'Ishaq did good deeds with a quiet, loving heart.',
            arabicTerm: 'الصَّالِحِينَ',
            iconName: 'Sun',
            visualHint: 'Warm gentle morning sun'
          }
        ],
        completionBadge: 'Serenity Scholar Badge'
      },
      stepContent: {
        title: 'Prophet Ishaq Serenity Steps',
        goal: 'Practice calm breathing and quiet kindness.',
        steps: [
          {
            stepNumber: 1,
            title: 'Breathe Peacefully',
            instruction: 'Inhale calm, exhale any worry.',
            detail: 'Breathing resets your mind.',
            iconName: 'Feather',
            repeatPhrase: 'Allah brings peace to my heart.'
          }
        ],
        successMessage: 'MashaAllah! You found peaceful focus like Prophet Ishaq!'
      },
      flashcardContent: {
        title: 'Prophet Ishaq Flashcards',
        cards: [
          {
            id: 'fc_ishaq_1',
            frontTerm: 'What does "As-Sakinah" mean?',
            frontArabic: 'السَّكِينَة',
            backDefinition: 'Deep spiritual tranquility, calm, and peaceful reassurance from Allah.',
            backInterestAnalogy: 'Like resting in a calm, safe sanctuary after a long day!',
            iconName: 'Feather'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Ishaq’s narrative is specifically tailored for sensory-sensitive, introverted, or low-stimulation preferring learners who thrive in quiet predictability.',
        reviewStrategy: 'Validate quiet processing time: "Just like Prophet Ishaq, your quiet, thoughtful way of learning is beautiful."',
        repetitionTip: 'Use a quiet whispered voice to create an intimate, soothing co-regulation space.',
        activitySuggestion: 'Create a "Peaceful Corner" with soft cushions, low lighting, and books.',
        sensoryBreakTip: 'Noise-cancelling headphones and dimmed lights allow the nervous system to decompress.',
        nextFormatRecommendation: 'Try Flashcard Mode for low-stimulus learning.'
      },
      disclaimer: 'Grounded in Quran (19:49-50, 37:112-113), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 10. YA'QUB (AS)
  {
    id: 'prophet_yaqub',
    number: 10,
    nameEnglish: 'Prophet Ya\'qub',
    nameArabic: 'يعقوب عليه السلام (إسرائيل)',
    epithet: 'Sahib as-Sabr al-Jameel (The Master of Beautiful Patience)',
    era: 'The Patriarchs',
    quranReferences: [
      {
        surahName: 'Yusuf',
        surahNumber: 12,
        ayahRange: '18',
        url: 'https://quran.com/12/18',
        arabicSnippet: 'فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ',
        englishSnippet: 'So patience is most fitting. And Allah is the one sought for help against that which you describe.'
      },
      {
        surahName: 'Yusuf',
        surahNumber: 12,
        ayahRange: '83-86',
        url: 'https://quran.com/12/83-86',
        arabicSnippet: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ',
        englishSnippet: 'I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details Ya\'qub’s (Jacob) unconditional parental love, enduring patience during decades of separation from Yusuf, and his golden principle: "Sabrun Jameel" (patience without despair or bitterness).',
    bayyinahInsight: 'Nouman Ali Khan highlights the emotional depth of Surah Yusuf: Ya\'qub never lost hope ("La tay\'asu min rawhillah"). He allowed himself to feel sorrow and shed tears, while keeping his trust anchored in Allah.',
    yaqeenInsight: 'Dr. Omar Suleiman explains that Ya\'qub teaches emotional validation: crying and feeling sad is not a lack of faith. Channeling grief through dua ("Innama ashkoo bathee wa huznee il-Allah") is the highest spiritual coping mechanism.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Beautiful Patience (Sabrun Jameel)', 'Emotional Validation & Coping', 'Never Losing Hope', 'Turning to Allah in Sadness', 'Unconditional Family Love'],
    iconName: 'Heart',
    summary: 'The master of "beautiful patience" who taught us that it is okay to cry and feel sad, and that speaking our feelings to Allah brings comfort, relief, and joyful reunions.',
    lesson: {
      id: 'lesson-prophet-yaqub',
      topic: 'Prophet Ya\'qub (AS): Beautiful Patience & Big Feelings',
      title: 'Prophet Ya\'qub & The Art of Beautiful Patience',
      learningObjective: 'Understand that having big feelings like sadness is normal, and learn how Prophet Ya\'qub comforted his heart by talking directly to Allah.',
      introduction: 'Prophet Ya\'qub (AS) had a heart full of deep love for his children! When he missed his son Yusuf, he didn’t yell or give up hope. He cried gentle tears, hugged his family, and told Allah all his feelings.',
      topicKey: 'prophet_yaqub',
      ageRange: '7-9',
      learnerNickname: 'Caring Heart',
      selectedInterest: 'Emotions, Family & Stars',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Big Feelings Are Normal & Okay',
          instruction: 'Prophet Ya\'qub taught that crying and feeling sad is natural and human.',
          arabicTerm: 'فَصَبْرٌ جَمِيلٌ',
          arabicTransliteration: 'Sabrun Jameel (Beautiful, Gentle Patience - Surah 12:18)',
          tip: 'When you feel sad or overwhelmed, it’s okay to take a break and let your feelings out safely.',
          detail: 'Ibn Kathir explains that Sabrun Jameel means holding no bitterness while remaining hopeful.',
          iconName: 'Heart',
          repeatPhrase: 'It is okay to feel sad; Allah understands my heart.',
          sensoryTip: 'Wrap your arms around yourself in a comforting butterfly hug.',
          actionPrompt: 'Give yourself a gentle butterfly hug!'
        },
        {
          stepNumber: 2,
          title: 'Talk Directly to Allah (Dua Heals)',
          instruction: 'Prophet Ya\'qub said: "I share all my worries and sadness only with Allah, who loves me."',
          arabicTerm: 'إِنَّمَا أَشْكُو بَثِّي',
          arabicTransliteration: 'Innama ashkoo bathee wa huznee il-Allah (Surah Yusuf 12:86)',
          tip: 'Whenever something bothers you, whisper it in dua to Allah—He always listens.',
          detail: 'Yaqeen Institute highlights how expressing sorrow in prayer relieves emotional pressure.',
          iconName: 'Sparkles',
          repeatPhrase: 'Allah listens to every whisper of my heart.',
          sensoryTip: 'Place your hand over your chest and breathe out slowly.',
          actionPrompt: 'Whisper "Ya Allah, help me feel calm and happy."'
        },
        {
          stepNumber: 3,
          title: 'Never Give Up Hope (Optimism)',
          instruction: 'Ya\'qub knew that after every hard time comes ease, joy, and relief.',
          arabicTerm: 'رَوْحِ اللَّهِ (Rawhillah - Allah\'s Mercy)',
          arabicTransliteration: 'Never despair of the comforting mercy of Allah (Surah 12:87)',
          tip: 'Dark night skies always lead to a bright, golden sunrise.',
          detail: 'Eventually, Ya\'qub was reunited with Yusuf in a magnificent embrace of happiness.',
          iconName: 'Sun',
          repeatPhrase: 'Bright and happy days are coming, by Allah’s grace.',
          sensoryTip: 'Smile and open your hands wide to welcome hope.',
          actionPrompt: 'Say "Alhamdulillah" for hope and good endings!'
        }
      ],
      activity: {
        title: 'Feelings & Hope Compass',
        type: 'Hands-On Action',
        instructions: 'Practice the emotional wisdom of Prophet Ya\'qub.',
        actionItems: [
          'Name how you are feeling right now (happy, tired, excited, or quiet)',
          'Make a small dua asking Allah to bring happiness to your family',
          'Give someone you love a gentle hug or kind smile'
        ],
        interestConnection: 'Like a weather station tracking clouds and knowing the sunshine is right behind them!',
        completionPrompt: 'Check off each item to earn your Emotional Resilience Badge!'
      },
      reviewQuestion: {
        question: 'What did Prophet Ya\'qub (AS) do when he felt deep sorrow and missed his son?',
        hint: 'Think about how he talked to Allah with hope and beautiful patience.',
        options: [
          {
            id: 'opt1',
            text: 'He practiced "Sabrun Jameel" (beautiful patience), shared his grief with Allah in dua, and never lost hope',
            isCorrect: true,
            explanation: 'Correct! Surah Yusuf (12:86) tells us he shared his grief with Allah and stayed hopeful.'
          },
          {
            id: 'opt2',
            text: 'He gave up on everything and stopped praying',
            isCorrect: false,
            explanation: 'Prophet Ya\'qub never gave up; he told his sons to always keep hoping in Allah\'s mercy.'
          }
        ],
        correctAnswerExplanation: 'Prophet Ya\'qub showed us that true patience means turning to Allah with honesty, tears, and unshakeable hope.'
      },
      storyContent: {
        title: 'The Father of Hope',
        theme: 'Emotional Regulation, Grief, Patience & Hope',
        intro: 'In the hills of Canaan, Prophet Ya\'qub loved his children and taught them about the vast mercy of Allah.',
        slides: [
          {
            id: 'yaqub_slide_1',
            chapterNumber: 1,
            title: 'The Loving Tears',
            text: 'When trials happened, Ya\'qub prayed through the night. His tears were not from anger, but from deep love and hope in Allah.',
            interestConnection: 'Emotional expression is healthy and sacred.',
            islamicTeaching: 'Allah is closest to those whose hearts are tender and sincere.',
            iconName: 'Heart'
          },
          {
            id: 'yaqub_slide_2',
            chapterNumber: 2,
            title: 'The Sweet Reunion',
            text: 'Years later, the sweet scent of Yusuf’s shirt arrived. Ya\'qub’s eyes brightened, and the whole family was reunited in joy and gratitude!',
            interestConnection: 'Patience always leads to beautiful resolutions.',
            islamicTeaching: 'With every hardship, Allah brings ease and relief.',
            iconName: 'Sun'
          }
        ],
        conclusion: 'Ya\'qub showed us that hope in Allah is the strongest light in the world.',
        reflectionQuestion: 'Who is someone in your family you love hugging?'
      },
      visualContent: {
        title: 'Prophet Ya\'qub Visual PECS',
        subtitle: 'Feelings, dua, and hope',
        cards: [
          {
            stepNumber: 1,
            title: '1. Big Feelings',
            simpleSentence: 'It is okay to feel sad; Allah understands.',
            arabicTerm: 'فَصَبْرٌ جَمِيلٌ',
            iconName: 'Heart',
            visualHint: 'Comforting self-hug with gentle smile'
          },
          {
            stepNumber: 2,
            title: '2. Talk to Allah',
            simpleSentence: 'Share your feelings with Allah in dua.',
            arabicTerm: 'إِنَّمَا أَشْكُو بَثِّي',
            iconName: 'Sparkles',
            visualHint: 'Hands open in heartfelt prayer'
          },
          {
            stepNumber: 3,
            title: '3. Keep Hope',
            simpleSentence: 'Joy and relief are on their way.',
            arabicTerm: 'رَوْحِ اللَّهِ',
            iconName: 'Sun',
            visualHint: 'Bright morning sunrise bringing joy'
          }
        ],
        completionBadge: 'Heart of Hope Badge'
      },
      stepContent: {
        title: 'Prophet Ya\'qub Comfort Steps',
        goal: 'Practice emotional expression and peaceful dua.',
        steps: [
          {
            stepNumber: 1,
            title: 'Name the Feeling',
            instruction: 'Say what you feel inside without judgment.',
            detail: 'Acknowledging feelings is the first step to peace.',
            iconName: 'Heart',
            repeatPhrase: 'My feelings are valid, and Allah is with me.'
          },
          {
            stepNumber: 2,
            title: 'Make a Quiet Dua',
            instruction: 'Whisper "Ya Allah, give me ease and comfort."',
            detail: 'Dua calms the nervous system.',
            iconName: 'Sparkles',
            repeatPhrase: 'Ya Allah, bring peace to my heart.'
          }
        ],
        successMessage: 'MashaAllah! You have the resilient heart of Prophet Ya\'qub!'
      },
      flashcardContent: {
        title: 'Prophet Ya\'qub Flashcards',
        cards: [
          {
            id: 'fc_yaqub_1',
            frontTerm: 'What does "Sabrun Jameel" mean?',
            frontArabic: 'صَبْرٌ جَمِيلٌ',
            backDefinition: 'Beautiful patience — having emotional grace, crying if needed, and never despairing of Allah.',
            backInterestAnalogy: 'Like an anchor holding steady through a stormy ocean until the sun comes out!',
            iconName: 'Heart'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Ya\'qub’s story is crucial for neurodivergent emotional regulation, teaching children (and caregivers) that intense emotions are not moral failures, but human states to be met with co-regulation and hope.',
        reviewStrategy: 'When your child has a meltdown or crying spell, offer co-regulation: "Let\'s take a Ya\'qub breath together. It\'s safe to feel sad, and we are going to be okay."',
        repetitionTip: 'Normalize emotional expression: "Tears are just our heart’s way of washing the windows clean."',
        activitySuggestion: 'Draw an "Emotions Weather Chart" together (sunny, cloudy, rainy) and talk through how Allah is present in all weather.',
        sensoryBreakTip: 'Weighted lap pads, gentle back pats, or deep sensory hugs provide grounding proprioceptive co-regulation.',
        nextFormatRecommendation: 'Try Story Mode for emotional connection.'
      },
      disclaimer: 'Grounded in Quran (12:18, 12:83-86), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 11. YUSUF (AS)
  {
    id: 'prophet_yusuf',
    number: 11,
    nameEnglish: 'Prophet Yusuf',
    nameArabic: 'يوسف عليه السلام',
    epithet: 'As-Siddiq & Ahsan al-Qasas (The Forgiving Leader & Best of Stories)',
    era: 'The Patriarchs',
    quranReferences: [
      {
        surahName: 'Yusuf',
        surahNumber: 12,
        ayahRange: '1-101',
        url: 'https://quran.com/12/1-101',
        arabicSnippet: 'نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ بِمَا أَوْحَيْنَا إِلَيْكَ هَٰذَا الْقُرْآنَ',
        englishSnippet: 'We relate to you the best of stories in what We have revealed to you of this Quran.'
      },
      {
        surahName: 'Yusuf',
        surahNumber: 12,
        ayahRange: '90-92',
        url: 'https://quran.com/12/90-92',
        arabicSnippet: 'قَالَ لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ',
        englishSnippet: 'He said: No blame will there be upon you today. May Allah forgive you; and He is the most merciful of the merciful.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details the entire magnificent journey of Yusuf: from the dark well to the royal palace in Egypt, interpreting dreams, saving Egypt from famine through visionary planning, and ultimately forgiving his brothers with supreme mercy ("La tathreeba \'alaykum al-yawm").',
    bayyinahInsight: 'Nouman Ali Khan notes that Surah Yusuf is an emotional and psychological masterclass in resilience, emotional intelligence, handling envy, and replacing vengeance with magnanimous forgiveness.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights Yusuf as the ultimate champion of emotional regulation: when Yusuf had the absolute power to punish those who hurt him, he chose healing, dignity, and forgiveness.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING
    ],
    coreThemes: ['Choosing Forgiveness over Revenge', 'Strategic Planning & Saving Egypt', 'Emotional Resilience in Hardship', 'Interpreting Dreams & Wisdom', 'Dignity & Moral Purity'],
    iconName: 'Sun',
    summary: 'The hero of "the best of stories," who rose from a dark well to become the visionary treasurer of Egypt, saving millions from famine and forgiving those who wronged him with boundless grace.',
    lesson: {
      id: 'lesson-prophet-yusuf',
      topic: 'Prophet Yusuf (AS): The Power of Forgiveness & Strategic Planning',
      title: 'Prophet Yusuf & The Superpower of Forgiveness',
      learningObjective: 'Learn how Prophet Yusuf stayed brave through every challenge, used his smart mind to store grain for people, and chose sweet forgiveness over revenge.',
      introduction: 'Prophet Yusuf (AS) lived the most exciting adventure in the Quran! Even when unfair things happened, Yusuf stayed kind, smart, and honest. When he became the governor of Egypt, he helped millions of hungry people and warmly forgave his brothers.',
      topicKey: 'prophet_yusuf',
      ageRange: '7-9',
      learnerNickname: 'Noble Hero',
      selectedInterest: 'Strategy, Planning, Kingdoms & Puzzles',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Resilience Through Every Challenge',
          instruction: 'Whether at the bottom of a well or in a palace, Yusuf remembered that Allah was watching over him with love.',
          arabicTerm: 'إِنَّ رَبِّي لَطِيفٌ',
          arabicTransliteration: 'Inna Rabbi Lateefun (Indeed, my Lord is Subtle & Kind - Surah 12:100)',
          tip: 'When you are in a tough spot, remember: you are strong, and Allah is with you.',
          detail: 'Yusuf never lost his character or good manners even in difficult situations.',
          iconName: 'Sparkles',
          repeatPhrase: 'Allah is with me, and I can overcome any challenge.',
          sensoryTip: 'Take a deep breath and stand tall like a noble leader.',
          actionPrompt: 'Tap to unlock Yusuf’s resilience shield!'
        },
        {
          stepNumber: 2,
          title: 'Smart Planning & Saving Food',
          instruction: 'Yusuf created a brilliant 7-year plan to store golden wheat and grain so no child in Egypt went hungry.',
          arabicTerm: 'حَفِيظٌ عَلِيمٌ',
          arabicTransliteration: 'Hafeezun \'Aleem (Trustworthy Guardian & Knowledgeable Planner - Surah 12:55)',
          tip: 'Using your brain to organize, plan, and solve problems helps everyone around you.',
          detail: 'Ibn Kathir praises Yusuf\'s economic wisdom and organization.',
          iconName: 'Layers',
          repeatPhrase: 'I use my mind to plan ahead and help others.',
          sensoryTip: 'Imagine organizing colored blocks neatly into organized rows.',
          actionPrompt: 'Say "Bismillah" for clear, smart thinking.'
        },
        {
          stepNumber: 3,
          title: 'The Great Forgiveness (No Blame Today)',
          instruction: 'When his brothers apologized, Yusuf smiled and said: "No blame is upon you today. May Allah forgive you!"',
          arabicTerm: 'لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ',
          arabicTransliteration: 'Laa tathreeba \'alaykumul-yawm (No blame upon you today - Surah 12:92)',
          tip: 'Forgiving someone who says sorry is the greatest superpower of true leaders.',
          detail: 'Yaqeen Institute notes that forgiveness frees our own heart from heavy anger.',
          iconName: 'Heart',
          repeatPhrase: 'I choose forgiveness, peace, and letting go of anger.',
          sensoryTip: 'Open your palms and release any tight tension in your fingers.',
          actionPrompt: 'Smile and whisper words of forgiveness!'
        }
      ],
      activity: {
        title: 'Strategic Planner & Forgiveness Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the wisdom of Prophet Yusuf today.',
        actionItems: [
          'Organize one small shelf, toy box, or pencil case neatly, like Yusuf organized the grain',
          'Practice saying: "I forgive you, let\'s be friends" or letting go of a small grudge',
          'Thank Allah for His subtle kindness: "Alhamdulillah"'
        ],
        interestConnection: 'Like a master grandmaster in chess who plans 7 moves ahead to protect the kingdom!',
        completionPrompt: 'Check off each item to earn your Crown of Forgiveness!'
      },
      reviewQuestion: {
        question: 'What did Prophet Yusuf (AS) say to his brothers when he had the power to punish them in Egypt?',
        hint: 'Think about supreme forgiveness, mercy, and saying "no blame today".',
        options: [
          {
            id: 'opt1',
            text: '"No blame upon you today. May Allah forgive you; He is the Most Merciful."',
            isCorrect: true,
            explanation: 'Correct! Surah Yusuf (12:92) records this unforgettable statement of mercy and forgiveness.'
          },
          {
            id: 'opt2',
            text: '"I will take all your toys and never speak to you again"',
            isCorrect: false,
            explanation: 'Yusuf chose beautiful forgiveness, embraced them, and invited the whole family to live in honor.'
          }
        ],
        correctAnswerExplanation: 'Prophet Yusuf showed that true leadership is using power for mercy, planning, and forgiveness.'
      },
      storyContent: {
        title: 'The Best of Stories',
        theme: 'Forgiveness, Strategy, Dignity & Triumph',
        intro: 'From a young boy with a dream of eleven stars, to the noble governor of Egypt, Yusuf’s journey is full of light.',
        slides: [
          {
            id: 'yusuf_slide_1',
            chapterNumber: 1,
            title: 'The Great Organizer',
            text: 'When a drought approached, Yusuf organized massive granaries, saving wheat with precision and feeding thousands of families.',
            interestConnection: 'Systems-thinking and strategic planning at work.',
            islamicTeaching: 'Wisdom and honesty are the greatest qualifications for leadership.',
            iconName: 'Layers'
          },
          {
            id: 'yusuf_slide_2',
            chapterNumber: 2,
            title: 'The Embrace of Mercy',
            text: 'When his brothers stood before him in tears, Yusuf did not hold a grudge. He invited them in with open arms and celebrated their family reunion!',
            interestConnection: 'Emotional maturity and transforming conflict into peace.',
            islamicTeaching: 'Pardoning others invites Allah’s forgiveness into our own lives.',
            iconName: 'Heart'
          }
        ],
        conclusion: 'Prophet Yusuf showed that with patience, honesty, and forgiveness, every dark well can lead to a palace of light.',
        reflectionQuestion: 'How does it feel inside when you decide to forgive someone?'
      },
      visualContent: {
        title: 'Prophet Yusuf Visual Steps',
        subtitle: 'Resilience, smart planning, and forgiveness',
        cards: [
          {
            stepNumber: 1,
            title: '1. Stay Brave',
            simpleSentence: 'Yusuf trusted Allah through every hard step.',
            arabicTerm: 'إِنَّ رَبِّي لَطِيفٌ',
            iconName: 'Sparkles',
            visualHint: 'Brave hero standing tall with shining star'
          },
          {
            stepNumber: 2,
            title: '2. Smart Planning',
            simpleSentence: 'Yusuf stored grain to feed hungry families.',
            arabicTerm: 'حَفِيظٌ عَلِيمٌ',
            iconName: 'Layers',
            visualHint: 'Golden sheaves of wheat organized neatly'
          },
          {
            stepNumber: 3,
            title: '3. Pure Forgiveness',
            simpleSentence: 'Yusuf forgave with love and a clean heart.',
            arabicTerm: 'لَا تَثْرِيبَ عَلَيْكُمُ',
            iconName: 'Heart',
            visualHint: 'Open arms embracing family in peace'
          }
        ],
        completionBadge: 'Crown of Forgiveness Badge'
      },
      stepContent: {
        title: 'Prophet Yusuf Action Steps',
        goal: 'Practice strategic organization and forgiveness.',
        steps: [
          {
            stepNumber: 1,
            title: 'Plan & Organize',
            instruction: 'Set up your learning space neatly before starting.',
            detail: 'Organization clears cognitive clutter.',
            iconName: 'Layers',
            repeatPhrase: 'Clean spaces bring clear thinking.'
          },
          {
            stepNumber: 2,
            title: 'Let Go of Grudges',
            instruction: 'If someone made a mistake, let it go with a smile.',
            detail: 'Forgiveness frees your heart.',
            iconName: 'Heart',
            repeatPhrase: 'I choose peace and forgiveness.'
          }
        ],
        successMessage: 'MashaAllah! You acted with the noble grace of Prophet Yusuf!'
      },
      flashcardContent: {
        title: 'Prophet Yusuf Flashcards',
        cards: [
          {
            id: 'fc_yusuf_1',
            frontTerm: 'What is "Ahsan al-Qasas"?',
            frontArabic: 'أَحْسَنُ القَصَصِ',
            backDefinition: 'The Best of Stories — the Quranic narrative of Prophet Yusuf filled with wisdom, suspense, and mercy.',
            backInterestAnalogy: 'The greatest narrative masterpiece in human history!',
            iconName: 'BookOpen'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Yusuf’s story addresses emotional regulation, executive functioning through long-term planning, and moving past sibling rivalry into collaborative harmony.',
        reviewStrategy: 'When sibling squabbles occur, reference the "Yusuf Rule": acknowledge the hurt, but choose the superpower of forgiveness.',
        repetitionTip: 'Praise strategic planning: "You planned your steps ahead just like Prophet Yusuf!"',
        activitySuggestion: 'Play a strategy board game or puzzle together, focusing on fun planning and gracious winning/losing.',
        sensoryBreakTip: 'Sorting tactile items (beads, buttons, Lego colors) offers grounding, repetitive sensory satisfaction.',
        nextFormatRecommendation: 'Try Interactive Cards Mode for step-by-step engagement.'
      },
      disclaimer: 'Grounded in Quran (12:1-101), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  }
];
