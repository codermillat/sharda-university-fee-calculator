import React, { useEffect } from 'react';
import Header from './src/components/Header';
import FeeCalculator from './src/components/FeeCalculator';
import { trackPageView, trackFooterLink, trackSocialLink } from './src/utils/analytics';

const App: React.FC = () => {
  // Track page view on mount
  useEffect(() => {
    trackPageView(window.location.pathname, document.title);
  }, []);

  const handleFooterLinkClick = (linkType: string, url: string) => {
    trackFooterLink(linkType, url);
  };

  const handleSocialLinkClick = (platform: string, url: string) => {
    trackSocialLink(platform, url);
  };

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800">
      <Header />
      <main className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <FeeCalculator />
        </div>
      </main>
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6">
            {/* Official Links */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3">Official Information</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <a 
                    href="https://bangladesh.shardauniversity.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => handleFooterLinkClick('Official Portal', 'https://bangladesh.shardauniversity.org/')}
                  >
                    Sharda University Bangladesh Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bangladesh.shardauniversity.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => handleFooterLinkClick('Course Information', 'https://bangladesh.shardauniversity.org/')}
                  >
                    Updated Course Information
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bangladesh.shardauniversity.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => handleFooterLinkClick('Admission Process', 'https://bangladesh.shardauniversity.org/')}
                  >
                    Admission Process 2025
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect with Students */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3">Connect & Support</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <a 
                    href="https://wa.me/918800996151" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition-colors flex items-center gap-2"
                    onClick={() => handleSocialLinkClick('WhatsApp', 'https://wa.me/918800996151')}
                  >
                    <span>💬</span> Chat with Students on WhatsApp
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@StudyAtShardaBD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors flex items-center gap-2"
                    onClick={() => handleSocialLinkClick('YouTube', 'https://www.youtube.com/@StudyAtShardaBD')}
                  >
                    <span>📺</span> YouTube Channel
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.tiktok.com/@studyatsharda?lang=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors flex items-center gap-2"
                    onClick={() => handleSocialLinkClick('TikTok', 'https://www.tiktok.com/@studyatsharda?lang=en')}
                  >
                    <span>🎵</span> TikTok
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li><a href="/" className="hover:text-blue-600 transition-colors" onClick={() => handleFooterLinkClick('Fee Calculator', '/')}>Sharda University Fee Calculator</a></li>
                <li><a href="/" className="hover:text-blue-600 transition-colors" onClick={() => handleFooterLinkClick('Scholarship Calculator', '/')}>Scholarship Calculator</a></li>
                <li><a href="/" className="hover:text-blue-600 transition-colors" onClick={() => handleFooterLinkClick('Course Fee Breakdown', '/')}>Course Fee Breakdown</a></li>
                <li><a href="/" className="hover:text-blue-600 transition-colors" onClick={() => handleFooterLinkClick('Study in India', '/')}>Study in India from Bangladesh</a></li>
              </ul>
            </div>
          </div>

          {/* Credits and Copyright */}
          <div className="border-t border-slate-200 pt-6 mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="text-center sm:text-left">
                <p className="mb-1">
                  &copy; 2024 Sharda University Fee Calculator. All information is indicative.
                </p>
                <p>
                  Please refer to the{' '}
                  <a 
                    href="https://bangladesh.shardauniversity.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                    onClick={() => handleFooterLinkClick('Official Website', 'https://bangladesh.shardauniversity.org/')}
                  >
                    official university website
                  </a>
                  {' '}for final details.
                </p>
              </div>
              <div className="text-center sm:text-right">
                <p className="mb-1 font-semibold text-slate-800">Built & Maintained by</p>
                <a 
                  href="https://github.com/codermillat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                  onClick={() => handleFooterLinkClick('GitHub', 'https://github.com/codermillat')}
                >
                  MD MILLAT HOSEN (@codermillat)
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
