import React from 'react';
import { connect } from 'react-redux';
import LearningObjectiveListItem from './LearningObjectiveListItem';
import selectLearningObjectives from '../selectors/learningobjectives';
import selectLOSelectionsForUser from '../selectors/learningobjective_userselect';
import selectLOCourses from '../selectors/learningobjective_course';
import selectCourses from '../selectors/courses';
import { startAddLOSelectionToUser, startRemoveLOSelectionFromUser } from '../actions/learningobjective_userselect';
import { startAddCourseRecommendation , startRemoveCourseRecommendation} from '../actions/courseRecommendations';
import * as firebase from 'firebase';
import { setUUIDFilter, setLOFilter } from '../actions/filters';
import selectCourseRecommendations from '../selectors/courserecommendations';

export class LearningObjectiveList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    userid: firebase.auth().currentUser.uid,
    learningobjectiveid: ''
   }
 
  handleChange = (learningobjectiveid,pairingId,knowledgearea,e) => {
    console.log(`e.state = ${e.target.checked}`);

    this.setState(() => ({learningobjectiveid}));
    this.props.setLOFilter(learningobjectiveid);
    console.log(`just set the lofilter with ${learningobjectiveid}`);
    console.log(`loFilter is ${this.props.filters.learningobjectiveid}`);

    if(e.target.checked===true)
    {
      const userid = firebase.auth().currentUser.uid;
      const loData = {learningobjectiveid: learningobjectiveid, userid: userid};

      this.props.startAddLOSelectionToUser(loData);

      var coursesFound = [];

      this.props.learningobjective_courses.map((learningobjective_course) => {
                
        if(loData.learningobjectiveid === learningobjective_course.learningobjectiveid)
        {
          this.props.courses.map((course) => {
            if(course.id === learningobjective_course.courseid)
            {
              if(!(coursesFound.includes(course.id)))
              {
                coursesFound.push(course.id);
                const userCourse = {userid: userid, 
                  courseid: learningobjective_course.courseid, 
                  learningobjectiveid: learningobjective_course.learningobjectiveid,
                  rating: '0', 
                  counter: '1', 
                  disposition: 'recommended',
                  knowledgearea: course.knowledgearea, 
                  coursename: course.name, 
                  coursedescription: course.description};

                this.props.startAddCourseRecommendation(userCourse);
              }
            }
    
          })
    
        }
      })
    }
    else
    {
      if(pairingId != 0)
      {
        const loPairing = {id: pairingId};
        this.props.startRemoveLOSelectionFromUser(loPairing);

        this.props.courserecommendations.map((courserecommendation) => {
           
          console.log(`courserecommendation.learningobjectiveid = ${courserecommendation.learningobjectiveid}`);
          console.log(`learningobjectiveid = ${learningobjectiveid}`);

          if(courserecommendation.learningobjectiveid === learningobjectiveid)
          {
            const recommendationPairing = {id: courserecommendation.id};

            this.props.startRemoveCourseRecommendation(recommendationPairing);
            console.log(`just called startRemoveCourseRecommendation with ${recommendationPairing.id}`);
          }
        })
      }
    }
    
  };

  getPairing(loId) {
    const pairing = this.props.learningobjective_userselects.find(p => p.learningobjectiveid === loId) || {id:0};
    return pairing.id;
  }

  render() {
    return (
      <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile"></div>
        <div className="show-for-mobile">Learning Outcome</div>
        <div className="show-for-desktop"></div>
        <div className="show-for-desktop">Knowledge Outcome</div>
      </div>
      <div className="list-body">
        {
          this.props.learningobjectives.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No Learning Objectives</span>
            </div>
          ) : (
              this.props.learningobjectives.map((learningobjective) => {
                
                if(this.props.content === learningobjective.knowledgearea)
                  {
                    const pairingId = this.getPairing(learningobjective.id);

                    learningobjective.selected = false;

                    if(pairingId != 0)
                      learningobjective.selected = true;

                    return <LearningObjectiveListItem key={learningobjective.id} {...learningobjective} pairingId={pairingId} selectCallback={this.handleChange} />;
                  }
              })
            )
        }
      </div>
    </div>
      )
  }};

const mapDispatchToProps = (dispatch) => ({
  startAddLOSelectionToUser: (loData) => dispatch(startAddLOSelectionToUser(loData)),
  startRemoveLOSelectionFromUser: (loPairing) => dispatch(startRemoveLOSelectionFromUser(loPairing)),
  startAddCourseRecommendation: (userCourse) => dispatch(startAddCourseRecommendation(userCourse)),
  startRemoveCourseRecommendation: (recommendationId) => dispatch(startRemoveCourseRecommendation(recommendationId)),
  setUUIDFilter: (userid) => dispatch(setUUIDFilter(userid)),
  setLOFilter: (learningobjectiveid) => dispatch(setLOFilter(learningobjectiveid))
});

const mapStateToProps = (state) => {
  return {
    learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters),
    learningobjective_courses: selectLOCourses(state.learningobjective_courses,state.filters),
    learningobjective_userselects: selectLOSelectionsForUser(state.learningobjective_userselects, firebase.auth().currentUser.uid),
    courserecommendations: selectCourseRecommendations(state.courserecommendations, state.filters),
    courses: selectCourses(state.courses, state.filters),
    filters: state.filters
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LearningObjectiveList);