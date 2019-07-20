import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
import Modal from './Modal';

require('bootstrap/dist/css/bootstrap.css');

class DashboardPage extends React.Component {
  state = {
    showModal: false
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

  handlePlannerClick = () => {
    this.context.router.history.push('/plannerDashboard');
  }

  handleRecommendationsClick = () => {
    this.context.router.history.push('/recommendationsDashboard');
  }

  handlePortfolioClick = () => {
    this.context.router.history.push('/portfolioDashboard');
  }

  render() {
    return (
      <div className="DashboardPage">
        <div className="content-container">
          <div id="lo_listbody" className="list-body">
            <span>
              <div className="list-item">
                <button className="button button--dashboard" onClick={this.handlePlannerClick}><h3>Planner</h3></button>
              </div>
            </span>
            <span>
              <div className="list-item">
                <button className="button button--dashboard" onClick={this.handleRecommendationsClick}><h3>Recommendations</h3></button>
              </div>
            </span>
            <span>
              <div className="list-item">
                <button className="button button--dashboard" onClick={this.handlePortfolioClick}><h3>Portfolio</h3></button>
              </div>
            </span>
            <span>
              <div className="list-item">
                <button className="button button--dashboard" onClick={this.toggleModal}><h3>About Scholacity</h3></button>
              </div>
            </span>
          </div>
        </div>
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

export default DashboardPage;
