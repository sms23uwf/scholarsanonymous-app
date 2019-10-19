import React from 'react';
import { connect } from 'react-redux';
import CourseRecommendationForm from './CourseRecommendationForm';
import { startSetCourseRecommendations, startEditCourseRecommendation } from '../actions/courseRecommendations';
import { startAddRatingsByUserCourseLO } from '../actions/ratingsByUserCourseLO';
import Modal from './Modal';
import Avatar from '@material-ui/core/Avatar';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import selectCourseRecommendations from '../selectors/courserecommendations';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

class CourseRecommendationListItem extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        showModal: false,
        currentRating: props.rating,
        currentTitle: props.knowledgearea + `: ` + props.coursename,
        currentAvatarUrl: this.setAvatarURL(props.rating)
      }
  }
  toggleModalWithSave = () => {
    console.log(`inside toggleModalWithSave`);
    if(this.state.showModal == true)
    {
      this.props.startSetCourseRecommendations();
    }
    this.setState({
      showModal: !this.state.showModal
    });
  }

  toggleModal = () => {
    console.log(`inside toggleModal`);
    this.setState({
      showModal: !this.state.showModal
    });
  }

  setDispositionBasedOnRating = (rating) => {
    switch(rating) {
      case '0':
        return 'Rejected';
      case `1`:
        return `Undecided`;
      case `2`:
        return `Accepted`;
      case `3`:
        return `Accepted`;
      case `4`:
        return `Accepted`;
      default:
          return ``;
    }
  }

  recordRating = (id,rating,courseid,userid,learningobjectives,e) => {
    this.setState({currentRating: rating});
    const ratingData = {rating: rating, disposition: this.setDispositionBasedOnRating(rating)};
    this.props.startEditCourseRecommendation(id, ratingData);
    this.setState({currentAvatarUrl: this.setAvatarURL(rating)});

    var loData = {...learningobjectives};

    Object.keys(loData).map((key) => {
      var currentLO = loData[key];
      const ratingCapture = {courseid: courseid, learningobjectiveid: currentLO.learningobjectiveid, userid: userid, rating: rating};
      this.props.startAddRatingsByUserCourseLO(ratingCapture);
    })
  }

  setAvatarURL = (rating) => {
      {
        switch(rating) {
          case '0':
            return '/images/verysad.png';
          case `1`:
              return `/images/sad.png`;
          case `2`:
              return `/images/justso.png`;
          case `3`:
               return `/images/happy.png`;
          case `4`:
            return `/images/veryhappy.png`;
          default:
              return ``;
        }
      }
  }

  render() {

    var reasonData = {...this.props.learningobjectives};
    const result = Object.keys(reasonData).map((key) => reasonData[key]);

    var reasons = [];
    result.forEach((reason) => (
      reasons.push(<li key={reason.learningobjectiveid}>{reason.content}</li>)
    ));

    return (
      <div>
      <Divider/>
        <CardActionArea onClick={this.toggleModalWithSave}>
          <Card>
            <CardHeader avatar={<Avatar src={this.state.currentAvatarUrl} className={"avatar"}/>} titleTypographyProps={{variant:'h4'}} title={this.state.currentTitle}/>
            <CardContent>
              <Typography className={"MuiTypography--content"} variant={"h6"} gutterBottom>
                {this.props.coursedescription}
              </Typography>
              <br/>
              <Divider/>
              <Typography className={"MuiTypography--content"} variant={"h6"} gutterBottom>
              Based on your selection of:
                <ul>
                  {reasons}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>

        <Modal
          show={this.state.showModal}
          //closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>
            <div>
              <div className="modal-header">
                <div className="content-container">
                  <h3 className="page-header__title">{this.props.knowledgearea}:{this.props.coursename}</h3>
                </div>
              </div>
              <div className="content-container">
                <span>
                <Typography type="body2" style={{ fontSize: '1.25em', fontWeight: `bold`, color: `#000000`, textAlign: `left` }} gutterBottom>
                  {this.props.coursedescription}
                </Typography>
                </span>
                <span>
                <Typography type="body2" style={{ fontSize: '1.5em', fontWeight: `bold`, color: `#000000`, textAlign: `center` }} gutterBottom>
                  Disposition: {this.props.disposition}
                </Typography>
                </span>
                <span/>
              </div>
                  <form action="">
                    <Typography type="body2" style={{ fontSize: '1.15em', fontWeight: `bold`, color: `#000000`, textAlign: `center` }} gutterBottom>
                     How closely was this recommendation related to a selected Learning Outcome?
                    </Typography>
                    <ul className='likert'>
                      <li>
                        <input type="radio" name="likert" value="0" checked={this.state.currentRating === "0"} onChange={(e) => this.recordRating(this.props.courserecommendation.id,"0", this.props.courserecommendation.courseid, this.props.courserecommendation.userid, this.props.courserecommendation.learningobjectives, e)}/>
                        <label style={{fontWeight: `bold`}}>Not Related</label>
                      </li>
                      <li>
                        <input type="radio" name="likert" value="1" checked={this.state.currentRating === "1"} onChange={(e) => this.recordRating(this.props.courserecommendation.id,"1", this.props.courserecommendation.courseid, this.props.courserecommendation.userid, this.props.courserecommendation.learningobjectives, e)}/>
                        <label style={{fontWeight: `bold`}}>Somewhat Related</label>
                      </li>
                      <li>
                        <input type="radio" name="likert" value="2" checked={this.state.currentRating === "2"} onChange={(e) => this.recordRating(this.props.courserecommendation.id,"2", this.props.courserecommendation.courseid, this.props.courserecommendation.userid, this.props.courserecommendation.learningobjectives, e)}/>
                        <label style={{fontWeight: `bold`}}>Related</label>
                      </li>
                      <li>
                        <input type="radio" name="likert" value="3" checked={this.state.currentRating === "3"} onChange={(e) => this.recordRating(this.props.courserecommendation.id,"3", this.props.courserecommendation.courseid, this.props.courserecommendation.userid, this.props.courserecommendation.learningobjectives, e)}/>
                        <label style={{fontWeight: `bold`}}>Closely Related</label>
                      </li>
                      <li>
                        <input type="radio" name="likert" value="4" checked={this.state.currentRating === "4"} onChange={(e) => this.recordRating(this.props.courserecommendation.id,"4", this.props.courserecommendation.courseid, this.props.courserecommendation.userid, this.props.courserecommendation.learningobjectives, e)}/>
                        <label style={{fontWeight: `bold`}}>Spot On!</label>
                      </li>
                    </ul>
                  </form>
                </div>
                <br/>
                <br/>
                <span>
                  <div>
                    <Grid
                    justify="center" 
                    container 
                    spacing={2}
                    >
                      <Grid item>
                        <Button
                          color="inherit"
                          aria-label="Accept"
                          style={{fontWeight: "bold"}}
                          title="Accept"
                          onClick={this.toggleModalWithSave}>OK</Button>
                      </Grid>
                      <Grid item>
                        <Button
                          color="inherit"
                          aria-label="Cancel"
                          style={{fontWeight: "bold"}}
                          title="Cancel"
                          onClick={this.toggleModal}>Cancel</Button>
                      </Grid>
                    </Grid>
                  </div>
                </span>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  courserecommendations: selectCourseRecommendations(state.courserecommendations, state.filters),
  courserecommendation: state.courserecommendations.find((courserecommendation) => courserecommendation.id === props.id),
  filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditCourseRecommendation: (id, ratingData) => dispatch(startEditCourseRecommendation(id, ratingData)),
  startSetCourseRecommendations: () => dispatch(startSetCourseRecommendations()),
  startAddRatingsByUserCourseLO: (ratingCapture) => dispatch(startAddRatingsByUserCourseLO(ratingCapture))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseRecommendationListItem);