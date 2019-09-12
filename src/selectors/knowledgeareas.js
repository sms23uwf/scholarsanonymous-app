// Get visible learning objectives

export default (knowledgeareas, { text }) => {
    return knowledgeareas.filter((knowledgearea) => {

      console.log(`inside selectKnowledgeAreas with ${ text }`);

      const textMatch = knowledgearea.content.toLowerCase().includes(text.toLowerCase());
  
      return textMatch;
    }).sort((a, b) => {
        return a.content > b.content ? 1 : -1;
    });
  };