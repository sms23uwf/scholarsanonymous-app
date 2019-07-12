import React from 'react';
import { connect } from 'react-redux';
import CourseRecommendationForm from './CourseRecommendationForm';
import { startAddCourseRecommendation } from '../actions/courserecommendations';

export class AddCourseRecommendationPage extends React.Component {
  onSubmit = (courserecommendations) => {
    this.props.startAddCoursRecommendation(courserecommendations);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Course Recommendation</h1>
          </div>
        </div>
        <div className="content-container">
          <CourseRecommendationForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddCourseRecommendation: (courserecommendations) => dispatch(startAddCourseRecommendation(courserecommendations))
});

export default connect(undefined, mapDispatchToProps)(AddCourseRecommendationPage);