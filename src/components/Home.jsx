import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDrop } from 'react-dnd';
import { IoMdClose } from "react-icons/io";
import HomeText from './HomeText';

const lists = [
  {
    id: 1,
    title: "lable",
  },
  {
    id: 2,
    title: "input",
  },
  {
    id: 3,
    title: "button",
  }
];

const Home = () => {

  const [board, setBoard] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState("")
  const [fomeData, setFormData] = useState({ title: '', weight: null, size: null })
  const [data, setData] = useState([]);
  const [coord, setCoord] = useState({ x: 250, y: 50 })


  const [dragging, setDragging] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'text',
    drop: (item) => addText(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));


  const addText = (id) => {
    const filteredList = lists.filter((el) => id === el.id);
    setBoard((board) => [...board, filteredList[0]])
    setTitle(filteredList[0].title)
    setShowModal(true)



  }
  console.log(board)
  const closeModal = () => {
    setShowModal(false)
  }


  const handleChange = (e) => {
    let { name, value } = e.target;
    value = e.target.type == "number" ? +(value) : value
    setFormData(prv => ({ ...prv, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { fomeData, title }
    setData(obj)
    setShowModal(false)
  }

  // drag mouse 

  const handleMouseDown = (event) => {
    setDragging(true);
    const { clientX, clientY } = event;
    setCoord({ x: clientX, y: clientY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const { clientX, clientY } = event;

      const container = event.currentTarget.getBoundingClientRect();
      const x = Math.min(Math.max(clientX, container.left), container.right);
      const y = Math.min(Math.max(clientY, container.top), container.bottom);
      setCoord({ x, y });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: 'center', height: '90vh', alignItems: 'center', marginTop: '5vh', fontFamily: 'Raleway' }}>
       <div style={{textAlign:'center', margin:"auto"} }>
        <h3>Drag the element from right sidebar and drop below</h3>
       </div>
      <div ref={drop}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ width: '50%', background: '#DDDDDD', height: '90vh' }}>

        {showModal && <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
          <div style={{ width: "300px", background: '#DDDDDD', padding: '30px 20px', borderRadius: '12px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '500' }}>
              <h3>Edit {title}</h3>
              <IoMdClose onClick={closeModal} />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <lable>Text</lable>
                <br />
                <input type='text' placeholder={`${title} text`} name='title' value={fomeData.title} onChange={handleChange
                } />
              </div>
              <div>
                <lable>X</lable>
                <br />
                <input type='text' value={coord.x} />
              </div>
              <div>
                <lable>Y</lable>
                <br />
                <input type='text' value={coord.y} />
              </div>
              <div>
                <lable>Font Size</lable>
                <br />
                <input type='number' name='size' value={fomeData.size} onChange={handleChange
                } placeholder='in number' />
              </div>
              <div>
                <lable>Font weight</lable>
                <br />
                <input type='number' name='weight' value={fomeData.weight} onChange={handleChange
                } placeholder='in number' />
              </div>
              <br />
              <button type='submit' style={{ background: "#1761d0", padding: '5px 15px', borderRadius: "10px", fontWeight: '500', color: 'white' }}>Save Change</button>
            </form>
          </div>
        </div>}
        <>

          {board.map((el, i) => {
            return <HomeText key={i} {...el} fomeData={fomeData} coord={coord}
              handleMouseDown={handleMouseDown}

            />
          })}
        </>


      </div>
      <div style={{ background: "#222831", padding: '20px', width: '250px', height: '90vh' }}>
        <h3 style={{ color: 'white', textTransform: 'uppercase', fontWeight: '400' }}>blocks</h3>
        {lists.map((el) => {
          return <Sidebar key={el.id}  {...el} />
        })}
      </div>


    </div>
  )
}

export default Home