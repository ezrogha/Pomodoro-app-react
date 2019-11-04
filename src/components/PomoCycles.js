import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const StyledLoaderContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 9px;
    margin-left: 5px;
`

const StyledLoader = styled(Loader)`
    top: 0;
    left: 0;
    display: inline-block;
    position: absolute;
    padding-top: 10px
`

const CylesContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 50px;
    // border: 1px solid red;
    color: rgb(84, 200, 255);
`

const pomos = (pomoCount, pomoState, status) => {
	let pomoArray = []
	for (let i = 1; i < 5; i++) {
		if (pomoCount > i) {
			pomoArray.push(<Icon name="check circle outline" size="big" />)
		} else if (pomoCount < i) {
			pomoArray.push(<Icon name="circle outline" size="big" disabled />)
		} else {
			pomoArray.push(<StyledLoaderContainer>
				<StyledLoader
					type="Puff"
					color={(status !== 'pomodoro' || pomoState === null) ? "grey" : "#00BFFF"}
					height={30}
					width={30}
				/>
			</StyledLoaderContainer>)
		}

	}
	return pomoArray;
}

export default function PomoCycles({ pomodoroCount, pomodoroState: { pomoState, pomodoroStatus } }) {
	return (
		<CylesContainer>
			{pomos(pomodoroCount, pomoState, pomodoroStatus)}
		</CylesContainer>
	)
}


PomoCycles.propTypes = {
	pomodoroCount: PropTypes.number,
	pomodoroState: PropTypes.string
}