/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { CreateLessonView } from './views/CreateLessonView';
import { LessonView } from './views/LessonView';
import { LearnerProfileView } from './views/LearnerProfileView';
import { LoginView } from './views/LoginView';
import { AboutView } from './views/AboutView';
import { PrivacyView } from './views/PrivacyView';
import { LessonData, LearnerProfile, UserAccount } from './types';
import { HACKATHON_DEMO_LEARNER_1 } from './data/presetLessons';
import { useLocalStorage } from './hooks/useLocalStorage';
import { STORAGE_KEYS } from './services/storageService';

export default function App() {
  // Authenticated User State with persistence
  const [currentUser, setCurrentUser, removeCurrentUser] = useLocalStorage<UserAccount | null>(
    STORAGE_KEYS.USER_ACCOUNT,
    null
  );

  // Initial view: home if logged in, login if not logged in
  const [currentView, setCurrentView] = useState<string>(() => (currentUser ? 'home' : 'login'));

  // Active Lesson State with persistence
  const [activeLesson, setActiveLesson] = useLocalStorage<LessonData>(
    STORAGE_KEYS.ACTIVE_LESSON,
    HACKATHON_DEMO_LEARNER_1
  );

  const [presetTopic, setPresetTopic] = useState<string>('How to Make Wudu');

  // Calm Mode state with persistent storage and DOM class reflection
  const [isCalmMode, setIsCalmMode] = useLocalStorage<boolean>(
    STORAGE_KEYS.CALM_MODE,
    false
  );

  useEffect(() => {
    if (isCalmMode) {
      document.body.classList.add('calm-mode');
    } else {
      document.body.classList.remove('calm-mode');
    }
  }, [isCalmMode]);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (user: UserAccount) => {
    setCurrentUser(user);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    removeCurrentUser();
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLessonGenerated = (newLesson: LessonData) => {
    setActiveLesson(newLesson);
    setCurrentView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPresetTopic = (topicTitle: string) => {
    setPresetTopic(topicTitle);
  };

  const handleLoadDemoLesson = (demoLesson: LessonData) => {
    setActiveLesson(demoLesson);
  };

  const handleStartLessonWithProfile = (profile: LearnerProfile) => {
    if (profile.calmModeDefault && !isCalmMode) {
      setIsCalmMode(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF3F9] text-[#24334A] selection:bg-[#E8EEF8] selection:text-[#344D76] font-sans relative overflow-x-hidden">
      {/* Soft Ambient Pastel Sensory Room Glowing Lights with #99AFD7 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-[#99AFD7]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-[#99AFD7]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] bg-[#C5D5ED]/35 rounded-full blur-3xl" />
      </div>

      {/* Top Navigation */}
      <div className="relative z-40">
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
          isCalmMode={isCalmMode}
          onToggleCalmMode={(enabled) => setIsCalmMode(enabled)}
          hasActiveLesson={!!activeLesson}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      </div>

      {/* Main View Router */}
      <main className="flex-1 relative z-10">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectPresetTopic={handleSelectPresetTopic}
            onLoadDemoLesson={handleLoadDemoLesson}
            currentLessonId={activeLesson?.id}
          />
        )}

        {currentView === 'create' && (
          <CreateLessonView
            initialTopic={presetTopic}
            onLessonGenerated={handleLessonGenerated}
            isCalmMode={isCalmMode}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'lesson' && activeLesson && (
          <LessonView
            lesson={activeLesson}
            isCalmMode={isCalmMode}
            onToggleCalmMode={(enabled) => setIsCalmMode(enabled)}
            onEditPreferences={() => handleNavigate('create')}
            onLoadDemoLesson={handleLoadDemoLesson}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'learner-profile' && (
          <LearnerProfileView
            onStartLessonWithProfile={handleStartLessonWithProfile}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'login' && (
          <LoginView
            onLoginSuccess={handleLoginSuccess}
            onNavigate={handleNavigate}
            isCalmMode={isCalmMode}
            currentUser={currentUser}
            onLogout={handleLogout}
          />
        )}

        {currentView === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentView === 'privacy' && (
          <PrivacyView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
