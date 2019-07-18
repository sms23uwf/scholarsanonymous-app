import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
require('bootstrap/dist/css/bootstrap.css');

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Scholacity</h1>
        </Link>

        <DropdownMenu triggerType='icon' trigger='glyphicon glyphicon-list'>
          <MenuItem text="Home" location="/dashboard" />
          <MenuItem text="Planner" location="/curriculumSelectorDashboard" />
          <MenuItem text="Recommendations" location="/recommendationsDashboard" />
          <MenuItem text="Portfolio" location="/portfolioDashboard" />
          <MenuItem text="Logout" onClick={startLogout} />
        </DropdownMenu>

      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
