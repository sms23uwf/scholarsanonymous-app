import { statement } from "@babel/template";
import uuid from 'uuid';
import database from '../firebase/firebase';
import * as firebase from 'firebase';

// Get visible selections

  export default (learningobjective_userselects, { userId }) => {
    return learningobjective_userselects;
    //return learningobjective_userselects.filter((learningobjective_userselect) => {
    //  const textMatch = learningobjective_userselect.userid === firebase.auth.uuid;
    //  return textMatch;
    //});

  };