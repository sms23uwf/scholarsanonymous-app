import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

var checkboxChecked;

const handleChange = (e) => {
  console.log('handle change');
  console.log(`handleChange with ${e}`);
  console.log(e);
  checkboxChecked = !checkboxChecked;
  console.log(`checkboxChecked = ${checkboxChecked}`);
};

const LearningObjectiveListItem = ({ id, knowledgearea, content, selected }) => (
  <div>
    <span>
      <fieldset>
        <div className="list-item" width="1.0" key={id}>
          <Checkbox type="checkbox" id={id} label={content} isSelected={checkboxChecked} onCheckboxChange={handleChange}/>
        </div>
      </fieldset>
    </span>
  </div>
);

export default LearningObjectiveListItem;