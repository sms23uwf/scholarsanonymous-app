// Get visible course completions

export default (coursecompletions, { disposition, sortBy, startDate, endDate }) => {
  console.log(`disposition filter value is ${disposition}`);
  return coursecompletions.filter((courserecommendation) => {
    const textMatch = courserecommendation.disposition.toLowerCase().includes(disposition.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    return a.knowledgearea > b.knowledgearea ? 1 : -1;
  });
};