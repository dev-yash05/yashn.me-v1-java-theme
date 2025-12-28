import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { BlogsPage } from './components/BlogsPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'blogs':
        return <BlogsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 relative overflow-hidden">
      {/* Animated Curved Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Curve 1 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-100 200 Q 400 100, 800 200 T 1600 200 T 2400 200"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-1"
            />
            <path
              d="M-100 400 Q 400 300, 800 400 T 1600 400 T 2400 400"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-2"
            />
            <path
              d="M-100 600 Q 400 500, 800 600 T 1600 600 T 2400 600"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-3"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f89820" stopOpacity="0" />
                <stop offset="50%" stopColor="#f89820" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#f89820" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5382a1" stopOpacity="0" />
                <stop offset="50%" stopColor="#5382a1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#5382a1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#f89820]/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-[#5382a1]/10 rounded-full animate-float-slower"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 border border-emerald-500/10 rounded-full animate-float-slow"></div>
      </div>
      
      {/* Java Theme Accent Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#f89820] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#5382a1] opacity-10 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Page Content */}
      <div className="relative pt-10">
        {renderPage()}
      </div>
    </div>
  );
}
