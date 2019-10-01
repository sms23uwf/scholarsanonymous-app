
const learningObjectivesUserSelectReducerDefaultState = [];

export default (state = learningObjectivesUserSelectReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_LO_USER_PAIRING':
      return [
        ...state,
        action.learningobjective_userselects
      ];
    case 'REMOVE_LO_USER_PAIRING':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_LO_USER_PAIRINGS':
      return action.learningobjective_userselects;
    default:
      return state;
  }
};