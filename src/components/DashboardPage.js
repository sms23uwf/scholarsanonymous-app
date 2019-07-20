import React from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    return (
      <div className="DashboardPage">
        <div className="content-container">
          <div id="lo_listbody" className="list-body">
            <span>
              <div className="list-item">
                <Link className="button button--dashboard" to="/plannerDashboard"><h3>Planner</h3></Link>
              </div>
            </span>
            <span>
              <div className="list-item">
                <Link className="button button--dashboard" to="/recommendationsDashboard"><h3>Recommendations</h3></Link>
              </div>
            </span>
            <span>
              <div className="list-item">
                <Link className="button button--dashboard" to="/portfolioDashboard"><h3>Portfolio</h3></Link>
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
              <p>Scholacity is the combination of Scholarship and Tenacity. Scholacity is about the facilitation of Lifelon Learning. No information about the logged-in user will be captured from Google. The only data we shall capture is the learning objectives and courses you choose, tied simply to a user ID number with no Personally Identifying Information (PII). This data shall be used for research purposes only.</p>
            </React.Fragment>
          </Modal>
        />
      </div>
    );
  }
};

export default DashboardPage;
