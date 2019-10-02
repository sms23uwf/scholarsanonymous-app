import React from 'react';
import Checkbox from './Checkbox';

const LearningObjectiveListItem = ({ id, knowledgearea, content, selected, selectCallback }) => (
  <div>
    <span>
      <fieldset>
        <div className="list-item" width="1.0" key={id}>
          <Checkbox type="checkbox" checked={selected} id={id} name={id} label={content} onCheckboxChange={(e) => selectCallback(id,e)}/>
        </div>
      </fieldset>
    </span>
  </div>
);

export default LearningObjectiveListItem;