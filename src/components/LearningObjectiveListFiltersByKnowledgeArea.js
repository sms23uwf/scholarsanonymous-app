import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class LearningObjectiveListFiltersByKnowledgeArea extends React.Component {
  //state = {
    //text: null,
  //};
  
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
            <input
              type="text"              
              className="text-input"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(LearningObjectiveListFiltersByKnowledgeArea);
