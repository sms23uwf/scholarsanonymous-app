import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

var checkboxChecked;
var shim = "  ";

const handleChange = (e) => {
  checkboxChecked = !checkboxChecked;
};

const LearningObjectiveListItem = ({ id, knowledgearea, content, selected }) => (
  <div>
    <span>
      <fieldset>
        <div className="list-item" width="1.0" key={id}>
          <Checkbox type="checkbox" id={id} name={id} label={shim + content} onCheckboxChange={handleChange}/>
        </div>
      </fieldset>
    </span>
  </div>
);

export default LearningObjectiveListItem;