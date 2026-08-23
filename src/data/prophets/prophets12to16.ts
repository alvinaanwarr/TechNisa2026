import { ProphetItem } from '../../types';
import { SHARED_PEDAGOGICAL_RESEARCH } from '../pedagogicalResearch';

export const PROPHETS_PATIENCE_LAW: ProphetItem[] = [
  // 12. AYYUB (AS)
  {
    id: 'prophet_ayyub',
    number: 12,
    nameEnglish: 'Prophet Ayyub',
    nameArabic: 'أيوب عليه السلام',
    epithet: 'As-Sabir al-Muhtasib (The Peak of Resilience & Gratitude)',
    era: 'Patience & Law',
    quranReferences: [
      {
        surahName: 'Al-Anbiya',
        surahNumber: 21,
        ayahRange: '83-84',
        url: 'https://quran.com/21/83-84',
        arabicSnippet: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ • فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِن ضُرٍّ',
        englishSnippet: 'Indeed, adversity has touched me, and You are the most merciful of the merciful. So We responded to him and removed what afflicted him of adversity.'
      },
      {
        surahName: 'Sad',
        surahNumber: 38,
        ayahRange: '41-44',
        url: 'https://quran.com/38/41-44',
        arabicSnippet: 'إِنَّا وَجَدْنَاهُ صَابِرًا ۚ نِّعْمَ الْعَبْدُ ۖ إِنَّهُ أَوَّابٌ',
        englishSnippet: 'Indeed, We found him patient, an excellent servant. Indeed, he was one who repeatedly turned back [to Allah].'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details how Prophet Ayyub (Job) endured years of severe illness and physical distress without ever uttering a single complaint against Allah. He maintained continuous Dhikr, and Allah rewarded him with a miraculous cool spring for bathing and drinking, restoring his health and family.',
    bayyinahInsight: 'Nouman Ali Khan analyzes the gentle adab (etiquette) in Ayyub’s dua: "Massaniya ad-durr" — he did not say "You made me sick", but softly stated "adversity touched me, and You are Arhamur-Rahimeen" (The Most Merciful).',
    yaqeenInsight: 'Dr. Omar Suleiman highlights Ayyub as the ultimate role model for coping with physical discomfort, sensory pain, and chronic struggles: recognizing that physical trials do not mean Allah has abandoned you.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Enduring Patience in Physical Pain', 'Sensory Relief & Healing Water', 'Polite Etiquette in Dua', 'Unshakeable Gratitude', 'Divine Restoration & Hope'],
    iconName: 'Droplets',
    summary: 'The icon of resilience who endured severe physical illness with continuous praise of Allah, teaching us that talking softly to Allah brings healing, comfort, and restoration.',
    lesson: {
      id: 'lesson-prophet-ayyub',
      topic: 'Prophet Ayyub (AS): Resilience, Comfort & Healing',
      title: 'Prophet Ayyub & The Calming Healing Spring',
      learningObjective: 'Learn how Prophet Ayyub handled physical discomfort with patience and gentle prayer, and how Allah gifted him a soothing cool spring.',
      introduction: 'Prophet Ayyub (AS) went through a long time of being very sick and tired. Even when his body felt uncomfortable, Ayyub never complained angrily. He whispered a gentle, loving prayer to Allah, and Allah healed him with cool, refreshing water.',
      topicKey: 'prophet_ayyub',
      ageRange: '7-9',
      learnerNickname: 'Resilient Hero',
      selectedInterest: 'Healing, Water & Nature',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'low_stimulation', 'one_step'],
      isCalmMode: true,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'When My Body Feels Uncomfortable',
          instruction: 'When you feel sick, tired, or overwhelmed by noise, take a soft breath and know it will pass.',
          arabicTerm: 'صَابِرًا (Sabiran)',
          arabicTransliteration: 'Sabiran (Steadfast & Patient - Surah 38:44)',
          tip: 'It is okay to rest your body in a quiet, cozy space when you need sensory recovery.',
          detail: 'Surah Sad praises Ayyub: "Indeed, We found him patient, an excellent servant."',
          iconName: 'Heart',
          repeatPhrase: 'My body is resting, and healing is coming.',
          sensoryTip: 'Rest your head on a soft pillow and relax all the muscles in your face.',
          actionPrompt: 'Tap to send comfort to your body!'
        },
        {
          stepNumber: 2,
          title: 'The Gentle Healing Dua',
          instruction: 'Prophet Ayyub whispered: "Ya Allah, I feel discomfort, and You are the Most Merciful of all."',
          arabicTerm: 'أَنتَ أَرْحَمُ الرَّاحِمِينَ',
          arabicTransliteration: 'Anta Arhamur-Rahimeen (You are the Most Merciful - Surah 21:83)',
          tip: 'Whispering this dua brings calm and comfort to your mind and body.',
          detail: 'Ibn Kathir notes that Ayyub’s prayer was filled with supreme dignity and softness.',
          iconName: 'Sparkles',
          repeatPhrase: 'Ya Allah, You are Arhamur-Rahimeen, the Most Merciful.',
          sensoryTip: 'Take a slow, deep breath in and let it out like a gentle breeze.',
          actionPrompt: 'Whisper "Ya Arhamur-Rahimeen".'
        },
        {
          stepNumber: 3,
          title: 'The Soothing Cool Spring',
          instruction: 'Allah commanded Ayyub to tap his foot, and a cool, crystal-clear healing spring bubbled up to refresh him.',
          arabicTerm: 'مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ',
          arabicTransliteration: 'Mughtasalun baridun wa sharab (Cool water for washing and drinking - Surah 38:42)',
          tip: 'Cool water on your face or hands helps reset your nervous system when overwhelmed.',
          detail: 'Ayyub bathed in the cool spring, drank the pure water, and his strength returned completely.',
          iconName: 'Droplets',
          repeatPhrase: 'Cool water refreshes my mind and body.',
          sensoryTip: 'Splash a few drops of cool water on your face or wrists to feel instantly refreshed.',
          actionPrompt: 'Say "Alhamdulillah" for health and healing!'
        }
      ],
      activity: {
        title: 'Sensory Healing & Calm Checklist',
        type: 'Hands-On Action',
        instructions: 'Practice the soothing habits of Prophet Ayyub.',
        actionItems: [
          'Wash your face with cool, refreshing water and feel the calming sensation',
          'Recite Prophet Ayyub’s gentle dua: "Rabbi inni massaniya ad-durru wa Anta Arhamur-Rahimeen"',
          'Lie down quietly in a calm space for 2 minutes to let your body recharge'
        ],
        interestConnection: 'Like a healing potion in an adventure that restores your energy bar to full!',
        completionPrompt: 'Check off each item to earn your Healing Spring Badge!'
      },
      reviewQuestion: {
        question: 'What gentle words did Prophet Ayyub (AS) say to Allah when he needed healing?',
        hint: 'Think about his beautiful phrase: "You are the Most Merciful of the merciful."',
        options: [
          {
            id: 'opt1',
            text: '"Adversity has touched me, and You are the Most Merciful of the merciful."',
            isCorrect: true,
            explanation: 'Correct! Surah Al-Anbiya (21:83) records his polite, soft, and loving prayer.'
          },
          {
            id: 'opt2',
            text: '"Why did this happen to me?"',
            isCorrect: false,
            explanation: 'Prophet Ayyub never complained; he always praised Allah with beautiful manners.'
          }
        ],
        correctAnswerExplanation: 'Prophet Ayyub taught us to turn to Allah with gentle manners, patience, and complete faith in His mercy.'
      },
      storyContent: {
        title: 'The Cool Spring of Relief',
        theme: 'Patience, Sensory Comfort, Healing & Gratitude',
        intro: 'Prophet Ayyub was tested with fatigue and illness, but his heart remained a fountain of gratitude.',
        slides: [
          {
            id: 'ayyub_slide_1',
            chapterNumber: 1,
            title: 'The Patient Heart',
            text: 'While resting, Ayyub’s tongue never stopped saying "Alhamdulillah". He knew that discomfort is temporary and Allah’s mercy is eternal.',
            interestConnection: 'Developing physical resilience and sensory pacing.',
            islamicTeaching: 'Patience in illness washes away sins and raises our spiritual station.',
            iconName: 'Heart'
          },
          {
            id: 'ayyub_slide_2',
            chapterNumber: 2,
            title: 'The Miracle Spring',
            text: 'Allah caused a cool stream of water to burst forth. Ayyub washed with the refreshing water, and every ounce of pain melted away!',
            interestConnection: 'Water as a natural sensory reset and healing element.',
            islamicTeaching: 'Allah replaces every hardship with abundant health and joy.',
            iconName: 'Droplets'
          }
        ],
        conclusion: 'Ayyub showed us that no matter how tired our body feels, gentle prayer and patience bring miraculous relief.',
        reflectionQuestion: 'What is something soothing that helps you feel better when you are tired?'
      },
      visualContent: {
        title: 'Prophet Ayyub Visual PECS',
        subtitle: 'Rest, gentle prayer, and cool water',
        cards: [
          {
            stepNumber: 1,
            title: '1. Rest Body',
            simpleSentence: 'Ayyub rested his body with patience.',
            arabicTerm: 'صَابِرًا',
            iconName: 'Heart',
            visualHint: 'Resting peacefully on a soft pillow'
          },
          {
            stepNumber: 2,
            title: '2. Gentle Dua',
            simpleSentence: 'Ayyub whispered to Allah with deep love.',
            arabicTerm: 'أَرْحَمُ الرَّاحِمِينَ',
            iconName: 'Sparkles',
            visualHint: 'Soft glowing light of prayer'
          },
          {
            stepNumber: 3,
            title: '3. Cool Water',
            simpleSentence: 'Cool spring water brought complete healing.',
            arabicTerm: 'مُغْتَسَلٌ بَارِدٌ',
            iconName: 'Droplets',
            visualHint: 'Clear cool spring bubbling from the earth'
          }
        ],
        completionBadge: 'Healing Shield Badge'
      },
      stepContent: {
        title: 'Prophet Ayyub Comfort Steps',
        goal: 'Practice somatic grounding and patient healing.',
        steps: [
          {
            stepNumber: 1,
            title: 'Somatic Reset',
            instruction: 'Splash cool water on your wrists or face.',
            detail: 'Cool water triggers the vagal dive reflex, calming heartbeat.',
            iconName: 'Droplets',
            repeatPhrase: 'Cool water brings peace.'
          },
          {
            stepNumber: 2,
            title: 'Say the Dua',
            instruction: 'Say "Ya Arhamur-Rahimeen, grant me ease."',
            detail: 'Spiritual grounding relieves sensory distress.',
            iconName: 'Sparkles',
            repeatPhrase: 'Anta Arhamur-Rahimeen.'
          }
        ],
        successMessage: 'MashaAllah! You found serene comfort like Prophet Ayyub!'
      },
      flashcardContent: {
        title: 'Prophet Ayyub Flashcards',
        cards: [
          {
            id: 'fc_ayyub_1',
            frontTerm: 'What was Prophet Ayyub famous for?',
            frontArabic: 'الصَّبْر (Patience)',
            backDefinition: 'Unrivaled patience, gratitude, and good manners through physical illness.',
            backInterestAnalogy: 'Like an unbreakable shield that never dents under pressure!',
            iconName: 'ShieldCheck'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Ayyub’s lesson is essential for sensory-overloaded or physically uncomfortable children, providing somatic coping tools (cool water, quiet resting, soothing self-talk) grounded in prophetic sunnah.',
        reviewStrategy: 'When your child feels sick or dysregulated, invite them to "use the Ayyub cool water reset."',
        repetitionTip: 'Whisper "Anta Arhamur-Rahimeen" softly during soothing routines.',
        activitySuggestion: 'Prepare a cool, damp washcloth and place it gently on the forehead during rest breaks.',
        sensoryBreakTip: 'Cold compress, ice pack holding, or drinking ice water provides rapid neurological grounding.',
        nextFormatRecommendation: 'Try Visual Mode for low cognitive load.'
      },
      disclaimer: 'Grounded in Quran (21:83-84, 38:41-44), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 13. SHU'AYB (AS)
  {
    id: 'prophet_shuayb',
    number: 13,
    nameEnglish: 'Prophet Shu\'ayb',
    nameArabic: 'شعيب عليه السلام',
    epithet: 'Khatib al-Anbiya (The Eloquent Speaker & Champion of Fair Trade)',
    era: 'Patience & Law',
    quranReferences: [
      {
        surahName: 'Hud',
        surahNumber: 11,
        ayahRange: '84-95',
        url: 'https://quran.com/11/84-95',
        arabicSnippet: 'وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ ۖ وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ',
        englishSnippet: 'And O my people, give full measure and weight in justice and do not deprive the people of their due.'
      },
      {
        surahName: 'Al-A\'raf',
        surahNumber: 7,
        ayahRange: '85-93',
        url: 'https://quran.com/7/85-93',
        arabicSnippet: 'قَدْ جَاءَتْكُم بَيِّنَةٌ مِّن رَّبِّكُمْ ۖ فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ',
        englishSnippet: 'There has come to you clear evidence from your Lord. So fulfill the measure and weight.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir notes that Shu\'ayb was known as "Khatib al-Anbiya" for his unmatched eloquence and clarity in speech. Sent to Madyan and the people of the Thicket (Aykah), he championed fair business, honest scales, and protecting consumers from fraud.',
    bayyinahInsight: 'Nouman Ali Khan highlights the economic ethics: Islam is not just about personal rituals; honesty in measurements, fair play in games, and respecting everyone\'s rights are core religious obligations.',
    yaqeenInsight: 'Dr. Omar Suleiman connects Shu\'ayb to social justice and integrity: never cheating in games, giving people their exact due, and using articulate, persuasive speech to defend fair rules.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Fairness & Honest Scales (Mizan)', 'Clear, Articulate Speech', 'Never Cheating in Games', 'Economic Integrity & Justice', 'Defending the Rights of Others'],
    iconName: 'Scale',
    summary: 'The eloquent orator known as the "Speaker of the Prophets," who stood for fair trade, honest balance scales, and making sure everyone gets their exact, rightful share.',
    lesson: {
      id: 'lesson-prophet-shuayb',
      topic: 'Prophet Shu\'ayb (AS): Honest Scales & Fair Play',
      title: 'Prophet Shu\'ayb & The Secret of Fair Play',
      learningObjective: 'Understand the importance of fair measurements, playing games by honest rules, and speaking clearly with kindness.',
      introduction: 'Prophet Shu\'ayb (AS) was the most eloquent speaker! He taught the merchants in the marketplace to use honest balance scales so no one was ever cheated. He shows us that playing fair and being honest in games is a golden deed.',
      topicKey: 'prophet_shuayb',
      ageRange: '7-9',
      learnerNickname: 'Fair Player',
      selectedInterest: 'Games, Rules, Math & Scales',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'interactive'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'The Honest Balance Scale (Al-Mizan)',
          instruction: 'Prophet Shu\'ayb taught that scales must balance perfectly so buyers get every gram they paid for.',
          arabicTerm: 'الْمِيزَان (Al-Mizan)',
          arabicTransliteration: 'Al-Mizan (The Balance Scale of Justice - Surah 11:85)',
          tip: 'Being fair means giving everyone their full turn, full share, and full respect.',
          detail: 'Surah Hud warns against cheating or taking more than your fair share.',
          iconName: 'Layers',
          repeatPhrase: 'I play fair and balance everything with honesty.',
          sensoryTip: 'Hold both hands out flat like a balanced weighing scale.',
          actionPrompt: 'Balance your two hands evenly like a scale!'
        },
        {
          stepNumber: 2,
          title: 'Fair Rules in Games',
          instruction: 'When playing a game, follow the rules honestly and cheer for your friends.',
          arabicTerm: 'بِالْقِسْطِ (Bil-Qist)',
          arabicTransliteration: 'Bil-Qist (With Exact Justice & Fairness)',
          tip: 'Winning honestly is great, but playing with integrity is the true victory.',
          detail: 'Ibn Kathir highlights how Shu\'ayb connected everyday honesty to pleasing Allah.',
          iconName: 'ShieldCheck',
          repeatPhrase: 'Honesty and fair play make every game fun.',
          sensoryTip: 'Give a friendly high-five or handshake to a game partner.',
          actionPrompt: 'Whisper "Bismillah" before starting any game.'
        },
        {
          stepNumber: 3,
          title: 'Eloquent, Clear Speech (Khatib al-Anbiya)',
          instruction: 'Prophet Shu\'ayb spoke clearly, using respectful words and polite explanations.',
          arabicTerm: 'خَطِيبُ الْأَنْبِيَاءِ',
          arabicTransliteration: 'Khatib al-Anbiya (The Eloquent Speaker of the Prophets)',
          tip: 'When explaining your feelings, speak slowly and clearly so others understand you.',
          detail: 'Yaqeen Institute notes that clear communication prevents misunderstandings.',
          iconName: 'Sparkles',
          repeatPhrase: 'I speak clearly, kindly, and truthfully.',
          sensoryTip: 'Take a calm breath and enunciate each word clearly.',
          actionPrompt: 'Say "Salam" with a clear, confident voice!'
        }
      ],
      activity: {
        title: 'Fair Balance & Clear Speech Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the justice and clarity of Prophet Shu\'ayb.',
        actionItems: [
          'Share a snack or set of toys completely equally with a sibling or friend',
          'Play a short game and follow all the rules with 100% honesty',
          'Express a thought or need using clear, complete sentences with a calm voice'
        ],
        interestConnection: 'Like an official referee in a championship game ensuring every rule is respected!',
        completionPrompt: 'Check off each item to earn your Fair Play Trophy!'
      },
      reviewQuestion: {
        question: 'What did Prophet Shu\'ayb (AS) urge the merchants in the market to do?',
        hint: 'Think about fairness, balance scales, and never cheating.',
        options: [
          {
            id: 'opt1',
            text: 'Give full measure and weight on the balance scales and treat all people with fair justice',
            isCorrect: true,
            explanation: 'Correct! Surah Hud (11:85) commands: "Give full measure and weight in justice."'
          },
          {
            id: 'opt2',
            text: 'Hide extra weights to trick customers',
            isCorrect: false,
            explanation: 'Cheating is forbidden; Prophet Shu\'ayb taught absolute honesty.'
          }
        ],
        correctAnswerExplanation: 'Prophet Shu\'ayb was the champion of fair measurements, economic justice, and honest play.'
      },
      storyContent: {
        title: 'The Honest Market of Madyan',
        theme: 'Fairness, Integrity, Scales & Clear Speech',
        intro: 'In the busy market town of Madyan, Prophet Shu\'ayb stood up for fair trade and honest weights.',
        slides: [
          {
            id: 'shuayb_slide_1',
            chapterNumber: 1,
            title: 'The Golden Scales',
            text: 'Shu\'ayb spoke to the crowd with eloquence: "O my people! Balance your scales with precision and do not take what belongs to others."',
            interestConnection: 'Mathematical precision and justice in society.',
            islamicTeaching: 'Honesty in business and games is an act of worship.',
            iconName: 'Layers'
          }
        ],
        conclusion: 'Shu\'ayb showed us that fairness and honesty build a world where everyone can live with trust.',
        reflectionQuestion: 'How can you make sure games are fair when playing with friends?'
      },
      visualContent: {
        title: 'Prophet Shu\'ayb Visual PECS',
        subtitle: 'Fair scales, honest play, and clear words',
        cards: [
          {
            stepNumber: 1,
            title: '1. Fair Scales',
            simpleSentence: 'Shu\'ayb taught honest weights on the scale.',
            arabicTerm: 'الْمِيزَان',
            iconName: 'Layers',
            visualHint: 'Evenly balanced weighing scale'
          },
          {
            stepNumber: 2,
            title: '2. Play Fair',
            simpleSentence: 'Always follow rules honestly in games.',
            arabicTerm: 'بِالْقِسْطِ',
            iconName: 'ShieldCheck',
            visualHint: 'Smiling friends playing game by the rules'
          },
          {
            stepNumber: 3,
            title: '3. Speak Clearly',
            simpleSentence: 'Shu\'ayb spoke with eloquence and kindness.',
            arabicTerm: 'خَطِيبُ الْأَنْبِيَاءِ',
            iconName: 'Sparkles',
            visualHint: 'Speaking clear words of truth'
          }
        ],
        completionBadge: 'Fair Play Badge'
      },
      stepContent: {
        title: 'Prophet Shu\'ayb Justice Steps',
        goal: 'Practice rule-following, equal sharing, and clarity.',
        steps: [
          {
            stepNumber: 1,
            title: 'Equal Sharing',
            instruction: 'Divide snacks or toys equally without favoritism.',
            detail: 'Fairness creates peace.',
            iconName: 'Layers',
            repeatPhrase: 'I share fairly and evenly.'
          },
          {
            stepNumber: 2,
            title: 'Clear Speech',
            instruction: 'Speak what you need in calm, complete words.',
            detail: 'Clear communication eliminates frustration.',
            iconName: 'Sparkles',
            repeatPhrase: 'I speak with clarity and calm.'
          }
        ],
        successMessage: 'MashaAllah! You acted with the fair justice of Prophet Shu\'ayb!'
      },
      flashcardContent: {
        title: 'Prophet Shu\'ayb Flashcards',
        cards: [
          {
            id: 'fc_shuayb_1',
            frontTerm: 'What does "Al-Mizan" mean?',
            frontArabic: 'المِيزَان',
            backDefinition: 'The balance scale — representing fairness, justice, and accurate measurement.',
            backInterestAnalogy: 'Like a precision calibration tool in a science lab!',
            iconName: 'Layers'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Shu\'ayb’s story is ideal for teaching rule-following, dealing with game loss gracefully, and developing expressive communication clarity.',
        reviewStrategy: 'Frame board game rules around the "Shu\'ayb Fair Scale": everyone plays by the same clear rules.',
        repetitionTip: 'Use physical balance gestures to illustrate fair turn-taking.',
        activitySuggestion: 'Use a toy balance scale or baking scale to weigh flour, cereal, or fruit together.',
        sensoryBreakTip: 'Rhythmic speech clapping or metronome matching builds speech-motor coordination.',
        nextFormatRecommendation: 'Try Checklist Mode for structured rules.'
      },
      disclaimer: 'Grounded in Quran (7:85-93, 11:84-95), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 14. MUSA (AS)
  {
    id: 'prophet_musa',
    number: 14,
    nameEnglish: 'Prophet Musa',
    nameArabic: 'موسى عليه السلام',
    epithet: 'Kalimullah (He Who Spoke with Allah & Overcame Anxiety)',
    era: 'Patience & Law',
    quranReferences: [
      {
        surahName: 'Ta-Ha',
        surahNumber: 20,
        ayahRange: '25-28',
        url: 'https://quran.com/20/25-28',
        arabicSnippet: 'قَالَ رَبِّ اشْرَحْ لِي صَدْرِي • وَيَسِّرْ لِي أَمْرِي • وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي • يَفْقَهُوا قَوْلِي',
        englishSnippet: 'He said: My Lord, expand for me my chest, and ease for me my task, and untie the knot from my tongue that they may understand my speech.'
      },
      {
        surahName: 'Ash-Shu\'ara',
        surahNumber: 26,
        ayahRange: '61-63',
        url: 'https://quran.com/26/61-63',
        arabicSnippet: 'قَالَ كَلَّا ۖ إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ • فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِب بِّعَصَاكَ الْبَحْرَ ۖ فَانفَلَقَ',
        englishSnippet: 'He said: Nay! Indeed, with me is my Lord; He will guide me. Then We inspired to Moses: Strike with your staff the sea, and it parted.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir details Musa\'s life: his floating basket on the Nile as a baby, his speech hesitancy / stammer, his courage before Pharaoh, the miraculous staff turning into a serpent, the parting of the Red Sea, and receiving the sacred Tablets (Tawrat) on Mount Sinai.',
    bayyinahInsight: 'Nouman Ali Khan highlights the neuro-linguistic depth of Musa’s dua: "Rabbishrah li Sadri" — asking for emotional regulation (chest expansion to relieve panic), task simplification ("Yassir li amri"), and speech fluency ("Wahlul \'uqdatan min lisani"). Allah validated his speech differences and granted him Harun as a co-regulator and support partner.',
    yaqeenInsight: 'Dr. Omar Suleiman notes that Musa is the patron prophet for anyone who experiences anxiety, stage fright, or speech differences: Allah chose a messenger with a speech impediment to stand before the most arrogant tyrant on earth, proving that confidence comes from Allah, not physical eloquence.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION,
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED,
      SHARED_PEDAGOGICAL_RESEARCH.UDL_REPRESENTATION
    ],
    coreThemes: ['Overcoming Speech Hesitancy & Anxiety', 'The Power of Dua ("Rabbishrah li Sadri")', 'Courage Before Tyranny', 'Parting of the Red Sea', 'Speaking Directly with Allah (Kalimullah)'],
    iconName: 'Waves',
    summary: 'The mighty prophet who spoke directly with Allah, who overcame speech hesitancy and fear with his famous du\'a "Rabbishrah li Sadri," parting the Red Sea with his staff and freeing the believers.',
    lesson: {
      id: 'lesson-prophet-musa',
      topic: 'Prophet Musa (AS): Overcoming Fear & The Parting of the Sea',
      title: 'Prophet Musa & The Superpower of Courage and Dua',
      learningObjective: 'Learn how Prophet Musa overcame speech anxiety and nervousness through the famous du\'a "Rabbishrah li Sadri," and trusted Allah to part the mighty sea.',
      introduction: 'Prophet Musa (AS) was one of the bravest messengers of Allah! Even though he felt nervous and had a knot in his tongue when speaking, Musa asked Allah to expand his chest with calm. Allah made him so strong that with a tap of his staff, the entire Red Sea parted into dry paths!',
      topicKey: 'prophet_musa',
      ageRange: '7-9',
      learnerNickname: 'Brave Leader',
      selectedInterest: 'Ocean, Water, Staffs & Superheroes',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step', 'storytelling'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'The Dua for Nervousness & Speech',
          instruction: 'When feeling nervous or shy, recite the du\'a of Prophet Musa to bring peace into your chest.',
          arabicTerm: 'رَبِّ اشْرَحْ لِي صَدْرِي',
          arabicTransliteration: 'Rabbishrah li sadri, wa yassir li amri, wahlul \'uqdatan min lisani, yafqahu qawli (Surah Ta-Ha 20:25-28)',
          tip: 'Musa asked Allah: "My Lord, expand my chest with calm, make my task easy, and untie the knot on my tongue so people understand me."',
          detail: 'Rebecca Whalen (SLP, Pearson) notes that Musa’s story is profoundly empowering for speech and communication confidence.',
          iconName: 'Heart',
          repeatPhrase: 'Rabbishrah li sadri — O Allah, calm and expand my heart with peace.',
          sensoryTip: 'Take a deep, slow breath into your chest and feel the space open up inside.',
          actionPrompt: 'Whisper "Rabbishrah li sadri" with a peaceful heart.'
        },
        {
          stepNumber: 2,
          title: 'Asking for Help & Teamwork (Harun)',
          instruction: 'Prophet Musa asked Allah to let his brother Harun help him speak and support his mission.',
          arabicTerm: 'وَأَخِي هَارُونُ (My brother Harun)',
          arabicTransliteration: 'Wa akhee Haroon (And my brother Harun - Surah 28:34)',
          tip: 'It is a strength to ask a parent, teacher, or friend to support you when things feel big.',
          detail: 'Allah answered Musa immediately: "We will strengthen your arm through your brother."',
          iconName: 'ShieldCheck',
          repeatPhrase: 'Asking for help is a sign of wisdom and courage.',
          sensoryTip: 'Reach out your hand in imagination to grab a teammate’s hand.',
          actionPrompt: 'Tap to celebrate great teamwork!'
        },
        {
          stepNumber: 3,
          title: 'The Parting of the Red Sea',
          instruction: 'When facing the roaring sea, Musa stood firm and struck the water with his staff—the sea parted into twelve dry roads!',
          arabicTerm: 'إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ',
          arabicTransliteration: 'Inna ma\'iya Rabbi sayahdeen (Indeed, with me is my Lord; He will guide me - Surah 26:62)',
          tip: 'Even when things look impossible, Allah can make a clear, safe path for you.',
          detail: 'Ibn Kathir describes the towering walls of water standing like giant glistening mountains.',
          iconName: 'Waves',
          repeatPhrase: 'Allah is with me; He will guide and protect me.',
          sensoryTip: 'Imagine walking safely across dry, clean sand with crystal water standing tall.',
          actionPrompt: 'Tap to part the sea of challenges!'
        }
      ],
      activity: {
        title: 'Musa Courage & Speech Challenge',
        type: 'Hands-On Action',
        instructions: 'Practice the brave steps of Prophet Musa today.',
        actionItems: [
          'Place your hand over your chest, take a slow breath, and recite: "Rabbishrah li sadri"',
          'Speak one full sentence out loud to a parent or friend with confidence',
          'Say: "Inna ma\'iya Rabbi sayahdeen" (My Lord is with me) to feel unshakeable bravery'
        ],
        interestConnection: 'Like a superhero tapping their staff to unlock a crystal portal of safety!',
        completionPrompt: 'Check off each item to earn your Red Sea Navigator Crown!'
      },
      reviewQuestion: {
        question: 'What did Prophet Musa (AS) say when his people thought they were trapped at the Red Sea?',
        hint: 'Think about his absolute confidence in Allah: "Indeed, with me is my Lord; He will guide me."',
        options: [
          {
            id: 'opt1',
            text: '"Nay! Indeed, with me is my Lord; He will guide me." (Inna ma\'iya Rabbi sayahdeen)',
            isCorrect: true,
            explanation: 'Correct! Surah Ash-Shu\'ara (26:62) records his unshakeable faith and bravery.'
          },
          {
            id: 'opt2',
            text: '"We should give up and turn around"',
            isCorrect: false,
            explanation: 'Musa stayed completely confident and trusted Allah’s divine help.'
          }
        ],
        correctAnswerExplanation: 'Prophet Musa showed that complete trust in Allah turns impossible obstacles into miracles.'
      },
      storyContent: {
        title: 'The Sea of Twelve Paths',
        theme: 'Speech Confidence, Anxiety, Courage & Miracles',
        intro: 'From a floating basket on the Nile to the shores of the Red Sea, Prophet Musa’s bravery inspires us all.',
        slides: [
          {
            id: 'musa_slide_1',
            chapterNumber: 1,
            title: 'The Prayer of Peace',
            text: 'Before standing before the king, Musa prayed: "O Allah, open my chest, ease my task, and untie the knot on my tongue."',
            interestConnection: 'Using self-regulation tools before speaking.',
            islamicTeaching: 'Allah empowers those who seek His help with sincerity.',
            iconName: 'Heart'
          },
          {
            id: 'musa_slide_2',
            chapterNumber: 2,
            title: 'The Great Wave Stands Still',
            text: 'At the edge of the Red Sea, Musa struck the water with his staff. The sea parted, creating dry, safe avenues of light!',
            interestConnection: 'Overcoming seemingly impossible hurdles with faith.',
            islamicTeaching: 'Allah always makes a way out for the believers.',
            iconName: 'Waves'
          }
        ],
        conclusion: 'Musa taught us that no knot is too tight for Allah to untie, and no sea is too deep for Allah to part.',
        reflectionQuestion: 'When you feel nervous about speaking, how can Musa’s dua help you?'
      },
      visualContent: {
        title: 'Prophet Musa Visual PECS',
        subtitle: 'Dua, speech confidence, and the parting sea',
        cards: [
          {
            stepNumber: 1,
            title: '1. Calm Chest',
            simpleSentence: 'Say "Rabbishrah li sadri" for speech calm.',
            arabicTerm: 'رَبِّ اشْرَحْ لِي صَدْرِي',
            iconName: 'Heart',
            visualHint: 'Hand over heart breathing slowly'
          },
          {
            stepNumber: 2,
            title: '2. Ask for Help',
            simpleSentence: 'Musa worked with his brother Harun.',
            arabicTerm: 'وَأَخِي هَارُونُ',
            iconName: 'ShieldCheck',
            visualHint: 'Two brothers standing together in solidarity'
          },
          {
            stepNumber: 3,
            title: '3. Parting the Sea',
            simpleSentence: 'The sea opened into safe, dry roads.',
            arabicTerm: 'إِنَّ مَعِيَ رَبِّي',
            iconName: 'Waves',
            visualHint: 'Crystal waves standing tall on both sides'
          }
        ],
        completionBadge: 'Red Sea Navigator Badge'
      },
      stepContent: {
        title: 'Prophet Musa Courage Steps',
        goal: 'Practice speech confidence and emotional calming.',
        steps: [
          {
            stepNumber: 1,
            title: 'Expand Your Chest',
            instruction: 'Inhale deeply and recite "Rabbishrah li sadri".',
            detail: 'Chest expansion activates relaxation.',
            iconName: 'Heart',
            repeatPhrase: 'Rabbishrah li sadri.'
          },
          {
            stepNumber: 2,
            title: 'Stand Brave',
            instruction: 'Say "Inna ma\'iya Rabbi" before doing something scary.',
            detail: 'Trust in Allah dispels fear.',
            iconName: 'Waves',
            repeatPhrase: 'Inna ma\'iya Rabbi sayahdeen.'
          }
        ],
        successMessage: 'MashaAllah! You walked with the mighty courage of Prophet Musa!'
      },
      flashcardContent: {
        title: 'Prophet Musa Flashcards',
        cards: [
          {
            id: 'fc_musa_1',
            frontTerm: 'What is Prophet Musa\'s famous du\'a for nervousness and speech?',
            frontArabic: 'رَبِّ اشْرَحْ لِي صَدْرِي',
            backDefinition: '"My Lord, expand for me my chest, ease for me my task, and untie the knot from my tongue."',
            backInterestAnalogy: 'The ultimate superpower spell that clears all nervousness and anxiety!',
            iconName: 'Sparkles'
          },
          {
            id: 'fc_musa_2',
            frontTerm: 'What does "Kalimullah" mean?',
            frontArabic: 'كَلِيمُ اللَّهِ',
            backDefinition: 'The one who spoke directly with Allah without an intermediary.',
            backInterestAnalogy: 'A direct sacred communication link with the Creator!',
            iconName: 'Heart'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Musa’s lesson directly targets speech anxiety, selective mutism tendencies, stammering, and performance panic using the prophetic du\'a and co-regulation models.',
        reviewStrategy: 'Before presentations, doctor visits, or social events, practice the "Musa 3-Step Breath" and recite "Rabbishrah li sadri" together.',
        repetitionTip: 'Normalize asking for accommodations and support partners (the "Harun Model").',
        activitySuggestion: 'Water sensory play or creating a cardboard staff and parting blue blankets on the floor to reenact the Red Sea crossing.',
        sensoryBreakTip: 'Diaphragmatic breathing and bilateral hand-squeezing before public speaking reduce somatic tension.',
        nextFormatRecommendation: 'Try Interactive Cards Mode for active participation.'
      },
      disclaimer: 'Grounded in Quran (20:25-28, 26:61-63, 28:3-44), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 15. HARUN (AS)
  {
    id: 'prophet_harun',
    number: 15,
    nameEnglish: 'Prophet Harun',
    nameArabic: 'هارون عليه السلام',
    epithet: 'Al-Fasih al-Mu\'een (The Eloquent Brother & Gentle Peacemaker)',
    era: 'Patience & Law',
    quranReferences: [
      {
        surahName: 'Ta-Ha',
        surahNumber: 20,
        ayahRange: '29-36',
        url: 'https://quran.com/20/29-36',
        arabicSnippet: 'وَاجْعَل لِّي وَزِيرًا مِّنْ أَهْلِي • هَارُونَ أَخِي • اشْدُدْ بِهِ أَزْرِي • وَأَشْرِكْهُ فِي أَمْرِي',
        englishSnippet: 'And appoint for me a minister from my family: Aaron, my brother. Increase through him my strength, and let him share my task.'
      },
      {
        surahName: 'Al-Qasas',
        surahNumber: 28,
        ayahRange: '34-35',
        url: 'https://quran.com/28/34-35',
        arabicSnippet: 'وَأَخِي هَارُونُ هُوَ أَفْصَحُ مِنِّي لِسَانًا فَأَرْسِلْهُ مَعِيَ رِدْءًا',
        englishSnippet: 'And my brother Aaron is more fluent than me in tongue, so send him with me as a helper.'
      }
    ],
    tafsirIbnKathirSummary: 'Ibn Kathir highlights Harun\'s supreme loyalty, clear and articulate speech, gentle demeanor, and patience as a co-leader with his brother Musa. When Musa went to receive the Tablets, Harun worked tirelessly to keep peace among the people.',
    bayyinahInsight: 'Nouman Ali Khan notes the psychological beauty of sibling synergy: Musa acknowledged Harun\'s superior linguistic fluency ("Afsuhu minnee lisana"), and Harun offered unconditional emotional and verbal backing without jealousy.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights Harun as the ultimate ally: true brotherhood means lifting each other up, sharing strengths, and being a steady calming presence when others are agitated.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
      SHARED_PEDAGOGICAL_RESEARCH.STRENGTHS_BASED
    ],
    coreThemes: ['Sibling Support & True Allyship', 'Eloquent & Fluent Communication', 'Gentle Peacemaking', 'Sharing Strengths & Delegating', 'Emotional Co-Regulation'],
    iconName: 'HeartHandshake',
    summary: 'The eloquent and gentle brother of Musa, appointed as a prophet and supporter, who used his fluent speech and soothing manners to bring peace and clarity to his community.',
    lesson: {
      id: 'lesson-prophet-harun',
      topic: 'Prophet Harun (AS): The Gentle Brother & Loyal Helper',
      title: 'Prophet Harun & The Power of Sibling Teamwork',
      learningObjective: 'Understand the power of sibling love, helping others speak up, and using gentle words to make peace.',
      introduction: 'Prophet Harun (AS) was Musa’s beloved brother and best friend! Harun was known for his fluent, sweet speech and calm heart. When Musa needed a partner, Harun stood right by his side, showing us that great teams achieve wonders together.',
      topicKey: 'prophet_harun',
      ageRange: '7-9',
      learnerNickname: 'Loyal Partner',
      selectedInterest: 'Super Teams, Duos & Family',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Be a Supportive Helper (Rida\')',
          instruction: 'Prophet Harun was a loving brother who supported Musa with encouragement and strength.',
          arabicTerm: 'اشْدُدْ بِهِ أَزْرِي',
          arabicTransliteration: 'Ushdud bihi azree (Strengthen my back through him - Surah 20:31)',
          tip: 'When you encourage a friend or sibling, you give them courage to do hard things.',
          detail: 'Musa and Harun shared tasks based on their individual strengths.',
          iconName: 'HeartHandshake',
          repeatPhrase: 'I support my family and friends with love and loyalty.',
          sensoryTip: 'Clasp your two hands together firmly and feel the strength of connection.',
          actionPrompt: 'Tap to activate the power of teamwork!'
        },
        {
          stepNumber: 2,
          title: 'Gentle Peacemaker',
          instruction: 'Prophet Harun used soft, diplomatic words to calm down arguments and maintain harmony.',
          arabicTerm: 'سَلَامٌ وَرِفْقٌ',
          arabicTransliteration: 'Salamun wa Rifq (Peace and Gentleness)',
          tip: 'When people get upset, soft words and a gentle smile help everyone calm down.',
          detail: 'Ibn Kathir notes that Harun was deeply beloved by his community for his warmth.',
          iconName: 'Smile',
          repeatPhrase: 'Gentle words turn arguments into peace.',
          sensoryTip: 'Speak a kind phrase in a gentle, warm tone.',
          actionPrompt: 'Say "Let\'s be peaceful" with a warm smile.'
        }
      ],
      activity: {
        title: 'Sibling & Ally Teamwork Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the supportive loyalty of Prophet Harun today.',
        actionItems: [
          'Say something encouraging to a sibling, friend, or parent (e.g. "You did a great job!")',
          'Help someone carry or clean something without being asked',
          'Use a calm, gentle voice to resolve a small disagreement'
        ],
        interestConnection: 'Like the co-pilot of a starship who navigates the crew safely through asteroid fields!',
        completionPrompt: 'Check off each item to earn your Loyal Ally Star!'
      },
      reviewQuestion: {
        question: 'Why did Prophet Musa ask Allah to make his brother Harun a prophet and helper?',
        hint: 'Think about Harun\'s fluent speech, support, and teamwork.',
        options: [
          {
            id: 'opt1',
            text: 'Because Harun was articulate, fluent in speech, gentle, and a strong supportive partner',
            isCorrect: true,
            explanation: 'Correct! Surah Ta-Ha and Al-Qasas highlight Harun\'s eloquence and loyal partnership.'
          },
          {
            id: 'opt2',
            text: 'Because they wanted to argue with each other',
            isCorrect: false,
            explanation: 'They loved and supported each other with deep harmony and unity.'
          }
        ],
        correctAnswerExplanation: 'Prophet Harun models the beauty of sibling solidarity, sharing strengths, and gentle communication.'
      },
      storyContent: {
        title: 'The Two Brothers of Light',
        theme: 'Brotherhood, Support, Eloquence & Peacemaking',
        intro: 'Prophet Musa and Prophet Harun worked side-by-side as prophets, proving that great allies make every mission brighter.',
        slides: [
          {
            id: 'harun_slide_1',
            chapterNumber: 1,
            title: 'Side by Side',
            text: 'When standing before challenges, Harun spoke with fluent eloquence while Musa provided unyielding courage. Together, they were unbreakable.',
            interestConnection: 'Complementary strengths make the ultimate duo.',
            islamicTeaching: 'Believers support one another like bricks in a strong wall.',
            iconName: 'HeartHandshake'
          }
        ],
        conclusion: 'Harun taught us that being a loyal helper and peacemaker is one of the highest honors in Islam.',
        reflectionQuestion: 'Who is a good teammate or friend you love helping?'
      },
      visualContent: {
        title: 'Prophet Harun Visual Cards',
        subtitle: 'Teamwork, gentle words, and loyalty',
        cards: [
          {
            stepNumber: 1,
            title: '1. Support Allies',
            simpleSentence: 'Harun stood by his brother with strength.',
            arabicTerm: 'اشْدُدْ بِهِ أَزْرِي',
            iconName: 'HeartHandshake',
            visualHint: 'Two allies standing shoulder-to-shoulder'
          },
          {
            stepNumber: 2,
            title: '2. Gentle Peacemaker',
            simpleSentence: 'Harun used kind words to bring peace.',
            arabicTerm: 'سَلَامٌ وَرِفْقٌ',
            iconName: 'Smile',
            visualHint: 'Warm smile bringing harmony to a group'
          }
        ],
        completionBadge: 'Loyal Ally Badge'
      },
      stepContent: {
        title: 'Prophet Harun Teamwork Steps',
        goal: 'Practice encouragement and peacemaking.',
        steps: [
          {
            stepNumber: 1,
            title: 'Give a Compliment',
            instruction: 'Tell someone one thing you appreciate about them.',
            detail: 'Kind words strengthen relationships.',
            iconName: 'Smile',
            repeatPhrase: 'I encourage and lift others up.'
          }
        ],
        successMessage: 'MashaAllah! You showed the loving loyalty of Prophet Harun!'
      },
      flashcardContent: {
        title: 'Prophet Harun Flashcards',
        cards: [
          {
            id: 'fc_harun_1',
            frontTerm: 'What was Prophet Harun’s special strength?',
            frontArabic: 'فَصَاحَة (Eloquence)',
            backDefinition: 'Articulate, fluent, and gentle speech paired with unyielding loyalty.',
            backInterestAnalogy: 'The ultimate communicator and supportive co-pilot!',
            iconName: 'HeartHandshake'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Harun’s lesson focuses on collaborative learning, peer support, and positive sibling dynamics.',
        reviewStrategy: 'Highlight instances where siblings or peers help each other: "Look at that great Musa and Harun teamwork!"',
        repetitionTip: 'Encourage children to identify and celebrate each other\'s differing strengths.',
        activitySuggestion: 'Set up a two-person cooperative task (like carrying a basket or assembling a puzzle together).',
        sensoryBreakTip: 'Partner clapping games or tandem stretching facilitate social-emotional co-regulation.',
        nextFormatRecommendation: 'Try Visual Cards Mode for visual sequence.'
      },
      disclaimer: 'Grounded in Quran (20:29-36, 28:34-35), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  },

  // 16. DHUL-KIFL (AS)
  {
    id: 'prophet_dhul_kifl',
    number: 16,
    nameEnglish: 'Prophet Dhul-Kifl',
    nameArabic: 'ذو الكفل عليه السلام',
    epithet: 'Al-Mūfī bi-\'Ahdih (The Faithful Guarantor & Patient Ruler)',
    era: 'Patience & Law',
    quranReferences: [
      {
        surahName: 'Al-Anbiya',
        surahNumber: 21,
        ayahRange: '85-86',
        url: 'https://quran.com/21/85-86',
        arabicSnippet: 'وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ ۖ كُلٌّ مِّنَ الصَّابِرِينَ • وَأَدْخَلْنَاهُمْ فِي رَحْمَتِنَا',
        englishSnippet: 'And Ismail, Idris, and Dhul-Kifl; all were of the patient. And We admitted them into Our mercy.'
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
    tafsirIbnKathirSummary: 'Ibn Kathir relates that Dhul-Kifl (The Possessor of the Pledge / Guarantee) took upon himself the covenant to judge between people with complete justice, fast during the day, pray at night, and never lose his temper. He fulfilled every condition perfectly with immense patience.',
    bayyinahInsight: 'Nouman Ali Khan highlights the title "Kifl" (guarantee/responsibility) — taking responsibility and being dependable in daily commitments is a profound Islamic virtue.',
    yaqeenInsight: 'Dr. Omar Suleiman highlights emotional composure: Dhul-Kifl was tested repeatedly by people trying to make him angry, yet his self-control and commitment to fairness never wavered.',
    pedagogicalResearch: [
      SHARED_PEDAGOGICAL_RESEARCH.EXECUTIVE_CHUNKING,
      SHARED_PEDAGOGICAL_RESEARCH.SENSORY_REGULATION
    ],
    coreThemes: ['Fulfilling Guarantees & Pledges', 'Patience & Emotional Self-Control', 'Never Losing Temper', 'Fairness & Justice in Daily Routine', 'Consistency in Worship'],
    iconName: 'ShieldCheck',
    summary: 'The righteous guarantor praised in the Quran among the patient and outstanding, who pledged to judge fairly, never lose his temper, and fulfilled every promise with perfection.',
    lesson: {
      id: 'lesson-prophet-dhul-kifl',
      topic: 'Prophet Dhul-Kifl (AS): The Power of Self-Control & Promises',
      title: 'Prophet Dhul-Kifl & The Superpower of Self-Control',
      learningObjective: 'Learn how Prophet Dhul-Kifl mastered emotional self-control, stayed calm even when others provoked him, and fulfilled every promise he made.',
      introduction: 'Prophet Dhul-Kifl (AS) was known as the master of promises! He made a sacred pledge to judge fairly, pray consistently, and never lose his temper. Even on busy or stressful days, Dhul-Kifl kept his cool and treated everyone with respect.',
      topicKey: 'prophet_dhul_kifl',
      ageRange: '7-9',
      learnerNickname: 'Calm Master',
      selectedInterest: 'Championships, Guarantees & Shields',
      activeFormat: 'interactive_cards',
      learningPreferences: ['visual', 'short_instructions', 'one_step'],
      isCalmMode: false,
      lessonSteps: [
        {
          stepNumber: 1,
          title: 'Mastering Self-Control (Not Losing Temper)',
          instruction: 'When feeling annoyed or frustrated, pause, take 3 slow breaths, and choose calm over shouting.',
          arabicTerm: 'كُلٌّ مِّنَ الصَّابِرِينَ',
          arabicTransliteration: 'Kullun minas-sabireen (All were of the patient - Surah 21:85)',
          tip: 'Controlling your temper when upset is the mark of a true champion.',
          detail: 'Surah Sad ranks Dhul-Kifl among the "Akhyar" (the most outstanding people).',
          iconName: 'ShieldCheck',
          repeatPhrase: 'I am in control of my calm; I choose peace.',
          sensoryTip: 'Press your palms together firmly for 5 seconds to release tension, then relax.',
          actionPrompt: 'Tap to activate your self-control shield!'
        },
        {
          stepNumber: 2,
          title: 'Honoring Your Pledges & Routine',
          instruction: 'Prophet Dhul-Kifl kept his daily routine with amazing consistency and dedication.',
          arabicTerm: 'الْوَفَاءُ بِالْعَهْدِ',
          arabicTransliteration: 'Al-Wafaa\'u bil-\'Ahd (Fulfilling the Covenant & Promise)',
          tip: 'Having a steady daily routine makes your brain feel organized, calm, and ready to succeed.',
          detail: 'Ibn Kathir highlights his daily schedule of worship, fair judging, and rest.',
          iconName: 'Layers',
          repeatPhrase: 'I stick to my good habits and keep my word.',
          sensoryTip: 'Check off your tasks on a visual schedule to feel the joy of completion.',
          actionPrompt: 'Whisper "Alhamdulillah" for steady habits.'
        }
      ],
      activity: {
        title: 'Self-Control & Promise Badge Mission',
        type: 'Hands-On Action',
        instructions: 'Practice the unshakeable composure of Prophet Dhul-Kifl.',
        actionItems: [
          'Practice the "Count to 5 Pause" before responding when you feel annoyed',
          'Finish one chore or routine on your schedule without needing reminders',
          'Say: "Alhamdulillah for the strength of self-control"'
        ],
        interestConnection: 'Like a martial arts master who maintains absolute balance and calm under pressure!',
        completionPrompt: 'Check off each item to earn your Master of Self-Control Trophy!'
      },
      reviewQuestion: {
        question: 'Why is Prophet Dhul-Kifl praised among "the patient" in the Quran?',
        hint: 'Think about his emotional self-control, never losing his temper, and fulfilling promises.',
        options: [
          {
            id: 'opt1',
            text: 'Because he kept his sacred pledge to be just, maintain his daily worship, and master his temper',
            isCorrect: true,
            explanation: 'Correct! Surah Al-Anbiya (21:85) honors him as one of the most steadfast and patient.'
          },
          {
            id: 'opt2',
            text: 'Because he shouted at everyone whenever he was tired',
            isCorrect: false,
            explanation: 'Dhul-Kifl was famous for never losing his temper, even when tired.'
          }
        ],
        correctAnswerExplanation: 'Prophet Dhul-Kifl exemplifies emotional regulation, consistency, and steadfast integrity.'
      },
      storyContent: {
        title: 'The Unshakeable Promise',
        theme: 'Self-Control, Daily Routine, Integrity & Patience',
        intro: 'Prophet Dhul-Kifl gave his word to lead with patience and fairness, and he never broke that pledge.',
        slides: [
          {
            id: 'kifl_slide_1',
            chapterNumber: 1,
            title: 'The Test of Calm',
            text: 'When visitors came knocking during his resting hours, Dhul-Kifl did not scowl. He welcomed them with a peaceful smile and helped them immediately.',
            interestConnection: 'Emotional regulation and resilience under pressure.',
            islamicTeaching: 'True strength is controlling yourself when angry.',
            iconName: 'ShieldCheck'
          }
        ],
        conclusion: 'Dhul-Kifl showed us that keeping our cool and honoring our word makes us champions in Allah’s eyes.',
        reflectionQuestion: 'What is a helpful habit you do every single day?'
      },
      visualContent: {
        title: 'Prophet Dhul-Kifl Visual PECS',
        subtitle: 'Self-control, patience, and promises',
        cards: [
          {
            stepNumber: 1,
            title: '1. Self-Control',
            simpleSentence: 'Dhul-Kifl stayed calm and never lost his cool.',
            arabicTerm: 'الصَّابِرِينَ',
            iconName: 'ShieldCheck',
            visualHint: 'Peaceful heart with shield of self-control'
          },
          {
            stepNumber: 2,
            title: '2. Keep Routine',
            simpleSentence: 'Dhul-Kifl kept his good daily habits steadily.',
            arabicTerm: 'الْوَفَاءُ بِالْعَهْدِ',
            iconName: 'Layers',
            visualHint: 'Checklist with happy checkmarks'
          }
        ],
        completionBadge: 'Master of Calm Badge'
      },
      stepContent: {
        title: 'Prophet Dhul-Kifl Self-Control Steps',
        goal: 'Practice emotional pausing and consistency.',
        steps: [
          {
            stepNumber: 1,
            title: 'Take a Calm Pause',
            instruction: 'Count to 5 before reacting when something is frustrating.',
            detail: 'The pause breaks the emotional trigger cycle.',
            iconName: 'ShieldCheck',
            repeatPhrase: 'I pause and breathe.'
          }
        ],
        successMessage: 'MashaAllah! You mastered self-control like Prophet Dhul-Kifl!'
      },
      flashcardContent: {
        title: 'Prophet Dhul-Kifl Flashcards',
        cards: [
          {
            id: 'fc_kifl_1',
            frontTerm: 'What does "Dhul-Kifl" mean?',
            frontArabic: 'ذُو الكِفْلِ',
            backDefinition: 'The Possessor of the Pledge / Guarantee — the one who fulfills every promise with patience.',
            backInterestAnalogy: 'A trusted champion who guarantees safety and fairness for all!',
            iconName: 'ShieldCheck'
          }
        ]
      },
      parentTips: {
        summary: 'Prophet Dhul-Kifl’s narrative directly targets impulse control, emotional dysregulation, and keeping structured daily routines.',
        reviewStrategy: 'Use the "Dhul-Kifl 5-Second Pause" whenever frustration rises during difficult transitions or tasks.',
        repetitionTip: 'Reward consistent routine completion with visual schedule tokens.',
        activitySuggestion: 'Create a visual daily checklist with icons for morning, school, worship, and bedtime.',
        sensoryBreakTip: 'Isometric hand presses or wall sits provide rapid proprioceptive grounding during anger triggers.',
        nextFormatRecommendation: 'Try Step-by-Step Checklist Mode for routine tracking.'
      },
      disclaimer: 'Grounded in Quran (21:85-86, 38:48), Tafsir Ibn Kathir, Bayyinah & Yaqeen Institutes, and Pearson Special Education UDL Research (2024).'
    }
  }
];
