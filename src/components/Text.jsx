import React,{useState} from 'react'
import Draggable from "react-draggable"


const Text = () => {

        const [editMode,setEditMode]=useState(false);
        const [val,setVal]=useState("Double Click to Edit");

        const handleDoubleClick = () => {
            setEditMode(true);
          };

  return (
    <Draggable>
    {editMode?<input onDoubleClick={(e)=>setEditMode(false)} value={val} onChange={(e)=>setVal(e.target.value)}/>:
    <h1 onDoubleClick={handleDoubleClick} onTouchStart={handleDoubleClick}>{val}</h1>}
    </Draggable>
  )
}

export default Text