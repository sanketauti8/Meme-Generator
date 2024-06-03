// import React,{useState,createRef} from 'react';
// import { Button } from 'react-bootstrap';
// import { useSearchParams } from 'react-router-dom';
// import Text from '../components/Text';
// import { exportComponentAsJPEG } from 'react-component-export-image';


// const Edit = () => {
//   const [params] = useSearchParams();
//   //console.log(params.get("url"));
//   const[count,setCount]=useState(0);
//   const [editMode, setEditMode] = useState(false);

//   const memeRef=createRef();

//   const addText=()=>{
//     setCount(count+1);
//     setEditMode(true);
//   }
//   const handleOkClick = () => {
//     setEditMode(false);
//   };

//   return (
//     <div>
//       <div style={{ width:"700px", border:"1px solid", height:"300px"}} ref={memeRef} className="meme mt-5 mb-5">
//         <img src={params.get("url")} width="250px" alt="meme" />
//         {
//             Array(count).fill(0).map((e)=>(<Text editMode={editMode}/>))
//         }
//       </div>
//       <Button onClick={addText}>Add Text</Button>
//       <Button variant="success" onClick={(e)=>{exportComponentAsJPEG(memeRef)}}>Save</Button>
//       <Button onClick={handleOkClick}>Ok</Button>
//     </div>
//   );
// };

// export default Edit;

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
    <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }} >
      <div style={{ width: "700px", border: "1px solid", height: "300px",marginBottom: '20px'  }} ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width="250px" alt="meme" />
        {
          Array(count).fill(0).map((_, index) => (
            <Text 
              key={index} 
              editMode={editableTextIndexes.includes(index)} 
            />
          ))
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={(e) => { exportComponentAsJPEG(memeRef) }}>Save</Button>
      <Button onClick={handleOkClick}>Ok</Button>
    </div>
    </div>
  );
};

export default Edit;
