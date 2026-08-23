import React, { useState } from 'react';
import { ProphetItem, LessonData } from '../types';
import { ALL_25_PROPHETS_LIST, PROPHET_ERAS, SHARED_PEDAGOGICAL_RESEARCH } from '../data/prophetsData';
import {
  Sparkles,
  BookOpen,
  Compass,
  Heart,
  ShieldCheck,
  Search,
  ExternalLink,
  GraduationCap,
  Volume2,
  CheckCircle2,
  X,
  Play,
  Layers,
  Feather,
  Sun,
  Flame,
  Droplets,
  Scale,
  Waves,
  Mountain,
  Music,
  Smile,
  HeartHandshake
} from 'lucide-react';
import { speakText, stopSpeaking } from '../utils/speech';

interface ProphetStoriesViewProps {
  onSelectProphetLesson: (lesson: LessonData) => void;
  onNavigate: (view: string) => void;
  isCalmMode: boolean;
}

export const ProphetStoriesView: React.FC<ProphetStoriesViewProps> = ({
  onSelectProphetLesson,
  onNavigate,
  isCalmMode
}) => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProphet, setSelectedProphet] = useState<ProphetItem | null>(null);
  const [activeResearchTab, setActiveResearchTab] = useState<'quran' | 'tafsir' | 'institutes' | 'pedagogy'>('quran');

  // Filter prophets by era and search query
  const filteredProphets = ALL_25_PROPHETS_LIST.filter((prophet) => {
    const matchesEra = selectedEra === 'all' || prophet.era === selectedEra;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesEra;

    const matchesName = prophet.nameEnglish.toLowerCase().includes(query);
    const matchesArabic = prophet.nameArabic.includes(query);
    const matchesEpithet = prophet.epithet.toLowerCase().includes(query);
    const matchesThemes = prophet.coreThemes.some((t) => t.toLowerCase().includes(query));
    const matchesSummary = prophet.summary.toLowerCase().includes(query);

    return matchesEra && (matchesName || matchesArabic || matchesEpithet || matchesThemes || matchesSummary);
  });

  const handleOpenProphet = (prophet: ProphetItem) => {
    setSelectedProphet(prophet);
    setActiveResearchTab('quran');
  };

  const handleStartLesson = (prophet: ProphetItem) => {
    stopSpeaking();
    onSelectProphetLesson(prophet.lesson);
  };

  const handlePlayNameAudio = (prophet: ProphetItem) => {
    speakText(`${prophet.nameArabic}. ${prophet.nameEnglish}, ${prophet.epithet}`);
  };

  return (
    <div id="prophet-stories-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-white/90 via-[#F3F7FC]/90 to-[#E6EFFB]/90 backdrop-blur-md border border-[#99AFD7]/40 rounded-[2.5rem] p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8EEF8] text-[#344D76] rounded-full text-xs font-bold border border-[#99AFD7]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#5D7CAE]" />
            <span>Complete Qur\'anic Prophetic Heritage (All 25 Messengers)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Stories of the 25 Prophets
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Directly sourced from <span className="font-semibold text-slate-800">Quran.com</span> & <span className="font-semibold text-slate-800">Tafsir Ibn Kathir</span>, with insights from <span className="font-semibold text-slate-800">Bayyinah Institute</span> (Nouman Ali Khan) & <span className="font-semibold text-slate-800">Yaqeen Institute</span> (Dr. Omar Suleiman). Every story is structured using <span className="font-semibold text-[#344D76]">neurodivergent learning science</span> (UDL, Strengths Safari, OT Sensory Regulation, and Executive Function Chunking).
          </p>

          {/* Quick Scientific & Scholarly Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-slate-200 rounded-full text-2xs font-bold text-slate-700">
              <BookOpen className="w-3 h-3 text-[#5D7CAE]" />
              Quran.com & Tafsir Ibn Kathir
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-slate-200 rounded-full text-2xs font-bold text-slate-700">
              <Compass className="w-3 h-3 text-[#5D7CAE]" />
              Bayyinah & Yaqeen Institutes
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-slate-200 rounded-full text-2xs font-bold text-[#344D76]">
              <GraduationCap className="w-3 h-3 text-[#344D76]" />
              Pearson Special Ed & Times Higher Ed Toolkit
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            id="prophet-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Prophet (e.g. Adam, Yusuf, Musa, Yunus, Muhammad, whale, patience)..."
            className="w-full pl-11 pr-4 py-3 bg-white/90 border border-[#99AFD7]/40 rounded-2xl text-slate-900 text-sm focus:outline-hidden focus:border-[#5D7CAE] focus:ring-2 focus:ring-[#99AFD7]/30 shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Era Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {PROPHET_ERAS.map((era) => (
            <button
              key={era.id}
              type="button"
              onClick={() => setSelectedEra(era.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedEra === era.id
                  ? 'bg-[#344D76] text-white shadow-2xs'
                  : 'bg-white/80 border border-slate-200 text-slate-700 hover:bg-white hover:border-[#99AFD7]'
              }`}
            >
              <span>{era.label}</span>
              {selectedEra !== era.id && (
                <span className="text-3xs px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-semibold">
                  {era.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 25 Prophets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProphets.map((prophet) => (
          <div
            key={prophet.id}
            id={`prophet-card-${prophet.number}`}
            className="bg-white/85 backdrop-blur-sm border border-[#99AFD7]/30 hover:border-[#5D7CAE]/60 rounded-3xl p-5 sm:p-6 transition-all hover:shadow-md flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-3">
              {/* Top Meta Line: Number + Era Badge + Audio */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-[#E8EEF8] text-[#344D76] font-extrabold text-xs flex items-center justify-center border border-[#99AFD7]/40">
                    #{prophet.number}
                  </span>
                  <span className="text-3xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {prophet.era}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handlePlayNameAudio(prophet)}
                  title="Listen to pronunciation"
                  className="p-1.5 text-slate-400 hover:text-[#344D76] hover:bg-[#E8EEF8] rounded-xl transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Names & Epithet */}
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#344D76] transition-colors">
                    {prophet.nameEnglish}
                  </h3>
                  <span className="text-base sm:text-lg font-bold text-[#435C87] font-arabic" dir="rtl">
                    {prophet.nameArabic}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#5D7CAE] mt-0.5">
                  {prophet.epithet}
                </p>
              </div>

              {/* Short Summary */}
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {prophet.summary}
              </p>

              {/* Core Themes Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {prophet.coreThemes.slice(0, 3).map((theme, idx) => (
                  <span
                    key={idx}
                    className="text-3xs font-medium bg-[#F0F4FA] text-[#344D76] px-2 py-0.5 rounded-md border border-[#99AFD7]/30"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleOpenProphet(prophet)}
                className="flex-1 py-2 px-3 rounded-xl bg-[#F0F4FA] hover:bg-[#E2EAF6] text-[#344D76] text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-[#99AFD7]/30"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Sources & Tafsir</span>
              </button>

              <button
                type="button"
                onClick={() => handleStartLesson(prophet)}
                className="flex-1 py-2 px-3 rounded-xl bg-[#344D76] hover:bg-[#283C5C] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Adapted Lesson</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProphets.length === 0 && (
        <div className="text-center py-16 bg-white/70 rounded-3xl border border-slate-200 space-y-3">
          <Compass className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No prophets match your search</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try searching by English name (e.g. Adam, Yusuf, Musa, Muhammad) or a theme like patience or forgiveness.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedEra('all');
            }}
            className="px-4 py-2 bg-[#344D76] text-white text-xs font-bold rounded-full"
          >
            Show All 25 Prophets
          </button>
        </div>
      )}

      {/* PROPHET DEEP-DIVE MODAL / DRAWER */}
      {selectedProphet && (
        <div
          id="prophet-detail-modal"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedProphet(null)}
        >
          <div
            className="bg-white rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#99AFD7]/40 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-[#E8EEF8] text-[#344D76] font-extrabold text-xs flex items-center justify-center border border-[#99AFD7]/40">
                    #{selectedProphet.number}
                  </span>
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {selectedProphet.era}
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    {selectedProphet.nameEnglish}
                  </h2>
                  <span className="text-xl sm:text-2xl font-bold text-[#435C87] font-arabic" dir="rtl">
                    {selectedProphet.nameArabic}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#5D7CAE]">
                  {selectedProphet.epithet}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProphet(null)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
              <button
                type="button"
                onClick={() => setActiveResearchTab('quran')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeResearchTab === 'quran'
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Qur\'an References ({selectedProphet.quranReferences.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveResearchTab('tafsir')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeResearchTab === 'tafsir'
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Tafsir Ibn Kathir</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveResearchTab('institutes')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeResearchTab === 'institutes'
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Bayyinah & Yaqeen</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveResearchTab('pedagogy')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeResearchTab === 'pedagogy'
                    ? 'bg-[#344D76] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Neurodivergent Science</span>
              </button>
            </div>

            {/* TAB CONTENT: QURAN */}
            {activeResearchTab === 'quran' && (
              <div className="space-y-4 animate-in fade-in">
                <p className="text-xs text-slate-500 font-medium">
                  Direct ayat from the Noble Qur\'an with authentic Arabic text and links to explore on Quran.com:
                </p>

                <div className="space-y-3">
                  {selectedProphet.quranReferences.map((ref, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#344D76]">
                            Surah {ref.surahName} ({ref.surahNumber}:{ref.ayahRange})
                          </span>
                        </div>

                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-2xs font-bold text-[#435C87] hover:underline"
                        >
                          <span>Open on Quran.com</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {ref.arabicSnippet && (
                        <p className="text-base sm:text-lg font-arabic text-slate-800 text-right leading-relaxed py-1" dir="rtl">
                          {ref.arabicSnippet}
                        </p>
                      )}

                      <p className="text-xs text-slate-600 italic">
                        "{ref.englishSnippet}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: TAFSIR IBN KATHIR */}
            {activeResearchTab === 'tafsir' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#5D7CAE]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Tafsir Ibn Kathir (Al-Bidayah wan-Nihayah & Qasas al-Anbiya)
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProphet.tafsirIbnKathirSummary}
                  </p>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-amber-900 text-2xs space-y-1">
                  <span className="font-bold">Classical Methodology:</span>
                  <p>
                    Bridge cross-references authentic Qur\'anic Tafsir to ensure all historical narratives strictly adhere to orthodox Islamic scholarship without speculative additions.
                  </p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: INSTITUTES */}
            {activeResearchTab === 'institutes' && (
              <div className="space-y-4 animate-in fade-in">
                {/* Bayyinah */}
                <div className="p-4 rounded-2xl bg-[#F0F4FA] border border-[#99AFD7]/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#344D76] bg-white px-2.5 py-0.5 rounded-full border border-[#99AFD7]/30">
                      Bayyinah Institute • Nouman Ali Khan
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProphet.bayyinahInsight}
                  </p>
                </div>

                {/* Yaqeen */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                      Yaqeen Institute for Islamic Research • Dr. Omar Suleiman
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProphet.yaqeenInsight}
                  </p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: NEURODIVERGENT PEDAGOGY */}
            {activeResearchTab === 'pedagogy' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="p-4 rounded-2xl bg-[#E8EEF8] border border-[#99AFD7]/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#344D76]" />
                    <h3 className="text-xs sm:text-sm font-bold text-[#344D76]">
                      Grounded in Peer-Reviewed Special Education Research
                    </h3>
                  </div>
                  <p className="text-2xs sm:text-xs text-slate-600 leading-relaxed">
                    Based on the Times Higher Education Toolkit for Neurodivergent Learners, Pearson Special Education Clinical Report (2024–2025), and Meta-Studies on Universal Design for Learning (King-Sears et al. 2023, Harrison et al. 2024).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProphet.pedagogicalResearch.map((res, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1.5">
                      <span className="text-2xs font-bold text-[#344D76] block">
                        {res.framework}
                      </span>
                      <p className="text-3xs font-semibold text-slate-500">
                        {res.studyCitation}
                      </p>
                      <p className="text-2xs text-slate-600 leading-relaxed">
                        {res.principle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Action: Launch Lesson */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-2xs text-slate-500">
                Ready to explore {selectedProphet.nameEnglish} in interactive cards, comic slides, or step checklist?
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProphet(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => handleStartLesson(selectedProphet)}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#344D76] hover:bg-[#283C5C] text-white text-xs font-extrabold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Launch Adapted Lesson</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
