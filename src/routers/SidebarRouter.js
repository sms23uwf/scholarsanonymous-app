import { Home, ContentPaste, Notifications, AccountCircle, Info, WorkOutline, Work, Assessment } from '@material-ui/icons';

import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import PlannerDashboard from '../components/PlannerDashboard';
import RecommendationsDashboard from '../components/RecommendationsDashboard';
import PortfolioDashboard from '../components/PortfolioDashboard';
import Modal from '../components/Modal';

const SidebarRouter = [
  {
    path: '/dashboard',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: DashboardPage
  },
  {
    path: '/plannerDashboard',
    sidebarName: 'Planner',
    navbarName: 'Planner',
    icon: Assessment,
    component: PlannerDashboard
  },
  {
    path: '/recommendationsDashboard',
    sidebarName: 'Recommendations',
    navbarName: 'Recommendations',
    icon: WorkOutline,
    component: RecommendationsDashboard
  },
  {
    path: '/portfolioDashboard',
    sidebarName: 'Portfolio',
    navbarName: 'Portfolio',
    icon: Work,
    component: PortfolioDashboard
  },
  {
    path:'toggleModal',
    sidebarName: 'About Scholacity',
    navbarName: 'About Scholacity',
    icon: Info,
    component: Modal
  }
  
];

export default SidebarRouter;