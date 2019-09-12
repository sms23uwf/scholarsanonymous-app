import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetCourseRecommendations } from './actions/courseRecommendations';
import { startSetLearningObjectives } from './actions/learningObjectives';
import { startSetKnowledgeAreas } from './actions/knowledgeAreas';
import { login, logout } from './actions/auth';
import { startSetUsers } from './actions/users';
import getVisibleCourseRecommendations from './selectors/courserecommendations';
import getVisibleLearningObjectives from './selectors/learningobjectives';
import getVisibleKnowledgeAreas from './selectors/knowledgeareas';
import InformedConsentModal from './components/InformedConsentModal';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { setUUIDFilter } from './actions/filters';

require ('../public/images/favicon.ico');

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (firebase.auth().currentUser) {
    console.log(`getting ready to set the UUID filter with ${firebase.auth().currentUser.uid}`);
    store.dispatch(setUUIDFilter(firebase.auth().currentUser.uid));
  }
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
    document.documentElement.requestFullscreen;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
firebase.auth().onIdTokenChanged(() => {
  if (firebase.auth().currentUser) {
    store.dispatch(setUUIDFilter(firebase.auth().currentUser.uid));
  }
  if (history.location.pathname === '/cancel') {
    history.push('/');
  }
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(setUUIDFilter(firebase.auth().currentUser.uid));

    store.dispatch(login(user.uid));
    store.dispatch(startSetCourseRecommendations());
    store.dispatch(startSetLearningObjectives());
    store.dispatch(startSetUsers());
    store.dispatch(startSetKnowledgeAreas()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
