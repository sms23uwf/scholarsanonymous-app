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

  recordRating = (id,rating,e) => {
    console.log(`inside recordRating with id: ${id}`);
    console.log(`inside recordRating with rating: ${rating}`);
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
                  <label>Disposition: {this.props.disposition}</label>
                </span>
                <span/>
              </div>
                  <form action="">
                    <label className="statement">How closely was this recommendation related to a selected Learning Outcome?</label>
                    <ul className='likert'>
                      <li>
                        <input type="radio" name="likert" value="0" onSelectCapture={(e) => this.recordRating(this.props.courserecommendation.id,value,e)}/>
                        <label>Not Related</label>
                      </li>
                      <li>
                      <input type="radio" name="likert" value="1" onSelectCapture={(e) => recordRating(this.props.courserecommendation.id,value,e)}/>
                      <label>Somewhat Related</label>
                      </li>
                      <li>
                      <input type="radio" name="likert" value="2" onSelectCapture={(e) => recordRating(this.props.courserecommendation.id,value,e)}/>
                      <label>Related</label>
                      </li>
                      <li>
                      <input type="radio" name="likert" value="3" onSelectCapture={(e) => recordRating(this.props.courserecommendation.id,value,e)}/>
                      <label>Closely Related</label>
                      </li>
                      <li>
                      <input type="radio" name="likert" value="4" onSelectCapture={(e) => recordRating(this.props.courserecommendation.id,value,e)}/>
                      <label>Spot On!</label>
                      </li>
                    </ul>
                  </form>
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