import { useEffect, useRef } from 'react';

/**
 * Custom hook for creating a liquid background animation
 * Based on smooth liquid background effect with animated blobs
 */
export const useLiquidBackground = ({
  colors = ['#0064FF', '#0857FF', '#23DB6E', '#FFEE00', '#FF4944'],
  blobCount = 5,
  animationDuration = 20000,
  enabled = true
} = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const blobs = [];

    // Create blob elements
    for (let i = 0; i < blobCount; i++) {
      const blob = document.createElement('div');
      blob.className = `liquid-blob liquid-blob-${i}`;
      blob.style.cssText = `
        position: absolute;
        border-radius: 100%;
        filter: blur(40px);
        mix-blend-mode: multiply;
        animation: liquid-move-${i} ${animationDuration + i * 2000}ms ease-in-out infinite;
        background: ${colors[i % colors.length]};
        opacity: 0.7;
      `;
      
      // Set random initial size and position
      const size = Math.random() * 300 + 200; // 200-500px
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;
      blob.style.left = `${Math.random() * 100}%`;
      blob.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(blob);
      blobs.push(blob);
    }

    // Create dynamic keyframes for each blob
    const style = document.createElement('style');
    let keyframes = '';
    
    for (let i = 0; i < blobCount; i++) {
      keyframes += `
        @keyframes liquid-move-${i} {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(${0.8 + Math.random() * 0.4}) rotate(90deg);
          }
          50% {
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(${0.8 + Math.random() * 0.4}) rotate(180deg);
          }
          75% {
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(${0.8 + Math.random() * 0.4}) rotate(270deg);
          }
        }
      `;
    }
    
    style.textContent = keyframes;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      blobs.forEach(blob => {
        if (blob.parentNode) {
          blob.parentNode.removeChild(blob);
        }
      });
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [colors, blobCount, animationDuration, enabled]);

  return containerRef;
};