import React, { useState } from 'react';
import './InfoBar.css';

function InfoBar() {
    const [ name, setName ] = useState('');
    const [ nameStyle, setNameStyle ] = useState("");

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleName(e) {
        e.preventDefault();
        setNameStyle("fadeOut");
		localStorage.setItem('userIDtester2', name);
	}

	function greetUser() {
		let user = localStorage.getItem('userIDtester2');
		if (user) {
			return <div className = "fadeIn">Hi, {user}.</div>;
		} else {
			return (
				<div>
					<div className = {nameStyle}>
						What's Your Name?
						<form onSubmit={handleName}>
							<input type="text" value={name} onChange={handleNameChange} />
						</form>
					</div>
				</div>
			);
		}
	}

	return <div className="InfoBar">
        <div>
            {greetUser()}
        </div>
    </div>;
}

export default InfoBar;
