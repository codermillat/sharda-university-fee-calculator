/**
 * Google Analytics utility functions for tracking user interactions and leads
 * Optimized for GA4 with enhanced measurement and conversion tracking
 */

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        [key: string]: any;
      }
    ) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = 'G-VFE50T6ZXD';

// User engagement tracking
let engagementStartTime: number | null = null;
let scrollDepthsTracked: Set<number> = new Set();
let timeOnPageInterval: NodeJS.Timeout | null = null;

/**
 * Check if Google Analytics is loaded
 */
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track page view with enhanced metrics
 */
export const trackPageView = (path: string, title?: string): void => {
  if (isGALoaded()) {
    engagementStartTime = Date.now();
    scrollDepthsTracked.clear();
    
    window.gtag!('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });

    // Track page view event
    window.gtag!('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });

    // Start time on page tracking
    startTimeOnPageTracking();
    // Start scroll depth tracking
    startScrollDepthTracking();
  }
};

/**
 * Track custom event with GA4 format
 */
export const trackEvent = (
  eventName: string,
  eventParams?: {
    [key: string]: any;
  }
): void => {
  if (isGALoaded()) {
    window.gtag!('event', eventName, {
      ...eventParams,
      timestamp: Date.now(),
    });
  }
};

/**
 * Track conversion/lead generation event
 */
export const trackConversion = (
  conversionType: 'course_selection' | 'fee_copy' | 'external_link' | 'social_click' | 'contact',
  value?: number,
  currency: string = 'INR'
): void => {
  if (isGALoaded()) {
    window.gtag!('event', 'conversion', {
      conversion_type: conversionType,
      value: value,
      currency: currency,
      send_to: GA_MEASUREMENT_ID,
    });

    // Also track as lead event
    window.gtag!('event', 'generate_lead', {
      currency: currency,
      value: value,
      lead_type: conversionType,
    });
  }
};

/**
 * Track course selection (HIGH VALUE LEAD EVENT)
 */
export const trackCourseSelection = (courseTitle: string, courseId: string, school: string): void => {
  const courseCategory = getCourseCategory(courseTitle);
  
  trackEvent('course_selected', {
    event_category: 'Course Selection',
    event_label: courseTitle,
    course_id: courseId,
    course_title: courseTitle,
    school: school,
    course_category: courseCategory,
    // Custom dimensions
    user_type: 'prospective_student',
    course_category_dimension: courseCategory,
    engagement_level: 'high',
  });

  // Track as conversion/lead
  trackConversion('course_selection', undefined, 'INR');

  // Set user properties
  if (isGALoaded()) {
    window.gtag!('set', 'user_properties', {
      interested_course: courseTitle,
      interested_school: school,
      course_category: courseCategory,
    });
  }
};

/**
 * Helper to determine course category
 */
const getCourseCategory = (courseTitle: string): string => {
  const title = courseTitle.toLowerCase();
  if (title.includes('b.tech') || title.includes('btech')) return 'Engineering';
  if (title.includes('mbbs') || title.includes('medical')) return 'Medical';
  if (title.includes('nursing')) return 'Nursing';
  if (title.includes('bba') || title.includes('mba') || title.includes('business')) return 'Business';
  if (title.includes('b.sc') || title.includes('bsc')) return 'Science';
  if (title.includes('pharmacy') || title.includes('pharm')) return 'Pharmacy';
  if (title.includes('law') || title.includes('llb')) return 'Law';
  return 'Other';
};

/**
 * Track school selection change
 */
export const trackSchoolSelection = (school: string): void => {
  trackEvent('school_selected', {
    event_category: 'Filter',
    event_label: school,
    school: school,
    engagement_level: 'medium',
  });
};

/**
 * Track course search with search term analysis
 */
export const trackCourseSearch = (searchQuery: string): void => {
  if (searchQuery.length > 2) {
    const searchLength = searchQuery.length;
    const courseCategory = getCourseCategory(searchQuery);
    
    trackEvent('search', {
      search_term: searchQuery,
      search_length: searchLength,
      course_category: courseCategory,
      engagement_level: 'medium',
    });
  }
};

/**
 * Track scholarship panel view (HIGH VALUE - indicates serious interest)
 */
export const trackScholarshipView = (courseTitle: string, scholarshipPercent: number): void => {
  const scholarshipLabel = scholarshipPercent > 0 ? `${scholarshipPercent}% Scholarship` : 'No Scholarship';
  
  trackEvent('view_item', {
    item_name: courseTitle,
    item_category: 'Course Fee Breakdown',
    item_variant: scholarshipLabel,
    scholarship_percentage: scholarshipPercent,
    course_title: courseTitle,
    engagement_level: 'high',
    scholarship_interest: scholarshipPercent > 0 ? 'yes' : 'no',
  });

  // Track scholarship interest dimension
  if (isGALoaded()) {
    window.gtag!('set', 'user_properties', {
      scholarship_interest: scholarshipPercent > 0 ? 'yes' : 'no',
      max_scholarship_viewed: scholarshipPercent,
    });
  }
};

/**
 * Track copy button click (HIGH VALUE CONVERSION - user is saving info)
 */
export const trackCopyButton = (courseTitle: string, scholarshipPercent: number): void => {
  const scholarshipLabel = scholarshipPercent > 0 ? `${scholarshipPercent}% Scholarship` : 'No Scholarship';
  
  // Calculate estimated course value for conversion tracking
  const courseCategory = getCourseCategory(courseTitle);
  
  trackEvent('fee_breakdown_copied', {
    event_category: 'Copy Action',
    event_label: `${courseTitle} - ${scholarshipLabel}`,
    course_title: courseTitle,
    scholarship_percentage: scholarshipPercent,
    course_category: courseCategory,
    engagement_level: 'very_high',
    action_type: 'save_information',
  });

  // Track as conversion/lead (copying fee breakdown indicates high intent)
  trackConversion('fee_copy', undefined, 'INR');

  // Track as engagement event
  trackEvent('share', {
    method: 'copy_to_clipboard',
    content_type: 'fee_breakdown',
    course_title: courseTitle,
  });
};

/**
 * Track clear button click
 */
export const trackClearButton = (): void => {
  trackEvent('course_cleared', {
    event_category: 'Course Action',
    event_label: 'Clear Course',
    engagement_level: 'low',
  });
};

/**
 * Track external link click (CONVERSION - user going to official site)
 */
export const trackExternalLink = (linkUrl: string, linkText: string): void => {
  const isOfficialSite = linkUrl.includes('shardauniversity.org');
  
  trackEvent('click', {
    event_category: 'External Link',
    event_label: linkText,
    link_url: linkUrl,
    link_text: linkText,
    is_official_site: isOfficialSite,
    engagement_level: isOfficialSite ? 'very_high' : 'medium',
  });

  // Track as conversion if it's official site (high intent)
  if (isOfficialSite) {
    trackConversion('external_link', undefined, 'INR');
  }
};

/**
 * Track footer link click
 */
export const trackFooterLink = (linkType: string, linkUrl: string): void => {
  trackEvent('footer_link_clicked', {
    event_category: 'Footer',
    event_label: linkType,
    link_type: linkType,
    link_url: linkUrl,
    engagement_level: 'medium',
  });
};

/**
 * Track social media link click (CONVERSION - user wants to connect)
 */
export const trackSocialLink = (platform: string, url: string): void => {
  trackEvent('social_link_clicked', {
    event_category: 'Social Media',
    event_label: platform,
    social_platform: platform,
    link_url: url,
    engagement_level: 'high',
  });

  // Track as conversion (social engagement indicates interest)
  trackConversion('social_click', undefined, 'INR');
};

/**
 * Track scroll depth (can be called from components)
 */
export const trackScrollDepth = (depth: number): void => {
  if (!scrollDepthsTracked.has(depth)) {
    scrollDepthsTracked.add(depth);
    trackEvent('scroll', {
      event_category: 'Engagement',
      event_label: `${depth}%`,
      scroll_depth: depth,
      engagement_level: depth >= 75 ? 'high' : depth >= 50 ? 'medium' : 'low',
    });
  }
};

/**
 * Start scroll depth tracking
 */
const startScrollDepthTracking = (): void => {
  if (typeof window === 'undefined') return;

  const thresholds = [25, 50, 75, 90];
  let lastScrollTop = 0;

  const handleScroll = (): void => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !scrollDepthsTracked.has(threshold)) {
        trackScrollDepth(threshold);
      }
    });

    lastScrollTop = scrollTop;
  };

  // Throttle scroll events
  let ticking = false;
  const throttledScroll = (): void => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', throttledScroll, { passive: true });
};

/**
 * Start time on page tracking
 */
const startTimeOnPageTracking = (): void => {
  if (typeof window === 'undefined') return;

  // Track time intervals
  const intervals = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
  const trackedIntervals = new Set<number>();

  timeOnPageInterval = setInterval(() => {
    if (engagementStartTime) {
      const timeOnPage = Math.floor((Date.now() - engagementStartTime) / 1000); // in seconds

      intervals.forEach(interval => {
        if (timeOnPage >= interval && !trackedIntervals.has(interval)) {
          trackedIntervals.add(interval);
          trackEvent('time_on_page', {
            event_category: 'Engagement',
            time_seconds: interval,
            engagement_level: interval >= 120 ? 'high' : interval >= 60 ? 'medium' : 'low',
          });
        }
      });
    }
  }, 10000); // Check every 10 seconds
};

/**
 * Track user engagement when leaving page
 */
export const trackPageExit = (): void => {
  if (engagementStartTime && isGALoaded()) {
    const timeOnPage = Math.floor((Date.now() - engagementStartTime) / 1000);
    
    trackEvent('page_exit', {
      event_category: 'Engagement',
      time_on_page_seconds: timeOnPage,
      engagement_level: timeOnPage >= 60 ? 'high' : timeOnPage >= 30 ? 'medium' : 'low',
    });

    // Clear intervals
    if (timeOnPageInterval) {
      clearInterval(timeOnPageInterval);
      timeOnPageInterval = null;
    }
  }
};

/**
 * Track programme filter selection
 */
export const trackProgrammeSelection = (programme: string): void => {
  trackEvent('programme_selected', {
    event_category: 'Filter',
    programme: programme,
    engagement_level: 'medium',
  });
};

/**
 * Track stream filter selection
 */
export const trackStreamSelection = (stream: string): void => {
  trackEvent('stream_selected', {
    event_category: 'Filter',
    stream: stream,
    engagement_level: 'medium',
  });
};

/**
 * Initialize analytics on page load
 */
export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  // Track page exit
  window.addEventListener('beforeunload', trackPageExit);

  // Track visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      trackPageExit();
    } else {
      engagementStartTime = Date.now();
      startTimeOnPageTracking();
    }
  });
};

