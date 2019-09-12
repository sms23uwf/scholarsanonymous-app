import React from 'react';
import InformedConsentModal from './InformedConsentModal';
import Checkbox from './Checkbox';
import { cancelLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../routers/AppRouter';
import selectUsers from '../selectors/users';
import { startAddUser } from '../actions/users';
import * as firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import { setUUIDFilter } from '../actions/filters';

require('bootstrap/dist/css/bootstrap.css');

var userMustAgree = true;

export class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    console.log(`firebase.auth.uid ${firebase.auth().currentUser.uid}`);

    if (this.props.users.length > 0 )
    {
      userMustAgree = false;
    }
    else
      userMustAgree = true;


    console.log(`props.users.length: ${props.users.length}`);
    console.log(`userMustAgree ${userMustAgree}`);
    console.log(`filter.userId: ${props.filters}`);
  }
  
  state = {
   showModal: userMustAgree,
   agreeChecked: false,
   userid: firebase.auth().currentUser.uid
  }

  closeModal = () => {
    userMustAgree = false
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
      userMustAgree = false
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

  render() {
    return (
        <div className="content-container-dashboard">
          <span id="image">
            <span id="image-inner" />
          </span>
          <InformedConsentModal
          show={userMustAgree}
          closeCallback={this.toggleModal}
          handleLogout={this.handleCancel}
          customClass="custom_modal_class"
          >
            <React.Fragment>
              <h2>Scholacity</h2>
              <p>Scholacity is the combination of Scholarship and Tenacity. Scholacity is about the facilitation of Lifelong Learning. No Personally Identifying Information (PII) will be captured or stored about the logged-in user. The only data this application captures is related to the learning objectives and courses that you view and choose, tied simply to a user ID number. This data shall be used for educational research purposes only.</p>
              
              <div className="list-item" width="1.0">
                <Grid
                justify="space-between" 
                container 
                spacing={0}
                >
                  <Grid item>
                    <Checkbox type="checkbox" label="I Agree" onCheckboxChange={this.onCheckChange}/>
                  </Grid>
                </Grid>
              </div>

            </React.Fragment>
          </InformedConsentModal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state.users, firebase.auth().currentUser.uid),
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startAddUser: () => dispatch(startAddUser()),
  setUUIDFilter: (userId) => dispatch(setUUIDFilter(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);