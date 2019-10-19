
const ratingsByUserCourseLOSelectReducerDefaultState = [];

export default (state = ratingsByUserCourseLOSelectReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_USER_LO_COURSE_RATING':
      return [
        ...state,
        action.ratings_user_course_lo
      ];
    case 'SET_USER_LO_COURSE_RATING':
      return action.ratings_user_course_lo;
    default:
      return state;
  }
};