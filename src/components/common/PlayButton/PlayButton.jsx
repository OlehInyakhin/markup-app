import './PlayButton.css';

export const PlayButton = ({ onClick, size = 'medium', className = '' }) => {
  return (
    <button 
      className={`play-button play-button--${size} ${className}`}
      onClick={onClick}
      aria-label="Play video"
    >
      <svg 
        className="play-button__icon" 
        viewBox="0 0 80 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx="40" 
          cy="40" 
          r="40" 
          fill="rgba(255, 255, 255, 0.9)"
        />
        <path 
          d="M32 25L55 40L32 55V25Z" 
          fill="#000"
        />
      </svg>
    </button>
  );
};