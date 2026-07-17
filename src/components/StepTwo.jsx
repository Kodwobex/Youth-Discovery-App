import React from 'react';
import TagSelector from './TagSelector';
import './Step.css';

const values = [
  { id: 1, label: 'Financial Security', emoji: '💰' },
  { id: 2, label: 'Helping Others', emoji: '🌍' },
  { id: 3, label: 'Adventure & Excitement', emoji: '🚀' },
  { id: 4, label: 'Achievement & Success', emoji: '🏆' },
  { id: 5, label: 'Family & Relationships', emoji: '👨‍👩‍👧' },
  { id: 6, label: 'Knowledge & Growth', emoji: '🎓' },
  { id: 7, label: 'Sustainability & Nature', emoji: '🌱' },
  { id: 8, label: 'Art & Expression', emoji: '🎵' },
  { id: 9, label: 'Justice & Fairness', emoji: '⚖️' },
  { id: 10, label: 'Inner Peace & Balance', emoji: '🧘' },
];

function StepTwo({ selected, onChange }) {
  return (
    <div className="step">
      <h2>💎 Step 2: What Drives You?</h2>
      <p>Choose the values that matter most to you:</p>
      <TagSelector items={values} selected={selected} onChange={onChange} />
    </div>
  );
}

export default StepTwo;
