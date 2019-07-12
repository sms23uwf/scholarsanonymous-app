import React from 'react';
import { Link } from 'react-router-dom';

const KnowledgeAreaListItem = ({ id, content }) => (
  <Link className="list-item" to={`/viewAssocLearningObjectives/${content}`}>
    <div>
      <span className="list-item__sub-title">{content}</span>
    </div>
  </Link>
);

export default KnowledgeAreaListItem;
