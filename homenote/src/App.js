import React from 'react';
import './App.css';
import InfoBar from './components/InfoBar';
import TaskBar from './components/TaskBar';
import NoteBar from './components/NoteBar';

function App() {

  return (
    <div className="App">
      <InfoBar />
      <TaskBar />
      <NoteBar />
    </div>
  );
}

export default App;
