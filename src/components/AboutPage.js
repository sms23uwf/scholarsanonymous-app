import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from './Modal';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

require('bootstrap/dist/css/bootstrap.css');

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

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      avgRating: this.getAverageRating()
    }
  }


  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
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

  setTitleBasedOnRating = (rating) => {
    switch(rating) {
      case '0':
        return 'Average Rating: Rejected';
      case `1`:
        return `Average Rating: Undecided`;
      case `2`:
        return `Average Rating: Accepted`;
      case `3`:
        return `Average Rating: Accepted`;
      case `4`:
        return `Average Rating: Accepted`;
      default:
          return `Average Rating: ${rating}`;
    }
  }

  getAverageRating() {

    var count = 0;
    var total = 0;

    this.props.ratingsByUserCourseLO.map((ratingByUserCourselO) => {
      total+= parseInt(ratingByUserCourselO.rating);
      count++;
    });
    return parseInt((total/count)).toString();

  }

  render() {
    return (
      <div className="content-container-dashboard">
      <span id="image">
        <span id="image-inner">
        </span>
      </span>
      <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
          >
          <Card>
            <CardHeader avatar={<Avatar src={this.setAvatarURL(this.state.avgRating)} className={"avatar"}/>} titleTypographyProps={{variant:'h4'}} title={this.setTitleBasedOnRating(this.state.avgRating)}/>
            <CardContent>
              <Typography type="body2" style={{ fontSize: '1.25em', fontWeight: `bold`, color: `#000000`, textAlign: `left` }} gutterBottom>
                Scholacity is the combination of Scholarship and Tenacity. Scholacity is about the facilitation of Lifelong Learning.
              </Typography>
              <br/>
              <Divider/>
              <Typography type="body2" style={{ fontSize: '1.25em', fontWeight: `bold`, color: `#000000`, textAlign: `left` }} gutterBottom>
                From the "Planner" menu option - select one or more Learning Outcomes that are of interest. Then, Navigate to the "Recommendations" menu option and rate the recommendations that will have been subsequently provided vis-a-vis your selections. When you rate a recommendation as "related" or higher it will automatically go to the "Portfolio" page.
              </Typography>
            </CardContent>
          </Card>
          <br/>
          <br/>
          <Button title="Close" className="close_modal" onClick={this.toggleModal}>OK</Button>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ratingsByUserCourseLO: state.ratings_user_course_lo
  };
};

export default connect(mapStateToProps)(AboutPage);

