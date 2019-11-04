import React, { useState } from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

import InputRange from './InputRange';
import PropTypes from 'prop-types';



export default function SettingsModal({ isOpen, closeModal, updatedPomoData }) {
	const [shortBreakRangeValue, setShortBreakRangeValue] = useState(5)
	const [longBreakRangeValue, setLongBreakRangeValue] = useState(15)
	const [pomoRangeValue, setPomoRangeValue] = useState(25)

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === 'short') {
			setShortBreakRangeValue(value);
		} else if (name === 'long') {
			setLongBreakRangeValue(value)
		} else {
			setPomoRangeValue(value)
		}
	}
	const pomodoroValues = {
		short_break_duration: Number(shortBreakRangeValue),
		long_break_duration: Number(longBreakRangeValue),
		pomodoro_duration: Number(pomoRangeValue)
	}
	return (
		<Modal open={isOpen} basic size='small'>
			<Header icon='settings' content='Adjust the Pomodoro' />
			<Modal.Content>
				<p>
					<InputRange
						label='Short Break'
						name='short'
						value={shortBreakRangeValue}
						min="1" max="15"
						// min="3" max="15"
						onChange={handleChange.bind(this)} />

					<InputRange
						label='Long Break'
						name='long'
						value={longBreakRangeValue}
						min="1" max="30"
						// min="10" max="30"
						onChange={handleChange.bind(this)} />

					<InputRange
						label='Pomodoro'
						name='pomo'
						value={pomoRangeValue}
						min="1" max="60"
						// min="20" max="60"
						onChange={handleChange.bind(this)} />
				</p>
			</Modal.Content>
			<Modal.Actions>
				<Button basic color='red' inverted onClick={closeModal}>
					Discard
          </Button>
				<Button color='green' inverted onClick={() => updatedPomoData(pomodoroValues)}>
					Save
          </Button>
			</Modal.Actions>
		</Modal>
	)
}


SettingsModal.propTypes = {
	isOpen: PropTypes.bool,
	closeModal: PropTypes.func,
	updatedPomoData: PropTypes.func
}
