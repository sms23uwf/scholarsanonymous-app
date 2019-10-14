
const recommendationlearningObjectivesReducerDefaultState = [];

export default (state = recommendationlearningObjectivesReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_RECOMMENDATION_LO_PAIRING':
      return [
        ...state,
        action.recommendation_learningobjectives
      ];
    case 'REMOVE_RECOMMENDATION_LO_PAIRING':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_RECOMMENDATION_LO_PAIRINGS':
      return action.recommendation_learningobjectives;
    default:
      return state;
  }
};