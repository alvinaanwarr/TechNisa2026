import { ProphetItem } from '../../types';
import { SHARED_PEDAGOGICAL_RESEARCH } from '../pedagogicalResearch';

export const PROPHETS_KINGS_GUIDES: ProphetItem[] = [
  // 17. DAWUD (AS)
  {
    id: 'prophet_dawud',
    number: 17,
    nameEnglish: 'Prophet Dawud',
    nameArabic: 'داود عليه السلام',
    epithet: 'Sahib az-Zabur wal-Mulk (The Melodious King & Iron Crafter)',
    era: 'Kings & Guidance',
    quranReferences: [
      {
        surahName: 'Sad',
        surahNumber: 38,
        ayahRange: '17-26',
        url: 'https://quran.com/38/17-26',
        arabicSnippet: 'إِنَّا سَخَّرْنَا الْجِبَالَ مَعَهُ يُسَبِّحْنَ بِالْعَشِيِّ وَالْإِشْرَاقِ • وَالطَّيْرَ مَحْشُورَةً ۖ كُلٌّ لَّهُ أَوَّابٌ',
        englishSnippet: 'Indeed, We subjected the mountains to praise with him in the evening and morning, and the birds assembled, all repeating praise with him.'
      },
      {
        surahName: 'Saba',
        surahNumber: 34,
        ayahRange: '10-11',
        url: 'https://quran.com/34/10-11',
        arabicSnippet: 'وَأَلَنَّا لَهُ الْحَدِيدَ • أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ',
        englishSnippet: 'And We made pliable for him iron, [commanding him]: Make full coats of chain mail and calculate the links precisely.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details Dawud\'s (David) bravery against Goliath (Jalut), his sweet melodious voice reciting the Zabur causing birds and mountains to harmonize in praise, his miracle of pliable iron to craft protective chainmail, and his strict justice as king.',
    bayyinahInsight: 'Nouman Ali Khan notes the rhythm and auditory harmony in Dawud\'s praise: how sound and melodic resonance can elevate focus and spiritual tranquility ("Awwibee ma\'ahu").',
    yaqeenInsight: 'Dr. Omar Suleiman explains that Dawud worked with his own hands to earn his food despite being king: combining high leadership with humble craftsmanship and regular fasting/prayer cycles.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Melodious Praise & Auditory Harmony', 'Craftsmanship & Engineering (Pliable Iron)', 'Humility in Leadership', 'Justice & Fairness', 'Working with One\'s Own Hands'],
    iconName: 'Music',
    summary: 'The king and prophet blessed with a melodious voice that made mountains and birds sing praises of Allah with him, gifted with the miracle of shaping iron with his hands to make protective armor.',
    lesson: {
      id: 'lesson-prophet-dawud',
      topic: 'Prophet Dawud (AS): The Melodious Praise & The Iron Crafter',
      title: 'Prophet Dawud & The Harmony of Nature',
      learningObjective: 'Discover how Prophet Dawud used his sweet voice to praise Allah alongside mountains and birds, and crafted protective armor with precision.',
      introduction: 'Prophet Dawud (AS) was both a noble king and a skilled artisan! When he sang praises of Allah from the sacred Zabur, birds stopped flying in the sky and mountains echoed his melody in harmony. Allah made iron soft like clay in his hands so he could craft protective chainmail.',
      topicKey: 'prophet_dawud',
      ageRange: '7-9',
      learnerNickname: 'Melody Maker',
      selectedInterest: 'Music, Sound, Blacksmithing & Armor',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'auditory', 'short_instructions', 'one_step'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Singing Praises with Nature',
          instruction: 'Prophet Dawud recited the Zabur with a sweet, peaceful voice that filled the hills with joy.',
          arabicTerm: 'يُسَبِّحْنَ بِالْعَشِيِّ وَالْإِشْرَاقِ',
          arabicTransliteration: 'Yusabbihna bil-\'ashiyyi wal-ishraq (Praising in evening and morning - Surah 38:18)',
          tip: 'Chanting rhythmic words of praise (like SubhanAllah) calms your breathing and brings melody into your day.',
          detail: 'Surah Sad describes how birds gathered in flocks above him to join the melody of Dhikr.',
          iconName: 'Sparkles',
          repeatPhrase: 'SubhanAllah wa bihamdihi — Glory and praise be to Allah.',
          sensoryTip: 'Hum a gentle, steady tone and feel the soothing vibration in your throat and chest.',
          actionPrompt: 'Tap to join nature in peaceful melody!'
        },
        {
          stepNumber: 2,
          title: 'The Master Crafter of Iron',
          instruction: 'Allah made iron soft like playdough in Dawud’s hands so he could link rings together into lightweight armor.',
          arabicTerm: 'وَأَلَنَّا لَهُ الْحَدِيدَ',
          arabicTransliteration: 'Wa alanna lahul-hadeed (And We made iron pliable for him - Surah 34:10)',
          tip: 'Making things with your hands (drawing, building, sculpting) is a wonderful way to express creativity.',
          detail: 'Dawud was king, yet he chose to earn his daily meals through his own hard work as a blacksmith.',
          iconName: 'ShieldCheck',
          repeatPhrase: 'I take pride in creating and working with my hands.',
          sensoryTip: 'Squeeze a stress ball or playdough and imagine shaping it with precision.',
          actionPrompt: 'Whisper "Bismillah" and create something great.'
        }
      ],
      activity: {
        title: 'Melody & Crafter Challenge',
        type: 'Hands-On Action',
        instructions: 'Practice the artistic and vocal harmony of Prophet Dawud.',
        actionItems: [
          'Chant "SubhanAllah, Alhamdulillah, Allahu Akbar" in a rhythmic, melodious voice 3 times',
          'Build or mold something using building blocks, clay, or paper',
          'Listen to the sounds of nature outside (birds, wind, rain) and say "Alhamdulillah"'
        ],
        interestConnection: 'Like a master blacksmith and composer crafting legendary gear and anthems!',
        completionPrompt: 'Check off each item to earn your Master Artisan Crown!'
      },
      reviewQuestion: {
        question: 'What special miracle happened when Prophet Dawud (AS) praised Allah in the mountains?',
        hint: 'Think about birds gathering and mountains echoing in harmony.',
        options: [
          {
            id: 'opt1',
            text: 'The mountains echoed and flocks of birds gathered to praise Allah alongside him',
            isCorrect: true,
            explanation: 'Correct! Surah Sad (38:18-19) describes the mountains and birds glorifying Allah with him.'
          },
          {
            id: 'opt2',
            text: 'All the trees turned into chocolate',
            isCorrect: false,
            explanation: 'Nature joined him in melodious, sacred worship of Allah.'
          }
        ],
        correctAnswerExplanation: 'Prophet Dawud’s melodious worship united all of nature in sacred harmony and gratitude.'
      },
      storyContent: {
        title: 'The King of the Mountains',
        theme: 'Melody, Auditory Calming, Craftsmanship & Humility',
        intro: 'In the green valleys of Jerusalem, King Dawud ruled with justice, praised Allah with melody, and crafted iron with his hands.',
        slides: [
          {
            id: 'dawud_slide_1',
            chapterNumber: 1,
            title: 'The Morning Song',
            text: 'At dawn, Dawud’s voice rose over the mountains reciting the Psalms. The hills echoed, and birds paused on branches to listen in reverence.',
            interestConnection: 'Auditory sensory regulation through rhythmic vocalization.',
            islamicTeaching: 'Praising Allah with beauty softens hearts and brings serenity.',
            iconName: 'Sparkles'
          },
          {
            id: 'dawud_slide_2',
            chapterNumber: 2,
            title: 'The Iron Links',
            text: 'In his workshop, iron became soft in his hands. He linked thousands of tiny metal rings together to create armor that kept soldiers safe.',
            interestConnection: 'Fine motor precision and tactile craftsmanship.',
            islamicTeaching: 'Allah loves when someone does a craft with excellence (Ihsan).',
            iconName: 'ShieldCheck'
          }
        ],
        conclusion: 'Dawud showed us that true royalty is singing praises to Allah and using our hands to make helpful things.',
        reflectionQuestion: 'What is your favorite sound in nature that makes you feel peaceful?'
      },
      visualContent: {
        title: 'Prophet Dawud Visual PECS',
        subtitle: 'Melodious praise, iron crafting, and justice',
        cards: [
          {
            stepNumber: 1,
            title: '1. Singing Praise',
            simpleSentence: 'Dawud praised Allah with sweet melody.',
            arabicTerm: 'يُسَبِّحْنَ',
            iconName: 'Sparkles',
            visualHint: 'Birds flying in circle around green mountain'
          },
          {
            stepNumber: 2,
            title: '2. Crafting Armor',
            simpleSentence: 'Dawud shaped iron into protective armor.',
            arabicTerm: 'وَأَلَنَّا لَهُ الْحَدِيدَ',
            iconName: 'ShieldCheck',
            visualHint: 'Hands linking shiny silver chainmail rings'
          }
        ],
        completionBadge: 'Master Artisan Badge'
      },
      stepContent: {
        title: 'Prophet Dawud Action Steps',
        goal: 'Practice rhythmic vocal calm and hands-on making.',
        steps: [
          {
            stepNumber: 1,
            title: 'Rhythmic Dhikr',
            instruction: 'Recite "SubhanAllah" with a steady melodic rhythm.',
            detail: 'Rhythmic chanting regulates heart rate variability.',
            iconName: 'Sparkles',
            repeatPhrase: 'SubhanAllah wa bihamdihi.'
          }
        ],
        successMessage: 'MashaAllah! You joined the beautiful praise of Prophet Dawud!'
      },
      flashcardContent: {
        title: 'Prophet Dawud Flashcards',
        cards: [
          {
            id: 'fc_dawud_1',
            frontTerm: 'What holy book was revealed to Prophet Dawud?',
            frontArabic: 'الزَّبُور (Az-Zabur)',
            backDefinition: 'The Zabur (Psalms) — divine songs of praise, wisdom, and glorification of Allah.',
            backInterestAnalogy: 'The most beautiful book of sacred melodies in history!',
            iconName: 'BookOpen'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Dawud’s lesson harnesses auditory sensory integration, rhythmic vocalization, and fine motor tactile crafting for calming emotional regulation.',
        reviewStrategy: 'Use rhythmic humming or melodic Dhikr during transitions to soothe auditory-sensitive learners.',
        repetitionTip: 'Engage in tactile building (clay, Lego, origami) to develop focus and pride in manual creation.',
        activitySuggestion: 'Play gentle nature soundscapes or anasheed while engaging in hands-on building projects.',
        sensoryBreakTip: 'Vocal humming (OM/Vagus humming) stimulates the vagus nerve and lowers sympathetic arousal.',
        nextFormatRecommendation: 'Try Story Mode for rhythmic listening.'
      },
      disclaimer: 'Grounded in Quran (34:10-11, 38:17-26), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 18. SULAYMAN (AS)
  {
    id: 'prophet_sulayman',
    number: 18,
    nameEnglish: 'Prophet Sulayman',
    nameArabic: 'سليمان عليه السلام',
    epithet: 'Al-Malik ash-Shākir (The Grateful King & Friend of Animals)',
    era: 'Kings & Guidance',
    quranReferences: [
      {
        surahName: 'An-Naml',
        surahNumber: 27,
        ayahRange: '15-19',
        url: 'https://quran.com/27/15-19',
        arabicSnippet: 'فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ',
        englishSnippet: 'So [Solomon] smiled, laughing at her speech, and said: My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents.'
      },
      {
        surahName: 'Sad',
        surahNumber: 38,
        ayahRange: '30-40',
        url: 'https://quran.com/38/30-40',
        arabicSnippet: 'نِعْمَ الْعَبْدُ ۖ إِنَّهُ أَوَّابٌ',
        englishSnippet: 'An excellent servant; indeed, he was one who repeatedly turned back [to Allah].'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details Sulayman\'s (Solomon) unprecedented kingdom: commanding the wind, speaking with birds (Hudhud/Hoopoe) and ants, judging disputes with divine wisdom, inspecting his realm with meticulous attention, and above all, maintaining absolute humility and thanking Allah for every blessing.',
    bayyinahInsight: 'Nouman Ali Khan highlights the emotional sensitivity of Sulayman: stopping an entire royal army so a tiny ant would not be crushed ("La yahtimannakum Sulaymanu wa junooduh"). High status never blinded him to the rights of the smallest creatures.',
    yaqeenInsight: 'Dr. Omar Suleiman notes that Sulayman is the model of gratitude in abundance: when blessed with everything, his immediate reflex was dua: "Rabbi awzi\'ni an ashkura ni\'matak" — recognizing that blessings are a responsibility to serve, not a license to boast.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING
    ],
    coreThemes: ['Understanding Animals & Nature (Ants & Birds)', 'Gratitude in Abundance ("Rabbi Awzi\'ni")', 'Care & Compassion for Small Creatures', 'Wisdom in Leadership', 'Controlling the Wind & Kingdom'],
    iconName: 'Compass',
    summary: 'The great king who understood the languages of birds and ants, who stopped his vast army to protect a tiny ant colony, and whose heart was always overflowing with gratitude to Allah.',
    lesson: {
      id: 'lesson-prophet-sulayman',
      topic: 'Prophet Sulayman (AS): The Ant Kingdom & The Power of Gratitude',
      title: 'Prophet Sulayman & The Secret Language of Animals',
      learningObjective: 'Learn how Prophet Sulayman listened with care to the tiny ant, treated all creatures with kindness, and made his famous du\'a of gratitude.',
      introduction: 'Prophet Sulayman (AS) had the most wondrous kingdom in history! Allah gave him the special superpower to understand the speech of birds and tiny ants. When he heard a little ant warn her colony, Sulayman smiled with joy and stopped his whole army to keep them safe.',
      topicKey: 'prophet_sulayman',
      ageRange: '7-9',
      learnerNickname: 'Animal Friend',
      selectedInterest: 'Animals, Ants, Birds & Kingdoms',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Listening to the Little Ant',
          instruction: 'Prophet Sulayman stopped his entire marching army so not a single ant colony was stepped on.',
          arabicTerm: 'فَتَبَسَّمَ ضَاحِكًا',
          arabicTransliteration: 'Fatabassama dahikan min qawliha (He smiled, amused at her words - Surah 27:19)',
          tip: 'Being kind to small creatures (cats, birds, insects) makes you a true hero of mercy.',
          detail: 'Surah An-Naml shows that even tiny ants communicate and care for their community.',
          iconName: 'Smile',
          repeatPhrase: 'I am gentle and kind to all living creatures.',
          sensoryTip: 'Smile softly and imagine observing a tiny ant marching safely in the grass.',
          actionPrompt: 'Tap to protect the tiny creatures!'
        },
        {
          stepNumber: 2,
          title: 'The Great Gratitude Dua',
          instruction: 'Sulayman immediately made du\'a: "My Lord, inspire me to be grateful for all Your blessings on me and my parents."',
          arabicTerm: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ',
          arabicTransliteration: 'Rabbi awzi\'ni an ashkura ni\'matak (My Lord, enable me to thank You - Surah 27:19)',
          tip: 'Whenever you get something wonderful, saying "Alhamdulillah" keeps the blessing shining.',
          detail: 'Yaqeen Institute highlights that gratitude rewires our brain for lasting happiness and optimism.',
          iconName: 'Heart',
          repeatPhrase: 'Rabbi awzi\'ni an ashkura ni\'matak — O Allah, help me be truly grateful.',
          sensoryTip: 'Place both hands over your heart and whisper three things you are grateful for.',
          actionPrompt: 'Whisper "Alhamdulillah" for your family and toys.'
        }
      ],
      activity: {
        title: 'Animal Kindness & Gratitude Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the gentle wisdom of Prophet Sulayman today.',
        actionItems: [
          'Step outside and look closely at a bird or insect with gentle respect',
          'Recite Prophet Sulayman’s dua: "Rabbi awzi\'ni an ashkura ni\'matak"',
          'Thank your parents or teachers for one specific thing they did for you today'
        ],
        interestConnection: 'Like a wildlife guardian who communicates with all species in the magical realm!',
        completionPrompt: 'Check off each item to earn your Guardian of Nature Badge!'
      },
      reviewQuestion: {
        question: 'What did Prophet Sulayman (AS) do when he heard the tiny ant warning her colony?',
        hint: 'Think about smiling with gratitude and protecting the ants.',
        options: [
          {
            id: 'opt1',
            text: 'He smiled with warmth, stopped his army to keep them safe, and thanked Allah for His blessings',
            isCorrect: true,
            explanation: 'Correct! Surah An-Naml (27:19) records his smile, gentle care, and heartfelt prayer of gratitude.'
          },
          {
            id: 'opt2',
            text: 'He ignored them and marched right through',
            isCorrect: false,
            explanation: 'Prophet Sulayman had immense compassion and protected even the smallest insects.'
          }
        ],
        correctAnswerExplanation: 'Prophet Sulayman showed that true greatness is being gentle to the small and continuously grateful to Allah.'
      },
      storyContent: {
        title: 'The Valley of the Ants',
        theme: 'Animal Empathy, Gratitude, Nature & Leadership',
        intro: 'King Sulayman rode with his majestic companions across the golden plains, listening to the secrets of nature.',
        slides: [
          {
            id: 'sulayman_slide_1',
            chapterNumber: 1,
            title: 'The Voice in the Grass',
            text: 'As the horses approached, a queen ant called out: "Enter your homes, O ants, so Sulayman and his army do not crush you!"',
            interestConnection: 'Discovering animal communication systems.',
            islamicTeaching: 'Every creature in the heavens and earth praises Allah.',
            iconName: 'Compass'
          },
          {
            id: 'sulayman_slide_2',
            chapterNumber: 2,
            title: 'The King’s Smile',
            text: 'Sulayman heard her clear voice on the wind. He smiled warmly, halted the whole army, and whispered his glorious prayer of thanks to Allah.',
            interestConnection: 'Practicing humility regardless of how much power you possess.',
            islamicTeaching: 'Gratitude is the highest form of worship in prosperity.',
            iconName: 'Heart'
          }
        ],
        conclusion: 'Sulayman taught us that no creature is too small to deserve kindness, and no blessing is too small to thank Allah for.',
        reflectionQuestion: 'What is an animal you love learning about?'
      },
      visualContent: {
        title: 'Prophet Sulayman Visual PECS',
        subtitle: 'Animal kindness, gratitude, and care',
        cards: [
          {
            stepNumber: 1,
            title: '1. Help Small Animals',
            simpleSentence: 'Sulayman protected the tiny ant colony.',
            arabicTerm: 'فَتَبَسَّمَ',
            iconName: 'Smile',
            visualHint: 'Smiling king looking gently at an ant in the grass'
          },
          {
            stepNumber: 2,
            title: '2. Say Thank You',
            simpleSentence: 'Sulayman prayed with deep gratitude to Allah.',
            arabicTerm: 'أَشْكُرَ نِعْمَتَكَ',
            iconName: 'Heart',
            visualHint: 'Heart full of golden light of gratitude'
          }
        ],
        completionBadge: 'Friend of Nature Badge'
      },
      stepContent: {
        title: 'Prophet Sulayman Gratitude Steps',
        goal: 'Practice empathy for living things and daily gratitude.',
        steps: [
          {
            stepNumber: 1,
            title: 'Daily Gratitude Check',
            instruction: 'Name 3 things you love right now.',
            detail: 'Gratitude releases dopamine and enhances mood.',
            iconName: 'Heart',
            repeatPhrase: 'Alhamdulillah for every blessing.'
          }
        ],
        successMessage: 'MashaAllah! You lived the kind gratitude of Prophet Sulayman!'
      },
      flashcardContent: {
        title: 'Prophet Sulayman Flashcards',
        cards: [
          {
            id: 'fc_sulayman_1',
            frontTerm: 'What special ability did Allah give Prophet Sulayman?',
            frontArabic: 'مَنطِقَ الطَّيْرِ (Speech of Birds)',
            backDefinition: 'Understanding the languages of birds, ants, and animals, and commanding the wind.',
            backInterestAnalogy: 'The ultimate universal translator of all nature!',
            iconName: 'Compass'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Sulayman’s lesson teaches perspective-taking, animal empathy, and neurobiologically grounded gratitude rituals that alleviate entitlement and emotional rigidity.',
        reviewStrategy: 'Foster special interest engagement with animals/insects while tying it to Sulayman\'s gentle curiosity.',
        repetitionTip: 'Make "Gratitude 3-Count" a daily bedtime or dinner routine.',
        activitySuggestion: 'Set up an ant farm or bird feeder outside the window to observe creature behavior quietly.',
        sensoryBreakTip: 'Observing birds or fish in an aquarium provides low-demand, calming visual regulation.',
        nextFormatRecommendation: 'Try Interactive Cards Mode for animal trivia exploration.'
      },
      disclaimer: 'Grounded in Quran (27:15-19, 38:30-40), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 19. ILYAS (AS)
  {
    id: 'prophet_ilyas',
    number: 19,
    nameEnglish: 'Prophet Ilyas',
    nameArabic: 'إلياس عليه السلام (إيليا)',
    epithet: 'Al-Murabit fi Sabeelillah (The Steadfast Defender of Tawhid)',
    era: 'Kings & Guidance',
    quranReferences: [
      {
        surahName: 'As-Saffat',
        surahNumber: 37,
        ayahRange: '123-132',
        url: 'https://quran.com/37/123-132',
        arabicSnippet: 'وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ • إِذْ قَالَ لِقَوْمِهِ أَلَا تَتَّقُونَ • أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ',
        englishSnippet: 'And indeed, Elias was of the messengers, when he said to his people: Will you not fear Allah? Do you call upon Ba\'l and leave the best of creators?'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir relates that Prophet Ilyas (Elijah) called the people of Baalbek back to pure monotheism, warning them against worshipping false idols. He showed extraordinary perseverance and courage, remaining steadfast in the wilderness and mountains.',
    bayyinahInsight: 'Nouman Ali Khan highlights the question in Surah As-Saffat: "Atad\'oona Ba\'lan wa tadharoona ahsan al-khaliqeen?" (Do you call upon lifeless statues and leave the Best of Creators?). Ilyas used clear, rational questions to break through cognitive stubbornness.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights the quiet resilience of Ilyas: standing firm when truth is unpopular, finding spiritual nourishment in solitude and nature.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION
    ],
    coreThemes: ['Pure Tawhid (One Creator)', 'Rational Questioning', 'Steadfastness Against Popular Pressure', 'Patience in Solitude & Nature', 'Courageous Voice for Truth'],
    iconName: 'Mountain',
    summary: 'The brave prophet who stood firm on the mountain heights, calling people away from lifeless idols and back to the Best of Creators with clear logic and steadfast patience.',
    lesson: {
      id: 'lesson-prophet-ilyas',
      topic: 'Prophet Ilyas (AS): Standing Firm for the Best of Creators',
      title: 'Prophet Ilyas & The Courage to Stand Alone',
      learningObjective: 'Understand how Prophet Ilyas stayed loyal to Allah, asked smart questions, and found peace in the mountains and quiet nature.',
      introduction: 'Prophet Ilyas (AS) was brave like a mountain! Even when everyone around him was following silly trends and worshipping statues, Ilyas asked with a clear mind: "Why worship stones when Allah is the Best of Creators?"',
      topicKey: 'prophet_ilyas',
      ageRange: '7-9',
      learnerNickname: 'Mountain Climber',
      selectedInterest: 'Mountains, Climbing & Nature Expeditions',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'The Best of Creators (Ahsan al-Khaliqeen)',
          instruction: 'Prophet Ilyas taught that only Allah creates the stars, mountains, trees, and animals with perfection.',
          arabicTerm: 'أَحْسَنَ الْخَالِقِينَ',
          arabicTransliteration: 'Ahsan al-Khaliqeen (The Best of Creators - Surah 37:125)',
          tip: 'When you see a majestic tree or tall hill, remember Allah made it with wonderful care.',
          detail: 'Surah As-Saffat sends eternal peace upon Ilyas for his righteous devotion.',
          iconName: 'Mountain',
          repeatPhrase: 'Allah is the Best of Creators; He made everything with beauty.',
          sensoryTip: 'Stand tall with your feet wide and sturdy like an immovable mountain.',
          actionPrompt: 'Tap to stand tall like Prophet Ilyas!'
        },
        {
          stepNumber: 2,
          title: 'Peace Upon Ilyas (Salamun \'ala Ilyaseen)',
          instruction: 'Allah sent a special greeting of peace upon Prophet Ilyas for his unwavering loyalty.',
          arabicTerm: 'سَلَامٌ عَلَىٰ إِلْ يَاسِينَ',
          arabicTransliteration: 'Salamun \'ala Il-Yaseen (Peace be upon Elias - Surah 37:130)',
          tip: 'When you choose the right path even when it’s hard, Allah fills your heart with peace.',
          detail: 'Ibn Kathir notes that Ilyas was a beacon of light in difficult times.',
          iconName: 'Sparkles',
          repeatPhrase: 'I choose the truth and Allah gives me inner peace.',
          sensoryTip: 'Breathe in cool fresh mountain air and exhale slowly.',
          actionPrompt: 'Whisper "Salamun \'ala Ilyaseen".'
        }
      ],
      activity: {
        title: 'Mountain Steadfastness Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the brave integrity of Prophet Ilyas.',
        actionItems: [
          'Stand in a sturdy "Mountain Pose" for 20 seconds, feeling strong and calm',
          'Notice something in nature (a rock, leaf, or cloud) and praise the Best of Creators',
          'Make a conscious choice to do what is right, even if others are being silly'
        ],
        interestConnection: 'Like a mountain explorer who climbs the highest peak with unwavering focus!',
        completionPrompt: 'Check off each item to earn your Mountain Peak Trophy!'
      },
      reviewQuestion: {
        question: 'What did Prophet Ilyas (AS) remind his people about Allah in Surah As-Saffat?',
        hint: 'Think about Allah being the "Best of Creators".',
        options: [
          {
            id: 'opt1',
            text: 'That Allah is "Ahsan al-Khaliqeen" (The Best of Creators) who made all the universe',
            isCorrect: true,
            explanation: 'Correct! Surah As-Saffat (37:125) honors Allah as the Best of Creators.'
          },
          {
            id: 'opt2',
            text: 'That statues made of stone can answer prayers',
            isCorrect: false,
            explanation: 'Statues cannot hear or help; only Allah is the Eternal Creator.'
          }
        ],
        correctAnswerExplanation: 'Prophet Ilyas guided people to the truth that Allah alone is the Best of Creators.'
      },
      storyContent: {
        title: 'The Mountain Messenger',
        theme: 'Integrity, Nature, Steadfastness & Monotheism',
        intro: 'High upon the cliffs, Prophet Ilyas stood firm in his faith, guiding hearts towards the truth.',
        slides: [
          {
            id: 'ilyas_slide_1',
            chapterNumber: 1,
            title: 'The Question of Reason',
            text: 'Ilyas asked: "Why call on lifeless statues when Allah made the sky, rain, and mountains?" His words were clear like crystal water.',
            interestConnection: 'Logical reasoning and clarity.',
            islamicTeaching: 'Faith is rooted in reflection, reason, and pure monotheism.',
            iconName: 'Mountain'
          }
        ],
        conclusion: 'Ilyas proved that standing with Allah is stronger than the highest mountain.',
        reflectionQuestion: 'How can you stand strong when doing the right thing?'
      },
      visualContent: {
        title: 'Prophet Ilyas Visual Cards',
        subtitle: 'Steadfast faith and the Best of Creators',
        cards: [
          {
            stepNumber: 1,
            title: '1. Best Creator',
            simpleSentence: 'Allah made all mountains and stars.',
            arabicTerm: 'أَحْسَنَ الْخَالِقِينَ',
            iconName: 'Mountain',
            visualHint: 'Majestic mountain peak reaching towards stars'
          },
          {
            stepNumber: 2,
            title: '2. Peace & Truth',
            simpleSentence: 'Peace be upon Prophet Ilyas.',
            arabicTerm: 'سَلَامٌ عَلَىٰ إِلْ يَاسِينَ',
            iconName: 'Sparkles',
            visualHint: 'Golden halo of peace over the mountain'
          }
        ],
        completionBadge: 'Mountain Champion Badge'
      },
      stepContent: {
        title: 'Prophet Ilyas Action Steps',
        goal: 'Practice standing firm and appreciating nature.',
        steps: [
          {
            stepNumber: 1,
            title: 'Mountain Grounding',
            instruction: 'Plant your feet firmly and take 3 steady breaths.',
            detail: 'Proprioceptive grounding calms the motor nervous system.',
            iconName: 'Mountain',
            repeatPhrase: 'I am grounded, calm, and strong.'
          }
        ],
        successMessage: 'MashaAllah! You stood with mountain strength like Prophet Ilyas!'
      },
      flashcardContent: {
        title: 'Prophet Ilyas Flashcards',
        cards: [
          {
            id: 'fc_ilyas_1',
            frontTerm: 'What title does Allah give Himself in Prophet Ilyas’s story?',
            frontArabic: 'أَحْسَنُ الخَالِقِينَ',
            backDefinition: 'The Best of Creators — the Supreme Maker of all life and beauty in the universe.',
            backInterestAnalogy: 'The master architect and designer of all galaxies!',
            iconName: 'Mountain'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Ilyas’s story supports autonomy, standing firm against peer pressure, and finding peace in nature-based sensory regulation.',
        reviewStrategy: 'Use the "Mountain Pose" whenever physical restlessness or anxiety occurs.',
        repetitionTip: 'Reinforce: "We are proud of doing what is right, just like Prophet Ilyas."',
        activitySuggestion: 'Go on a nature walk or collect smooth stones, noting how Allah designed natural textures.',
        sensoryBreakTip: 'Standing barefoot on carpet or grass (grounding) resets tactile input.',
        nextFormatRecommendation: 'Try Flashcards Mode for quick review.'
      },
      disclaimer: 'Grounded in Quran (37:123-132), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 20. AL-YASA (AS)
  {
    id: 'prophet_alyasa',
    number: 20,
    nameEnglish: 'Prophet Al-Yasa',
    nameArabic: 'اليسع عليه السلام (إليشع)',
    epithet: 'Min al-Akhyār (The Righteous Mentor & Outstanding Leader)',
    era: 'Kings & Guidance',
    quranReferences: [
      {
        surahName: 'Al-An\'am',
        surahNumber: 6,
        ayahRange: '86',
        url: 'https://quran.com/6/86',
        arabicSnippet: 'وَإِسْمَاعِيلَ وَالْيَسَعَ وَيُونُسَ وَلُوطًا ۖ وَكُلًّا فَضَّلْنَا عَلَى الْعَالَمِينَ',
        englishSnippet: 'And Ismail and Elisha and Jonah and Lot, and all [of them] We preferred over the worlds.'
      },
      {
        surahName: 'Sad',
        surahNumber: 38,
        ayahRange: '48',
        url: 'https://quran.com/38/48',
        arabicSnippet: 'وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ ۖ وَكُلٌّ مِّنَ الْأَخْيَارِ',
        englishSnippet: 'And remember Ismail, Elisha, and Dhul-Kifl, and all are among the outstanding.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir records that Al-Yasa (Elisha) was a faithful companion and successor to Ilyas. He continued the sacred work of teaching, healing, mentoring students, and guiding the community with steady, exemplary character.',
    bayyinahInsight: 'Nouman Ali Khan highlights the Qur\'anic classification "Min al-Akhyar" (Among the outstanding/chosen): showing that continuing good work through mentorship and sustained consistency is a supreme virtue.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights the quiet leadership of Al-Yasa: being a dependable successor who keeps good traditions alive without needing personal fame or spotlight.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED
    ],
    coreThemes: ['Mentorship & Learning from Teachers', 'Continuing Good Work', 'Ranked Among the Outstanding (Al-Akhyar)', 'Steady Reliability', 'Quiet Leadership'],
    iconName: 'GraduationCap',
    summary: 'The dedicated companion and prophet praised in the Quran among the "outstanding," who continued the noble work of teaching, mentoring, and guiding with steady reliability.',
    lesson: {
      id: 'lesson-prophet-alyasa',
      topic: 'Prophet Al-Yasa (AS): The Outstanding Learner & Mentor',
      title: 'Prophet Al-Yasa & The Joy of Learning and Helping',
      learningObjective: 'Learn how Prophet Al-Yasa became an outstanding leader by listening closely to his teachers, helping others learn, and keeping good habits going.',
      introduction: 'Prophet Al-Yasa (AS) was praised by Allah as one of the "Akhyar" (the most outstanding people in character)! He loved learning from his teachers and then turning around to help younger students succeed. He teaches us that being a great learner and helper is wonderful.',
      topicKey: 'prophet_alyasa',
      ageRange: '7-9',
      learnerNickname: 'Bright Scholar',
      selectedInterest: 'Learning, Mentoring, Books & Badges',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Among the Outstanding (Min al-Akhyar)',
          instruction: 'Prophet Al-Yasa did his work with care, focus, and excellence every single day.',
          arabicTerm: 'مِّنَ الْأَخْيَارِ',
          arabicTransliteration: 'Min al-Akhyar (Among the Best & Outstanding - Surah 38:48)',
          tip: 'When you try your best on a project, Allah notices and blesses your effort.',
          detail: 'Surah Al-An\'am ranks Al-Yasa among the exalted messengers of Allah.',
          iconName: 'Sparkles',
          repeatPhrase: 'I do my best with focus and care.',
          sensoryTip: 'Give yourself a double thumbs up for trying your best.',
          actionPrompt: 'Tap to unlock the Outstanding Scholar star!'
        },
        {
          stepNumber: 2,
          title: 'Keep Good Traditions Going',
          instruction: 'When a teacher or parent teaches you something good, practice it and pass it on to a friend.',
          arabicTerm: 'وَكُلًّا فَضَّلْنَا',
          arabicTransliteration: 'Kullan faddalna (All We favored with guidance - Surah 6:86)',
          tip: 'Sharing your knowledge makes you smarter and helps everyone around you.',
          detail: 'Ibn Kathir notes that Al-Yasa continued Ilyas’s mission with pure dedication.',
          iconName: 'Heart',
          repeatPhrase: 'I learn with joy and share with kindness.',
          sensoryTip: 'Smile and open your hands like opening a treasure book of knowledge.',
          actionPrompt: 'Say "Alhamdulillah for knowledge!"'
        }
      ],
      activity: {
        title: 'Outstanding Learner Challenge',
        type: 'Hands-On Action',
        instructions: 'Practice the mentorship spirit of Prophet Al-Yasa.',
        actionItems: [
          'Teach one fun fact or skill you know to a parent, sibling, or friend',
          'Listen carefully to one full instruction from a teacher or parent without interrupting',
          'Say: "Alhamdulillah for the gift of learning"'
        ],
        interestConnection: 'Like leveling up from an apprentice to a master trainer who guides others!',
        completionPrompt: 'Check off each item to earn your Outstanding Scholar Medal!'
      },
      reviewQuestion: {
        question: 'What special title does the Quran give to Prophet Al-Yasa (AS) in Surah Sad?',
        hint: 'Think about being among the "outstanding" and best.',
        options: [
          {
            id: 'opt1',
            text: '"Min al-Akhyar" (Among the outstanding and chosen people of excellence)',
            isCorrect: true,
            explanation: 'Correct! Surah Sad (38:48) praises Al-Yasa among the outstanding (Al-Akhyar).'
          },
          {
            id: 'opt2',
            text: 'The one who quit learning',
            isCorrect: false,
            explanation: 'Al-Yasa was a dedicated learner, mentor, and steadfast prophet.'
          }
        ],
        correctAnswerExplanation: 'Prophet Al-Yasa is celebrated in the Quran as one of the outstanding models of character and learning.'
      },
      storyContent: {
        title: 'The Faithful Torchbearer',
        theme: 'Mentorship, Learning, Consistency & Excellence',
        intro: 'Prophet Al-Yasa listened closely, practiced good manners, and became a beacon of guidance.',
        slides: [
          {
            id: 'alyasa_slide_1',
            chapterNumber: 1,
            title: 'The Dedicated Student',
            text: 'Al-Yasa learned with an attentive heart and keen mind. When it was his turn to guide, he helped everyone with patience and wisdom.',
            interestConnection: 'Lifelong learning and knowledge mastery.',
            islamicTeaching: 'Seeking knowledge is a sacred obligation for every Muslim.',
            iconName: 'GraduationCap'
          }
        ],
        conclusion: 'Al-Yasa showed us that true greatness is being a lifelong learner and helping others succeed.',
        reflectionQuestion: 'What is something cool you learned recently?'
      },
      visualContent: {
        title: 'Prophet Al-Yasa Visual PECS',
        subtitle: 'Learning, mentorship, and excellence',
        cards: [
          {
            stepNumber: 1,
            title: '1. Love Learning',
            simpleSentence: 'Al-Yasa learned with dedication and joy.',
            arabicTerm: 'مِّنَ الْأَخْيَارِ',
            iconName: 'GraduationCap',
            visualHint: 'Open book with shining light of knowledge'
          },
          {
            stepNumber: 2,
            title: '2. Help Others',
            simpleSentence: 'Al-Yasa shared knowledge with kindness.',
            arabicTerm: 'فَضَّلْنَا',
            iconName: 'Heart',
            visualHint: 'Mentor guiding student with smile'
          }
        ],
        completionBadge: 'Outstanding Scholar Badge'
      },
      stepContent: {
        title: 'Prophet Al-Yasa Learning Steps',
        goal: 'Practice active listening and sharing knowledge.',
        steps: [
          {
            stepNumber: 1,
            title: 'Active Listening',
            instruction: 'Look at the speaker and listen to the end.',
            detail: 'Focus increases retention and reduces errors.',
            iconName: 'GraduationCap',
            repeatPhrase: 'I listen with my heart and mind.'
          }
        ],
        successMessage: 'MashaAllah! You learned with excellence like Prophet Al-Yasa!'
      },
      flashcardContent: {
        title: 'Prophet Al-Yasa Flashcards',
        cards: [
          {
            id: 'fc_alyasa_1',
            frontTerm: 'What does "Al-Akhyar" mean in the Quran?',
            frontArabic: 'الأَخْيَار',
            backDefinition: 'The Outstanding, Chosen, and Best — people of excellent character and steadfast good deeds.',
            backInterestAnalogy: 'The All-Star Hall of Fame of noble character!',
            iconName: 'Sparkles'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Al-Yasa’s lesson fosters executive function study skills, active listening, and peer mentorship.',
        reviewStrategy: 'Invite your child to "be the teacher" and explain a concept to you (the Feynman technique).',
        repetitionTip: 'Praise process and effort: "You worked with focus and excellence, just like Al-Yasa!"',
        activitySuggestion: 'Create a mini "teach-back" game where your child demonstrates a favorite hobby.',
        sensoryBreakTip: 'Stretching or desk push-ups between study tasks improves cognitive alertness.',
        nextFormatRecommendation: 'Try Checklist Mode for organized learning.'
      },
      disclaimer: 'Grounded in Quran (6:86, 38:48), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 21. YUNUS (AS)
  {
    id: 'prophet_yunus',
    number: 21,
    nameEnglish: 'Prophet Yunus',
    nameArabic: 'يونس عليه السلام (ذو النون)',
    epithet: 'Dhun-Nun (The Man of the Whale & Champion of Repentance)',
    era: 'Kings & Guidance',
    quranReferences: [
      {
        surahName: 'Al-Anbiya',
        surahNumber: 21,
        ayahRange: '87-88',
        url: 'https://quran.com/21/87-88',
        arabicSnippet: 'فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ • فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ ۚ وَكَذَٰلِكَ نُنجِي الْمُؤْمِنِينَ',
        englishSnippet: 'And he called out within the darknesses: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." So We responded to him and saved him from the distress. And thus do We save the believers.'
      },
      {
        surahName: 'As-Saffat',
        surahNumber: 37,
        ayahRange: '139-148',
        url: 'https://quran.com/37/139-148',
        arabicSnippet: 'فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ • لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ',
        englishSnippet: 'And had he not been of those who praise Allah, he would have remained inside its belly until the Day of Resurrection.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details Yunus\'s (Jonah) story: leaving Nineveh in frustration, the stormy sea, the casting of lots, being swallowed whole by the gentle whale, praying from the three layers of darkness (the night, the deep sea, the whale\'s belly), his miraculous prayer, being brought safely to shore under a gourd vine (Yaqteen), and returning to see 100,000 believers embrace faith.',
    bayyinahInsight: 'Nouman Ali Khan highlights the therapeutic transformation inside the whale: Yunus took complete personal responsibility ("Inni kuntu minaz-zalimeen") without blaming external circumstances. The whale became a sensory-isolated sanctuary of reflection and restoration.',
    yaqeenInsight: 'Dr. Omar Suleiman explains that Yunus proves no situation is hopeless: the dua of Yunus is the greatest antidote for claustrophobia, panic, and distress ("Najaynahu minal-gham"). Past Dhikr protects you in present emergencies.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED
    ],
    coreThemes: ['Taking Personal Responsibility', 'The Ultimate Dua for Relief ("La ilaha illa Anta...")', 'Sensory Regulation in Darkness/Solitude', 'Second Chances & Redemption', 'The Whale as a Safe Sanctuary'],
    iconName: 'Fish',
    summary: 'The beloved prophet who journeyed into the deep blue ocean, prayed from the gentle whale’s belly with the ultimate words of hope, and taught us that taking responsibility brings miraculous second chances.',
    lesson: {
      id: 'lesson-prophet-yunus',
      topic: 'Prophet Yunus (AS): Inside the Gentle Whale & The Golden Dua',
      title: 'Prophet Yunus & The Greatest Dua of Hope',
      learningObjective: 'Learn how Prophet Yunus found calm inside the whale, took responsibility for his mistake, and recited the golden dua that brings relief from distress.',
      introduction: 'Prophet Yunus (AS) had an incredible deep-sea adventure! When he felt frustrated and left his city, a giant gentle whale scooped him safely into its belly. In the quiet, dark ocean depths, Yunus made the most famous du\'a of repentance, and Allah brought him safely back to shore!',
      topicKey: 'prophet_yunus',
      ageRange: '7-9',
      learnerNickname: 'Ocean Explorer',
      selectedInterest: 'Ocean, Whales, Submarines & Deep Sea',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'low_stimulation', 'one_step', 'storytelling'],
      isCalmMode: true,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'The Safe Whale Sanctuary',
          instruction: 'Inside the quiet whale, Yunus took deep breaths in the dark, calming his racing heartbeat.',
          arabicTerm: 'فِي الظُّلُمَاتِ',
          arabicTransliteration: 'Fiz-zulumat (Within the quiet darknesses - Surah 21:87)',
          tip: 'When you make a mistake or feel frustrated, taking a quiet time-in helps you reset and think clearly.',
          detail: 'Allah commanded the whale not to harm a single bone or tooth of Yunus.',
          iconName: 'Fish',
          repeatPhrase: 'A quiet break helps me reset and make good choices.',
          sensoryTip: 'Dim the lights or close your eyes and feel the peaceful quiet around you.',
          actionPrompt: 'Tap to enter the calm submarine sanctuary!'
        },
        {
          stepNumber: 2,
          title: 'The Golden Dua of Relief',
          instruction: 'Prophet Yunus recited the most powerful du\'a for calming fear and asking Allah for help.',
          arabicTerm: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
          arabicTransliteration: 'La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen (Surah 21:87)',
          tip: 'Saying "I made a mistake, I am sorry" is brave, honest, and brings immediate relief.',
          detail: 'Prophet Muhammad (ﷺ) said: "No Muslim recites this dua in distress except that Allah relieves them."',
          iconName: 'Sparkles',
          repeatPhrase: 'La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen.',
          sensoryTip: 'Place your hand over your heart and whisper the dua with soft sincerity.',
          actionPrompt: 'Whisper Yunus\'s golden dua.'
        },
        {
          stepNumber: 3,
          title: 'The Sweet Second Chance',
          instruction: 'The gentle whale swam to the sunny shore, and Allah grew a leafy green gourd plant to shelter Yunus.',
          arabicTerm: 'فَاسْتَجَبْنَا لَهُ',
          arabicTransliteration: 'Fastajabna lahu (So We responded to him & saved him - Surah 21:88)',
          tip: 'Mistakes are not the end—Allah always gives us fresh second chances to try again.',
          detail: 'Yunus returned to Nineveh and guided over 100,000 happy believers.',
          iconName: 'Sun',
          repeatPhrase: 'Allah gives second chances, and I can always try again.',
          sensoryTip: 'Open your eyes, take a deep breath of fresh air, and smile.',
          actionPrompt: 'Say "Alhamdulillah for second chances!"'
        }
      ],
      activity: {
        title: 'Deep Sea Hope & Responsibility Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the calming wisdom of Prophet Yunus today.',
        actionItems: [
          'Practice saying "I am sorry, I will do better next time" for a small mistake',
          'Recite the golden dua: "La ilaha illa Anta Subhanaka inni kuntu minaz-zalimeen"',
          'Take a 1-minute "Whale Sanctuary Break" in a cozy, dim, quiet corner to relax'
        ],
        interestConnection: 'Like a submarine surfacing safely after a deep ocean dive with fresh energy!',
        completionPrompt: 'Check off each item to earn your Deep Sea Navigator Star!'
      },
      reviewQuestion: {
        question: 'What did Prophet Yunus (AS) say inside the whale that caused Allah to rescue him?',
        hint: 'Think about acknowledging Allah\'s perfection and taking responsibility: "La ilaha illa Anta..."',
        options: [
          {
            id: 'opt1',
            text: '"La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen" (There is no god but You, Glory be to You, I was of the wrongdoers)',
            isCorrect: true,
            explanation: 'Correct! Surah Al-Anbiya (21:87) records this timeless, comforting prayer of repentance and relief.'
          },
          {
            id: 'opt2',
            text: '"It was everyone else\'s fault, not mine"',
            isCorrect: false,
            explanation: 'Prophet Yunus took full personal responsibility, which is why Allah loved and rescued him.'
          }
        ],
        correctAnswerExplanation: 'Prophet Yunus taught us the superpower of taking ownership of our mistakes and turning to Allah with sincere praise.'
      },
      storyContent: {
        title: 'The Sanctuary in the Deep Blue',
        theme: 'Repentance, Sensory Calming, Ownership & Second Chances',
        intro: 'In the deep ocean currents, a great gentle whale swam under the moonlight, carrying a prophet inside a sanctuary of reflection.',
        slides: [
          {
            id: 'yunus_slide_1',
            chapterNumber: 1,
            title: 'The Dark Ocean Sanctuary',
            text: 'Inside the whale, surrounded by the gentle rhythm of the sea, Yunus reflected on his actions. He felt the quiet peace of the deep waters.',
            interestConnection: 'Sensory reduction and deep-pressure calming.',
            islamicTeaching: 'Solitude and reflection bring clarity to the soul.',
            iconName: 'Fish'
          },
          {
            id: 'yunus_slide_2',
            chapterNumber: 2,
            title: 'The Light of Hope',
            text: 'Yunus called out: "La ilaha illa Anta, Subhanaka!" The angels heard his prayer rising through the waves. The whale swam gently to shore and placed him safely on the warm sand under a leafy vine.',
            interestConnection: 'Safe recovery and second chances.',
            islamicTeaching: 'Allah rescues the believers from every dark storm.',
            iconName: 'Sun'
          }
        ],
        conclusion: 'Yunus taught us that no matter how deep the ocean or how big the mistake, Allah’s mercy is always waiting for our sincere prayer.',
        reflectionQuestion: 'When you feel overwhelmed, how does sitting in a quiet cozy spot help you feel better?'
      },
      visualContent: {
        title: 'Prophet Yunus Visual PECS',
        subtitle: 'Whale sanctuary, golden dua, and fresh start',
        cards: [
          {
            stepNumber: 1,
            title: '1. Quiet Reset',
            simpleSentence: 'Yunus took a quiet break inside the whale.',
            arabicTerm: 'فِي الظُّلُمَاتِ',
            iconName: 'Fish',
            visualHint: 'Gentle blue whale swimming peacefully in ocean'
          },
          {
            stepNumber: 2,
            title: '2. Golden Dua',
            simpleSentence: 'Yunus prayed "La ilaha illa Anta Subhanaka".',
            arabicTerm: 'لَّا إِلَٰهَ إِلَّا أَنتَ',
            iconName: 'Sparkles',
            visualHint: 'Glowing golden light of prayer under water'
          },
          {
            stepNumber: 3,
            title: '3. Fresh Start',
            simpleSentence: 'Allah brought Yunus safely to the warm shore.',
            arabicTerm: 'فَاسْتَجَبْنَا لَهُ',
            iconName: 'Sun',
            visualHint: 'Sunny beach with leafy green plant'
          }
        ],
        completionBadge: 'Deep Sea Navigator Badge'
      },
      stepContent: {
        title: 'Prophet Yunus Comfort Steps',
        goal: 'Practice the quiet sanctuary reset and the golden dua.',
        steps: [
          {
            stepNumber: 1,
            title: 'The Whale Time-In',
            instruction: 'Sit in a quiet space and take 3 deep breaths.',
            detail: 'Sensory reduction lowers cognitive overload.',
            iconName: 'Fish',
            repeatPhrase: 'I am safe, calm, and resetting.'
          },
          {
            stepNumber: 2,
            title: 'Recite the Golden Dua',
            instruction: 'Whisper "La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimeen."',
            detail: 'Spiritual grounding dispels emotional distress.',
            iconName: 'Sparkles',
            repeatPhrase: 'La ilaha illa Anta Subhanaka.'
          }
        ],
        successMessage: 'MashaAllah! You found the golden peace of Prophet Yunus!'
      },
      flashcardContent: {
        title: 'Prophet Yunus Flashcards',
        cards: [
          {
            id: 'fc_yunus_1',
            frontTerm: 'What is the Golden Du\'a of Prophet Yunus?',
            frontArabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
            backDefinition: '"There is no god but You; Exalted are You. Indeed, I have been of the wrongdoers."',
            backInterestAnalogy: 'The master distress-relief code that unlocks immediate calm and rescue!',
            iconName: 'Sparkles'
          },
          {
            id: 'fc_yunus_2',
            frontTerm: 'What does "Dhun-Nun" mean?',
            frontArabic: 'ذُو النُّونِ',
            backDefinition: 'The Companion of the Great Whale (Fish).',
            backInterestAnalogy: 'The most famous ocean voyager in sacred history!',
            iconName: 'Fish'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Yunus’s lesson is the cornerstone for managing emotional dysregulation, sensory overload shutdowns, and replacing punitive "time-outs" with therapeutic "whale time-ins".',
        reviewStrategy: 'Create a cozy "Whale Tent / Corner" with blankets and low light for voluntary sensory resets when overwhelmed.',
        repetitionTip: 'Normalize mistakes as learning checkpoints rather than catastrophes.',
        activitySuggestion: 'Build a blanket fort or submarine cockpit and practice the Yunus du\'a in soft whispers.',
        sensoryBreakTip: 'Weighted blankets or dark-room sensory deprivation dramatically down-regulate sympathetic fight-or-flight states.',
        nextFormatRecommendation: 'Try Visual Cards Mode for calming sequencing.'
      },
      disclaimer: 'Grounded in Quran (21:87-88, 37:139-148), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  }
];
