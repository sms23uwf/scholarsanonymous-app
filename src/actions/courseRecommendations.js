import uuid from 'uuid';
import database from '../firebase/firebase';

export const addCourseRecommendation = (courserecommendations) => ({
  type: 'ADD_COURSE_RECOMMENDATION',
  courserecommendations
});

export const startAddCourseRecommendation = (courseRecommendationData = {}) => {
  console.log(`inside startAddCourseRecommendation with userid ${courseRecommendationData.userid}`)
  console.log(`inside startAddCourseRecommendation with courseid ${courseRecommendationData.courseid}`)
  console.log(`inside startAddCourseRecommendation with rating ${courseRecommendationData.rating}`)
  console.log(`inside startAddCourseRecommendation with counter ${courseRecommendationData.counter}`)
  console.log(`inside startAddCourseRecommendation with knowledgearea ${courseRecommendationData.knowledgearea}`)
  console.log(`inside startAddCourseRecommendation with coursename ${courseRecommendationData.coursename}`)
  console.log(`inside startAddCourseRecommendation with coursedescription ${courseRecommendationData.coursedescription}`)
  //console.log(`inside startAddCourseRecommenation with learningobjective ${courseRecommendationData.learningobjectives[0].content}`)
  console.log(`inside startAddCourseRecommendation with existingRecommendation ${courseRecommendationData.existingrecommendationid}`)
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      userid = ``,
      courseid = ``,
      learningobjectiveid = ``,
      learningobjectives = {}, 
      rating = ``,
      counter = ``,
      disposition = ``,
      knowledgearea = ``,
      existingrecommendationid = ``,
      coursename = ``,
      coursedescription = ``
    } = courseRecommendationData;


    const courseUserPairing = { userid, courseid, learningobjectiveid, learningobjectives, rating, counter, disposition, knowledgearea, existingrecommendationid, coursename, coursedescription };

    if(existingrecommendationid === ``)
    {
      return database.ref(`courserecommendation`).push({...courseUserPairing}).then((ref) => {
        database.ref(`courserecommendation/${ref.key}`).child(`learningobjectives`).remove();
        var newLO = database.ref(`courserecommendation/${ref.key}`).child(`learningobjectives`).push();
        newLO.set({
          learningobjectiveid: learningobjectives[0].learningobjectiveid,
          content: learningobjectives[0].content
          })
 
        dispatch(addCourseRecommendation({
          id: ref.key,
          ...courseUserPairing
        }));
        const recommendationLoPairing = {recommendationid: ref.key, learningobjectiveid: learningobjectiveid, userid: userid };
        //database.ref(`recommendation_learningobjective`).push(recommendationLoPairing);
      });
    }
    else
    {
      var newLO = database.ref(`courserecommendation/${existingrecommendationid}`).child(`learningobjectives`).push();
      newLO.set({
        learningobjectiveid: learningobjectives[0].learningobjectiveid,
        content: learningobjectives[0].content
      })
    }
  };
};

// REMOVE_COURSE_RECOMMENDATION
export const removeCourseRecommendation = ({ id } = {}) => ({
  type: 'REMOVE_COURSE_RECOMMENDATION',
  id
});

export const startRemoveCourseRecommendation = (recommendationPairing = {}) => {
  console.log(`inside startRemoveCourseRecommendation with ${recommendationPairing}`)
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const id = recommendationPairing.id;
    
    return database.ref(`courserecommendation/${id}`).remove().then(() => {
      dispatch(removeCourseRecommendation({ id }));
    });
  };
};

// EDIT_COURSE_RECOMMENDATION
export const editCourseRecommendation = (id, updates) => ({
  type: 'EDIT_COURSE_RECOMMENDATION',
  id,
  updates
});

export const startEditCourseRecommendation = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`courserecommendation/${id}`).update(updates).then(() => {
      dispatch(editCourseRecommendation(id, updates));
    });
  };
};

// SET_COURSE_RECOMMENDATIONS
export const setCourseRecommendations = (courserecommendations) => ({
  type: 'SET_COURSE_RECOMMENDATIONS',
  courserecommendations
});

export const startSetCourseRecommendations = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`courserecommendation`).once('value').then((snapshot) => {
        const courserecommendations = [];

      snapshot.forEach((childSnapshot) => {
        courserecommendations.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setCourseRecommendations(courserecommendations));
    });
  };
};
