import { useState, useEffect } from 'react';
import { notify } from '../components/helpers';

export default function usePomodoroTimer({ pomoState, pomodoro_duration, short_break_duration, long_break_duration, handleStartAgain }){
	const [state, setState] = useState('pomodoro');
	const [pomodoroCount, setPomodoroCount] = useState(1);
	const [totalSeconds, setTotalSeconds] = useState(pomodoro_duration*60);
	const [minutes, setMinutes] = useState(pomodoro_duration);
	const [seconds, setSeconds] = useState(0);
	const [pauseTime, setPauseTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (pomoState === 'start' || pomoState === 'resume') {
				console.log([totalSeconds, state, pomodoroCount])
				if (totalSeconds === 0 && state === 'pomodoro') {
					setPomodoroCount(pomodoroCount + 1)
					setMinutes(0)
					setSeconds(0)
					clearInterval(interval);
					if (pomodoroCount % 4 === 0 && pomodoroCount !== 0) {
            notify('break');
						setState('long_break')
						setTotalSeconds(long_break_duration * 60)
					} else {
            notify('break');
						setState('short_break')
						setTotalSeconds(short_break_duration * 60)
					}
				} else if ((state === 'short_break' || state === 'long_break') && totalSeconds === 0) {
          notify('work');
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

	return [{
		minutes,
		seconds
	}, pomodoroCount, state]
}
