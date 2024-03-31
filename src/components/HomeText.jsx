import React from 'react'
import { MdDragIndicator } from "react-icons/md";
import { useDrag } from 'react-dnd';

const HomeText = ({ id, title, fomeData, coord, handleMouseDown }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'text',
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            // draggable
            style={{ position: 'absolute', top: coord.y, left: coord.x, width: '100px' }}
        >

            <div ref={drag}
                onMouseDown={handleMouseDown}
                style={{ display: 'flex', border: isDragging ? "2px solid red" : '0px', alignItems: 'center', textAlign: 'center', background: 'white', padding: '0 5px', marginTop: "10px", fontWeight: [fomeData.weight], fontSize: [fomeData.size + "px"] }}
            >
                <MdDragIndicator />
                {fomeData.title ? fomeData.title : title}</div>
        </div>
    )
}

export default HomeText