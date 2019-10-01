import uuid from 'uuid';
import database from '../firebase/firebase';

export const addLOSelectionToUser = (learningobjective_userselects) => ({
  type: 'ADD_LO_USER_PAIRING',
  learningobjective_userselects
});

export const startAddLOSelectionToUser = (loData = {}) => {
  database.ref(`learningobjective_userselect`).push({...loData}).then((ref) => {
    addLOSelectionToUser({
      id: ref.key,
      ...loData
    });
  });
};

// REMOVE_LO_USER_PAIRING
export const removeLOSelectionFromUser = ({ id } = {}) => ({
  type: 'REMOVE_LO_USER_PAIRING',
  id
});

export const startRemoveLOSelectionFromUser = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`learningobjective_userselect/${id}`).remove().then(() => {
      dispatch(removeLOSelectionFromUser({ id }));
    });
  };
};


// SET_LO_USER_PAIRINGS
export const setLOSelectionsByUser = (learningobjective_userselects) => ({
  type: 'SET_LO_USER_PAIRINGS',
  learningobjective_userselects
});

export const startsetLOSelectionsByUser = () => {
  console.log(`inside startsetLOSelectionsByUser`);
  return (dispatch) => {
    
    return database.ref(`learningobjective_userselect`).once('value').then((snapshot) => {
      const learningobjective_userselects = [];

      snapshot.forEach((childSnapshot) => {
        learningobjective_userselects.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
      });

      dispatch(setLOSelectionsByUser(learningobjective_userselects));
    });
  };
};