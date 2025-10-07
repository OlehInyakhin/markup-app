

import './Work.css';
import { projects } from './constants';

export const Work = () => {

  return (
    <section className="work">
      <div className="container">
        <header className="work__header">
          <h2 className="work__main-title">עבודות</h2>
          <a href="#" className="work__view-all">לכל הפרויקטים</a>
        </header>
      </div>
      <div className="work__container">
        {projects.map((project) => (
          <div key={project.id} className="work__block">
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
                  <h4 key={tagIndex} className="work__block-tag">{tag}</h4>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};