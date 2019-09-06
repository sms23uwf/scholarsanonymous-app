// Get visible learning objectives

export default (learningobjectives, { text, sortBy, startDate, endDate }) => {
  console.log("inside startSelectLearningObjectives");
  return learningobjectives.filter((learningobjective) => {
    const textMatch = learningobjective.knowledgearea.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
      return a.knowledgearea < b.knowledgearea ? 1 : -1;
  });
};