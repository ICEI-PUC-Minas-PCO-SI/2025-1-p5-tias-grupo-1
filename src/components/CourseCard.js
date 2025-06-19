import React from 'react';
import './CourseCard.css';

export default function CourseCard({ title, description, img, reverse }) {
  return (
    <div className={`course-card ${reverse ? 'reverse' : ''}`}>
      <img src={img} alt={title} className="course-image" />
      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>QUERO PARTICIPAR</button>
      </div>
    </div>
  );
}
