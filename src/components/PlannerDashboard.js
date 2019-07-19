import React from 'react';
import LearningObjectiveSummary from './LearningObjectiveSummary';
import LearningObjectivesCollapsible from './LearningObjectivesCollapsible';

const PlannerDashboard = () => (
  <div>
    <LearningObjectiveSummary />
    <LearningObjectivesCollapsible />
  </div>
);

export default PlannerDashboard;
