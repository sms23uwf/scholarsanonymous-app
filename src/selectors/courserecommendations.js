import moment from 'moment';

// Get visible course recommendations

export default (courserecommendations, { disposition, sortBy, startDate, endDate }) => {
  return courserecommendations.sort((a, b) => {
    return a.knowledgearea > b.knowledgearea ? 1 : -1;
  });
};