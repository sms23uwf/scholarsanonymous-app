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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    padding: muiBaseTheme.spacing.unit * 2
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
  labelPlacementBottom: {
       justifyContent: 'space-between'
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  },
  group: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  }  
});

class CourseRecommendationListItem extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        showModal: false,
        currentRating: props.rating,
        currentTitle: props.knowledgearea + `: ` + props.coursename,
        currentAvatarUrl: this.setAvatarURL(props.rating),
        newRating: props.rating
      }
  }
  toggleModalWithSave = () => {
    console.log(`inside toggleModalWithSave`);
    if(this.state.showModal == true)
    {
      this.props.startSetCourseRecommendations();
    }

    if(this.state.newRating != this.state.currentRating)
      this.recordRating(this.props.courserecommendation.id, this.state.newRating, this.props.courserecommendation.courseid, this.props.courserecommendation.userid, this.props.courserecommendation.learningobjectives);

    this.setState({
      showModal: !this.state.showModal
    });
  }

  toggleModal = () => {
    console.log(`inside toggleModal`);
    this.setState({
      showModal: !this.state.showModal,
      newRating: this.state.currentRating
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

  handleRatingChange = event => {
    this.setState({newRating: event.target.value});
  }

  recordRating = (id,rating,courseid,userid,learningobjectives) => {
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
                  <FormControl component="fieldset" fullwidth="true">
                    <FormLabel component="legend" style={{ fontSize: '1.15em', fontWeight: `bold`, color: `#000000`}}>How does this recommendation relate to a selected Learning Outcome?</FormLabel>
                    <RadioGroup aria-label="rating" name="rating" value={this.state.newRating} onChange={this.handleRatingChange} className={"group"} row>
                      <FormControlLabel
                        value="0"
                        control={<Radio color="primary"/>}
                        label="Nothing"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio color="primary"/>}
                        label="Uncertain"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio color="primary"/>}
                        label="Good"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio color="primary"/>}
                        label="Better"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio color="primary"/>}
                        label="Best"
                        labelPlacement="bottom"
                      />
                    </RadioGroup>
                  </FormControl>
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