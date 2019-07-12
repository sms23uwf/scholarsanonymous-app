import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectLearningObjectives from '../selectors/learningobjectives';
import selectLearningObjectivesTotal from '../selectors/learningobjectives-total';

export const LearningObjectivesByKnowledgeAreaSummary = ({ learningObjectivesCount, learningObjectivesTotal }) => {
  const learningObjectivesWord = learningObjectivesCount === 1 ? 'learning objective' : 'learning objectives';
  const formattedLearningObjectivesTotal = 1;
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Select Desired Learning Outcomes</h1>
        <div className="page-header__actions">
          <Link className="button" to="/dashboard">Submit</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleLearningObjectives= selectLearningObjectives(state.learningobjectives, state.filters);

  return {
    learningObjectivesCount: visibleLearningObjectives.length,
    learningObjectivesTotal: selectLearningObjectivesTotal(visibleLearningObjectives)
  };
};

export default connect(mapStateToProps)(LearningObjectivesByKnowledgeAreaSummary);