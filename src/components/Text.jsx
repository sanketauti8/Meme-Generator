

import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

const Text = ({ editMode }) => {
  const [isEditing, setIsEditing] = useState(editMode);
  const [value, setValue] = useState('Double Click or Touch to Edit');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    if (editMode) {
      setIsEditing(true);
    }
  };

  const handleTouchStart = (e) => {
    if (editMode) {
      e.preventDefault();
      setIsEditing(true);
    }
  };

  return (
    <Draggable
      handle={isEditing ? null : 'h1'} // Enable drag only on h1 when not editing
      cancel={isEditing ? 'input' : null} // Disable drag on input when editing
    >
      <div>
        {isEditing ? (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setIsEditing(false)}
          />
        ) : (
          <h1
            onDoubleClick={handleDoubleClick}
            onTouchStart={handleTouchStart}
            style={{ cursor: editMode ? 'pointer' : 'default' }}
          >
            {value}
          </h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;
