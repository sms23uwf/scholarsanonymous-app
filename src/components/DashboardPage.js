import React from 'react';
import KnowledgeAreaList from './KnowledgeAreaList';
import KnowledgeAreaListFilters from './KnowledgeAreaListFilters';
import KnowledgeAreaSummary from './KnowledgeAreaSummary';

import LearningObjectiveList from './LearningObjectiveList';
import LearningObjectiveListFilters from './LearningObjectiveListFilters';
import LearningObjectiveSummary from './LearningObjectiveSummary';
import LearningObjectivesCollapsible from './LearningObjectivesCollapsible';

const DashboardPage = () => (
  <div>
    <LearningObjectiveSummary />
    <LearningObjectivesCollapsible />
  </div>
);

export default DashboardPage;
