import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import selectKnowledgeAreas from '../selectors/knowledgeareas';

let rows = [];

export class LearningObjectiveListFilters extends React.Component {
  //constructor(props) {
    //super(props);

   state = {
     selectedOption: [{id: 1, label: "Arts and Literature"}]
   };
      rows = this.props.knowledgeareas.map(item => {
        return item = {'value': item.id, 'label': item.content};
     });

  handleChange = selectedOption => {
      let selectedLabel = '';
      selectedOption.forEach(knowledearea => {
        selectedLabel = knowledearea.label;
      })

      this.setState({ selectedOption });
      var first = selectedOption[0];
      this.props.setTextFilter(selectedLabel);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <Select
              value={this.selectedOption}
              options={this.rows}
              onChange={(values) => this.handleChange(values)}
              placeholder='Select Knowledge Area'
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  knowledgeareas: selectKnowledgeAreas(state.knowledgeareas, state.filters),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(LearningObjectiveListFilters);
