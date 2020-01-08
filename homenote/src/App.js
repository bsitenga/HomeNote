import React from 'react';
import './App.css';
import InfoBar from './components/InfoBar';
import TaskBar from './components/TaskBar';
import NoteBar from './components/NoteBar';

function App() {

  return (
    <div className="App">
      <div classname = "row">
        <InfoBar />
      </div>
      <div className = "row next-row">
        <TaskBar />
        <NoteBar />
      </div>
    </div>
  );
}

export default App;
