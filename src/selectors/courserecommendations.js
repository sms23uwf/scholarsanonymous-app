import moment from 'moment';

// Get visible course recommendations

export default (courserecommendations, { disposition, sortBy, startDate, endDate }) => {
  console.log(`disposition filter value is ${disposition}`);
  return courserecommendations.sort((a, b) => {
    return a.knowledgearea > b.knowledgearea ? 1 : -1;
  });
};