import React from 'react';
import { connect } from 'react-redux';
import LearningObjectiveListItem from './LearningObjectiveListItem';
import selectLearningObjectives from '../selectors/learningobjectives';
import selectLOSelectionsForUser from '../selectors/learningobjective_userselect';
import { startAddLOSelectionToUser } from '../actions/learningobjective_userselect';
import { addLOSelectionToUser } from '../actions/learningobjective_userselect';
import * as firebase from 'firebase';
const database = firebase.database();

var checkboxChecked;

const handleChange = (id,e) => {
  checkboxChecked = e.target.checked;
  console.log(`e.state = ${e.target.checked}`);

  if(checkboxChecked===true)
  {
    const userId = firebase.auth().currentUser.uid;
    const loData = {learningobjectiveid: id, userid: userId};
    startAddLOSelectionToUser(loData);
  }
};

export const LearningObjectiveList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile"></div>
      <div className="show-for-mobile">Learning Outcome</div>
      <div className="show-for-desktop"></div>
      <div className="show-for-desktop">Knowledge Outcome</div>
    </div>
    <div className="list-body">
      {
        props.learningobjectives.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Learning Objectives</span>
          </div>
        ) : (
            props.learningobjectives.map((learningobjective) => {
              console.log(`selectLOSelectionsForUser count is ${props.learningobjective_userselects.length}`);
              
              if(props.content === learningobjective.knowledgearea)
                {
                  props.learningobjective_userselects.map((selection) => {
                    console.log(`selectLOSelectionsForUser with ${selection.learningobjectiveid}`);
                  })
                  return <LearningObjectiveListItem key={learningobjective.id} {...learningobjective} selectCallback={handleChange} />;
                }
            })
          )
      }
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddLOSelectionToUser: () => dispatch(startAddLOSelectionToUser()),
  selectLOSelectionsForUser: () => dispatch(selectLOSelectionsForUser()),
  addLOSelectionToUser: () => dispatch(addLOSelectionToUser())
});

const mapStateToProps = (state) => {
  return {
    learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters),
    learningobjective_userselects: selectLOSelectionsForUser(state.learningobjective_userselects, state.auth.uid)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningObjectiveList);