import React from 'react';
import { connect } from 'react-redux';
import CourseRecommendationForm from './CourseRecommendationForm';
import { startEditCourseRecommendation } from '../actions/courseRecommendations';
import Modal from './Modal';

class CourseRecommendationListItem extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        showModal: false
      }
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div>
        <button className="list-item" onClick={this.toggleModal}>
          <div>
            <span className="list-item__title">{this.props.knowledgearea}:  {this.props.coursename}</span>
          </div>
          <div>
            <span className="list-item__sub-title">{this.props.coursedescription}</span>
          </div>
        </button>
        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>
            <div>
              <div className="modal-header">
                <div className="content-container">
                  <h3 className="page-header__title">Course Details</h3>
                </div>
              </div>
              <div className="content-container">
                <span>
                  <label>{this.props.knowledgearea}</label>
                </span>
                <span>
                  <label>{this.props.coursename}</label>                
                </span>
                <span>
                  <label>{this.props.coursedescription}</label>
                </span>
                <span>
                  <label>{this.props.disposition}</label>
                </span>
              </div>
            </div>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  courserecommendation: state.courserecommendations.find((courserecommendation) => courserecommendation.id === props.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditCourseRecommendation: (id, courserecommendation) => dispatch(startEditCourseRecommendation(id, courserecommendation))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseRecommendationListItem);