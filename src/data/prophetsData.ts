import { ProphetItem, LessonData } from '../types';
import { SHARED_PEDAGOGICAL_RESEARCH } from './pedagogicalResearch';
import { PROPHETS_PATRIARCHS } from './prophets/prophets6to11';
import { PROPHETS_PATIENCE_LAW } from './prophets/prophets12to16';
import { PROPHETS_KINGS_GUIDES } from './prophets/prophets17to21';
import { PROPHETS_FINAL_ERA } from './prophets/prophets22to25';

export { SHARED_PEDAGOGICAL_RESEARCH };

/**
 * ALL 25 PROPHETS OF ISLAM (MENTIONED IN THE QUR'AN)
 * Chronological Order with authentic Quranic, Classical Tafsir, Scholarly Institute, and Neurodivergent Pedagogy sourcing.
 */
export const PROPHETS_DATA: ProphetItem[] = [
  // 1. ADAM (AS)
  {
    id: 'prophet_adam',
    number: 1,
    nameEnglish: 'Prophet Adam',
    nameArabic: 'آدم عليه السلام',
    epithet: 'Abu al-Bashar (Father of Humanity)',
    era: 'Early Creation',
    quranReferences: [
      {
        surahName: 'Al-Baqarah',
        surahNumber: 2,
        ayahRange: '30-38',
        url: 'https://quran.com/2/30-38',
        arabicSnippet: 'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا',
        englishSnippet: 'And He taught Adam all the names of everything.'
      },
      {
        surahName: 'Al-A\'raf',
        surahNumber: 7,
        ayahRange: '19-25',
        url: 'https://quran.com/7/19-25',
        arabicSnippet: 'قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
        englishSnippet: 'They said: Our Lord, we have wronged ourselves. If You forgive us not and have not mercy on us, we will surely be of the losers.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir notes that Allah honored Adam with intellect, the capacity for vocabulary, and learning. When Adam made a mistake, he turned immediately with a sincere heart to Allah in repentance (Tawbah), and Allah embraced him with boundless Rahmah (mercy).',
    bayyinahInsight: 'Ustadh Nouman Ali Khan highlights the linguistic beauty of "wa \'allama Adama al-asma\'a kullaha" — humanity is distinguished not by physical power, but by the divine cognitive gift of learning, naming, and curiosity.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights the psychological comfort in Adam\'s story: making mistakes is part of human development. Growth is not in being flawless, but in having the emotional courage to say "Rabbana zalamna anfusana" and reset with hope.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING
    ],
    coreThemes: ['Curiosity & Learning', 'Intellect & Naming', 'Turning Mistakes into Growth', 'Repentance (Tawbah)', 'Allah\'s Gentle Forgiveness'],
    iconName: 'Sparkles',
    summary: 'The first human and prophet, taught all the names of creation by Allah, who shows us that mistakes are opportunities to turn to Allah with humility and receive fresh beginnings.',
    lesson: {
      id: 'lesson-prophet-adam',
      topic: 'Prophet Adam (AS): The Gift of Learning & Fresh Starts',
      title: 'Prophet Adam & The Amazing Power of Curiosity',
      learningObjective: 'Discover how Allah gifted Prophet Adam the ability to learn and name everything, and understand that saying sorry brings immediate comfort and a fresh start.',
      introduction: 'Prophet Adam (Alaihis Salam) was the very first human! Allah made him curious and taught him the names of every plant, star, and animal. When Adam made a mistake, he didn’t hide—he whispered a sincere prayer, and Allah warmly forgave him.',
      topicKey: 'prophet_adam',
      ageRange: '7-9',
      learnerNickname: 'Curious Learner',
      selectedInterest: 'Space, Nature & Exploration',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Allah Teaches Adam the Names of Creation',
          instruction: 'Allah gifted Prophet Adam a sharp mind and taught him the names of all objects, animals, and stars.',
          arabicTerm: 'عَلَّمَ الْأَسْمَاءَ (Allamal-Asma\')',
          arabicTransliteration: 'He taught the names of everything (Surah Al-Baqarah 2:31)',
          tip: 'Just like you love learning about your favorite topics, Allah loves when you ask questions and explore!',
          detail: 'Prophet Adam was eager to learn and observe the natural world with wonder.',
          iconName: 'BookOpen',
          repeatPhrase: 'Allah gave me a curious mind to learn good things.',
          sensoryTip: 'Look around your room and quietly name three things you can see.',
          actionPrompt: 'Tap the card to celebrate your curious mind!'
        },
        {
          stepNumber: 2,
          title: 'A Mistake is a Moment to Grow',
          instruction: 'When Prophet Adam made a mistake, he took a deep breath, took responsibility, and turned directly to Allah.',
          arabicTerm: 'التَّوْبَة (At-Tawbah)',
          arabicTransliteration: 'At-Tawbah (Turning back to Allah with love)',
          tip: 'Everyone makes mistakes. Allah loves when we are honest and say sorry.',
          detail: 'Ibn Kathir explains that Allah directly taught Adam gentle words of prayer to bring him peace.',
          iconName: 'Heart',
          repeatPhrase: 'When I make a mistake, I can pause, breathe, and make it right.',
          sensoryTip: 'Take a gentle breath in through your nose and let it slowly out.',
          actionPrompt: 'Whisper "Astaghfirullah" (I ask Allah for His gentle forgiveness).'
        },
        {
          stepNumber: 3,
          title: 'Allah’s Gentle, Unconditional Mercy',
          instruction: 'Allah accepted Prophet Adam’s prayer immediately and gave him peace, guidance, and a fresh beginning.',
          arabicTerm: 'الرَّحْمَة (Ar-Rahmah)',
          arabicTransliteration: 'Ar-Rahmah (Infinite Compassion & Mercy)',
          tip: 'Allah’s mercy is larger than the whole universe and all the galaxies.',
          detail: 'Yaqeen Institute notes that Adam’s story frees children from toxic perfectionism: Allah loves our striving, not perfection.',
          iconName: 'Sun',
          repeatPhrase: 'Allah is always ready to forgive and guide me.',
          sensoryTip: 'Place both hands over your heart and feel its calm, steady beat.',
          actionPrompt: 'Smile and celebrate the blessing of fresh starts!'
        }
      ],
      activity: {
        title: 'Curiosity & Fresh Start Checklist',
        type: 'Hands-On Action',
        instructions: 'Practice the strengths of Prophet Adam by naming objects and sharing a kind apology.',
        actionItems: [
          'Name 3 wonderful things in nature that Allah created (e.g. stars, trees, clouds)',
          'Practice saying the Prophet Adam dua: "Rabbana zalamna anfusana"',
          'Give a gentle high-five or smile to someone to show peace and kindness'
        ],
        interestConnection: 'Like an astronaut mapping out new planets, Adam mapped out the names of creation!',
        completionPrompt: 'Check off each item to earn your Curiosity & Mercy Star!'
      },
      reviewQuestion: {
        question: 'What special gift did Allah give to Prophet Adam (AS)?',
        hint: 'Think about how Adam was taught about the world around him.',
        options: [
          {
            id: 'opt1',
            text: 'The ability to learn, think, and name everything in creation',
            isCorrect: true,
            explanation: 'Correct! Surah Al-Baqarah (2:31) tells us Allah taught Adam all the names, honoring human intellect.'
          },
          {
            id: 'opt2',
            text: 'Super speed to run faster than the wind',
            isCorrect: false,
            explanation: 'Adam’s greatest blessing from Allah was his intellect, knowledge, and pure heart.'
          },
          {
            id: 'opt3',
            text: 'A magic wand that did everything automatically',
            isCorrect: false,
            explanation: 'Adam used his own mind and effort to learn and remember the names Allah taught him.'
          }
        ],
        correctAnswerExplanation: 'Allah honored Prophet Adam with knowledge, curiosity, and the wisdom to turn back to Allah whenever he made a mistake.'
      },
      storyContent: {
        title: 'The First Teacher & The Endless Names',
        theme: 'Curiosity, Intellectual Joy & Compassion',
        intro: 'In the beginning of humanity, Allah created Prophet Adam with a heart full of light and a mind eager to explore.',
        slides: [
          {
            id: 'adam_slide_1',
            chapterNumber: 1,
            title: 'Learning the Universe',
            text: 'Allah showed Adam the trees, rivers, and creatures, teaching him their names and purposes. Adam loved learning!',
            interestConnection: 'Like a master explorer cataloging new galaxies!',
            islamicTeaching: 'Allah values knowledge and curious minds.',
            iconName: 'BookOpen'
          },
          {
            id: 'adam_slide_2',
            chapterNumber: 2,
            title: 'The Honest Dua',
            text: 'When Adam made a mistake, he didn’t blame anyone else. He raised his hands and spoke softly to Allah with love.',
            interestConnection: 'Taking responsibility is the superpower of true leaders.',
            islamicTeaching: 'Tawbah brings instant peace and closeness to Allah.',
            iconName: 'Heart'
          }
        ],
        conclusion: 'Adam taught all humans that learning is a noble adventure, and Allah’s door of mercy is always wide open.',
        reflectionQuestion: 'What is one topic you love learning about the most?'
      },
      visualContent: {
        title: 'Prophet Adam Visual PECS Journey',
        subtitle: 'Learn through visual cards and clear symbols',
        cards: [
          {
            stepNumber: 1,
            title: '1. Curiosity & Knowledge',
            simpleSentence: 'Allah taught Adam the names of all things.',
            arabicTerm: 'عَلَّمَ الْأَسْمَاءَ',
            iconName: 'Sparkles',
            visualHint: 'Adam looking at stars and animals with wonder'
          },
          {
            stepNumber: 2,
            title: '2. Sincere Prayer',
            simpleSentence: 'Adam asked Allah for forgiveness with a humble heart.',
            arabicTerm: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا',
            iconName: 'Heart',
            visualHint: 'Hands open in peaceful prayer'
          },
          {
            stepNumber: 3,
            title: '3. Fresh Start',
            simpleSentence: 'Allah forgave Adam and gave him peace and guidance.',
            arabicTerm: 'الرَّحْمَة',
            iconName: 'Sun',
            visualHint: 'Warm sunlight shining with hope'
          }
        ],
        completionBadge: 'Curious Scholar Badge'
      },
      stepContent: {
        title: 'Prophet Adam Step Checklist',
        goal: 'Practice curiosity, honesty, and peaceful words.',
        steps: [
          {
            stepNumber: 1,
            title: 'Explore Knowledge',
            instruction: 'Say Bismillah and learn one new fact today.',
            detail: 'Allah loves when you learn useful knowledge.',
            iconName: 'BookOpen',
            repeatPhrase: 'My mind is ready to learn!'
          },
          {
            stepNumber: 2,
            title: 'Turn to Allah',
            instruction: 'Say "Astaghfirullah" when you make a mistake.',
            detail: 'Allah’s forgiveness is immediate and comforting.',
            iconName: 'Heart',
            repeatPhrase: 'Allah is Al-Ghaffur, The Forgiver.'
          }
        ],
        successMessage: 'MashaAllah! You followed the inspiring path of Prophet Adam!'
      },
      flashcardContent: {
        title: 'Prophet Adam Knowledge Flashcards',
        cards: [
          {
            id: 'fc_adam_1',
            frontTerm: 'What was Prophet Adam’s special gift?',
            frontArabic: 'عِلْم (Knowledge)',
            backDefinition: 'Allah taught Adam the names and knowledge of all creation.',
            backInterestAnalogy: 'Like an explorer given a complete map of the universe!',
            iconName: 'BookOpen'
          },
          {
            id: 'fc_adam_2',
            frontTerm: 'What should we do when we make a mistake?',
            frontArabic: 'تَوْبَة (Tawbah)',
            backDefinition: 'Be honest, apologize, and ask Allah for His gentle forgiveness.',
            backInterestAnalogy: 'Like pressing the reset button on a learning game!',
            iconName: 'RotateCcw'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Adam’s lesson teaches neurodivergent children that mistakes are safe, natural learning moments, reducing anxiety and perfectionist masking.',
        reviewStrategy: 'When your child feels frustrated by an error, remind them of Adam (AS): mistakes are how we learn and grow.',
        repetitionTip: 'Use the phrase: "Mistakes are just steps to learning, and Allah’s mercy is always here."',
        activitySuggestion: 'Go on a nature walk together and take turns naming trees, birds, and colors, honoring Adam’s naming gift.',
        sensoryBreakTip: 'Practice slow diaphragmatic breathing (in for 4 seconds, out for 4 seconds) to reset the nervous system.',
        nextFormatRecommendation: 'Try Visual PECS Mode if your learner benefits from icon cues.'
      },
      disclaimer: 'Grounded in Quran (2:30-38), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 2. IDRIS (AS)
  {
    id: 'prophet_idris',
    number: 2,
    nameEnglish: 'Prophet Idris',
    nameArabic: 'إدريس عليه السلام',
    epithet: 'As-Siddiq (The Truthful & Scholar)',
    era: 'Early Creation',
    quranReferences: [
      {
        surahName: 'Maryam',
        surahNumber: 19,
        ayahRange: '56-57',
        url: 'https://quran.com/19/56-57',
        arabicSnippet: 'وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَّبِيًّا • وَرَفَعْنَاهُ مَكَانًا عَلِيًّا',
        englishSnippet: 'And mention in the Book, Idris. Indeed, he was a man of truth and a prophet. And We raised him to a high station.'
      },
      {
        surahName: 'Al-Anbiya',
        surahNumber: 21,
        ayahRange: '85-86',
        url: 'https://quran.com/21/85-86',
        arabicSnippet: 'وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ ۖ كُلٌّ مِّنَ الصَّابِرِينَ',
        englishSnippet: 'And Ismail, Idris, and Dhul-Kifl; all were of the patient.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir notes that Idris (Enoch) was known for his deep study, writing with the pen, tailoring clothes, and constant Dhikr (remembrance of Allah) with every stitch he sewed.',
    bayyinahInsight: 'Nouman Ali Khan highlights the root "D-R-S" (Dirasah / Idris), linked to intense study, focus, and deep reflection on Allah\'s creation.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights Idris as the archetype of productive hyperfocus: channeling daily crafts and specialized interests into steady worship and societal benefit.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING
    ],
    coreThemes: ['Truthfulness (Sidq)', 'Dedication to Study & Writing', 'Mindful Focus (Dhikr)', 'Craftsmanship & Tailoring', 'Patience (Sabr)'],
    iconName: 'Feather',
    summary: 'A truthful prophet and devoted scholar who was the first to write with the pen, weaving mindful remembrance of Allah into every craft and study session.',
    lesson: {
      id: 'lesson-prophet-idris',
      topic: 'Prophet Idris (AS): The Power of Focus & Truthfulness',
      title: 'Prophet Idris & The Superpower of Mindful Focus',
      learningObjective: 'Learn how Prophet Idris used his focused mind for writing, tailoring, and remembering Allah in every small daily task.',
      introduction: 'Prophet Idris (AS) loved learning, studying, and crafting! He was among the first people to use a pen to write down wisdom. Every time he stitched cloth or studied, he whispered words of praise to Allah.',
      topicKey: 'prophet_idris',
      ageRange: '7-9',
      learnerNickname: 'Thoughtful Learner',
      selectedInterest: 'Coding, Mechanics & Crafts',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'repetition'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Always Speak the Truth (As-Siddiq)',
          instruction: 'Prophet Idris was known for being 100% honest and trustworthy in all situations.',
          arabicTerm: 'الصِّدْق (As-Sidq)',
          arabicTransliteration: 'As-Sidq (Truthfulness & Honesty)',
          tip: 'Speaking the truth makes people feel safe and earns Allah’s great love.',
          detail: 'Surah Maryam (19:56) honors Idris as "Siddiqan Nabiyya" (A man of truth and a prophet).',
          iconName: 'ShieldCheck',
          repeatPhrase: 'I speak the truth with a calm and brave heart.',
          sensoryTip: 'Take a calm breath and speak clearly without rushing.',
          actionPrompt: 'Tap to commit to honesty today!'
        },
        {
          stepNumber: 2,
          title: 'The Beauty of the Pen & Deep Study',
          instruction: 'Prophet Idris was a master of writing, observing the stars, and studying sacred knowledge.',
          arabicTerm: 'القَلَم (Al-Qalam)',
          arabicTransliteration: 'Al-Qalam (The Pen of Knowledge)',
          tip: 'When you focus deeply on a subject you love, you are using a special gift from Allah.',
          detail: 'Ibn Kathir notes that Idris was the first to write with the reed pen, turning writing into a tool for goodness.',
          iconName: 'BookOpen',
          repeatPhrase: 'My mind is focused and ready to learn.',
          sensoryTip: 'Hold a pen or pencil gently and notice how smooth it feels in your fingers.',
          actionPrompt: 'Draw a small star or letter on a piece of paper.'
        },
        {
          stepNumber: 3,
          title: 'Mindful Remembrance with Every Action',
          instruction: 'With every stitch of needle and thread, Prophet Idris said "SubhanAllah" and "Alhamdulillah".',
          arabicTerm: 'ذِكْرُ اللَّهِ (Dhikrullah)',
          arabicTransliteration: 'Dhikrullah (Remembering Allah constantly)',
          tip: 'You can say SubhanAllah while building Lego, drawing, or tying your shoes!',
          detail: 'Yaqeen Institute highlights how Idris paired physical craftsmanship with continuous spiritual serenity.',
          iconName: 'Sparkles',
          repeatPhrase: 'SubhanAllah, Alhamdulillah, Allahu Akbar.',
          sensoryTip: 'Tap each finger to your thumb one by one as you say: SubhanAllah, Alhamdulillah, Allahu Akbar.',
          actionPrompt: 'Say "SubhanAllah" three times with gentle focus.'
        }
      ],
      activity: {
        title: 'Mindful Focus & Craft Mission',
        type: 'Hands-On Action',
        instructions: 'Channel your focus like Prophet Idris by completing these 3 mindful tasks.',
        actionItems: [
          'Write down one nice word using a pen or keyboard (e.g. "Peace" or "Salam")',
          'Tap your fingers while saying "SubhanAllah" (Glory be to Allah) 3 times',
          'Tell one true, honest fact about your day to a family member'
        ],
        interestConnection: 'Like a meticulous coder building clean software, Idris perfected every craft with precision!',
        completionPrompt: 'Check off each item to earn your Mindful Scholar Trophy!'
      },
      reviewQuestion: {
        question: 'What was Prophet Idris (AS) famous for doing while working on his crafts?',
        hint: 'Think about what he whispered with every stitch of needle and thread.',
        options: [
          {
            id: 'opt1',
            text: 'Remembering Allah with Dhikr (saying SubhanAllah & Alhamdulillah)',
            isCorrect: true,
            explanation: 'Correct! Prophet Idris paired his deep craftsmanship with continuous remembrance of Allah.'
          },
          {
            id: 'opt2',
            text: 'Complaining that the work was too hard',
            isCorrect: false,
            explanation: 'Prophet Idris was famously patient and loved working diligently.'
          },
          {
            id: 'opt3',
            text: 'Rushing through without paying attention',
            isCorrect: false,
            explanation: 'Prophet Idris had high focus and attention to detail.'
          }
        ],
        correctAnswerExplanation: 'Prophet Idris practiced truthfulness, deep study with the pen, and mindful Dhikr in every moment of work.'
      },
      storyContent: {
        title: 'The Master of the Pen & The High Station',
        theme: 'Truthfulness, Study & Mindful Crafting',
        intro: 'Prophet Idris was a patient observer of creation and the first to record sacred knowledge with ink.',
        slides: [
          {
            id: 'idris_slide_1',
            chapterNumber: 1,
            title: 'The Quill and the Stars',
            text: 'While others hurried, Idris sat thoughtfully, writing down wisdom and reflecting on the vast cosmos.',
            interestConnection: 'Honoring deep focus and hyperfocus strengths.',
            islamicTeaching: 'Seeking knowledge is a sacred journey in Islam.',
            iconName: 'BookOpen'
          },
          {
            id: 'idris_slide_2',
            chapterNumber: 2,
            title: 'The Rhythm of Dhikr',
            text: 'Every time his needle went into the fabric: "SubhanAllah". Every time he pulled it through: "Alhamdulillah".',
            interestConnection: 'Rhythmic sensory repetition creates profound inner peace.',
            islamicTeaching: 'Any honest work done with good intention becomes worship.',
            iconName: 'Sparkles'
          }
        ],
        conclusion: 'Allah loved Idris’s truthfulness and elevated him to a high, honorable station in the heavens.',
        reflectionQuestion: 'What is your favorite craft or hobby to focus on?'
      },
      visualContent: {
        title: 'Prophet Idris Visual Steps',
        subtitle: 'Focus, truthfulness, and mindful words',
        cards: [
          {
            stepNumber: 1,
            title: '1. Truthful Voice',
            simpleSentence: 'Idris always spoke the truth with kindness.',
            arabicTerm: 'الصِّدْق',
            iconName: 'ShieldCheck',
            visualHint: 'Speaking words of honesty'
          },
          {
            stepNumber: 2,
            title: '2. The Sacred Pen',
            simpleSentence: 'Idris wrote down knowledge and studied deeply.',
            arabicTerm: 'القَلَم',
            iconName: 'BookOpen',
            visualHint: 'Writing with a quill on parchment'
          },
          {
            stepNumber: 3,
            title: '3. Mindful Dhikr',
            simpleSentence: 'Idris praised Allah during every single task.',
            arabicTerm: 'ذِكْرُ اللَّهِ',
            iconName: 'Sparkles',
            visualHint: 'Glowing stars and peaceful heart'
          }
        ],
        completionBadge: 'Truthful Scholar Badge'
      },
      stepContent: {
        title: 'Prophet Idris Action Plan',
        goal: 'Practice truthfulness, steady focus, and peaceful Dhikr.',
        steps: [
          {
            stepNumber: 1,
            title: 'Be Honest',
            instruction: 'Speak the truth kindly in what you say today.',
            detail: 'Honesty brings safety and trust.',
            iconName: 'ShieldCheck',
            repeatPhrase: 'I love honesty and truth.'
          },
          {
            stepNumber: 2,
            title: 'Whisper Dhikr',
            instruction: 'Say SubhanAllah while working on your favorite task.',
            detail: 'Dhikr fills your time with Barakah (blessings).',
            iconName: 'Sparkles',
            repeatPhrase: 'SubhanAllahi wa bihamdihi.'
          }
        ],
        successMessage: 'Well done! You worked with mindful focus like Prophet Idris!'
      },
      flashcardContent: {
        title: 'Prophet Idris Key Facts',
        cards: [
          {
            id: 'fc_idris_1',
            frontTerm: 'What does "As-Siddiq" mean?',
            frontArabic: 'الصِّدِّيق',
            backDefinition: 'The person who is always truthful, sincere, and steadfast.',
            backInterestAnalogy: 'Like an unbreakable shield of trust!',
            iconName: 'ShieldCheck'
          },
          {
            id: 'fc_idris_2',
            frontTerm: 'What was Prophet Idris’s favorite habit during work?',
            frontArabic: 'ذِكْر',
            backDefinition: 'Repeating SubhanAllah and praising Allah with every single action.',
            backInterestAnalogy: 'Like a rhythmic beat that keeps you steady and calm!',
            iconName: 'Sparkles'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Idris teaches how to channel deep hyperfocus and tactile crafting into grounding mindfulness and self-regulation.',
        reviewStrategy: 'Encourage your child when they are intensely engaged in crafts, drawing, or coding by praising their focus as an Idris-like strength.',
        repetitionTip: 'Use rhythmic hand-tapping while reciting Dhikr to assist with motor regulation.',
        activitySuggestion: 'Set a quiet 5-minute writing or drawing challenge where you both work quietly and end with Alhamdulillah.',
        sensoryBreakTip: 'Offer a tactile fidget or smooth stone to hold while practicing slow calm breaths.',
        nextFormatRecommendation: 'Try Checklist Mode for clear sequential task tracking.'
      },
      disclaimer: 'Grounded in Quran (19:56-57, 21:85), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 3. NUH (AS)
  {
    id: 'prophet_nuh',
    number: 3,
    nameEnglish: 'Prophet Nuh',
    nameArabic: 'نوح عليه السلام',
    epithet: 'Abdan Shakura (The Grateful & Steadfast Builder)',
    era: 'Early Creation',
    quranReferences: [
      {
        surahName: 'Hud',
        surahNumber: 11,
        ayahRange: '36-48',
        url: 'https://quran.com/11/36-48',
        arabicSnippet: 'وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا',
        englishSnippet: 'And construct the Ark under Our observation and Our inspiration.'
      },
      {
        surahName: 'Al-Isra',
        surahNumber: 17,
        ayahRange: '3',
        url: 'https://quran.com/17/3',
        arabicSnippet: 'إِنَّهُ كَانَ عَبْدًا شَكُورًا',
        englishSnippet: 'Indeed, he was a grateful servant.'
      },
      {
        surahName: 'Nuh',
        surahNumber: 71,
        ayahRange: '1-28',
        url: 'https://quran.com/71/1-28',
        arabicSnippet: 'قَالَ رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا',
        englishSnippet: 'He said: My Lord, indeed I invited my people night and day.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details Nuh\'s extraordinary 950 years of patient perseverance. Despite mockery, he meticulously built the great Ark out of wooden planks and nails on dry land, fully trusting Allah’s divine plan.',
    bayyinahInsight: 'Nouman Ali Khan analyzes the Quranic term "Abdan Shakura" — Nuh was not just patient in hardship, but actively grateful. Building the Ark required engineering precision, physical stamina, and mental grit.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights Nuh\'s emotional resilience against social pressure and bullying: when people laughed at him building a ship far from water, Nuh stayed calm, focused on his mission, and did not retaliate with anger.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Steadfast Perseverance (Sabr)', 'Gratitude (Shukr)', 'Building & Engineering the Ark', 'Resisting Peer Pressure', 'Trust in Allah (Tawakkul)'],
    iconName: 'Ship',
    summary: 'The steadfast builder who persevered for 950 years with boundless gratitude, constructing the mighty Ark with wood and nails and rescuing the believers and pairs of animals.',
    lesson: {
      id: 'lesson-prophet-nuh',
      topic: 'Prophet Nuh (AS): The Ark of Patience & Gratitude',
      title: 'Prophet Nuh & The Mighty Ark of Perseverance',
      learningObjective: 'Understand how Prophet Nuh built the great Ark step-by-step with unwavering patience, ignoring bullies and trusting Allah completely.',
      introduction: 'Prophet Nuh (AS) was one of the most patient builders in history! Even when others laughed, Nuh kept assembling the Ark board by board, nail by nail. Allah protected Nuh, the believers, and all the animals on the calm waters.',
      topicKey: 'prophet_nuh',
      ageRange: '7-9',
      learnerNickname: 'Resilient Builder',
      selectedInterest: 'Building, Ships, Lego & Animals',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Building One Plank at a Time',
          instruction: 'Allah commanded Prophet Nuh to build a massive ship on dry land using wood and nails.',
          arabicTerm: 'وَاصْنَعِ الْفُلْكَ (Wasna\'il-Fulk)',
          arabicTransliteration: 'And construct the Ark (Surah Hud 11:37)',
          tip: 'Big projects (like building with Lego or learning a new skill) happen one small piece at a time.',
          detail: 'Nuh planted trees, harvested timber, and measured every board with patient dedication.',
          iconName: 'Layers',
          repeatPhrase: 'I can finish big tasks one small step at a time.',
          sensoryTip: 'Imagine placing a smooth wooden block into place with a satisfying click.',
          actionPrompt: 'Tap to place the first plank on Nuh’s Ark!'
        },
        {
          stepNumber: 2,
          title: 'Staying Calm When Others Don’t Understand',
          instruction: 'When people laughed at Nuh for building a ship away from the sea, he stayed calm and replied politely.',
          arabicTerm: 'الصَّبْرُ الْجَمِيل (As-Sabr)',
          arabicTransliteration: 'As-Sabr (Beautiful Patience & Emotional Control)',
          tip: 'You don’t have to let other people’s teasing upset you. Trust what is good and stay focused.',
          detail: 'Yaqeen Institute notes that Nuh mastered emotional regulation: he did not yell or give up.',
          iconName: 'ShieldCheck',
          repeatPhrase: 'I stay calm, kind, and confident in what is right.',
          sensoryTip: 'Take a slow, deep breath and feel your shoulders drop and relax.',
          actionPrompt: 'Whisper "Alhamdulillah" to ground yourself.'
        },
        {
          stepNumber: 3,
          title: 'Welcoming the Animals & Sailing to Safety',
          instruction: 'Pairs of gentle animals—lions, birds, sheep, and elephants—boarded the Ark peacefully.',
          arabicTerm: 'بِسْمِ اللَّهِ مَجْرَاهَا',
          arabicTransliteration: 'Bismillahi majraaha wa mursaaha (In the Name of Allah is its journey)',
          tip: 'Allah protected every living being on the Ark with gentle rain and safe floating.',
          detail: 'When the journey ended safely on Mount Judi, Nuh gave immense thanks to Allah.',
          iconName: 'Heart',
          repeatPhrase: 'Bismillah in every journey, and Alhamdulillah when we arrive.',
          sensoryTip: 'Listen to the calm rhythm of water in your imagination.',
          actionPrompt: 'Say "Alhamdulillah" for safety and family!'
        }
      ],
      activity: {
        title: 'The Ark Builder Patience Challenge',
        type: 'Hands-On Action',
        instructions: 'Practice the perseverance of Prophet Nuh with these building steps.',
        actionItems: [
          'Stack 5 blocks, books, or Lego bricks patiently without knocking them over',
          'Recite the boarding dua: "Bismillahi majraaha wa mursaaha"',
          'Say thank you (Shukr) for three safe things in your home (e.g. warm bed, roof, food)'
        ],
        interestConnection: 'Like a master marine engineer designing an unsinkable vessel!',
        completionPrompt: 'Check off all 3 items to earn your Ark Navigator Badge!'
      },
      reviewQuestion: {
        question: 'Why is Prophet Nuh (AS) called "Abdan Shakura" (A Grateful Servant) in the Quran?',
        hint: 'Think about how he always thanked Allah through both easy times and long, hard challenges.',
        options: [
          {
            id: 'opt1',
            text: 'Because he thanked Allah constantly and stayed patient through 950 years of building and teaching',
            isCorrect: true,
            explanation: 'Correct! Surah Al-Isra (17:3) calls Nuh a grateful servant because his gratitude never stopped.'
          },
          {
            id: 'opt2',
            text: 'Because he only sailed on sunny days',
            isCorrect: false,
            explanation: 'Nuh sailed through giant waves and heavy rain, trusting Allah with complete courage.'
          },
          {
            id: 'opt3',
            text: 'Because he gave up when people made fun of him',
            isCorrect: false,
            explanation: 'Nuh never gave up—he stayed patient and kind.'
          }
        ],
        correctAnswerExplanation: 'Prophet Nuh showed us that true patience means working step-by-step with gratitude and full trust in Allah.'
      },
      storyContent: {
        title: 'The Great Ship on Dry Land',
        theme: 'Patience, Engineering, Gratitude & Resilience',
        intro: 'Prophet Nuh received an inspiring command from Allah: construct a ship that would rescue creation.',
        slides: [
          {
            id: 'nuh_slide_1',
            chapterNumber: 1,
            title: 'Plank by Plank',
            text: 'Nuh measured the timber and drove every peg into place with care. He worked diligently day after day.',
            interestConnection: 'Patience transforms raw materials into magnificent structures.',
            islamicTeaching: 'Allah loves when we do our work with excellence (Ihsan).',
            iconName: 'Layers'
          },
          {
            id: 'nuh_slide_2',
            chapterNumber: 2,
            title: 'The Safe Landing',
            text: 'When the waters rose, the Ark floated peacefully. When it rested on Mount Judi, the world was renewed with peace.',
            interestConnection: 'Trusting the process leads to safety and triumph.',
            islamicTeaching: 'Allah always protects those who hold onto truth and patience.',
            iconName: 'Sun'
          }
        ],
        conclusion: 'Nuh taught us that with patience, hard work, and gratitude, no challenge is too big.',
        reflectionQuestion: 'What is one big goal you are working on step-by-step?'
      },
      visualContent: {
        title: 'Prophet Nuh Visual PECS',
        subtitle: 'Building with patience and thanking Allah',
        cards: [
          {
            stepNumber: 1,
            title: '1. Build with Focus',
            simpleSentence: 'Nuh built the Ark plank by plank with patience.',
            arabicTerm: 'وَاصْنَعِ الْفُلْكَ',
            iconName: 'Layers',
            visualHint: 'Hammering wooden planks with focus'
          },
          {
            stepNumber: 2,
            title: '2. Stay Calm and Kind',
            simpleSentence: 'Nuh stayed calm when people did not understand.',
            arabicTerm: 'الصَّبْر',
            iconName: 'ShieldCheck',
            visualHint: 'Peaceful heart smiling through noise'
          },
          {
            stepNumber: 3,
            title: '3. Safe Journey',
            simpleSentence: 'The Ark floated safely by Allah’s grace and mercy.',
            arabicTerm: 'بِسْمِ اللَّهِ مَجْرَاهَا',
            iconName: 'Heart',
            visualHint: 'Ark resting peacefully on the mountain'
          }
        ],
        completionBadge: 'Master Builder Badge'
      },
      stepContent: {
        title: 'Prophet Nuh Patience Steps',
        goal: 'Practice perseverance, calm breathing, and gratitude.',
        steps: [
          {
            stepNumber: 1,
            title: 'Break Down Tasks',
            instruction: 'Do one small part of your chore or homework at a time.',
            detail: 'Small steps build great achievements.',
            iconName: 'Layers',
            repeatPhrase: 'One step at a time!'
          },
          {
            stepNumber: 2,
            title: 'Say Alhamdulillah',
            instruction: 'Thank Allah for your family, food, and safe shelter.',
            detail: 'Gratitude brings peace to your mind.',
            iconName: 'Heart',
            repeatPhrase: 'Alhamdulillahi Rabbil \'Alameen.'
          }
        ],
        successMessage: 'MashaAllah! You have the patient heart of a true builder!'
      },
      flashcardContent: {
        title: 'Prophet Nuh Flashcards',
        cards: [
          {
            id: 'fc_nuh_1',
            frontTerm: 'What was Prophet Nuh’s major project?',
            frontArabic: 'السَّفِينَة (The Ark / Ship)',
            backDefinition: 'Building a massive wooden Ark to save the believers and pairs of animals.',
            backInterestAnalogy: 'Like building the ultimate rescue spaceship!',
            iconName: 'Layers'
          },
          {
            id: 'fc_nuh_2',
            frontTerm: 'What does "Abdan Shakura" mean?',
            frontArabic: 'عَبْدًا شَكُورًا',
            backDefinition: 'A servant who is deeply, continuously grateful to Allah in all situations.',
            backInterestAnalogy: 'A battery of gratitude that never runs out of power!',
            iconName: 'Heart'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Nuh’s narrative provides a powerful framework for teaching persistence, dealing with peer rejection/misunderstandings, and breaking overwhelming tasks into micro-steps.',
        reviewStrategy: 'Use the "Nuh’s Ark Rule" when your child feels overwhelmed: "We only need to place one plank right now."',
        repetitionTip: 'Encourage repeating "Bismillahi majraaha" before transitions or starting new tasks to reduce anticipatory anxiety.',
        activitySuggestion: 'Build a boat together using Lego, cardboard, or recycled materials, testing if it floats in water.',
        sensoryBreakTip: 'Water play or gentle tactile squishing can provide calming proprioceptive input after demanding mental tasks.',
        nextFormatRecommendation: 'Try Comic / Visual View for visual sequencing.'
      },
      disclaimer: 'Grounded in Quran (11:36-48, 17:3, 71:1-28), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 4. HUD (AS)
  {
    id: 'prophet_hud',
    number: 4,
    nameEnglish: 'Prophet Hud',
    nameArabic: 'هود عليه السلام',
    epithet: 'An-Nasih al-Ameen (The Trustworthy Adviser)',
    era: 'Early Creation',
    quranReferences: [
      {
        surahName: 'Hud',
        surahNumber: 11,
        ayahRange: '50-60',
        url: 'https://quran.com/11/50-60',
        arabicSnippet: 'يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ',
        englishSnippet: 'O my people, worship Allah; you have no deity other than Him.'
      },
      {
        surahName: 'Ash-Shu\'ara',
        surahNumber: 26,
        ayahRange: '123-140',
        url: 'https://quran.com/26/123-140',
        arabicSnippet: 'إِنِّي لَكُمْ رَسُولٌ أَمِينٌ • فَاتَّقُوا اللَّهَ وَأَطِيعُونِ',
        englishSnippet: 'Indeed, I am to you a trustworthy messenger. So fear Allah and obey me.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir explains that Prophet Hud was sent to the mighty civilization of \'Ad, who built towering stone pillars in the desert of Ahqaf. Hud spoke to them with gentle sincerity, urging them to replace arrogance with gratitude to the Creator who gave them strength.',
    bayyinahInsight: 'Nouman Ali Khan highlights Hud\'s calm tone: despite the aggressive taunts of the powerful chiefs, Hud addressed them as "Ya Qawmi" (O my beloved people), showing deep empathy and refusal to engage in shouting matches.',
    yaqeenInsight: 'Dr. Omar Suleiman explains that Hud is a role model for asserting truth with quiet dignity without absorbing other people\'s anger or hostility.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING
    ],
    coreThemes: ['Humility vs Arrogance', 'Gentle & Calm Communication', 'Standing Up for What is Fair', 'Advising with Empathy', 'True Strength in Kindness'],
    iconName: 'Wind',
    summary: 'The gentle messenger sent to the people of \'Ad, who reminded them that real strength is not in giant stone towers or loud voices, but in humble hearts and truthful words.',
    lesson: {
      id: 'lesson-prophet-hud',
      topic: 'Prophet Hud (AS): Gentle Strength & Humble Heart',
      title: 'Prophet Hud & The Secret of True Strength',
      learningObjective: 'Learn how Prophet Hud used gentle words and calm posture to speak truth to a powerful nation, showing that real strength comes from kindness and humility.',
      introduction: 'The people of \'Ad were very tall and strong, and they built giant stone palaces in the desert. But Prophet Hud (AS) taught them that being big and strong is only a blessing if you use your strength to help others and worship Allah with humility.',
      topicKey: 'prophet_hud',
      ageRange: '7-9',
      learnerNickname: 'Gentle Hero',
      selectedInterest: 'Castles, Giants & Weather',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'True Strength is in the Heart',
          instruction: 'Prophet Hud taught that having strong muscles or big buildings is a gift from Allah, not a reason to boast.',
          arabicTerm: 'التَّوَاضُع (At-Tawadu\')',
          arabicTransliteration: 'At-Tawadu\' (Humility & Gentleness)',
          tip: 'True heroes use their energy to lift others up, not to brag.',
          detail: 'Surah Ash-Shu\'ara describes how Hud reminded them of the blessings of gardens and springs.',
          iconName: 'Heart',
          repeatPhrase: 'Real strength is being kind, gentle, and humble.',
          sensoryTip: 'Stand tall with relaxed shoulders and take a slow, calm breath.',
          actionPrompt: 'Tap the card to practice gentle strength!'
        },
        {
          stepNumber: 2,
          title: 'Speaking with a Calm Voice',
          instruction: 'When others shouted, Prophet Hud kept his voice steady, peaceful, and respectful.',
          arabicTerm: 'نَاصِحٌ أَمِينٌ',
          arabicTransliteration: 'Nasihun Ameen (A Trustworthy & Sincere Adviser)',
          tip: 'You don’t have to shout to be heard. A calm, clear voice carries the greatest wisdom.',
          detail: 'Yaqeen Institute notes that emotional regulation during disagreements is a prophetic hallmark.',
          iconName: 'Smile',
          repeatPhrase: 'A calm voice brings peace to the room.',
          sensoryTip: 'Whisper "Peace be upon you" in your softest indoor voice.',
          actionPrompt: 'Say "As-salamu alaykum" softly.'
        },
        {
          stepNumber: 3,
          title: 'Gratitude for Every Blessing',
          instruction: 'Remember to thank Allah for your home, health, safety, and all your strengths.',
          arabicTerm: 'شُكْرُ اللَّهِ (Shukrullah)',
          arabicTransliteration: 'Shukrullah (Thanking Allah for His Gifts)',
          tip: 'When you say Alhamdulillah, Allah places more joy in your heart.',
          detail: 'Hud reminded his people that rain, clean air, and water are sacred gifts to be cherished.',
          iconName: 'Sun',
          repeatPhrase: 'Alhamdulillah for all my blessings and strength.',
          sensoryTip: 'Feel the gentle air as you breathe in and out.',
          actionPrompt: 'Whisper Alhamdulillah three times with a smile.'
        }
      ],
      activity: {
        title: 'Gentle Strength Hero Action',
        type: 'Hands-On Action',
        instructions: 'Practice the humble strength of Prophet Hud with these 3 steps.',
        actionItems: [
          'Use your physical strength to help: pick up something heavy or tidy a room',
          'Practice speaking in a calm, soothing voice when asking for something',
          'Say "Alhamdulillah" for your strong body and healthy mind'
        ],
        interestConnection: 'Like a gentle giant in a story who uses their immense power to protect small creatures!',
        completionPrompt: 'Check off each item to earn your Gentle Strength Trophy!'
      },
      reviewQuestion: {
        question: 'What did Prophet Hud (AS) teach about real strength?',
        hint: 'Think about whether strength is about shouting and boasting or kindness and humility.',
        options: [
          {
            id: 'opt1',
            text: 'Real strength comes from having a humble heart, being kind, and thanking Allah',
            isCorrect: true,
            explanation: 'Correct! Prophet Hud taught the people of \'Ad that true greatness is serving Allah with humility.'
          },
          {
            id: 'opt2',
            text: 'Real strength is showing off and boasting about being the strongest',
            isCorrect: false,
            explanation: 'Boasting is arrogance; Islam teaches us to be humble and grateful.'
          },
          {
            id: 'opt3',
            text: 'Real strength is building the biggest stone palace and ignoring everyone',
            isCorrect: false,
            explanation: 'Palaces do not make someone good; kind actions and faith do.'
          }
        ],
        correctAnswerExplanation: 'Prophet Hud showed that real strength is using our abilities to help others and thanking Allah with a humble heart.'
      },
      storyContent: {
        title: 'The Towers in the Sand',
        theme: 'Humility, Calm Communication & Gratitude',
        intro: 'In the vast desert of Ahqaf, the people of \'Ad carved giant pillars of stone into the mountains.',
        slides: [
          {
            id: 'hud_slide_1',
            chapterNumber: 1,
            title: 'The Great Pillars',
            text: 'They felt nobody could ever match their power. But Prophet Hud walked among them with gentle footsteps and warm eyes.',
            interestConnection: 'True power is peaceful and controlled, not reckless.',
            islamicTeaching: 'Allah is the Creator of all strength.',
            iconName: 'Wind'
          },
          {
            id: 'hud_slide_2',
            chapterNumber: 2,
            title: 'The Sincere Invitation',
            text: 'Hud spoke: "O my people, worship Allah who gave you water, gardens, and strong bodies. Be grateful and kind!"',
            interestConnection: 'Using clear, honest communication to guide others.',
            islamicTeaching: 'Humility unlocks the true beauty of our talents.',
            iconName: 'Heart'
          }
        ],
        conclusion: 'Hud taught the world that the strongest people are those who control their temper and stay humble before Allah.',
        reflectionQuestion: 'How can you use your strength to help someone at home today?'
      },
      visualContent: {
        title: 'Prophet Hud Visual Cards',
        subtitle: 'Humility, kindness, and gratitude',
        cards: [
          {
            stepNumber: 1,
            title: '1. Gentle Heart',
            simpleSentence: 'Hud taught that true power is being kind.',
            arabicTerm: 'التَّوَاضُع',
            iconName: 'Heart',
            visualHint: 'Helping hand reaching out gently'
          },
          {
            stepNumber: 2,
            title: '2. Calm Voice',
            simpleSentence: 'Hud spoke with peace and never yelled.',
            arabicTerm: 'نَاصِحٌ أَمِينٌ',
            iconName: 'Smile',
            visualHint: 'Speaking quietly and clearly'
          },
          {
            stepNumber: 3,
            title: '3. Thanking Allah',
            simpleSentence: 'Hud thanked Allah for all blessings and strength.',
            arabicTerm: 'شُكْرُ اللَّهِ',
            iconName: 'Sun',
            visualHint: 'Sunlight shining over desert gardens'
          }
        ],
        completionBadge: 'Humble Hero Badge'
      },
      stepContent: {
        title: 'Prophet Hud Action Checklist',
        goal: 'Practice gentle communication and humility.',
        steps: [
          {
            stepNumber: 1,
            title: 'Use a Calm Voice',
            instruction: 'Take a breath and speak quietly even if you feel excited.',
            detail: 'Gentle voices make communication clear and happy.',
            iconName: 'Smile',
            repeatPhrase: 'Calm words are powerful words.'
          },
          {
            stepNumber: 2,
            title: 'Help Someone',
            instruction: 'Use your hands to do a helpful chore.',
            detail: 'Using your strength for good pleases Allah.',
            iconName: 'Heart',
            repeatPhrase: 'I use my energy to do good.'
          }
        ],
        successMessage: 'MashaAllah! You showed gentle strength like Prophet Hud!'
      },
      flashcardContent: {
        title: 'Prophet Hud Flashcards',
        cards: [
          {
            id: 'fc_hud_1',
            frontTerm: 'What does "At-Tawadu\'" mean?',
            frontArabic: 'التَّوَاضُع',
            backDefinition: 'Humility — being modest and never boasting or looking down on others.',
            backInterestAnalogy: 'Like keeping your spaceship grounded so everyone can board safely!',
            iconName: 'Heart'
          },
          {
            id: 'fc_hud_2',
            frontTerm: 'How did Prophet Hud speak when others were rude?',
            frontArabic: 'نَاصِح',
            backDefinition: 'With a calm, steady, polite voice, wishing goodness for everyone.',
            backInterestAnalogy: 'Like a calm pilot steering smoothly through stormy winds!',
            iconName: 'Wind'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Hud’s lesson targets emotional regulation, helping children identify the difference between aggressive boasting and calm, confident assertiveness.',
        reviewStrategy: 'When your child encounters strong emotions or disagreements, remind them: "Let\'s use our Hud calm-voice superpower."',
        repetitionTip: 'Practice "soft volume switches" as a game to develop vocal modulation awareness.',
        activitySuggestion: 'Build a block tower together, then gently dismantle it together while practicing saying Alhamdulillah for our strength.',
        sensoryBreakTip: 'Deep pressure or a firm weighted blanket hug can help ground high-energy states.',
        nextFormatRecommendation: 'Try Flashcard Mode for quick concept review.'
      },
      disclaimer: 'Grounded in Quran (11:50-60, 26:123-140), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 5. SALEH (AS)
  {
    id: 'prophet_saleh',
    number: 5,
    nameEnglish: 'Prophet Saleh',
    nameArabic: 'صالح عليه السلام',
    epithet: 'Sahib an-Naqah (Protector of Allah\'s Miraculous She-Camel)',
    era: 'Early Creation',
    quranReferences: [
      {
        surahName: 'Hud',
        surahNumber: 11,
        ayahRange: '61-68',
        url: 'https://quran.com/11/61-68',
        arabicSnippet: 'هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ',
        englishSnippet: 'This is the she-camel of Allah — a sign for you; so let her graze in Allah\'s earth.'
      },
      {
        surahName: 'Ash-Shams',
        surahNumber: 91,
        ayahRange: '11-15',
        url: 'https://quran.com/91/11-15',
        arabicSnippet: 'فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَاهَا',
        englishSnippet: 'And the messenger of Allah [Saleh] said to them: [Do not harm] the she-camel of Allah and her turn to drink.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir narrates how Prophet Saleh was sent to Thamud, who carved magnificent homes out of solid rock. Allah sent them the miraculous She-Camel (Naqatullah) as a living sign of mercy, establishing a fair schedule to share the fresh water well.',
    bayyinahInsight: 'Nouman Ali Khan highlights the environmental and animal-welfare lessons: the test for Thamud was not complex theology, but basic empathy and sharing water with an animal.',
    yaqeenInsight: 'Dr. Omar Suleiman emphasizes fairness and sharing: justice in Islam includes respecting the rights of animals, vulnerable creatures, and shared communal resources.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION
    ],
    coreThemes: ['Kindness to Animals', 'Fair Turn-Taking & Sharing', 'Respecting Nature & Water', 'Honoring Promises', 'Empathy for Creation'],
    iconName: 'Droplets',
    summary: 'The righteous messenger to the people of Thamud who championed fair turn-taking and animal protection, defending Allah’s miraculous she-camel and the shared water well.',
    lesson: {
      id: 'lesson-prophet-saleh',
      topic: 'Prophet Saleh (AS): Kindness to Animals & Fair Sharing',
      title: 'Prophet Saleh & The Gentle She-Camel',
      learningObjective: 'Learn the importance of gentle care for animals, sharing resources fairly, and taking turns with kindness and respect.',
      introduction: 'Prophet Saleh (AS) lived among the people of Thamud, who were master rock carvers. Allah sent them a miraculous, gentle she-camel. Prophet Saleh taught them to treat her with deep kindness and take turns sharing water at the well.',
      topicKey: 'prophet_saleh',
      ageRange: '7-9',
      learnerNickname: 'Animal Friend',
      selectedInterest: 'Animals, Safari & Nature',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Every Animal Deserves Kindness',
          instruction: 'Prophet Saleh reminded his people that animals are Allah’s creation and must be treated with love and gentle hands.',
          arabicTerm: 'نَاقَةُ اللَّهِ (Naqatullah)',
          arabicTransliteration: 'Naqatullah (The She-Camel of Allah - Sign of Mercy)',
          tip: 'Being kind to a cat, dog, bird, or camel earns immense rewards from Allah.',
          detail: 'Surah Ash-Shams honors the call to protect vulnerable animals and let them drink in peace.',
          iconName: 'Heart',
          repeatPhrase: 'I am gentle and kind to all of Allah’s creatures.',
          sensoryTip: 'Imagine gently petting a soft, friendly animal.',
          actionPrompt: 'Tap the card to send a wave of kindness to animals!'
        },
        {
          stepNumber: 2,
          title: 'Fair Sharing & Taking Turns',
          instruction: 'Saleh set up a fair schedule: the she-camel drank water one day, and the townspeople drank the next day.',
          arabicTerm: 'سُقْيَاهَا (Suqyaha)',
          arabicTransliteration: 'Suqyaha (Her turn to drink fairly)',
          tip: 'Taking turns with toys, water, or swings makes everyone feel happy and respected.',
          detail: 'Ibn Kathir notes that the camel gave abundant, sweet milk to nourish all the families.',
          iconName: 'Droplets',
          repeatPhrase: 'Sharing and taking turns brings harmony.',
          sensoryTip: 'Count to 5 slowly while imagining passing a ball to a friend.',
          actionPrompt: 'Whisper "Bismillah" and practice taking turns.'
        },
        {
          stepNumber: 3,
          title: 'Protecting Our Water & Nature',
          instruction: 'Never waste water or pollute nature. Allah gave us fresh water to cherish and share.',
          arabicTerm: 'الإِحْسَان (Al-Ihsan)',
          arabicTransliteration: 'Al-Ihsan (Excellence & Compassion in Everything)',
          tip: 'Turn off the tap while brushing teeth or making Wudu to save every precious drop.',
          detail: 'Yaqeen Institute highlights that Islamic ethics are deeply tied to environmental stewardship.',
          iconName: 'Sun',
          repeatPhrase: 'I save water and keep nature clean.',
          sensoryTip: 'Feel the cool sensation of water on your hands.',
          actionPrompt: 'Say "Alhamdulillah" for clean water!'
        }
      ],
      activity: {
        title: 'Nature & Animal Care Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the compassion of Prophet Saleh with these 3 gentle tasks.',
        actionItems: [
          'Put out a small bowl of water or crumbs for birds outside, or feed a family pet gently',
          'Practice taking turns with a sibling, friend, or parent during a game',
          'Make sure the water tap is turned off tightly after washing your hands'
        ],
        interestConnection: 'Like a wildlife ranger protecting rare animals in a sanctuary!',
        completionPrompt: 'Check off each item to earn your Wildlife Guardian Badge!'
      },
      reviewQuestion: {
        question: 'What important rule did Prophet Saleh (AS) teach regarding the she-camel and the well?',
        hint: 'Think about fairness, sharing water, and taking turns.',
        options: [
          {
            id: 'opt1',
            text: 'To share the well water fairly and let the she-camel drink on her turn with kindness',
            isCorrect: true,
            explanation: 'Correct! Prophet Saleh taught fair turn-taking and protecting Allah\'s gentle creature.'
          },
          {
            id: 'opt2',
            text: 'To chase the camel away into the hot desert',
            isCorrect: false,
            explanation: 'Saleh warned never to harm or mistreat the camel.'
          },
          {
            id: 'opt3',
            text: 'To keep all the water for only one person',
            isCorrect: false,
            explanation: 'Islam teaches us to share resources fairly with all creatures.'
          }
        ],
        correctAnswerExplanation: 'Prophet Saleh championed animal rights, environmental care, and fair sharing of water.'
      },
      storyContent: {
        title: 'The Valley of the Stone Homes',
        theme: 'Animal Welfare, Fairness & Conservation',
        intro: 'In the red sandstone mountains of Al-Hijr, the people of Thamud carved majestic rooms directly into rock.',
        slides: [
          {
            id: 'saleh_slide_1',
            chapterNumber: 1,
            title: 'The Gentle Sign',
            text: 'Allah sent a magnificent she-camel as a sign of peace. She walked gently through the stone streets, loved by children.',
            interestConnection: 'Gentle animals bring calm and joy to our surroundings.',
            islamicTeaching: 'Kindness to animals is a path to Allah’s pleasure.',
            iconName: 'Heart'
          },
          {
            id: 'saleh_slide_2',
            chapterNumber: 2,
            title: 'The Clear Spring',
            text: 'Prophet Saleh smiled: "One day for her to drink, and one day for you. In return, she shares delicious, pure milk with you all!"',
            interestConnection: 'Fair systems ensure every member of the community thrives.',
            islamicTeaching: 'Justice and compassion must extend to all of Allah’s creation.',
            iconName: 'Droplets'
          }
        ],
        conclusion: 'Saleh taught us that how we treat animals and share resources shows the purity of our hearts.',
        reflectionQuestion: 'How can you show extra love to an animal or pet today?'
      },
      visualContent: {
        title: 'Prophet Saleh Visual PECS',
        subtitle: 'Animal care, water sharing, and kindness',
        cards: [
          {
            stepNumber: 1,
            title: '1. Love Animals',
            simpleSentence: 'Saleh taught gentle care for the she-camel.',
            arabicTerm: 'نَاقَةُ اللَّهِ',
            iconName: 'Heart',
            visualHint: 'Gentle camel standing in peaceful desert'
          },
          {
            stepNumber: 2,
            title: '2. Take Turns',
            simpleSentence: 'Share water fairly by taking turns at the well.',
            arabicTerm: 'سُقْيَاهَا',
            iconName: 'Droplets',
            visualHint: 'Clean water well with happy people taking turns'
          },
          {
            stepNumber: 3,
            title: '3. Save Water',
            simpleSentence: 'Cherish every drop of clean water from Allah.',
            arabicTerm: 'الإِحْسَان',
            iconName: 'Sun',
            visualHint: 'Water droplet shining like a jewel'
          }
        ],
        completionBadge: 'Animal Protector Badge'
      },
      stepContent: {
        title: 'Prophet Saleh Compassion Steps',
        goal: 'Practice turn-taking and protecting animals.',
        steps: [
          {
            stepNumber: 1,
            title: 'Gentle Touch',
            instruction: 'Be extra gentle with any pet, bird, or insect you see.',
            detail: 'Allah notices every act of mercy.',
            iconName: 'Heart',
            repeatPhrase: 'I treat animals with gentle kindness.'
          },
          {
            stepNumber: 2,
            title: 'Share Fairly',
            instruction: 'Take turns nicely during play or sharing snacks.',
            detail: 'Fairness creates a happy environment.',
            iconName: 'Droplets',
            repeatPhrase: 'Sharing is caring.'
          }
        ],
        successMessage: 'MashaAllah! You protected nature like Prophet Saleh!'
      },
      flashcardContent: {
        title: 'Prophet Saleh Flashcards',
        cards: [
          {
            id: 'fc_saleh_1',
            frontTerm: 'What was the special sign given to Prophet Saleh?',
            frontArabic: 'نَاقَةُ اللَّهِ (The She-Camel)',
            backDefinition: 'A miraculous, gentle she-camel sent by Allah to test their kindness and fairness.',
            backInterestAnalogy: 'Like a gentle creature in a sanctuary that teaches humans empathy!',
            iconName: 'Heart'
          },
          {
            id: 'fc_saleh_2',
            frontTerm: 'What is the Islamic rule about water and nature?',
            frontArabic: 'إِحْسَان (Excellence)',
            backDefinition: 'Never waste water, share resources fairly, and care for the environment.',
            backInterestAnalogy: 'Like protecting the life-support system of a space station!',
            iconName: 'Droplets'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Saleh’s lesson supports turn-taking, executive function patience, and fostering pro-social empathy towards animals and shared items.',
        reviewStrategy: 'Use visual timers or "turn tokens" for sharing toys or screens, framing it as the "Saleh Fair Turn" system.',
        repetitionTip: 'Praise gentle touch explicitly: "I love how softly and gently you touched the pet."',
        activitySuggestion: 'Leave a small cup of water outside for birds and observe together quietly.',
        sensoryBreakTip: 'Water sensory bins or watching water ripples can provide soothing visual and tactile regulation.',
        nextFormatRecommendation: 'Try Visual Cards for step-by-step clarity.'
      },
      disclaimer: 'Grounded in Quran (11:61-68, 91:11-15), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  }
];

/**
 * ALL 25 PROPHETS COMBINED IN REVERENT CHRONOLOGICAL ORDER
 */
export const ALL_25_PROPHETS_LIST: ProphetItem[] = [
  ...PROPHETS_DATA,
  ...PROPHETS_PATRIARCHS,
  ...PROPHETS_PATIENCE_LAW,
  ...PROPHETS_KINGS_GUIDES,
  ...PROPHETS_FINAL_ERA
];

// Helper to get all 25 Prophet profiles
export function getAllProphetsList(): ProphetItem[] {
  return ALL_25_PROPHETS_LIST;
}

export function getProphetById(id: string): ProphetItem | undefined {
  return ALL_25_PROPHETS_LIST.find((p) => p.id === id);
}

export function getProphetByNumber(num: number): ProphetItem | undefined {
  return ALL_25_PROPHETS_LIST.find((p) => p.number === num);
}

export const PROPHET_ERAS = [
  { id: 'all', label: 'All 25 Prophets', count: 25, icon: 'Sparkles' },
  { id: 'Early Creation', label: '🌅 Early Creation (1-5)', count: 5, icon: 'Sun' },
  { id: 'The Patriarchs', label: '🌿 The Patriarchs (6-11)', count: 6, icon: 'Heart' },
  { id: 'Patience & Law', label: '🌊 Patience & Law (12-16)', count: 5, icon: 'ShieldCheck' },
  { id: 'Wisdom & Leadership', label: '👑 Wisdom & Kings (17-21)', count: 5, icon: 'Compass' },
  { id: 'Final Messengers', label: '🕊️ Final Messengers (22-25)', count: 4, icon: 'Feather' }
];
