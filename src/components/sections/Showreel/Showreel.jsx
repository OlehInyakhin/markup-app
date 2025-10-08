import { useEffect } from 'react';
import './Showreel.css';
import { PlayButton } from '@/components/common/PlayButton';

import showreelBackground from '@/assets/images/showreel-background.png';
import showreelVideo from '@/assets/media/showreel.mp4';

export const Showreel = () => {
  const handlePlayClick = () => {
    const video = document.querySelector('.showreel__video');
    if (video) {
      if (video.paused) {
        video.play();
        const overlay = document.querySelector('.showreel__play-overlay');
        if (overlay) {
          overlay.style.display = 'none';
        }
      } else {
        video.pause();
      }
    }
  };

  useEffect(() => {
    const video = document.querySelector('.showreel__video');
    const overlay = document.querySelector('.showreel__play-overlay');

    if (video && overlay) {
      const handlePause = () => {
        overlay.style.display = 'block';
      };

      const handleEnded = () => {
        overlay.style.display = 'block';
      };

      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <section className="showreel">
      <div className="showreel__video-container">
        <video
          className="showreel__video"
          poster={showreelBackground}
          controls={false}
        >
          <source src={showreelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="showreel__play-overlay" onClick={handlePlayClick}>
        <PlayButton size="large" className="showreel__play-button" />
      </div>
    </section>
  );
};
