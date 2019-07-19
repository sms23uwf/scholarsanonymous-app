import React from 'react';
import { Link } from 'react-router-dom';
require('bootstrap/dist/css/bootstrap.css');

const DashboardPage = () => (

  <div className="content-container">
    <div id="lo_listbody" className="list-body">
      <span>
        <div className="list-item">
          <Link className="button button--dashboard" to="/plannerDashboard"><h3>Planner</h3></Link>
        </div>
      </span>
      <span>
        <div className="list-item">
          <Link className="button button--dashboard" to="/recommendationsDashboard"><h3>Recommendations</h3></Link>
        </div>
      </span>
      <span>
        <div className="list-item">
          <Link className="button button--dashboard" to="/portfolioDashboard"><h3>Portfolio</h3></Link>
        </div>
      </span>
    </div>
  </div>
);

export default DashboardPage;
