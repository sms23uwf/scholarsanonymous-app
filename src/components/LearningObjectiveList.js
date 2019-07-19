import React from 'react';
import { connect } from 'react-redux';
import LearningObjectiveListItem from './LearningObjectiveListItem';
import selectLearningObjectives from '../selectors/learningobjectives';

export const LearningObjectiveList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile"></div>
      <div className="show-for-mobile">Learning Outcome</div>
      <div className="show-for-desktop" className="list-item__title" className="center"></div>
      <div className="show-for-desktop" className="list-item__title" className="center">Knowledge Outcome</div>
    </div>
    <div className="list-body">
      {
        props.learningobjectives.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Learning Objectives</span>
          </div>
        ) : (
            props.learningobjectives.map((learningobjective) => {
              return <LearningObjectiveListItem key={learningobjective.id} {...learningobjective} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters)
  };
};

export default connect(mapStateToProps)(LearningObjectiveList);