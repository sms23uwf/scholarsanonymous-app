import React from 'react';
import { connect } from 'react-redux';
import LearningObjectiveListFiltersByKnowledgeArea from './LearningObjectiveListFiltersByKnowledgeArea';
import LearningObjectiveSummary from './LearningObjectiveByKnowledgeAreaSummary';
import { startSelectLearningObjectives } from '../actions/learningObjectives';
import { setTextFilter } from '../actions/filters';

export class ViewLearningObjectivesPage extends React.Component {
  constructor(props)
  {
    super(props);
    setTextFilter(props.knowledgearea.content);
        
    console.log(`inside ViewLearningObjectivesPage with ${props.knowledgearea.content} and ${props.match.params.content}`);
  }

  

  // onSubmit = (knowledgearea) => {
  //   this.props.startSelectLearningObjectives(this.props.knowledgearea.content, knowledgearea);
  //   this.props.history.push('/');
  // };


  render() {
    return (
      <div>
        <LearningObjectiveSummary />
      </div>
    );
  }

};

const mapStateToProps = (state, props) => ({
  knowledgearea: state.knowledgeareas.find((knowledgearea) => knowledgearea.content === props.match.params.content)
});

const mapDispatchToProps = (dispatch, props) => ({
  startSetLearningObjectives: (content, knowledgearea) => dispatch(startSetLearningObjectives(content, knowledgearea))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewLearningObjectivesPage);

// const ViewLearningObjectivesPage = () => (
//   <div>
//     <LearningObjectiveSummary />
//   </div>
// );

// export default ViewLearningObjectivesPage;
