import React from 'react';
import { connect } from 'react-redux';
import LearningObjectiveListItem from './LearningObjectiveListItem';
import selectLearningObjectives from '../selectors/learningobjectives';
import selectLOSelectionsForUser from '../selectors/learningobjective_userselect';
import { startAddLOSelectionToUser } from '../actions/learningobjective_userselect';
import { startRemoveLOSelectionFromUser } from '../actions/learningobjective_userselect';
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
 
  handleChange = (id,pairingId,e) => {
    console.log(`e.state = ${e.target.checked}`);

    if(e.target.checked===true)
    {
      const userid = firebase.auth().currentUser.uid;
      const loData = {learningobjectiveid: id, userid: userid};
      this.props.startAddLOSelectionToUser(loData);
    }
    else
    {
      if(pairingId != 0)
      {
        const loPairing = {id: pairingId};
        this.props.startRemoveLOSelectionFromUser(loPairing);
      }
    }
    
  };

  getPairing(loId) {
    const pairing = this.props.learningobjective_userselects.find(p => p.learningobjectiveid === loId) || {id:0};
    return pairing.id;
  }

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
                    const pairingId = this.getPairing(learningobjective.id);

                    learningobjective.selected = false;

                    if(pairingId != 0)
                      learningobjective.selected = true;

                    return <LearningObjectiveListItem key={learningobjective.id} {...learningobjective} pairingId={pairingId} selectCallback={this.handleChange} />;
                  }
              })
            )
        }
      </div>
    </div>
      )
  }};

    

const mapDispatchToProps = (dispatch) => ({
  startAddLOSelectionToUser: (loData) => dispatch(startAddLOSelectionToUser(loData)),
  startRemoveLOSelectionFromUser: (loPairing) => dispatch(startRemoveLOSelectionFromUser(loPairing)),
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