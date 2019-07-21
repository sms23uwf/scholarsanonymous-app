import moment from 'moment';

// Get visible course recommendations

export default (courserecommendations, { text, sortBy, startDate, endDate }) => {
  console.log(`text filter value is ${text}`);
  return courserecommendations.filter((courserecommendation) => {
    const textMatch = courserecommendation.disposition.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    return a.knowledgearea > b.knowledgearea ? 1 : -1;
  });
};