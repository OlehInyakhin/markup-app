import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';
import { projects } from './constants';

gsap.registerPlugin(ScrollTrigger);

export const Work = () => {
  const slideInLeftReverse = (element, delay = 0, duration = 1) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const slideInRightReverse = (element, delay = 0, duration = 1) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const fadeInUpReverse = (element, delay = 0, duration = 1) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const scaleOnScrollReverse = (element, fromScale = 0.8, toScale = 1) => {
    gsap.fromTo(
      element,
      {
        scale: fromScale,
      },
      {
        scale: toScale,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  useEffect(() => {
    // Apply alternating slide animations to project blocks
    const workBlocks = document.querySelectorAll('.work__block');

    workBlocks.forEach((block, index) => {
      // Alternating slide animations: even from left, odd from right
      if (index % 2 === 0) {
        slideInLeftReverse(block, index * 0.1, 0.8);
      } else {
        slideInRightReverse(block, index * 0.1, 0.8);
      }

      // Add scale animation to images
      const image = block.querySelector('.work__block-image');
      if (image) {
        scaleOnScrollReverse(image, 0.95, 1);
      }

      // Add fade up animation to content
      const content = block.querySelector('.work__block-content');
      if (content) {
        fadeInUpReverse(content, index * 0.1 + 0.3, 0.8);
      }
    });

    // Animate header elements
    const headerTitle = document.querySelector('.work__main-title');
    const headerLink = document.querySelector('.work__view-all');

    if (headerTitle) {
      fadeInUpReverse(headerTitle, 0, 0.8);
    }

    if (headerLink) {
      fadeInUpReverse(headerLink, 0.2, 0.8);
    }
  }, []);
  return (
    <section className="work">
      <div className="container">
        <header className="work__header">
          <h2 className="work__main-title">עבודות</h2>
          <a href="#" className="work__view-all">
            לכל הפרויקטים
          </a>
        </header>
      </div>
      <div className="work__container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`work__block work__block--${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="work__block-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="work__block-content">
              <h3 className="work__block-title">{project.title}</h3>
              <div className="work__block-logo">
                <img src={project.logo} alt={`${project.title} logo`} />
              </div>
              <p className="work__block-description">{project.description}</p>
              <div className="work__block-tags">
                {project.tags.map((tag, tagIndex) => (
                  <h4 key={tagIndex} className="work__block-tag">
                    {tag}
                  </h4>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
