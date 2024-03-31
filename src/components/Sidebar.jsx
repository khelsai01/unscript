import React from 'react'
import { MdDragIndicator } from "react-icons/md";
import { useDrag } from 'react-dnd';

const Sidebar = ({ id, title }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'text',
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div 
        ref={drag}
         style={{ display: 'flex', alignItems: 'center', textAlign: 'center', background: 'white', paddingLeft: '10px',marginTop:"10px",fontWeight:'400' }}><MdDragIndicator /> {title}</div>
    )
}

export default Sidebar