import React from 'react';
import TagSelector from './TagSelector';
import './Step.css';

const dreams = [
  { id: 1, label: 'Travel the World', emoji: '🌍' },
  { id: 2, label: 'Start a Business', emoji: '💡' },
  { id: 3, label: 'Get Advanced Education', emoji: '🎓' },
  { id: 4, label: 'Achieve Excellence in Sport', emoji: '🏅' },
  { id: 5, label: 'Create Art & Beauty', emoji: '🎨' },
  { id: 6, label: 'Become Famous/Influential', emoji: '🌟' },
  { id: 7, label: 'Build a Family', emoji: '👨‍👩‍👧‍👦' },
  { id: 8, label: 'Achieve Financial Freedom', emoji: '💰' },
  { id: 9, label: 'Make a Social Impact', emoji: '🤝' },
  { id: 10, label: 'Contribute to Science', emoji: '🔬' },
];

function StepFour({ selected, onChange }) {
  return (
    <div className="step">
      <h2>✍️ Step 4: What Did You Dream About As A Child?</h2>
      <p>Reflect on your childhood aspirations:</p>
      <TagSelector items={dreams} selected={selected} onChange={onChange} />
    </div>
  );
}

export default StepFour;
