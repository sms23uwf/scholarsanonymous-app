import React from 'react';
import { connect } from 'react-redux';
import KnowledgeAreaListItem from './KnowledgeAreaListItem';
import selectKnowledgeAreas from '../selectors/knowledgeareas';

export const KnowledgeAreaList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Knowledge Areas</div>
      <div className="show-for-desktop">Knowledge Area</div>
    </div>
    <div className="list-body">
      {
        props.knowledgeareas.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Available Knowledge Areas</span>
          </div>
        ) : (
            props.knowledgeareas.map((knowledgearea) => {
              return <KnowledgeAreaListItem key={knowledgearea.id} {...knowledgearea} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    knowledgeareas: selectKnowledgeAreas(state.knowledgeareas, state.filters)
  };
};

export default connect(mapStateToProps)(KnowledgeAreaList);
