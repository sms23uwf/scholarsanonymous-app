import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddCourseRecommendationPage from '../components/AddCourseRecommendationPage';
import EditCourseRecommendationPage from '../components/EditCourseRecommendationPage';
import ViewLearningObjectivesPage from '../components/ViewLearningObjectivesPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { LearningObjectiveList } from '../components/LearningObjectiveList';
import CurriculumSelectorDashboard from '../components/CurriculumSelectorDashboard';
import RecommendationsDashboard from '../components/RecommendationsDashboard';
import PortfolioDashboard from '../components/PortfolioDashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/curriculumSelectorDashboard" component={CurriculumSelectorDashboard}/>
        <PrivateRoute path="/recommendationsDashboard" component={RecommendationsDashboard}/>
        <PrivateRoute path="/portfolioDashboard" component={PortfolioDashboard}/>
        <PrivateRoute path="/create" component={AddCourseRecommendationPage} />
        <PrivateRoute path="/edit/:id" component={EditCourseRecommendationPage} />
        <PrivateRoute path="/viewAssocLearningObjectives/:content" component={ViewLearningObjectivesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
