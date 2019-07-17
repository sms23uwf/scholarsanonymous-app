import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Scholacity</h1>
        </Link>
        <Link className="button button--link" to="/curriculumSelectorDashboard" activeClassName="is-active">Planner</Link>
        <Link className="button button--link" to="/recommendationsDashboard" activeClassName="is-active">Recommendations</Link>
        <Link className="button button--link" to="/portfolioDashboard" activeClassName="is-active" >Portfolio</Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
