import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectKnowledgeAreas from '../selectors/knowledgeareas';
import selectKnowledgeAreasTotal from '../selectors/knowledgeareas-total';

export const KnowledgeAreasSummary = ({ knowledgeAreasCount, knowledgeAreasTotal }) => {
  const knowledgeAreasWord = knowledgeAreasCount === 1 ? 'knowledge area' : 'knowledge areas';
  const formattedKnowledgeAreasTotal = 1;

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Available Knowledge Areas</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Create Knowledge Area</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleKnowledgeAreas= selectKnowledgeAreas(state.knowledgeareas, state.filters);

  return {
    knowledgeAreasCount: visibleKnowledgeAreas.length,
    knowledgeAreasTotal: selectKnowledgeAreasTotal(visibleKnowledgeAreas)
  };
};

export default connect(mapStateToProps)(KnowledgeAreasSummary);
