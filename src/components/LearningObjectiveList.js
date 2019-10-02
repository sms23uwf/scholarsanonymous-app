import React from 'react';
import { connect } from 'react-redux';
import LearningObjectiveListItem from './LearningObjectiveListItem';
import selectLearningObjectives from '../selectors/learningobjectives';
import selectLOSelectionsForUser from '../selectors/learningobjective_userselect';
import { startAddLOSelectionToUser } from '../actions/learningobjective_userselect';
import * as firebase from 'firebase';
import { setUUIDFilter } from '../actions/filters';
import { setLOFilter } from '../actions/filters';

export class LearningObjectiveList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    userid: firebase.auth().currentUser.uid
   }
 
  handleChange = (id,e) => {
    console.log(`e.state = ${e.target.checked}`);

    if(e.target.checked===true)
    {
      const userId = firebase.auth().currentUser.uid;
      const loData = {learningobjectiveid: id, userid: userId};
      this.props.startAddLOSelectionToUser(loData);
    }
  };

  render() {
    return (
      <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile"></div>
        <div className="show-for-mobile">Learning Outcome</div>
        <div className="show-for-desktop"></div>
        <div className="show-for-desktop">Knowledge Outcome</div>
      </div>
      <div className="list-body">
        {
          this.props.learningobjectives.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No Learning Objectives</span>
            </div>
          ) : (
              this.props.learningobjectives.map((learningobjective) => {
                
                if(this.props.content === learningobjective.knowledgearea)
                  {
                    //this.props.setLOFilter(learningobjective.id);
                    console.log(`selectLOSelectionsForUser count is ${this.props.learningobjective_userselects.length}`);
                    
                    //this.props.learningobjective_userselects.map((selection) => {
                    //  console.log(`selectLOSelectionsForUser with ${selection.learningobjectiveid}`);
                    //})
                    return <LearningObjectiveListItem key={learningobjective.id} {...learningobjective} selectCallback={this.handleChange} />;
                  }
              })
            )
        }
      </div>
    </div>
      )
  }};

    

const mapDispatchToProps = (dispatch) => ({
  startAddLOSelectionToUser: () => dispatch(startAddLOSelectionToUser()),
  //selectLOSelectionsForUser: () => dispatch(selectLOSelectionsForUser()),
  addLOSelectionToUser: () => dispatch(addLOSelectionToUser()),
  setUUIDFilter: (userid) => dispatch(setUUIDFilter(userid)),
  setLOFilter: () => dispatch(setLOFilter())
});

const mapStateToProps = (state) => {
  return {
    learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters),
    learningobjective_userselects: selectLOSelectionsForUser(state.learningobjective_userselects, firebase.auth().currentUser.uid),
    filters: state.filters
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LearningObjectiveList);