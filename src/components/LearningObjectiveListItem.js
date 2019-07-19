import React from 'react';
import { Link } from 'react-router-dom';
//import Checkbox from './Checkbox';

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
    <span className="list-item">
      <div className="field" width="0.10">
        <div className="col-sm-12">
          <input
            name="checkbox"
            type="checkbox"
            onChange={handleChange}
          />  
        </div>
      </div>
      <Link className="list-item" to={`/edit/${id}`}>
          <div width="0.70">
            <span className="list-item__data">{content}</span>
          </div>
      </Link>
    </span>
  </div>
);

export default LearningObjectiveListItem;