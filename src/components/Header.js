import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { PersistentDrawerLeft } from './PersistentDrawerLeft';
import { startAddUserNavigationEvent } from '../actions/navigationEvents';

const handleStartLogout = (props) => {
  props.startAddUserNavigationEvent({timestamp: Date.now(), event: 'logout'});
  props.startLogout();
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCancel = () => {
    console.log(`inside handleCancel`);
    this.recordNavigationEvent('logout');
    this.props.startLogout();
  }

  recordNavigationEvent = (event) => {
    let timeStamp = Date.now();

    console.log(`navigation event: ${event}`);
    console.log(`timestamp: ${timeStamp}`);

    const navigationEventCapture = {timestamp: timeStamp, event: event};
    this.props.startAddUserNavigationEvent(navigationEventCapture);
  }

  render() {
    return (
      <header className="header">
      <div className="content-container">
        <div>
          <PersistentDrawerLeft handleLogout={this.handleCancel} />
        </div>
      </div>
    </header>
    )
  };

}
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startAddUserNavigationEvent: (navigationEventCapture) => dispatch(startAddUserNavigationEvent(navigationEventCapture))  
});

export default connect(undefined, mapDispatchToProps)(Header);