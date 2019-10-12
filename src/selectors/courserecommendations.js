import * as firebase from 'firebase';

// Get visible course recommendations

export default (courserecommendations, { userid, disposition }) => {
  return courserecommendations.filter((courserecommendation) => {
    const recommendedMatch = courserecommendation.disposition.toLowerCase().includes("recommended");
    const undecidedMatch = courserecommendation.disposition.toLowerCase().includes("undecided");
    const rejectedMatch = courserecommendation.disposition.toLowerCase().includes("rejected");
    const textMatch = courserecommendations.userid === firebase.auth.uid;
    return textMatch && (recommendedMatch || undecidedMatch || rejectedMatch);
  }).sort((a, b) => {
      return a.rating < b.rating ? 1 : -1;
  });
};