import React from 'react';
import uuid from 'uuid';
import InformedConsentModal from './InformedConsentModal';
import Checkbox from './Checkbox';
import { cancelLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../routers/AppRouter';
import selectUsers from '../selectors/users';
import { startSelectUser } from '../actions/users';
import { startAddUser } from '../actions/users';
import { setTextFilter } from '../actions/filters';
import * as firebase from 'firebase';
import database from '../firebase/firebase';
import Grid from '@material-ui/core/Grid';

require('bootstrap/dist/css/bootstrap.css');

var userMustAgree = true;

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    props.setTextFilter(firebase.auth().currentUser.uid);
    
    console.log(`firebase.auth.uid ${firebase.auth().currentUser.uid}`);

    if (props.users.length > 0 )
    {
      userMustAgree = false;
    }
    else
      userMustAgree = true;

    console.log(`props.users.length: ${props.users.length}`);
    console.log(`userMustAgree ${userMustAgree}`);
  }
  
  state = {
   showModal: userMustAgree,
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

  callBackSetFilter = () => {
    this.props.selectUsers().then(callBackSetMustAgree());
  }

  callBackSetMustAgree = () => {
    if (this.props.users.length > 0 )
    {
      userMustAgree = false;
    }
    else
      userMustAgree = true;
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
    users: selectUsers(state.users, state.filters)
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startAddUser: () => dispatch(startAddUser()),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  selectUsers: () => dispatch(selectUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);