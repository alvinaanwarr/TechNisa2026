import { CommunityPost } from '../types';

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    title: 'How we made Friday Jummu’ah peaceful: Noise-canceling headphones + back-row exit plan 🎧🕌',
    content: `For years, taking our 8-year-old son (who is autistic and highly sensitive to loud echoes) to the masjid caused intense sensory overwhelm and meltdowns from the loud PA microphone system.

Here is the 4-step routine that changed everything for us:
1. **Padded Over-Ear Noise-Dampening Headphones**: He wears them before stepping inside the lobby. It reduces the harsh microphone reverberations while still letting him hear the rhythm of the Adhan.
2. **Visual PECS Checklist in Hand**: We print the 4-step Jummu'ah card from Bridge (Arrive → Sunnah 2 Rakahs → Sit Calmly for Khutbah → 2 Rakahs Fard).
3. **Back-Corner Positioning Near the Exit**: Sitting in the last row means zero pressure if he needs a 2-minute sensory reset in the fresh air outside.
4. **Post-Masjid Positive Reinforcement**: A quiet walk and his favorite date-milk smoothie after prayer.

If anyone else is struggling with masjid visits, you are not alone! Take it 5 minutes at a time. May Allah reward every step our children take.`,
    category: 'salah_accommodations',
    categoryLabel: '🕌 Salah & Mosque Accommodations',
    authorName: 'Sister Maryam A.',
    authorRole: 'Mom of 8yo (Autism & Sensory)',
    authorAvatar: 'M',
    createdAt: '2 hours ago',
    upvotes: 48,
    userVote: null,
    commentsCount: 6,
    tags: ['SensoryFriendly', 'Jummuah', 'AutismParenting', 'MasjidInclusion'],
    pinned: true,
    linkedLessonTopic: 'How to Pray Salah',
    comments: [
      {
        id: 'comm-1-1',
        postId: 'post-1',
        authorName: 'Brother Tariq M.',
        authorRole: 'Dad of 10yo with ADHD',
        authorBadge: 'Top Contributor',
        content: 'SubhanAllah, the back-corner spot is an absolute game-changer! We also spoke to our local Imam beforehand who was so welcoming and even mentioned from the minbar that children of all neurotypes are always welcome in the House of Allah.',
        createdAt: '1 hour ago',
        upvotes: 19,
        userVote: null
      },
      {
        id: 'comm-1-2',
        postId: 'post-1',
        authorName: 'Umm Hamza',
        authorRole: 'Parent & Occupational Therapist',
        authorBadge: 'Educator',
        content: 'From an OT perspective, having a weighted lap pad or a small textured prayer mat piece in their hands during the Khutbah provides wonderful proprioceptive calming input. JazakAllahu Khayran for sharing this!',
        createdAt: '45 mins ago',
        upvotes: 14,
        userVote: null
      },
      {
        id: 'comm-1-3',
        postId: 'post-1',
        authorName: 'Fatima Z.',
        authorRole: 'Mom of 6yo',
        content: 'Thank you so much for this Sister Maryam. We were feeling so isolated avoiding the mosque on Fridays. We are going to try the headphones this week inshaAllah!',
        createdAt: '20 mins ago',
        upvotes: 8,
        userVote: null
      }
    ]
  },
  {
    id: 'post-2',
    title: 'Connecting Prophet Nuh’s (AS) Ark with our son’s deep special interest in ocean ships & marine biology 🚢🐋',
    content: `My 7-year-old son has had an intense hyperfocus on mega-ships, navigation, and sea animals for the past year. Traditional Sunday school lectures lost his attention in 30 seconds.

Using the Bridge custom interest generator, we framed **Prophet Nuh’s (AS) Ark**:
- We built the 3 levels of the Ark out of wooden blocks and assigned animal pairs.
- Explored how Allah taught Prophet Nuh (AS) ship craftsmanship in the desert (Tawakkul + STEM!).
- Talked about Allah’s mercy in protecting the believers and the animals from the stormy waves.

He stayed engaged for an entire hour and recited "Bismillah" before placing every single animal toy on board. Leveraging their passions is truly a Sunnah of reaching the heart!`,
    category: 'interests_stories',
    categoryLabel: '📖 Special Interests & Stories',
    authorName: 'Fatima & Rayan K.',
    authorRole: 'Parents of 7yo (ADHD & Hyperfocus)',
    authorAvatar: 'F',
    createdAt: '5 hours ago',
    upvotes: 36,
    userVote: null,
    commentsCount: 4,
    tags: ['SpecialInterests', 'ProphetStories', 'ADHDWins', 'HandsOnLearning'],
    linkedLessonTopic: 'Prophet Nuh and the Ark',
    comments: [
      {
        id: 'comm-2-1',
        postId: 'post-2',
        authorName: 'Zayd E.',
        authorRole: 'Dad of 6yo with Autism',
        content: 'MashaAllah! We did something similar with our son’s train interest for the Hajj journey (Makkah → Mina → Arafat train). It makes abstract concepts tangible and joyful.',
        createdAt: '3 hours ago',
        upvotes: 11,
        userVote: null
      },
      {
        id: 'comm-2-2',
        postId: 'post-2',
        authorName: 'Sister Aisha B.',
        authorRole: 'Islamic Madrassa Educator',
        authorBadge: 'Educator',
        content: 'When children see their favorite topics honored in Islamic education, their eyes light up with pride. Keep inspiring us!',
        createdAt: '2 hours ago',
        upvotes: 7,
        userVote: null
      }
    ]
  },
  {
    id: 'post-3',
    title: 'Bathroom Mirror Lamination Hack for Wudu: 3-step visual cards solved water resistance! 💧',
    content: `My 6-year-old daughter used to get distressed by water dripping down her forearms and would rush away from the sink before completing Wudu.

Two small adjustments made all the difference:
1. **Laminated Bridge PECS Strips on the Mirror**: 1. Wash Hands & Mouth, 2. Wash Face & Arms, 3. Wipe Head & Wash Feet. She loves tapping each card as "Done".
2. **Soft Microfiber Pat-Down Towel**: Kept right beside her elbows so water never trickles down past the wrist to trigger tactile discomfort.

Now she says *"Bismillah!"* with a big smile every single time. Simple visual structure removes the unpredictability!`,
    category: 'visual_pecs',
    categoryLabel: '🌟 Visual Schedules & PECS',
    authorName: 'Umm Noor',
    authorRole: 'Mom of 6yo (Sensory Processing)',
    authorAvatar: 'N',
    createdAt: '1 day ago',
    upvotes: 52,
    userVote: null,
    commentsCount: 5,
    tags: ['Wudu', 'VisualSchedules', 'SensoryTips', 'TactileAccommodations'],
    linkedLessonTopic: 'How to Make Wudu',
    comments: [
      {
        id: 'comm-3-1',
        postId: 'post-3',
        authorName: 'Bilal H.',
        authorRole: 'Autism Dad of 2',
        content: 'The elbow microfiber towel trick is brilliant! The trickling water feeling on sleeves was our exact roadblock too. Trying this tonight!',
        createdAt: '18 hours ago',
        upvotes: 9,
        userVote: null
      }
    ]
  },
  {
    id: 'post-4',
    title: 'Daily Win: My non-verbal daughter pointed to the Ka’bah card & smiled while hearing the audio du’a! 🕋❤️',
    content: `I had to share this with parents who understand how monumental small milestones are.

My 5-year-old non-verbal daughter has been exploring the Hajj & Ka'bah lesson on Bridge using the Calm Mode audio. Today while playing near her sensory rug, she walked over to the iPad, pressed the audio button for *"SubhanAllah"*, and placed her toy sheep next to the Ka'bah visual card with the biggest grin.

Never underestimate the seeds of Iman being planted in our children’s pure hearts (*Fitrah*). Every single small connection is celebrated by Allah! Alhamdulillah for this community.`,
    category: 'daily_wins',
    categoryLabel: '💡 Daily Wins & Gratitude',
    authorName: 'Umm Safiyyah',
    authorRole: 'Mom of 5yo (Non-verbal, Autism)',
    authorAvatar: 'S',
    createdAt: '1 day ago',
    upvotes: 79,
    userVote: null,
    commentsCount: 8,
    tags: ['DailyWins', 'Alhamdulillah', 'NonVerbalCommunication', 'Fitrah'],
    linkedLessonTopic: 'Pillar 5: Hajj (Pilgrimage)',
    comments: [
      {
        id: 'comm-4-1',
        postId: 'post-4',
        authorName: 'Sister Layla T.',
        authorRole: 'Speech-Language Pathologist',
        authorBadge: 'Professional',
        content: 'Alhamdulillah! Multi-sensory pairing (visual + audio + tactile toy) is the gold standard for receptive language and spiritual connection. What a beautiful milestone!',
        createdAt: '22 hours ago',
        upvotes: 18,
        userVote: null
      },
      {
        id: 'comm-4-2',
        postId: 'post-4',
        authorName: 'Brother Harun S.',
        authorRole: 'Parent of 9yo',
        content: 'This brought tears of joy to my eyes reading this. May Allah bless your sweet daughter and fill her heart with divine peace.',
        createdAt: '16 hours ago',
        upvotes: 12,
        userVote: null
      }
    ]
  },
  {
    id: 'post-5',
    title: 'Sensory-Friendly Ramadan Ideas: Suhoor smoothie bars, gentle fasting, & sensory moon crafts 🌙✨',
    content: `With Ramadan around the corner, many of us worry about disruption to routines, medication timings, and fasting expectations.

Here are strategies our neurodivergent parent circle put together:
- **"Kindness Fasting" (Sawm al-Lisaan)**: For children who cannot physically fast due to medical/sensory nutritional needs, teach fasting from unkind words or practicing extra smiles and Sadaqah as their Ramadan goal.
- **Suhoor Sensory Smoothie Bar**: Pre-blended dates, oats, banana, and milk in sensory-safe cups with wide straws.
- **Iftar Countdown Visual Wheel**: A rotating cardboard clock showing Sunnah dates → water → Maghrib prayer → family meal.
- **Calm Taraweeh Corner at Home**: Fairy lights, plush floor pillows, and quiet Islamic picture books while parents pray.

What accommodations are you planning in your homes this Ramadan?`,
    category: 'ramadan_fasting',
    categoryLabel: '🤲 Ramadan & Fasting Tips',
    authorName: 'Dr. Asma R.',
    authorRole: 'Parent & Pediatric SLP',
    authorAvatar: 'A',
    createdAt: '2 days ago',
    upvotes: 41,
    userVote: null,
    commentsCount: 7,
    tags: ['Ramadan', 'Siyam', 'SensoryRoutines', 'FamilyAccommodations'],
    linkedLessonTopic: 'Pillar 3: Siyam (Fasting)',
    comments: [
      {
        id: 'comm-5-1',
        postId: 'post-5',
        authorName: 'Khadijah W.',
        authorRole: 'Mom of 8yo with Sensory Needs',
        content: 'The "Kindness Fasting" concept is so empowering! It helped my son feel included when his older siblings were fasting without feeling any shame or exclusion.',
        createdAt: '1 day ago',
        upvotes: 15,
        userVote: null
      }
    ]
  },
  {
    id: 'post-6',
    title: 'Question: Advice for sensory-seeking 5yo who struggles with prayer rug textures? 🧵',
    content: `Assalamu Alaikum parents! My 5-year-old son loves the movements of Salah (especially Sujood!), but he gets very agitated if his forehead touches coarse, scratchy velvet or tassels on traditional prayer mats.

Has anyone found ultra-soft minky fabrics, smooth cotton mats, or foam memory mats that work well for tactile sensitivity? Would love product or DIY recommendations!`,
    category: 'qa_advice',
    categoryLabel: '❓ Q&A & Community Advice',
    authorName: 'Bilal H.',
    authorRole: 'Dad of 5yo (Sensory Seeking)',
    authorAvatar: 'B',
    createdAt: '3 days ago',
    upvotes: 23,
    userVote: null,
    commentsCount: 9,
    tags: ['TactileSensitivity', 'PrayerRug', 'SalahTips', 'ParentAdvice'],
    comments: [
      {
        id: 'comm-6-1',
        postId: 'post-6',
        authorName: 'Sister Amina D.',
        authorRole: 'Mom of 7yo',
        content: 'Wa Alaikum Assalam! We purchased a plain, organic bamboo-cotton baby blanket and cut it to child prayer mat size (no fringes, zero rough seams). It is silky smooth and washes easily. He calls it his "Cloud Mat"!',
        createdAt: '2 days ago',
        upvotes: 16,
        userVote: null
      },
      {
        id: 'comm-6-2',
        postId: 'post-6',
        authorName: 'Brother Yusuf N.',
        authorRole: 'Occupational Therapist',
        authorBadge: 'OT Specialist',
        content: 'Memory foam orthopedic prayer rugs with a smooth plush fleece top also offer gentle pressure relief for sensitive knees and foreheads during Sujood.',
        createdAt: '2 days ago',
        upvotes: 11,
        userVote: null
      }
    ]
  },
  {
    id: 'post-7',
    title: 'Checklist: What to ask your local Islamic school / Madrassa for neuro-inclusive support 📋🏫',
    content: `Assalamu Alaikum! As an Islamic educator who specializes in special education, here are 6 reasonable accommodations every parent can advocate for:

1. **Sensory Break Card**: A subtle visual card the learner can show to take a 3-minute hallway sensory break without having to speak.
2. **Chunked Surah Memorization**: Breaking Ayahs into 2-3 word phrases rather than full long verses.
3. **Alternative Seating**: Allowing wiggle cushions, wobble stools, or sitting against a wall during Halaqah.
4. **Visual Agendas**: Having the teacher write or post pictorial steps of the 45-minute class agenda on the whiteboard.
5. **Quiet Wudu Space**: A non-crowded sink option before Salah time.
6. **Positive Reinforcement Charts**: Celebrating effort, kindness, and participation over speed of memorization.

Feel free to print this and take it to your parent-teacher meetings!`,
    category: 'resources',
    categoryLabel: '📚 Guides & Resources',
    authorName: 'Sister Hiba M.',
    authorRole: 'Islamic Special Ed Consultant & Parent',
    authorAvatar: 'H',
    createdAt: '4 days ago',
    upvotes: 64,
    userVote: null,
    commentsCount: 11,
    tags: ['MadrassaInclusion', 'IEPAccommodations', 'IslamicEducation', 'Advocacy'],
    comments: [
      {
        id: 'comm-7-1',
        postId: 'post-7',
        authorName: 'Brother Mustafa K.',
        authorRole: 'Sunday School Administrator',
        authorBadge: 'Madrassa Admin',
        content: 'As an administrator, we welcome this so much. When parents come with specific, actionable strategies like visual agendas and break cards, it makes training our volunteer teachers so much easier and fruitful.',
        createdAt: '3 days ago',
        upvotes: 21,
        userVote: null
      }
    ]
  }
];

export const COMMUNITY_CATEGORIES = [
  { id: 'all', label: 'All Discussions', icon: 'Sparkles', color: 'bg-slate-100 text-slate-800' },
  { id: 'salah_accommodations', label: '🕌 Salah & Mosque', icon: 'Compass', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { id: 'visual_pecs', label: '🌟 Visual Schedules & PECS', icon: 'Layers', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
  { id: 'interests_stories', label: '📖 Special Interests & Stories', icon: 'BookOpen', color: 'bg-purple-50 text-purple-800 border-purple-200' },
  { id: 'ramadan_fasting', label: '🤲 Ramadan & Siyam', icon: 'Moon', color: 'bg-amber-50 text-amber-800 border-amber-200' },
  { id: 'daily_wins', label: '💡 Daily Wins & Gratitude', icon: 'Heart', color: 'bg-rose-50 text-rose-800 border-rose-200' },
  { id: 'qa_advice', label: '❓ Q&A & Advice', icon: 'HelpCircle', color: 'bg-blue-50 text-blue-800 border-blue-200' },
  { id: 'resources', label: '📚 Guides & Printables', icon: 'FileText', color: 'bg-teal-50 text-teal-800 border-teal-200' }
] as const;
