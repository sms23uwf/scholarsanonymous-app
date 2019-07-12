import React from 'react';
import moment from 'moment';

export default class CourseRecommendationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.courserecommendation ? props.courserecommendation.description : '',
      note: props.courserecommendation ? props.courserecommendation.note : '',
      knowledgearea: props.courserecommendation ? props.courserecommendation.knowledgearea : '',
      createdAt: props.courserecommendation ? moment(props.courserecommendation.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onKnowledgeAreaChange = (e) => {
    const knowledgearea = e.target.value;
    this.setState(() => ({ knowledgearea }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.knowledgearea) {
      this.setState(() => ({ error: 'Please provide course name and knowledgearea.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        knowledgearea: this.state.knowledgearea,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="KnowledgeArea"
          className="text-input"
          value={this.state.knowledgearea}
          onChange={this.onKnowledgeAreaChange}
        />
         <SingleDatePicker
           date={this.state.createdAt}
           onDateChange={this.onDateChange}
           focused={this.state.calendarFocused}
           onFocusChange={this.onFocusChange}
           numberOfMonths={1}
           isOutsideRange={() => false}
         />
        <textarea
          placeholder="Add a note for your recommendation (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Course Recommendation</button>
        </div>
      </form>
    )
  }
}
