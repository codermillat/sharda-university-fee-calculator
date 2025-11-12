import React, { useEffect } from 'react';
import Header from './src/components/Header';
import FeeCalculator from './src/components/FeeCalculator';
import { trackPageView, trackFooterLink, trackSocialLink, initializeAnalytics } from './src/utils/analytics';

const App: React.FC = () => {
  // Initialize analytics and track page view on mount
  useEffect(() => {
    initializeAnalytics();
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
      <main className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-5 md:p-7 lg:p-8">
          <FeeCalculator />
        </div>
      </main>
      <footer className="bg-white border-t border-slate-200 mt-12" role="contentinfo">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <nav aria-label="Footer Navigation" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            {/* Apply & Official Information */}
            <section aria-labelledby="apply-section">
              <h3 id="apply-section" className="text-base font-bold text-slate-800 mb-4">Apply & Official Information</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://global.sharda.ac.in/bangladesh/?utm_source=studyatsharda_youtube&utm_medium=StudyAtShardaBD&utm_campaign=SU_Admissions_2025&utm_content=organic" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    aria-label="Apply directly to Sharda University"
                    onClick={() => handleFooterLinkClick('Apply Now', 'https://global.sharda.ac.in/bangladesh/')}
                  >
                    <span className="text-xl">🎓</span>
                    <span className="flex-1">Apply Now - Direct Application</span>
                    <svg className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bangladesh.shardauniversity.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-4 py-2.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium rounded-lg transition-all duration-200"
                    aria-label="Read more about Sharda University for Bangladeshi students"
                    onClick={() => handleFooterLinkClick('Bangladesh Portal', 'https://bangladesh.shardauniversity.org/')}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span>Read More About Sharda University for Bangladeshi Students</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* Connect & Support */}
            <section aria-labelledby="support-section">
              <h3 id="support-section" className="text-base font-bold text-slate-800 mb-4">Connect & Support</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://wa.me/918800996151" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="group inline-flex items-center gap-2.5 w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    aria-label="Get support via WhatsApp"
                    onClick={() => handleSocialLinkClick('WhatsApp', 'https://wa.me/918800996151')}
                  >
                    <span className="text-xl">💬</span>
                    <span className="flex-1">Get Support via WhatsApp</span>
                    <span className="text-xs opacity-90">+918800996151</span>
                    <svg className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@StudyAtShardaBD" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="group inline-flex items-center gap-2.5 px-4 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 font-medium rounded-lg transition-all duration-200"
                    aria-label="Visit Sharda University YouTube channel"
                    onClick={() => handleSocialLinkClick('YouTube', 'https://www.youtube.com/@StudyAtShardaBD')}
                  >
                    <span className="text-xl">📺</span>
                    <span>YouTube Channel</span>
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.tiktok.com/@studyatsharda?lang=en" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="group inline-flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium rounded-lg transition-all duration-200"
                    aria-label="Visit Sharda University TikTok profile"
                    onClick={() => handleSocialLinkClick('TikTok', 'https://www.tiktok.com/@studyatsharda?lang=en')}
                  >
                    <span className="text-xl">🎵</span>
                    <span>TikTok</span>
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
          </nav>

          {/* Credits and Copyright */}
          <div className="border-t border-slate-200 pt-6 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="text-center sm:text-left space-y-1">
                <p>
                  &copy; 2024 Sharda University Fee Calculator. All information is indicative.
                </p>
                <p>
                  For comprehensive information, visit the{' '}
                  <a 
                    href="https://bangladesh.shardauniversity.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
                    aria-label="Visit official Sharda University Bangladesh portal"
                    onClick={() => handleFooterLinkClick('Official Website', 'https://bangladesh.shardauniversity.org/')}
                  >
                    official Sharda University Bangladesh portal
                  </a>
                  {' '}for final details.
                </p>
              </div>
              <div className="text-center sm:text-right">
                <p className="mb-1.5 font-semibold text-slate-800">Built & Maintained by</p>
                <a 
                  href="https://github.com/codermillat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
                  aria-label="Visit MILLAT's GitHub profile"
                  onClick={() => handleFooterLinkClick('GitHub', 'https://github.com/codermillat')}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  MILLAT (@codermillat)
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
