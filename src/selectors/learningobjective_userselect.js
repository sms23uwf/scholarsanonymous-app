import * as firebase from 'firebase';

// Get visible selections

  export default (learningobjective_userselects, { userId }) => {
    return learningobjective_userselects.filter((learningobjective_userselect) => {
      const textMatch = learningobjective_userselects.userid === firebase.auth.uid;
      return textMatch;
    });
  };