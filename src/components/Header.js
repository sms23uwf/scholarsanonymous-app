import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { PersistentDrawerLeft } from './PersistentDrawerLeft';

//require('bootstrap/dist/css/bootstrap.css');

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div>
        <PersistentDrawerLeft />
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
