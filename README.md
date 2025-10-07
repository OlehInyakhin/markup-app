# Markup App - React + Vite

A modern React application built with Vite, featuring smooth animations powered by GSAP and a responsive design.

## How to Run/Build Locally

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation & Development
```bash
# Clone the repository
git clone <repository-url>
cd markup-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Linting
```bash
# Run ESLint
npm run lint
```

## Time Spent

**Total Hours: ~14:30**

- **Initial Setup & Structure (2:00)** - Project setup, folder structure, basic components
- **GSAP Integration & Animations (4:30)** - Implementing smooth scrolling, interactive animations, liquid background
- **Component Development (3:00)** - Building sections (Hero, Services, Work, etc.)
- **Styling & Responsive Design (2:00)** - CSS implementation, mobile responsiveness
- **Code Quality & Optimization (3:00)** - ESLint fixes, unused imports cleanup, refactoring

## GSAP Animation Choices

### What Was Animated and Why

1. **Smooth Scrolling Navigation**
   - **What**: Smooth scroll-to-section functionality with easing
   - **Why**: Enhances user experience with fluid navigation between sections
   - **Implementation**: Custom hook `useSmoothScrolling` with ScrollToPlugin

2. **Interactive Button Animations**
   - **What**: Hover effects on buttons with scale and color transitions
   - **Why**: Provides immediate visual feedback and improves interactivity
   - **Implementation**: `useInteractiveAnimations` hook with magnetic effects

3. **Liquid Background Animation**
   - **What**: Animated blob shapes with morphing and movement
   - **Why**: Creates dynamic visual interest without being distracting
   - **Implementation**: SVG-based animation with customizable presets

4. **Logo Carousel Animation**
   - **What**: Infinite horizontal scrolling of brand logos
   - **Why**: Showcases partnerships/clients in an engaging way
   - **Implementation**: GSAP timeline with seamless looping

5. **Scroll Indicators**
   - **What**: Animated progress indicators and scroll-triggered animations
   - **Why**: Provides visual feedback about scroll progress and page sections
   - **Implementation**: Custom scroll-based animations with GSAP

## Trade-offs & Assumptions

### Trade-offs Made

1. **Performance vs Visual Appeal**
   - Chose to keep liquid background animations despite potential performance impact
   - Mitigation: Added `enabled` prop to disable animations on lower-end devices

2. **Bundle Size vs Features**
   - Included full GSAP library for comprehensive animation capabilities
   - Alternative: Could use lighter animation libraries, but GSAP provides better performance and features

3. **Code Organization**
   - Separated animation logic into custom hooks for reusability
   - Trade-off: Slightly more complex architecture but better maintainability

### Assumptions Made

1. **Browser Support**
   - Assumed modern browser support (ES6+, CSS Grid, Flexbox)
   - No IE11 compatibility requirements

2. **Device Performance**
   - Assumed target devices can handle GSAP animations smoothly
   - Added fallback options for performance-sensitive scenarios

3. **Content Structure**
   - Assumed fixed section structure for navigation and animations
   - Animations are tied to specific DOM elements and IDs

4. **Design System**
   - Assumed CSS custom properties (variables) for theming
   - Built flexible animation presets for different visual themes

## Technology Stack

- **React 18** - Component framework
- **Vite** - Build tool and dev server
- **GSAP** - Animation library
- **ESLint** - Code linting
- **CSS3** - Styling with custom properties

## Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Reusable components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── hooks/              # Custom React hooks
└── assets/             # Static assets
```
