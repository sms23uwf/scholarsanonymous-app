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
              <h2>Informed Consent</h2>
              <br/>
              <h3>Affording Self-Directed Educational Experiences in the Lifelong Learning Community: Using Domain Ontology-Generated Learning Objectives to Recommend Leisure Learning Courses.</h3>
              <br/>
              <p align="left">Thank you for your interest in this research project. Federal and university regulations require us to obtain signed consent for participation in research involving human participants. After reading the statements below, please indicate your consent by checking the box and clicking the 'Submit' button.
              <br/>
              <br/>
              The purpose of this study is to investigate the useability and acceptability, by the lifelong learning community over the age of 65, of machine generated learning objectives from course descriptions in a program catalog such as the one from the Leisure Learning center here at the University of West Florida.
              <br/>
              <br/>
              I understand that :
              <br/>
              1) There are no physical risks associated with this study.
              <br/>
              2) The Web Application will collect no information whatsoever about the participant. When you log in with Google we shall only store a unique user ID and the fact that you accepted this informed consent agreement.
              <br/>
              3) I may discontinue participation in this study at any time.
              <br/>
              <br/>


              </p>
              
              <div className="list-item" width="1.0">
                <Grid
                justify="space-between" 
                container 
                spacing={0}
                >
                  <Grid item>
                    <Checkbox type="checkbox" label="I certify that I have read and fully understand the statements above and agree to participate in the research project." onCheckboxChange={this.onCheckChange}/>
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