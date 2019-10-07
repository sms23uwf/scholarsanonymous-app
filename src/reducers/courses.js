// Course Recommendations Reducer

const coursesReducerDefaultState = [];

export default (state = coursesReducerDefaultState, action) => {

  switch (action.type) {
    case 'SET_COURSES':
      return action.courses;
    default:
      return state;
  }
};