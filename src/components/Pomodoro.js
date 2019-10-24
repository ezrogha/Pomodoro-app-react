import React, { useState, useEffect } from 'react'

const Pomodoro = ({ pomoState, pomodoro_duration = 0.8, short_break_duration = 0.3, long_break_duration = 0.2, handleStartAgain }) => {
	const [state, setState] = useState('pomodoro')
	const [pomodoroCount, setPomodoroCount] = useState(0)
	const [totalSeconds, setTotalSeconds] = useState(pomodoro_duration*60)
	const [minutes, setMinutes] = useState(pomodoro_duration)
	const [seconds, setSeconds] = useState(0)
	const [pauseTime, setPauseTime] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (pomoState === 'start' || pomoState === 'resume') {
				console.log([totalSeconds, state])
				if (totalSeconds === 0 && state === 'pomodoro') {
					setMinutes(0)
					setSeconds(0)
					clearInterval(interval);
					setPomodoroCount(pomodoroCount + 1)
					if (pomodoroCount % 4 === 0) {
						setState('long_break')
						setTotalSeconds(long_break_duration * 60)
					} else {
						setState('short_break')
						setTotalSeconds(short_break_duration * 60)
					}
				} else if ((state === 'short_break' || state === 'long_break') && totalSeconds === 0) {
					setState('pomodoro')
					setTotalSeconds(pomodoro_duration*60)
					setMinutes(pomodoro_duration)
					setSeconds(0)
					clearInterval(interval)
					handleStartAgain()
				} else {
					setPauseTime(0)
					setMinutes(Math.floor(totalSeconds / 60))
					setSeconds(totalSeconds % 60)
					setTotalSeconds(totalSeconds - 1)
				}
			} else if (pomoState === 'stop') {
				console.log('Stop')
				handleStartAgain()
				setTotalSeconds(pomodoro_duration * 60)
				setMinutes(pomodoro_duration)
				setSeconds(0)
			} else if (pomoState === 'pause') {
				if (pauseTime === 5 * 60 || pauseTime === 10 * 60) {
					alert("Don't rest for too long, get back into the zone")
				}
				setPauseTime(pauseTime + 1)
				setTotalSeconds(totalSeconds)
			}
		}, 1000)
		return () => clearInterval(interval)
	})
	function addZero(value) {
		const strval = value.toString();
		return strval.length < 2 ? `0${strval}` : strval;
	}
	return (
		<div>
			<span>{`${addZero(minutes)}:${addZero(seconds)}`}</span>
		</div>
	)
}

export default Pomodoro;
