import React from 'react';
import { connect } from 'react-redux';
import { setDispositionFilter, sortByKnowledgeArea, sortByContent } from '../actions/filters';

export class PortfolioListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.props.setDispositionFilter('completed');
  }

  state = {
    disposition: 'completed'
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
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
  setDispositionFilter: (disposition) => dispatch(setDispositionFilter(disposition)),
  sortByContent: () => dispatch(sortByContent()),
  sortByKnowledgeArea: () => dispatch(sortByKnowledgeArea()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioListFilters);