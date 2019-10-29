import React, { useEffect } from 'react';
import usePomodoroTimer from '../custom hooks/pomodoroCounter';

export default function Pomodoro (props){
	const time = usePomodoroTimer(props)
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
	return (
		<div>
			<span>{currentTime()}</span>
		</div>
	)
}



