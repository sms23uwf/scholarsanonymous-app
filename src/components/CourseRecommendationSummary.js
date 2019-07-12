import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectCourseRecommendations from '../selectors/courserecommendations';
import selectCourseRecommendationsTotal from '../selectors/courserecommendations-total';

export const CourseRecommendationSummary = ({ courseRecommendationCount, courseRecommendationTotal }) => {
  const courseRecommendationWord = courseRecommendationCount === 1 ? 'course recommendation' : 'course recommendations';
  const formattedCourseRecommendationsTotal = 1;

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing Course Recommendations</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Seek Recommendation</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleCourseRecommendations = selectCourseRecommendations(state.courserecommendations, state.filters);

  return {
    courseRecommendationsCount: visibleCourseRecommendations.length,
    courseRecommendationsTotal: selectCourseRecommendationsTotal(visibleCourseRecommendations)
  };
};

export default connect(mapStateToProps)(CourseRecommendationSummary);
