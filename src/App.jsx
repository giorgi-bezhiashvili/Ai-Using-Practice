import React, { useState, useRef, useEffect } from 'react';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [toast, setToast] = useState({
    message: '',
    isSuccess: true,
    visible: false,
  });

  const toastTimerRef = useRef(null);

  const showToast = (message, isSuccess = true) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToast({
      message,
      isSuccess,
      visible: true,
    });
    toastTimerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  const handleCopyEmail = async (email = 'giorgibezhiashvili5@gmail.com') => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast('ელ-ფოსტა დაკოპირდა: ' + email, true);
    } catch (err) {
      showToast('დაკოპირდა: ' + email, true);
    }
  };

  const handleNavigate = (page, sectionId = null) => {
    setActivePage(page);

    if (page === 'home' && sectionId) {
      // Delay slightly in case view just switched to home
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync hash changes (e.g. browser back/forward or direct bookmark links)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projects-page') {
        setActivePage('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash) {
        setActivePage('home');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="bg-[#070a13] text-slate-200 font-sans antialiased selection:bg-brand-500/30 selection:text-brand-200 relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      <AmbientBackground />
      <Toast toast={toast} />
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {activePage === 'home' ? (
        <HomePage
          onNavigate={handleNavigate}
          onCopyEmail={handleCopyEmail}
          onShowToast={showToast}
        />
      ) : (
        <ProjectsPage onNavigate={handleNavigate} />
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

