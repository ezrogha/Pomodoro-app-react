import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function PomoButton({ isDisabled = false, handlePress, buttonText }) {

	let iconName = '';
	if (buttonText === 'Stop') {
		iconName = 'stop';
	} else if (buttonText === 'Pause') {
		iconName = 'pause';
	} else {
		iconName = 'play';
	}

	return (
		<Button disabled={isDisabled} color="blue" animated="fade" size="huge" fluid inverted onClick={handlePress}>
			<Button.Content visible>{buttonText}</Button.Content>
			<Button.Content hidden>
				<Icon name={iconName} />
			</Button.Content>
		</Button>
	)
}

PomoButton.propTypes = {
	isDisabled: PropTypes.bool,
	handlePress: PropTypes.func,
	buttonText: PropTypes.bool
}
