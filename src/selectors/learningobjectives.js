// Get visible learning objectives

export default (learningobjectives, { text, sortBy, startDate, endDate }) => {
  return learningobjectives.filter((learningobjective) => {
    const textMatch = learningobjective.knowledgearea.toLowerCase().includes(text.toLowerCase());
    console.log(`inside selector for learningobjectives with ${text}`);
    console.log({text});
    return textMatch;
  }).sort((a, b) => {
      return a.knowledgearea < b.knowledgearea ? 1 : -1;
  });
};