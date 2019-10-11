import * as firebase from 'firebase';

// Get visible course recommendations

const accepted = ['2','3','4'];

export default (courserecommendations, { userid }) => {
  return courserecommendations.filter((courserecommendation) => {
    const ratingMatch = accepted.includes(courserecommendations.rating);
    const textMatch = courserecommendations.userid === firebase.auth.uid;
    return textMatch;
  }).sort((a, b) => {
      return a.rating < b.rating ? 1 : -1;
  });
};