import React, { useState } from 'react';
import './TaskBar.css';

function TaskBar() {

    const [taskDay, setTaskDay] = new useState("today");
    const [tasks, setTasks] = new useState([["do laundry", "complete"], ["grocery shopping", "incomplete"]]);
    console.log("test");

  return (
    <div className="TaskBar">
      <div className = "day">
        {taskDay}
      </div>
      <div className = "tasks">
        {tasks.map((task, index) => (
<p className = {task[1]}>{task[0]}</p>
        ))}
      </div>
    </div>
  );
}

export default TaskBar;