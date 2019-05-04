import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
    <div className="box-layout">
        <div>
            <h1>Scholacity</h1>
            <p>The Self-Directed Learning Experiment</p>
            <button onClick={startLogin}>Login</button>
        </div>
    </div>
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);