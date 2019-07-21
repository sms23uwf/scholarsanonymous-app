// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SET_DISPOSITION_FILTER
export const setDispositionFilter = (disposition = '') => ({
  type: 'SET_DISPOSITION_FILTER',
  disposition
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_KNOWLEDGE_AREA
export const sortByKnowledgeArea = () => ({
  type: 'SORT_BY_KNOWLEDGE_AREA'
});

// SORT_BY_CONTENT
export const sortByContent = () => ({
  type: 'SORT_BY_CONTENT'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
