import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Server-side Gemini API client (lazy / protected initialization)
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Bridge Adaptive Islamic Learning API" });
});

// AI Lesson Generation Endpoint
app.post("/api/generate-lesson", async (req, res) => {
  try {
    const {
      topic = "How to Make Wudu",
      ageRange = "7-9",
      learningPreferences = ["visual", "short_instructions"],
      interests = ["Space"],
      activeFormat = "visual",
      learnerNickname = "Learner",
      readingComplexity = "simple",
      isCalmMode = false
    } = req.body;

    const primaryInterest = interests && interests.length > 0 ? interests[0] : "Nature";
    const ai = getAiClient();

    if (!ai) {
      // Return structured fallback response if API key is not configured in this environment
      console.log("No GEMINI_API_KEY found, using structured fallback response.");
      return res.json({
        success: true,
        source: "fallback",
        data: buildFallbackLesson({
          topic,
          ageRange,
          learningPreferences,
          selectedInterest: primaryInterest,
          activeFormat,
          learnerNickname,
          isCalmMode
        })
      });
    }

    const systemPrompt = `You are Bridge AI, an expert adaptive curriculum specialist creating personalized Islamic learning experiences for neurodivergent children (autism, ADHD, sensory preferences, visual learners).
Core Principle: "The child should not have to adapt to the lesson. The lesson should adapt to the child."

Strict Rules:
1. Preserve 100% authentic, correct Islamic teachings (e.g. Wudu order, 5 Pillars, Salah, Adab, Quranic morals).
2. NEVER diagnose, provide medical advice, or reference medical conditions.
3. Adapt vocabulary and presentation strictly for age range ${ageRange} and preference(s): ${learningPreferences.join(", ")}.
4. Weave the child's passionate interest ("${primaryInterest}") naturally into relatable metaphors, analogies, visual hints, and interactive activities.
5. Keep language clear, concrete, warm, sensory-friendly, and uplifting.
6. Generate a comprehensive interactive lesson with:
   - Clear Title & Learning Objective
   - Warm Introduction connecting the Islamic concept with their interest
   - Step-by-Step Lesson Steps (one clear action per step with sensory hints and repeat phrases)
   - A hands-on, engaging Activity with actionable check items
   - An interactive Review Question with multiple-choice options (1 correct, clear explanations for all)
   - Plus multi-format content for Story, Visual, Step-by-Step, and Flashcard views, and Parent Tips.
`;

    const userPrompt = `Create a complete personalized Islamic lesson on "${topic}" for "${learnerNickname}" (Age: ${ageRange}).
Key Learning Preferences: ${learningPreferences.join(", ")}
Learner Passion/Interest: ${primaryInterest}
Reading Level: ${readingComplexity}
Sensory Calm Mode: ${isCalmMode ? "Enabled (keep visuals clean, text minimal, tone soothing)" : "Standard"}
Preferred Format: ${activeFormat}

Generate a comprehensive JSON matching the schema.`;

    const schemaConfig = {
      systemInstruction: systemPrompt,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          topic: { type: Type.STRING },
          title: { type: Type.STRING },
          learningObjective: { type: Type.STRING },
          introduction: { type: Type.STRING },
          ageRange: { type: Type.STRING },
          selectedInterest: { type: Type.STRING },
          lessonSteps: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                stepNumber: { type: Type.INTEGER },
                title: { type: Type.STRING },
                instruction: { type: Type.STRING },
                tip: { type: Type.STRING },
                detail: { type: Type.STRING },
                arabicTerm: { type: Type.STRING },
                arabicTransliteration: { type: Type.STRING },
                iconName: { type: Type.STRING },
                repeatPhrase: { type: Type.STRING },
                sensoryTip: { type: Type.STRING },
                actionPrompt: { type: Type.STRING }
              },
              required: ["stepNumber", "title", "instruction", "detail", "iconName"]
            }
          },
          activity: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              type: { type: Type.STRING },
              instructions: { type: Type.STRING },
              actionItems: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              interestConnection: { type: Type.STRING },
              completionPrompt: { type: Type.STRING }
            },
            required: ["title", "type", "instructions", "actionItems", "interestConnection"]
          },
          reviewQuestion: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              hint: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    text: { type: Type.STRING },
                    isCorrect: { type: Type.BOOLEAN },
                    explanation: { type: Type.STRING }
                  },
                  required: ["id", "text", "isCorrect", "explanation"]
                }
              },
              correctAnswerExplanation: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswerExplanation"]
          },
          storyContent: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              theme: { type: Type.STRING },
              intro: { type: Type.STRING },
              slides: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    chapterNumber: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    text: { type: Type.STRING },
                    subtext: { type: Type.STRING },
                    interestConnection: { type: Type.STRING },
                    islamicTeaching: { type: Type.STRING },
                    iconName: { type: Type.STRING },
                    actionPrompt: { type: Type.STRING },
                  },
                  required: ["id", "chapterNumber", "title", "text", "interestConnection", "islamicTeaching", "iconName"]
                }
              },
              conclusion: { type: Type.STRING },
              reflectionQuestion: { type: Type.STRING }
            },
            required: ["title", "theme", "intro", "slides", "conclusion", "reflectionQuestion"]
          },
          visualContent: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              subtitle: { type: Type.STRING },
              completionBadge: { type: Type.STRING },
              cards: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stepNumber: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    simpleSentence: { type: Type.STRING },
                    arabicTerm: { type: Type.STRING },
                    arabicTransliteration: { type: Type.STRING },
                    iconName: { type: Type.STRING },
                    visualHint: { type: Type.STRING },
                    badge: { type: Type.STRING }
                  },
                  required: ["stepNumber", "title", "simpleSentence", "iconName", "visualHint"]
                }
              }
            },
            required: ["title", "subtitle", "completionBadge", "cards"]
          },
          stepContent: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              goal: { type: Type.STRING },
              successMessage: { type: Type.STRING },
              steps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stepNumber: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    instruction: { type: Type.STRING },
                    detail: { type: Type.STRING },
                    repeatPhrase: { type: Type.STRING },
                    iconName: { type: Type.STRING },
                    sensoryTip: { type: Type.STRING }
                  },
                  required: ["stepNumber", "title", "instruction", "detail", "iconName"]
                }
              }
            },
            required: ["title", "goal", "successMessage", "steps"]
          },
          flashcardContent: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              cards: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    frontTerm: { type: Type.STRING },
                    frontArabic: { type: Type.STRING },
                    frontTransliteration: { type: Type.STRING },
                    frontSubtext: { type: Type.STRING },
                    backDefinition: { type: Type.STRING },
                    backInterestAnalogy: { type: Type.STRING },
                    backActionOrQuestion: { type: Type.STRING },
                    iconName: { type: Type.STRING }
                  },
                  required: ["id", "frontTerm", "backDefinition", "backInterestAnalogy", "iconName"]
                }
              }
            },
            required: ["title", "cards"]
          },
          parentTips: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              reviewStrategy: { type: Type.STRING },
              repetitionTip: { type: Type.STRING },
              activitySuggestion: { type: Type.STRING },
              sensoryBreakTip: { type: Type.STRING },
              nextFormatRecommendation: { type: Type.STRING }
            },
            required: ["summary", "reviewStrategy", "repetitionTip", "activitySuggestion", "sensoryBreakTip", "nextFormatRecommendation"]
          }
        },
        required: ["topic", "title", "learningObjective", "introduction", "ageRange", "selectedInterest", "lessonSteps", "activity", "reviewQuestion", "storyContent", "visualContent", "stepContent", "flashcardContent", "parentTips"]
      }
    };

    // Execute with retry support for transient 503 / 429 errors and model fallback
    let response: any = null;
    const modelsToTry = ["gemini-2.5-flash", "gemini-2.5-flash-lite"];

    for (const modelName of modelsToTry) {
      try {
        response = await ai.models.generateContent({
          model: modelName,
          contents: userPrompt,
          config: schemaConfig
        });
        if (response && response.text) {
          break;
        }
      } catch (err: any) {
        console.warn(`Attempt with ${modelName} encountered: ${err?.message || err}. Trying next fallback.`);
        // Small pause before next attempt
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    }

    if (!response || !response.text) {
      throw new Error("Unable to obtain text response from models");
    }

    const parsedData = JSON.parse(response.text || "{}");
    
    // Ensure lessonSteps and stepContent match seamlessly if needed
    const lessonSteps = parsedData.lessonSteps && parsedData.lessonSteps.length > 0
      ? parsedData.lessonSteps
      : (parsedData.stepContent?.steps || []).map((s: any, idx: number) => ({
          stepNumber: s.stepNumber || idx + 1,
          title: s.title || `Step ${idx + 1}`,
          instruction: s.instruction || s.detail,
          tip: s.sensoryTip || s.repeatPhrase,
          detail: s.detail || s.instruction,
          iconName: s.iconName || "Sparkles",
          repeatPhrase: s.repeatPhrase,
          sensoryTip: s.sensoryTip
        }));

    const fullLesson = {
      id: `lesson-${Date.now()}`,
      ...parsedData,
      title: parsedData.title || parsedData.topic || topic,
      learningObjective: parsedData.learningObjective || `Learn the essential concepts and practices of ${topic}.`,
      introduction: parsedData.introduction || `Welcome ${learnerNickname}! Let's discover ${topic} through exciting ${primaryInterest} connections.`,
      lessonSteps,
      learnerNickname,
      activeFormat,
      learningPreferences,
      isCalmMode,
      disclaimer: "Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner.",
      generatedAt: new Date().toISOString()
    };

    return res.json({ success: true, source: "gemini", data: fullLesson });
  } catch (error) {
    console.error("Gemini lesson generation error:", error);
    // Fallback gracefully
    const fallback = buildFallbackLesson(req.body);
    return res.json({ success: true, source: "fallback-recovery", data: fallback });
  }
});

// Fallback lesson builder for rock-solid reliability
function buildFallbackLesson(params: any) {
  const topic = params.topic || "How to Make Wudu";
  const interest = params.selectedInterest || (params.interests && params.interests[0]) || "Space";
  const nickname = params.learnerNickname || "Learner A";
  const age = params.ageRange || "7-9";

  const lessonSteps = [
    {
      stepNumber: 1,
      title: "Pure Intention & Saying Bismillah",
      instruction: "Pause quietly in your heart, make your intention for Allah, and whisper Bismillah.",
      tip: "Take a calm, slow breath to center your focus.",
      detail: "Find a quiet space to prepare for your lesson with peace.",
      arabicTerm: "بِسْمِ اللَّهِ",
      arabicTransliteration: "Bismillah (In the Name of Allah)",
      iconName: "Sparkles",
      repeatPhrase: "Bismillah, I begin with Allah's blessings.",
      sensoryTip: "Take two calm deep breaths and feel your hands relax.",
      actionPrompt: "Whisper Bismillah softly."
    },
    {
      stepNumber: 2,
      title: `Practice the Essential Routine of ${topic}`,
      instruction: `Follow the sacred steps of ${topic} with gentle patience, one action at a time.`,
      tip: `Think of how ${interest.toLowerCase()} follows precise, beautiful patterns.`,
      detail: "Take as much time as you need without rushing through the steps.",
      arabicTerm: "العَمَلُ الصَّالِح",
      arabicTransliteration: "Al-Amal As-Salih (Good Deed)",
      iconName: "Droplets",
      repeatPhrase: "One calm step at a time with care.",
      sensoryTip: "Feel the rhythmic, steady pace of your movement.",
      actionPrompt: "Practice this step with gentle focus."
    },
    {
      stepNumber: 3,
      title: "Complete with Gratitude & Alhamdulillah",
      instruction: "Thank Allah for the blessing of learning and keeping your heart and mind clean.",
      tip: "Smile and share a warm greeting with family or teachers.",
      detail: "Completing your lesson with gratitude brings barakah (blessings) into your day.",
      arabicTerm: "الْحَمْدُ لِلَّهِ",
      arabicTransliteration: "Alhamdulillah (All Praise is for Allah)",
      iconName: "Sun",
      repeatPhrase: "Alhamdulillah for my clean mind and joyful heart.",
      sensoryTip: "Give yourself a gentle high five and a calm smile.",
      actionPrompt: "Say Alhamdulillah with a happy heart."
    }
  ];

  const activity = {
    title: `${interest} Explorer Hands-On Practice`,
    type: "hands-on",
    instructions: `Practice the steps of ${topic} using your ${interest} explorer mindset! Follow these 3 interactive mission checkpoints:`,
    actionItems: [
      `1. Find a calm space and whisper 'Bismillah' before beginning.`,
      `2. Practice the core actions of ${topic} slowly and mindfully.`,
      `3. Celebrate completing your practice by saying 'Alhamdulillah' and sharing a smile.`
    ],
    interestConnection: `Just like every ${interest.toLowerCase()} adventure requires patience and preparation, our Islamic practice trains our focus and mindfulness.`,
    completionPrompt: "Mark all checkpoints complete to unlock your Explorer Badge!"
  };

  const reviewQuestion = {
    question: `What is the most important way to begin learning or practicing ${topic}?`,
    hint: "Think about the phrase we say to ask for Allah's blessing at the start.",
    options: [
      {
        id: "opt-1",
        text: "By rushing through as quickly as possible without pausing",
        isCorrect: false,
        explanation: "In Islam, we take our time and practice with mindfulness (Ihsan) rather than rushing."
      },
      {
        id: "opt-2",
        text: "With pure intention in our heart and saying Bismillah",
        isCorrect: true,
        explanation: "Correct! We start every good deed with pure intention for Allah and saying Bismillah."
      },
      {
        id: "opt-3",
        text: "By skipping the preparation steps completely",
        isCorrect: false,
        explanation: "Preparation helps our mind and heart get ready to connect with Allah."
      }
    ],
    correctAnswerExplanation: "Starting with pure intention in the heart and saying Bismillah invites Allah's blessing into everything we do!"
  };

  return {
    id: `fallback-${Date.now()}`,
    topic,
    title: `${topic} (${interest} Edition)`,
    learningObjective: `Understand and practice the essential steps of ${topic} with confidence and joy.`,
    introduction: `Welcome ${nickname}! Today we will explore ${topic} using our love for ${interest} to make every step clear, fun, and memorable.`,
    lessonSteps,
    activity,
    reviewQuestion,
    ageRange: age,
    learnerNickname: nickname,
    selectedInterest: interest,
    activeFormat: params.activeFormat || "step_by_step",
    learningPreferences: params.learningPreferences || ["visual", "short_instructions", "one_step"],
    isCalmMode: !!params.isCalmMode,
    storyContent: {
      title: `${interest} Discovery: Exploring ${topic}`,
      theme: `${interest} & Islamic Learning`,
      intro: `Welcome aboard! Let's explore the wonderful lesson of ${topic} through our love for ${interest}.`,
      slides: [
        {
          id: "fb-s1",
          chapterNumber: 1,
          title: "Starting with Pure Intention",
          text: `Just like every great ${interest.toLowerCase()} adventure starts with a clear plan, our lesson begins with a quiet intention in our heart (Niyyah) and saying 'Bismillah'.`,
          interestConnection: `Preparing flight equipment with careful attention.`,
          islamicTeaching: `Always start with Bismillah and pure intention for Allah.`,
          iconName: "Sparkles",
          actionPrompt: "Whisper Bismillah in your heart."
        },
        {
          id: "fb-s2",
          chapterNumber: 2,
          title: "Learning the Essential Steps",
          text: `In Islam, ${topic} teaches us how to be clean, mindful, and peaceful. Each step connects us to our Creator who made the vast stars and all creatures.`,
          interestConnection: `Observing the beauty of patterns and routines in ${interest.toLowerCase()}.`,
          islamicTeaching: `Allah loves those who turn to Him in purity and kindness.`,
          iconName: "Heart"
        },
        {
          id: "fb-s3",
          chapterNumber: 3,
          title: "Practicing with Joy & Peace",
          text: `When we complete ${topic}, our heart feels light, refreshed, and ready to do good deeds and pray with serenity.`,
          interestConnection: `Mission accomplished with harmony and smiles.`,
          islamicTeaching: `Consistent practice brings barakah (blessings) into our daily life.`,
          iconName: "CheckCircle2"
        }
      ],
      conclusion: `${topic} helps us stay close to Allah while celebrating the wonderful things we love in His creation!`,
      reflectionQuestion: `What was your favorite part of learning about ${topic}?`
    },
    visualContent: {
      title: `${topic} Visual Guide (${interest} Edition)`,
      subtitle: `Clear, step-by-step visual cards tailored for ${nickname}`,
      completionBadge: `🌟 ${interest} Master Learner Badge!`,
      cards: [
        {
          stepNumber: 1,
          title: "1. Pure Heart & Intention",
          simpleSentence: "Say Bismillah and decide to learn for Allah.",
          arabicTerm: "بِسْمِ اللَّهِ",
          arabicTransliteration: "Bismillah",
          iconName: "Sparkles",
          visualHint: "Clear and pure intention in the heart.",
          badge: "Step 1"
        },
        {
          stepNumber: 2,
          title: "2. Practice the Core Action",
          simpleSentence: `Perform the essential steps of ${topic} with care.`,
          arabicTerm: "العَمَلُ الصَّالِح",
          arabicTransliteration: "Good Action",
          iconName: "Droplets",
          visualHint: "Gentle, steady movement.",
          badge: "Step 2"
        },
        {
          stepNumber: 3,
          title: "3. Complete with Gratitude",
          simpleSentence: "Say Alhamdulillah (Praise be to Allah) for what you learned.",
          arabicTerm: "الْحَمْدُ لِلَّهِ",
          arabicTransliteration: "Alhamdulillah",
          iconName: "Smile",
          visualHint: "Smiling and feeling peaceful.",
          badge: "Step 3"
        }
      ]
    },
    stepContent: {
      title: `Step-by-Step: ${topic}`,
      goal: `Follow each step one at a time at your own comfortable pace.`,
      steps: [
        {
          stepNumber: 1,
          title: "Step 1: Preparation & Bismillah",
          instruction: "Pause, take a slow breath, and whisper Bismillah.",
          detail: "Find a quiet space to focus on the lesson.",
          repeatPhrase: "Bismillah, I begin with Allah's name.",
          iconName: "Sparkles",
          sensoryTip: "Take 2 calm deep breaths."
        },
        {
          stepNumber: 2,
          title: "Step 2: Follow the Sacred Routine",
          instruction: `Complete each part of ${topic} in order.`,
          detail: "Take as much time as you need without rushing.",
          repeatPhrase: "One calm step at a time.",
          iconName: "CheckSquare",
          sensoryTip: "Feel the calm rhythm of the activity."
        },
        {
          stepNumber: 3,
          title: "Step 3: Celebrate & Say Alhamdulillah",
          instruction: "Thank Allah for the blessing of learning something good today.",
          detail: "You did wonderful work today!",
          repeatPhrase: "Alhamdulillah for my clean mind and heart.",
          iconName: "Sun",
          sensoryTip: "Give yourself a gentle high five or quiet smile."
        }
      ],
      successMessage: `Mabrook! You completed the ${topic} guide!`
    },
    flashcardContent: {
      title: `${topic} Vocabulary & Concepts`,
      cards: [
        {
          id: "fc-1",
          frontTerm: topic,
          frontArabic: "دَرْسٌ إِسْلَامِيّ",
          frontTransliteration: "Islamic Lesson",
          frontSubtext: "Sacred learning",
          backDefinition: `An essential Islamic concept of worship, good character, and closeness to Allah.`,
          backInterestAnalogy: `Like having a special superpower tool in our ${interest.toLowerCase()} kit.`,
          backActionOrQuestion: `Why is this topic important in our daily lives?`,
          iconName: "BookOpen"
        },
        {
          id: "fc-2",
          frontTerm: "Bismillah",
          frontArabic: "بِسْمِ اللَّهِ",
          frontTransliteration: "Bismillah",
          frontSubtext: "In the name of Allah",
          backDefinition: "The phrase we say before starting any good action to invite Allah's blessing.",
          backInterestAnalogy: "The green light start button for every positive endeavor.",
          backActionOrQuestion: "When will you say Bismillah today?",
          iconName: "Sparkles"
        },
        {
          id: "fc-3",
          frontTerm: "Alhamdulillah",
          frontArabic: "الْحَمْدُ لِلَّهِ",
          frontTransliteration: "Alhamdulillah",
          frontSubtext: "All praise belongs to Allah",
          backDefinition: "Expressing thankfulness and gratitude for all the good blessings in our life.",
          backInterestAnalogy: "Like celebrating a successful mission completion with gratitude.",
          backActionOrQuestion: "Name one thing you are grateful for right now.",
          iconName: "Heart"
        }
      ]
    },
    parentTips: {
      summary: `Tailored educational suggestions for teaching ${topic} using ${interest} themes.`,
      reviewStrategy: "Review 1-2 cards or slides at a time in short 5-minute micro-sessions.",
      repetitionTip: "Use physical props or routine songs to reinforce the sequence.",
      activitySuggestion: `Connect the lesson with physical drawing or play based on ${interest}.`,
      sensoryBreakTip: "Provide sensory breaks whenever the learner requests or shows signs of fatigue.",
      nextFormatRecommendation: "Switch to Visual or Step-by-Step mode if narrative text feels heavy."
    },
    disclaimer: "Bridge is an educational support tool. It does not provide medical, diagnostic, therapeutic, or professional special-education advice. Every learner is different, and parents and educators should choose the approaches that work best for their learner."
  };
}

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Bridge Server running on http://localhost:${PORT}`);
  });
}

startServer();
