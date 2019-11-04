import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

export default function ConfirmModal({ isModalOpen, stopClicked, handleStop }) {
	return (
  <Modal basic size='small' open={isModalOpen}>
    <Header icon='ban' content='Cancel Pomodoro Session' />
    <Modal.Content>
      <p>
					Are you really sure about this?<br />
					Kindly note that the time used sofar will not be archived.
    </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={stopClicked}>
      <Icon name='remove' /> No
    </Button>
      <Button color='green' inverted onClick={handleStop}>
      <Icon name='checkmark' /> Yes
    </Button>
    </Modal.Actions>
  </Modal>
	)
}

ConfirmModal.propTypes = {
	isModalOpen: PropTypes.bool,
	stopClicked: PropTypes.func,
	handleStop: PropTypes.func
}