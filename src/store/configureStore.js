import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import courseRecommendationsReducer from '../reducers/courserecommendations';
import coursesReducer from '../reducers/courses';
import learningObjectivesReducer from '../reducers/learningobjectives';
import learningObjectivesUserSelectReducer from '../reducers/learningobjective_userselect';
import learningObjectiveCourseReducer from '../reducers/learningobjective_course';
import knowledgeAreasReducer from '../reducers/knowledgeareas.js';
import usersReducer from '../reducers/users.js';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      courserecommendations: courseRecommendationsReducer,
      courses: coursesReducer,
      learningobjectives: learningObjectivesReducer,
      learningobjective_userselects: learningObjectivesUserSelectReducer,
      knowledgeareas: knowledgeAreasReducer,
      learningobjective_courses: learningObjectiveCourseReducer,
      users: usersReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};