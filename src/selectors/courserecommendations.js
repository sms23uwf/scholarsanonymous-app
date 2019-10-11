import * as firebase from 'firebase';

// Get visible course recommendations

export default (courserecommendations, { userid }) => {
  return courserecommendations.filter((courserecommendation) => {
    const textMatch = courserecommendations.userid === firebase.auth.uid;
    return textMatch;
  }).sort((a, b) => {
      return a.rating < b.rating ? 1 : -1;
  });
};