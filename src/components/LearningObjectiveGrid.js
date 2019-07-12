import React from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import selectLearningObjectives from '../selectors/learningobjectives';
import ReactDataGrid from 'react-data-grid';
import { Data } from 'react-data-grid-addons';
import { setTextFilter } from '../actions/filters';

export class LearningObjectiveGrid extends React.Component {
    constructor(props) {
    super(props);
    
    this._columns = [
      {key: 'knowledgearea', name: 'knowledge Area', resizable: true, width: 150, formatter: this.formattedCell},
      {key: 'content', name: 'Knowledge Outcome', resizable: true, formatter: this.formattedCell }
    ];

    const groupBy = ["knowledgearea"];
    
     let rows = [];
    //  props.learningobjectives.forEach(item => {
    //      rows.push({'id': item.id, 'knowledgearea': item.knowledgearea, 'content': item.content});
    //  });

    
    rows = props.learningobjectives.map(item => {
        return item = {'id': item.id, 'knowledgearea': item.knowledgearea, 'content': item.content};
    });

    this.state = {rows, selectedIndexes: [] };
     
  }

   formattedCell = ({ value }) => {
    return (
      <p className="grid-cell">{value}</p>
    );
  };

    rowGetter = i => {
        return this.state.rows[i];
    };    

    onRowsSelected = rows => {
        this.setState({
          selectedIndexes: this.state.selectedIndexes.concat(
            rows.map(r => r.rowIdx)
          )
        });
    };

    onRowsDeselected = rows => {
        let rowIndexes = rows.map(r => r.rowIdx);
        this.setState({
        selectedIndexes: this.state.selectedIndexes.filter(
            i => rowIndexes.indexOf(i) === -1
        )
        });
    };

    render() {
        return (
          <div  className="content-container">
            <ReactDataGrid
              rowKey="id"
              columns={this._columns}
              rowGetter={this.rowGetter}
              rowsCount={this.state.rows.length}
              minHeight={500}
              rowHeight={100}
              minColumnWidth={100}
              style={{'white-space':'unset'}}
              rowSelection={{
                showCheckbox: true,
                enableShiftSelect: true,
                onRowsSelected: this.onRowsSelected,
                onRowsDeselected: this.onRowsDeselected,
                selectBy: {
                  indexes: this.state.selectedIndexes
                }                
              }}
            />
          </div>
        );
      }
    }
    
const mapStateToProps = (state) => {
  return {
    learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters)
  };
};

export default connect(mapStateToProps)(LearningObjectiveGrid);
