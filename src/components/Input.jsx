import { useState } from "react";setData
import { MdDragIndicator } from "react-icons/md";

export const Input = ({ onDrop }) => {
    const [dragging, setDragging] = useState(false);
  
    const handleDragStart = () => {
      setDragging(true);
    };
  
    const handleDragEnd = () => {
      setDragging(false);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
      if (event.target === onDrop) {
        onDrop.handleDrop(event);
      }
    };
  
    return (
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        style={{ opacity: dragging ? 0.5 : 1 ,display:'flex',alignItems:'center', textAlign:'center' ,background:'white',paddingLeft:'10px' }}
        ><MdDragIndicator /> 
        Input
      </div>
    );
  };