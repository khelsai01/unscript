import React, { useState } from 'react';

const Label = ({ onDrop }) => {
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
      style={{ opacity: dragging ? 0.5 : 1 }}
    >
      Label
    </div>
  );
};

const Input = ({ onDrop }) => {
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
      style={{ opacity: dragging ? 0.5 : 1 }}
    >
      Input
    </div>
  );
};

const Button = ({ onDrop }) => {
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
      style={{ opacity: dragging ? 0.5 : 1 }}
    >
      Button
    </div>
  );
};

const DropZone = ({ items, setItems }) => {
  const [isHovered, setHovered] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setHovered(true);
  };

  const handleDragLeave = () => {
    setHovered(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setHovered(false);
    setItems([...items, event.dataTransfer.getData('text')]);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ border: isHovered ? '1px solid red' : '1px solid black',width:"70%" }}
    >
      Dragged Components:
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const Drag = () => {
  const [items, setItems] = useState([]);

  return (
    <div style={{ display: 'flex' ,width:"25%"}}>
      <div>
        <Label onDrop={{ handleDrop: setItems }} />
        <Input onDrop={{ handleDrop: setItems }} />
        <Button onDrop={{ handleDrop: setItems }} />
      </div>
      <DropZone items={items} setItems={setItems} />
    </div>
  );
};

export default Drag;