import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByKnowledgeArea, sortByContent } from '../actions/filters';

export class CourseRecommendationListFilters extends React.Component {
  state = {
    text: null
  };
  componentDidMount() {
    this.props.setTextFilter('');
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'knowledgearea') {
      this.props.sortByKnowledgeArea();
    } else if (e.target.value === 'content') {
      this.props.sortByContent();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByContent: () => dispatch(sortByContent()),
  sortByKnowledgeArea: () => dispatch(sortByKnowledgeArea()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseRecommendationListFilters);
