import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { startLogout } from '../actions/auth';

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DropdownMenu userName="Chris Smith">
        <MenuItem text="Home" location="/dashboard" />
        <MenuItem text="Planner" location="/curriculumSelectorDashboard" />
        <MenuItem text="Recommendations" location="/recommendationsDashboard" />
        <MenuItem text="Portfolio" location="/portfolioDashboard" />
        <MenuItem text="Logout" onClick={startLogout} />
      </DropdownMenu>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
  
export default NavigationMenu;