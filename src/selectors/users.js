import { statement } from "@babel/template";
import uuid from 'uuid';
import database from '../firebase/firebase';

// Get visible users

export default (users, { text }) => {
    
    console.log(`inside selectUsers with ${text}`);

    return users.filter((user) => {
      const textMatch = user.userid === text;
  
      return textMatch;
    }).sort((a, b) => {
      return a.content > b.content ? 1 : -1;
    });
  };