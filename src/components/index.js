import React, { useState } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import Pomodoro from './Pomodoro';
import PomoButton from './PomoButton';
import ConfirmModal from './ConfirmModal';
import SettingsModal from './SettingsModal';
import Stats from './Stats';
import Settings from './Settings';
import PomoCycles from './PomoCycles';

const StyledHeader = styled.h1`
	color: white;
	font-weight: normal;
	font-size: 13em;
	margin-top: 0.5em;
	@media only screen and (max-width: 875px) {
		margin-top: 1em;
		font-size: 9em;
	}
	@media only screen and (max-width: 380px) {
		margin-top: 2em;
    font-size: 5em;
  }
`;
const App = () => {
  const [pomoState, setPomoState] = useState(null);
  const [startButtonText, setStartButtonText] = useState('Start');
  const [isStopDisabled, setIsStopDisabled] = useState(true);
  const [isModalOpen, SetModalState] = useState(false);
  const [isSettingsModalOpen, setSettingsModalState] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [pomodoroStatus, setPomodoroStatus] = useState(null);

  const defaultPomodorovalues = {
    short_break_duration: 5,
    long_break_duration: 15,
    pomodoro_duration: 25,
  };
  const [pomodoroValues, setPomodoroValues] = useState(defaultPomodorovalues);
  function handleStart() {
    if (startButtonText === 'Pause') {
      setStartButtonText('Resume');
      setPomoState('pause');
    } else if (startButtonText === 'Start') {
      setStartButtonText('Pause');
      setPomoState('start');
      setIsStopDisabled(false);
    } else if (startButtonText === 'Resume') {
      setStartButtonText('Pause');
      setPomoState('resume');
    }
  }
  function stopClicked() {
    SetModalState(!isModalOpen);
  }
  function handleStop() {
    setPomoState('stop');
    setIsStopDisabled(true);
    SetModalState(false);
  }
  function handleStartAgain() {
    setStartButtonText('Start');
    setPomoState(null);
  }
  function openSettingsDialog() {
    setSettingsModalState(true);
  }
  function closeSettingsModal() {
    setSettingsModalState(false);
  }
  function updatedPomoData(value) {
    setPomodoroValues(value);
    setPomoState('stop');
    setIsStopDisabled(true);
    closeSettingsModal();
  }
  function currentPomodoroCount(value) {
    setPomodoroCount(value);
  }

  function currentPomodoroStatus(value) {
    setPomodoroStatus(value);
  }

  return (
    <Container fluid textAlign="center">
      <ConfirmModal
        isModalOpen={isModalOpen}
        handleStop={handleStop.bind(this)}
        stopClicked={stopClicked.bind(this)}
			/>
      <SettingsModal closeModal={closeSettingsModal.bind(this)} isOpen={isSettingsModalOpen} updatedPomoData={updatedPomoData} />
      <Settings openDialog={openSettingsDialog.bind(this)} />
      <PomoCycles pomodoroCount={pomodoroCount} pomodoroState={{ pomoState, pomodoroStatus }} />
      <StyledHeader>
        <Pomodoro pomoState={pomoState} handleStartAgain={handleStartAgain.bind()} {...pomodoroValues} currentPomodoroCount={currentPomodoroCount} currentPomodoroStatus={currentPomodoroStatus} />
      </StyledHeader>
      <Grid stackable centered>
        <Grid.Column width={3}>
      <PomoButton handlePress={handleStart.bind(this)} buttonText={startButtonText} />
    </Grid.Column>
        <Grid.Column width={3}>
      <ConfirmModal
        isModalOpen={isModalOpen}
        handleStop={handleStop.bind(this)}
        stopClicked={stopClicked.bind(this)}
					/>
      <PomoButton
        handlePress={stopClicked.bind(this)}
        isDisabled={isStopDisabled}
        buttonText="Stop"
					/>
    </Grid.Column>
      </Grid>
      <Grid centered style={{ marginTop: '5em' }}>
        <Grid.Row>
      <Header as="h1" style={{ color: 'white' }}>Pomodoros</Header>
    </Grid.Row>
        <Grid.Row>
      <Stats today={pomodoroCount-1} />
    </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
