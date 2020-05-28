import React from 'react';
import LearningObjectiveSummary from './LearningObjectiveSummary';
import LearningObjectivesCollapsible from './LearningObjectivesCollapsible';
import LearningObjectiveListFilters from './LearningObjectiveListFilters';

const PlannerDashboard = () => (
  <div>
    <LearningObjectiveSummary />
    <LearningObjectiveListFilters/>
    <LearningObjectivesCollapsible />
  </div>
);

export default PlannerDashboard;
