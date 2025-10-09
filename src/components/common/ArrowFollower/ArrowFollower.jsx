import { useEffect, useRef, useState } from 'react';
import './ArrowFollower.css';
import ArrowRightIcon from '@/assets/images/icons/arrow-right-alt.svg?react';

export const ArrowFollower = ({ containerRef, hideOnHoverSelectors = [] }) => {
  const followerRef = useRef(null);
  const rafRef = useRef(null);
  const pendingPosRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hiddenByTitle, setHiddenByTitle] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // Disable on touch/coarse pointers (mobile/tablet) where hover is not available
    const hasCoarsePointer = typeof window !== 'undefined' && (
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches ||
      (navigator && navigator.maxTouchPoints > 0)
    );
    setDisabled(Boolean(hasCoarsePointer));
  }, []);

  useEffect(() => {
    if (disabled) return; // skip listeners on touch devices

    const container = containerRef?.current;
    if (!container) return;

    const radius = 55;

    const computeHiddenState = (clientX, clientY) => {
      const el = document.elementFromPoint(clientX, clientY);
      let isOnHideTarget = false;
      if (el) {
        isOnHideTarget = hideOnHoverSelectors.some(sel => {
          try {
            return el.closest(sel);
          } catch (_) {
            return false;
          }
        });
      }
      setHiddenByTitle(Boolean(isOnHideTarget));
    };

    // Batch DOM updates with requestAnimationFrame for smooth cursor following
    const scheduleUpdate = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const follower = followerRef.current;
          if (follower) {
            const { x: fx, y: fy } = pendingPosRef.current;
            follower.style.transform = `translate3d(${fx}px, ${fy}px, 0)`;
          }
          rafRef.current = null;
        });
      }
    };

    const onPointerEnter = () => {
      setVisible(true);
    };

    const onPointerLeave = () => {
      setVisible(false);
      setHiddenByTitle(false);
    };

    const onPointerMove = e => {
      computeHiddenState(e.clientX, e.clientY);
      const bounds = container.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      pendingPosRef.current = { x: x - radius, y: y - radius };
      scheduleUpdate();
    };

    const onPointerDown = () => {
      setVisible(true);
      // Track pointer movement at window level to handle drag gestures (e.g., Swiper freeMode)
      const handleWindowPointerMove = ev => {
        computeHiddenState(ev.clientX, ev.clientY);
        const bounds = container.getBoundingClientRect();
        const x = ev.clientX - bounds.left;
        const y = ev.clientY - bounds.top;
        pendingPosRef.current = { x: x - radius, y: y - radius };
        scheduleUpdate();
      };
      const handleWindowPointerUp = () => {
        window.removeEventListener('pointermove', handleWindowPointerMove);
        window.removeEventListener('pointerup', handleWindowPointerUp);
      };
      window.addEventListener('pointermove', handleWindowPointerMove, { passive: true });
      window.addEventListener('pointerup', handleWindowPointerUp, { passive: true });
    };

    container.addEventListener('pointerenter', onPointerEnter);
    container.addEventListener('pointerleave', onPointerLeave);
    container.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerdown', onPointerDown);

    return () => {
      container.removeEventListener('pointerenter', onPointerEnter);
      container.removeEventListener('pointerleave', onPointerLeave);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef, hideOnHoverSelectors, disabled]);

  const shouldShow = !disabled && visible && !hiddenByTitle;
  if (disabled) return null;

  return (
    <div
      ref={followerRef}
      className={`arrow-follower ${shouldShow ? 'arrow-follower--visible' : ''}`}
      aria-hidden="true"
    >
      <ArrowRightIcon className="arrow-follower__icon" />
    </div>
  );
};

export default ArrowFollower;