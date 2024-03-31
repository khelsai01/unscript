
import { DndProvider } from 'react-dnd';
import './App.css';
import Home from './components/Home';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

  return(
    <DndProvider backend={HTML5Backend}>
      <Home />
    </DndProvider>
  )
}

export default App;
