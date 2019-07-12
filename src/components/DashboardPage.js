import React from 'react';
import KnowledgeAreaList from './KnowledgeAreaList';
import KnowledgeAreaListFilters from './KnowledgeAreaListFilters';
import KnowledgeAreaSummary from './KnowledgeAreaSummary';

import LearningObjectiveList from './LearningObjectiveList';
import LearningObjectiveListFilters from './LearningObjectiveListFilters';
import LearningObjectiveSummary from './LearningObjectiveSummary';

const DashboardPage = () => (
  <div>
    <LearningObjectiveSummary />
    <LearningObjectiveListFilters />
    <LearningObjectiveList />
  </div>
);

export default DashboardPage;
