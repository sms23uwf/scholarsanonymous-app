import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';
import * as firebase from 'firebase';

var checkboxChecked;
var shim = "  ";
const database = firebase.database();

// const handleChange = (id,e) => {
//   checkboxChecked = !checkboxChecked;
  
//   if(checkboxChecked===true)
//   {
//     const userId = firebase.auth().currentUser.uid;
//     const loData = id;

//     // database.ref('learningobjective_userselect').push({
//     //   learningobjectiveid: id,
//     //   userid: userId
//     // }).then(() => {
//     //   console.log('learningobjective_userselected_1 added');
//     // }).catch((e) => {
//     //   console.log(`learningobjective_userselected_1 failed`);
//     // })  

//     props.startAddLOSelectionToUser(loData);
//   // console.log(`just calledstartAddLOselection`);
//   }
// };

const LearningObjectiveListItem = ({ id, knowledgearea, content, selected, selectCallback }) => (
  <div>
    <span>
      <fieldset>
        <div className="list-item" width="1.0" key={id}>
          <Checkbox type="checkbox" checked={selected} id={id} name={id} label={content} onCheckboxChange={(e) => selectCallback(id,e)}/>
        </div>
      </fieldset>
    </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddLOSelectionToUser: () => dispatch(startAddLOSelectionToUser()),
  selectLOSelectionsForUser: () => dispatch(selectLOSelectionsForUser())
});

export default connect(mapDispatchToProps)(LearningObjectiveListItem);