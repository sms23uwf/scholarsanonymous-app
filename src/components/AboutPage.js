import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
import Modal from './Modal';

require('bootstrap/dist/css/bootstrap.css');

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showModal: true
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  render() {
    return (
      <div className="box-layout_dashboard">
        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
          >
            <React.Fragment>
              <h2>Scholacity</h2>
              <p>Scholacity is the combination of Scholarship and Tenacity. Scholacity is about the facilitation of Lifelong Learning. No Personally Identifying Information (PII) will be captured or stored about the logged-in user. The only data this application captures is related to the learning objectives and courses that you view and choose, tied simply to a user ID number. This data shall be used for educational research purposes only.</p>
            </React.Fragment>
          </Modal>
      </div>
    );
  }
};

export default AboutPage;
