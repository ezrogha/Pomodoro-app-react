import React from 'react';
import { Statistic } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function Stats({ today }) {
	return (
		<Statistic.Group inverted>
			<Statistic>
				<Statistic.Value>{today}</Statistic.Value>
				<Statistic.Label>Today</Statistic.Label>
			</Statistic>
			<Statistic>
				<Statistic.Value>{today}</Statistic.Value>
				<Statistic.Label>This Week</Statistic.Label>
			</Statistic>
			<Statistic>
				<Statistic.Value>{today}</Statistic.Value>
				<Statistic.Label>This Month</Statistic.Label>
			</Statistic>
		</Statistic.Group>
	)
}

Stats.propTypes = {
	today: PropTypes.number
}
