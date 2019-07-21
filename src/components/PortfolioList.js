import React from 'react';
import { connect } from 'react-redux';
import CourseRecommendationListItem from './CourseRecommendationListItem';
import selectCourseRecommendations from '../selectors/coursecompletions';

export const PortfolioList = (props) => (

  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Course Completions</div>
      <div className="show-for-desktop">Knowledge Area</div>
      <div className="show-for-desktop">Course</div>
    </div>
    <div className="list-body">
      {
        props.courserecommendations.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Courses Completed</span>
          </div>
        ) : (
            props.courserecommendations.map((courserecommendation) => {
              return <CourseRecommendationListItem key={courserecommendation.id} id={courserecommendation.id} {...courserecommendation} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    courserecommendations: selectCourseRecommendations(state.courserecommendations, state.filters)
  };
};

export default connect(mapStateToProps)(PortfolioList);
