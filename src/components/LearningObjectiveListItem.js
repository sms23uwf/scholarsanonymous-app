import React from 'react';
import Checkbox from './Checkbox';

const LearningObjectiveListItem = ({ id, knowledgearea, content, selected, pairingId, selectCallback }) => (
  <div>
    <span>
      <fieldset>
        <div className="list-item" width="1.0" key={id}>
          <Checkbox type="checkbox" checked={selected} id={id} name={id} label={content} pairingId={pairingId} onCheckboxChange={(e) => selectCallback(id,pairingId,knowledgearea,e)}/>
        </div>
      </fieldset>
    </span>
  </div>
);

export default LearningObjectiveListItem;