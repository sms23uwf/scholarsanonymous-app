import React from 'react';
import Modal from 'react-modal';

const ScholacityModal = (props) => (
    <Modal show={props.open} onHide={() => props.setOpen(false)}>
    <Modal.Header closeButton>
      <Modal.Tltle>Scholacity</Modal.Tltle>
    </Modal.Header>
    <Modal.Body>
      <p>
        Scholacity - the combination of Scholarship and Tenacity - is designed to facilitate Lifelong Learning. This Application has been designed to capture data about the learning preferences of Senior Adults for a doctoral dissertation. All data gathered will be used solely for research purposes at the University of West Florida. The Login with Google is only so that we can capture a unique user ID for each user and this application will NOT capture or store any information about the logged-in user from Google. This Application will only capture the learning objectives you select, and the courses you view and select.
        I agree to these conditions.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <button variant="primary" onClick={() => props.setOpen(false)}>
        Yes
      </button>
      <button variant="secondary" onClick={() => props.setOpen(false)}>
        No
      </button>
    </Modal.Footer>
  </Modal>
);

export default ScholacityModal;