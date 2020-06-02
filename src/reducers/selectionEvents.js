
const selectionEventsReducerDefaultState = [];

export default (state = selectionEventsReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_USER_SELECTION_EVENT':
      return [
        ...state,
        action.user_selection_event
      ];
    case 'SET_USER_SELECTION_EVENT':
      return action.user_selection_events;
    default:
      return state;
  }
};