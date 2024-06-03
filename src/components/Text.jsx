// import React, { useState, useEffect } from 'react';
// import Draggable from "react-draggable";

// const Text = ({ editMode }) => {
//   const [localEditMode, setLocalEditMode] = useState(editMode);
//   const [val, setVal] = useState("Double Click to Edit");

//   useEffect(() => {
//     setLocalEditMode(editMode);
//   }, [editMode]);

//   const handleDoubleClick = () => {
//     setLocalEditMode(true);
//   };

//   return (
//     <Draggable>
//       {localEditMode
//         ? <input 
//             onDoubleClick={() => setLocalEditMode(false)} 
//             value={val} 
//             onChange={(e) => setVal(e.target.value)} 
//           />
//         : <h1 onDoubleClick={handleDoubleClick} onTouchStart={handleDoubleClick}>{val}</h1>}
//     </Draggable>
//   );
// };

// export default Text;
import React, { useState, useEffect } from 'react';
import Draggable from "react-draggable";

const Text = ({ editMode }) => {
  const [localEditMode, setLocalEditMode] = useState(editMode);
  const [val, setVal] = useState("Double Click to Edit");

  useEffect(() => {
    setLocalEditMode(editMode);
  }, [editMode]);

  const handleDoubleClick = () => {
    if (editMode) {
      setLocalEditMode(true);
    }
  };

  return (
    <Draggable>
      {localEditMode
        ? <input 
            onDoubleClick={() => setLocalEditMode(false)} 
            value={val} 
            onChange={(e) => setVal(e.target.value)} 
          />
        : <h1 onDoubleClick={handleDoubleClick} onTouchStart={handleDoubleClick}>{val}</h1>}
    </Draggable>
  );
};

export default Text;
