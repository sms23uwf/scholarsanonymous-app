import * as firebase from 'firebase';

// Get visible selections

  export default (recommendation_learningobjectives, { userId, learningobjectiveid }) => {
    return recommendation_learningobjectives.filter((recommendation_learningobjective) => {
        const loMatch = recommendation_learningobjective.learningobjectiveid === learningobjectiveid;
        //const textMatch = recommendation_learningobjective.userid === firebase.auth().currentUser.uid;
      return loMatch;
    });
  };