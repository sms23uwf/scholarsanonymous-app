import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';
import selectKnowledgeAreas from '../selectors/knowledgeareas';
import selectLearningObjectives from '../selectors/learningobjectives';
import LearningObjectiveList from './LearningObjectiveList';
import { setTextFilter } from '../actions/filters';

const handleChange = (e) => {
    console.log('handle change');
    console.log(`handleChange with ${e}`);
    console.log(e);
    checkboxChecked = !checkboxChecked;
    console.log(`checkboxChecked = ${checkboxChecked}`);
 };
  

 export const LearningObjectivesCollapsible = (props) => (
    props.knowledgeareas.map(item => {
        return (
            <div className="content-container">

                <Collapsible key={item.id} title={item.content}>

                    <LearningObjectiveList />

                    <div className="list-body">  
                        {( () => {
                            props.learningobjectives.map(lo => {
                                if(lo.knowledgearea === item.content) 
                                {

                                    <span>
                                        <div className="list-item" key={lo.id}> 
                                            <div className="field" width="0.10">
                                                <div className="col-sm-12">
                                                    <input
                                                        name="checkbox"
                                                        type="checkbox"
                                                        onChange={handleChange}
                                                    />  
                                                </div>
                                            </div>
                                            <div className="list-item" key={lo.id}>
                                                <span className="list-item__data">{lo.content}</span>
                                            </div>
                                        </div>
                                    </span>
                                }
                            })
                        })()}
                    </div>
                </Collapsible>
            </div>
        )
    })
  );
  
  const mapStateToProps = (state) => {
    return {
      learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters),
      knowledgeareas: selectKnowledgeAreas(state.knowledgeareas, state.filters),
      checkboxChecked: false
    };
  };
  
  export default connect(mapStateToProps)(LearningObjectivesCollapsible);