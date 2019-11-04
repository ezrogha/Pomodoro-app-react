import React, { useEffect } from 'react';
import usePomodoroTimer from '../custom hooks/pomodoroCounter';
import PropTypes from 'prop-types'

export default function Pomodoro (props){
	const [time, pomodoroCount, pomodoroStatus] = usePomodoroTimer(props)
	useEffect(() => {
		document.title = currentTime()
	})
	function addZero(value) {
		const strval = value.toString();
		return strval.length < 2 ? `0${strval}` : strval;
	}
	function currentTime(){
		return `${addZero(time.minutes)}:${addZero(time.seconds)}`
	}
	props.currentPomodoroCount(pomodoroCount)
	props.currentPomodoroStatus(pomodoroStatus)
	return (
		<div>
			<span>{currentTime()}</span>
		</div>
	)
}

Pomodoro.propTypes = {
	currentPomodoroCount: PropTypes.number,
	currentPomodoroStatus: PropTypes.number
}


