

import React, { useState, createRef } from 'react';
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const [editableTextIndexes, setEditableTextIndexes] = useState([]);

  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
    setEditableTextIndexes([...editableTextIndexes, count]);
  };

  const handleOkClick = () => {
    setEditableTextIndexes([]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '10px' }}>
      <div 
        style={{ 
          width: '100%', 
          maxWidth: '700px', 
          border: '1px solid', 
          height: 'auto', 
          overflow: 'hidden', 
          marginBottom: '20px', 
          position: 'relative' 
        }} 
        ref={memeRef} 
        className="meme"
      >
        <img 
          src={params.get("url")} 
          style={{ width: '100%', height: 'auto', maxHeight: '300px' }} 
          alt="meme" 
        />
        {
          Array(count).fill(0).map((_, index) => (
            <Text 
              key={index} 
              editMode={editableTextIndexes.includes(index)} 
            />
          ))
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <Button onClick={addText}>Add Text</Button>
        <Button onClick={handleOkClick}>Ok</Button>
        <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>Save</Button>
      </div>
    </div>
  );
};

export default Edit;
