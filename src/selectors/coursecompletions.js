import * as firebase from 'firebase';

// Get visible course recommendations

export default (courserecommendations, { userid, disposition }) => {
  return courserecommendations.filter((courserecommendation) => {
    const ratingMatch = courserecommendation.disposition.toLowerCase().includes("accepted");
    const textMatch = courserecommendations.userid === firebase.auth.uid;
    return ratingMatch && textMatch;
  }).sort((a, b) => {
      return a.rating < b.rating ? 1 : -1;
  });
};