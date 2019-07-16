import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';
import selectKnowledgeAreas from '../selectors/knowledgeareas';
import selectLearningObjectives from '../selectors/learningobjectives';

const handleChange = (e) => {
    console.log('handle change');
    console.log(`handleChange with ${e}`);
    console.log(e);
    checkboxChecked = !checkboxChecked;
    console.log(`checkboxChecked = ${checkboxChecked}`);
 };
  

 export const LearningObjectivesCollapsible = (props) => (
    //let strLo = `wwww`;

    props.knowledgeareas.map(item => {
        return (
            <div className="content-container">
                <Collapsible key={item.id} title={item.content}>

                    <div className="list-header">
                        <div className="show-for-mobile">Learning Outcome</div>
                        <div className="show-for-desktop">Learning Outcome</div>
                    </div>
                    <div className="list-body">
                        {
                            //( () => {  
                             //var arrLo = [];
                             
                             props.learningobjectives.map(lo => 
                                {
                                    if (lo.knowledgearea === item.content)
                                    {
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
                                    }
                                }
                            )

                            //return (<Fragment>{arrLo}</Fragment>);
 
                        
                           // })()
                        }

     
 
                    </div>
                </Collapsible>
            </div>
        );
    })
  );
  
  const mapStateToProps = (state) => {
    return {
      learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters),
      knowledgeareas: selectKnowledgeAreas(state.knowledgeareas, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(LearningObjectivesCollapsible);