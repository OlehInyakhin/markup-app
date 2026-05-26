import arrowIcon from '@/assets/images/icons/arrow-right.svg';
import videoFile from '@/assets/media/5_set.mp4';

export const services = [
  { 
    id: 0, 
    titleKey: 'development', 
    videoSrc: videoFile,
    submenu: [
      { id: 'mobile-dev', titleKey: 'mobileAppDevelopment' },
      { id: 'web-dev', titleKey: 'webDevelopment' },
      { id: 'lowcode', titleKey: 'lowCodeDevelopment' },
      { id: 'ui-dev', titleKey: 'uiDevelopment' },
      { id: 'research', titleKey: 'researchAndAnalytics' },
      { id: 'qa', titleKey: 'qaAndTesting' },
      { id: 'solutions', titleKey: 'enterpriseSolutions' }
    ]
  },
  { 
    id: 1, 
    titleKey: 'designStrategy', 
    videoSrc: videoFile,
    submenu: [
      { id: 'brand-strategy', titleKey: 'brandStrategy' },
      { id: 'design-system', titleKey: 'designSystem' },
      { id: 'user-research', titleKey: 'userResearch' }
    ]
  },
  { 
    id: 2, 
    titleKey: 'uxui', 
    videoSrc: videoFile,
    submenu: [
      { id: 'ux-design', titleKey: 'uxDesign' },
      { id: 'ui-design', titleKey: 'uiDesign' },
      { id: 'prototyping', titleKey: 'prototyping' }
    ]
  },
  { 
    id: 3, 
    titleKey: 'digitalMarketing', 
    videoSrc: videoFile,
    submenu: [
      { id: 'seo', titleKey: 'seoOptimization' },
      { id: 'social-media', titleKey: 'socialMediaMarketing' },
      { id: 'content', titleKey: 'contentMarketing' }
    ]
  },
  { 
    id: 4, 
    titleKey: 'ecommerce', 
    videoSrc: videoFile,
    submenu: [
      { id: 'ecom-dev', titleKey: 'ecommerceDevelopment' },
      { id: 'payment', titleKey: 'paymentIntegration' },
      { id: 'analytics', titleKey: 'ecommerceAnalytics' }
    ]
  },
];

export const SERVICE_LINK_MOBILE_HEIGHT = 92;

export { arrowIcon, videoFile };
