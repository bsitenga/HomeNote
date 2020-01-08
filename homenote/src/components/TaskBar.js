import React, { useState } from 'react';
import './TaskBar.css';
import Task from './Task.js';

function TaskBar() {

    const [taskDay, setTaskDay] = new useState("today");
    const [tasks, setTasks] = new useState([["do laundry", true], ["grocery shopping", false]]);
    const [a, setA] = new useState(false);

    function checkTask(index) {
        let tempTasks = tasks;
        console.log("hello");
        if (tempTasks[index][1]) {
            tempTasks[index][1] = false;
        } else {
            tempTasks[index][1] = true;
        }
        setTasks(tempTasks);
        console.log(tasks);
    }

    function checkA() {
        if (a) {
            setA(false);
        } else {
            setA(true);
        }
    }
    

  return (
    <div className="TaskBar">
      <div className = "day">
        {taskDay}
      </div>
      <div className = "tasks">
{tasks.map((task, index) => (
            <Task tInfo={task[0]} tStatus={task[1]}/>
        ))}
      </div>
    </div>
  );
}

export default TaskBar;