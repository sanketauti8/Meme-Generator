import React, { useState, createRef } from 'react';
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div
        style={{ width: '700px', border: '1px solid', height: '300px', position: 'relative' }}
        ref={memeRef}
        className="meme mt-5 mb-5"
      >
        <img src={params.get('url')} width="250px" alt="meme" />
        {Array(count).fill(0).map((_, index) => (
          <Text key={index} initialX={200} initialY={100} />
        ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>
        Save
      </Button>
    </div>
  );
};

export default Edit;
