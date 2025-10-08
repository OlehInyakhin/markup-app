import { useLiquidBackground } from '@/hooks/useLiquidBackground';
import './LiquidBackground.css';
export { LiquidBackgroundPresets } from './constants';

/**
 * LiquidBackground component that creates an animated liquid background effect
 * Can be used as a background overlay for sections or the entire page
 */
export const LiquidBackground = ({
  colors,
  blobCount = 8,
  animationDuration = 20000,
  enabled = true,
  className = '',
  style = {},
  zIndex = -1,
  opacity = 0.6,
  ...props
}) => {
  const containerRef = useLiquidBackground({
    colors,
    blobCount,
    animationDuration,
    enabled,
  });

  return (
    <div
      ref={containerRef}
      className={`liquid-background ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex,
        opacity,
        ...style,
      }}
      {...props}
    />
  );
};
