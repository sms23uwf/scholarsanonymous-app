
const navigationEventsReducerDefaultState = [];

export default (state = navigationEventsReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_USER_NAVIGATION_EVENT':
      return [
        ...state,
        action.user_navigation_event
      ];
    case 'SET_USER_NAVIGATION_EVENT':
      return action.user_navigation_events;
    default:
      return state;
  }
};