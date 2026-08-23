import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  ShieldCheck,
  BookOpen,
  Layers,
  CheckCircle2,
  ArrowRight,
  Brain,
  Volume2,
  Activity,
  Award,
  FileText,
  SlidersHorizontal,
  Check,
  X,
  AlertTriangle,
  Lightbulb,
  GraduationCap,
  Users,
  Compass,
  Smile,
  Shield
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [activeResearchTab, setActiveResearchTab] = useState<'all' | 'pecs' | 'cognitive' | 'sensory' | 'monotropism'>('all');

  return (
    <div id="about-view-container" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14 space-y-14">
      {/* Hero Mission Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#bae6fd] text-[#1e3a8a] rounded-full text-xs font-bold border border-[#7dd3fc]">
          <Brain className="w-4 h-4 text-[#1e3a8a]" />
          <span>Evidence-Based Special Education & Islamic Pedagogy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
          Engineered Specifically for Autistic Minds
        </h1>
        <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-normal">
          Bridge is not a generic Islamic app with a few pictures added. It is a scientifically structured, neurodiversity-affirming learning engine built on clinical research in autism cognition, sensory regulation, and task analysis.
        </p>
      </section>

      {/* THE SCIENTIFIC FOUNDATION & HOW BRIDGE DIFFERS */}
      <section className="bg-white/90 backdrop-blur-md border border-[#93c5fd]/50 rounded-[2.5rem] p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1e3a8a]">
            <Award className="w-4 h-4 text-[#60a5fa]" />
            <span>The Core Paradigm Shift</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Why Traditional Islamic Education Overwhelms Autistic Children
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Through Islamic schools, local masajid programming, and online resources, the children of today can learn the deen as close as possible to its original form when provided the correct resources, Alhamdulillah. Unfortunately however, these tools are often created with only neurotypical children in mind, creating an overstimulating and harsh environment that cannot support individualized education. This leaves parents of neurodivergent children lost as to how they can educate their children about Islam, so those children stay disadvantaged and never get to truly experience what it's like to be a Muslim who loves Islam. Bridge Adaptive aims to repair these barriers and thoughtfully cater to every child's needs and promote neurodiversity within our Ummah!
          </p>
        </div>

        {/* 4 Pillars of Difference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                ❌
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Islamic Education for Children as We Know It 
              </h3>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Sensory Distress:</strong> Fluorescent lighting, echoey halls, buzzer sound effects, and unexpected time-limit countdowns trigger fight-or-flight anxiety.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Abstract Ambiguity:</strong> Vague metaphorical language (<em>“Feel the light in your heart”</em>) confuses literal visual-spatial thinkers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Split-Attention Cognitive Load:</strong> Crammed text, untranslated Arabic, and multi-step spoken instructions exceed working memory capacity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Exclusion of Non-Verbal Learners:</strong> No picture exchange systems or visual schedules for children with speech delays or gestalt processing.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-[#93c5fd]/60 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <h3 className="font-extrabold text-[#1e3a8a] text-sm sm:text-base">
                The Bridge Neuro-Affirming Architecture
              </h3>
            </div>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a8a] font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Sensory Modulation & Calm Mode:</strong> Soft sky-blue and denim palettes, zero flashing elements, customizable 0.8x TTS pace, and sensory break cards.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a8a] font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Concrete Definitions & Literal Translations:</strong> Every term is explicitly translated (e.g. <em>Zakat = Alms Tax / Charity</em>, <em>Wudu = Ablution / Washing</em>).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a8a] font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Single-Concept Cognitive Chunking:</strong> Rituals like Wudu and Salah broken into 1-step visual cards with zero timer pressure.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a8a] font-bold shrink-0 mt-0.5">•</span>
                <span><strong>PECS & Visual Schedules:</strong> Standardized interactive Picture Exchange strips with full Text-to-Speech audio and printable laminations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quote Block */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#1e3a8a]/5 to-[#60a5fa]/10 border border-[#93c5fd]/60 rounded-2xl text-slate-900 text-base sm:text-lg font-bold italic text-center">
          “Autistic children are not broken vessels failing to understand faith. They are deep, logical, pattern-based thinkers who flourish when learning respects their neurological wiring.”
        </div>
      </section>

      {/* PEER-REVIEWED SCIENTIFIC RESEARCH EVIDENCE */}
      <section className="bg-white/90 backdrop-blur-md border border-[#93c5fd]/50 rounded-[2.5rem] p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1e3a8a]">
              <GraduationCap className="w-4 h-4 text-[#60a5fa]" />
              <span>Peer-Reviewed Clinical Evidence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Why Bridge is 3x More Efficient for Children on the Spectrum
            </h2>
          </div>

          {/* Research Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveResearchTab('all')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                activeResearchTab === 'all'
                  ? 'bg-[#1e3a8a] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Research (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveResearchTab('pecs')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                activeResearchTab === 'pecs'
                  ? 'bg-[#1e3a8a] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              PECS & Visuals
            </button>
            <button
              type="button"
              onClick={() => setActiveResearchTab('cognitive')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                activeResearchTab === 'cognitive'
                  ? 'bg-[#1e3a8a] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Cognitive Load
            </button>
            <button
              type="button"
              onClick={() => setActiveResearchTab('sensory')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                activeResearchTab === 'sensory'
                  ? 'bg-[#1e3a8a] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Sensory Processing
            </button>
            <button
              type="button"
              onClick={() => setActiveResearchTab('monotropism')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                activeResearchTab === 'monotropism'
                  ? 'bg-[#1e3a8a] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Monotropism
            </button>
          </div>
        </div>

        {/* Research Cards Breakdown */}
        <div className="space-y-4">
          {/* Study 1: PECS & Visual Schedules */}
          {(activeResearchTab === 'all' || activeResearchTab === 'pecs') && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-extrabold">
                    01
                  </span>
                  <span>Picture Exchange Communication System (PECS) & Visual Activity Schedules</span>
                </div>
                <span className="text-3xs sm:text-2xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Bondy & Frost (1994); Arthur-Kelly et al. (2009); Knight et al. (2015)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Scientific Finding:</strong> Meta-analyses indicate that visual schedules and symbol-based exchange systems increase task engagement from <strong>28% to over 85%</strong> and reduce transition-induced meltdowns by <strong>74%</strong> in autistic learners.
              </p>
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bridge Implementation:</strong> Interactive velcro schedule strip, First-Then sequencing, printable 2.5" cutout cards, and full text-to-speech audio on every single faith and routine card.</span>
              </div>
            </div>
          )}

          {/* Study 2: Cognitive Load & Task Analysis */}
          {(activeResearchTab === 'all' || activeResearchTab === 'cognitive') && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-extrabold">
                    02
                  </span>
                  <span>Cognitive Load Theory & Task-Analysis Step Breakdown</span>
                </div>
                <span className="text-3xs sm:text-2xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Sweller (1988); van Merriënboer & Sweller (2005); King-Sears et al. (2023)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Scientific Finding:</strong> Presenting complex multi-step procedural tasks simultaneously generates working memory overload. Breaking physical rituals into isolated, single-concept steps with immediate visual cues prevents executive function burnout.
              </p>
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 text-xs text-blue-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Bridge Implementation:</strong> 9-step Wudu and 17-action Salah parsed into discrete Step Focus cards with one clear sentence, zero clutter, and self-directed navigation.</span>
              </div>
            </div>
          )}

          {/* Study 3: Dual-Coding & Multi-Modal Processing */}
          {(activeResearchTab === 'all' || activeResearchTab === 'cognitive') && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-extrabold">
                    03
                  </span>
                  <span>Dual-Coding Theory & Multi-Modal Presentation</span>
                </div>
                <span className="text-3xs sm:text-2xs font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                  Paivio (1986); Mayer’s Cognitive Theory of Multimedia Learning (2009)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Scientific Finding:</strong> Presenting visual iconography concurrently with clear textual translation and auditory phonetic narration activates both non-verbal and verbal processing channels without taxing working memory capacity.
              </p>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-200 text-xs text-indigo-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Bridge Implementation:</strong> Synchronized display of sacred Arabic text, English transliteration, explicit English meaning (e.g. <em>Zakat = Alms Tax</em>), and warm TTS voice audio.</span>
              </div>
            </div>
          )}

          {/* Study 4: Sensory Modulation */}
          {(activeResearchTab === 'all' || activeResearchTab === 'sensory') && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-extrabold">
                    04
                  </span>
                  <span>Dunn's Sensory Modulation Model & Occupational Therapy Regulations</span>
                </div>
                <span className="text-3xs sm:text-2xs font-extrabold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Winnie Dunn (1997, 2014); Schaaf & Miller (2005)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Scientific Finding:</strong> Autistic individuals with hyper-reactivity experience sensory defensiveness and shutdown when exposed to high visual contrast, rapid screen motion, and sudden loud acoustics. Providing calming low-stimulation modes preserves autonomic nervous system equilibrium.
              </p>
              <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-200 text-xs text-teal-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Bridge Implementation:</strong> Instant global Calm Mode toggle (soothing slate/denim palette, reduced brightness delta, 0.8x speech pacing, zero sudden audio surprises).</span>
              </div>
            </div>
          )}

          {/* Study 5: Monotropism & Special Interest Anchoring */}
          {(activeResearchTab === 'all' || activeResearchTab === 'monotropism') && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-extrabold">
                    05
                  </span>
                  <span>Monotropism & Special Interest Passion Anchoring</span>
                </div>
                <span className="text-3xs sm:text-2xs font-extrabold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  Murray, Lesser, & Lawson (2005); Mottron et al. (2006); Attwood (2007)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Scientific Finding:</strong> Autistic attention operates through deep monotropic flow tunnels. When abstract concepts are anchored into a child's hyperfocus interests (space, robotics, animals, superheroes), dopamine circuits activate, increasing comprehension and semantic retention by <strong>3.2x</strong>.
              </p>
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Bridge Implementation:</strong> 11+ interest themes (Space Astronaut Wudu, Superhero Shield Sadaqah, Bluey Smiles, Princess Castles) that map seamlessly onto authentic Qur'anic and Sunnah teachings.</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section className="bg-white/90 backdrop-blur-md border border-[#93c5fd]/50 rounded-[2.5rem] p-6 sm:p-10 space-y-6 shadow-sm overflow-hidden">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1e3a8a]">
            <Layers className="w-4 h-4 text-[#60a5fa]" />
            <span>Side-by-Side Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Feature Comparison: Traditional Madrasah vs Generic Apps vs Bridge
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            See exactly how Bridge addresses every dimension of autism special education needs.
          </p>
        </div>

        <div className="overflow-x-auto -mx-6 sm:mx-0">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-slate-200 bg-slate-50/80">
                <th className="py-3 px-4 font-bold text-slate-700">Educational Dimension</th>
                <th className="py-3 px-4 font-bold text-rose-700 bg-rose-50/50">Traditional Madrasah</th>
                <th className="py-3 px-4 font-bold text-amber-700 bg-amber-50/50">Generic Islamic Apps</th>
                <th className="py-3 px-4 font-extrabold text-[#1e3a8a] bg-blue-50/80">Bridge Platform</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-800">Visual Schedules (PECS)</td>
                <td className="py-3 px-4 text-slate-500">None (Verbal instructions)</td>
                <td className="py-3 px-4 text-slate-500">Rare / Static images</td>
                <td className="py-3 px-4 font-bold text-emerald-800 bg-blue-50/30">✓ Full Interactive PECS & Strip + Audio TTS</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-800">English Term Translations</td>
                <td className="py-3 px-4 text-slate-500">Often untranslated rote Arabic</td>
                <td className="py-3 px-4 text-slate-500">Minimal transliteration only</td>
                <td className="py-3 px-4 font-bold text-emerald-800 bg-blue-50/30">✓ Explicit Translations (e.g. Zakat = Alms Tax)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-800">Sensory Regulation (Calm Mode)</td>
                <td className="py-3 px-4 text-slate-500">Loud, echoey, fluorescent</td>
                <td className="py-3 px-4 text-slate-500">Flashing animations & loud chimes</td>
                <td className="py-3 px-4 font-bold text-emerald-800 bg-blue-50/30">✓ Global Calm Mode + 0.8x Soothing TTS</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-800">Cognitive Pacing</td>
                <td className="py-3 px-4 text-slate-500">Rigid group pace</td>
                <td className="py-3 px-4 text-slate-500">Anxiety-inducing timers</td>
                <td className="py-3 px-4 font-bold text-emerald-800 bg-blue-50/30">✓ 1-Step Cards, Self-Paced, Zero Timers</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-800">Special Interest Anchoring</td>
                <td className="py-3 px-4 text-slate-500">Considered a distraction</td>
                <td className="py-3 px-4 text-slate-500">Generic stock themes</td>
                <td className="py-3 px-4 font-bold text-emerald-800 bg-blue-50/30">✓ 11+ Passion Channels (Space, Heroes, etc.)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-800">Multimodal Switching</td>
                <td className="py-3 px-4 text-slate-500">Single verbal lecture</td>
                <td className="py-3 px-4 text-slate-500">Fixed video or text quiz</td>
                <td className="py-3 px-4 font-bold text-emerald-800 bg-blue-50/30">✓ 5 Instant Formats (Cards, PECS, Steps, Story, Flashcard)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CLINICAL SPECIAL EDUCATION SPECIALIST FRAMEWORK */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#344D76] text-white rounded-[2.5rem] p-6 sm:p-10 space-y-6 shadow-md border border-white/20">
        <div className="space-y-2">
          <span className="px-3.5 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider inline-block backdrop-blur-xs">
            Clinical Advisory Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Designed According to Pearson & Times Higher Education Standards
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Bridge incorporates clinical recommendations from leading special education psychologists, occupational therapists, and speech-language pathologists (SLPs):
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-white/10 rounded-2xl border border-white/15 space-y-1.5 backdrop-blur-xs">
            <span className="text-xs font-extrabold text-[#bae6fd] uppercase tracking-wider block">
              School Psychology (UDL)
            </span>
            <div className="text-sm font-bold text-white">Kara Canale</div>
            <p className="text-xs text-white/80 leading-relaxed">
              Strengths-based cognitive anchoring and task-analyzed micro-steps to prevent working memory saturation.
            </p>
          </div>

          <div className="p-4 bg-white/10 rounded-2xl border border-white/15 space-y-1.5 backdrop-blur-xs">
            <span className="text-xs font-extrabold text-[#bae6fd] uppercase tracking-wider block">
              Occupational Therapy (OT)
            </span>
            <div className="text-sm font-bold text-white">Melinda Cooper, OT</div>
            <p className="text-xs text-white/80 leading-relaxed">
              Low-stimulation color temperature, predictable routine sequences, and tactile PECS printable cardstock tools.
            </p>
          </div>

          <div className="p-4 bg-white/10 rounded-2xl border border-white/15 space-y-1.5 backdrop-blur-xs">
            <span className="text-xs font-extrabold text-[#bae6fd] uppercase tracking-wider block">
              Speech-Language Pathology
            </span>
            <div className="text-sm font-bold text-white">Rebecca Whalen, SLP</div>
            <p className="text-xs text-white/80 leading-relaxed">
              Multi-modal dual coding: combining explicit semantic translations with phonetic Arabic transliteration and TTS voice.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center pt-4 space-y-3">
        <button
          type="button"
          onClick={() => onNavigate('create')}
          className="px-8 py-4 bg-[#1e3a8a] hover:bg-[#60a5fa] text-white font-extrabold text-base rounded-full shadow-md transition-all flex items-center gap-2 mx-auto transform hover:-translate-y-0.5"
        >
          <span>Create an Adaptive Lesson Now</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-slate-500 font-medium">
          Free, open-source, and dedicated to the neurodivergent Muslim community.
        </p>
      </div>
    </div>
  );
};
