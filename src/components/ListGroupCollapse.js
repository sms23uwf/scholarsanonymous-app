import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

class ListGroupCollapse extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    const title = this.props.title;
    return (
      <ListGroupItem>
        <div>
          <p onClick={this.toggle}>
            <strong>{title}</strong> 
          </p>
          <Collapse isOpen={this.state.collapse}>{cat.title}</Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

export default ListGroupCollapse