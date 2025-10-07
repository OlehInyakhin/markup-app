// Preset configurations for different themes
export const LiquidBackgroundPresets = {
  // Brand colors theme
  brand: {
    colors: ['var(--blue)', 'var(--h-blue)', 'var(--h-green)', 'var(--h-yellow)', 'var(--h-red)'],
    blobCount: 5,
    animationDuration: 25000
  },
  
  // Subtle grey theme
  subtle: {
    colors: ['var(--grey-lighter)', 'var(--grey-middle)', 'var(--almost-white)'],
    blobCount: 3,
    animationDuration: 30000
  },
  
  // Dark theme
  dark: {
    colors: ['var(--grey-darkest)', 'var(--grey-dark)', 'var(--gray-dark)'],
    blobCount: 4,
    animationDuration: 35000
  },
  
  // Accent theme
  accent: {
    colors: ['var(--color-accent)', 'var(--color-accent-hover)', 'var(--h-blue)'],
    blobCount: 3,
    animationDuration: 20000
  },
  purple: {
    colors: ['#8D54F3', '#8D54F399'],
    blobCount: 5,
    animationDuration: 20000
  }
};