import moment from 'moment';

// Get visible courses

export default (courses, { disposition, sortBy, startDate, endDate }) => {
  return courses.sort((a, b) => {
    return a.knowledgearea > b.knowledgearea ? 1 : -1;
  });
};