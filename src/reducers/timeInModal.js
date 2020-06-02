
const timeInModalReducerDefaultState = [];

export default (state = timeInModalReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_USER_TIME_IN_MODAL':
      return [
        ...state,
        action.user_time_in_modal
      ];
    case 'SET_USER_TIME_IN_MODAL':
      return action.user_times_in_modals;
    default:
      return state;
  }
};