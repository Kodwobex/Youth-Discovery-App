import React from 'react';
import './TagSelector.css';

function TagSelector({ items, selected, onChange }) {
  const handleToggle = (id) => {
    if (selected.includes(id)) {
      onChange(selected.filter(item => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="tag-selector">
      {items.map(item => (
        <button
          key={item.id}
          className={`tag ${selected.includes(item.id) ? 'selected' : ''}`}
          onClick={() => handleToggle(item.id)}
        >
          {item.emoji} {item.label}
        </button>
      ))}
    </div>
  );
}

export default TagSelector;
