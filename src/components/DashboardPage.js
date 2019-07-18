import React from 'react';
import LearningObjectiveSummary from './LearningObjectiveSummary';
import LearningObjectivesCollapsible from './LearningObjectivesCollapsible';
import NavigationManu from './NavigationMenu';

const DashboardPage = () => (
  <div>
    <LearningObjectiveSummary />
    <LearningObjectivesCollapsible />
  </div>
);

export default DashboardPage;
