
const learningObjectiveCourseReducerDefaultState = [];

export default (state = learningObjectiveCourseReducerDefaultState, action) => {

  switch (action.type) {
    case 'SET_LO_COURSE_PAIRINGS':
      return action.learningobjective_courses;
    default:
      return state;
  }
};