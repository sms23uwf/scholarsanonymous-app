import React from 'react';
import uuid from 'uuid';
import InformedConsentModal from './InformedConsentModal';
import Checkbox from './Checkbox';
import { cancelLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../routers/AppRouter';
import selectUsers from '../selectors/users';
import { startAddUser } from '../actions/users';
import { setUUIDFilter } from '../actions/filters';

require('bootstrap/dist/css/bootstrap.css');

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {
   showModal: this.props.users.length === 0,
   agreeChecked: false
  }

  closeModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleCancel = () => {
    this.closeModal()
    {cancelLogin()}
    history.push('/cancel');
  }

  toggleModal = () => {
    if (this.state.agreeChecked)
    {
      this.props.startAddUser();
      console.log('just called startAddUser');
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }

  onCheckChange = (e) => {
    this.setState({
      agreeChecked: !this.state.agreeChecked
    });
  };

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

        <div className="content-container-dashboard">
          <span id="image">
            <span id="image-inner" />
          </span>
          <InformedConsentModal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          handleLogout={this.handleCancel}
          customClass="custom_modal_class"
          >
            <React.Fragment>
              <h2>Scholacity</h2>
              <p>Scholacity is the combination of Scholarship and Tenacity. Scholacity is about the facilitation of Lifelong Learning. No Personally Identifying Information (PII) will be captured or stored about the logged-in user. The only data this application captures is related to the learning objectives and courses that you view and choose, tied simply to a user ID number. This data shall be used for educational research purposes only.</p>

              <div className="list-item" width="1.0">
                <Checkbox type="checkbox" label="I Agree" onCheckboxChange={this.onCheckChange}/>
              </div>

            </React.Fragment>
          </InformedConsentModal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state.users, state.filters)
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startAddUser: () => dispatch(startAddUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);