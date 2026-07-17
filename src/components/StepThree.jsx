import React from 'react';
import TagSelector from './TagSelector';
import './Step.css';

const interests = [
  { id: 1, label: 'Science & Research', emoji: '🔬' },
  { id: 2, label: 'Gaming & Technology', emoji: '🎮' },
  { id: 3, label: 'Writing & Storytelling', emoji: '✍️' },
  { id: 4, label: 'Healthcare & Medicine', emoji: '🏥' },
  { id: 5, label: 'Film & Entertainment', emoji: '🎬' },
  { id: 6, label: 'Construction & Building', emoji: '🏗️' },
  { id: 7, label: 'Music & Performance', emoji: '🎵' },
  { id: 8, label: 'Business & Finance', emoji: '📊' },
  { id: 9, label: 'Sports & Fitness', emoji: '⚽' },
  { id: 10, label: 'Cooking & Culinary Arts', emoji: '🍳' },
  { id: 11, label: 'Biology & Life Sciences', emoji: '🧬' },
  { id: 12, label: 'Visual Arts & Design', emoji: '🎨' },
];

function StepThree({ selected, onChange }) {
  return (
    <div className="step">
      <h2>🌱 Step 3: What Sparks Your Curiosity?</h2>
      <p>Select the areas and fields that fascinate you:</p>
      <TagSelector items={interests} selected={selected} onChange={onChange} />
    </div>
  );
}

export default StepThree;
