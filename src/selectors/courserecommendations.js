import * as firebase from 'firebase';

// Get visible course recommendations

export default (courserecommendations, { userid, disposition }) => {
  return courserecommendations.filter((courserecommendation) => {
    const recommendedMatch = courserecommendation.disposition.toLowerCase().includes("recommended");
    const undecidedMatch = courserecommendation.disposition.toLowerCase().includes("undecided");
    const rejectedMatch = courserecommendation.disposition.toLowerCase().includes("rejected");
    //const textMatch = courserecommendation.userid === firebase.auth().currentUser.uid;
    return (recommendedMatch || undecidedMatch || rejectedMatch);
  }).sort((a, b) => {
      return a.rating > b.rating ? 1 : -1;
  });
};

export const findExistingCourseRecommendation = (courserecommendations, {userid, courseid}) => {
  console.log(`inside findExistingCourseRecommendation with ${courseid}`);
  return courserecommendations.filter((courserecommendation) => {
    const courseMatch = courserecommendation.courseid === courseid;
    //const textMatch = courserecommendation.userid === firebase.auth().currentUser.uid;
    return courseMatch;
  }).sort((a, b) => {
      return a.rating < b.rating ? 1 : -1;
  });

};