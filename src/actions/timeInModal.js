import uuid from 'uuid';
import database from '../firebase/firebase';


// ADD_USER_TIME_IN_MODAL
export const addUserTimeInModal = (user_time_in_modal) => ({
    type: 'ADD_USER_TIME_IN_MODAL',
    user_time_in_modal
  });
  
 export const startAddUserTimeInModal = (timeData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            timeInModal = ``,
            userid = ``,
            disposition = ``,
            rating = ``
        } = timeData;
        const timeInModalData = { timeInModal, userid, disposition, rating };
    
        return database.ref(`users_tables/${uid}/time_in_modal`).push({...timeInModalData}).then((ref) => {
        dispatch(addUserTimeInModal({
            id: ref.key,
            ...timeInModalData
        }));
      });
    };
 };

// SET_USER_TIME_IN_MODAL
export const setUserTimeInModal = (user_times_in_modals) => ({
  type: 'SET_USER_TIME_IN_MODAL',
  user_times_in_modals
});

export const startSetUserTimeInModal = () => {
  console.log(`inside startSetUserTimeInModal`);
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users_tables/${uid}/time_in_modal`).once('value').then((snapshot) => {
      const timeInModalData = [];

      snapshot.forEach((childSnapshot) => {
        timeInModalData.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
      });

      dispatch(setRatingsByUserCourseLO(timeInModalData));
    });
  };
};