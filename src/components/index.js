import React, { useState } from 'react';
import Pomodoro from '../components/Pomodoro';

const App = () => {
	const [pomoState, setPomoState] = useState(null)
	const [startButtonText, setStartButtonText] = useState('Start')
	function handleStart() {
		if (startButtonText === 'Pause') {
			setStartButtonText('Resume')
			setPomoState('pause')
		} else if (startButtonText === 'Start') {
			setStartButtonText('Pause')
			setPomoState('start')
		} else if (startButtonText === 'Resume') {
			setStartButtonText('Pause')
			setPomoState('resume')
		}
	}
	function handleStop() {
		setPomoState('stop')
	}
	function handleSkip() {

	}
	function handleStartAgain() {
		setStartButtonText('Start')
		setPomoState(null)
	}
	return (
		<div>
			{console.log(startButtonText)}
			<Pomodoro pomoState={pomoState} handleStartAgain={handleStartAgain.bind()} />
			<button onClick={handleStart.bind(this)} >{startButtonText}</button>
			<button onClick={handleStop.bind(this)}>Stop</button>
			<button onClick={handleSkip.bind(this)}>Skip</button>
		</div>
	)
}

export default App;
