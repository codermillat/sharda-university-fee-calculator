/**
 * Google Analytics utility functions for tracking user interactions
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

/**
 * Check if Google Analytics is loaded
 */
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track page view
 */
export const trackPageView = (path: string, title?: string): void => {
  if (isGALoaded()) {
    window.gtag!('config', 'G-VFE50T6ZXD', {
      page_path: path,
      page_title: title,
    });
  }
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  value?: number
): void => {
  if (isGALoaded()) {
    window.gtag!('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: value,
    });
  }
};

/**
 * Track course selection
 */
export const trackCourseSelection = (courseTitle: string, courseId: string, school: string): void => {
  trackEvent('course_selected', 'Course Selection', `${courseTitle} (${courseId})`, undefined);
  trackEvent('course_selected_school', 'Course Selection', school, undefined);
};

/**
 * Track school selection change
 */
export const trackSchoolSelection = (school: string): void => {
  trackEvent('school_selected', 'Filter', school, undefined);
};

/**
 * Track course search
 */
export const trackCourseSearch = (searchQuery: string): void => {
  if (searchQuery.length > 0) {
    trackEvent('course_search', 'Search', searchQuery, undefined);
  }
};

/**
 * Track scholarship panel view
 */
export const trackScholarshipView = (courseTitle: string, scholarshipPercent: number): void => {
  const scholarshipLabel = scholarshipPercent > 0 ? `${scholarshipPercent}% Scholarship` : 'No Scholarship';
  trackEvent('scholarship_viewed', 'Scholarship', `${courseTitle} - ${scholarshipLabel}`, undefined);
};

/**
 * Track copy button click
 */
export const trackCopyButton = (courseTitle: string, scholarshipPercent: number): void => {
  const scholarshipLabel = scholarshipPercent > 0 ? `${scholarshipPercent}% Scholarship` : 'No Scholarship';
  trackEvent('fee_breakdown_copied', 'Copy Action', `${courseTitle} - ${scholarshipLabel}`, undefined);
};

/**
 * Track clear button click
 */
export const trackClearButton = (): void => {
  trackEvent('course_cleared', 'Course Action', 'Clear Course', undefined);
};

/**
 * Track external link click
 */
export const trackExternalLink = (linkUrl: string, linkText: string): void => {
  trackEvent('external_link_clicked', 'External Link', linkText, undefined);
};

/**
 * Track footer link click
 */
export const trackFooterLink = (linkType: string, linkUrl: string): void => {
  trackEvent('footer_link_clicked', 'Footer', linkType, undefined);
};

/**
 * Track social media link click
 */
export const trackSocialLink = (platform: string, url: string): void => {
  trackEvent('social_link_clicked', 'Social Media', platform, undefined);
};

/**
 * Track scroll depth (can be called from components)
 */
export const trackScrollDepth = (depth: number): void => {
  trackEvent('scroll_depth', 'Engagement', `${depth}%`, depth);
};

