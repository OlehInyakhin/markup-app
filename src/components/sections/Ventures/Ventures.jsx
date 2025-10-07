import React from 'react';
import './Ventures.css';
import ArrowLeft from '@/assets/images/icons/arrow-left.svg?react';
import bgVideo from "@/assets/media/hybrid.mp4";

export const Ventures = () => {
  return (
    <section className="ventures">
      <div className="ventures__video-container">
        <video 
          className="ventures__video" 
          autoPlay 
          muted 
          playsInline
          loop
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="ventures__content">
          <h2 className="ventures__title">venture Lab for Bold Ideas </h2>
          <p className="ventures__description">
            חדשנות, יצירתיות וחשיבה פורצת דרך <br />שלוקחת מיזמים חדשים עד לקצה
          </p>
          <a href="#" className="ventures__cta-button">
            בואו נדבר
            <ArrowLeft className="ventures__cta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};