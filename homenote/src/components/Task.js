import React, { useState } from 'react';
import './Task.css';

function Task(props) {
	const [ taskInfo, setTaskInfo ] = new useState(props.tInfo);
	const [ taskStatus, setTaskStatus ] = new useState(props.tStatus);

	function checkTask() {
		if (taskStatus) {
			setTaskStatus(false);
		} else {
			setTaskStatus(true);
		}
	}

	return (
		<button className={taskStatus ? 'task complete' : 'task incomplete'} onClick={() => checkTask()}>
			{taskInfo}
		</button>
	);
}

export default Task;
