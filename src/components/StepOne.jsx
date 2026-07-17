import React from 'react';
import TagSelector from './TagSelector';
import './Step.css';

const strengths = [
  { id: 1, label: 'Problem Solving', emoji: '💻' },
  { id: 2, label: 'Creativity', emoji: '🎨' },
  { id: 3, label: 'Leadership', emoji: '👥' },
  { id: 4, label: 'Learning', emoji: '📚' },
  { id: 5, label: 'Collaboration', emoji: '🤝' },
  { id: 6, label: 'Physical Skills', emoji: '💪' },
  { id: 7, label: 'Focus & Discipline', emoji: '🎯' },
  { id: 8, label: 'Communication', emoji: '💬' },
  { id: 9, label: 'Analytical Thinking', emoji: '🧠' },
  { id: 10, label: 'Emotional Intelligence', emoji: '🎭' },
];

function StepOne({ selected, onChange }) {
  return (
    <div className="step">
      <h2>💪 Step 1: What Are Your Strengths?</h2>
      <p>Select the natural talents and abilities you're proud of:</p>
      <TagSelector items={strengths} selected={selected} onChange={onChange} />
    </div>
  );
}

export default StepOne;
